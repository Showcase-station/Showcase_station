let btn = document.getElementById("btn");
console.log(btn)
let form = document.getElementById("form");
let i = 1;
btn.onclick = ()=>{
  let cont= document.createElement("div");
  cont.innerHTML = `
  <div id="yourBtn${i}" onclick="getFile(${i})" style = "width:100%">
  Upload Certificate
</div>

<div style='height: 0px;width: 0%; overflow:hidden;'>
  <input id="upfile${i}" type="file" value="upload" onchange="sub(this,${i})" />
  </div>
  `;
  form.appendChild(cont);
  i++;
}


function getFile(i) {
  document.getElementById(`upfile${i}`).click();
}

function sub(obj,i) {
  var file = obj.value;
  var fileName = file.split("\\");
  document.getElementById(`yourBtn${i}`).innerHTML = fileName[fileName.length - 1];
  document.myForm.submit();

}