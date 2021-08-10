// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, aKey, val) {
  const newObj = Object.assign({}, driver);
  newObj[aKey] = val;
  // return Object.assign({}, driver, { [aKey]: val });
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, aKey, val) {
  driver[aKey] = val;
  return driver;
}

function deleteFromDriverByKey(driverObj, aKey) {
  const newObj = Object.assign({}, driverObj);
  delete newObj[`${aKey}`];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, aKey, val) {
  delete driver[`${aKey}`];
  return driver;
}
