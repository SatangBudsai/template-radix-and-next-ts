import RootLayout from '@/components/layouts/RootLayout'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'

type Props = {}

const Home = (props: Props) => {
  const router = useRouter()
  return (
    <div className='text-4xl font-bold p-5 flex items-center gap-2'>
      Home Page
      <Button onClick={() => router.push("/dashboard")} > Dashboard</Button>
    </div >
  )
}
export default Home

Home.getLayout = (page: ReactElement) => {
  return (<RootLayout>{page}</RootLayout>);
};