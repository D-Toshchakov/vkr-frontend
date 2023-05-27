import ReviewService from '@/app/services/review/review.service'
import { IProuct, IReview } from '@/app/types'
import { useQuery } from '@tanstack/react-query'
import React, { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const ProductRating: FC<{ product: IProuct }> = ({ product }) => {
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
        <div>
            <Rating
                readonly
                initialValue={rating}
                SVGstyle={{
                    display: 'inline-block'
                }}
                allowFraction
                transition
            />
            <span>{product.reviews.length} reviews</span>
        </div>
    )
}

export default ProductRating