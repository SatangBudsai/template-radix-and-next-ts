import MainLayout from '@/components/layouts/MainLayout'
import RootLayout from '@/components/layouts/RootLayout'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { DatePicker } from '@/components/ui/date-picker'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
type Props = {}

const Home = (props: Props) => {
  const router = useRouter()
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className='flex flex-col gap-5'>
      <Button onClick={() => router.push("/dashboard")} > Dashboard</Button>
      <DatePicker toYear={2025} />
      <Calendar captionLayout='dropdown-buttons' className='bg-card border rounded-xl w-fit' />
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