'use client';
import React from 'react'
import Heading from '../../Heading'
import Button from '../../ui/button/Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import Field from '../../ui/input/Field'
import { validEmail } from './valid-email'
import { signIn, useSession } from 'next-auth/react'
import PasswordField from '../../ui/input/PasswordField';
import { validPhone } from './valid-phone';
import { redirect, usePathname } from 'next/navigation';
import axios, { AxiosError } from 'axios';

interface IUserRegister {
    email: string,
    name: string,
    phone: string,
    password: string,
    confirmPassword: string
}

export default function Register() {
    const { register: formRegister, handleSubmit, setError, formState: { errors }, reset } = useForm<IUserRegister>({
        mode: 'onBlur'
    })

    const onSubmit: SubmitHandler<IUserRegister> = async (data) => {
        if (data.password !== data.confirmPassword) {
            setError('confirmPassword', { message: 'Passwords don\'t match' })
            return
        }

        try {
            const res = await axios.post(
                process.env.NEXT_PUBLIC_SERVER_URL + '/auth/register', {
                email: data.email,
                password: data.password,
                name: data.name,
                phone: data.phone
            })
        } catch (error) {
            console.log(error);
            
            if (axios.isAxiosError(error) && error.response?.status === 403) {
                setError('confirmPassword', { message: 'Credentials taken' })
            } else {
                setError('confirmPassword', {message:'Something went wrong. Try again'})
            }
            return
        }

        const resLogin = await signIn('credentials', {
            email: data.email,
            password: data.password,
            redirect: true,
            callbackUrl: '/'
        })
    }

    const pathName = usePathname()

    return (
        <section className='flex h-screen'>
            <form onSubmit={handleSubmit(onSubmit)}
                className='w-96 rounded-lg bg-white shadow-sm p-8 m-auto'
            >
                <Heading className='flex flex-auto justify-center mb-4'>Register</Heading>
                <Field
                    {...formRegister('email', {
                        required: 'email is required',
                        pattern: {
                            value: validEmail,
                            message: 'please enter a valid email address'
                        }
                    })}
                    placeholder='Email'
                    error={errors.email?.message}
                />
                <Field
                    {...formRegister('name', {
                        required: 'name is required',
                    })}
                    placeholder='Name'
                    error={errors.name?.message}
                />
                <Field
                    {...formRegister('phone', {
                        // required: 'name is required',
                        pattern: {
                            value: validPhone,
                            message: 'please enter a valid phone number'
                        }
                    })}
                    placeholder='Phone'
                    error={errors.phone?.message}
                />
                <PasswordField
                    {...formRegister('password', {
                        required: 'password is required',
                        minLength: {
                            value: 6,
                            message: 'minimal length should be 6 symbols'
                        }
                    })}
                    eye={true}
                    type='password'
                    placeholder='Password'
                    error={errors.password?.message}
                />
                <PasswordField
                    {...formRegister('confirmPassword', {
                        required: 'Please confirm password',
                        minLength: {
                            value: 6,
                            message: 'minimal length should be 6 symbols'
                        }
                    })}
                    eye={true}
                    type='password'
                    placeholder='Confirm password'
                    error={errors.confirmPassword?.message}
                />
                <Button variant='orange'>create account</Button>
            </form>
        </section>
    )
}