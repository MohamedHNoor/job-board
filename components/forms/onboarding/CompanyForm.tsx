import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CompanySchema } from '@/utils/ZodSchemas'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { countryList } from '@/utils/countriesList'
import { Textarea } from '@/components/ui/textarea'
import { UploadDropzone } from '@/utils/uploadthing'
import { createCompany } from '@/utils/actions'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { XIcon } from 'lucide-react'

export function CompanyForm() {
  const form = useForm<z.infer<typeof CompanySchema>>({
    resolver: zodResolver(CompanySchema),
    defaultValues: {
      name: '',
      location: '',
      about: '',
      logo: '',
      website: '',
      xAccount: '',
    },
  })

  const [loading, setLoading] = useState(false)

  async function onSubmit(data: z.infer<typeof CompanySchema>) {
    try {
      setLoading(true)
      await createCompany(data)
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
      <form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comapany Name</FormLabel>
                <FormControl>
                  <Input placeholder='Enter your company name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Location */}
          <FormField
            control={form.control}
            name='location'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select Location' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>World Wide</SelectLabel>
                      <SelectItem value='worldwide'>
                        <span>🌍</span> <span>World Wide/ Remote</span>
                      </SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Location</SelectLabel>
                      {countryList.map((country) => (
                        <SelectItem key={country.code} value={country.name}>
                          <span>{country.flagEmoji}</span>
                          <span className='pl-2'>{country.name}</span>
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* website */}
          <FormField
            control={form.control}
            name='website'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input placeholder='https://yourcompany.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* X account */}
          <FormField
            control={form.control}
            name='xAccount'
            render={({ field }) => (
              <FormItem>
                <FormLabel>X (Twitter) Account</FormLabel>
                <FormControl>
                  <Input placeholder='@yourcompany' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* about */}
        <FormField
          control={form.control}
          name='about'
          render={({ field }) => (
            <FormItem>
              <FormLabel>About</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Tell us about your company...'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Logo */}
        <FormField
          control={form.control}
          name='logo'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Logo</FormLabel>
              <FormControl>
                <div>
                  {field.value ? (
                    <div className='relative w-fit'>
                      <Image
                        src={field.value}
                        alt='Company Logo'
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
                      endpoint='imageUploader'
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
