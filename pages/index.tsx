import MainLayout from '@/components/layouts/MainLayout'
import RootLayout from '@/components/layouts/RootLayout'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
type Props = {}

const Home = (props: Props) => {
  const router = useRouter()
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className='text-4xl font-bold p-5 flex items-center gap-2'>
      Home Page
      <Button onClick={() => router.push("/dashboard")} > Dashboard</Button>
      <Calendar
        mode="single"
        captionLayout='dropdown-buttons'
        fromYear={2000}
        toYear={2023}
        selected={date}
        onSelect={setDate}
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