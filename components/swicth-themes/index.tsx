import React, { Fragment } from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

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
                    <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                </Button>
                <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setTheme("light")}
                    className='absolute scale-0 transition-all dark:scale-100'
                >
                    <Moon className="h-5 w-5 absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
            </Fragment>
        )
    )
}

export default SwicthThemes