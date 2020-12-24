import React from "react";
import Contact from "../Components/Contact";
import Nav from "../Components/Nav";
import SayMyName from "../Components/SayMyName/SayMyName";

const Home = () => (
  <>
    <Nav />
    <h1>Welcome</h1>
    <h2>to my portfolio</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Modi, deserunt dicta totam dolore sunt quo
      distinctio, esse quibusdam mollitia illo laudantium ratione delectus! Ipsa veniam
      dolorem inventore ad optio molestiae.
    </p>

    <SayMyName />
    <Contact />
  </>
);

export default Home;
