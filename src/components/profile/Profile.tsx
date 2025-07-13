import { Tablet } from './tablet/Tablet';
import { Container } from '../shared/container/container';
import AstronautHead from '@/public/images/profile/user-view/head/boy_dark.svg';
import AstronautSuit from '@/public/images/profile/user-view/suit/suit_01.svg';
import moonImage from '@/public/images/profile/moon.webp';
import styles from './Profile.module.scss';
import Image from 'next/image';

export const Profile = () => {
  return (
    <div className={styles.mainContainer}>
      <Container>
        <Tablet />
      </Container>
      <Image src={moonImage} width={500} height={500} alt="moon" className={styles.moon} />
      <AstronautHead className="w-[140px] h-auto absolute bottom-[475px] left-[150px] z-30" />
      <AstronautSuit className="w-[160px] h-auto absolute bottom-[370px] left-[140px] z-20" />
    </div>
  );
};
