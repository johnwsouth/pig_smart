import React from 'react';

export default class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentPage: 'landing-page',
    }
  }

  render(){
    let navItemTextArray = ['macronutrient calculator', 'recipes', 'special offers']
    let navItemClassArray = ['macronutrient-nav', 'recipes-nav', 'special-offers-nav']
    let navItemArray = []
    for(let i = 0; i < 3; i++){
      navItemArray.push(<div key={navItemTextArray[i]} className={'nav-bar-item ' + navItemClassArray[i]} >{navItemTextArray[i]}</div>)
    }
    return(
    <div className="nav-bar-container">
      {navItemArray}
    </div>)
  }
}
