export function Preview({ id }) {
  if (id === "helmi") {
    return (
      <figure className="plate">
        <img
          src={`${import.meta.env.BASE_URL}work/helmi.jpg`}
          alt="Pohjoisen Helmi homepage with the headline Luotettava siivouspalvelu Tamperen alueella."
          width="1280"
          height="800"
        />
        <figcaption>
          <span>Published site</span>
          <span>Finnish</span>
        </figcaption>
      </figure>
    );
  }

  if (id === "hatynka") {
    return (
      <figure className="plate">
        <div className="mini mini-shelter" aria-hidden="true">
          <p className="mini-kicker">Хатинка Лапок</p>
          <p className="mini-title">Кожне життя має значення.</p>
          <div className="mini-chips">
            <span className="is-on">Всі</span>
            <span>Собаки</span>
            <span>Коти</span>
          </div>
          <div className="mini-cards">
            <span />
            <span />
            <span />
          </div>
          <span className="mini-btn">Подивитись історії</span>
        </div>
        <figcaption>
          <span>From the React source</span>
          <span>No public demo</span>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="plate">
      <div className="mini mini-cafe" aria-hidden="true">
        <p className="mini-kicker">Cafe</p>
        <p className="mini-title">Six pages, one stylesheet.</p>
        <ol>
          <li>Home</li>
          <li>Menu</li>
          <li>About</li>
          <li>Story</li>
          <li>Blog</li>
          <li>Contact</li>
        </ol>
      </div>
      <figcaption>
        <span>HTML and CSS</span>
        <span>2024</span>
      </figcaption>
    </figure>
  );
}
