import { ICategory, IProduct } from '@/app/types'
import React, { FC, useReducer, useState } from 'react'
import Image from 'next/image'
import { convertPrice } from '@/app/utils/convertPrice'
import { FiPlus, FiTrash, FiEdit } from 'react-icons/fi'
import EditInput from './EditInput'
import Button from '../ui/buttons/Button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import productService from '@/app/services/product/product.service'

type Props = {
    product: IProduct,
    categories?: ICategory[]
}

type State = {
    nameVal: string;
    priceVal: string;
    descriptionVal: string;
    categoryVal: string;
}

export type Action = "setName" | "setPrice" | "setDescriprion" | "setCategory"

export type formAction = {
    type: Action,
    payload: string
}

function reducer(state: State, action: formAction): State {
    switch (action.type) {
        case 'setName':
            return { ...state, nameVal: action.payload };
        case 'setPrice':
            return { ...state, priceVal: action.payload };
        case 'setDescriprion':
            return { ...state, descriptionVal: action.payload };
        case 'setCategory':
            return { ...state, categoryVal: action.payload };
    }
}

const AdminProductItem: FC<Props> = ({ product, categories }) => {
    const [images, setImages] = useState(product.images)

    const [disabled, setDisabled] = useState(true)

    const [state, dispatch] = useReducer(reducer, {
        nameVal: product.name,
        priceVal: product.price.toString(),
        descriptionVal: product.description,
        categoryVal: product.category.name,
    })

    const queryClient = useQueryClient()

    const { mutate } = useMutation(
        ['update product'],
        () => productService.updateProduct(product.id, {
            name: state.nameVal,
            price: parseInt(state.priceVal),
            description: state.descriptionVal,
            categoryId: categories?.find((item) => item.name == state.categoryVal)?.id
        }),
        {
            onSuccess() {
                queryClient.invalidateQueries(['products'])
            }
        }
    )

    return (
        <div className='bg-white'>
            <div className='border rounded p-4'>
                <div className='grid grid-cols-[2fr_1fr_4fr_1.5fr] gap-2 text-lg'>
                    <div>
                        <div className='text-xl font-medium'>
                            Name:
                        </div>
                        <EditInput value={state.nameVal} setValue={dispatch} type='setName' isDisabled={disabled} content={product.name} />
                    </div>
                    <div>
                        <div className='text-xl font-medium'>
                            Price:
                        </div>
                        <EditInput value={state.priceVal} setValue={dispatch} type='setPrice' isDisabled={disabled} content={convertPrice(product.price)} />
                    </div>
                    <div>
                        <div className='text-xl font-medium'>
                            Description:
                        </div>
                        <textarea
                            rows={3}
                            disabled={disabled}
                            className='border disabled:bg-gray p-1 rounded-lg w-full'
                            value={state.descriptionVal}
                            onChange={(e) => dispatch({ type: 'setDescriprion', payload: e.target.value })}
                        />
                    </div>
                    <div>
                        <div className='text-xl font-medium'>
                            Category:
                        </div>
                        {!!categories &&
                            <select
                                onChange={(e) => {
                                    console.log(e.target.value);
                                    dispatch({
                                        type: 'setCategory',
                                        payload: e.target.value
                                    })
                                }}
                                disabled={disabled}
                                className='p-1 w-full text-center border disabled:bg-gray rounded-lg'
                            >
                                <option
                                    onChange={() => {
                                        console.log();

                                        dispatch({
                                            type: 'setCategory',
                                            payload: product.category.id.toString()
                                        })
                                    }}
                                    key={product.category.id}
                                >
                                    {product.category.name}
                                </option>
                                {categories.map(item => {
                                    return (
                                        item.id != product.category.id &&
                                        <option
                                            key={item.id}
                                        >
                                            {item.name}
                                        </option>
                                    )
                                })}
                            </select>
                        }
                    </div>
                </div>
                <div className='m-2 p-2 flex flex-wrap gap-2'>
                    {images.map((img, index) =>
                        <div key={index} className='flex'>
                            <Image
                                className='p-2 rounded transition duration-300 ease-in-out hover:scale-105'
                                src={img}
                                alt='product image'
                                width={240}
                                height={180}
                            />
                            <button className='absolute flex h-7 w-7 bg-primary items-center justify-center self-end'>
                                <FiTrash size={20} />
                            </button>
                        </div>
                    )}
                    <div className='bg-darkGray bg-opacity-30 w-60 flex items-center justify-center'>
                        <FiPlus size={40} />
                    </div>
                </div>
                <div>
                    <Button
                        onClick={() => { setDisabled(!disabled) }}
                        variant='orange'
                        size='md'
                        className='mr-2'
                    >
                        Edit
                    </Button>
                    <Button
                        onClick={() => { mutate(); setDisabled(true) }}
                        variant='orange'
                        size='md'
                        hidden={disabled}
                    >
                        Save
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AdminProductItem