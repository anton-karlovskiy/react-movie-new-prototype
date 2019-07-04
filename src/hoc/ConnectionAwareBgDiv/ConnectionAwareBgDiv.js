
import React from 'react';
import useNetworkStatus from '@rehooks/network-status';

import { getBackdropUrl } from '../../helpers';

const ConnectionAwareBgDiv = ({ children, backdropPath, ...rest }) => {
  const connection = useNetworkStatus();
  const bgUrl = getBackdropUrl(connection.effectiveType, backdropPath);
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
