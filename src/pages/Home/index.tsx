import React, { useEffect, useCallback } from 'react';
import { Button } from '@alancleyton67/awesome-ui';

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
      <Button size="md" variant="secondary">
        Awesome Ui
      </Button>

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
