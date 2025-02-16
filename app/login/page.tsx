import { LoginForm } from '@/components/forms/LoginForm'
import { Logo } from '@/components/general/Logo'
import Link from 'next/link'

export default function Login() {
  return (
    <div className='min-h-screen w-screen flex items-center justify-center'>
      <div className='flex w-full max-w-sm flex-col gap-6 '>
        <Link href='/' className='self-center'>
          <Logo className='text-4xl gap-2' size={50} />
        </Link>
        <LoginForm />
      </div>
    </div>
  )
}
