import Head from "next/head";
import { Fragment } from "react";
import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Greeting from "../components/Greeting";
import MessageModal from "../components/MessageModal";

import { useState } from "react";

import classes from "../styles/Home.module.css";
import Showcase from "../components/Showcase";

export default function Home() {
  console.log(
    "Look at you checking out the nuts and bolts. Hope you like it and feel free to let me know what you think!"
  );
  const [modalIsShown, setModalIsShown] = useState(false);
  const showModalHandler = () => {
    setModalIsShown(true);
  };
  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  const [darkMode, setDarkMode] = useState(false);

  const darkToggleHandler = () => {
    setDarkMode(!darkMode);
  };

  const [spanish, setSpanish] = useState(false);

  const spanishToggleHandler = () => {
    setSpanish(!spanish);
  };

  const containerClass = darkMode
    ? `${classes.container} dark-mode`
    : classes.container;

  const modalClass = darkMode ? "dark-mode" : null;

  const d = new Date();
  const currentYear = d.getFullYear();

  return (
    <Fragment>
      {modalIsShown && (
        <MessageModal
          modalClass={modalClass}
          spanish={spanish}
          hideModal={hideModalHandler}
        />
      )}
      <Head>
        <title>Joshua Rice</title>
        <meta
          name="description"
          content="A machinist, painter, and React.js developer from Arizona in the United States"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className={containerClass}>
        <main className={classes.main}>
          <section id="greeting">
            <Greeting
              darkToggle={darkToggleHandler}
              spanishToggle={spanishToggleHandler}
              spanish={spanish}
            />
          </section>
          <section id="about-me">
            <AboutMe spanish={spanish} />
          </section>
          <section>
            <Showcase spanish={spanish} />
          </section>
          <section id="contact-me">
            <ContactMe modalToggle={showModalHandler} spanish={spanish} />
          </section>
        </main>

        <footer className={classes.footer}>Joshua Rice {currentYear}</footer>
      </div>
    </Fragment>
  );
}
