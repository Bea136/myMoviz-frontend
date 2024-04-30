import styles from '../styles/Home.module.css';
import 'antd/dist/antd.css';
import Movie from './Movie';
import { Button, Popover } from 'antd';
import { useState } from 'react';




function Home() {
  const [likedMovies, setLikedMovies] = useState([])
  const [openPopover, setOpenPopover] = useState(false)
  const moviesData = [
    { title: 'Forrest Gump', poster: 'forrestgump.jpg', voteAverage: 9.2, voteCount: 22_705, overview: 'A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case.' },
    { title: 'The Dark Knight', poster: 'thedarkknight.jpg', voteAverage: 8.5, voteCount: 27_547, overview: 'Batman raises the stakes in his war on crime and sets out to dismantle the remaining criminal organizations that plague the streets.' },
    { title: 'Your name', poster: 'yourname.jpg', voteAverage: 8.5, voteCount: 8_691, overview: 'High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places.' },
    { title: 'Iron Man', poster: 'ironman.jpg', voteAverage: 7.6, voteCount: 22_7726, overview: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.' },
    { title: 'Inception', poster: 'inception.jpg', voteAverage: 8.4, voteCount: 31_546, overview: 'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life.' },
  ];
  const updateLikedMovies = (likedMovieTitle) => {
    if (likedMovies.find(e => e === likedMovieTitle)) {
      setLikedMovies(likedMovies.filter(e => e !== likedMovieTitle))
    } else {
      setLikedMovies([...likedMovies, likedMovieTitle])
    }
  }

  const movies = moviesData.map(movie => {
    return <Movie movieTitle={movie.title} poster={movie.poster} description={movie.overview} voteAverage={movie.voteAverage} vote={movie.voteCount} updateLikedMovies={updateLikedMovies} />
  })
  const hidePopover = () => {
    setOpenPopover(false);
  };

  const handleOpenChangePopover = (newOpen) => {
    setOpenPopover(newOpen);
  };
  const text = <span>Liked Movies</span>;

  let popoverMovies = ''
  for (let i = 0; i < likedMovies.length; i++) {
    popoverMovies = likedMovies[i]
  }
  console.log(popoverMovies)
  console.log(likedMovies)
  const content = (
    <div className={styles.popoverContent}>
      <p>{popoverMovies}</p>
    </div>
  )

  return (
    <div>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src="logo.png" alt="Logo" />
            <img className={styles.logoLetter} src="logoletter.png" alt="Letter Logo" />
          </div>
          <div>
            <Popover className={styles.popover} placement="bottom" content={content} title={text} >
              <Button className={styles.likedMoviesBtn}>♥ {likedMovies.length} movie(s)</Button>
            </Popover>
          </div>
        </header>
        <body className={styles.body}>
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
