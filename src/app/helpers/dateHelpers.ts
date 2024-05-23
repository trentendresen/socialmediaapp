export const formatCreatedAtDate = (dateString: string): string => {
  const date = new Date(dateString);

  // Array of month names
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Get the month, day, hour, and minute
  const month = months[date.getMonth()];
  const day = date.getDate();
  let hour = date.getHours();
  const minute = date.getMinutes();
  const ampm = hour >= 12 ? 'pm' : 'am';
  hour = hour % 12;
  hour = hour ? hour : 12; // Handle midnight (0) as 12

  // Construct the formatted string
  const formattedDate = `${month} ${day} at ${hour}:${minute
    .toString()
    .padStart(2, '0')} ${ampm}`;

  return formattedDate;
};

export const getHowLongAgoTime = (dateString: string): string => {
  const date = new Date(dateString);
  const now = new Date();
  const timeDifferenceInSeconds = Math.floor(
    (now.getTime() - date.getTime()) / 1000
  );

  if (timeDifferenceInSeconds < 60) {
    return 'a few seconds ago';
  } else if (timeDifferenceInSeconds < 3600) {
    const minutes = Math.floor(timeDifferenceInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else {
    const hours = Math.floor(timeDifferenceInSeconds / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }
};
