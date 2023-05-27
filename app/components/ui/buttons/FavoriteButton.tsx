import { useProfile } from '@/app/hooks/useProfile'
import userService from '@/app/services/user/user.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
  const { profile } = useProfile()

  const { invalidateQueries } = useQueryClient()

  const { mutate } = useMutation(
    ['toggle favorite'],
    () => userService.toggleFavorite(productId),
    { 
      onSuccess() {
        invalidateQueries(['get profile'])
      }
    }
  )

  const favoriteExist = profile.favorites.some(
    favorite => favorite.id == productId
  )
  return (
    <div>
      <button onClick={() => mutate()}>
        {!favoriteExist ? <AiFillHeart /> : <AiOutlineHeart />}
      </button>
    </div >
  )
}

export default FavoriteButton