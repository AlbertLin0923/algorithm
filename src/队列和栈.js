const isValid = (str) => {
  const arr = str.split("");
  const len = arr.length;

  if (len % 2) {
    return false;
  }

  const map = new Map([
    [")", "("],
    ["}", "{"],
    ["]", "["],
  ]);
  const stack = [];

  for (let r of arr) {
    if (map.has(r)) {
      if (map.get(r) !== stack[stack.length - 1]) {
        return false;
      } else {
        stack.pop();
      }
    } else {
      stack.push(r);
    }
  }

  return !stack.length
};

console.log(isValid("()[]{}}"))