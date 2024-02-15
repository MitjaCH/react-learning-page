import Link from "next/link";
import Head from "next/head";
import "../styles/_app.css";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled)
      console.log("Scrolled")
    }

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll)
  };
}, []);

  return (
    <div>
      <Head>
        <title>React.js / Next.js Learning</title>
      </Head>

      <header>
        <nav>
          <h1 class="title">React.js Learning</h1>
          <ul class="navbar">
            <li>
              <Link  href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="/setup">
                Setup
              </Link>
            </li>
            <li>
              <Link href="/structure">
                Project Structure
              </Link>
            </li>
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
