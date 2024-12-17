import { Link, NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
import { GiFruitBowl } from 'react-icons/gi';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={buildLinkClass}
          title="Learn more about us"
        >
          About
        </NavLink>
        <NavLink to="/catalog" className={buildLinkClass}>
          Catalog
        </NavLink>
        <NavLink to="/contact" className={buildLinkClass} end>
          Contact Us
        </NavLink>

        <Link to="/" className={css.logo}>
          <GiFruitBowl className={css.icon} />
          <span className={css.logoText}>fresh harvest box</span>
        </Link>
      </nav>
    </header>
  );
};

export default Navigation;
