import Link from 'next/link'
import { Button } from '../ui/button'
import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  return (
    <nav className='flex items-center justify-between py-5'>
      <Link href='/'>
        <h1 className='text-2xl font-bold cursor-pointer'>
          Job <span className='text-primary'>Board</span>
        </h1>
      </Link>
      <div className='flex items-center space-x-4'>
        <ThemeToggle />
        <Button>Login</Button>
      </div>
    </nav>
  )
}
