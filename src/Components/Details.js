import React from 'react'
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import  data  from "../Data";


const Details = () => {
    let { id } = useParams();
    let specificMovie = data.filter((el)=> el.id===id);

    console.log(specificMovie);
  return (
    <div>
        {
        specificMovie.map((el) => (
             <Card style={{ width: '800px', margin:"auto" }}>
             <Card.Body>
                <iframe src={el.trailerUrl} width="650" height="400" title="youtube video player">
                </iframe>
               <Card.Title>{el.titre}</Card.Title>
               <Card.Text>{el.description}</Card.Text>
               <Button variant="primary">
                <Link 
                style={{textDecoration: "none", color:"white"}} to={"/"}>
                    Back Home</Link>
               </Button>
             </Card.Body>
           </Card>
        ))}
    </div>
  )
}

export default Details
