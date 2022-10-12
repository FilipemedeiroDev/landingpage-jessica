import styles from '../../styles/Portifolio.module.css'
import Image from 'next/image';
import VolumeBrasileiroImage from '../../public/images/volumebrasileiro1.jpg';
import FioAFioImage from '../../public/images/fioafio.jpg';
import LashLifting from '../../public/images/lashlifting.jpg';


export default function Portifólio() {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.contentText}>
                    <span className={styles.title}>Volume Brasileiro</span>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit ante. Aliquam erat volutpat. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Duis condimentum augue id magna semper rutrum. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Fusce consectetuer risus a nunc. Aliquam ornare wisi eu metus. Integer pellentesque quam vel velit.
                    </p>
                </div>
                <div className={styles.contentImg}>
                    <div className={styles.img}>
                        <Image
                            src={VolumeBrasileiroImage}
                            alt='foto modelo'
                        />
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.contentImg}>
                    <div className={styles.img}>
                        <Image
                            src={FioAFioImage}
                            alt='foto modelo'
                            width={'560px'}
                        />
                    </div>
                </div>
                <div className={styles.contentText}>
                    <span className={styles.title}>Fio a Fio</span>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit ante. Aliquam erat volutpat. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Duis condimentum augue id magna semper rutrum. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Fusce consectetuer risus a nunc. Aliquam ornare wisi eu metus. Integer pellentesque quam vel velit.
                    </p>
                </div>
            </div>
            <div className={styles.content}>

                <div className={styles.contentText}>
                    <span className={styles.title}>Lash Lifting</span>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit ante. Aliquam erat volutpat. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Duis condimentum augue id magna semper rutrum. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Fusce consectetuer risus a nunc. Aliquam ornare wisi eu metus. Integer pellentesque quam vel velit. Duis pulvinar.
                    </p>
                </div>
                <div className={styles.contentImg}>
                    <div className={styles.img}>
                        <Image
                            src={LashLifting}
                            alt='foto modelo'
                            width={'580px'}
                            height={'550px'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}