import { FC } from "react";
import { IconType } from "react-icons";

interface ISquareButton {
    Icon: IconType,
    onClick: () => void,
    num?: number
}

const SquareButton: FC<ISquareButton> = ({ Icon, onClick, num }) => {
    return (
        <button
            onClick={onClick}
            className="h-10 w-10 bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors duration-200 relative rounded"
        >
            {!!num && (
                <span className="flex h-4 w-4 items-center justify-center absolute -top-1 -right-1 rounded-full bg-white p-0.5 text-[0.75rem] text-secondary">
                    {num}
                </span>
            )}
            <Icon className="text-secondary" size={21}/>
        </button>
    )
}

export default SquareButton