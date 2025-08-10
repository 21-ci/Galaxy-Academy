import { boyHead, suit } from '@/src/utils/skinData';
import { Container } from '../shared/container/container';
import Star from '@/public/images/profile/skin/svg/star.svg';
import ArrowLeft from '@/public/images/profile/skin/svg/arrow-left.svg';
import ArrowRight from '@/public/images/profile/skin/svg/arrow-right.svg';
import styles from './Skin.module.scss';
import { useEffect, useState } from 'react';

interface ISuitProps {
  hair: string;
  costum: string;
}

interface ISkinProps {
  data: {
    name: string;
    points: number;
    place: number;
    avatar: string;
    skin: {
      hair: string;
      costum: string;
    };
  };
}

const SelectedSuit = ({ hair, costum }: ISuitProps) => {
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

const SelectedIcon = ({
  value,
  name,
  className,
}: {
  value: number;
  name: string;
  className: string;
}) => {
  let costum;

  if (name === 'suit') {
    costum = suit.find((item) => item.id === value);
  } else {
    costum = boyHead.find((item) => item.id === value);
  }

  const Icon = costum?.icon || suit[0].icon;

  return <Icon className={className} />;
};

export const Skin = ({ data }: ISkinProps) => {
  const { name, points, place, avatar, skin } = data;
  const [selectedHead, setSelectedHead] = useState(0);
  const [selectedCostum, setSelectedCostum] = useState(0);

  const [hair, setHair] = useState(skin.hair);
  const [costum, setCostum] = useState(skin.costum);

  const handleSetSkin = () => {
    localStorage.setItem('hair', hair);
    localStorage.setItem('costum', costum);

    localStorage.setItem('skin', JSON.stringify({ hair, costum }));
    window.dispatchEvent(new Event('skinChange'));
  };

  useEffect(() => {
    const curentHead = boyHead.find((item) => item.id === selectedHead);
    const currentCostum = suit.find((item) => item.id === selectedCostum);

    setHair(curentHead?.name || '');
    setCostum(currentCostum?.name || '');

    // setSelectedHead(boyHead.findIndex((item) => item.name === hair));
    // setSelectedCostum(suit.findIndex((item) => item.name === costum));
  }, [selectedHead, selectedCostum]);

  return (
    <div className={styles.skinContainer}>
      <div className="flex flex-row items-center justify-between w-full">
        <h1 className={styles.title}>{name}</h1>
        <div className="flex items-center gap-[16px]">
          <Star />
          <p className={styles.place}>{place}</p>
        </div>
        <div>
          <p>{points}</p>
        </div>
      </div>
      <div className="flex w-full h-full mt-auto">
        <div className="w-[50%] h-full bg-blue flex">
          <SelectedSuit hair={hair} costum={costum} />
        </div>
        <div className="w-[50%] h-full flex flex-col">
          <div className="flex">
            <button
              type="button"
              onClick={() => {
                if (selectedHead > 0) {
                  setSelectedHead(selectedHead - 1);
                }
              }}
            >
              <ArrowLeft />
            </button>
            <div className="rounded-[6px] bg-[url('/images/profile/skin/hair-bg.webp')] bg-cover bg-center w-fit h-fit flex items-center justify-center">
              {<SelectedIcon value={selectedHead} name="head" className="w-[100%] h-auto" />}
            </div>
            <button
              type="button"
              onClick={() => {
                if (selectedHead < boyHead.length - 1) {
                  setSelectedHead(selectedHead + 1);
                }
              }}
            >
              <ArrowRight />
            </button>
          </div>
          <div className="rounded-[6px] bg-[url('/images/profile/skin/suit-bg.webp')] bg-cover bg-center w-fit h-fit flex items-center justify-center">
            <button
              type="button"
              onClick={() => {
                if (selectedCostum > 0) {
                  setSelectedCostum(selectedCostum - 1);
                }
              }}
            >
              <ArrowLeft />
            </button>
            <div>{<SelectedIcon value={selectedCostum} name="suit" className="w-[100%] h-auto" />}</div>
            <button
              type="button"
              onClick={() => {
                if (selectedCostum < suit.length - 1) {
                  setSelectedCostum(selectedCostum + 1);
                }
              }}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
      {/* <div className={styles.skinContent}>
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
        </div> */}
      {/* <div className={styles.continueBtnWrapper}>
          <button type="button" onClick={handleSetSkin} className={styles.submitBtn}>
            Continue
          </button>
        </div> */}
    </div>
  );
};
