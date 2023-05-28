'use client'
import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import cn from 'clsx'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'orange' | 'white',
    size?: 'xs' | 'sm' | 'md' | 'lg'
}

const Button: FC<PropsWithChildren<IButton>> = ({
    children,
    className,
    variant,
    size = 'md',
    ...rest
}) => {
    return (
        <button {...rest} className={
            cn('rounded-xl font-semibold shadow min-w-[32px] px-10 py-2 hover:shadow-lg transition duration-300 ease-in-out', {
                'text-white bg-primary': variant === 'orange',
                'text-primary bg-white': variant === 'white',
                'px-3 text-xs': size === 'xs',
                'px-6 text-sm': size === 'sm',
                'text-md': size === 'md',
                'px-13 text-lg': size === 'lg'
            },
                className)} >
            {children}
        </button>
    )
}

export default Button
