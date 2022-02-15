import Image from "next/image";
import classes from "./AboutMe.module.css";

import { language } from "../public/language";

const AboutMe = (props) => {
  const lang = props.spanish
    ? language.spanish.aboutMe
    : language.english.aboutMe;

  return (
    <div className={classes.container}>
      <div className={classes["blob-container"]}>
        <Image
          src="/blob1.svg"
          alt="Blob SVG"
          height={150}
          width={150}
          className={classes.blob}
        />
        <h2 className={classes.title}>{lang.heading}</h2>
      </div>
      <div className={classes["text-container"]}>
        <h3>{lang.firstSubheading}</h3>
        <p>{lang.firstParagraph}</p>
        <p>{lang.secondParagraph}</p>
        <h3>{lang.secondSubheading}</h3>
        <p>{lang.thirdParagraph}</p>
      </div>
    </div>
  );
};

export default AboutMe;
