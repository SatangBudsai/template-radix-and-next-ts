import RootLayout from '@/components/layouts/RootLayout'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'

type Props = {}

const Dashboard = (props: Props) => {
    const router = useRouter()
    return (
        <div className='text-4xl font-bold p-5 flex items-center gap-2'>
            Dashboard Page
            <Button onClick={() => router.push("/")}>Home</Button>
        </div>
    )
}
export default Dashboard

Dashboard.getLayout = (page: ReactElement) => {
    return (<RootLayout>{page}</RootLayout>);
};