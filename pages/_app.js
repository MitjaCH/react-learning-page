import Link from "next/link";
import Head from "next/head";
import "../styles/_app.css";


export default function App({ Component, pageProps }) {
    return (
      <div>
        <Head>
          <title>React.js / Next.js Learning</title>
        </Head>

        <header>
            <nav class="navbar">
                <h1 class="title">React.js Learning</h1>
                <ul>
                    <li><Link href="/"></Link>Home</li>
                    <li><Link href="/"></Link>Setup</li>
                    <li><Link href="/"></Link>Project Structure</li>
                </ul>
            </nav>
        </header>
  
       
        <main>
          <Component {...pageProps} />
        </main>
  
        <footer>
            <h1>Footer</h1>
        </footer>
      </div>
    );
  }
  