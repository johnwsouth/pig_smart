import React from 'react';
import NavBar from './components/nav-bar';
import LandingPage from './containers/landing-page'
import Button from '@material-ui/core/Button'
import NutritionTable from './components/nutrition-table';


export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentPage: 'landing-page',
    }
  }

  renderSelector(){
    let components;
    let returnedComponents;
    if (this.state.currentPage === 'landing-page'){
      returnedComponents = <>
        <LandingPage/>
      </>

    }

    return (
      <>
      <NavBar/>
      {returnedComponents}
      </>
      );
  }

  render(){
    let componentTree = this.renderSelector();
    return(
      componentTree
    );
  }
}
