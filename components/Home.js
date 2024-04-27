import styles from '../styles/Home.module.css';
import Movie from './Movie';
import { Button, Popover } from 'antd';
import React from 'react';



function Home() {
  const text = <span>Liked Movies</span>;
  const content = (
    <div>
      <p>Movie 1</p>
      <p>Movie 2</p>
    </div>
  )
  
  let movies = []
  for (let i = 0; i < 10 ; i++){
    movies.push(<Movie key={i}/>)
  }
  return (
    <div>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src="logo.png" alt="Logo" />
            <img className={styles.logoLetter} src="logoletter.png" alt="Letter Logo" />
          </div>
          <div>
            <Popover placement="bottom" content={content} title={text} trigger="click">
              <Button className={styles.likedMoviesBtn} type="primary">♥ 4 movie(s)</Button>
            </Popover>
          </div>
        </header>
        <body>
        <h1 className={styles.title}>LAST RELEASES</h1>
        <div className={styles.moviesContainer}>
        {movies}
        </div>
        </body>
      </main>
    </div>
  );
}

export default Home;
