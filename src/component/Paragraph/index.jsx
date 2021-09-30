import PropTypes from 'prop-types';
import { variant } from './constants';
import Variant from './Variant';

const Paragraph = ({ variant, children, ...rest }) => {
  return (
    <Variant {...rest} variant={variant}>
      {children}
    </Variant>
  );
};

Paragraph.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'title', 'subtitle1', 'subtitle2', 'body1', 'body2']),
};

Paragraph.defaultProps = {
  variant: variant.body1,
};

export default Paragraph;
