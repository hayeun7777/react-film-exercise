import React, { Component } from 'react';
import './App.css';

class FilmDetails extends Component {
  render() {
  	// const allFilmDetails = this.props.films.map(film => {
  	// 	return(
  	// 		let posterUrl = 'https://image.tmdb.org/t/p/w780/'+{film.poster_path};
  	// 		<div className="detail-row">
  	// 			<img src={posterUrl} />
  	// 			<p>{film.overview}</p>
  	// 			<p>{film.release_date}</p>
  	// 		</div>
  	// 			)
  	// })

    return (
      
        <div className="film-details">
          <h1 className="section-title">DETAILS</h1>
{/*          <img src="postUrl">
          <p>{this.props.films[0].overview}</p>
          <p>{this.props.films[0].release_date}</p>
          {allFilmDetails}*/}
        </div>
    );
  }
}

export default FilmDetails;
