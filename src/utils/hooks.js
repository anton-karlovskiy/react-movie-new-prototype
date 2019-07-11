
// inspired by https://github.com/rehooks/network-status
import { useState, useEffect } from 'react';

const getConnectionEffectiveType = () => {
  let connectionType = null;
  if (navigator.connection && navigator.connection.effectiveType) {
    connectionType = navigator.onLine 
    ? navigator.connection.effectiveType
    : 'offline';
  }
  return connectionType;
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
