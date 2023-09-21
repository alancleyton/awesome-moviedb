import React from 'react';
import { Link } from 'react-router-dom';
import * as MdIcon from 'react-icons/md';

import logoBrand from '@/assets/images/logo-brand.png';

import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Field } from '@/components/Form/Field';

import './Navbar.scss';

type Props = {
  onOpenMenu: () => void;
};

export const Navbar: React.FC<Props> = ({ onOpenMenu }): JSX.Element => (
  <nav className="navbar" role="presentation" aria-label="amdb navigation menu">
    <Container>
      <div className="navbar-navigation">
        <div className="navbar-navigation-brand colapsed">
          <Link className="navbar-brand" to="/">
            <img src={logoBrand} alt="logotipo" />
          </Link>
        </div>

        <div className="navbar-navigation-search">
          <Field
            id="searchField"
            type="text"
            placeholder="Buscar filme, série ou pessoa"
            icon={
              <MdIcon.MdSearch
                className="absolute top-2 right-3 text-gray900"
                size={24}
              />
            }
          />
        </div>

        <div className="navbar-navigation-menu colapsed">
          <Button className="mx-3" variant="neutral" size="small">
            <Link to="/movies">Filmes</Link>
          </Button>

          <Button className="mx-3" variant="neutral" size="small">
            <Link to="/shows">Programas de TV</Link>
          </Button>

          <Button className="mx-3" variant="neutral" size="small">
            <Link to="/peoples">Celebridades</Link>
          </Button>
        </div>

        <span className="navbar-separator colapsed">&nbsp;</span>

        <Button variant="neutral" size="small" onClick={onOpenMenu}>
          <MdIcon.MdMenu className="mr-3" size={24} />
          Menu
        </Button>
      </div>
    </Container>
  </nav>
);
