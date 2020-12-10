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
              src="https://i.ibb.co/wKbtDJ9/33038325-1911711708859344-867365166503690240-n-1.jpg"
              width="150px"
            ></img>
          </span>
          <span className="time">8:06 PM</span>
        </section>
      </header>
    </div>
  );
}
