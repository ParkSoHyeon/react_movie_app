import React from 'react'
import axios from 'axios'
import Movie from "../components/Movie";
import './Home.css'

// react는 자동적으로 className component의 render method를 실행함.
class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }
    getMovies = async () => {
        const {data: {data: {movies}}} = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating')
        this.setState({movies, isLoading: false})
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const {isLoading, movies} = this.state;
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="leader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map(movie => {
                            return <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                                rating={movie.rating}
                                runtime={movie.runtime}
                            />
                        })}
                    </div>
                )}
            </section>
        )

    }
}

export default Home;
