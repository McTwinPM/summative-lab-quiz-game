export function oneMinuteTimer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('timeout');
    }, 60000); 
  });
}
