import { UPDATE_CARDS_TO_SHOW } from '../types';

const initialState = [{
  adult: false,
  backdrop_path: '/qjGrUmKW78MCFG8PTLDBp67S27p.jpg',
  genre_ids: [16, 28, 12, 14],
  id: 635302,
  original_language: 'ja',
  original_title: '劇場版「鬼滅の刃」無限列車編',
  overview:
    'Тандзиро с друзьями из отряда уничтожителей демонов расследует серию загадочных исчезновений внутри мчащегося поезда. Но компания ещё не знает, что в составе находится один из двенадцати Лунных демонов, и он приготовил для них ловушку.',
  popularity: 911.596,
  poster_path: '/sFXMvI0I5GEiXRCJDIuzBBXpkiZ.jpg',
  release_date: '2020-10-16',
  title: 'Истребитель демонов: Поезд «Бесконечный»',
  video: false,
  vote_average: 8.4,
  vote_count: 2488,
},
{
  adult: false,
  backdrop_path: '/adlZgxAudw3ZPA0HUcDzSTKrH8B.jpg',
  genre_ids: [16, 10751, 35, 12, 10770],
  id: 755812,
  original_language: 'fr',
  original_title: 'Miraculous World : New York, les héros unis',
  overview:
      'В честь недели дружбы между Францией и США класс Маринет готовится к поездке в Нью-Йорк. Эдриан тоже хочет поехать, но поначалу его не отпускает отец, к тому же Леди Баг просит Супер-Кота последить за Парижем в ее отсутствие. Когда Габриель все-таки разрешает сыну полететь в Нью-Йорк, Эдриан оказывается перед сложным выбором. Желание посетить Нью-Йорк пересиливает, и он отправляется в долгожданное путешествие. Леди Баг и Супер-Кот не подозревают, что Бражник тоже собирается в город небоскребов, и что им предстоит объединить силы с американскими супергероями, чтобы дать отпор врагу.',
  popularity: 294.919,
  poster_path: '/kIHgjAkuzvKBnmdstpBOo4AfZah.jpg',
  release_date: '2020-09-25',
  title: 'Леди Баг и Супер-Кот: Нью-Йорк. Союз героев',
  video: false,
  vote_average: 8.2,
  vote_count: 899,
}];

export const cardsToShowReducer = (action, state = initialState) => {
  switch (action?.type) {
    case UPDATE_CARDS_TO_SHOW:
      return action.cardsToShow;
    default:
      return state;
  }
};
