import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// import { useDebounce } from 'use-debounce'
// import { IMovieList } from '../interfaces'

interface IMenuProps {
	// setMovie: React.Dispatch<React.SetStateAction<IMovieList[] | null>>
	name: string;
	setName: React.Dispatch<React.SetStateAction<string>> | null;
	moviesData: any;
}

export const Menu: React.FC<IMenuProps> = ({ name, setName, moviesData }) => {
	const location = useLocation()
	let navigate = useNavigate()
	// console.log( location )
	return (
	<> 
			<div className="h-[100px] w-screen flex justify-around items-center ">
				<div className="font-['JetBrains_Mono'] text-4xl font-extrabold flex gap-3 items-center">
<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M946.5 505L534.6 93.4a31.93 31.93 0 0 0-45.2 0L77.5 505c-12 12-18.8 28.3-18.8 45.3 0 35.3 28.7 64 64 64h43.4V908c0 17.7 14.3 32 32 32H448V716h112v224h265.9c17.7 0 32-14.3 32-32V614.3h43.4c17 0 33.3-6.7 45.3-18.8 24.9-25 24.9-65.5-.1-90.5z"></path></svg>
					VIOOI
				</div>
				<div>
					<input 
						className="w-[40vw] h-[50px] px-5 bg-gray-100 rounded-lg placeholder:font-['JetBrains_Mono'] placeholder:text-2xl text-2xl font-extralight"
						placeholder="Поиск кино..."
						type="text"
						value={name}
						disabled={ !!setName ? false : true }
						onChange={e => {
							if ( setName != null ) {
								setName(e.target.value)
								moviesData()
								navigate(`/?search=${e.target.value}`)
						} 
						}}
					/>
				</div>
				<div className="flex gap-5 bg-gray-100 p-1.5 rounded-xl text-2xl font-extralight font-['JetBrains_Mono']">
					<button
						className={"py-1 px-3 rounded-lg" + ( location.pathname === '/' ? ' bg-white' : '' )}
						>Список</button>
					<button
						className={"py-1 px-3 rounded-lg" + ( location.pathname === '/' ? '' : ' bg-white' )}
						>Информация</button>
				</div>
			</div>
	</>
	)
}
