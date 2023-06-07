const circle = document.querySelector('.progress')

const progressAnimation = () => {
  const percentageProgress = Math.floor(85);

  const radius = circle.getAttribute('r');
  const circleLength = 2 * Math.PI * radius;
  circle.setAttribute('stroke-dasharray', circleLength);
  circle.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
}

progressAnimation();
