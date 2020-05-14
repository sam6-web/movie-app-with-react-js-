import React, { Component } from 'react'
import PosterFilm from "./posterfilm"



 class FilmsList extends Component {
   
    render() {
        const{ajouter,a,add} = this.props

        return (

             <div className="lesFilms">
            <PosterFilm  rr={add}    az={a}  />
            <div>
            <button className="btnAjouter"
             onClick={()=>ajouter({title: prompt('ajouter le titre du film '),
                                    img: prompt("ajouter un lien de l'image"),
                                    etoile : prompt("rating? ")
                                    })} >Ajouter films </button>
            </div>
            
            </div>
        )
    }
}

export default FilmsList



