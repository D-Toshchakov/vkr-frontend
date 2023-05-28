import productService from '@/app/services/product/product.service'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import CatalogPage from '../../ui/catalog/CatalogPage'

const SearchPage = () => {
  const { get } = useSearchParams()
  const query = get('term')

  const { data } = useQuery(
    ['search products', query],
    () => {
      return productService.getAll({searchTerm: query || ''})
    },
  )
  if (data) {
    return (
      <CatalogPage products={data.products} />
    )
  } else {
    return <></>
  }
}

export default SearchPage