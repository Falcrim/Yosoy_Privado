import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthProviders } from "../components/authProvider";
import DashboardWrapper from "../components/dashboardwrapper";
//imports para vistas
import { db } from '../firebase/firebase';
import { doc, onSnapshot } from 'firebase/firestore';
//añadir diseño
import style from "../styles/dashboardwrapper.module.css";

export default function DashboardView() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [state, setState] = useState(0);
  //variables para guardar redes primarias y secundarias
  const [links, setLinks] = useState({
    whatsApp: 0,
    shareRRSS: 0,
    email: 0,
    phone: 0,
    maps: 0,
    linkedin: 0,
    facebook: 0,
    instagram: 0,
    tiktok: 0,
    twitter: 0,
    twitch: 0,
    qrOffline: 0
  });


  async function handleUserLoggeIn(user) {
    setCurrentUser(user);
    setState(2);
  }
  function handleUserNotRegistered(user) {
    navigate("/iniciar-sesion");
  }
  function handleUserNotLoggedIn() {
    navigate("/iniciar-sesion");
  }

  if (state === 0) {
    return (
      <AuthProviders
        onUserLoggedIn={handleUserLoggeIn}
        onUserNotLoggedIn={handleUserNotRegistered}
        onUserNotRegistered={handleUserNotLoggedIn}
      ></AuthProviders>
    );
  }
  //obtener la lista de redes por usuario y mistrarlas en su perfil
  const docRef = doc(db, 'VisitsCounter', currentUser.publicId)
  onSnapshot(docRef, (doc) => {
    setLinks({
      whatsApp: doc.data().whatsapp,
      shareRRSS: doc.data().shareRRSS,
      email: doc.data().email,
      phone: doc.data().phone,
      maps: doc.data().maps,
      linkedin: doc.data().linkedin,
      facebook: doc.data().facebook,
      instagram: doc.data().instagram,
      tiktok: doc.data().tiktok,
      twitter: doc.data().twitter,
      twitch: doc.data().twitch,
      qrOffline: doc.data().qrOffline
    })
  })

  return (
    <DashboardWrapper >
      <Row sm={2}>
        <Col>
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>{links.whatsApp}</Card.Title>
              <Card.Text>Whatsapp</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>{links.email}</Card.Title>
              <Card.Text>Email</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>{links.phone}</Card.Title>
              <Card.Text>Teléfono</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>{links.facebook}</Card.Title>
              <Card.Text>Facebook</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>{links.maps}</Card.Title>
              <Card.Text>Maps</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>{links.linkedin}</Card.Title>
              <Card.Text>Linkedin</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>{links.instagram}</Card.Title>
              <Card.Text>Instagram</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col className="ml-3 mr-3">
          <Card className="mt-3 text-center">
            <Card.Body>
              <Card.Title>{links.tiktok}</Card.Title>
              <Card.Text>Tiktok</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>{links.twitter}</Card.Title>
              <Card.Text>Twitter</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mt-3">
            <Card.Body>
              <Card.Title>{links.twitch}</Card.Title>
              <Card.Text>Twitch</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/*<Row className={style.mainRowcito}>
        <Col className={style.mainColcito}>
          <h3>Red Social</h3>
        </Col>
        <Col className={style.mainColcito}>
          <h3>Visitas</h3>
        </Col>
      </Row>
      <Row className={style.rowcito}>
        <Col className={style.colcito}>
          <h5>Whatsapp</h5>
        </Col>
        <Col className={style.colcito}>
          <h5>{links.whatsApp}</h5>
        </Col>
      </Row>
      <Row className={style.rowcito}>
        <Col className={style.colcito}>
          <h5>Phone</h5>
        </Col>
        <Col className={style.colcito}>
          <h5>{links.phone}</h5>
        </Col>
      </Row>
      <Row className={style.rowcito}>
        <Col className={style.colcito}>
          <h5>Email</h5>
        </Col>
        <Col className={style.colcito}>
          <h5>{links.email}</h5>
        </Col>
      </Row>
      <Row className={style.rowcito}>
        <Col className={style.colcito}>
          <h5>Maps</h5>
        </Col>
        <Col className={style.colcito}>
          <h5>{links.maps}</h5>
        </Col>
      </Row>
      <Row className={style.rowcito}>
        <Col className={style.colcito}>
          <h5>Linkedin</h5>
        </Col>
        <Col className={style.colcito}>
          <h5>{links.linkedin}</h5>
        </Col>
      </Row>
      <Row className={style.rowcito}>
        <Col className={style.colcito}>
          <h5>Facebook</h5>
        </Col>
        <Col className={style.colcito}>
          <h5>{links.facebook}</h5>
        </Col>
      </Row>
      <Row className={style.rowcito}>
        <Col className={style.colcito}>
          <h5>Instagram</h5>
        </Col>
        <Col className={style.colcito}>
          <h5>{links.instagram}</h5>
        </Col>
      </Row>
      <Row className={style.rowcito}>
        <Col className={style.colcito}>
          <h5 >Tiktok</h5>
        </Col>
        <Col className={style.colcito}>
          <h5>{links.tiktok}</h5>
        </Col>
      </Row>
      <Row className={style.rowcito}>
        <Col className={style.colcito}>
          <h5>Twitter</h5>
        </Col>
        <Col className={style.colcito}>
          <h5>{links.twitter}</h5>
        </Col>
      </Row>
      <Row className={style.rowcito}>
        <Col className={style.colcito}>
          <h5>Twitch</h5>
        </Col>
        <Col className={style.colcito}>
          <h5>{links.twitch}</h5>
        </Col>
      </Row> */}
    </DashboardWrapper >
  );
}

/*<table>
        <tr>
          <th><h3>Redes</h3></th>
          <th><h3>Vistas</h3></th>
        </tr>
        <tr>
          <td><h5>Whatsapp</h5></td>
          <td><h5>{links.whatsApp}</h5></td>
        </tr>
        <tr>
          <td><h5>Phone</h5></td>
          <td><h5>{links.phone}</h5></td>
        </tr>
        <tr>
          <td><h5>Email</h5></td>
          <td><h5>{links.email}</h5></td>
        </tr>
        <tr>
          <td><h5>Maps</h5></td>
          <td><h5>{links.maps}</h5></td>
        </tr>
        <tr>
          <td><h5>Linkedin</h5></td>
          <td><h5>{links.linkedin}</h5></td>
        </tr>
        <tr>
          <td><h5>Facebook</h5></td>
          <td><h5>{links.facebook}</h5></td>
        </tr>
        <tr>
          <td><h5>Instagram</h5></td>
          <td><h5>{links.instagram}</h5></td>
        </tr>
        <tr>
          <td><h5>Tiktok</h5></td>
          <td><h5>{links.tiktok}</h5></td>
        </tr>
        <tr>
          <td><h5>Twitter</h5></td>
          <td><h5>{links.twitter}</h5></td>
        </tr>
        <tr>
          <td><h5>Twitch</h5></td>
          <td><h5>{links.twitch}</h5></td>
        </tr>
      </table>
      <br/>*/