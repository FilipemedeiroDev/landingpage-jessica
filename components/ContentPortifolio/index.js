import styles from './ContentPortifolio.module.css'

import Image from "next/image";
import Button from "../Button";


export default function ContentPortifolio({ textButton, navigation, title, description, image }) {
    return (
        <div className={styles.content}>
            <div className={styles.contentImg}>
                <div className={styles.img}>
                    <Image
                        src={image}
                        alt='foto modelo'
                        width={'580px'}
                        height={'550px'}
                    />
                </div>
            </div>
            <div className={styles.contentText}>
                <span className={styles.title}>{title}</span>
                <p className={styles.text}>
                    {description}
                </p>
                <Button
                    textButton={textButton}
                    navigation={navigation}
                />
            </div>
        </div>
    )
}