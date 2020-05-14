
import React, { Component } from 'react'
 class barDeRecherche extends Component {
  render() {
    
    const   {value  , onChange } = this.props
    return (
      <div className="barDeRecherche">
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
