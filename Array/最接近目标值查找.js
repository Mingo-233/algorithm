const arr = [1, 5, 9, 18, 26, 27, 99];

function handle(arr, targe) {
  let min = 9999999;
  let targeIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    console.log("zhix");
    let cha = targe - arr[i];
    if (cha < 0) break;
    if (cha < min) {
      targeIndex = i;
    }
  }

  return arr[targeIndex];
}
console.log(handle(arr, 2));
