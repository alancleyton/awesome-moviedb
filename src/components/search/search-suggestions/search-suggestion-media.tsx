import { When } from '@/components/when';
import { Media } from '@/types/media';
import { SearchCategory } from '@/types/search';
import { SearchSuggestionPoster } from './search-suggestion-poster';

interface SearchSuggestionMediaProps {
  media: Media;
  category: SearchCategory;
}

export const SearchSuggestionMedia = ({
  media,
  category,
}: SearchSuggestionMediaProps) => {
  const mediaDate = (date: string | undefined) => {
    if (date) return date.split('-')[0];
    return '';
  };

  const showOriginalMediaNameOrTitle =
    media?.title !== media?.original_title ||
    media?.name !== media?.original_name;

  const personKnownForList = (knownFor: Media[] | undefined) => {
    if (knownFor?.length) {
      return knownFor
        .slice(0, 2)
        .map((item, index) => (
          <span
            className={
              knownFor?.length > 1 && index === 0
                ? "after:content-[','] mr-2"
                : ''
            }
          >
            {item?.title || item?.name}
          </span>
        ));
    }
    return [];
  };

  return (
    <div id="searchSuggestionsMedia" className="block cursor-pointer ">
      <div className="mx-auto w-full max-w-6xl p-4 px-6">
        <div className="flex items-start">
          <div className="flex items-center justify-center h-10 min-w-9 bg-gray-40">
            <SearchSuggestionPoster media={media} category={category} />
          </div>
          <div className="ml-3 w-full overflow-hidden">
            <h4 className="flex items-center font-roboto font-medium truncate text-lg text-gray-90">
              {media?.title || media?.name}&nbsp;
              <small className="font-roboto font-normal text-md text-gray-50">
                <When condition={showOriginalMediaNameOrTitle}>
                  ({media?.original_title || media?.original_name})
                </When>
              </small>
            </h4>
            <span className="block font-roboto font-normal text-md text-gray-50">
              <When condition={media?.known_for?.length}>
                {personKnownForList(media?.known_for)}
              </When>
              <When condition={media?.release_date || media?.first_air_date}>
                {mediaDate(media?.release_date || media?.first_air_date)}
              </When>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
