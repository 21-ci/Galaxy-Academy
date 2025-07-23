import { Tablet } from './tablet/Tablet';
import { Container } from '../shared/container/container';
import styles from './Profile.module.scss';
import { Suspense } from 'react';
import { ProfileMainSkin } from '../profileMainSkin/ProfileMainSkin';

export const Profile = () => {
  return (
    <div className={styles.mainContainer}>
      <Container>
        <Suspense>
          <Tablet />
        </Suspense>
      </Container>
      <ProfileMainSkin />
    </div>
  );
};
