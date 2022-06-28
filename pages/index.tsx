import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Modal from "./modal";
import Navbar from "../components/organisms/Navbar";
import MainBanner from "../components/organisms/mainBanner";
import Keterangan from "../components/organisms/Keterangan";
import CountDown from "../components/organisms/countDown";
import Invitation from "../components/organisms/Invitation";
import CalonPasangan from "../components/organisms/calonPasangan";
import WeedingLocation from "../components/organisms/WeedingLocation";
import Maps from "../components/organisms/Maps";
import Gallery from "../components/organisms/Gallery";
import Amplop from "../components/organisms/Amplop";
import Privasi from "../components/organisms/Privasi";
import Footer from "../components/organisms/Footer";

import AddBook from "../components/organisms/Comments/AddBook";
import BooksList from "../components/organisms/Comments/BookList";

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(true);

  const [bookId, setBookId] = useState("");

  return (
    <>
      <Modal isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <Navbar />
      <MainBanner />
      <Keterangan />
      <CountDown />
      <Invitation />
      <CalonPasangan />
      <WeedingLocation />
      <Maps />
      <Gallery />
      <Amplop />
      <Privasi />

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddBook id={bookId} setBookId={setBookId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BooksList />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
