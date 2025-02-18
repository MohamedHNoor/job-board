'use server'

import { requireUser } from './requireUser'
import { z } from 'zod'
import { CompanySchema, JobSeekerSchema } from './ZodSchemas'
import { prisma } from './db'
import { redirect } from 'next/navigation'

export async function createCompany(data: z.infer<typeof CompanySchema>) {
  const session = await requireUser()

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
