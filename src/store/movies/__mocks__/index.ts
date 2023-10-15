import { Movie } from '../types';

export const movies: Movie[] = [
  {
    adult: false,
    backdrop_path: '/xFYpUmB01nswPgbzi8EOCT1ZYFu.jpg',
    genre_ids: [28, 18, 12],
    id: 980489,
    original_language: 'en',
    original_title: 'Gran Turismo',
    overview:
      'Baseado na história de Jann Mardenborough, e relata a trajetória de um jogador de videogame que utilizou suas habilidades nos simuladores para se tornar um piloto profissional de verdade.',
    popularity: 3389.624,
    poster_path: '/qU60nhBRbKU23gIGrZi2CvUj6MQ.jpg',
    release_date: '2023-08-09',
    title: 'Gran Turismo: De Jogador a Corredor',
    video: false,
    vote_average: 8,
    vote_count: 763,
  },
];

export const error = {
  success: false,
  status_code: 34,
  status_message: 'The resource you requested could not be found.',
};
