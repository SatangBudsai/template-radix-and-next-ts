import MainLayout from '@/components/layouts/MainLayout'
import RootLayout from '@/components/layouts/RootLayout'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/router'
import React, { Fragment, ReactElement } from 'react'

type Props = {}

const Dashboard = (props: Props) => {
    const router = useRouter()
    return (
        <Fragment>
            <div className='text-4xl font-bold pb-5 pl-5 flex items-center gap-2'>
                Dashboard Page
                <Button variant='danger' onClick={() => router.push("/")}>Home</Button>
            </div>
            <div>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello </div>
        </Fragment>
    )
}
export default Dashboard

Dashboard.getLayout = (page: ReactElement) => {
    return (
        <RootLayout>
            <MainLayout>
                {page}
            </MainLayout>
        </RootLayout>
    );
};