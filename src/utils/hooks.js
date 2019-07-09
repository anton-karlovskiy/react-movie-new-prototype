
// inspired by https://github.com/rehooks/network-status
import { useState, useEffect } from 'react';

const getEffectiveConnectionType = () => {
  return navigator.connection ? navigator.connection.effectiveType : null;
};

const useEffectiveConnectionType = () => {
  let [connectionEffectiveType, setConnectionEffectiveType] = useState(getEffectiveConnectionType());

  const updateECTStatus = () => {
    setConnectionEffectiveType(getEffectiveConnectionType());
  };
  useEffect(() => {
    navigator.connection && navigator.connection.addEventListener('change', updateECTStatus);
    return () => {
      navigator.connection && navigator.connection.removeEventListener('change', updateECTStatus);
    };
  });

  return connectionEffectiveType;
};

export default useEffectiveConnectionType;
