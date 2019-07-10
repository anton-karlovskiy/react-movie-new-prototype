
import React from 'react';

import useEffectiveConnectionType from '../../utils/hooks';
import { IMAGE_BASE_URL, BACKDROP_SIZES } from '../../config';

const ConnectionAwareBgDiv = ({ children, backdropPath, ...rest }) => {
  const connectionEffectiveType = useEffectiveConnectionType();

  let backdropSize;
  switch(connectionEffectiveType) {
    // case 'offline':
    //   break;
    case 'slow-2g':
      backdropSize = 'w300';
      break;
    case '2g':
      backdropSize = 'w300';
      break;
    case '3g':
      backdropSize = 'w780';
      break;
    case '4g':
      backdropSize = 'w1280';
      break;
    default:
      backdropSize = 'w1280';
      break;
  }

  if (!BACKDROP_SIZES.has(backdropSize)) {
    throw new Error('the backdrop size is not supported');
  }
  
  const bgUrl = `${IMAGE_BASE_URL}${backdropSize}${backdropPath}`;

  return (
    <div
      {...rest}
      style={{
        background: bgUrl
          ? `linear-gradient(to bottom, rgba(0,0,0,0) 39%, rgba(0,0,0,0) 41%, rgba(0,0,0,0.65) 100%), url('${bgUrl}'), #1c1c1c`
          : "#000"
      }}>
      {children}
    </div>
  );
};

export default ConnectionAwareBgDiv;
