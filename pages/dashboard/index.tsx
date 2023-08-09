import MainLayout from '@/components/layouts/MainLayout'
import RootLayout from '@/components/layouts/RootLayout'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useRouter } from 'next/router'
import React, { Fragment, ReactElement } from 'react'

type Props = {}

const Dashboard = (props: Props) => {
    const router = useRouter()
    return (
        <Fragment>
            <Card className='p-5'>
                <div className='text-2xl font-semibold pb-5 pl-5 flex items-center gap-2'>
                    Dashboras
                    <Button variant={'default'}>A</Button>
                    <Button variant={'success'}>A</Button>
                    <Button variant={'warning'}>A</Button>
                    <Button variant={'danger'}>A</Button>
                    <Button variant={'outline'}>A</Button>
                    <Button variant={'secondary'}>A</Button>
                </div>
                <div>Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello </div>
            </Card>
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