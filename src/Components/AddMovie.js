import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import Rating from "@mui/material/Rating";
import {v4 as uuidv4} from "uuid";
import { useDispatch } from "react-redux";
import { addMovie } from "../Redux/movieSlice";

const AddMovie = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newMovie, setNewMovie] = useState({
    id:uuidv4(),
  });

  const changeHandler = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const saveMovieHandler = () => {
    dispatch(addMovie(newMovie))
    handleClose();
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie titre</Form.Label>
              <Form.Control
                type="Text"
                name="titre"
                placeholder="Enter Movie Titre"
                onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>description</Form.Label>
              <Form.Control
                type="Text"
                name="description"
                placeholder="Enter your Description"
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>ImageURL</Form.Label>
              <Form.Control
                type="Text"
                name="posterURL"
                placeholder="Enter your imageURl"
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>TrailerURL</Form.Label>
              <Form.Control
                type="Text"
                name="trailerUrl"
                placeholder="Enter your TrailerUrl"
                onChange={changeHandler}
              />
            </Form.Group>
            <Rating
              name="simple-controlled"
              max={10}
              value={null}
              onChange={(event, newValue) => {
                setNewMovie({ ...newMovie, rating: newValue });
              }}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={saveMovieHandler}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
