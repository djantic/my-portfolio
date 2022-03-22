import React from 'react';
import './portfolio.css';
import IMG from '../../assets/demo.jpg';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG} alt="demo" />
          </div>
          <h3>BigStore eCommerce Shop</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/djantic/bigstore"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://bigstoreapp.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              LiveDemo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
