import Alignment from 'component/Alignment';
import SvgIcon from 'component/SvgIcon';
import classNames from 'class-names';
import styles from './NavbarItem.module.less';

const NavbarItem = ({ active, name, label, onClick }) => {
  const iconCls = classNames({
    [styles['icon-inactive']]: !active,
  });
  const cls = classNames({
    [styles['active']]: active,
    [styles['inactive']]: !active,
  });
  return (
    <Alignment className={styles['nav-bar-item']} align="center-center" onClick={onClick}>
      <Alignment type="vertical" className={cls}>
        <SvgIcon name={name} className={iconCls} />
        <span>{label}</span>
      </Alignment>
    </Alignment>
  );
};

export default NavbarItem;
