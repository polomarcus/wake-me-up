export const calculateRemainingTime = (timer, currentTime) => {
  const timeRemaining = new Date(timer.getTime() - currentTime.getTime())

  const output = {
    hours : timeRemaining.getUTCHours(),
    minutes : timeRemaining.getMinutes()
  }

  return output
}


export const isItTime = (timer, currentTime) => {
  return timer.getUTCHours() === currentTime.getUTCHours() &&
  timer.getMinutes() === currentTime.getMinutes()
}
