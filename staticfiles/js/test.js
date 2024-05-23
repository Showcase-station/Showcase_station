
function addCertificate(){
     const cerForm = document.querySelector(".certificate-form");
     const cerSection = document.createElement("div");
     cerSection.classList.add("certificate-section");
  
     cerSection.innerHTML=`
      <div class="container">
      <div id="yourBtn${i}" onclick="getFile(${i})" onclick="getFile(${i})" style = "width:100%">
      Upload Certificate
    </div>
    
<div style='height: 0px;width: 0px; overflow:hidden;'>
<input id="upfile${i}" type="file" value="upload" onchange="sub(this,${i})" />
</div>
  
 </div>
     <textarea placeholder = "Tell us about your Certificate like the skills that you learned from it.."></textarea>
     <div class="last">
     <button class="cancel-btn2 pl">Cancel</button>
     <button class="save-btn2 pl">Save</button>
 </div>
     `
     cerForm.appendChild(cerSection);
     const cancelBtn = cerSection.querySelector(".cancel-btn2");
     cancelBtn.addEventListener("click", function() {
         cerForm.removeChild(cerSection);
     });
 
     const saveBtn = cerSection.querySelector(".save-btn2");
     saveBtn.addEventListener("click", function() {
         // Handle saving education details here
         console.log("Education details saved.");
         
         // Disable input fields after saving
         const inputFields = cerSection.querySelectorAll("input");
         inputFields.forEach(function(inputField) {
             inputField.disabled = true;
         });
 
         // Disable the save button
         saveBtn.disabled = true;
     });
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


///-----------------------------------------------------------------------------------------------------

let prg= document.getElementById("prg");
let project= document.getElementById("project");
function createLab(lab){
     let label = document.createElement("label");
     label.innerHTML= lab;
     return label ;
}
function creatInput(inpType , place) {
     let input = document.createElement("input"); 
     input.type = inpType;
     input.placeholder = place;
     return input;
}

 function createProject(){
    let obj = document.createElement("div");
     obj.appendChild(createLab('Project Title'));
     obj.appendChild(creatInput("text", 'Describe your project, tell us about the Objective, Scope, Results, Challenges...'));
     obj.appendChild(createLab("Project Description"));
     obj.appendChild(creatInput('text','Describe your project, tell us about the Objective, Scope, Results, Challenges..'));
     obj.appendChild(createLab("Link"));
     obj.appendChild(creatInput('url','  Add link of your online project if it exist.. example: www.realestate.com'));
     let templ = document.createElement("div");
     templ.innerHTML = `
     <div class="container">
     <div id="yourBtn${i}" onclick="getFile(${i})" onclick="getFile(${i})" style = "width:100%">
     Upload Project
   </div>
   
<div style='height: 0px;width: 0px; overflow:hidden;'>
<input id="upfile${i}" type="file" value="upload" onchange="sub(this,${i})" />
</div>
     `;
     obj.appendChild(templ);
     let last = document.createElement("div");
     last.className = "last";
     last.innerHTML=`
     <button class="cancel-btn3 pl" type="button">Cancel</button>
     <button class="save-btn3 pl" type="button">Save</button>
     `;
     obj.appendChild(last);
     project.appendChild(obj)
     i++;

// Add event listeners for cancel and save buttons
const cancelBtn = obj.querySelector(".cancel-btn3");
cancelBtn.addEventListener("click", function() {
    project.removeChild(obj);
});

const saveBtn = obj.querySelector(".save-btn3");
saveBtn.addEventListener("click", function() {
    // Handle saving education details here
    console.log("Education details saved.");
    
    // Disable input fields after saving
    const inputFields = obj.querySelectorAll("input");
    inputFields.forEach(function(inputField) {
        inputField.disabled = true;
    });

    // Disable the save button
    saveBtn.disabled = true;
});
 }