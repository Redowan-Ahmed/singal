/* const a = 50
const b = 100 */
/* const c = false
const d = null
const e = "awdawd"
const x = a+b
if (x > 150){
  document.getElementById("demo").innerHTML = x;
}else {
  document.getElementById("demo").innerHTML = "Worng";
};
const day = new Date();
console.log(typeof day)
 */
/* const x = Math.pow(10 ,10)

console.log(x)
const fistname = 'test'
const lastname = 'rwedawd'

let value
value = fistname + ' ' +lastname
console.log(value)
const surname = "sur"
const sur = value + surname
const leth = value.toUpperCase()
console.log(leth) */
/* const name = "Redowan";
const age = 20;
const year = 2020;
const profession = "Developer";

let html;

html = `
  <ul>
      <li>Name: ${name}</li>
      <li>Age: ${age}</li>
      <li>year: ${year}</li>
      <li>Proffession: ${profession}</li>
  </ul>
`;
document.getElementById("data").innerHTML = html; */


/* const color = 'blue';

switch (color) {
  case 'Youllo':
      console.log('color is red')
    break;
    case 'white':
      console.log('color is red')
    break;
    case 'black':
      console.log('color is red')
    break;
    case 'Red':
      console.log('color is red Yes')
    break;
    case 'awd':
      console.log('color is red')
    break;
  default:
    console.log('color is red w')
    break;
} */
/*  let day , month;
switch (new Date().getMonth()) {
  case 0:
    month = 'January'
    break;
  case 1:
      month = 'February'
      break;
  case 2:
    month = 'March'
    break;
  case 3:
      month = 'April'
      break;
  case 4:
    month = 'May'
    break;
  case 5:
      month = 'June'
      break;
  case 6:
    month = 'Juli'
    break;
  case 7:
      month = 'August'
      break;
  case 8:
    month = 'September'
    break;
  case 9:
      month = 'October'
      break;
  case 10:
    month = 'November'
    break;
  case 11:
    month = 'December'
    break;

  default:
    month = 'Not valid'
    break;
}
switch (new Date().getDay()) {
  case 0:
    day = "Sunday" +' ' + new Date().getDate() +' ' + month ;
    break;
  case 1:
    day = "Monday and Date is" +' ' + new Date().getDate() +' ' + month ;
    break;
  case 2:
    day = "Tuesday" +' ' + new Date().getDate() +' ' + month ;
    break;
  case 3:
    day = "Wednesday" +' ' + new Date().getDate() +' ' + month ;
    break;
  case 4:
    day = "Thursday" +' ' + new Date().getDate() +' ' + month ;
    break;
  case 5:
    day = "Friday" +' ' + new Date().getDate() +' ' + month ;
    break;
  case 6:
    day = "Satarday and Date is" +' ' + new Date().getDate() +' ' + month ;
    break;
  default:
    day = 'Not valid'
    break;
}

const date = `Today is ${day}`;
const time = new Date().getUTCMonth();
const result = 'Today is Monday and Date is 22 March';

if (date == result) {
  document.querySelector('h1').textContent =`Today is ${day} And Today is your Birthday 😍`;
} else {
  document.querySelector('h1').textContent =`${date} ${time}`;
}  */
/* let day;
switch (new Date().getDate()){
  case 0:
    day = "Sunday"
    break;
  case 1:
    day = "Monday"
    break;
  case 2:
    day = "Tuesday"
    break;
  case 3:
    day = "Wednesday"
    break;
  case 4:
    day = "Thursday"
    break;
  case 5:
    day = "Friday"
    break;
  case 6:
    day = "Satarday"
    break;
  case 7:
    day = "Sunday"
    break;
  case 8:
    day = "Monday"
    break;
  case 9:
    day = "Tuesday"
    break;
  case 26:
    day = "Wednesday"
    break;
  case 29:
    day = "Thursday"
    break;
  case 30:
    day = "Friday"
    break;
  case 40:
    day = "Satarday"
    break;
}
console.log(`today is ${day}`); */
/* function data() {
  document.querySelector('body#root'= );
}
 */
//date
/* var date = new Date();
console.log(date) */
/*   const n = 28; 
  const m = 30;
  
  if (n%2 == 0) {
    console.log('data')
  } else if (n%2 == false) {
    console.log('data2')
  } else if ( n > m) {
    console.log('data3')
  } else {
    console.log('data4')
  }  */

