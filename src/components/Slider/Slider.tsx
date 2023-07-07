import { type ReactNode, useRef } from 'react';

import type SwiperClass from 'swiper';
import { Navigation } from 'swiper';
import { Swiper } from 'swiper/react';
import { type NavigationOptions } from 'swiper/types';

import { SliderButton } from '~/shared/ui/buttons/SliderButton/SliderButton';

import './swiper.scss';

export const breakpoints = {
  320: {
    slidesPerGroup: 1,
    slidesPerView: 1,
    spaceBetween: 30
  },
  730: {
    slidesPerGroup: 2,
    slidesPerView: 2,
    spaceBetween: 30
  },
  769: {
    slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 30
  },
  1025: {
    slidesPerGroup: 4,
    slidesPerView: 4,
    spaceBetween: 30
  },
  1200: {
    slidesPerGroup: 5,
    slidesPerView: 5,
    spaceBetween: 30
  }
};

interface ISlider {
  children: ReactNode;
  title?: string;
}

export const Slider = ({ children, title }: ISlider) => {
  const navigationPreviousReference = useRef<HTMLButtonElement>(null);
  const navigationNextReference = useRef<HTMLButtonElement>(null);

  const navigation = {
    prevEl: navigationPreviousReference.current,
    nextEl: navigationNextReference.current
  };

  const onSwiper = (swiper: SwiperClass) => {
    const navigation = swiper.params.navigation as NavigationOptions;

    navigation.prevEl = navigationPreviousReference.current;
    navigation.nextEl = navigationNextReference.current;

    swiper.navigation.destroy();
    swiper.navigation.init();
    swiper.navigation.update();
  };

  return (
    <>
      <div className="sttabs_layout__title_block">
        <h2>{title}</h2>
        <div className="swiper-buttons">
          <SliderButton
            dir="left"
            ref={navigationPreviousReference}
          />
          <SliderButton
            dir="right"
            ref={navigationNextReference}
          />
        </div>
      </div>
      <Swiper
        className="swiper-wrapper"
        modules={[Navigation]}
        slidesPerView={2}
        slidesPerGroup={2}
        spaceBetween={15}
        navigation={navigation}
        onSwiper={onSwiper}
        breakpoints={breakpoints}
      >
        {children}
      </Swiper>
    </>
  );
};
