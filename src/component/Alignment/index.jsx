import PropTypes from 'prop-types';
import classNames from 'class-names';
import styles from './index.module.less';

// -----------|-------------|-----------
// top-left   |top-center   | top-right
// -----------|-------------|-----------
// center-left|center-center| center-right
// -----------|-------------|-----------
// bottom-left|bottom-center|bottom-right
// -----------|-------------|-----------

const MODE_TO_CLASS_MAPPING = {
  /* horizontal: vertical */
  'top-left': styles['top-left'],
  'top-right': styles['bottom-left'],
  'top-center': styles['center-left'],
  'center-left': styles['top-center'],
  'center-center': styles['center-center'],
  'center-right': styles['bottom-center'],
  'bottom-left': styles['top-right'],
  'bottom-center': styles['center-right'],
  'bottom-right': styles['bottom-right'],
  'space-between': styles['space-between'],
};

const Alignment = ({ align, type, className, children, ...rest }) => {
  let localAlign = styles[align];
  if (type === 'vertical') {
    localAlign = MODE_TO_CLASS_MAPPING[align];
  }
  const cls = classNames({
    [styles['alignment-box']]: true,
    [localAlign]: true,
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
  align: PropTypes.oneOf([
    'center-center',
    'center-left',
    'center-right',
    'top-left',
    'top-right',
    'top-center',
    'bottom-left',
    'bottom-right',
    'bottom-center',
    'space-between',
  ]),
  type: PropTypes.oneOf(['horizontal', 'vertical']),
};

Alignment.defaultTypes = {
  align: 'center-center', // <horizontal>-<vertical>
  type: 'horizontal',
};

export default Alignment;
