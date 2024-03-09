interface CardProps {
    link: string
    icon: string
    name: string
}

export function Card({ link, icon, name }: CardProps) {
    return (
        <>
            <div className="text-gray-50 grid grid-cols-1 justify-items-center self-center h-12 rounded-md bg-gray-600 hover:bg-gray-700 transition-transform transform hover:scale-105 duration-300 ease-in-out w-full p-3">
                <a href={link} target="_blank"><span><i className={icon} /> {name}</span></a>
            </div>
        </>
    )
}