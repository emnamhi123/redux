import React, { useState } from "react";
import { Card, Button, Modal, Form } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import { deleteMovie, updateMovie } from "../Redux/movieSlice";
import { useDispatch } from "react-redux";

const MovieCard = ({ movieInfo }) => {
  const dispatch = useDispatch();
  const deleteHandler = () => {
    dispatch(deleteMovie(movieInfo.id));
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [updatedMovie, setUpdateMovie] = useState({
    id: movieInfo.id,
    titre: movieInfo.title,
    description: movieInfo.description,
    posterURL: movieInfo.posterURL,
    rating: movieInfo.rating,
    trailerUrl: movieInfo.trailerUrl,
  });
  const handleChange = (e) => {
    setUpdateMovie({ ...updatedMovie, [e.target.name]: e.target.value });
  };
  console.log(updatedMovie);

  const updateHandler = () => {
    dispatch(updateMovie({ id: movieInfo.id, updatedMovie: updatedMovie }));
    handleClose();
  };

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movieInfo.posterURL} />
        <Card.Body>
          <Card.Title> {movieInfo.titre} </Card.Title>
          <Card.Text>{movieInfo.description}</Card.Text>
        </Card.Body>
        <Rating name="read-only" readOnly max={10} value={movieInfo.rating} />
        <Button variant="success" onClick={handleShow}>
          Edit Movie
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Movie Title</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  defaultValue={movieInfo.title}
                  name="title"
                  type="text"
                  placeholder="Enter Movie Title"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  defaultValue={movieInfo.description}
                  name="description"
                  type="text"
                  placeholder="Enter your Description"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>ImageUrl</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  defaultValue={movieInfo.posterURL}
                  name="posterURL"
                  type="text"
                  placeholder="Enter your ImageUrl"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>TrailerUrl</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  defaultValue={movieInfo.trailerUrl}
                  name="trailerURL"
                  type="text"
                  placeholder="Enter your TrailerUrl"
                />
              </Form.Group>
              <Rating
                defaultValue={movieInfo.rating}
                name="simple-controlled"
                max={10}
                onChange={(event, newValue) => {
                  setUpdateMovie({ ...updatedMovie, rating: newValue });
                }}
              />
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={updateHandler}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
        <Button variant="dark">
          <Link
            style={{ textDecoration: "none" }}
            to={`/details/${movieInfo.id}`}
          >
            More Details
          </Link>
        </Button>
        <Button variant="danger" onClick={deleteHandler}>
          Delete
        </Button>
      </Card>
      <br />
    </div>
  );
};
export default MovieCard