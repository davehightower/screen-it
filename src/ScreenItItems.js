import React, { Component } from "react";
import FlipMove from "react-flip-move";
import ScreenItReviews from "./ScreenItReviews";

class ScreenItItems extends Component {
  constructor(props) {
    super(props);
    
    this.createTasks = this.createTasks.bind(this);
  }
  
  // Create the movie list
  createTasks(item) {
    return <li key={item.key}>{item.text}
      <div className="movie-image">
        <img className="circular--square" src="//placekitten.com/200/200" />
      </div>
      <ScreenItReviews/>
    </li>
  }
  
  render() {
    var screenitEntries = this.props.entries;
    var listscreenItems = screenitEntries.map(this.createTasks);
    
    return (
      
        <div>
          <ul className="theMovies">
          
            <FlipMove duration={294} easing="ease-out">
              {listscreenItems}
            </FlipMove>      
            
          </ul>    
        </div>

    );
  }
}

export default ScreenItItems;