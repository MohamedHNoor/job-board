import Link from 'next/link'
import { Button, buttonVariants } from '../ui/button'
import { ThemeToggle } from './ThemeToggle'
import { auth, signOut } from '@/utils/auth'
import { Logo } from './Logo'
import { UserDropdown } from './UserDropdown'

export async function Navbar() {
  const session = await auth()
  return (
    <nav className='flex items-center justify-between py-5'>
      <Link href='/'>
        <Logo className='text-2xl gap-2' size={40} />
      </Link>
      {/* desktop navigation */}

      <div className='hidden md:flex items-center gap-5'>
        <ThemeToggle />
        <Link href='/post-job' className={buttonVariants({ size: 'lg' })}>
          Post Job
        </Link>
        {session?.user ? (
          <UserDropdown
            email={session.user.email as string}
            name={session.user.name as string}
            image={session.user.image as string}
          />
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
