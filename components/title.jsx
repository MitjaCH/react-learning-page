import styles from "../styles/title.module.css";

export default function Title(props) {
  return (
    <div className={`${styles.title} ${styles[props.variant]}`}>
      {props.text}
    </div>
  );
}