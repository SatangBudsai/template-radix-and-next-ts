"use client"

import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '../../ui/sheet'
import { LogOut, Menu } from 'lucide-react'
import { MenuSidebar } from './Sidebar'
import SwicthThemes from '@/components/swicth-themes'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import router from 'next/router'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <nav className='pt-5 px-8 sticky bg-background top-0'>
            <Card className='flex justify-between items-center py-2 px-5 '>
                <div>
                    <div className='md:hidden'>
                        <Sheet>
                            <SheetTrigger>
                                <Menu className="h-7 w-7 mt-2" />
                            </SheetTrigger>
                            <SheetContent side={"left"} className='overflow-y-auto hidden-scrollbar w-[20rem]'>
                                <MenuSidebar />
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
                <div className='flex items-center gap-1'>
                    <SwicthThemes />
                    <Button variant={'ghost'} size="icon" onClick={() => router.push('/')}>
                        <LogOut className="h-[1.2rem] w-[1.2rem]" />
                    </Button>
                </div>
            </Card>
        </nav>
    )
}

export default Navbar