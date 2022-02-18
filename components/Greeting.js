import Image from "next/image";

import Switch from "../ui/Switch";
import { language } from "../public/language";

import classes from "./Greeting.module.css";

function Greeting(props) {
  const lang = props.spanish
    ? language.spanish.greeting
    : language.english.greeting;

  return (
    <div className={classes.container}>
      <div className={classes.greeting}>
      <div className={classes["switch-group"]}>
            <div className={classes.switch}>
              <Image
                src="/night-mode.svg"
                alt="Night Mode Icon"
                height={30}
                width={30}
                className={classes.icon}
              />
              <Switch toggle={props.darkToggle} />
            </div>
            <div className={classes.switch}>
              {lang.switch}
              <Switch toggle={props.spanishToggle} />
            </div>
          </div>
        <div className={classes["blob-container"]}>
          <Image
            src="/Blob.svg"
            alt="Blob SVG"
            height={250}
            width={300}
            className={classes.blob}
            priority
          />
        </div>
        <div className={classes["greeting-group"]}>


          <h1 className={classes.title}>
            {lang.hello}
            <br />
            {lang.myName}
          </h1>
          <div className={classes.selfie}>
            <Image
              src="/IMG_7269.jpeg"
              alt="Selfie"
              width={200}
              height={261}
              className={classes.image}
              priority
            />
          </div>
          <a href="#contact-me" className={classes["contact-button"]}>
            {lang.contactButton}
          </a>
        </div>
        <div className={classes["greeting-group-portrait"]}>
          <div className={classes.portrait}>
            <Image
              src="/IMG_37892.jpeg"
              alt="Portrait"
              width={640}
              height={640}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Greeting;
