import * as MdIcon from 'react-icons/md';

import { Loader } from '@/components/loader';
import { useAppSelector } from '@/hooks/useStore';
import { Movie } from '@/types/movies';

const MoviePost = ({ movie }: { movie: Movie }) => {
  if (movie.poster_path)
    return (
      <img
        className="h-full w-full"
        src={`https://www.themoviedb.org/t/p/w92/${movie.poster_path}`}
        alt={movie.title}
      />
    );

  return <MdIcon.MdMovie size={24} className="text-gray-10" />;
};

export const SearchBarSuggestions = () => {
  const { isSearching, searchResult } = useAppSelector(state => state.movies);
  const movieYear = (date: string) => date.split('-')[0];

  return (
    <Loader isLoading={isSearching}>
      <ul id="suggestionsList">
        {searchResult.map(movie => (
          <li
            id="suggestionsListItem"
            className="list-item hover:bg-gray-10 [&:not(:last-child)]:border-b border-solid border-gray-10"
          >
            <div className="block cursor-pointer">
              <div className="mx-auto w-full max-w-6xl p-4 px-6">
                <div className="flex items-center">
                  <div className="flex items-center justify-center h-10 w-9 bg-gray-40">
                    <MoviePost movie={movie} />
                  </div>

                  <div className="ml-3">
                    <h4 className="font-roboto font-normal text-lg text-gray-90">
                      {movie.title}
                    </h4>
                    <span className="block font-roboto font-normal text-md text-gray-50">
                      ({movie.original_title})
                    </span>
                    <span className="block font-roboto font-normal text-md text-gray-50">
                      {movieYear(movie.release_date)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Loader>
  );
};
