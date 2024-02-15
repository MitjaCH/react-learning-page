// SetupPage.js
import styles from "../styles/setup.module.css";
import Title from "../components/title";
import TableOfContents from "../components/tableOfContents";
import CommandContainer from "../components/commandContainer"; // Import CommandContainer component
import Link from "next/link";

export default function SetupPage() {
  const headings = [
    { id: 'section1', title: 'Installing Node.js' },
    { id: 'section2', title: 'Installing React.js & Next.js' },
    { id: 'section3', title: 'Launching Server' },
  ];

  return (
    <div className={styles.setup}>
      <Title text="Welcome to the Setup Page!" variant="default"></Title>
      <TableOfContents headings={headings} />

      <div className={styles.tutorial}>
        <Title text="Installing Node.js" variant="sub-title"></Title>
        <p>
          First you have to Download Node.js from{" "}
          <span>
            <Link href="https://nodejs.org/en">Node.js</Link>
          </span>
        </p>
        <img src="/download-node-js-image.png" alt="Node.js Downloading Image" />
        <p>
          After you've done that run the Node.js Setup. And Open the Terminal
          Windows or VS Code and Type
        </p>
        <CommandContainer text="node --version" />
      </div>
    </div>
  );
}
