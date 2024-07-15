import React, { useEffect, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { fetchMovies } from '@/store/movies/actions';

const Home = () => {
  const { isLoading, movies } = useAppSelector(state => state.movies);

  const dispatch = useAppDispatch();

  const handleFetchMovies = useCallback(() => {
    dispatch(fetchMovies('?language=pt-BR&page=1'));
  }, [dispatch]);

  useEffect(() => {
    handleFetchMovies();
  }, [handleFetchMovies]);

  return (
    <div>
      <h2>Movies</h2>
      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>{movie.original_title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
