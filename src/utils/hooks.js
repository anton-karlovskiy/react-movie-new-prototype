
// inspired by https://github.com/rehooks/network-status
import { useState, useEffect } from 'react';

const getConnectionEffectiveType = () => {
  return navigator.connection ? navigator.connection.effectiveType : null;
};

const useConnectionEffectiveType = () => {
  let [connectionEffectiveType, setConnectionEffectiveType] = useState(getConnectionEffectiveType());

  const updateCETStatus = () => {
    setConnectionEffectiveType(getConnectionEffectiveType());
  };
  useEffect(() => {
    navigator.connection && navigator.connection.addEventListener('change', updateCETStatus);
    return () => {
      navigator.connection && navigator.connection.removeEventListener('change', updateCETStatus);
    };
  });

  return connectionEffectiveType;
};

export default useConnectionEffectiveType;
