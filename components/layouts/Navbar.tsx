"use client"

import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import Sidebar from './Sidebar'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className='flex justify-between p-5 bg-background'>
            <div>Navbar</div>
            <div className='md:hidden'>
                <Sheet>
                    <SheetTrigger>Open</SheetTrigger>
                    <SheetContent side={"left"} className='overflow-y-auto hidden-scrollbar'>
                        <Sidebar />
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}

export default Navbar