import React, { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'

type Props = {
    children: ReactNode
}

const MainLayout = (props: Props) => {
    return (
        <div className="flex flex-row min-h-screen max-w-screen ">
            <Sidebar />
            <div className="flex-grow">
                <div className='flex flex-col min-h-screen '>
                    <Navbar />
                    <div className="flex-grow">
                        <main className="p-5">
                            {props.children}
                        </main>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default MainLayout