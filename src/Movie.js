import React, { Component } from 'react';
import axios from "axios"
import './Movie.css';
import Row from './Row'

var moviesApi = [];
class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie_list: [],
    }
  }

  componentDidMount() {
    // API call to fetch data goes here
    axios.get('https://wookie.codesubmit.io/movies', {
      headers: {
        "Authorization": "Bearer Wookie2019"
      }
    })
      .then((response) => {
        // moviesApi = response.data;
        // update the state to reuse values
        this.setState({
          movie_list: response.data.movies
        })
      });
  }

  render() {
    console.log(this.state.movie_list);
    return (
      <div className="outer-div">
        {this.state.movie_list.length ? <h1 className="movie-heading-section">Action</h1> : null}
        <div className="movie-container">
          {this.state.movie_list ? this.state.movie_list.map((item, i) => (
            <>
              <>
                {item.genres[0] === "Action" ? (
                  <>
                    <Row
                      id={item.id}
                      poster={item.poster}
                      name={item.name}
                      title={item.title}
                      rating={item.imdb_rating}
                      poster={item.poster}
                    />
                  </>
                ) : null}
              </>
            </>
          )) : ""}
        </div>
        {this.state.movie_list.length ? <h1 className="movie-heading-section">Drama</h1> : null}
        <div className="movie-container">
          {this.state.movie_list ? this.state.movie_list.map((item, i) => (
            <>
              <>
                {item.genres[0] === "Drama" ? (
                  <>
                    <Row
                      id={item.id}
                      poster={item.poster}
                      name={item.name}
                      title={item.title}
                      rating={item.imdb_rating}
                      poster={item.poster}
                    />
                  </>
                ) : null}
              </>
            </>
          )) : ""}
        </div>
        {this.state.movie_list.length ? <h1 className="movie-heading-section">Crime</h1> : null}
        <div className="movie-container">
          {this.state.movie_list ? this.state.movie_list.map((item, i) => (
            <>
              <>
                {item.genres[0] === "Crime" ? (
                  <>
                    <Row
                      id={item.id}
                      poster={item.poster}
                      name={item.name}
                      title={item.title}
                      rating={item.imdb_rating}
                      poster={item.poster}
                    />
                  </>
                ) : null}
              </>
            </>
          )) : ""}
        </div>
      </div>
    )
  }
}

export default Movie