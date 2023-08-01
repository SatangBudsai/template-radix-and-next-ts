import RootLayout from '@/components/layouts/RootLayout'
import { Button } from '@/components/ui/button'
import React, { ReactElement } from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='text-4xl font-bold p-5 flex items-center gap-2'>
      Template Satang Code
      <Button>Click</Button>
    </div>
  )
}
export default Home

Home.getLayout = (page: ReactElement) => {
  return (<RootLayout>{page}</RootLayout>);
};