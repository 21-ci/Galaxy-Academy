'use client';

import React from 'react';
import styles from './Test.module.scss';

interface IQuestion {
  question: string;
  options: Record<string, string>;
  answer: string;
}

interface TestProps {
  question: IQuestion;
  current: number;
  total: number;
  onAnswer: (option: string) => void;
}

const Test: React.FC<TestProps> = ({ question, current, total, onAnswer }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.questionBox}>
          <p>{question.question}</p>
          <span>
            {current}/{total}
          </span>
        </div>

        <div className={styles.optionsGrid}>
          {Object.entries(question.options).map(([key, value]) => (
            <button
              key={key}
              onClick={() => onAnswer(key)}
              className={styles.optionCard}
            >
              <span className={styles.optionLetter}>{key}</span>
              <p>{value}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
