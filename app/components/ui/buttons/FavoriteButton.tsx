import { useProfile } from '@/app/hooks/useProfile'
import userService from '@/app/services/user/user.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { FC, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { ImHeartBroken } from 'react-icons/im' 

interface Props {
  productId: number
  className?: string
}

const FavoriteButton: FC<Props> = ({ productId, className }) => {
  const { profile } = useProfile()

  const queryClient = useQueryClient()

  const [hovered, setHovered] = useState(false)

  const { mutate } = useMutation(
    ['toggle favorite'],
    () => userService.toggleFavorite(productId),
    {
      onSuccess() {
        queryClient.invalidateQueries(['get profile'])
      }
    }
  )

  if (!profile) return null

  const favoriteExist = profile.UserFavorites.some(
    favorite => favorite.product.id == productId
  )

  return (
    <div className={className}>
      <button className=''
        onClick={() => {
          mutate()
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {favoriteExist ?
          hovered ?
            <ImHeartBroken size={30} /> :
            <AiFillHeart size={30} /> :
          <AiOutlineHeart size={30} />}
      </button>
    </div >
  )
}

export default FavoriteButton