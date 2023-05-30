import { IReview } from '@/app/types'
import React, { FC } from 'react'
import ReviewItem from './ReviewItem'

type Props = {
    reviews: IReview[]
}

const ReviewSection: FC<Props> = ({ reviews }) => {
    return (
        <div className='bg-white p-3 rounded-lg'>
            <div className='text-lg font-semibold mb-4'>
                {`Reviews (${reviews.length})`}
            </div>
            {reviews.map((item, index) => (
                <div>
                    <ReviewItem key={index} review={item} />
                    {index !== reviews.length - 1 &&
                        <hr className='my-8' />
                    }
                </div>
            ))}
        </div>
    )
}

export default ReviewSection