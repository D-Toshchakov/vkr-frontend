'use client';
import React from 'react'
import Heading from '../../Heading'
import Button from '../../ui/buttons/Button'
import { SubmitHandler, useForm } from 'react-hook-form'
import Field from '../../ui/input/Field'
import { validEmail } from './valid-email'
import { signIn } from 'next-auth/react'
import PasswordField from '../../ui/input/PasswordField';
import Link from 'next/link';
import { useAuthRedirect } from './useAuthRedirect';



interface IEmailPassword {
  email: string,
  password: string
}

export default function Login() {
  useAuthRedirect()
  const { register: formRegister, handleSubmit, formState: { errors }, reset } = useForm<IEmailPassword>({
    mode: 'onBlur'
  })

  const onSubmit: SubmitHandler<IEmailPassword> = async (data) => {
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: true,
      callbackUrl: '/'
    })
  }

  return (
    <section className='flex h-screen'>
      <form onSubmit={handleSubmit(onSubmit)}
        className='w-96 rounded-lg bg-white shadow-sm p-8 m-auto'
      >
        <Heading className='flex flex-auto justify-center mb-4'>Sign in</Heading>
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
        <Button variant='orange' className='mb-4'>login</Button>
        <div>
          <span>
            Don't have an account yet? <Link href="/register" className='text-primary underline'>Create one</Link>
          </span>
        </div>
      </form>
    </section>
  )
}