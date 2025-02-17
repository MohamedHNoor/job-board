import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import Github from '../icons/Github'
import Google from '../icons/Google'
import { auth, signIn } from '@/utils/auth'
import { GeneralSubmitButton } from '../general/GeneralSubmitButton'
import { redirect } from 'next/navigation'

export async function LoginForm() {
  const session = await auth()
  if (session?.user) {
    return redirect('/')
  }
  return (
    <div className='flex flex-col gap-6'>
      <Card>
        <CardHeader className='text-center'>
          <CardTitle className='text-xl'>Welcome back</CardTitle>
          <CardDescription>Sign in to your account to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex flex-col gap-4'>
            <form
              action={async () => {
                'use server'
                await signIn('google', {
                  redirectTo: '/onboarding',
                })
              }}
            >
              <GeneralSubmitButton
                text='Login with Google'
                variant='outline'
                width='w-full'
                icon={<Google className='size-4' />}
              />
            </form>
            <form
              action={async () => {
                'use server'
                await signIn('github', {
                  redirectTo: '/onboarding',
                })
              }}
            >
              <GeneralSubmitButton
                text='Login with Github'
                variant='outline'
                width='w-full'
                icon={<Github className='size-4' />}
              />
            </form>
          </div>
        </CardContent>
        <CardFooter className='flex flex-col gap-4'>
          <p className='text-center'>
            Don't have an account?{' '}
            <a href='#' className='text-primary'>
              Sign up
            </a>
          </p>
          <p className='text-xs text-center text-muted-foreground text-balance'>
            By clicking continue, you agree to our{' '}
            <span className='font-semibold'>terms of service</span> and{' '}
            <span className='font-semibold'>privacy policy</span>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
