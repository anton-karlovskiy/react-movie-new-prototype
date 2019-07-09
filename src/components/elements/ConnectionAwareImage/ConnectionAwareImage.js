
import React from 'react';

import useEffectiveConnectionType from '../../../utils/hooks';
import { getPosterUrl } from '../../../utils/helpers';

const ConnectionAwareImage = ({ path, alt, ...rest }) => {
  const connectionEffectiveType = useEffectiveConnectionType();
  const imgUrl = path && connectionEffectiveType ? getPosterUrl(connectionEffectiveType, path) : './images/no_image.jpg';
  return (
    <img src={imgUrl} alt={alt} {...rest} />
  );
};

export default ConnectionAwareImage;
