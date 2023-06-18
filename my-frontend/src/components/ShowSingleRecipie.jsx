import React, { Component } from "react";
import axios from "axios";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
// import "../Css/Status.scss"
// import { DataContext } from "./CartActions";
class ShowSingleRecipie extends Component {

    constructor(props) {
        super(props);
        this.state = {
            recipie: {},
        };
    }

    componentDidMount() {
        var idL = localStorage.getItem("id")

        axios
            .get(
                `http://167.99.18.33:8000/SingleRecipe`, {
                id: 1
            })
            .then((response) => {
                this.setState({
                    recipie: response.data.recipie,
                });
                console.log(response)
            });
    }

    render() {
        //fix this aswell   const{like} = this.context;
        const { recipie } = this.state;

        return (
            <div className="catName">
                <div className="gridContainer">

                    <div className="wrap">
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
                        <br></br>
                    </div>
                </div>
            </div>
        );
    }
}
export default ShowSingleRecipie;