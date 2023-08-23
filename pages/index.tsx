import MainLayout from '@/components/layouts/MainLayout'
import RootLayout from '@/components/layouts/RootLayout'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { useRouter } from 'next/router'
import React, { ReactElement, useState } from 'react'
import { DateRange } from 'react-day-picker'
import DatePicker from '@/components/ui/date-picker'
import DateMultiplePicker from '@/components/ui/date-multiple-picker'
import DateRangePicker from '@/components/ui/date-range-picker'
type Props = {}

const Home = (props: Props) => {
  const router = useRouter()
  const [date, setDate] = useState<Date | undefined>()
  const [arrDate, setArrDate] = useState<Date[] | undefined>()
  const [rangeDate, setRangeDate] = useState<DateRange | undefined>()

  return (
    <div className='flex flex-col gap-5'>
      <Button onClick={() => router.push("/dashboard")} >Dashboard</Button>
      <Calendar captionLayout='buttons' className='bg-card border rounded-xl w-fit' />
      <DatePicker
        mode="single"
        placeholder='Picker Date'
        selected={date}
        onSelect={setDate}
        initialFocus
      />
      <DateMultiplePicker
        mode="multiple"
        placeholder='Picker Date'
        captionLayout='dropdown-buttons'
        min={1}
        selected={arrDate}
        onSelect={setArrDate}
      />
      <DateRangePicker
        mode="range"
        placeholder='Picker Date'
        defaultMonth={rangeDate?.from}
        captionLayout='dropdown-buttons'
        selected={rangeDate}
        onSelect={setRangeDate}
        numberOfMonths={2}
      />
    </div >
  )
}
export default Home

Home.getLayout = (page: ReactElement) => {
  return (
    <RootLayout>
      <MainLayout>
        {page}
      </MainLayout>
    </RootLayout>
  );
};