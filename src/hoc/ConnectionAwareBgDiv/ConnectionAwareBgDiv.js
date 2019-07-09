
import React from 'react';

import useEffectiveConnectionType from '../../utils/hooks';
import { getBackdropUrl } from '../../utils/helpers';

const ConnectionAwareBgDiv = ({ children, backdropPath, ...rest }) => {
  const connectionEffectiveType = useEffectiveConnectionType();
  const bgUrl = getBackdropUrl(connectionEffectiveType, backdropPath);
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
