
import { IMAGE_BASE_URL, BACKDROP_SIZES, POSTER_SIZES } from './config';

// Convert time to hours and minutes
export const calcTime = (time) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};

// Convert a number to $ format
export const convertMoney = (money) => {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

export const getBackdropUrl = (connectionType, backdropPath) => {
  let backdropSize;
  
  switch(connectionType) {
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
      backdropSize = 'w300';
      break;
  }

  if (!BACKDROP_SIZES.has(backdropSize)) {
    throw new Error('the backdrop size is not supported');
  }
  
  const url = `${IMAGE_BASE_URL}${backdropSize}${backdropPath}`;
  return url;
};

export const getPosterUrl = (connectionType, posterPath) => {
  let posterSize;

  switch(connectionType) {
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
      posterSize = 'w92';
      break;
  }

  if (!POSTER_SIZES.has(posterSize)) {
    throw new Error('the backdrop size is not supported');
  }

  const url = `${IMAGE_BASE_URL}${posterSize}${posterPath}`;
  return url;
};
