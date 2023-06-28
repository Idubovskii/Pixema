export const API_KEY = 'CNXS5KP-JVRM8KQ-MQWNPS5-7S79V3K';
export const STUD_API_URL = import.meta.env.VITE_API_URL as string;
export const KINO_API_URL = import.meta.env.VITE_APIKINO_URL as string;

export const pathnames = [
  { label: 'Главная', value: 'home' },
  { label: 'Избранное', value: 'favorites' },
  { label: 'Настройки', value: 'settings' }
];

export const allGenres = [
  { label: 'Сбросить фильтр', value: '' },
  { label: 'Семейные', value: 'семейный' },
  { label: 'Биографии', value: 'биография' },
  { label: 'Боевики', value: 'боевик' },
  { label: 'Вестерны', value: 'вестерн' },
  { label: 'Военные', value: 'военный' },
  { label: 'Детективы', value: 'детектив' },
  { label: 'Детские', value: 'детский' },
  { label: 'Документальные', value: 'документальный' },
  { label: 'Драмы', value: 'драма' },
  { label: 'Исторические', value: 'история' },
  { label: 'Комедии', value: 'комедия' },
  { label: 'Короткометражки', value: 'короткометражка' },
  { label: 'Криминал', value: 'криминал' },
  { label: 'Мелодрамы', value: 'мелодрама' },
  { label: 'Музыкальные', value: 'музыка' },
  { label: 'Мюзиклы', value: 'мюзикл' },
  { label: 'Новости', value: 'новости' },
  { label: 'Приключения', value: 'приключения' },
  { label: 'Спортивные', value: 'спорт' },
  { label: 'Триллеры', value: 'триллер' },
  { label: 'Ужасы', value: 'ужасы' },
  { label: 'Фантастика', value: 'фантастика' },
  { label: 'Фильмы-нуар', value: 'фильм-нуар' },
  { label: 'Фэнтези', value: 'фэнтези' }
];

export const movieTypes = [
  { label: 'Сбросить фильтр', value: '' },
  { label: 'Фильмы', value: 'movie' },
  { label: 'Сериалы', value: 'tv-series' },
  { label: 'Аниме', value: 'anime' },
  { label: 'Аниме-сериалы', value: 'animated-series' },
  { label: 'Телепрограммы', value: 'tv-show' }
];
