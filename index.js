// Your code here
function mapToNegativize(sourceArray) {
  let newA = []
  sourceArray.forEach(e => {
    newA.push(e - (e*2))
  })
  return newA
}

function mapToNoChange(sourceArray) {
  let newA = []
  sourceArray.forEach(e => {
    newA.push(e)
  })
  return newA
}

function mapToDouble(sourceArray) {
  let newA = []
  sourceArray.forEach(e => {
    newA.push(e * 2)
  })
  return newA
}
function mapToSquare(sourceArray) {
  let newA = []
  sourceArray.forEach(e => {
    newA.push(e ** 2)
  })
  return newA
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let total = startingPoint;
  for (let i = 0; i < sourceArray.length; i++ ) {
    total += sourceArray[i]
  }
  return total
}

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray; i++) {
    if (sourceArray[i] === false) {
      return false
    }
  }
  return true
}