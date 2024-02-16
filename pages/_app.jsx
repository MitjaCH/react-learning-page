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
        <title>React Learning | By MitjaCH & nxkzty</title>
      </Head>

      <header>
        <nav>
          <img id="nav-image"src="/react-learning-logo.svg"></img>
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
        <div>
        <Link href="https://discord.com/">
          <img className="social-logo" src="/discord-logo.svg" alt="discord" />
        </Link>
        <Link href="https://instagram.com/leonh_sg">
          <img className="social-logo" src="/instagram-logo.svg" alt="instagram" />
        </Link>
        <Link href="https://github.com/MitjaCH/react-learning-page.git">
          <img className="social-logo" src="/github-logo.svg" alt="github" />
        </Link>

        </div>
      </footer>
    </div>
  );
}
