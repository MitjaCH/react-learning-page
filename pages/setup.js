import styles from "../styles/setup.module.css";
import Title from "../components/title";
import TableOfContents from "../components/tableOfContents";
import CommandContainer from "../components/commandContainer";
import Link from "next/link";

export default function SetupPage() {
  const headings = [
    { id: 'section1', title: 'Installing Node.js' },
    { id: 'section2', title: 'Setting up Node.js Project' },
    { id: 'section3', title: 'Installing React.js & Next.js' },
    { id: 'section4', title: 'Launching Server' },
  ];

  return (
    <div className={styles.setup}>
      <Title text="SETUP" variant="default"></Title>
      <TableOfContents headings={headings} />

      <div className={styles.tutorial}>
        <Title text="Installing Node.js" variant="sub-title"></Title>
        <p>
          First, you need to download Node.js from{" "}
          <span>
            <Link href="https://nodejs.org/en" target="_blank">[Node.js]</Link>
          </span>
        </p>
        <img src="/download-node-js-image.png" alt="Node.js Downloading Image" />
        <p>
          Once the download is complete, run the Node.js Setup. Then, open the Terminal or VS Code and type: 
        </p>

        <CommandContainer text="node --version" showCopyButton={true}/>
        <p>
          This command checks if Node.js is installed. The output should look something like this:
        </p>
        <CommandContainer text="v20.11.1 [version may vary]"></CommandContainer>
        <p>
          After confirming Node.js installation, open Visual Studio Code. If you haven't installed it yet, you can download it <Link href="https://code.visualstudio.com" target="_blank">[Here]</Link>.
          <br />Once installed, launch Visual Studio Code.
        </p>

        <Title text="Setting up Node.js Project" variant="sub-title"></Title>
        <p>
          To set up a Node.js project with continuous integration, create a new directory for your project and navigate into it using the Terminal or VS Code. Then, initialize a new Node.js project by running:
        </p>
        <CommandContainer text="npm init -y" showCopyButton={true}></CommandContainer>
        <p>
          This command initializes a new Node.js project with default settings. Next, install necessary dependencies for continuous integration:
        </p>
        <Title text="Installing React.js & Next.js" variant="sub-title"></Title>
        <p>
          Now, let's install React.js and Next.js. In the Terminal or VS Code, navigate to your project directory and run:
        </p>
        <CommandContainer text="npm install react react-dom next" showCopyButton={true}></CommandContainer>
        <p>
          This will allow you to install all react & next.js dependencies
        </p>

        <Title text="Launching Server" variant="sub-title"></Title>
        <p>
          Once the project is created, navigate into your project folder using the Terminal and start the development server by running:
        </p>
        <CommandContainer text="npm run dev" showCopyButton={true}></CommandContainer>
        <p>
          This command starts the Next.js development server. You should see a message indicating that the server is running and listening for requests.
        </p>
        <p>
          You can now open your web browser and visit <code>http://localhost:3000</code> to see your React.js and Next.js application in action!
        </p>
      </div>
    </div>
  );
}