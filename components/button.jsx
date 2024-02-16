import styles from "../styles/button.module.css";

export default function Button(props) {
  return (
    <div className={`${styles.button} ${styles[props.variant]}`}>
      {props.text}
    </div>
  );
}
