'use client';

import styles from './Mission.module.scss';
import { missionData } from '../../utils/missionData';
import { Card } from '@/src/uikit/card/Card';
import { useState } from 'react';
import { Mission } from '../mission/Mission';

interface IMissionProps {
  setIsGameOpen: (value: boolean) => void;
  setGameLink: (link: string) => void;
}

const Missions = ({ setIsGameOpen, setGameLink }: IMissionProps) => {
  const [activeMission, setActiveMission] = useState<number | null>(null);
  return (
    <div className={styles.contenWrapper}>
      {activeMission === null ? (
        <>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>Missions</h2>
          </div>
          <ul className={styles.tabletList}>
            {missionData.map((item) => (
              <li key={item.id} className={styles.tabletItem}>
                <Card
                  gameLink={item.gameLink}
                  setGameLink={setGameLink}
                  onClick={() => setIsGameOpen(true)}
                  status={item.isAtive}
                  image={item.icon}
                  title={item.title}
                  level={item.level}
                  setActiveMission={setActiveMission}
                />
              </li>
            ))}
          </ul>
        </>
      ) : (
        <Mission activeMission={activeMission} />
      )}
    </div>
  );
};

export default Missions;
