
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
