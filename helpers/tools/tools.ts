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
  return router.route.slice(1).split("/")[0];
}

export function getSubTab(router): string {
  return router.route.slice(1).split("/")[1];
}

export function changePage(router, path, delay, setPageChangeRequested) {
  console.log(`11111  changePage:  ${path}`);
  setPageChangeRequested(Math.random() * 5);
  setTimeout(() => {
    router.push(path);
  }, delay);
}

/////////////////////////////////////////

export const cacheImage = (path) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(path);
    img.onerror = () => reject();

    img.src = path;
  });

export const cacheAndGetImage = (path) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject();

    img.src = path;
  });
