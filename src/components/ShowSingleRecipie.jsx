import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class ShowRecipie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipie: {},
      isLoading: true // Add loading state
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const timestamp = new Date().getTime();
    const idL = parseInt(localStorage.getItem("id"));
    console.log("hey");
    try {
      const response = await axios.post(`http://167.99.18.33:8000/SingleRecipe`, {
        id: idL // Include the request body with { "id": 1 }
      });
      const recipieData = response.data.recipies;
      this.setState({ recipie: recipieData, isLoading: false }); // Update loading state
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  render() {
    const { recipie, isLoading } = this.state;

    return (
      <div className="catName">
        <div className="gridContainer">
          <div className="wrap">
            {isLoading ? (
              // Show loading screen while recipe is being fetched
              <div>Loading...</div>
            ) : (
              Object.keys(recipie).length > 0 && (
                <Card>
                  <CardImg className="anImg" src={recipie.picture} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{recipie.title}</CardTitle>
                    <CardSubtitle>Author: {recipie.author}</CardSubtitle>
                    <CardSubtitle>Description : {recipie.description}</CardSubtitle>
                    <CardSubtitle>Ingredients : {recipie.ingredients}</CardSubtitle>
                    <CardSubtitle>Steps : {recipie.instructions}</CardSubtitle>
                  </CardBody>
                </Card>
              )
            )}
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default ShowRecipie;
