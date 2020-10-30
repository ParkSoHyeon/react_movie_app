import React from 'react';
import './Detail.css'

class Detail extends React.Component {
    componentDidMount() {
        const { location, history } = this.props;

        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;

        if (location.state) {
            return (
                <div className="container">
                    <div className="poster-container">
                        <img src={location.state.poster} alt={location.state.title}/>
                    </div>
                    <div className="info-container">
                        <h1 className="info__title">{location.state.title}(⏱️&nbsp;{location.state.runtime}min)</h1>
                        <h2 className="info__rating">⭐&nbsp;{location.state.rating}/10.0</h2>
                        <h2 className="info__year">{location.state.year}</h2>
                        <ul className="info__genres">
                            {location.state.genres.map((genre, index) => (
                                <li key={index} className="genres__genre">
                                    {genre}
                                </li>
                            ))}
                        </ul>
                        <p className="info__summary">{location.state.summary}</p>
                    </div>
                </div>
            );
        }
        else {
            return null;
        }
    }
}

export default Detail;
