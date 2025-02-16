import { FolderKanban } from 'lucide-react'

type LogoProps = {
  size?: number
  className?: string
}
export function Logo({ size = 40, className }: LogoProps) {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <FolderKanban size={size} className='text-primary' />
      <h1 className={`font-bold ${className}`}>
        Job<span className='text-primary'>Board</span>
      </h1>
    </div>
  )
}
