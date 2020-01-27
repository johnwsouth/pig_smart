import React from 'react';
import NutritionTable from '../components/nutrition-table'
export default class LandingPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div className='landing-page'>
          <NutritionTable className='nutrition-table'/>
      </div>
    )
  }
}
