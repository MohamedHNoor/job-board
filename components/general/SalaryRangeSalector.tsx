import { Control, useController } from 'react-hook-form'
import { Slider } from '../ui/slider'
import { useState } from 'react'
import { FormatCurrency } from '@/utils/formatCurrency'

type SalaryRangeSelectorProps = {
  control: Control<any>
  minSalary: number
  maxSalary: number
  step: number
  currency: string
}

export function SalaryRangeSelector({
  control,
  minSalary,
  maxSalary,
  step,
  currency,
}: SalaryRangeSelectorProps) {
  const { field: fieldFrom } = useController({
    name: 'salaryFrom',
    control,
  })

  const { field: fieldTo } = useController({
    name: 'salaryTo',
    control,
  })

  const [range, setRange] = useState<[number, number]>([
    fieldFrom.value || minSalary,
    fieldTo.value || maxSalary / 2,
  ])

  const handleRangeChange = (value: [number, number]) => {
    const newRange: [number, number] = [value[0], value[1]]
    setRange(newRange)
    fieldFrom.onChange(newRange[0])
    fieldTo.onChange(newRange[1])
  }

  return (
    <div className='w-full space-y-4'>
      <Slider
        onValueChange={handleRangeChange}
        min={minSalary}
        max={maxSalary}
        step={step}
        value={range}
      />
      <div className='flex justify-between'>
        <span>{FormatCurrency(range[0])}</span>
        <span>{FormatCurrency(range[1])}</span>
      </div>
    </div>
  )
}
