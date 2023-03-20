import React from "react";
import { useState } from "react";
import { createRoommate } from "../../services/Roommate-service";
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
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AuthService from "../../services/auth.service";

function AddRommate() {
  const [CurrentUser, setCurrentUser] = useState(undefined);
  const [ville, setVille] = useState();

  const [prix, setPrice] = useState();
  const [image, setImage] = useState();
  const [error, setError] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const user1 = AuthService.getCurrentUser();

    if (user1) {
      setCurrentUser(user1);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = CurrentUser.id;
    createRoommate(ville, prix, image, userId)
      .then((response) => {
        console.log("Success:", response);
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
              <Label for="username">Interests</Label>
              <Input
                id="username"
                name="username"
                placeholder="Interests"
                type="username"
              />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="image">Image</Label>
              <Input
                id="image"
                name="image"
                required
                onChange={(e) => setImage(e.target.value)}
              />
            </FormGroup>
          </Col>

          <Col md={6}>
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
          {/* <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {url && <img src={url} alt="Uploaded file" />}
          </div> */}
        </Row>

        <Button color="primary" onClick={handleSubmit}>
          Sign in
        </Button>
      </Form>
    </div>
  );
}

export default AddRommate;
