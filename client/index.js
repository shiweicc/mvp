import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CategoryList from './Components/CategoryList';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: [],
        };
    }

    componentDidMount() {
        this.getRecipes();
      }

    getRecipes() {
        axios.get('/recipes')
        .then(data => {
            console.log('success get data!', data);
            this.setState({ category: data.data.meals });
        })
        .catch(err => {
            console.log('fail get data!', err);
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome to Recipes Heaven!!! 🍛 </h1>
                <CategoryList category={this.state.category}/>
            </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('app'));

