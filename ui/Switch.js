import Image from "next/image";

import classes from "./Switch.module.css";

const Switch = (props) => {
  return (
    <label className={classes.switch}>
      <input type="checkbox" onClick={props.toggle}/>
      <span className={classes.slider}></span>
    </label>
  );
};

export default Switch;
