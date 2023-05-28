import React, { Dispatch, FC, SetStateAction } from 'react'
import { EnumProductSort } from '@/app/services/product/product.dto'

type ISortDropDown = {
  className?: string,
  sortType: EnumProductSort,
  setSortType: Dispatch<SetStateAction<EnumProductSort>>
}

const SortDropDown: FC<ISortDropDown> = ({ className, sortType, setSortType }) => {
  return (
    <div className={className}>
      <select 
        value={sortType}
        onChange={(e) => setSortType(e.target.value as any)}
        className='rounded-lg bg-primary text-lg p-0.5'>
        {
          (Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>)
            .map(key => {
              return (
                <option
                  key={key}
                  onChange={() => setSortType(EnumProductSort[key])}
                >
                  {EnumProductSort[key]}
                </option>
              )
            })
        }
      </select>
    </div>
  )
}

export default SortDropDown