import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { logout } from "./logout";

const Edit = ({ title }) => {
  const [nama, setNama] = useState(localStorage.getItem("nama"));
  const [password, setPassword] = useState("");
  const [passwordBaru, setPasswordBaru] = useState("");

  const updateProfile = () => {
    const requestingData = {
      nip: localStorage.getItem("nip"),
      passwordBaru: passwordBaru,
      password: password,
      nama: nama,
    };
    axios({
      method: "PUT",
      url: "http://localhost:3200/users",
      data: requestingData,
    }).then(() => {
      alert("anda akan keluar dari sistem, silahkan login kembali.");
      logout();
    });
  };

  return (
    <Container>
      <Form className="my-4">
        <h3>{title}</h3>
        <Form.Group className="">
          <Form.Label>Nama</Form.Label>
          <Form.Control
            onChange={(event) => setNama(event.target.value)}
            defaultValue={localStorage.getItem("nama")}
          />
        </Form.Group>
        <Form.Group className="mt-4">
          <Form.Label>Password Baru</Form.Label>
          <Form.Control
            onChange={(event) => setPasswordBaru(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mt-4">
          <Form.Label>Password Lama</Form.Label>
          <Form.Control onChange={(event) => setPassword(event.target.value)} />
          <Form.Text className="text-muted">
            Silahkan masukan password lama anda. Anda diharuskan melakukan login
            ulang setelah mengupdate password.
          </Form.Text>
        </Form.Group>
      </Form>
      <Button className="w-10">Update Profile</Button>
    </Container>
  );
};

export default Edit;
