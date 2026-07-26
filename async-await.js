function prepareFood() {
  let isFoodReady = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFoodReady) {
        resolve("Food is prepared");
      } else {
        reject("Failed to Prepare Food");
      }
    }, 3000);
  });
}

function eatFood() {
  let isFoodEaten = true;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isFoodEaten) {
        resolve("Food is Eaten");
      } else {
        reject("Didn't eat Food");
      }
    }, 2000);
  });
}

function goTOSchool() {
  let isSchoolOpen = false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSchoolOpen) {
        resolve("Went to School");
      } else {
        reject("School is Not Open");
      }
    }, 1500);
  });
}

async function asyncAwait() {
  try {
    const food = await prepareFood();
    console.log(food);

    const eat = await eatFood();
    console.log(eat);

    const School = await goTOSchool();
    console.log(School);
  } catch (error) {
    console.error(error);
  }
}
asyncAwait();
