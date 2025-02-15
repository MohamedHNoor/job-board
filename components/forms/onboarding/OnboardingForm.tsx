'use client'

import { Logo } from '@/components/general/Logo'
import { Card, CardContent } from '@/components/ui/card'
import { User } from 'lucide-react'
import { use, useState } from 'react'
import { UserTypeSelectionForm } from './UserTypeForm'
import { CompanyForm } from './CompanyForm'
import { JobSeekerForm } from './JobSeekerForm'

type userSelectionType = 'company' | 'individual' | null

export function OnboardingForm() {
  const [step, setStep] = useState(1)
  const [userType, setUserType] = useState<userSelectionType>(null)

  function handleUserType(type: userSelectionType) {
    setUserType(type)
    setStep(2)
  }

  function renderStep() {
    switch (step) {
      case 1:
        return <UserTypeSelectionForm onSelection={handleUserType} />
      case 2:
        return userType === 'company' ? <CompanyForm /> : <JobSeekerForm />
      default:
        return null
    }
  }

  return (
    <>
      <div className='mb-10'>
        <Logo className='text-4xl gap-4' size={50} />
      </div>
      <Card className='max-w-lg w-full'>
        <CardContent className='p-6'>{renderStep()}</CardContent>
      </Card>
    </>
  )
}
