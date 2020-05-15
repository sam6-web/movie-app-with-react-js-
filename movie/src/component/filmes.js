import React, { Component } from 'react'



 class FilmsList extends Component {
     
    render(props) {
        const{ajouter,value,tt, onChange,a,add} = this.props

        return (

             <div className="lesFilms">
{/*          bare de recherche et button mise à zero                */}

                    <div className="barDeRecherche">

                        <button className="rest" onClick={()=>this.props.rest()}>Mise à zero</button>
                        <div className="starRating">
                            {tt.map(el => 
                            <button className="btn_rate" onClick={()=>this.props.getRate(el)}>🌟</button>)}
                            
                        </div>
      
                    <input className="inputfiled" type="text"
                        value={value}
                        onChange={(event) => {
                        onChange(event.target.value)}}
                        placeholder="écrivez votre film préféré pour une meilleure recherche ...">
                    </input>
                        <span>★★★★☆</span>
{/*   fin       bare de recherche et button mise à zero                */}


            </div>
{/* filtrage */}
            {a.filter((el)=>
                {if(this.props.star==null)
                return el
                else if (this.props.star==el.etoile)
                return el
                })
/* fin filtrage */

/* mappage des films  */

            .map((el)=>{
        
           
        return(
            <div className="posterFilm ">
            <div className="filmPicture">
                <img className="image" alt="aze" src={el.img} ></img>
            </div>
            <div className="titreDeFilm">
                <h3 > {el.title} </h3> 
            </div>
            <div className="etoile">
                <span> {"🌟".repeat(el.etoile)} </span>
            </div>
            
            {/* <button className="aj" onClick={()=>this.props.add(el)} >ajouter aux favorit</button>   */}
            <br></br> 
            <button className="aj" onClick={() => this.props.showDescription(el)} >plus de detailles</button>  
 
{/* fin mappage des films */}
        </div>
        )
    })} 
            <div> 
{/* ajouter film by prompt */}
            <button className="btnAjouter"
             onClick={()=>ajouter({title: prompt('ajouter le titre du film '),
                                    img: prompt("ajouter un lien de l'image"),
                                    etoile : prompt("rating? ")
                                    })} >Ajouter films </button>
{/* fin ajouter film by prompt */}
                        
            </div>
            
            </div>
        )
    }
}

export default FilmsList



