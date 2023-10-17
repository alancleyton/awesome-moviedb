export const HeaderNavbarSearchSuggestions = () => (
  <div className="absolute h-auto w-full top-8 bg-dark overflow-hidden rounded-md">
    <div className="flex p-3 hover:bg-dark900 cursor-pointer border-b border-solid border-dark600">
      <figure className="min-w-fit mr-3">
        <img
          className="rounded-md"
          src="https://www.themoviedb.org/t/p/original/8hjno4uE19pm0qlfUDcM8e5WK13.jpg"
          alt="filme"
          height={48}
          width={48}
        />
      </figure>

      <div className="overflow-hidden">
        <h4 className="text-white text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
          Missão: Impossível - Acerto de Contas Parte Um
        </h4>
        <span className="block text-gray300 text-sm">2023</span>
        <span className="block text-gray300 text-sm">
          Ação, Aventura, Suspense
        </span>
      </div>
    </div>

    <div className="flex p-3 hover:bg-dark900 cursor-pointer border-b border-solid border-dark600">
      <figure className="min-w-fit mr-3">
        <img
          className="rounded-md"
          src="https://www.themoviedb.org/t/p/original/o5tWAiHfxEvu2z1qkJKU4gW1uPY.jpg"
          alt="filme"
          height={48}
          width={48}
        />
      </figure>

      <div className="overflow-hidden">
        <h4 className="text-white text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
          Dezesseis Facadas
        </h4>
        <span className="block text-gray300 text-sm">2023</span>
        <span className="block text-gray300 text-sm">Terror, Comédia</span>
      </div>
    </div>

    <div className="flex p-3 hover:bg-dark900 cursor-pointer border-b border-solid border-dark600">
      <figure className="min-w-fit mr-3">
        <img
          className="rounded-md"
          src="https://www.themoviedb.org/t/p/w220_and_h330_face/5t0TF57Y7xWakdYl7fzXBjpHz6u.jpg"
          alt="filme"
          height={48}
          width={48}
        />
      </figure>

      <div className="overflow-hidden">
        <h4 className="text-white text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis">
          Alexandra Daddario
        </h4>
        <span className="block text-gray300 text-sm">37 anos</span>
        <span className="block text-gray300 text-sm">Atriz</span>
      </div>
    </div>
  </div>
);
