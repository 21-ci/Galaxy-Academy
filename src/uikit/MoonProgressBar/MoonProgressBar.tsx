import LandIcon from '@/public/images/svg/mssion/atmosphere.svg';
import MoonIcon from '@/public/images/svg/mssion/moon.svg';
import BoyIcon from '@/public/images/profile/skin/svg/boy_light.svg';
import styles from './MoonProgressBar.module.scss';

interface IMoonProgressBarProps {
  progress: number;
  distance: number;
}

export const MoonProgressBar = ({ progress, distance }: IMoonProgressBarProps) => {
  const safeProgress = Math.min(Math.max((progress / distance) * 100, 0), 100);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.progressWrapper}>
        <LandIcon className={styles.landIcon} />
        <div className={styles.progressBar}>
          <div className={styles.progressBarFill} style={{ width: `${safeProgress}%` }}>
            <BoyIcon className={styles.boyIcon} style={{ left: `calc(${safeProgress}% - 15px)` }} />
          </div>
        </div>
        <MoonIcon className={styles.moonIcon} />
      </div>
    </div>
  );
};
