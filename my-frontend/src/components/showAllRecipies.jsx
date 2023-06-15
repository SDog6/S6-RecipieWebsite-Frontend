import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../css/showAllRecipies.scss';

export default function ShowAllRecipies() {

  const [data, setData] = useState();

  useEffect(() => {

    async function fetchData() {
      const timestamp = new Date().getTime();
      await axios
        .get(
          `http://167.99.18.33:8000/Recipies?timestamp=${timestamp}`)
        .then(async (response) => {
          const data = await response.data
          setData(
            data
          );
        });
    }
    fetchData()

  }, [])

  function openRecipie(){
    localStorage.clear();
    window.location.href = './ShowRecipie';
  }

  if (!data) return <div>Loading...</div>

  const recipies = data.recipies

  return (

    <div className="catName">
    <div className="gridContainer">
      {recipies.map(recipie => (
        <div className="wrap">
          <Card>
            <CardImg className="anImg" src={recipie.picture} alt="Card image cap" />
            <CardBody>
              <CardTitle>{recipie.title}</CardTitle>
              <CardSubtitle>Author: {recipie.author}</CardSubtitle>
              <CardSubtitle>Description : {recipie.description}</CardSubtitle>
              <Button
                style={{ marginRight: "10px" }}
                onClick={() => {openRecipie(recipie.id)}}
              >
                Open
              </Button>
            </CardBody>
          </Card>
          <br></br>
        </div>
      ))}
    </div>
  </div>
  )
}



