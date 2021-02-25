export const getTimeRemaining = (timestamp) => {
  const total = timestamp - (Date.parse(new Date()) / 1000);
  const seconds = Math.floor( (total) % 60 );
  const minutes = Math.floor( (total/60) % 60 );
  const hours = Math.floor( (total/(60*60)) % 24 );
  const days = Math.floor( total/(60*60*24) );

  return {
    days,
    hours,
    minutes,
    seconds
  }
}

export const timestampToDateString = (timestamp) => {
  const date = new Date(timestamp * 1000);
  
  const dateValues = {
    year: date.getFullYear(),
    month: date.getMonth()+1,
    day: date.getDate(),
    hours: date.getHours(),
    minutes: `${date.getMinutes()}`.padStart(2, '0')
  };

  return `${dateValues.day}.${dateValues.month}.${dateValues.year} ${dateValues.hours}:${dateValues.minutes}`;
}