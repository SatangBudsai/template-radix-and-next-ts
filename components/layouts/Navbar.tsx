"use client"

import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import Sidebar from './Sidebar'
import { Menu } from 'lucide-react'
import ToggleTheme from './ToggleTheme'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className='flex justify-between p-5 bg-background'>
            <div>Navbar</div>
            <div className='flex items-center gap-5'>
                <ToggleTheme />
                <div className='md:hidden'>
                    <Sheet>
                        <SheetTrigger>
                            <Menu className="h-7 w-7 mt-2" />
                        </SheetTrigger>
                        <SheetContent side={"left"} className='overflow-y-auto hidden-scrollbar'>
                            <Sidebar />
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    )
}

export default Navbar