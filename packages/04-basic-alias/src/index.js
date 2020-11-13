import demo from '@/demo';

const arr1 = [1,2,3];
const arr2 = [4,5,6];
console.log([...arr1, ...arr2]);

async function initDemo () {
  let data = demo();
  console.log(data);
}

initDemo();