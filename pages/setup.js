import styles from "../styles/setup.module.css";
import Title from "../components/title";
import TableOfContents from "../components/tableOfContents"

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
            </div>
        </div>
        
    )
}