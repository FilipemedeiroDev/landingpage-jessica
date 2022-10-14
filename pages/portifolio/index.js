import styles from './Portifolio.module.css'
import VolumeBrasileiroImage from '../../public/images/volumebrasileiro1.jpg';
import FioAFioImage from '../../public/images/fioafio.jpg';
import LashLifting from '../../public/images/lashlifting.jpg';
import Design from '../../public/images/design.jpg';
import ContentPortifolio from '../../components/ContentPortifolio';

export default function Portifolio() {

    return (
        <div className={styles.container}>
            <ContentPortifolio
                image={FioAFioImage}
                title='Fio a Fio'
                description='Fio a fio clássico ou fio a fio efeito back é uma técnica que consiste em aplicar um fio sintético em cada fio natural, alongando os cílios e trazendo um leve volume deixandos cilios além de alongados mais curvados mantendo a naturalidade do olhar.'
                textButton='Entre em contato'
                navigation='contato'
            />
            <ContentPortifolio
                image={VolumeBrasileiroImage}
                title='Volume Brasileiro'
                description='O Volume brasileiro é o queridinho do momento, isso porque além de alongar ele também dá volume aos cílios sem perder a delicadeza no olhar.'
                textButton='Entre em contato'
                navigation='contato'
            />

            <ContentPortifolio
                image={LashLifting}
                title='Lash Lifting'
                description='
                O lash lifting cuida dos cílios para que eles fiquem com aspecto natural, de forma que é possível curvá-los,  e hidratá-los profundamente. A ideia é ter os cílios perfeitos sem precisar dar manutenção ou passar curvex.
                Diferente da extensão de cílios no lash lifting não são usados fios artificiais e também não precisa de manutenção.
                O procedimento leva em média 45 min é completamente indolor  e seu efeito tem duração de 4 a 8 semanas dependendo dos cuidados de cada pessoa.'
                textButton='Entre em contato'
                navigation='contato'
            />


            <ContentPortifolio
                image={Design}
                title='Design de sobrancelhas'
                description='Antigamente era usado um padrão para as sobrancelhas, com isso o formato único de cada sobrancelha não era respeitado, hoje em dia o foco do design é fugir do “molde pronto” e, proporcionar sobrancelhas perfeitas respeitando as diferenças de cada rosto.'
                textButton='Entre em contato'
                navigation='contato'
            />
        </div >
    )
}