import { useProfile } from '@/app/hooks/useProfile'
import userService from '@/app/services/user/user.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React, { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
  const { profile } = useProfile(productId)

  const queryClient = useQueryClient()

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
    <div>
      <button className='text-primary'
        onClick={() => {
          mutate()
        }}
      >
        {favoriteExist ? <AiFillHeart size={30} /> : <AiOutlineHeart size={30} />}
      </button>
    </div >
  )
}

export default FavoriteButton