import React, { Component } from 'react'

 class Signup extends Component {
    constructor(props){
        super(props)
        this.state={
        name: "",
        password: "",
        email : "",
        }
      }

    handleChangeName = (e) =>{
        this.setState ({
            name: e.target.value
            
        })
        localStorage.setItem("name",this.state.name)

    }
    

    
    handleChangePassWord = (e) =>{
        this.setState ({
            password : e.target.value
        })
        localStorage.setItem("password",this.state.password)
        
    }
    handleChangeEmail = (e) =>{
        this.setState ({
            email : e.target.value
        })
        localStorage.setItem("email",this.state.email)
        
    }
    log =()=>{
     
        alert("votre donner a eter bien enregister")
    }

    
    render() {
        return (
            <div className="signin">
          <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="FormField__Label" >Full Name</label>
                <input type="text"   className="FormField__Input" placeholder="Enter your full name"    value={this.state.name}  onChange={this.handleChangeName}    />
                <br></br>
                <span ></span>
              </div>
              <div className="FormField">
                <label className="FormField__Label" >Password</label>
                <input type="password"   className="FormField__Input" placeholder="Enter your password"   value={this.state.password}  onChange={this.handleChangePassWord}  />
              </div>
              <div className="FormField">
                <label className="FormField__Label" >E-Mail Address</label>
                <input type="email"   className="FormField__Input" placeholder="Enter your email"   value={this.state.email}  onChange={this.handleChangeEmail}  />
              </div>

              <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" /* value={this.state.hasAgreed} onChange={this.handleChange} */ /> I agree all statements in <a href="" className="FormField__TermsLink">terms of service</a>
                </label>
              </div>

              <div className="FormField">
                  <button className="FormField_Button" onClick={this.log}>Sign Up</button> 
              </div>
            </form>
        </div>
        )
    }
}

export default Signup
