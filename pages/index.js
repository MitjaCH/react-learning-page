import styles from "../styles/index.module.css";
import Head from "next/head";
import Link from "next/link";

export default function IndexPage() {
    return (
        <div className={styles.index}>
            <h1>Welcome to the Main Page!</h1>
        </div>
    )
}