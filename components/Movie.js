import styles from '../styles/Movie.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Movie() {
  let stars = [];
  for (let i = 0; i < 10; i++) {
    stars.push(<FontAwesomeIcon key={i} className={styles.star} icon={faStar} />)
  }
  return (
    <div>
      <main className={styles.main}>
        <img className={styles.poster} src='poster.jpg' alt='Poster' />
        <h2 className={styles.movieTitle}>Movie Title</h2>
        <h3 className={styles.description}>Description</h3>
        <div className={styles.starsContainer}>
          {stars}
        </div>
        <p className={styles.vote}>
          Nb de votes
        </p>
      </main>
    </div>
  );
}

export default Movie;
