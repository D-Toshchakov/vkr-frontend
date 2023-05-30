import { IReview } from '@/app/types'
import Image from 'next/image'
import React, { FC } from 'react'
import { Rating } from 'react-simple-star-rating'

type Props = {
    review: IReview
}

const ReviewItem: FC<Props> = ({ review }) => {
    return (
        <div>
            <div className='flex gap-3 items-center'>
                <Image
                    src={review.user.avatarPath}
                    width={50}
                    height={50}
                    alt='pic'
                    className='rounded-full'
                />
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col'>
                        <div className='flex gap-2'>
                            <div>
                                {review.user.name}
                            </div>
                            <div className='text-primary pb-1'>
                                <Rating
                                    size={20}
                                    readonly
                                    initialValue={review.rating}
                                    SVGstyle={{
                                        display: 'inline-block'
                                    }}
                                    fillColor='primary'
                                    allowFraction
                                    transition
                                />
                            </div>
                        </div>
                        <div>
                            {new Date(review.updatedAt).toLocaleString('ru-RU')}
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-2'>
                {review.text}
            </div>
        </div>
    )
}

export default ReviewItem