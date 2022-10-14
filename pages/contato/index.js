import styles from './Contato.module.css';
import Image from 'next/image';
import Avatar from '../../components/Avatar';
import IconWhats from '../../public/icons/IconWhats.png';
import IconInstagram from '../../public/icons/iconInstagram.png';

export default function Contato() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Avatar />
                <div className={styles.contentButtons}>
                    <a href='http://wa.me/5511947966822' target={'_blank'} className={styles.button} rel="noreferrer">
                        <div className={styles.icon}>
                            <Image
                                src={IconWhats}
                                alt='icone whatsapp'
                            />
                        </div>
                        Whatsapp
                    </a>
                    <a href='https://www.instagram.com/jessimedeiro/' target={'_blank'} className={styles.button} rel="noreferrer">
                        <div className={styles.icon}>
                            <Image
                                src={IconInstagram}
                                alt='icone Instagram'
                            />
                        </div>
                        Instagram
                    </a>
                </div>
            </div>
        </div>
    )
}