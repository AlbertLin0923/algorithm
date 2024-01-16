//输入：[1, 2, 4, 3, 5, 9]
// 输出：[2, 5]

const gt = (arr) => {
  const result = [];
  const tmpArr = new Array(arr.length);

  let min = arr[arr.length - 1];
  for (let i = arr.length - 2; i > 0; i--) {
    tmpArr[i] = min;
    if (arr[i] < min) {
      min = arr[i];
    }
    tmpArr[i - 1] = min;
  }

  let max = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > max) {
      max = arr[i];
      if (arr[i] < tmpArr[i]) {
        result.push(arr[i]);
      }
    }
  }
  return result;
};

console.log(gt([1, 2, 4, 3, 5, 9]));

const gm = (arr) => {
  const result = [];
  const len = arr.length;
  const rightMin = [];
  let min = arr[len - 1];
  for (let i = len - 2; i > 0; i--) {
    rightMin[i] = min;
    if (arr[i] < min) {
      min = arr[i];
    }
    rightMin[i - 1] = min;
  }

  let max = arr[0];
  for (let i = 0; i < len - 1; i++) {
    if (arr[i] > max) {
      max = arr[i];
      if (arr[i] < rightMin[i]) {
        result.push(arr[i]);
      }
    }
  }

  return result;
};

console.log(gm([1, 2, 4, 3, 5, 9]));

const gh = (arr) => {
  const result = [];
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      result.push(arr[i]);
    }
  }
  return result
};

console.log(gh([1, 2, 4, 3, 5, 9]));


// 1 3 4 6 8 5 2 7