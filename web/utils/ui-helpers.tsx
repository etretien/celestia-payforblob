export function handleHover(
  e: React.MouseEvent<HTMLDivElement>,
  card: React.RefObject<HTMLDivElement>
) {
  const THRESHOLD = 4;

  if (card.current) {
    const { clientX, clientY, currentTarget } = e;
    const { clientWidth, clientHeight, offsetLeft, offsetTop } = currentTarget;

    const horizontal = (clientX - offsetLeft) / clientWidth;
    const vertical = (clientY - offsetTop) / clientHeight;
    const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
    const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);

    card.current.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1) `;
  }
}

export function resetStyles(
  e: React.MouseEvent<HTMLDivElement>,
  card: React.RefObject<HTMLDivElement>
) {
  if (card.current) {
    card.current.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
  }
}
