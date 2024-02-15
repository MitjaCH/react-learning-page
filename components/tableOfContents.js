import React from 'react';
import styles from '../styles/tableOfContents.module.css'

function TableOfContents({ headings }) {
  return (
    <div className={`${styles.tableOfContents}`}>
      <h2 className={`${styles.title}`}>Table of Contents</h2>
      <ul className={`${styles.list}`}>
        {headings.map((heading, index) => (
          <li key={index} className={`${styles.item}`}>
            <a href={`#${heading.id}`} className={`${styles.link}`}>{heading.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableOfContents;
