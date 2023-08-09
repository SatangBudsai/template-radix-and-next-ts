"use client"

import Link from 'next/link';
import router from 'next/router';
import Image from 'next/image';
import React, { Fragment, ReactNode } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Home, LayoutDashboard } from 'lucide-react';
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

export const MenuSidebar = () => {
    return (
        <Fragment>
            <div className='flex justify-center items-center gap-3 py-8'>
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
                    <div>Home</div>
                </MenuItem>
                <MenuItem path='/dashboard'>
                    <LayoutDashboard />
                    <div>Dashboard</div>
                </MenuItem>
            </div>
        </Fragment>)
}

const Sidebar = () => {
    return (
        <Card className='h-[100dvh] min-w-[16rem] z-10 sticky top-0 rounded-2xl drop-shadow-xl max-md:hidden'>
            <PerfectScrollbar className='px-3'>
                <MenuSidebar />
            </PerfectScrollbar>
        </Card>
    )
}

export default Sidebar