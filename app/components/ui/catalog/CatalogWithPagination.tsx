import { IProuct, PaginationProducts } from '@/app/types'
import React, { FC, useState } from 'react'
import Heading from '../../Heading'
import ProductItem from './product-item/ProductItem'
import Loader from '../Loader'
import Button from '../buttons/Button'
import SortDropDown from './sort/SortDropDown'
import { EnumProductSort } from '@/app/services/product/product.dto'
import { useQuery } from '@tanstack/react-query'
import productService from '@/app/services/product/product.service'
import { prodsPerPage } from '@/app/constants'

interface ICatalog {
  data: PaginationProducts,
  length: number,
  loading?: boolean,
  // title?: string
}

const CatalogWithPagination: FC<ICatalog> = ({ data, loading }) => {
  const [sortType, setSortType] = useState<EnumProductSort>(EnumProductSort.NEWEST)
  const [page, setPage] = useState(1)


  const { data: response, isLoading } = useQuery(
    ['products', sortType, page],
    () => productService.getAll({
      page,
      perPage: prodsPerPage,
      sort: sortType
    }),
    {
      initialData: data,
      keepPreviousData: true
    }
  )

  return (
    <section>
      <Heading>Catalog</Heading>
      <SortDropDown sortType={sortType} setSortType={setSortType} className='text-right mb-3' />
      {loading || isLoading
        ? <div className='flex justify-center m-6'><Loader /></div>
        : response.products.length ? (
          <div>
            <div className='grid grid-cols-4 gap-8'>
              {response.products.map(product => <ProductItem product={product} key={product.id} />)}
            </div>
            <div className='text-center my-8'>
              {Array.from({ length: Math.ceil(response.length / prodsPerPage) })
                .map((_, index) => {
                  const pageNumber = index + 1
                  return (
                    <Button
                      key={pageNumber}
                      className='mx-2'
                      variant={page == pageNumber ? 'orange' : 'white'}
                      size='xs'
                      onClick={() => setPage(pageNumber)}
                    >
                      {pageNumber}
                    </Button>
                  )
                })
              }
              {/* <Button onClick={() => setPage(page + 1)} size='sm' variant='orange'>Load more</Button> */}
            </div>
          </div>
        ) : (<div>There are no products yet</div>)
      }
    </section>
  )
}

export default CatalogWithPagination