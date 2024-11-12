import * as MdIcon from 'react-icons/md';

import { Media } from '@/types/media';
import { SearchCategory } from '@/types/search';

interface SearchSuggestionPosterProps {
  media: Media;
  category: SearchCategory;
}

const POSTER_FALLBACK_ICON = {
  movie: <MdIcon.MdMovie size={24} className="text-gray-10" />,
  tv: <MdIcon.MdTv size={24} className="text-gray-10" />,
  person: <MdIcon.MdPerson size={24} className="text-gray-10" />,
};

export const SearchSuggestionPoster = ({
  media,
  category,
}: SearchSuggestionPosterProps) => {
  const mediaPath = media?.poster_path || media?.profile_path;
  const mediaAlt = media?.title || media?.name;

  if (mediaPath) {
    return (
      <img
        id="searchSuggestionPoster"
        className="h-full w-full"
        src={`https://www.themoviedb.org/t/p/w92/${mediaPath}`}
        alt={mediaAlt}
      />
    );
  }

  if (!mediaPath && media?.media_type && category === 'multi') {
    return POSTER_FALLBACK_ICON[media?.media_type];
  }

  if (!mediaPath && category === 'movie') {
    return POSTER_FALLBACK_ICON.movie;
  }

  if (!mediaPath && category === 'tv') {
    return POSTER_FALLBACK_ICON.tv;
  }

  if (!mediaPath && category === 'person') {
    return POSTER_FALLBACK_ICON.person;
  }

  return null;
};
