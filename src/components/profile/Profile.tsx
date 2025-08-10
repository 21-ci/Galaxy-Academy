import { Tablet } from './tablet/Tablet';
import { Container } from '../shared/container/container';
import styles from './Profile.module.scss';
import { Suspense } from 'react';

export const Profile = () => {
  return (
    <div className={styles.mainContainer}>
      <Container className={styles.container}>
        <Suspense>
          <Tablet />
        </Suspense>
      </Container>
    </div>
  );
};
