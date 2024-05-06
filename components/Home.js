import styles from '../styles/Home.module.css';
import 'antd/dist/antd.css';
import Movie from './Movie';
import { Button, Popover } from 'antd';
import { useEffect, useState } from 'react';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Home() {
  const [likedMovies, setLikedMovies] = useState([])
  const [openPopover, setOpenPopover] = useState(false)
  const [moviesData, setMoviesData] = useState([])

  //FETCH MOVIES FROM BACKEND AT INITIALIZATION
  useEffect(() => {
    fetch(`http://localhost:3000/movies`)
      .then(response => response.json())
      .then(data => {
        setMoviesData(data.movies)
      });
  }, []);

  //UPDATE LIKED MOVIES LIST(inverse data flow)
  const updateLikedMovies = (likedMovieTitle) => {
    if (likedMovies.find(e => e === likedMovieTitle)) {
      setLikedMovies(likedMovies.filter(e => e !== likedMovieTitle))
    } else {
      setLikedMovies([...likedMovies, likedMovieTitle])
    }
  }

  //DISPLAY ALL MOVIES / CHECK IF MOVIE IS LIKED(inverse data flow)
  const movies = moviesData.map((movie, i) => {
    const isLiked = likedMovies.some(e => e === movie.title)
    const posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    const description = `${movie.overview.substring(0, 250)}...`
    return <Movie key={i} movieTitle={movie.title} poster={posterUrl} description={description} voteAverage={movie.vote_average} vote={movie.vote_count} updateLikedMovies={updateLikedMovies} isLiked={isLiked} />
  })

  //HIDE POPOVER
  const hidePopover = () => {
    setOpenPopover(false);
  };
  //NEW OPEN POPOVER
  const handleOpenChangePopover = (newOpen) => {
    setOpenPopover(newOpen);
  };

  const text = <span>Liked Movies</span>;
  //DISPLAY EACH MOVIE TITLE IN POPOVER
  const content = likedMovies.map((likedMovie, i) => {
    return (
      <div key={i} className={styles.popoverContent}>
        <p>{likedMovie} <FontAwesomeIcon icon={faCircleXmark} onClick={() => updateLikedMovies(likedMovie)} className={styles.cross} /></p>
      </div>
    )
  })

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
