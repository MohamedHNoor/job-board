import { LoginForm } from '@/components/forms/LoginForm'
import Link from 'next/link'

export default function Login() {
  return (
    <div className='min-h-screen w-screen flex items-center justify-center'>
      <div className='flex w-full max-w-sm flex-col gap-6 '>
        <Link href='/' className='self-center'>
          <h1 className='text-2xl font-bold cursor-pointer'>
            Job <span className='text-primary'>Board</span>
          </h1>
        </Link>
        <LoginForm />
      </div>
    </div>
  )
}
