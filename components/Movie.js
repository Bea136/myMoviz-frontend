import styles from '../styles/Movie.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Movie(props) {
  let starStyle={}
  let stars = [];
  for (let i = 0; i < 10; i++) {
    if(i + 1 <= props.voteAverage){
      stars.push(<FontAwesomeIcon key={i} className={styles.star} icon={faStar} style={starStyle ={'color':'#f1c40f'}} />)
    }
    else{
      stars.push(<FontAwesomeIcon key={i} className={styles.star} icon={faStar}/>)
    }    
  }
  
  return (
    <div>
      <main className={styles.main}>
        <img className={styles.poster} src={props.poster} alt= {props.movieTitle} />
        <h2 className={styles.movieTitle}>{props.movieTitle}</h2>
        <h3 className={styles.description}>{props.description}</h3>
        <div className={styles.starsContainer}>
          {stars}
        </div>
        <p className={styles.vote}>
        {props.vote}(Nb de votes)
        </p>
      </main>
    </div>
  );
}

export default Movie;
