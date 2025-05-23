import { Editor } from '@tiptap/react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip'
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  ListIcon,
  ListOrdered,
  Strikethrough,
} from 'lucide-react'
import { Toggle } from '../ui/toggle'
import { cn } from '@/lib/utils'

type MenuBarProps = {
  editor: Editor | null
}

export function MenuBar({ editor }: MenuBarProps) {
  if (!editor) return null

  return (
    <div className='border rounded-t-lg bg-card p-2 flex flex-wrap gap-1 items-center'>
      <TooltipProvider>
        <div className='flex flex-wrap gap-1'>
          {/* bold */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size={'sm'}
                pressed={editor.isActive('bold')}
                onPressedChange={() =>
                  editor.chain().focus().toggleBold().run()
                }
                className={cn(
                  editor.isActive('bold') && 'bg-muted text-muted-foreground'
                )}
              >
                <Bold />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Bold</TooltipContent>
          </Tooltip>
          {/* italic */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size={'sm'}
                pressed={editor.isActive('italic')}
                onPressedChange={() =>
                  editor.chain().focus().toggleItalic().run()
                }
                className={cn(
                  editor.isActive('italic') && 'bg-muted text-muted-foreground'
                )}
              >
                <Italic />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Italic</TooltipContent>
          </Tooltip>
          {/* strike */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size={'sm'}
                pressed={editor.isActive('strike')}
                onPressedChange={() =>
                  editor.chain().focus().toggleStrike().run()
                }
                className={cn(
                  editor.isActive('strike') && 'bg-muted text-muted-foreground'
                )}
              >
                <Strikethrough />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Strike</TooltipContent>
          </Tooltip>
          {/* Heading 1 */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size={'sm'}
                pressed={editor.isActive('heading', { level: 1 })}
                onPressedChange={() =>
                  editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={cn(
                  editor.isActive('heading', { level: 1 }) &&
                    'bg-muted text-muted-foreground'
                )}
              >
                <Heading1 />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Heading 1</TooltipContent>
          </Tooltip>
          {/* Heading 2 */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size={'sm'}
                pressed={editor.isActive('heading', { level: 2 })}
                onPressedChange={() =>
                  editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className={cn(
                  editor.isActive('heading', { level: 2 }) &&
                    'bg-muted text-muted-foreground'
                )}
              >
                <Heading2 />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Heading 2</TooltipContent>
          </Tooltip>
          {/* Heading 2 */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size={'sm'}
                pressed={editor.isActive('heading', { level: 3 })}
                onPressedChange={() =>
                  editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
                className={cn(
                  editor.isActive('heading', { level: 3 }) &&
                    'bg-muted text-muted-foreground'
                )}
              >
                <Heading3 />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Heading 3</TooltipContent>
          </Tooltip>
          {/* Bullet List */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size={'sm'}
                pressed={editor.isActive('bulletList')}
                onPressedChange={() =>
                  editor.chain().focus().toggleBulletList().run()
                }
                className={cn(
                  editor.isActive('bulletList') &&
                    'bg-muted text-muted-foreground'
                )}
              >
                <ListIcon />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Bullet List</TooltipContent>
          </Tooltip>
          {/* Ordered List */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size={'sm'}
                pressed={editor.isActive('orderedList')}
                onPressedChange={() =>
                  editor.chain().focus().toggleOrderedList().run()
                }
                className={cn(
                  editor.isActive('orderedList') &&
                    'bg-muted text-muted-foreground'
                )}
              >
                <ListOrdered />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Ordered List</TooltipContent>
          </Tooltip>
        </div>
        {/* vertical border */}
        <div className='w-px h-6 bg-border mx-2' />
        {/* text align */}
        <div className='flex flex-wrap gap-1'>
          {/* Align Left */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size={'sm'}
                pressed={editor.isActive({ textAlign: 'left' })}
                onPressedChange={() =>
                  editor.chain().focus().setTextAlign('left').run()
                }
                className={cn(
                  editor.isActive({ textAlign: 'left' }) &&
                    'bg-muted text-muted-foreground'
                )}
              >
                <AlignLeft />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Align Left</TooltipContent>
          </Tooltip>
          {/* Align Center */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size={'sm'}
                pressed={editor.isActive({ textAlign: 'center' })}
                onPressedChange={() =>
                  editor.chain().focus().setTextAlign('center').run()
                }
                className={cn(
                  editor.isActive({ textAlign: 'center' }) &&
                    'bg-muted text-muted-foreground'
                )}
              >
                <AlignCenter />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Align Center</TooltipContent>
          </Tooltip>
          {/* Align Right */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Toggle
                size={'sm'}
                pressed={editor.isActive({ textAlign: 'right' })}
                onPressedChange={() =>
                  editor.chain().focus().setTextAlign('right').run()
                }
                className={cn(
                  editor.isActive({ textAlign: 'right' }) &&
                    'bg-muted text-muted-foreground'
                )}
              >
                <AlignRight />
              </Toggle>
            </TooltipTrigger>
            <TooltipContent>Align Right</TooltipContent>
          </Tooltip>
        </div>
        {/* vertical border */}
        <div className='w-px h-6 bg-border mx-2' />
      </TooltipProvider>
    </div>
  )
}
