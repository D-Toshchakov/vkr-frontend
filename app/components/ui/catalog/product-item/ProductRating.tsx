import ReviewService from '@/app/services/review/review.service'
import { IProuct } from '@/app/types'
import { useQuery } from '@tanstack/react-query'
import React, { FC } from 'react'
import { Rating } from 'react-simple-star-rating'
import cn from 'clsx'

type Props = {
    product: IProuct,
    className?: string
}

const ProductRating: FC<Props> = ({ product, className }) => {
    const { data: rating } = useQuery(
        ['get product rating', product.id],
        () => {
            return ReviewService.getAverageRating(product.id)
        },
        {
            select: ({ data }) => data.rating
        }
    )

    return (
        <div className={cn('flex justify-between', className)}>
            <span className='flex items-center text-primary'>
                <Rating
                    size={25}
                    readonly
                    initialValue={rating}
                    SVGstyle={{
                        display: 'inline-block'
                    }}
                    fillColor='primary'
                    allowFraction
                    transition
                />
                {rating?.toFixed(1)}
            </span>
            <div className='flex items-center text-sm'>{`(${product.reviews.length} reviews)`}</div>
        </div>
    )
}

export default ProductRating