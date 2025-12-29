/*
function prepareFood(next) {
  setTimeout(() => {
    console.log("Food is prepared");
    next();
  }, 3000);
}

function eatFood(next) {
  setTimeout(() => {
    console.log("Food is Eaten");
    next();
  }, 2000);
}

function goTOSchool() {
  setTimeout(() => {
    console.log("Went to School");
  }, 1500);
}

prepareFood(() => {
  eatFood(() => {
    goTOSchool();
  });
});
*/

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
  let isSchoolOpen = true;
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

prepareFood()
  .then((value) => {
    console.log(value);
    return eatFood().then((value) => {
      console.log(value);
      return goTOSchool().then((value) => {
        console.log(value);
      });
    });
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("all Promise solved");
  });
