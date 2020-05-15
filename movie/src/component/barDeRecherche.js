/* 
import React, { Component } from 'react'
 class barDeRecherche extends Component {
  constructor() {
    super()
    
    this.state = {
      
      t:[1,2,3,4,5],
      starClicked:"☆",
       
    }
  }
  getRate = (el) => {
    this.setState(
      {starRate: parseInt(el)}
    )
    this.setState(
      {starClicked:"🌟" }
    )
    

  }
 
  render() {
    
    
    const   {value  , onChange,mapEtoile } = this.props
    return (
      <div className="barDeRecherche">
      <div className="starRating">
          {this.state.t.map(el => 
          <button onClick={()=>this.getRate(el)}>{this.state.starClicked}
          </button>)}
      </div>
      
      <input className="inputfiled" type="text"
        value={value}
        onChange={(event) => {
            onChange(event.target.value)
        }}
        placeholder="écrivez votre film préféré pour une meilleure recherche ..."></input>
        <span>★★★★☆</span>

     </div>
      
    )
  }
}

export default barDeRecherche
 */