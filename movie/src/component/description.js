import React,{Component} from 'react';
import './movieDescription.css'





class MovieDescription extends React.Component {

    render(props) {
      
      const description = this.props.description.map(el => {
        return(
        <div className="moviedescription"> 
            <div className="posterFilm ">
            <div>
                <button className="btnBack" onClick={() => this.props.hidingDescription()}> Back to movies list </button>
            </div>
            <h2>Résumé détaillé:</h2>
            <p className='parag'>En 1986, la jeune Adélaïde Wilson (née Thomas) part en vacances avec ses parents à Santa Cruz. À la plage du parc d'attractions Santa Cruz Beach Boardwalk, Adélaïde s'éloigne et pénètre dans le palais du rire où elle rencontre un doppelgänger dans la galerie des glaces. Adélaïde retrouve ensuite ses parents, mais, traumatisée, elle est incapable de parler de son expérience.</p>
            <div className="filmPicture1">
                <img className="image1" alt="aze" src={el.img} ></img>
            </div>
            <div className="titreDeFilm">
                <h2 > titre de film : {el.title} </h2>
                <h2 > category: {el.category} </h2> 
                <h2>annèe:{el.year}</h2>
            </div>
        </div>

        </div>)})
        
      return(
        <div >
          {description}
        </div>
      )
    }
  }


export default MovieDescription;