//const Name = '';
//way 1 
/* const fullname = Name.length == 0 ? 'Full name not Exist' : Name; */
// Way 2
//const fullname = Name || 'Redowan';


//console.log(fullname);

//loop Studys

/* 
for (let index = 0; index <= 100; index++) {
//  console.log(`${index} data`)
  if (index%2 == 0) {
    console.log(`Jorr ${index}`)
  } else {
    console.log(`Bajor ${index}`)
  } 
*/

/* let i;
 mdata = scroll/ 1884
i = 0;
while (i <= 100) {
  console.log('Number:- '+ i);
  i++
}  */
/* 
window.addEventListener("scroll", () => {
  let scroll = scrollY;
  const pdata = document.body.scrollHeight;
  const pdata2 = pdata
  const mdata = (scroll/pdata2)*100;
  document.querySelector('div#progres').style.width = `${mdata}%`;
  console.log(mdata)
});
  */

/* onst check = window.addEventListener('click' , opend)
function opend() {
  window.open("https://www.w3schools.com", "_blank", "width=480, height=700");
} */
/* array.push('awdad') --- insert data first
array.unshift('awdawdawdawww') --- insert data last
array.splice(2 , 1, 10 ,20) --- Delete, insert ,replace
array.pop() Delete data last
array.shift() Delete data first
*/
/* Search Data Array
 let find , ifgot;
const array = ['data','awd wad',2,3 ,12, 50];

find = 'data';
ifgot = false;

  for (let i = 0; i < array.length; i++) {
    if (array[i] == find){
      console.log(`Data found at index ${i} and data name is ${array[i]}`)
      ifgot = true
      break
    }
  }
if (ifgot == false) {
  console.log('Data not found')
} */

/* let arra;

arra = [ [60 ,85,85,89,88],[60 ,85,85,89,88],[60 ,85,85,89,88],[60 ,85,85,89,88] ]

for (let i = 0; i < arra.length; i++) {
  console.log(arra[i]);
  for (let d = 0; d < arra[i].length; d++) {
    console.log(arra[i][d])
  }
} */
/* var array = [1,2,3,4,5,7,9,10]
let data;
data = []
for (let i = 0; i < array.length; i++) {
  data.unshift(array[i])
}
/* console.log(data.join(', '))
console.log(data.fill(true)) */
/* console.log(Array.isArray(array));
var array2 = Array.from(array)
console.log(array2); */ 

/* const mobiledrowar = document.querySelector('div.woodmart-header-links.wd-tools-element.my-account-with-icon > span.woodmart-toolbar-label');
function mobiledrowerlable() {
  mobiledrowar.textContent = ''
}


document.addEventListener('scroll', sticky);

function sticky(){
	if(scrollY > 10){
    console.log(true)
    console.clear();
	 document.querySelector('header.whb-header.whb-full-width.whb-sticky-shadow.whb-scroll-stick.whb-sticky-real.whb-sticky-prepared').classList.add("whb-sticked"); 
}else{
    console.log(false)
    console.clear(); 
	document.querySelector('header.whb-header.whb-full-width.whb-sticky-shadow.whb-scroll-stick.whb-sticky-real.whb-sticky-prepared').style.removeProperty('whb-sticked'); 
} */

/* document.querySelector('div.woodmart-header-links.wd-tools-element.my-account-with-icon a span.woodmart-toolbar-label').textContent = 'Account';
document.addEventListener('scroll', sticky);
function sticky(){
	if(scrollY > 10){
		document.querySelector('header.whb-header.whb-full-width.whb-sticky-shadow.whb-scroll-stick.whb-sticky-real.whb-sticky-prepared').classList.add("whb-sticked");
		console.clear();
		const stopdata =
		"color: #ec0000;" + "font-size: 80px;" + "font-weight: bold;" + "text-shadow: 1px 1px 5px #000;" + "filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);";
    const stopcontent = "color: white;" + "background-color: #b1873b;" + "font-size: 20px;" + "font-weight: bold;" + "text-shadow: 1px 1px 5px #000;" + "filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);";
console.log("%cSTOPP!", stopdata);
console.log(`%cThis is a browser feature intended for developers. If someone told you to copy and paste something here to get a product free of cost or ( hack ) someone's account or Hack Hanoor, it is a scam and you can't do anything from here.
Thanks,
Redowan Ahmed`, stopcontent);
	}else{
		document.querySelector('header.whb-header.whb-full-width.whb-sticky-shadow.whb-scroll-stick.whb-sticky-real.whb-sticky-prepared.whb-sticked').classList.remove("whb-sticked");
		console.clear();
		const stopdata = "color: #ec0000;" + "font-size: 80px;" + "font-weight: bold;" + "text-shadow: 1px 1px 5px #000;" + "filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);";
    const stopcontent = "color: white;" + "background-color: #b1873b;" + "font-size: 20px;" + "font-weight: bold;" + "text-shadow: 1px 1px 5px #000;" + "filter: dropshadow(color=rgb(249, 162, 34), offx=1, offy=1);";
console.log("%cSTOPP!", stopdata);
console.log(`%cThis is a browser feature intended for developers. If someone told you to copy and paste something here to get a product free of cost or ( hack ) someone's account or Hack Hanoor, it is a scam and you can't do anything from here.
Thanks,
Redowan Ahmed`, stopcontent);
	}
} */

