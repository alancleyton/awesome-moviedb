import * as MdIcon from 'react-icons/md';

export const SearchSuggestions = () => (
  <div id="searchSuggestions">
    <ul id="searchSuggestionsList">
      <li className="list-item hover:bg-gray-10 [&:not(:last-child)]:border-b border-solid border-gray-10">
        <div className="block cursor-pointer">
          <div className="mx-auto w-full max-w-6xl p-4 px-6">
            <div className="flex items-center">
              <div className="flex items-center justify-center h-10 w-9 bg-gray-40">
                <img
                  className="h-full w-full"
                  src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/ev7IMfMXRbddGLVw7xPL2PHpkWR.jpg"
                  alt="Transformers"
                />
              </div>

              <div className="ml-3">
                <h4 className="font-roboto font-normal text-lg text-gray-90">
                  Transformers
                </h4>
                <span className="block font-roboto font-normal text-md text-gray-50">
                  2007
                </span>
                <div className="flex items-center font-roboto font-normal text-md text-gray-50">
                  <span className="block">Shia LaBeouf</span>,&nbsp;
                  <span className="block">Megan Fox</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li className="list-item hover:bg-gray-10 [&:not(:last-child)]:border-b border-solid border-gray-10">
        <div className="block cursor-pointer">
          <div className="mx-auto w-full max-w-6xl p-4 px-6">
            <div className="flex items-center">
              <div className="flex items-center justify-center h-10 w-9 bg-gray-40">
                <img
                  className="h-full w-full"
                  src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5OZVZkV3cCfOGr7X0Ycft6hF5f0.jpg"
                  alt="Transformers: O Início"
                />
              </div>

              <div className="ml-3">
                <h4 className="font-roboto font-normal text-lg text-gray-90">
                  Transformers: O Início
                </h4>
                <span className="block font-roboto font-normal text-md text-gray-50">
                  2024
                </span>
                <div className="flex items-center font-roboto font-normal text-md text-gray-50">
                  <span className="block">Chris Hemsworth</span>,&nbsp;
                  <span className="block">Brian Tyree Henry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li className="list-item hover:bg-gray-10 [&:not(:last-child)]:border-b border-solid border-gray-10">
        <div className="block cursor-pointer">
          <div className="mx-auto w-full max-w-6xl p-4 px-6">
            <div className="flex items-center">
              <div className="flex items-center justify-center h-10 w-9 bg-gray-40">
                <MdIcon.MdMovie size={24} className="text-gray-10" />
              </div>

              <div className="ml-3">
                <h4 className="font-roboto font-normal text-lg text-gray-90">
                  Transsanity
                </h4>
                <span className="block font-roboto font-normal text-md text-gray-50">
                  2022
                </span>
                <div className="flex items-center font-roboto font-normal text-md text-gray-50">
                  <span className="block">Roshaante Anderson</span>,&nbsp;
                  <span className="block">Cubana Angel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
);
