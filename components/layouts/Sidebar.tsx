"use client"

import React, { Fragment } from 'react'

type Props = {}

export const MenuSidebar = () => {
    return (<Fragment>
        <div className='flex justify-center py-5 border-b-2'>Sidebar</div>
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
        <div className='max-h-screen min-w-[14rem] bg-background border-r-2 border-foreground/10 drop-shadow-2xl overflow-y-auto hidden-scrollbar max-md:hidden'>
            <MenuSidebar />
        </div>
    )
}

export default Sidebar