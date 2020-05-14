import React, { Component } from 'react'

 class Favorit extends Component {
    render() {
        const {favoriteList}=this.props
        
            return(
                
                <div className="lesFilms">
                {favoriteList.map((el)=>(
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
                    </div>
            ))}
                </div>)}}
            
        
        
            

export default Favorit
