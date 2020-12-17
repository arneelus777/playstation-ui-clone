import Head from "next/head";
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="screen">
      <header>
        <section className="media-nav">
          <a href="#" className="active">
            Games
          </a>
          <a href="#">Media</a>
        </section>
        <section className="settings">
          <span className="icon">
            <i className="fa fa-search"></i>
          </span>
          <span className="icon">
            <i className="fa fa-cog"></i>
          </span>
          <span className="icon">
            <img
              className="user"
              src="https://randomuser.me/api/portraits/women/44.jpg"
            />
          </span>
          <span className="time">8:06 PM</span>
        </section>
      </header>
      <div className="container">
        <section className="game-nav">
          <div className=" game active">
            <i className="fa fa-location-arrow"></i>
          </div>
          {/* Cover 1 */}
          <div className="game">
            <div
              className="img"
              style={{
                background: "url('https://i.redd.it/8pvdi0pne8a51.png')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                transform: "scale(1.5)",
              }}
            ></div>
          </div>
          {/* Cover 2 */}
          <div className="game">
            <div
              className="img"
              style={{
                background:
                  "url('https://www.gamerevolution.com/assets/uploads/2020/08/Call-of-Duty-Black-Ops-Cold-War-Pre-Order-Guide-Key-Art.jpg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                transform: "scale(1.5)",
              }}
            ></div>
          </div>
          {/* Cover 3 */}
          <div className="game">
            <div
              className="img"
              style={{
                background:
                  "url('https://sm.ign.com/t/ign_za/screenshot/a/assassins-/assassins-creed-valhalla-box-art_ahd4.1080.jpg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                transform: "scale(1.5)",
              }}
            ></div>
          </div>
          {/* Cover 4 */}
          <div className="game">
            <div
              className="img"
              style={{
                background:
                  "url('https://www.psu.com/wp/wp-content/uploads/2019/07/Cyberpunk-2077-1024x576.jpg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                transform: "scale(1.5)",
              }}
            ></div>
          </div>
          {/* Cover 5 */}
          <div className="game">
            <div
              className="img"
              style={{
                background:
                  "url('https://blog.playstation.com/tachyon/2020/11/50625921476_1fe30ea72a_k.jpg?resize=1088,612&crop_strategy=smart')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                transform: "scale(1.5)",
              }}
            ></div>
          </div>
          {/* Cover 6 */}
          <div className="game">
            <div
              className="img"
              style={{
                background:
                  "url('https://britgamer.s3.eu-west-1.amazonaws.com/2020-08/dirt-5-amplified-edition-cover.jpg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                transform: "scale(1.5)",
              }}
            ></div>
          </div>
          {/* Cover 7 */}
          <div className="game">
            <div
              className="img"
              style={{
                background:
                  "url('https://blog.playstation.com/tachyon/2020/11/sackboy-featured.jpg?resize=1088,612&crop_strategy=smart')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
                transform: "scale(1.5)",
              }}
            ></div>
          </div>
        </section>
        <section className="info">
          <span className="sub-title">
            Official news from Playstation | 11/28/2020
          </span>
          <h1>Ready for a PS5 Adventure?</h1>
          <p>
            ASTRO's PLAYROOM is pre-loaded and waiting for you! explore the new
            capabilities of PS5 and feel the world..
          </p>
        </section>
      </div>
      <section id="video-trailers">
        <div className="trailer">
          <img
            className="image"
            src="https://i.ytimg.com/vi/ZM7HC4aQ57g/maxresdefault.jpg"
          />
          <div className="video-info">
            <div className="circle-player">
              <i className="fa fa-play"></i>
            </div>
            <span className="title">Grand Theft Auto 6</span>
          </div>
        </div>
        <div className="trailer">
          <img
            className="image"
            src="https://i.ytimg.com/vi/ZM7HC4aQ57g/maxresdefault.jpg"
          />
          <div className="video-info">
            <div className="circle-player">
              <i className="fa fa-play"></i>
            </div>
            <span className="title">Grand Theft Auto 6</span>
          </div>
        </div>
        <div className="trailer">
          <img
            className="image"
            src="https://i.ytimg.com/vi/ZM7HC4aQ57g/maxresdefault.jpg"
          />
          <div className="video-info">
            <div className="circle-player">
              <i className="fa fa-play"></i>
            </div>
            <span className="title">Grand Theft Auto 6</span>
          </div>
        </div>
        <div className="trailer">
          <img
            className="image"
            src="https://i.ytimg.com/vi/ZM7HC4aQ57g/maxresdefault.jpg"
          />
          <div className="video-info">
            <div className="circle-player">
              <i className="fa fa-play"></i>
            </div>
            <span className="title">Grand Theft Auto 6</span>
          </div>
        </div>
        <div className="trailer">
          <img
            className="image"
            src="https://i.ytimg.com/vi/ZM7HC4aQ57g/maxresdefault.jpg"
          />
          <div className="video-info">
            <div className="circle-player">
              <i className="fa fa-play"></i>
            </div>
            <span className="title">Grand Theft Auto 6</span>
          </div>
        </div>
        <div className="trailer">
          <img
            className="image"
            src="https://i.ytimg.com/vi/ZM7HC4aQ57g/maxresdefault.jpg"
          />
          <div className="video-info">
            <div className="circle-player">
              <i className="fa fa-play"></i>
            </div>
            <span className="title">Grand Theft Auto 6</span>
          </div>
        </div>
        <div className="trailer">
          <img
            className="image"
            src="https://i.ytimg.com/vi/ZM7HC4aQ57g/maxresdefault.jpg"
          />
          <div className="video-info">
            <div className="circle-player">
              <i className="fa fa-play"></i>
            </div>
            <span className="title">Grand Theft Auto 6</span>
          </div>
        </div>
        <div className="trailer">
          <img
            className="image"
            src="https://i.ytimg.com/vi/ZM7HC4aQ57g/maxresdefault.jpg"
          />
          <div className="video-info">
            <div className="circle-player">
              <i className="fa fa-play"></i>
            </div>
            <span className="title">Grand Theft Auto 6</span>
          </div>
        </div>
        <div className="trailer">
          <img
            className="image"
            src="https://i.ytimg.com/vi/ZM7HC4aQ57g/maxresdefault.jpg"
          />
          <div className="video-info">
            <div className="circle-player">
              <i className="fa fa-play"></i>
            </div>
            <span className="title">Grand Theft Auto 6</span>
          </div>
        </div>
      </section>
    </div>
  );
}
