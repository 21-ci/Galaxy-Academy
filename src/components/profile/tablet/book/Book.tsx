import Container from '@mui/material/Container';
import Image from 'next/image';
import cover from '@/public/images/profile/book/cover.webp';
import page1 from '@/public/images/profile/book/page_1.webp';
import page2 from '@/public/images/profile/book/page_2.webp';
import HTMLFlipBook from 'react-pageflip';
import { useRef, useState } from 'react';
import ArrowLeft from '@/public/images/profile/skin/svg/arrow-left.svg';
import ArrowRight from '@/public/images/profile/skin/svg/arrow-right.svg';
import styles from './Book.module.scss';

export const Book = () => {
  const bookRef = useRef<{ pageFlip: () => { flipNext: () => void; flipPrev: () => void } }>(null);
  const [page, setPage] = useState(0);

  const nextPage = () => {
    if (bookRef.current) {
      if (page >= 1) return;
      setPage((prev) => (prev += 1));
      bookRef.current.pageFlip().flipNext();
    }
  };

  const prevPage = () => {
    if (bookRef.current) {
      if (page === 0) return;
      setPage((prev) => (prev -= 1));
      bookRef.current.pageFlip().flipPrev();
    }
  };

  return (
    <Container className={styles.mainContainer}>
      <button onClick={prevPage} className={styles.arrowBtn}>
        {page > 0 ? <ArrowLeft className={styles.arrow} /> : ''}
      </button>

      <HTMLFlipBook
        ref={bookRef}
        width={300}
        height={500}
        minWidth={300}
        maxWidth={500}
        minHeight={400}
        maxHeight={600}
        size="stretch"
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
        <div className="">
          <Image src={cover} fill alt="cover" className="" />
        </div>
        <div>
          <Image src={page1} fill alt="page 1" className="" />
        </div>
        <div>
          <Image src={page2} fill alt="page 2" className="" />
        </div>
      </HTMLFlipBook>
      <button onClick={nextPage} className={styles.arrowBtn}>
        {page < 1 ? <ArrowRight className={styles.arrow} /> : ''}
      </button>
    </Container>
  );
};
