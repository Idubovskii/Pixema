import { SwiperSlide } from 'swiper/react';

import { PersonTab } from './PersonTab/PersonTab';
import styles from './styles.module.scss';
import {
  type IMovie,
  type IMoviePerson,
  type IMovieSimilar
} from '../../../types/movie';
import { MovieCard } from '../../MovieCard/MovieCard';
import { Slider } from '../../Slider/Slider';

interface ITabsLayout {
  roles?: IMoviePerson[] | undefined;
  similars?: IMovieSimilar[] | undefined;
  personMovies?: IMovie[] | undefined;
  sequels?: IMovie[] | undefined;
  title?: string;
}

export const TabsLayout = ({
  roles,
  sequels,
  similars,
  title,
  personMovies
}: ITabsLayout) => {
  return (
    <div className={styles.tabs_layout}>
      <Slider title={title}>
        {roles &&
          roles?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <PersonTab item={item} />
              </SwiperSlide>
            );
          })}
        {similars &&
          similars?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <MovieCard
                  docs={item}
                  key={item.id}
                />
              </SwiperSlide>
            );
          })}
        {personMovies &&
          personMovies?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <MovieCard
                  docs={item}
                  key={item.id}
                />
              </SwiperSlide>
            );
          })}
        {sequels &&
          sequels?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <MovieCard
                  docs={item}
                  key={item.id}
                />
              </SwiperSlide>
            );
          })}
      </Slider>
    </div>
  );
};
