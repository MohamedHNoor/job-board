import { z } from 'zod'

export const CompanySchema = z.object({
  name: z.string().min(2, 'Company name must be at least 2 characters long'),
  location: z.string().min(1, 'Location must be defined'),
  about: z
    .string()
    .min(10, 'Please provide some information about your company'),
  logo: z.string().min(1, 'Please upload a logo'),
  website: z.string().url('Please provide a valid URL'),
  xAccount: z.string().optional(),
})

export const JobSeekerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  about: z.string().min(10, 'Please provide some information about yourself'),
  resume: z.string().min(1, 'Please upload your resume'),
})

export const JobSchema = z.object({
  jobTitle: z.string().min(2, 'Job title must be at least 2 characters long'),
  employmentType: z.string().min(1, 'Please select an employment type'),
  location: z.string().min(1, 'Please select a location'),
  salaryFrom: z.number().min(1, 'Salary from is required'),
  salaryTo: z.number().min(1, 'Salary to is required'),
  jobDescription: z.string().min(1, 'Job description is required'),
  listingDuration: z.number().min(1, 'Listing duration is required'),
  benefits: z.array(z.string()).min(1, 'Please select at least one benefit'),
  companyName: z.string().min(1, 'Company name is required'),
  companyLocation: z.string().min(1, 'Company location is required'),
  companyLogo: z.string().min(1, 'Company logo is required'),
  companyWebsite: z.string().min(1, 'Company website is required'),
  companyXAccount: z.string().optional(),
  companyDescription: z.string().min(1, 'Company description is required'),
  companyAbout: z.string().min(1, 'Company about is required'),
})
