import { boyHead } from "@/src/utils/skinData";
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
                            <p className={styles.hairTitle}>hair</p>
                            <ul className={styles.hairList}>
                                {boyHead.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <li key={item.id} className={styles.hairItem}>
                                            <Icon className={styles.iconHead} />
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.astronautWrapper}></div>
                    <div className={styles.suitWrapper}></div>
                </div>
            </>
        </Container>
    );
}