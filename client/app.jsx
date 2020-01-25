import React from 'react';
import NavBar from './containers/nav-bar'

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentView: true
    }
  }

  renderSelector(){
    let components = <NavBar/>;
    return components;
  }

  render(){
    let componentTree = this.renderSelector();
    return(
      componentTree
    );
  }
}
