export default function timeAfterCreated(postDate: Date) {
  const now = new Date();
  const formatedPostDate = new Date(postDate);

  const differenceBetweenDates = Math.abs(
    now.getTime() - formatedPostDate.getTime()
  );

  // (miliseconds, seconds, minutes, hours)
  const days = Math.ceil(differenceBetweenDates / (1000 * 60 * 60 * 24));
  const hours = Math.ceil(differenceBetweenDates / (1000 * 60 * 60));
  const minutes = Math.ceil(differenceBetweenDates / (1000 * 60));

  if (minutes < 59) {
    if (minutes === 1) {
      return "Less than a minute";
    }
    return `${minutes} minutes ago`;
  }

  if (hours < 23) {
    return `${hours} hours ago`;
  }

  return `${days} days ago`;
}
