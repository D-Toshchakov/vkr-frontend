'use client'
import React, { forwardRef, useState } from 'react'
import { IField } from './field.interface'
import cn from 'clsx'
// import styles from './form.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
    ({ placeholder, error, className, Icon, type = 'text', style, ...rest }, ref) => {
        return (
            <div className={cn('mb-4', className)} style={style}>
                <label>
                    <span className='mb-1 block'>
                        {Icon && <Icon className={'mr-3'} />}
                        {placeholder}
                    </span>
                        <input ref={ref} type={type} {...rest}
                            placeholder={placeholder}
                            className={
                                cn('px-4 py-2 w-full outline-none border border-gray border-solid focus:border-primary transition-all placeholder:text-gray rounded-lg', {
                                    'border-red': error
                                })
                            }
                        />
                </label>
                {error && <div className='text-red mt-1'>{error}</div>}
            </div>
        )
    }
)

Field.displayName = 'Field'

export default Field