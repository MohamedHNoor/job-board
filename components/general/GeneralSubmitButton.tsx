'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'

type GeneralSubmitButtonProps = {
  text: string
  icon?: React.ReactNode
  variant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | undefined
    | null
  width?: string
}

export function GeneralSubmitButton({
  text,
  icon,
  variant,
  width = 'w-full',
}: GeneralSubmitButtonProps) {
  const { pending } = useFormStatus()

  return (
    <Button variant={variant} className={width}>
      {pending ? (
        <>
          <Loader2 className='size-4 animate-spin' />
          <span>Submitting...</span>
        </>
      ) : (
        <>
          {icon}
          <span>{text}</span>
        </>
      )}
    </Button>
  )
}
