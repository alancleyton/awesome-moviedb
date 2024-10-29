import * as MdIcon from 'react-icons/md';

import { Loader } from '@/components/loader';
import { When } from '@/components/when';
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
  const storageLanguage = window.localStorage.getItem('amdb:lng');

  return (
    <Loader isLoading={isSearching}>
      <ul id="suggestionsList" role="listbox">
        {searchResult.map((movie, index) => (
          <li
            key={movie.id + index}
            id="suggestionsListItem"
            className="list-item hover:bg-gray-10 [&:not(:last-child)]:border-b border-solid border-gray-10"
          >
            <div className="block cursor-pointer ">
              <div className="mx-auto w-full max-w-6xl p-4 px-6">
                <div className="flex items-start">
                  <div className="flex items-center justify-center h-10 min-w-9 bg-gray-40">
                    <MoviePost movie={movie} />
                  </div>

                  <div className="ml-3 w-full overflow-hidden">
                    <h4 className="flex items-center font-roboto font-medium truncate text-lg text-gray-90">
                      {movie.title}&nbsp;
                      <small className="font-roboto font-normal text-md text-gray-50">
                        <When
                          condition={
                            movie.original_language !== storageLanguage
                          }
                        >
                          ({movie.original_title})
                        </When>
                      </small>
                    </h4>
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
