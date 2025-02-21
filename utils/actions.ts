'use server'

import { requireUser } from './requireUser'
import { z } from 'zod'
import { CompanySchema, JobSeekerSchema } from './ZodSchemas'
import { prisma } from './db'
import { redirect } from 'next/navigation'
import arcjet, { detectBot, shield } from './arcjet'
import { request } from '@arcjet/next'

const aj = arcjet
  .withRule(
    shield({
      mode: 'LIVE',
    })
  )
  .withRule(
    detectBot({
      mode: 'LIVE',
      allow: [],
    })
  )

export async function createCompany(data: z.infer<typeof CompanySchema>) {
  const session = await requireUser()

  const req = await request()
  const decision = await aj.protect(req)

  if (decision.isDenied()) {
    throw new Error('Access denied')
  }

  const validateData = CompanySchema.parse(data)

  await prisma.user.update({
    where: {
      id: session.id,
    },
    data: {
      onboardingCompleted: true,
      userType: 'COMPANY',
      Company: {
        create: {
          ...validateData,
        },
      },
    },
  })
  return redirect('/')
}

export async function createJobSeeker(data: z.infer<typeof JobSeekerSchema>) {
  const session = await requireUser()

  const req = await request()
  const decision = await aj.protect(req)

  if (decision.isDenied()) {
    throw new Error('Access denied')
  }

  const validateData = JobSeekerSchema.parse(data)

  await prisma.user.update({
    where: {
      id: session.id,
    },
    data: {
      onboardingCompleted: true,
      userType: 'JOB_SEEKER',
      JobSeeker: {
        create: {
          ...validateData,
        },
      },
    },
  })
  return redirect('/')
}
