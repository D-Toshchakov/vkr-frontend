'use client'
import React, { forwardRef, useState } from 'react'
import { IField } from './field.interface'
import cn from 'clsx'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'
// import styles from './form.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
    ({ eye, placeholder, error, className, Icon, type = 'text', style, ...rest }, ref) => {
        const [open, setOpen] = useState(false)
        const toggle = () => {
            setOpen(!open)
        }
        return (
            <div className={cn('mb-4', className)} style={style}>
                <label>
                    <span className='mb-1 block'>
                        {Icon && <Icon className={'mr-3'} />}
                        {placeholder}
                    </span>
                    <div className='flex'>
                        <input ref={ref} type={(open === false) ? 'password' : 'text'} {...rest}
                            placeholder={placeholder}
                            className={
                                cn('px-4 py-2 w-full outline-none border border-gray border-solid focus:border-primary transition-all placeholder:text-gray rounded-lg', {
                                    'border-red': !!error
                                })
                            }
                        />
                        {eye && <div className='flex items-center text-2xl -ml-8'>
                            {
                                (open === false) ? <AiFillEye onClick={toggle} /> :
                                    <AiFillEyeInvisible onClick={toggle} />
                            }
                        </div>}
                    </div>
                </label>
                {error && <div className='text-red mt-1'>{error}</div>}
            </div>
        )
    }
)

Field.displayName = 'Field'

export default Field