import React from 'react';
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, title, summary, poster }) {
    return (
        <div className="movie">
            <img src={`https://www.themoviedb.org/t/p/w440_and_h660_face${poster}`}/>
            <h3>{title}</h3>
            <h5>{summary}</h5>
        </div>
    )
  }

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;