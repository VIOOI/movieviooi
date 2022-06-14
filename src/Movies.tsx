import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDebouncedCallback } from 'use-debounce';

import { Menu } from './components/Menu'
import { AboutMovies } from './components/aboutMovies'

import { IMovieData } from './interfaces'


export const MoviesPage: React.FC = () => {
	const url = 'https://www.omdbapi.com/?apikey=7518574f&'
	const location = useLocation()
	const navigate = useNavigate()
	const [ movie, setMovie ] = useState<IMovieData | null>(null)
	// console.log( location.pathname.split('/')[1] )

	const moviesData = useDebouncedCallback( async () => {
		const mov = await axios.get(`${url}i=${location.pathname.split('/')[1]}`)
		// console.log( movie.data.Search )
		console.log( mov.data)
		setMovie(mov.data)
	}, 100)

	useEffect(() => {
		moviesData()
		}, [])

  return (
		<div className="w-screen min-h-screen flex flex-col items-center gap-5" > 
			<Menu setName={null} moviesData={moviesData} name={''} />
			<div className="flex w-screen poster">
				<div className="flex justify-center items-center poster w-6/12 ">
					<img 
						src={movie?.Poster} 
						alt={movie?.Title} 
						className='h-[80vh] rounded-2xl shadow-xl' />
				</div>
				<div className="poster flex flex-col gap-10 justify-start items-start pt-14 pr-5 w-6/12">
					<div className='flex flex-col gap-3'>
						<div
							className="flex items-center gap-0 cursor-pointer"
							onClick={() => {
								navigate(-1)
							}}
							>
							<svg xmlns="http://www.w3.org/2000/svg" width="31.11" height="20.001" viewBox="0 0 31.11 20.001">
  <path id="arrow" d="M32.109,13.5A1.111,1.111,0,0,0,31,12.389H4.794L11.787,5.4a1.112,1.112,0,1,0-1.573-1.573L1.326,12.713a1.111,1.111,0,0,0,0,1.573l8.888,8.888A1.112,1.112,0,0,0,11.787,21.6l-6.993-6.99H31A1.111,1.111,0,0,0,32.109,13.5Z" transform="translate(-0.999 -3.499)" stroke="#000" stroke-width="0" fill-rule="evenodd"/>
</svg>
								<h3 className="text-2xl font-extrabold">Назвад</h3>
						</div>
						<h1 className="text-6xl font-extrabold">{movie?.Title}</h1>
						<h2 className="text-2xl text-zinc-400">{movie?.Released}</h2>
					</div>
					<div>
						<h3 className="text-4xl font-extrabold">Назвад</h3>
						<div>
							<AboutMovies title='Страна' description={`${movie?.Country}`} />
							<AboutMovies title='Жанр' description={`${movie?.Genre}`} />
							<AboutMovies title='Режисёр' description={`${movie?.Director}`} />
							<AboutMovies title='Сценарист' description={`${movie?.Writer}`} />
							<AboutMovies title='Актёры' description={`${movie?.Actors}`} />
							<AboutMovies title='Сюжеты' description={`${movie?.Plot}`} />
							<AboutMovies title='Касовый сборы' description={`${movie?.BoxOffice}`} />
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

