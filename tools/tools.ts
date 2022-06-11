// export const shuffleArray = (array: []): [] => array.sort(() => Math.random() - 0.5);
export function shuffleArray(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

export function getActiveTab(router): string {
  return router.asPath.slice(1).split("/")[0];
}
