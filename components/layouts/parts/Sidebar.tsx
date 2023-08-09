"use client"

import Link from 'next/link';
import router from 'next/router';
import Image from 'next/image';
import React, { Fragment, ReactElement, ReactNode, useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { CircleDot, Component, Home, LayoutDashboard } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
            className={`flex items-center gap-2 text-base p-2 pl-4 rounded-xl hover:pl-6 transition-all 
                ${active ? 'bg-primary text-primary-foreground' : 'text-foreground hover:bg-secondary'}`}
        >
            <div className='flex items-center w-fit h-full'>
                {menuItemProps.icon}
            </div>
            <div>{menuItemProps.label}</div>
        </Link>
    );
};

export const MenuSidebar = () => {
    return (
        <Fragment>
            <div className='flex items-center gap-3 h-20'>
                <Image
                    src="/favicon.ico"
                    width={35}
                    height={35}
                    alt="logo"
                />
                <div className="text-4xl font-bold">
                    R&N
                </div>
            </div>
            <div className='flex flex-col gap-3 pt-4'>
                <MenuItem path='/' label='Home' icon={<Home />} />
                <MenuItem path='/dashboard' label='Dashboard' icon={<LayoutDashboard />} />
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <div className='flex items-center gap-2 text-lg pl-4'>
                                <Component />
                                <div className=' text-base'>Component</div>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <MenuItem path='/a' label='Dashboard' icon={<CircleDot />} />
                            <MenuItem path='/b' label='Dashboard' icon={<CircleDot />} />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </Fragment >)
}

const Sidebar = () => {
    return (
        <div className='max-md:hidden'>
            <Card className="h-[100dvh] min-w-[16rem] rounded-none transition-all sticky top-0 z-10" >
                <PerfectScrollbar className='px-5'>
                    <MenuSidebar />
                </PerfectScrollbar>
            </Card>
        </div>
    )
}

export default Sidebar