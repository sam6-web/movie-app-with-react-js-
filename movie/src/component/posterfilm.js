import React, { Component } from 'react'

 class PosterFilm extends Component {
     constructor(props){
         super()
     }
    render() {
        return (
            <div className="lesFilms">
            {this.props.contenu.map(el=>
                
            <div className="posterFilm">
                <div classname="filmPicture">
                    <img className="image" alt="aze" src={el.img} ></img>
                </div>
                <div className="titreDeFilm">
                    <h3> {el.title} </h3>
                </div>
                <div className="etoile">
                    <span> {el.etoile} </span>
                </div>
            </div>
                
                )}
            
           
        
        </div> 
        )
    }
}

export default PosterFilm


