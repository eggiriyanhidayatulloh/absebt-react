import { useEffect, useState } from "react";
import { Container, Button, Badge, Col } from "react-bootstrap";
import axios from "axios";
import Navbar from "./navbar";
import Edit from "./edit";
import { logout } from "./logout";
import { Link } from "react-router-dom";

function Dashboard({ title }) {
  const [absensiList, setAbsensiList] = useState([]);
  const [absenNotif, setAbsenNotif] = useState(false);

  //usesState buat nampung
  // useEffect yang pertama kali perntah dilakukan
  useEffect(() => {
    if (!localStorage.getItem("nama") && !localStorage.getItem("nip")) {
      console.log("user belum login");
      window.location.replace("/login");
    }
    axios({
      method: "GET",
      url: "http://localhost:3200/absensi",
    }).then((result) => setAbsensiList(result.data.absensi));
  }, [absenNotif]);

  const absen = (params) => {
    const requestingData = {
      nip: localStorage.getItem("nip"),
    };
    axios({
      method: "POST",
      url: `http://localhost:3200/absensi/${params}`,
      data: requestingData,
    }).then(() => {
      setAbsenNotif(!absenNotif);
    });
  };

  return (
    <div>
      <Container>
        <main className="col-md-12 ms-sm-auto col-lg-12 px-md-4">
          <Navbar />
          <h2>{title}</h2>
          <div>
            <p>Hello {localStorage.getItem("nama")}</p>
            <p>nip {localStorage.getItem("nip")} </p>
            <Col>
              <Button
                onClick={() => logout()}
                className="mt-2"
                size="sm"
                variant="danger"
              >
                Logout
              </Button>
              <br></br>
              <Button
                as={Link}
                to="/edit"
                className="mt-2"
                size="sm"
                variant="danger"
              >
                Change Password
              </Button>
            </Col>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">NIP</th>
                  <th scope="col">Nama</th>
                  <th scope="col">Status</th>
                  <th scope="col">Tanggal</th>
                </tr>
              </thead>
              <tbody>
                {absensiList.map((absensi, i) => {
                  const { users_nip, status, createdAt } = absensi;
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{users_nip}</td>
                      <td>{localStorage.getItem("nama")}</td>
                      <td>{status}</td>
                      <td>{createdAt}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-center gap-2">
            <Badge
              pill
              bg="primary"
              style={{ cursor: "pointer" }}
              onClick={() => absen("checkin")}
            >
              Checkin
            </Badge>
            <Badge
              pill
              bg="danger"
              style={{ cursor: "pointer" }}
              onClick={() => absen("checkout")}
            >
              Checkout
            </Badge>
          </div>
        </main>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <div class="footer text-center mt-15">
        <hr />
        <p class="copy">Copyright Erhit Adventure 2022</p>
      </div>
    </div>
  );
}

export default Dashboard;
