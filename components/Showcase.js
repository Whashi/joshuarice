import Image from "next/image";
import classes from "./Showcase.module.css";
import { language } from "../public/language";
import { showcase } from "../public/showcase";
import Card from "../ui/Card";

const Showcase = (props) => {

  const lang = props.spanish
    ? language.spanish.showcase
    : language.english.showcase;

  const showcaseItems = showcase.map((showcaseItem) => {
    return (
      <li key={showcaseItem.href} className={classes.card}>
        <a href={showcaseItem.href}>
          <Card className={classes["image-big"]}>
            <Image
              src={showcaseItem.src}
              alt={showcaseItem.alt}
              height={300}
              width={600}
            />
            <p className={classes.description}>
              {lang[showcaseItem.lang]}
            </p>
          </Card>
          <Card className={classes["image-small"]}>
            <Image
              src={showcaseItem.src}
              alt={showcaseItem.alt}
              height={200}
              width={250}
            />
            <p className={classes.description}>
              {lang[showcaseItem.lang]}
            </p>
          </Card>
        </a>
      </li>
    );
  });

  return (
    <div className={classes.container}>
      <div className={classes["blob-container"]}>
        <Image
          src="/portraitblob.svg"
          alt="Blob SVG"
          height={150}
          width={150}
          className={classes.blob}
        />
        <h2 className={classes.title}>{lang.heading}</h2>
      </div>

      <div className={classes["projects-container"]}>
        <ul className={classes.projects}>
          <div className={classes["card-container"]}>{showcaseItems}</div>
        </ul>
      </div>
    </div>
  );
};

export default Showcase;
