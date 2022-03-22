import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web App Developement</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website Maintenance and Content Management</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Search Engine Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom Plugins, Features and Animations To Suit Your Needs</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
