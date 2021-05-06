import React, { Component } from "react";
import ScreenItItems from "./ScreenItItems";

class ScreenIt extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      items: []
    };
    
    this.addMovie = this.addMovie.bind(this);
  }
  
  // Add a movie
  addMovie(e) {
    if (this._inputElement.value !== "") {
      var newMovie = {
        text: this._inputElement.value,
        key: Date.now()
      };
      
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newMovie)
        };
      });
    }    
    
    this._inputElement.value = "";
    
    console.log(this.state.items);
    
    e.preventDefault();
  }
  
  render() {
    return (

      <div className="screenItMain card">
        <div className="header card-header">
        <div className="main-title">Screen it</div>
          <div className="card-body">
            <form onSubmit={this.addMovie}>
            
              <div className="row">
                <div className="col-md-3 name-movie">
                  <label for="" className="form-label">Name</label>
                </div>
                <div className="col-md-9">
                  <input ref={(a) => this._inputElement = a}
                  
                  placeholder="Name of the movie">
                  
                  </input>
                </div>
                <div className="col-md-3 category-movie">
                  <label for="" class="form-label">Category</label>
                </div>
                <div className="col-md-9">
                <select className="form-select">
                  <option selected>Select a category</option>
                  <option value=""></option>
                </select>
                </div>
              </div>
              
              <button type="submit" class="add-movie">Add Movie</button>
            </form>
          </div>
        </div>
        <ScreenItItems entries={this.state.items}/>
      </div>

    );
  }
}

export default ScreenIt;