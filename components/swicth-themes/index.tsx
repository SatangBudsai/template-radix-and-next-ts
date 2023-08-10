import React, { Fragment } from 'react'
import { Button } from '../ui/button'
import { useTheme } from 'next-themes'
import { Icon } from '@iconify/react';

type Props = {}

const SwicthThemes = (props: Props) => {
    const { setTheme } = useTheme()

    return (
        (
            <Fragment>
                <Button
                    variant="outline"
                    size="icon"
                    className='scale-100 transition-all dark:scale-0'
                    onClick={() => setTheme("dark")}
                >
                    <Icon icon="heroicons:sun" className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setTheme("light")}
                    className='absolute scale-0 transition-all dark:scale-100'
                >
                    <Icon icon="heroicons:moon" className="h-5 w-5 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
            </Fragment>
        )
    )
}

export default SwicthThemes