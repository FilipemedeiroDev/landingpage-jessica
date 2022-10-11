
import styles from '../../styles/Home.module.css';
import Image from 'next/image';
import ImageProfile from '../../public/images/profile.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.contentText}>
            <span className={styles.name}>
              Olá, sou a Jessica Medeiro
            </span>
            <p className={styles.text}>
              dvmDKSNVSDvjksdVJd vjsd DJONCdoicieC wednceIOCNEwce NINCOIEbcqecbq NIOCNEiocbewevewEWV EFefefEF
            </p>
          </div>
          <div className={styles.contentImg}>
            <div className={styles.img}>
                <Image 
                src={ImageProfile} 
                alt='foto de Jessica Medeiro' 
                style={{borderRadius: '50%'}}
                />
            </div>
          </div>
        </div>
    </div>
  )
}
