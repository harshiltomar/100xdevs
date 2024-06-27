export const Button = ({ children, onClick }: { children: string, onClick?: () => void }) => {
    return (
        <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">
            {children}
        </button>
    )
}