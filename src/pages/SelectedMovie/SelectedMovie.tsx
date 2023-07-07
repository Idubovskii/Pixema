import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import MediaQuery from 'react-responsive';
import { useParams } from 'react-router-dom';

import { LazyLoaderSvg } from '~/assets/svg/LazyLoaderSvg';
import { AgeRating } from '~/components/AgeRating/AgeRating';
import { Facts } from '~/components/Facts/Facts';
import { Genres } from '~/components/Genres/Genres';
import { Rating } from '~/components/Rating/Rating';
import { Time } from '~/components/Time/Time';
import { getRandomInt } from '~/shared/helpers/getRandomInt';
import { FavoriteButton } from '~/shared/ui/buttons/FavoriteButton/FavoriteButton';
import { Tabs } from '~/shared/ui/Tabs/Tabs';
import { TabsLayout } from '~/shared/ui/Tabs/TabsLayout/TabsLayout';
import { loadSelectedMovieAsyncAction } from '~/store/reducers/selectedMovie/actions';
import {
  changeThemeSelector,
  selectedMovieSelector
} from '~/store/selectors/selectors';
import {
  type IMovie,
  type IMoviePerson,
  type IMovieSimilar
} from '~/types/movie';

import styles from './styles.module.scss';

export const SelectedMovie = () => {
  const { id } = useParams();
  const hasTheme = useSelector(changeThemeSelector);
  const movie = useSelector(selectedMovieSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSelectedMovieAsyncAction(id));
  }, [id, dispatch]);

  const person = (value: string) => {
    return movie.persons?.filter((item: IMoviePerson) =>
      item.enProfession === value ? item.name : undefined
    );
  };

  const items = [
    {
      title: 'Год производства',
      value: movie.year,
      condition: movie.year
    },
    {
      title: 'Премьера в мире',
      value: movie.premiere?.world,
      condition: movie.premiere?.world
    },
    {
      title: 'Бюджет',
      value: movie.budget?.value,
      condition: movie.budget?.value
    },
    {
      title: 'Сборы в мире',
      value: movie.fees?.world?.value,
      condition: movie.fees?.world?.value
    },
    {
      title: 'Страна',
      value: movie.countries?.map((element) => (
        <p key={element.name}>{element.name}</p>
      )),
      condition: movie.countries?.length
    },
    {
      title: 'Слоган',
      value: `«${movie.slogan ?? 'Нет слогана'}»`,
      condition: !!movie.slogan
    },

    {
      title: 'Время',
      value: `${movie.movieLength ?? 'Неизвестно'} минут`,
      condition: !!movie.movieLength
    },
    {
      title: 'Возраст',
      value: <AgeRating ageRating={movie.ageRating} />,
      condition: movie.ageRating
    },
    {
      title: 'Режиссер',
      value: movie.persons?.[0]?.name,
      condition: movie.persons?.[0]?.name
    },
    {
      title: 'Продюссер',
      value: person('producer')?.map((index) => (
        <p key={`${index.name}${getRandomInt(0, 500)}`}>{index.name}</p>
      )),
      condition: person('producer')
    },
    {
      title: 'Художник',
      value: person('design')?.map((index) => (
        <p key={`${index.name}${getRandomInt(0, 500)}`}>{index.name}</p>
      )),
      condition: person('design')
    },
    {
      title: 'Монтаж',
      value: person('editor')?.map((index) => (
        <p key={`${index.name}${getRandomInt(0, 500)}`}>{index.name}</p>
      )),
      condition: person('editor')
    }
  ];

  const roles = movie.persons?.filter((item: IMoviePerson) =>
    item.enProfession === 'actor' && item.name?.length ? item : undefined
  );
  const similars = movie.similarMovies?.filter((item: IMovieSimilar) =>
    item.name?.length ? item : undefined
  );
  const sequels = movie.sequelsAndPrequels?.filter((item: IMovie) =>
    item.name?.length ? item : undefined
  );
  const tabs = [
    {
      txt: `Похожие ${
        movie.typeNumber === 1
          ? 'фильмы'
          : movie.typeNumber === 2
          ? 'сериалы'
          : movie.typeNumber === 3 || movie.typeNumber === 5
          ? 'мультфильмы'
          : ''
      }`,
      content: (
        <TabsLayout
          similars={similars}
          title={`Похожие ${
            movie.typeNumber === 1
              ? 'фильмы'
              : movie.typeNumber === 2
              ? 'сериалы'
              : movie.typeNumber === 3 || movie.typeNumber === 5
              ? 'мультфильмы'
              : ''
          } (${similars?.length ?? 0})`}
        />
      ),
      condition: similars?.length
    },
    {
      txt: 'Актёры',
      content: (
        <TabsLayout
          roles={roles}
          title={`Актёры (${roles?.length ?? 0})`}
        />
      ),
      condition: roles?.length
    },
    {
      txt: 'Сиквелы и приквелы',
      content: (
        <TabsLayout
          sequels={sequels}
          title={`Сиквелы и приквелы (${sequels?.length ?? 0})`}
        />
      ),
      condition: sequels?.length
    },
    {
      txt: 'Факты',
      content: <Facts facts={movie.facts} />,
      condition: movie.facts?.length
    }
  ];

  if (!movie.id) {
    return <LazyLoaderSvg />;
  }

  return (
    <div
      className={
        hasTheme
          ? `${styles.movie_container} ${styles.light}`
          : `${styles.movie_container}`
      }
    >
      <div className={styles.content}>
        <div className={styles.left_container}>
          <MediaQuery maxWidth={880}>
            <div className={styles.genres_container}>
              <Genres genres={movie.genres} />
            </div>
            <h1 className={styles.movie_name}>{movie.name || movie.enName}</h1>

            <div className={styles.movie_markers}>
              <Rating rating={movie.rating} />
              <Time movieLength={movie.movieLength} />
              <AgeRating ageRating={movie.ageRating} />
            </div>
          </MediaQuery>
          <div className={styles.img_container}>
            <img
              src={movie.poster?.url}
              alt="movie poster"
            />
          </div>
          <div className={styles.buttons_group}>
            <FavoriteButton movie={movie} />
          </div>
        </div>
        <div className={styles.top_container}>
          <MediaQuery minWidth={881}>
            <div className={styles.genres_container}>
              <Genres genres={movie.genres} />
            </div>
            <h1 className={styles.movie_name}>{movie.name || movie.enName}</h1>

            <h2 className={styles.movie_altname}>{movie.alternativeName}</h2>
            <div className={styles.movie_markers}>
              <Rating rating={movie.rating} />
              <Time movieLength={movie.movieLength} />
              <AgeRating ageRating={movie.ageRating} />
            </div>
          </MediaQuery>
          <div className={styles.info_container}>
            <p className={styles.movie_description}>{movie.description}</p>
            <div className={styles.column_description}>
              {items.map(
                (item) =>
                  item.condition && (
                    <div
                      className={styles.column_description_block}
                      key={item.title}
                    >
                      <p className={styles.column_title}>{item.title}</p>
                      <div className={styles.column_description_content}>
                        {item.value}
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom_container}>
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
};
