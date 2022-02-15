import { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import { language } from "../public/language";

import classes from "./MessageModal.module.css";

const MessageModal = (props) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [httpError, setHttpError] = useState();
  const [inputName, setInputName] = useState("");
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const nameChangeHandler = (e) => {
    setInputName(e.target.value);
  };

  const messageChangeHandler = (e) => {
    setInputMessage(e.target.value);
  };

  const sendMessage = async (name, message) => {
    const response = await axios
      .post(
        "http://localhost:5000/email/",
        {
          name,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .catch((err) => {
        setHttpError(err);
        console.log(httpError);
      });
    console.log(response);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    sendMessage(inputName, inputMessage).catch((err) => {
      setHttpError(err);
      console.log(httpError);
    });
  };

  const lang = props.spanish
    ? language.spanish.messageModal
    : language.english.messageModal;

  const containerClass = `${classes.modal} ${props.modalClass}`;

  const content = (
    <div className={containerClass}>
      <div className={classes["form-container"]}>
        <button className={classes["cancel-button"]} onClick={props.hideModal}>
          X
        </button>
        <form>
          <label htmlFor="name" className={classes["form-label"]}>
            {lang.name}
          </label>
          <input
            type="text"
            id="name"
            className={classes["form-input"]}
            placeholder="Nacho Libre"
            onChange={nameChangeHandler}
            value={inputName}
          />
          <label htmlFor="message" className={classes["form-label"]}>
            {lang.message}
          </label>
          <textarea
            type="textarea"
            id="message"
            className={classes["form-input"]}
            placeholder="Listen here Josh..."
            onChange={messageChangeHandler}
            value={inputMessage}
          />
          <button className={classes["send-button"]} onClick={submitHandler}>
            {lang.send}
          </button>
        </form>
      </div>
    </div>
  );

  if (isBrowser) {
    return (
      <Fragment>
        {ReactDOM.createPortal(
          <div className={classes.backdrop} onClick={props.hideModal} />,
          document.getElementById("overlays")
        )}
        {ReactDOM.createPortal(content, document.getElementById("overlays"))}
      </Fragment>
    );
  } else {
    return null;
  }
};

export default MessageModal;
