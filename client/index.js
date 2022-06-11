import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CategoryList from './Components/CategoryList';
import Search from './Components/Search';
import MealList from './Components/MealList';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: [],
            searchName: '',
            meals:[],
        };
    }

    componentDidMount() {
        this.getRecipes();
      }

    getRecipes() {
        axios.get('/category')
        .then(data => {
            console.log('success get data!', data);
            this.setState({ category: data.data.meals });
        })
        .catch(err => {
            console.log('fail get data!', err);
        })
    }

    handleChange(e) {
        console.log(e.target.value);
        this.setState({ searchName: e.target.value });
    }

    handleSearch(e) {
        e.preventDefault();
        console.log('search in state: ', this.state.searchName)

        axios.post('/search', this.state.searchName)
        .then(data => {
            console.log('success search data!', data);
            this.setState({ meals: data.data});
        })
        .catch(err => {
            console.log('error search data!', err);
        })
    }

    render() {
        return (
            <div>
                <h1>Welcome to Recipes Heaven!!! 🍛 </h1>
                <Search onChange={this.handleChange.bind(this)} search={this.handleSearch.bind(this)}/>
                <MealList meals={this.state.meals} />
                <CategoryList category={this.state.category}/>
            </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('app'));

