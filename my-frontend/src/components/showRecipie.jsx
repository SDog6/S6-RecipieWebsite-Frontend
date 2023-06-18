import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class ShowRecipie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipie: {}
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const timestamp = new Date().getTime();
    const idItem = localStorage.getItem("id");
    console.log("hey");
    try {
      const response = await axios.get(`http://167.99.18.33:8000/SingleRecipe`, {
        id: idItem // Include the request body with { "id": 1 }
      });
      const recipieData = response.data.recipies;
      this.setState({ recipie: recipieData });
    } catch (error) {
      console.error("Error fetching recipe:", error);
    }
  };

  render() {
    const { recipie } = this.state;

    return (
      <div className="catName">
        <div className="gridContainer">
          <div className="wrap">
            {Object.keys(recipie).length > 0 && (
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
            )}
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default ShowRecipie;
