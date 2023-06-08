import React, { FC } from 'react'
import { Action, formAction } from './AdminProductItem'

type Props = {
    content: string
    isDisabled?: boolean
    value: string,
    setValue: React.Dispatch<formAction>,
    type: Action
}

const EditInput: FC<Props> = ({ content, isDisabled, value, setValue, type }) => {
    return (
        <input
            disabled={isDisabled}
            className='border p-1 rounded-lg disabled:bg-gray'
            type="text"
            value={value}
            onChange={(e) => setValue({ type, payload: e.target.value })}
        />
    )
}

export default EditInput