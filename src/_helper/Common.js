import moment from 'moment';

export function timeFormat(timeString) {
  const duration = moment.duration(timeString, 'hours');
  const minutes = duration.asMinutes();
  return minutes;
}

export function formatPercentage(value) {
  if (value === Math.floor(value)) {
    return Math.floor(value) + '% OFF';
  } else {
    return value.toFixed(2) + '% OFF';
  }
}

export function extractYouTubeVideoId(url) {
  // Define a regular expression to match YouTube video URLs
  const youtubeUrlRegex =
    /(?:\?v=|\/embed\/|\/\d\/|\/vi\/|\/e\/|https:\/\/www.youtube.com\/v\/|https:\/\/www.youtube.com\/embed\/|https:\/\/www.youtube.com\/watch\?v=|https:\/\/www.youtube.com\/watch\?feature=player_embedded&v=|https:\/\/youtu.be\/)([^\?&"'>]+)/;

  // Use the regular expression to extract the video ID
  const match = url?.match(youtubeUrlRegex);

  // If a match is found, return the video ID; otherwise, return null
  return (match && match[1]) || null;
}

// convert time format
export const commonTimeFormat = (sec) => {
  sec = Number(sec);
  if (sec === 0) {
    return '0s';
  }
  const h = Math.floor(sec / 3600);
  const m = Math.floor((sec % 3600) / 60);
  const s = Math.floor((sec % 3600) % 60);

  const hDisplay = h > 0 ? h + 'h ' : '';
  const mDisplay = m > 0 ? m + 'm ' : '';
  const sDisplay = s > 0 ? s + 's' : '';

  return hDisplay + mDisplay + sDisplay;
};

// convert hr inot sec
export const convertTimeToSeconds = (timeString) => {
  // Split the time string into hours, minutes, and seconds
  const [hours, minutes, seconds] = timeString?.split(':').map(Number);

  // Calculate the total time in seconds
  const totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

  return totalTimeInSeconds;
};


//  number format common function
export function numberFormat(value) {
  const floatValue = parseFloat(value);
  if (!isNaN(floatValue)) {
    const roundedValue = parseFloat(floatValue.toFixed(2));
    if (roundedValue % 1 === 0) {
      return roundedValue.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    } else {
      return roundedValue.toLocaleString();
    }
  } else {
    return '0';
  }
}
// for rating common function
export function hasValue(data) {
  return Object.keys(data).length;
}


export function formatNumberCount(num) {
  if (num === undefined || num === null) {
    return '0';
  }

  if (num >= 1000000) {
    const formattedNum = num / 1000000;
    if (formattedNum % 1 === 0) {
      return Math.round(formattedNum) + 'M';
    } else {
      return formattedNum.toFixed(1).replace(/\.0$/, '') + 'M';
    }
  } else if (num >= 1000) {
    const formattedNum = num / 1000;
    if (formattedNum % 1 === 0) {
      return Math.round(formattedNum) + 'K';
    } else {
      return formattedNum.toFixed(1).replace(/\.0$/, '') + 'K';
    }
  }

  return num.toString();
}

// convert common funtion for salary convert
export function convertToLPA(salary) {
  const lpa = salary / 100000; // Convert to Lakhs Per Annum
  if (lpa >= 1) {
    return `${lpa.toFixed(1)} LPA`; // Display as LPA if greater than or equal to 1
  } else {
    return `${lpa.toFixed(1)} K`; // Display as K if less than 1 LPA
  }
};

// get editor text in title tag in without tag
// export function editorText(html) {
//   if (typeof document !== 'undefined') {
//     const tempElement = document.createElement('div');
//     tempElement.innerHTML = html;
//     return tempElement.textContent || tempElement.innerText || '';
//   } else {
//     // Return a default value or handle the case where document is not defined
//     return '';
//   }
// }


// masked phone number
export function maskPhoneNumber(phoneNumber) {
  if (phoneNumber.length < 4) return phoneNumber;
  return '*******' + phoneNumber.slice(-4);
}

export const handleUrlCopy = (event, setTooltipText, setIsCopied, shareUrl) => {
  // Copy the value from input field (shareUrl)
  const tempElement = document.createElement('textarea');
  tempElement.value = shareUrl;  // shareUrl is the value of the input field
  document.body.appendChild(tempElement);
  tempElement.select();
  document.execCommand('copy');
  document.body.removeChild(tempElement);

  // Update tooltip state
  setTooltipText('Copied');
  setIsCopied(true);

  // Reset tooltip after 2 seconds
  setTimeout(() => {
    setTooltipText('Copy Link');
    setIsCopied(false);
  }, 1000);
};