import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import CategoryList from './Components/CategoryList';
import Search from './Components/Search';
import MealList from './Components/MealList';
import Display from './Components/Display';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: [],
            searchName: '',
            meals:[],
            clickMeal:undefined,
        };
    }

    componentDidMount() {
        this.getCategoryList();
      }

    getCategoryList() {
        axios.get('/category')
        .then(data => {
            console.log('success get category data at client!');
            this.setState({ category: data.data.meals });
        })
        .catch(err => {
            console.log('fail get category data at client!', err);
        })
    }

    handleChange(e) {
        this.setState({ searchName: e.target.value });
    }

    handleSearch(e) {
        e.preventDefault();

        axios.post('/search', this.state.searchName)
        .then(data => {
            console.log('success search data!', data);
            this.setState({ meals: data.data});
        })
        .catch(err => {
            console.log('error search data!', err);
        })
    }

    handleClick(e) {

        let clickedName = e.target.innerText;
        let mealObj = this.state.meals.find(item => item.strMeal === clickedName);
        this.setState({ clickMeal: mealObj});

        console.log('e.target.innertext: ', e.target.innerText);
        console.log('mealObj: ', mealObj);
        console.log('this.state.clickMeal: ', this.state.clickMeal);

    }

    // getMealRecipe(event, clickedName) {
    //     console.log('clickedName: ', clickedName);
    //     event.preventDefault();

    //     axios.post('/recipe')
    //     .then(data => {
    //         console.log('success get meal data!', data);
    //         this.setState({ recipe: data.data.meals }); // here need to update!!!
    //     })
    //     .catch(err => {
    //         console.log('fail get meal data!', err);
    //     })
    // }

    render() {
        return (
            <div>
                <h1>Welcome to Easy Recipes!!! 🍛 </h1>
                <Search onChange={this.handleChange.bind(this)} search={this.handleSearch.bind(this)}/>
                <Display clickMeal={this.state.clickMeal} />
                <MealList meals={this.state.meals} onClick={this.handleClick.bind(this)}/>
                <CategoryList category={this.state.category} onClick={this.handleClick.bind(this)}/>
            </div>
        )
    }
}

ReactDOM.render(<App />,document.getElementById('app'));

