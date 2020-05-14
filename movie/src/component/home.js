import React, { Component } from 'react'
import "./home.css"
 class Home extends Component {
    render() {
        return (
            <div className="homePage">
                <div className="titleEtP">
                    <h1>Welcome Movie Box App </h1>
                    <h4>Download / Watch <br></br>
                         Any HD movie or TV-Show on your smart device for Free</h4>
                </div>
                <div className="titleEtP">
                    <img className="imghome" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyLT8DduoAnTuUmVsmy8rttNl4b0t25E12H5Lzg1JLKPQWVt8w&usqp=CAU"></img>
                    <img className="imghome" src="https://www.mediacritik.com/wp-content/uploads/2019/04/film_1556228152-1024x456.jpg "></img>
                </div>
                
            </div>
        )
    }
}

export default Home
