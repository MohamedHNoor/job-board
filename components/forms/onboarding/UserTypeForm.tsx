import { Button } from '@/components/ui/button'
import { Building2, UserRound } from 'lucide-react'

type UserTypeSelectionFormProps = {
  onSelection: (type: 'company' | 'individual') => void
}

export function UserTypeSelectionForm({
  onSelection,
}: UserTypeSelectionFormProps) {
  return (
    <div className='space-y-8'>
      <div className='text-center space-y-2'>
        <h2 className='text-2xl font-bold'>Welcome! lets get started</h2>
        <p className='text-muted-foreground'>
          Choose how you would like to use our platform!
        </p>
      </div>
      <div className='grid gap-4'>
        <Button
          onClick={() => onSelection('company')}
          variant='outline'
          className='w-full h-auto p-6 items-center gap-4 border-2 transition-all duration-200 hover:border-primary hover:bg-primary/5'
        >
          <div className='size-12 rounded-full bg-primary/10 flex items-center justify-center'>
            <Building2 className='size-6 text-primary' />
          </div>
          <div className='text-left'>
            <h3 className='font-semibold text-lg'>Company / Organization</h3>
            <p className='text-muted-foreground'>
              Post jobs and find exceptional talents.
            </p>
          </div>
        </Button>
        <Button
          onClick={() => onSelection('individual')}
          variant='outline'
          className='w-full h-auto p-6 items-center gap-4 border-2 transition-all duration-200 hover:border-primary hover:bg-primary/5'
        >
          <div className='size-12 rounded-full bg-primary/10 flex items-center justify-center'>
            <UserRound className='size-6 text-primary' />
          </div>
          <div className='text-left'>
            <h3 className='font-semibold text-lg'>Individual / Job Seeker</h3>
            <p className='text-muted-foreground'>
              Find jobs and apply to your dream job.
            </p>
          </div>
        </Button>
      </div>
    </div>
  )
}
