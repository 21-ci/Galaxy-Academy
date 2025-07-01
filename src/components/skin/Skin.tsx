import { Container } from "../shared/container/container"
// import titleBg from '@/public/images/profile/skin/titleContainer.webp'
import styles from './Skin.module.scss'

export const Skin = () => {
    return (
        <Container className={styles.skinContainer}>
            <>
                <h1 className={styles.title}>Customize your appearance!</h1>
                <div className={styles.skinContent}>
                    <div className={styles.hairWrapper}>
                        <div className={styles.hairContainer}>
                            <p>hair</p>
                        </div>
                    </div>
                    <div className={styles.astronautWrapper}></div>
                    <div className={styles.suitWrapper}></div>
                </div>
            </>
        </Container>
    );
}