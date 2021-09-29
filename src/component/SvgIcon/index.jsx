import PropTypes from 'prop-types';
import styles from './index.module.less';
import classNames from 'class-names';

const SvgIcon = (props) => {
  const { name, size, color, className } = props;
  const style = color ? { fill: color } : {};

  const cln = classNames({
    [styles['svg-icon']]: true,
    [className]: !!className,
  });

  return (
    <div className={styles['icon-box']}>
      <svg viewBox={`0 0 32 32`}>
        <use xlinkHref={`#${name}`} style={style} className={cln}></use>
      </svg>
    </div>
  );
};

SvgIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
};

export default SvgIcon;
