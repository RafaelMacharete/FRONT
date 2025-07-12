type Props = {
    label: string;
    onClick: () => void;
}

export const Button = ({ label, onClick }: Props) => {
    const handleButtonClick = () => {
        onClick();
    }    

    return (
        <button
            className="p-3 text-white bg-blue-700"
            onClick={handleButtonClick}
        >
            {label}
        </button>
    )
}