import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";
import AuthService from "../../services/auth.service";
import RoomsService from "../../services/rooms-service";
function AddRoom() {
  const [CurrentUser, setCurrentUser] = useState(undefined);
  const [ville, setVille] = useState();
  const [adresse, setAdresse] = useState();
  const [prix, setPrice] = useState();
  const [images, setImages] = useState();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const user1 = AuthService.getCurrentUser();

    if (user1) {
      setCurrentUser(user1);
    }
  }, []);
  const handleAddRoom = (e) => {
    e.preventDefault();
    const userId = CurrentUser.id;
    console.log(userId);
    RoomsService.addRoom(ville, adresse, prix, images, userId).then(
      (response) => {
        console.log(response);
        navigate("/home");
      },
      (error) => {
        console.log(error);
        setError(error.message);
      }
    );
    console.log("addroom");
  };
  return (
    <div className="mx-5">
      {error && (
        <div className="alert alert-danger">
          <strong>{error}</strong>
        </div>
      )}

      <Form>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="ville">Ville</Label>
              <Input
                id="vile"
                name="Ville"
                placeholder="Ville"
                type="ville"
                onChange={(e) => setVille(e.target.value)}
                required
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                id="username"
                name="username"
                placeholder="username"
                type="username"
                required
              />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label for="exampleAddress">Address</Label>
          <Input
            id="exampleAddress"
            name="address"
            placeholder="1234 Main St"
            required
            onChange={(e) => setAdresse(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress2">Address 2</Label>
          <Input
            id="exampleAddress2"
            name="address2"
            placeholder="Apartment, studio, or floor"
            required
          />
        </FormGroup>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="image">Image</Label>
              <Input
                id="image"
                name="image"
                required
                onChange={(e) => setImages(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="exampleState">State</Label>
              <Input id="exampleState" name="state" required />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="price">Price</Label>
              <Input
                id="price"
                type="number"
                name="price"
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </FormGroup>
          </Col>
        </Row>

        <Button color="primary" onClick={handleAddRoom}>
          Sign in
        </Button>
      </Form>
    </div>
  );
}

export default AddRoom;