/* object.x = 20;
object.v = 30; */
/* console.log(`data ${object.y + object.x}`)
console.log(object['y']) */
/* object['y'] = 200;
object.y = undefined;
delete object.y */

/* console.log(object) */

/* if (obj.y == object.y && obj.z == object.z && obj.c == object.c) {
  console.log(true)
} else {
  console.log(false)
}
if (JSON.stringify(obj) == JSON.stringify(object) ) {
  console.log(true)
} else {
  console.log(false)
}

console.log(obj)
console.log(JSON.stringify(obj))
console.log('c' in object) */
/* let object, obj;
object = {
  y: 70,
  z: 80,
  c: 90,
};
obj = {
  y: 70,
  z: 80,
  c: 90,
};

console.log(Object.keys(object))
console.log(Object.values(object))
console.log(Object.entries(object))
var ojectdata = Object.assign({}, object)
ojectdata.x = "dadad"
ojectdata.v = "dadad"
console.log(Object.entries(ojectdata)) */
/* 
for (var i in object) {
  console.log(i +' = ' + object[i]);

} */
/* 
function functionname() {
  console.log(new Date().getFullYear())
  var a =[1 ,2.3,4]
  for (let i = 0; i < a.length; i++) {
    var d = i;
    var c = a += a[i]
  console.log(c)
    
  }
 
} */
/* functionname() */

/* (function () {
  var old = console.log;
  var logger = document.getElementById('log');
  console.log = function () {
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] == 'object') {
          logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
      } else {
          logger.innerHTML += arguments[i] + '<br />';
      }
    }
  }
})();
var data = [1,2,3,4,5,67,89,]
console.log(data[1]);
 const html = document.getElementsByTagName('html')[0];
const toggleTheme = (theme) => {
    html.dataset.theme = theme;
} */
/* let a,b;
  a = 20;
  b = 30; */

/* test()

for (let i = 0; i < 100; i++) {
  test()
} */

/* function test( a,b ) {
  console.log(a + b)
}
test(70,40) 
function arrayfuntion(fstarg) {
  var data = 0;
  for (let i = 0; i < fstarg.length; i++) {
    data += fstarg[i];
  }
  var dat2 = 'Total = '
  var cons =  dat2 + data
  console.log( cons );
}
const array = [12, 3, 4, 5, 6, 7];
const array2 = [1, 3, 5, 6, 7];
const array3 = [5, 6, 7];

arrayfuntion(array);
arrayfuntion(array2);
arrayfuntion(array3); */

/* function data(a,b,c) {
  var data = 0;
  for (let i = 0; i < arguments.length; i++) {
    data += arguments[i];
  }
  var dat2 = 'Total = '
  var cons =  dat2 + data/2
   console.log( cons );
  return cons;
}
const balb = data(1,2,3,4)
const x = data(30 ,40,5,45.46,5.4,654.,64.,654.6,5.46,54.6,4.65,4.6,5.465,4);

var dara = data(5,4,7,80,48,4,464,654,64,564,654,654,654,654,654)

function openWin() {
  var myWindow = window.open(" ", "myWindow", "width=200, height=100");
  myWindow.document.write("<p>This is 'myWindow'</p>");
  setTimeout(function(){ myWindow.close() }, 5000);
}

console.log(new Date().getHours()) */

/* function first(name, email) {
  function secound() {
   var array = {
    'name': name,
    'email': email,
  } 
  if (name) {
   var a = name.split(' ')[0]
   console.log(a)
  }
  }
  secound()
}
first('redowa awdawddaw', 'email@email.com') */

