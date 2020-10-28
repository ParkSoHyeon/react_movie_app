import PropTypes from 'prop-types'
import React from 'react'

const foodILike = [
    {
        id: 1,
        name: "Kimchi",
        image:
            "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
        rating: 5.0
    },
    {
        id: 2,
        name: "Samgyeopsal",
        image:
            "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
        rating: 8.7
    },
    {
        id: 3,
        name: "Bibimbap",
        image:
            "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
        rating: 4.5
    },
    {
        id: 4,
        name: "Doncasu",
        image:
            "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
        rating: 6.4
    },
    {
        id: 5,
        name: "Kimbap",
        image:
            "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
        rating: 7.0
    }
];

function Food({ name, picture, rating }) { // == props.name
    return (
        <div>
            <h2>I like {name}.</h2>
            <h4>{rating}/10.0</h4>
            <img src={picture} alt={name} />
        </div>
    );
}

Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number,
}

// react는 자동적으로 class component의 render method를 실행함.
class App extends React.Component {
    state = {
        count: 0
    }
    add = () => {
        // this.setState({count: this.state.count + 1 });
        this.setState(current => ({count: current.count + 1}));
    }
    minus = () => {
        // this.setState({count: this.state.count - 1 });
        this.setState(current => ({count: current.count - 1}));
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    render() {
        return (
            <div>
                <h1>The number is: {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}

export default App;
