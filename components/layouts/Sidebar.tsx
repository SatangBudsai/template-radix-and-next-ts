"use client"

import React, { Fragment } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

type Props = {}

export const MenuSidebar = () => {
    return (<Fragment>
        <div className='flex justify-center pt-5'>Sidebar</div>
        <div className='p-5'>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
            <div>namemenu</div>
        </div>
    </Fragment>)
}

const Sidebar = (props: Props) => {
    return (
        <div className='max-h-screen min-w-[14rem] bg-background drop-shadow-2xl max-md:hidden'>
            <PerfectScrollbar>
                <MenuSidebar />
            </PerfectScrollbar>
        </div>
    )
}

export default Sidebar