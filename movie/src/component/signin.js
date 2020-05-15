import React, { Component } from 'react'
import "./signin.css"
class Signin extends Component {
  constructor(){
    super()
    this.state = {

      inputEmail:"",
      inputPassword:"",
    }
  }
  changeInputEmail = (e) =>{
    this.setState({
      inputEmail:e.target.value
    })
  }
  changeInputPassword = (e) =>{
    this.setState({
      inputPassword:e.target.value
    })
  }
  
    
  
  clickSignUp= () => {
      if (
        this.state.inputEmail  == localStorage.getItem("email") &&
        this.state.inputPassword == localStorage.getItem("password")
      )
      {
        alert("Bienvenue dans ma box movie");
      }
      else {
        alert("Oups!Veuillez vérifier votre mot  passe ou votre adresse mail");
      }
    }
    

  



    render() {
        return (
            <div className="signin">
          <form onSubmit={this.handleSubmit} className="FormFields">
          <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" onChange={this.changeInputEmail}  className="FormField__Input" placeholder="Enter your email"   /* value={this.state.email} */ /*onChange={this.handleChange} */ />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" onChange={this.changeInputPassword}  className="FormField__Input" placeholder="Enter your password" /* value={this.state.password} */ /*onChange={this.handleChange} */ />
              </div>
              <div className="FormField">
                  <button className="FormField_Button" onClick={this.clickSignUp}>Sign in</button> <a  className="FormField__Link">Create an account</a>
              </div>
            </form>
        </div>
        )
    }
}

export default Signin
