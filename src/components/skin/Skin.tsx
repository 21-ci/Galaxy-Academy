import { boyHead, suit } from '@/src/utils/skinData';
import { Container } from '../shared/container/container';
import styles from './Skin.module.scss';
import { useState } from 'react';

interface ISkinProps {
  hair: string;
  costum: string;
}

const SelectedSuit = ({ hair, costum }: ISkinProps) => {
  const mainSuit = suit.find((item) => item.name === costum);
  const mainHead = boyHead.find((item) => item.name === hair);

  const SuitIcon = mainSuit?.icon || suit[0].icon;
  const HeadIcon = mainHead?.icon || boyHead[0].icon;

  return (
    <div className={styles.skinWrapper}>
      <HeadIcon className={styles.headIcon} />
      <SuitIcon className={styles.costumIcon} />
    </div>
  );
};

export const Skin = () => {
  const [hair, setHair] = useState('');
  const [costum, setCostum] = useState('');

  const handleSetSkin = () => {
    localStorage.setItem('hair', hair);
    localStorage.setItem('costum', costum);

    localStorage.setItem('skin', JSON.stringify({ hair, costum }));
    window.dispatchEvent(new Event('skinChange'));
  };

  return (
    <Container className={styles.skinContainer}>
      <>
        <h1 className={styles.title}>Customize your appearance!</h1>
        <div className={styles.skinContent}>
          {/* <div className={styles.hairWrapper}> */}
          <div className={styles.hairContainer}>
            <p className={styles.hairTitle}>hair</p>
            <ul className={styles.hairList}>
              {boyHead.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id} className={styles.hairItem}>
                    <button
                      type="button"
                      onClick={() => setHair(item.name)}
                      className={styles.hairBtn}
                    >
                      <Icon className={styles.iconHead} />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
          <SelectedSuit hair={hair} costum={costum} />
          <div className={styles.costumContainer}>
            <p className={styles.costumTitle}>costumer</p>
            <ul className={styles.costumList}>
              {suit.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id} className={styles.costumItem}>
                    <button
                      type="button"
                      onClick={() => {
                        setCostum(item.name);
                        // handleSetCostum(item.name);
                      }}
                      className={styles.costumBtn}
                    >
                      <Icon className={styles.ikonSkin} />
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={styles.continueBtnWrapper}>
          <button type="button" onClick={handleSetSkin} className={styles.submitBtn}>
            Continue
          </button>
        </div>
      </>
    </Container>
  );
};
