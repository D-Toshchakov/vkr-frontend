'use client'
import React, { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import cn from 'clsx'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'orange' | 'white'
}

const Button: FC<PropsWithChildren<IButton>> = ({ children, className, variant, ...rest }) => {
    return (
        <button {...rest} className={
            cn('rounded-xl font-semibold shadow px-10 py-2', {
                'text-white bg-primary' : variant === 'orange',
                'text-primary bg-white' : variant === 'white'
            },
            className)} >
            {children}
        </button>
    )
}

export default Button
