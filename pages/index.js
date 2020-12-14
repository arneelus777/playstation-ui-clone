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
    </div>
  );
}
