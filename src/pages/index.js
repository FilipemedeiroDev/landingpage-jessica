
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
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit ante. Aliquam erat volutpat. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Duis condimentum augue id magna semper rutrum. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Fusce consectetuer risus a nunc. Aliquam ornare wisi eu metus. Integer pellentesque quam vel velit. Duis pulvinar. Aenean placerat. In vulputate urna eu arcu. Aliquam erat volutpat. Suspendisse potenti. Morbi mattis felis at nunc. Duis viverra diam non justo. In nisl. Nullam sit amet magna in magna gravida vehicula. Mauris tincidunt sem sed arcu. Nunc posuere. Nullam lectus justo, vulputate eget, mollis sed, tempor sed, magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam neque. Curabitur ligula sapien, pulvinar a, vestibulum quis, facilisis vel, sapien. Nullam eget nisl. Donec vitae arcu.
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
