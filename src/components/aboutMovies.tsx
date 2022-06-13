import React from "react";

interface AboutMoviesProps {
	title: string;
	description: string;
}
export const AboutMovies: React.FC<AboutMoviesProps> = ({ title, description }) => {
	if ( description == 'N/A' ){
		description = '- - -'
	}
	return (
	<> 
		<div className="flex my-3 font-light">
			<h3 className="min-w-[10vw] text-2xl text-zinc-400">{ title }</h3>
			<p className="text-2xl">{ description ?? '' }</p>
		</div>
	</>
	)
}
