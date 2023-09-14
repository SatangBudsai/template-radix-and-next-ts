"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"

import { Icon } from '@iconify/react';
import { cn } from '../../../lib/utils';
import style from './Checkbox.module.css'

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "group flex justify-center items-center peer h-5 w-5 shrink-0 rounded-md border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:scale-125",
      className, style.animationCheckbox
    )}
    {...props}
  >
    <div className="scale-0 group-data-[state=checked]:scale-100 transition-all">
      <CheckboxPrimitive.Indicator
        className={cn("flex items-center justify-center text-current",

        )}
      >
        <Icon icon="fa-solid:check" className={cn("h-3 w-3",)} />
      </CheckboxPrimitive.Indicator>
    </div>

  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
