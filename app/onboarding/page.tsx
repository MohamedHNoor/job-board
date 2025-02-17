import { OnboardingForm } from '@/components/forms/onboarding/OnboardingForm'
import { prisma } from '@/utils/db'
import { requireUser } from '@/utils/requireUser'
import { redirect } from 'next/navigation'

async function checkIfUserCompletedOnboarding(userId: string) {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      onboardingCompleted: true,
    },
  })
  if (user?.onboardingCompleted === true) {
    return redirect('/')
  }

  return user
}

export default async function OnboardingPage() {
  const session = await requireUser()
  await checkIfUserCompletedOnboarding(session.id as string)

  return (
    <div className='min-h-screen w-screen flex flex-col items-center justify-center py-10'>
      <OnboardingForm />
    </div>
  )
}
