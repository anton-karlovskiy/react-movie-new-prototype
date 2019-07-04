
import React from 'react';
import useNetworkStatus from '@rehooks/network-status';

import { getPosterUrl } from '../../../helpers';

const ConnectionAwareImage = ({ path, alt, ...rest }) => {
  const connection = useNetworkStatus();
  const imgUrl = path && connection ? getPosterUrl(connection.effectiveType, path) : './images/no_image.jpg';
  return (
    <img src={imgUrl} alt={alt} {...rest} />
  );
};

export default ConnectionAwareImage;
