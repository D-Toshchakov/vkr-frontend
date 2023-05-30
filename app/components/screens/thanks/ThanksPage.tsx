import React from 'react'
import Button from '../../ui/buttons/Button'
import Link from 'next/link'

type Props = {}

const ThanksPage = (props: Props) => {
    return (
        <div className='flex flex-col justify-evenly items-center h-[60vh] align-middle'>
            <h1 className='text-3xl'>Thank you for your order!</h1>
            <Link href={'/'}>
                <Button variant='orange'>
                    go home
                </Button>
            </Link>
        </div>
    )
}

export default ThanksPage