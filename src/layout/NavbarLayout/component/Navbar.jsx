import { useState } from 'react';
import { withRouter } from 'react-router';

import NavbarItem from './NavbarItem';
import styles from './Navbar.module.less';

const Navbar = (props) => {
  const { history, navList } = props;

  const handleChange = (path) => () => {
    history.replace(path);
  };

  const isActive = (path) => {
    const { location } = history;
    return location.pathname.indexOf(path) > -1;
  };

  return (
    <div className={styles['nav-bar']}>
      {navList.map((item) => {
        return (
          <NavbarItem
            key={item.path}
            itemKey={item.path}
            label={item.label}
            name={item.icon}
            active={isActive(item.path)}
            onClick={handleChange(item.path)}
          />
        );
      })}
    </div>
  );
};

export default withRouter(Navbar);
