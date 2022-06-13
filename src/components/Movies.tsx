import React from "react";
import { Link } from 'react-router-dom'
import { IMoviesProps } from '../interfaces'

export const Movies: React.FC<IMoviesProps> = ({ poster, title, year, type, imdbID }) => {
	return (
		<div className="relative">
		<Link to={imdbID}>
			<div 
				className="aspect-w-2 aspect-h-3 w-full bg-gray-200 rounded-xl bg-center bg-cover bg"
			>
				<img src={`${poster}`} alt={title} className='rounded-xl' />
			</div>
			<div className="shadow-lg absolute left-[50%] bottom-5 text-[20px] z-10 bg-white rounded-xl p-2 w-[90%] -translate-x-[50%]">
				<h2 className="px-3 py-0.5 font-bold text-xl">{title}</h2>
				<div className="flex gap-x-5 px-3 py-1 text-sm text-gray-500">
					<span>{year}</span>
					<span>{type}</span>
				</div>
			</div>
		</Link>
		</div>
	)

}
