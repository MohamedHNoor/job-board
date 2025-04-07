'use client'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { JobSchema } from '@/utils/ZodSchemas'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'
import { SelectLabel } from '@radix-ui/react-select'
import { countryList } from '@/utils/countriesList'
import { SalaryRangeSelector } from '../general/SalaryRangeSalector'
import { JobDescriptionEditor } from '../richTextEditors/JobDescriptionEditor'

export function CreateJobForm() {
  const form = useForm<z.infer<typeof JobSchema>>({
    resolver: zodResolver(JobSchema),
    defaultValues: {
      jobTitle: '',
      employmentType: '',
      location: '',
      salaryFrom: 0,
      salaryTo: 0,
      jobDescription: '',
      listingDuration: 30,
      benefits: [],
      companyName: '',
      companyLocation: '',
      companyLogo: '',
      companyWebsite: '',
      companyXAccount: '',
      companyDescription: '',
      companyAbout: '',
    },
  })
  return (
    <Form {...form}>
      <form className='col-span-1 lg:col-span-2 flex flex-col gap-8'>
        <Card>
          <CardHeader>
            <CardTitle>Job Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* job title */}
              <FormField
                control={form.control}
                name='jobTitle'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Title</FormLabel>
                    <FormControl>
                      <Input placeholder='Job title' {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* employment type */}
              <FormField
                control={form.control}
                name='employmentType'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Employment Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select employment type' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Employment Type</SelectLabel>
                          <SelectItem value='full-time'>Full Time</SelectItem>
                          <SelectItem value='part-time'>Part Time</SelectItem>
                          <SelectItem value='contract'>Contract</SelectItem>
                          <SelectItem value='internship'>Internship</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* location */}
              <FormField
                control={form.control}
                name='location'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Job Location</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder='Select location' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Worldwide</SelectLabel>
                          <SelectItem value='worldwide'>
                            <span>🌍</span>
                            <span className='pl-2'>Worldwide / Remote</span>
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
              {/* salary */}
              <FormItem>
                <FormLabel>Salary Range</FormLabel>
                <FormControl>
                  <SalaryRangeSelector
                    control={form.control}
                    maxSalary={1000000}
                    minSalary={10000}
                    step={2000}
                    currency='NZD'
                  />
                </FormControl>
              </FormItem>
            </div>
            {/* job description */}
            <FormField
              control={form.control}
              name='jobDescription'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Description</FormLabel>
                  <FormControl>
                    <JobDescriptionEditor />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>
      </form>
    </Form>
  )
}
