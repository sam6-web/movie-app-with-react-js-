
import React,{Component} from 'react';





class Favorit extends React.Component {
    constructor(props) {
      super(props)
      
    }
    render() {
      
      const favoriteList = this.props.f.map(x => {
        return(
        <div className="favoritemovie"> 
            <h4> {x.name} </h4>
            <p> {x.star}</p>
            <img src={x.img} width="200"/>
            <br/>
            <button > Description </button>

        </div>)})
        {console.log(favoriteList)}
      return(
        <div className="favoritemovies">
          {favoriteList}
        </div>
      )
    }
  }


export default Favorit
