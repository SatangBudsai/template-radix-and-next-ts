"use client"

import Link from 'next/link';
import router from 'next/router';
import Image from 'next/image';
import React, { Fragment, ReactNode } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Home, PanelTop, UserPlus, Users } from 'lucide-react';
import { Card } from '@/components/ui/card';

type MenuLinkProps = {
    path: string
    children: ReactNode
}

const MenuLink = (menuLinkProps: MenuLinkProps) => {
    const active = router.pathname === menuLinkProps.path

    return (
        <Link
            href={menuLinkProps.path}
            className={`flex items-center gap-2 text-base py-2 pl-3 rounded-lg hover:pl-6 transition-all ${active ? 'bg-primary text-primary-foreground font-medium' : 'text-foreground/80 hover:bg-secondary'}`}
        >
            {menuLinkProps.children}
        </Link>
    );
};

export const MenuSidebar = () => {
    return (
        <Fragment>
            <div className='flex justify-center items-center gap-3 py-5 border-b-2'>
                <Image
                    src="/favicon.ico"
                    width={35}
                    height={35}
                    alt="logo"
                />
                <div className='text-primary'>
                    <div className='text-2xl font-bold tracking-widest'>Template</div>
                </div>
            </div>
            <div className='flex flex-col gap-3 pt-4'>
                <MenuLink path='/'><Home /> หน้าหลัก </MenuLink>
            </div>
        </Fragment>)
}

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <div className='h-[100dvh] min-w-[16rem] z-10 sticky top-0 bg-background border drop-shadow-2xl max-md:hidden'>
            <PerfectScrollbar className='px-3'>
                <MenuSidebar />
            </PerfectScrollbar>
        </div>
    )
}

export default Sidebar