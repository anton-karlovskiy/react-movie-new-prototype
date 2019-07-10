
import React from 'react';

import useEffectiveConnectionType from '../../../utils/hooks';
import { IMAGE_BASE_URL, POSTER_SIZES } from '../../../config';

const ConnectionAwareImage = ({ path, alt, ...rest }) => {
  const connectionEffectiveType = useEffectiveConnectionType();

  let posterSize;

  switch(connectionEffectiveType) {
    // case 'offline':
    //   break;
    case 'slow-2g':
      posterSize = 'w92';
      break;
    case '2g':
      posterSize = 'w154';
      break;
    case '3g':
      posterSize = 'w342';
      break;
    case '4g':
      posterSize = 'w500';
      break;
    default:
      posterSize = 'w500';
      break;
  }

  if (!POSTER_SIZES.has(posterSize)) {
    throw new Error('the backdrop size is not supported');
  }

  const imgUrl = path && `${IMAGE_BASE_URL}${posterSize}${path}`;

  return (
    <img src={imgUrl} alt={alt} {...rest} />
  );
};

export default ConnectionAwareImage;
