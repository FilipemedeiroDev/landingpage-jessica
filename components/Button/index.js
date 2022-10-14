import styles from './Button.module.css';
import Link from 'next/link';

export default function Button({ textButton, navigation }) {
    return (

        <Link href={`${navigation}`} passHref>
            <button className={styles.button}>
                {textButton}
            </button>
        </Link >

    )
}