import React from "react";
import styles from "./inputControl.module.css";

export default function InputControl({
  textarea,
  textareaPlaceholder,
  label,
  ...props
}) {
  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <input type="text" {...props} />
    </div>
  );
}
