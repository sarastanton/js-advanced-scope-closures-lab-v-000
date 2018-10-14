function produceDrivingRange(blockRange) {
  return function(start, end) {
    let distance = Number.parseInt(end) - Number.parseInt(start)
    if (distance <= blockRange) {
      return `within range by ${blockRange - distance}`;
    }
    else {
      return `${distance - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return fare * tip;
  }

}

function createDriver() {
  let DriverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}
