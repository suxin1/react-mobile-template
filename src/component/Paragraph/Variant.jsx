import { variantMapping, tagType } from './constants';

const Variant = ({ variant, children, ...rest }) => {
  const tag = variantMapping[variant];
  switch (tag) {
    case tagType.h1:
      return <h1 {...rest}>{children}</h1>;
    case tagType.h2:
      return <h2 {...rest}>{children}</h2>;
    case tagType.h3:
      return <h3 {...rest}>{children}</h3>;
    case tagType.h4:
      return <h4 {...rest}>{children}</h4>;
    case tagType.h5:
      return <h5 {...rest}>{children}</h5>;
    case tagType.h6:
      return <h6 {...rest}>{children}</h6>;
    case tagType.p:
      return <p {...rest}>{children}</p>;
    case tagType.span:
      return <span {...rest}>{children}</span>;
    default:
      return <p {...rest}>{children}</p>;
  }
};

export default Variant;
