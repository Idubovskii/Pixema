export function getRandomInt(min: number, max: number): number {
  const numberI = Math.floor(Math.random() * (max - min + 1)) + min;
  return Number.isNaN(numberI) ? 0 : numberI;
}
