import styles from './Avatar.module.css';
import ProfileImage from '../../public/images/profile.jpg'

import Image from "next/image";

export default function Avatar() {
    return (
        <div className={styles.img}>
            <Image
                src={ProfileImage}
                alt='foto de Jessica Medeiro'
                style={{ borderRadius: '50%' }}
            />
        </div>
    )
}