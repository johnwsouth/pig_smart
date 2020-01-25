import React from 'react';

export default class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentPage: '',
    }
  }

  render(){
    let navItemTextArray = ['macronutrient calculator', 'recipes', 'special offers']
    let navItemArray = []
    for(let i = 0; i < 3; i++){
      navItemArray.push(<div className='nav-bar-item'>{navItemTextArray[i]}</div>)
    }
    return(
    <div className="nav-bar-container">
      {navItemArray}
    </div>)
  }
}
