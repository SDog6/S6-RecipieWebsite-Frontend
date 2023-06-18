import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
// import '../css/showAllRecipies.scss';

export default function ShowRecipie() {

  const [data, setData] = useState();

  useEffect(() => {

    async function fetchData() {
      const timestamp = new Date().getTime();
      await axios
        .get(
            `http://167.99.18.33:8000/SingleRecipe`,{
                id: localStorage.getItem(id)
            })
          .then(async(response) => {
            const data = await response.data
            setData(
              data
            );
            console.log(response)
          });
    }
    fetchData()

  }, [])

//   function openRecipie(){
//     localStorage.clear();
//     window.location.href = './ShowRecipie';
//   }

  if (!data) return <div>Loading...</div>

  const recipie = data.recipie

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
              <CardSubtitle>Ingredients : {recipie.ingredoents}</CardSubtitle>
              <CardSubtitle>Steps : {recipie.instructions}</CardSubtitle>
            </CardBody>
          </Card>
          <br></br>
        </div>
    </div>
  </div>
  )
}



