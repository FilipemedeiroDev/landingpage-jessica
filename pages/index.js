
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import ProfileImage from '../public/images/profile.jpg';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <span className={styles.name}>
            Olá, sou a Jessica Medeiro
          </span>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit ante. Aliquam erat volutpat. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Duis condimentum augue id magna semper rutrum. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo.
          </p>
        </div>
        <div className={styles.contentImg}>
          <div className={styles.img}>
            <Image
              src={ProfileImage}
              alt='foto de Jessica Medeiro'
              style={{ borderRadius: '50%' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
