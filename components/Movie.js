import styles from '../styles/Movie.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faVideo, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Movie(props) {
  const [personalVote, setPersonalVote] = useState(0)
  const [watchCount, setWatchCount] = useState(0)
  const [liked, setLiked] = useState(false)

  //DISPLAY VOTE AVERAGE STARS
  let starStyle = {}
  let stars = [];
  for (let i = 0; i < 10; i++) {
    if (i + 1 <= props.voteAverage) {
      stars.push(<FontAwesomeIcon key={i} className={styles.star} icon={faStar} style={starStyle = { 'color': '#f1c40f' }} />)
    } else {
      stars.push(<FontAwesomeIcon key={i} className={styles.star} icon={faStar} />)
    }
  }
  //DISPLAY PERSONNAL VOTE STARS
  let personalStars = [];
  let personalStarStyle = {}
  for (let j = 0; j < 10; j++) {
    const handleClickPersonalStar = () => {
      setPersonalVote(j + 1)
      console.log(personalVote);
    }
    if (personalVote >= j + 1) {
      personalStars.push(<FontAwesomeIcon onClick={handleClickPersonalStar} key={j} className={styles.personalStars} icon={faStar} style={personalStarStyle = { 'color': 'blue' }} />)
    } else {
      personalStars.push(<FontAwesomeIcon onClick={handleClickPersonalStar} key={j} className={styles.personalStars} icon={faStar} />)
    }
  }
  //VIEWED FILMS
  const handleClickCamera = () => {
    setWatchCount(watchCount + 1);
  }
  let cameraStyle = {}
  if (watchCount > 0) {
    cameraStyle = { 'color': '#e74c3c' }
  }
  //LIKE OR UNLIKE FILMS
  const handleClickLiked = () => {
    props.updateLikedMovies(props.movieTitle)
  }
  let likeStyle = {}
  if (liked) {
    likeStyle = { 'color': '#e74c3c' }
  }
  if (props.isLiked === true) {
    likeStyle = { 'color': '#e74c3c' }
  }


  return (
    <div>
      <main className={styles.main}>
        <img className={styles.poster} src={props.poster} alt={props.movieTitle} />
        <h2 className={styles.movieTitle}>{props.movieTitle}</h2>
        <h3 className={styles.description}>{props.description}</h3>
        <div className={styles.starsContainer}>{stars}</div>
        <p className={styles.vote}>({props.vote})</p>
        <div className={styles.personalStarsContainer}>
          {personalStars}({personalVote})
        </div>
        <div className={styles.viewCount}>
          <FontAwesomeIcon className={styles.video} onClick={handleClickCamera} icon={faVideo} style={cameraStyle} />
          ({watchCount})
        </div>
        <FontAwesomeIcon className={styles.like} onClick={handleClickLiked} icon={faHeart} style={likeStyle} />
      </main>
    </div>
  );
}
export default Movie;
