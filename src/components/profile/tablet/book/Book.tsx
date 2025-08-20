import Container from '@mui/material/Container';
import Image from 'next/image';
import cover from '@/public/images/profile/book/cover.webp';
import page1 from '@/public/images/profile/book/page_1.webp';
import page2 from '@/public/images/profile/book/page_2.webp';
import HTMLFlipBook from 'react-pageflip';
import { useRef } from 'react';
import ArrowLeft from '@/public/images/profile/skin/svg/arrow-left.svg';
import ArrowRight from '@/public/images/profile/skin/svg/arrow-right.svg';
import styles from './Book.module.scss';

export const Book = () => {
  const bookRef = useRef<{ pageFlip: () => { flipNext: () => void; flipPrev: () => void } }>(null);

  const nextPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
    }
  };

  const prevPage = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
    }
  };

  return (
    <Container className={styles.mainContainer}>
      <button onClick={nextPage} className={styles.arrowBtn}>
        <ArrowLeft className={styles.arrow} />
      </button>

      <HTMLFlipBook
        ref={bookRef}
        width={300}
        height={500}
        minWidth={300}
        maxWidth={400}
        minHeight={400}
        maxHeight={600}
        size="fixed"
        startPage={0}
        style={{ margin: '0 auto' }}
        showCover={true}
        drawShadow={true}
        maxShadowOpacity={0.5}
        mobileScrollSupport={true}
        className="mx-auto p-[20px]"
        flippingTime={1000}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        swipeDistance={0}
        clickEventForward={false}
        useMouseEvents={false}
        showPageCorners={false}
        disableFlipByClick={true}
      >
        <div>
          cover
          <Image src={cover} fill alt="cover" className="object-cover" />
        </div>
        <div>
          page1
          <Image src={page1} fill alt="cover" className="object-cover" />
        </div>
        <div>
          page2
          <Image src={page2} fill alt="cover" className="object-cover" />
        </div>
      </HTMLFlipBook>
      <button onClick={prevPage} className={styles.arrowBtn}>
        <ArrowRight className={styles.arrow} />
      </button>
    </Container>
  );
};
