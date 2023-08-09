"use client"

import Link from 'next/link';
import router from 'next/router';
import Image from 'next/image';
import React, { Fragment, ReactElement, ReactNode, useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { ChevronRight, Home, LayoutDashboard } from 'lucide-react';
import { Card } from '@/components/ui/card';

type MenuSidebarProp = {
    isOpened: boolean
}

export const MenuSidebar = (menuSidebarProps: MenuSidebarProp) => {
    type MenuItemProps = {
        path: string
        label: string
        icon: ReactElement
    }

    const MenuItem = (menuItemProps: MenuItemProps) => {
        const active = router.pathname === menuItemProps.path
        return (
            <Link
                href={menuItemProps.path}
                className={`flex items-center gap-2 text-lg h-10 pl-4 rounded-lg hover:pl-6 transition-all 
                ${active ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-secondary'}`}
            >
                <div className='flex items-center w-fit h-full'>
                    {menuItemProps.icon}
                </div>
                <div className={`${!menuSidebarProps?.isOpened && "hidden"}`}>{menuItemProps.label}</div>
            </Link>
        );
    };

    return (
        <Fragment>
            <div className='flex justify-center items-center gap-3 h-20'>
                <Image
                    src="/favicon.ico"
                    width={30}
                    height={30}
                    alt="logo"
                />
                <div className={`text-2xl font-bold text-primary ${!menuSidebarProps?.isOpened && "hidden"}`}>
                    TEMPLATE
                </div>
            </div>
            <div className='flex flex-col gap-3 pt-4'>
                <MenuItem path='/' label='Home' icon={<Home />} />
                <MenuItem path='/dashboard' label='Dashboard' icon={<LayoutDashboard />} />
            </div>
        </Fragment >)
}

const Sidebar = () => {
    const [isOpened, setIsOpened] = useState(true);
    return (
        <Card className={`h-[100dvh] transition-all z-10 sticky top-0 rounded-2xl drop-shadow-xl max-md:hidden
            ${isOpened ? "min-w-[16rem]" : "min-w-[5rem]"}`} >
            <PerfectScrollbar className='px-3'>
                <MenuSidebar isOpened={isOpened} />
            </PerfectScrollbar>
            <div
                className='absolute top-16 -right-6 bg-card p-2 rounded-full transition-all cursor-pointer'
                onClick={() => { (setIsOpened(!isOpened)) }}
            >
                <ChevronRight className={`h-8 w-8 transition-all ${isOpened && "rotate-180"}`} />
            </div>
        </Card>
    )
}

export default Sidebar