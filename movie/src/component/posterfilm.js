import React, { Component } from 'react'

 class PosterFilm extends Component {

    render() {

        const {films} = this .props
        /* const {
            img="",
            title="",
            etoile=""
        }=films */
        
  
        return (
            
            <div className="lesFilms">
            <div className="posterFilm ">
                <div className="filmPicture">
                    <img className="image" alt="aze" src={films.img} ></img>
                </div>
                <div className="titreDeFilm">
                    <h3> {films.title} </h3>
                    
                </div>
                <div className="etoile">
                    <span> {films.etoile} </span>
                </div>
            </div>

        </div> 
        )






















    }
}

export default PosterFilm


