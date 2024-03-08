function quickSortCarDesc(cars) {
  let pivotCar = cars[0];
  let leftCars = [];
  let rightCars = [];

  if (cars.length <= 1) {
    // Base case (sudah terurut)
    return cars;
  } else {
    // Partisi array jadi dua berdasrkan pivot
    for (const car of cars.slice(1)) {
      if (car.year > pivotCar.year) {
        leftCars.push(car);
      } else {
        rightCars.push(car);
      }
    }

    return [
      ...quickSortCarDesc(leftCars),
      pivotCar,
      ...quickSortCarDesc(rightCars),
    ];
  }
}

function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  let result = [...cars];

  // Tulis code-mu disini (menggunakan quicksort)
  result = quickSortCarDesc(result);

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
