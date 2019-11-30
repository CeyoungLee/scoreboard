//객체해체할당 동일한 키로만 할당됩니다.
/*const obj = {a: 1, b: 2, c: 3};
const a = obj.a;
const b = obj.b;*/

//const {a,b} = {a:1, b:2};

const [ b,a,...c] = [1,2,3,4,5];
console.log (a,b,c);

const {x,y,z}={x:1, y:2, z:3, w:4, u:5};
console.log(x,y,z);
