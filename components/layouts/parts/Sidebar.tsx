"use client"

import Link from 'next/link';
import router from 'next/router';
import Image from 'next/image';
import React, { Fragment, ReactNode, useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { ChevronRight, Home, LayoutDashboard } from 'lucide-react';
import { Card } from '@/components/ui/card';

type MenuLinkProps = {
    path: string
    children: ReactNode
}

const MenuItem = (menuLinkProps: MenuLinkProps) => {
    const active = router.pathname === menuLinkProps.path

    return (
        <Link
            href={menuLinkProps.path}
            className={`flex items-center gap-2 text-lg py-2 pl-4 rounded-lg hover:pl-6 transition-all
             ${active ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-secondary'}`}
        >
            {menuLinkProps.children}
        </Link>
    );
};

type MenuSidebarProp = {
    isOpened?: boolean
}

export const MenuSidebar = (menuSidebarProps: MenuSidebarProp) => {
    return (
        <Fragment>
            <div className='flex items-center gap-3 pl-5 py-8'>
                <Image
                    src="/favicon.ico"
                    width={30}
                    height={30}
                    alt="logo"
                />
                <div className='text-primary'>
                    <div className='text-2xl font-bold'>TEMPLATE</div>
                </div>
            </div>
            <div className='flex flex-col gap-3 pt-4'>
                <MenuItem path='/'>
                    <Home />
                    <div className={`transition-all ${menuSidebarProps?.isOpened ? "scale-100" : "scale-0"}`}>Home</div>
                </MenuItem>
                <MenuItem path='/dashboard'>
                    <LayoutDashboard />
                    <div className={`transition-all ${menuSidebarProps?.isOpened ? "scale-100" : "scale-0"}`}>Dashboard</div>
                </MenuItem>
            </div>
        </Fragment>)
}

const Sidebar = () => {
    const [isOpened, setIsOpened] = useState(true);
    return (
        <Card className={`h-[100dvh] transition-all ${isOpened ? " min-w-[16rem]" : "min-w-[10rem]"} z-10 sticky top-0 rounded-2xl drop-shadow-xl max-md:hidden`}>
            <PerfectScrollbar className='px-3'>
                <MenuSidebar isOpened={isOpened} />
            </PerfectScrollbar>
            <div className='absolute top-5 -right-6 bg-card p-3 rounded-full hover:scale-110 transition-all cursor-pointer'
                onClick={() => { (setIsOpened(!isOpened)) }}
            >
                <ChevronRight className={`h-8 w-8 transition-all ${isOpened && "rotate-180"}`} />
            </div>
        </Card>
    )
}

export default Sidebar