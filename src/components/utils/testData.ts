// src/utils/testData.ts
import EarthIcon from '@/public/images/svg/earth.svg';
import SunhIcon from '@/public/images/svg/sun.svg';
import Star from '@/public/images/svg/mssion/stars.svg';
import Rockety from '@/public/images/svg/mssion/rocketry.svg';
import Spacesuit from '@/public/images/svg/mssion/spacesuit.svg';
import Atmosphere from '@/public/images/svg/mssion/atmosphere.svg';
import Moon from '@/public/images/svg/mssion/moon.svg';
import Saturt from '@/public/images/svg/mssion/saturn.svg';

export interface ITest {
  id: number;
  title: string;
  icon: any;
  questions: {
    question: string;
    options: Record<string, string>;
    answer: string;
  }[];
}

export const testData: ITest[] = [
  {
    id: 1,
    title: 'The Earth',
    icon: EarthIcon,
    questions: [
      {
        question: 'Как называется самый центр Земли?',
        options: { A: 'Мантия', B: 'Ядро', C: 'Кора', D: 'Океан' },
        answer: 'B',
      },
      {
        question: 'Which layer protects Earth?',
        options: { A: 'Ozone layer', B: 'Iron shield', C: 'Plastic dome', D: 'Water layer' },
        answer: 'A',
      },
    ],
  },
  {
    id: 2,
    title: 'Atmosphere',
    icon: SunhIcon,
    questions: [
      {
        question: 'What is the main gas in the atmosphere?',
        options: { A: 'Oxygen', B: 'Carbon Dioxide', C: 'Nitrogen', D: 'Hydrogen' },
        answer: 'C',
      },
    ],
  },
  {
    id: 3,
    title: 'The Planets',
    icon: Star,
    questions: [],
  },
  {
    id: 4,
    title: 'The Stars',
    icon: Rockety,
    questions: [],
  },
  {
    id: 5,
    title: 'How spacecraft works',
    icon: Spacesuit,
    questions: [],
  },
  {
    id: 6,
    title: 'The Rocketry',
    icon: Atmosphere,
    questions: [],
  },
  {
    id: 7,
    title: 'The Moon',
    icon: Moon,
    questions: [],
  },
  {
    id: 8,
    title: 'Saturn',
    icon: Saturt,
    questions: [],
  },
];
