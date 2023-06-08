'use client'
import { EnumProductSort } from '@/app/services/product/product.dto'
import productService from '@/app/services/product/product.service'
import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'
import AdminProductItem from '../AdminProductItem'
import categoryService from '@/app/services/category/category.service'

type Props = {}

const AdminProducts = (props: Props) => {
  const [sortType, setSortType] = useState<EnumProductSort>(EnumProductSort.NEWEST)

  const [page, setPage] = useState(1)

  const { data: response, isLoading } = useQuery(
    ['products', sortType, page],
    () => productService.getAll({
      page,
      perPage: 12,
      sort: sortType
    }),
    {
      // initialData: data,
      keepPreviousData: true
    }
  )

  const { data: categories } = useQuery(
    ['products'],
    () => categoryService.getAll(),
  )

  console.log(categories);


  return (
    <div>
      {response?.products.map((item, index) =>
        <div key={index} className='my-5'>
          <AdminProductItem categories={categories} product={item} />
        </div>
      )}
    </div>
  )
}

export default AdminProducts