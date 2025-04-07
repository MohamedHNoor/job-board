import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { MenuBar } from './MenuBar'
import TextAlign from '@tiptap/extension-text-align'
import Typography from '@tiptap/extension-typography'

export function JobDescriptionEditor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Typography,
    ],
    immediatelyRender: false,
  })

  return (
    <div className='w-full'>
      <div className='w-full border rounded-lg overflow-hidden bg-card'>
        <MenuBar editor={editor} />
        <EditorContent editor={editor} />
      </div>
    </div>
  )
}
