export function timer(onTick) {
  let secondsLeft = 60;
  if (onTick) onTick(secondsLeft)
  const interval = setInterval(() => {
    secondsLeft--;
    if (onTick) onTick(secondsLeft);
    if (secondsLeft <= 0) {
      clearInterval(interval);
    }
  }, 1000);

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('timeout');
    }, 60000); 
  });
}
