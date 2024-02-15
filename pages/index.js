import styles from "../styles/index.module.css";
import Head from "next/head";
import Link from "next/link";
import Title from "../components/title";
import TableOfContents from "../components/tableOfContents";

export default function IndexPage() {

    return (
        <div className={styles.index}>
            <Title text="Welcome to the Home Page!" variant="default"></Title>

            <Title text="Info" variant="sub-title"></Title>
            <p>This Website is completly written in React.js & Next.js</p>
        </div>
    )
}