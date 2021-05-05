import React, { Component } from 'react';
import axios from "axios";
import Movie from "./Movie";

class App extends Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const {data: { results }} = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=f3e51bf3b1a3f8bcb87fc17f17ed8c28");
    this.setState({movies:results, isLoading: false})
  }

  componentDidMount(){
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : movies.map(movie => (
          <Movie 
            id={movie.id}
            key={movie.id}
            summary={movie.overview} title={movie.title} 
            poster={movie.poster_path}
            />
        ))}
      </div>
    );
  }
}

export default App;
