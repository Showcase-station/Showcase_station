let prg= document.getElementById("prg");
let project= document.getElementById("project");
function createLab(lab ){
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

prg.onclick = function createProject(){
  
     project.appendChild(createLab('Project Title'));
     project.appendChild(creatInput("text", 'Describe your project, tell us about the Objective, Scope, Results, Challenges...'));
     project.appendChild(createLab("Project Description"));
     project.appendChild(creatInput('text','Describe your project, tell us about the Objective, Scope, Results, Challenges..'));
     project.appendChild(createLab("Link"));
     project.appendChild(creatInput('url','  Add link of your online project if it exist.. example: www.realestate.com'));
 
}

