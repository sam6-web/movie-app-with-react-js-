import React, { Component } from 'react'
 class PosterFilm extends Component {

    render() {

        const {az,add} = this .props
        
        return (

        
        <div className="lesFilms">
            {az.map((el)=>(
           
            <div className="posterFilm ">
                <div className="filmPicture">
                    <img className="image" alt="aze" src={el.img} ></img>
                </div>
                <div className="titreDeFilm">
                    <h3 > {el.title} </h3> 
                </div>
                <div className="etoile">
                    <span> {el.etoile} </span>
                </div>
                
                <button className="aj" onClick={(el)} >ajouter aux favorit</button>                
            </div>
            ))} 
        </div> 
        )
    }
}

export default PosterFilm


