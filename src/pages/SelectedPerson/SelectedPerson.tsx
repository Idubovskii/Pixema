import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import MediaQuery from 'react-responsive';
import { useParams } from 'react-router-dom';

import { LazyLoaderSvg } from '~/assets/svg/LazyLoaderSvg';
import { Facts } from '~/components/Facts/Facts';
import { convertTimeToDate } from '~/shared/helpers/convertTimeToDate';
import { Tabs } from '~/shared/ui/Tabs/Tabs';
import { TabsLayout } from '~/shared/ui/Tabs/TabsLayout/TabsLayout';
import { loadMoviesByIdAsyncAction } from '~/store/reducers/movies/actions';
import { loadSelectedPersonAsyncAction } from '~/store/reducers/selectedPerson/actions';
import {
  changeThemeSelector,
  moviesSelector,
  selectedPersonSelector
} from '~/store/selectors/selectors';

import styles from './styles.module.scss';

export const SelectedPerson = () => {
  const { id } = useParams();
  const hasTheme = useSelector(changeThemeSelector);
  const person = useSelector(selectedPersonSelector);
  const movies = useSelector(moviesSelector);
  const dispatch = useDispatch();
  const countFilms = Number(person.movies?.length) - 1;
  const query = person.movies
    ?.map((element) => `search=${element.id ?? ''}&field=id`)
    .join('&');
  const limit = countFilms + 1;

  useEffect(() => {
    dispatch(loadSelectedPersonAsyncAction(id));
  }, [id, dispatch]);
  useEffect(() => {
    dispatch(loadMoviesByIdAsyncAction(limit, query));
  }, [limit, query, dispatch]);

  const items = [
    {
      title: 'Карьера',
      value: person.profession?.map((element) => (
        <p key={element.value}>{element.value}</p>
      )),
      condition: person.profession
    },
    {
      title: 'Всего фильмов',
      value: countFilms,
      condition: countFilms
    },
    { title: 'Возраст', value: person.age, condition: person.age },
    {
      title: 'Пол',
      value: person.sex,
      condition: person.sex
    },
    {
      title: 'Рост',
      value: `${person.growth} см`,
      condition: person.growth
    },
    {
      title: 'Дата рождения',
      value: convertTimeToDate(person.birthday, 'D MMMM YYYY'),
      condition: person.birthday
    },
    {
      title: 'Дата смерти',
      value: convertTimeToDate(person.death, 'D MMMM YYYY'),
      condition: person.death
    }
  ];

  const tabs = [
    {
      txt: 'Фильмы и сериалы',
      content: (
        <TabsLayout
          personMovies={movies}
          title={`Фильмы и сериалы (${movies?.length})`}
        />
      ),
      condition: movies?.length
    },
    {
      txt: 'Факты',
      content: <Facts facts={person.facts} />,
      condition: person.facts?.length
    }
  ];
  if (!person.id) {
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
            <h1 className={styles.movie_name}>{person.name}</h1>
            <h2 className={styles.movie_altname}>{person.enName}</h2>
          </MediaQuery>
          <div className={styles.img_container}>
            <img
              src={person.photo}
              alt="person poster"
            />
          </div>
        </div>
        <div className={styles.top_container}>
          <MediaQuery minWidth={881}>
            <h1 className={styles.movie_name}>{person.name}</h1>
            <h2 className={styles.movie_altname}>{person.enName}</h2>
          </MediaQuery>
          <div className={styles.info_container}>
            <div className={styles.column_description}>
              {items.map(
                (item) =>
                  item.condition && (
                    <div
                      className={styles.column_description_block}
                      key={item.title}
                    >
                      <p className={styles.column_title}>{item.title}</p>
                      <p className={styles.column_description_content}>
                        {item.value}
                      </p>
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
