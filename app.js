
 function lover(gf,bf,count) {
  const print = count;
  const data = document.querySelector('ol')
  const data2 = document.querySelector('ol.sec')
  for (let i = 0; i < print; i++) {
    const love_you = 'I love You ';
    let lisec = document.createElement("li");
    lisec.className ='list-group-item';
    lisec.innerHTML = love_you + ' ' +'too' + ' ' + bf;
    data2.appendChild(lisec);

    let li1 = document.createElement("li");
    li1.className ='list-group-item';
    li1.innerHTML = love_you + gf;
    data.appendChild(li1);
  }
}
const getgfname = document.querySelector('input.gfname');
const getbfname = document.querySelector('input.bfname');
const getrangee = document.querySelector('input.getrange');
document.querySelector('a#submit').addEventListener('click',test);
function test() {
  if (getgfname.value && getbfname.value && getrangee.value && getrangee.value > 0) {
    lover(getgfname.value ,getbfname.value ,getrangee.value );
    let reset = document.querySelector('a#submit');
    reset.remove();
    let reset2 = document.querySelector('a#reset');
    reset2.style.display = "block";
  }
}
