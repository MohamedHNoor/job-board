import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { createJobSeeker } from '@/utils/actions'
import { UploadDropzone } from '@/utils/uploadthing'
import { JobSeekerSchema } from '@/utils/ZodSchemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { XIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import PdfImage from '@/public/pdf.png'

export function JobSeekerForm() {
  const form = useForm<z.infer<typeof JobSeekerSchema>>({
    resolver: zodResolver(JobSeekerSchema),
    defaultValues: {
      name: '',
      about: '',
      resume: '',
    },
  })

  const [loading, setLoading] = useState(false)

  async function onSubmit(data: z.infer<typeof JobSeekerSchema>) {
    try {
      setLoading(true)
      await createJobSeeker(data)
    } catch (error) {
      if (error instanceof Error && error.message !== 'NEXT_REDIRECT') {
        console.log('Something went wrong --- creating company')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder='Enter your full name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='about'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Short Bio</FormLabel>
              <FormControl>
                <Textarea placeholder='Tell us about yourself...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* resume */}
        <FormField
          control={form.control}
          name='resume'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Resume (PDF)</FormLabel>
              <FormControl>
                <div>
                  {field.value ? (
                    <div className='relative w-fit'>
                      <Image
                        src={PdfImage}
                        alt='PDF resume image'
                        width={100}
                        height={100}
                        className='rounded-lg'
                      />
                      <Button
                        type='button'
                        variant='destructive'
                        size='icon'
                        className='absolute -top-2 -right-2'
                        onClick={() => field.onChange('')}
                      >
                        <XIcon className='size-4' />
                      </Button>
                    </div>
                  ) : (
                    <UploadDropzone
                      endpoint='resumeUploader'
                      onClientUploadComplete={(res) => {
                        field.onChange(res[0].ufsUrl)
                        console.log('Client upload complete', res[0].ufsUrl)
                      }}
                      onUploadError={() => {
                        console.log('Upload error')
                      }}
                      className='ut-button:bg-primary ut-button:text-white ut-button:hover:bg-primary/90 ut-label:text-muted-foreground ut-allowed-content:text-muted-foreground border-primary'
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' disabled={loading} className='w-full'>
          {loading ? 'Loading...' : 'Continue'}
        </Button>
      </form>
    </Form>
  )
}
