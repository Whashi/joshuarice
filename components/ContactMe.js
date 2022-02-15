import Image from "next/image";
import classes from "./ContactMe.module.css";

import { language } from "../public/language";

const ContactMe = (props) => {
  const lang = props.spanish
    ? language.spanish.contactMe
    : language.english.contactMe;

  return (
    <div className={classes.container}>
      <div className={classes["blob-container"]}>
        <Image
          src="/blob2.svg"
          alt="Blob SVG"
          height={150}
          width={150}
          className={classes.blob}
        />
        <h2 className={classes.title}>{lang.heading}</h2>
      </div>

      <div className={classes["social-group"]}>
        <div className={classes["social-container"]}>
          <h3>{lang.social}</h3>
          <ul className={classes.social}>
            <li>
              <a href="https://twitter.com/whashikun">
                <Image
                  src="/twitter-svgrepo-com.svg"
                  alt="Twitter Icon"
                  height={60}
                  width={60}
                  className={classes.icon}
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/joshua-arthur-rice/">
                <div className={classes.icon}>
                  <Image
                    src="/linkedin-svgrepo-com.svg"
                    alt="LinkedIn Icon"
                    height={60}
                    width={60}
                  />
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className={classes["social-container"]}>
          <h3>{lang.github}</h3>
          <a className={classes.social} href="https://github.com/Whashi">
            <div className={classes.icon}>
              <Image
                src="/github-svgrepo-com.svg"
                alt="Github Icon"
                height={60}
                width={60}
              />
            </div>
          </a>
        </div>
      </div>
      <div className={classes["social-group"]}>
        {/* <div className={classes["social-container"]}>
          <h3>{lang.message}</h3>
          <div className={classes.social}>
            <div className={classes.icon} onClick={props.modalToggle}>
              <Image
                src="/message-svgrepo-com.svg"
                alt="Message Icon"
                height={60}
                width={60}
              />
            </div>
          </div>
        </div> */}

        <div className={classes["social-container"]}>
          <h3>{lang.email}</h3>
          <a className={classes.social} href="mailto:whashi88@gmail.com">
            <div className={classes.icon}>
              <Image
                src="/email-svgrepo-com.svg"
                alt="Email Icon"
                height={60}
                width={60}
              />
            </div>
          </a>
        </div>
      </div>
      <div className={classes["social-group"]}>
        <div className={classes["social-container"]}>
          <h3>{lang.resume}</h3>
          <a className={classes.social} href="/resume.pdf" download>
            <div className={classes.icon}>
              <Image
                src="/resume-svgrepo-com.svg"
                alt="Resume Icon"
                height={60}
                width={60}
                className={classes.icon}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
