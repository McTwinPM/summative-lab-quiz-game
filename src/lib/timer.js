export function oneMinuteTimer() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('timeout');
    }, 60000); // 60,000 ms = 1 minute
  });
}