/*  var a = 'abc';


function data(number) {
  function n() {
    return number%3 == 0
  }
  function d() {
    return number%5 == 0
  }
  function c() {
    if (number == 0) {
      
    }
  }
  if (n() && d()) {
    console.log(number + ' ok')
  } else {
    console.log('not ok')
  }
}

data(15)  */

/* function test(number) {
  return console.log(number*number)
}
test(5555) */
/* var data = 0;
console.log('For Each');
var a = [1,56,4,5,56,45,4,2]
a.forEach(function (a,b,c) {
	data+=a
	console.log(a,b,c)
});
console.log('total = ' + data)

console.log('For');

function cforEach(array, cb) {
	for (let index = 0; index < array.length; index++) {
		cb(index, array[index] , array , arguments)
	}
}

gdata = cforEach(a,function(a,b,c,d) {
	console.log(a,b,c,d)
})

var mapdata = a.map(function(value) {
	return value * value
})

console.log(mapdata) */
/* var a = [1,56,4,5,56,45,4,2]
function MAP(array ,cb) {
	var newarray =[]
	for (let index = 0; index < array.length; index++) {
		var temp = cb(array[index] , index ,array);
		newarray.push(temp)
	}
	return newarray
}

var c = MAP(a, function(value) {
	return value + value
})
console.log(c)
*/

/* var a = [1,3,56,4,5,56,45,4,2]

var data = a.filter(function(value) {
	return value > 4
}) 

console.log(data) */

/* function fillter(array,cb) {
  let newarray = [];
  for (let index = 0; index < array.length; index++) {
    if (cb(array[index] ,index, array )) {
      newarray.push(array[index])
    }
  }
  return newarray;
}


var a = [1,3,56,4,5,56,45,4,2]

let c = fillter(a , function(value,i ,b) {
  return value %2 == 1
})
var sum = a.reduce(function(pre , curr) {
  return pre + curr;
})


console.log(sum)
console.log(c) */
/* var a = [1,3,56,4,5,56,45,4,2]

var fi = a.find(function(value) {
  return value == 2
})

console.log(fi)

 */



/* a.sort(function(a,b) {
  if ( a>b ) {
    return 1;
  } else if( a<b ) {
    return -1 
  }else{
    return 0
  }
})

console.log(a)

c.sort(function(a, b) {
  if (a.age > b.age) {
    return 1
  } else if (a.age < b.age) {
    return -1
  } else{
    return 0
  }
})
console.log(c)
 */

 /* d = a.every(function(value, arra) {
    return value => 0
  })

console.log(d) */


/* let a,c,d;

a = [1,2,40,4,80,6,7,8,9,-4, -5,-9,-1,-2];

c = [
  {
    name: 'Redowan',
    age:20,
  },
  {
    name: 'Marjan',
    age:530,
  },
  {
    name: 'Efty',
    age:40,
  },
  {
    name: 'Ayat',
    age:50,
  },
  {
    name: 'kib',
    age:60,
  }
]
var result = a.some(function(value) {
  return value < 0
})

console.log(result) */
/* 

function greet(massage) {
  function say(name) {
    return massage + ', ' + name + '!'
  }
  return say;
}

let a = greet('Good morning')
let b = a('Redowan Ahmed')
console.log(b) */

/* function base(ba) {
   function power(n) {
    let result = 1;
    for (let index = 0; index < ba; index++) {
      result *= n
    }
    return result;
  };
  return power;
}

let basee = base(3)
console.log(basee(2)) */

function lover(gf,bf,count) {
  const print = count;
  const data = document.querySelector('ol')
  const data2 = document.querySelector('ol.sec')
  for (let i = 0; i < print; i++) {
    const love_you = 'I love You ';
    let lisec = document.createElement("li");
    lisec.innerHTML = love_you + ' ' +'too' + ' ' + bf;
    data2.appendChild(lisec);

    let li1 = document.createElement("li");
    li1.innerHTML = love_you + gf;
    data.appendChild(li1);
  }
}
const getgfname = document.querySelector('input.gfname');
const getbfname = document.querySelector('input.bfname');
const getrangee = document.querySelector('input.getrange');
document.querySelector('a#submit').addEventListener('click',test);
function test() {
  if (getrangee.value) {
    lover(getgfname.value ,getbfname.value , getrangee.value )
  }
}