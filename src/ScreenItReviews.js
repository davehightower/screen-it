import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";

class ScreenItReviews extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
     rating: 1
    };
  }
  
  // Create the movie review
  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }
  
  render() {
     const { rating } = this.state;
     
     return (                
       <div>
         <h2 className="movie-rating">Add rating: {rating}</h2>
         <StarRatingComponent 
           name="rate1" 
           starCount={10}
           value={rating}
           onStarClick={this.onStarClick.bind(this)}
         />
       </div>

    );
  }
}

export default ScreenItReviews;