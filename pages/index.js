import styles from '../styles/Home.module.css';
import Avatar from '../components/Avatar';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentText}>
          <span className={styles.name}>
            Olá, sou a Jessica Medeiro
          </span>
          <p className={styles.text}>
            Seja bem vinda !!!
            Meu nome é Jéssica, sou casada há 5 anos, tenho 2 filhas.
            Em 2019 iniciei na área da beleza e desde então tenho me dedicado a aprender e a me aperfeiçoar no embelezamento do olhar.
            Saiba que eu prezo pela beleza natural e tenho como diferencial respeitar as suas características e fazer você ficar ainda mais linda sem perder a delicadeza feminina.
            Aqui você pode ver alguns dos meus trabalhos e agendar o seu horário.
          </p>

          <Button
            textButton={'Conheça meu trabalho'}
            navigation={'portifolio'}
          />

        </div>
        <div className={styles.contentImg}>
          <Avatar />
        </div>
      </div>
    </div >
  )
}
