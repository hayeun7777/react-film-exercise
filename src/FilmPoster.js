import React from 'react';

const FilmPoster = (props) => {

	const posterUrl = `http://image.tmdb.org/t/p/w780/${props.poster_path}`;
	return  <img src={posterUrl} alt="" />
}

export default FilmPoster;