import Link from 'next/link'
import { Button, buttonVariants } from '../ui/button'
import { ThemeToggle } from './ThemeToggle'
import { auth, signOut } from '@/utils/auth'

export async function Navbar() {
  const session = await auth()
  return (
    <nav className='flex items-center justify-between py-5'>
      <Link href='/'>
        <h1 className='text-2xl font-bold cursor-pointer'>
          Job <span className='text-primary'>Board</span>
        </h1>
      </Link>
      <div className='flex items-center space-x-4'>
        <ThemeToggle />
        {session?.user ? (
          <form
            action={async () => {
              'use server'
              await signOut({ redirectTo: '/' })
            }}
          >
            <Button>Logout</Button>
          </form>
        ) : (
          <Link
            href='/login'
            className={buttonVariants({ variant: 'outline', size: 'lg' })}
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}
