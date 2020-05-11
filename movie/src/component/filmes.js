import React, { Component } from 'react'
import PosterFilm from "./posterfilm"



 class FilmsList extends Component {
   
  
    render() {
        
        return (
             <div className="lesFilms">
            {this.props.a.map((el)=><PosterFilm films={el}/>)}
            </div>
        )
    }
}

export default FilmsList



