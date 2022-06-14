import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDebouncedCallback } from 'use-debounce';
import { motion, AnimateSharedLayout } from 'framer-motion'

import { Movies } from './components/Movies'
import { Menu } from './components/Menu'

import { IMovieData, IMovieList } from './interfaces'

const card = {
	visible: ( i: number ) => ({
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
	}),
	hidden: { opacity: 0 }
}

const App: React.FC = () => {
	const url = 'https://www.omdbapi.com/?apikey=7518574f&'
	const [ name, setName ] = useState<string>('')
	const [ movie, setMovie ] = useState<IMovieList[] | null>(null)
	const location = useLocation()
	// let navigate = useNavigate()

	const moviesData = useDebouncedCallback( async () => {
		const movie = await axios.get(`${url}s=${name}`)
		// console.log( movie.data.Search )
		// console.log( movie.data.Search)
		setMovie(movie.data.Search)
	}, 100)

	useEffect(() => {
		console.log( location.search )
		if ( location.search !== '' ){
			const re = /%20/gi
			setName(location.search.split('=')[1].replace(re, ' '))
			moviesData()
		}
		}, [])

  return (
		<div className="w-screen min-h-screen flex flex-col items-center gap-5" > 
			<Menu setName={setName} moviesData={moviesData} name={name} />
				<motion.div className="grid grid-cols-4 w-9/12 gap-5" >
					{ movie && movie.map( ( mov, index ) => {
						return <Movies custom={index} variants={card} animate='visible' initial='hidden' key={index} poster={mov.Poster} title={mov.Title} imdbID={mov.imdbID} year={mov.Year} type={mov.Type} />
					} )

					}
				</motion.div>
		</div>
  );
}

export default App;
