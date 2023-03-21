import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
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
import { storage } from "../../firebase/firebase";
import AuthService from "../../services/auth.service";
import RoomsService from "../../services/rooms-service";
function AddRoom() {
  const [CurrentUser, setCurrentUser] = useState(undefined);
  const [ville, setVille] = useState();
  const [adresse, setAdresse] = useState();
  const [description, setDescription] = useState();
  const [prix, setPrice] = useState();
  const [image, setImage] = useState();
  const [url, setURL] = useState();

  const navigate = useNavigate();
  useEffect(() => {
    const user1 = AuthService.getCurrentUser();

    if (user1) {
      setCurrentUser(user1);
    }
  }, []);
  const databaseRef = ref(storage, "images/" + `${Date.now()}-${image?.name}`);
  const uploadFile = async () => {
    const uploadTask = uploadBytesResumable(databaseRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = snapshot.bytesTransferred / snapshot.totalBytes;
      },
      (error) => {
        console.log(error);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          //

          console.log(downloadURL);
          setURL(downloadURL);
        });
      }
    );
  };
  const handleAddRoom = async (e) => {
    e.preventDefault();

    await uploadFile();
    console.log(url);
    const userId = CurrentUser.id;
    console.log(userId);
    console.log(description);
    if (url) {
      RoomsService.addRoom(ville, adresse, prix, url, userId, description).then(
        (response) => {
          console.log(response);
          // navigate("/home");
        },
        (error) => {
          console.log(error);
          setError(error.message);
        }
      );
    } else {
      console.log("url not uploaded yet");
    }
  };
  return (
    <div className="mx-5">
      <Form className="mx-6">
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
              <Label for="exampleAddress">Adresse</Label>
              <Input
                id="exampleAddress"
                name="address"
                placeholder="1234 Main St"
                required
                onChange={(e) => setAdresse(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <FormGroup>
              <Label for="exampleAddress2">Description</Label>
              <Input
                id="exampleAddress2"
                name="description"
                type="textarea"
                placeholder="Description f you room"
                required
                onChange={(e) => setDescription(e.target.value)}
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
                type="file"
                required
                onChange={(e) => setImage(e.target.files[0])}
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
        </Row>

        <Button color="primary" onClick={handleAddRoom}>
          Add Post
        </Button>
      </Form>
    </div>
  );
}

export default AddRoom;
