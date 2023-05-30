import { IProuct } from '@/app/types'
import React, { FC } from 'react'
import { Rating } from 'react-simple-star-rating'
import cn from 'clsx'

type Props = {
    product: IProuct,
    className?: string
}

const ProductRating: FC<Props> = ({ product, className }) => {
    const rating = product.reviews.reduce((acc, item) => {
        return acc + item.rating
    },0) / product.reviews.length

    return (
        <div className={cn('flex gap-3', className)}>
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