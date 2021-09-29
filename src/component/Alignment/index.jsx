import PropTypes from 'prop-types';
import classNames from 'class-names';
import styles from './index.module.less';

const Alignment = ({ align, type, className, children, ...rest }) => {
  const cls = classNames({
    [styles['alignment-box']]: true,
    [styles[align]]: true,
    [styles[type]]: !!type,
    [className]: !!className,
  });
  return (
    <div className={cls} {...rest}>
      {children}
    </div>
  );
};

Alignment.propTypes = {
  align: PropTypes.oneOf(['center-center', 'left-center', 'right-center']),
  type: PropTypes.oneOf(['horizontal', 'vertical']),
};

Alignment.defaultTypes = {
  align: 'center-center', // <horizontal>-<vertical>
  type: 'horizontal',
};

export default Alignment;
