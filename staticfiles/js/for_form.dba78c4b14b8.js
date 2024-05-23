document.getElementById("add-education-btn").addEventListener("click", function () {
    addEducationSection();
});
document.getElementById("add-certificate-btn").addEventListener("click", function () {
    addCertificate();
});
document.getElementById("add-project-btn").addEventListener("click", function () {
    addProject();
});

function addEducationSection() {
    const educationForm = document.querySelector(".education-form");

    const educationSection = document.createElement("div");
    educationSection.classList.add("education-section");

    educationSection.innerHTML = `
        <div >
        <label style="display:block">University/College</label>
            <input type="text" >
        </div>
        <div class="input-group sec">
        <div class="name1">

        <label>First Year</label>
        <input type="number">
        </div>
        <div class="name1">
        <label>End Year</label>
        <input type="number">
        </div>
        </div>
        <div class="last">
            <button class="cancel-btn pl">Cancel</button>
            <button class="save-btn pl">Save</button>
        </div>
    `;

    educationForm.appendChild(educationSection);

    // Add event listeners for cancel and save buttons
    const cancelBtn = educationSection.querySelector(".cancel-btn");
    cancelBtn.addEventListener("click", function () {
        educationForm.removeChild(educationSection);
    });

    const saveBtn = educationSection.querySelector(".save-btn");
    saveBtn.addEventListener("click", function () {
        // Handle saving education details here
        console.log("Education details saved.");

        // Disable input fields after saving
        const inputFields = educationSection.querySelectorAll("input");
        inputFields.forEach(function (inputField) {
            inputField.disabled = true;
        });

        // Disable the save button
        saveBtn.disabled = true;
    });
}

function addCertificate() {
    const cerForm = document.querySelector(".certificate-form");
    const cerSection = document.createElement("div");
    cerSection.classList.add("certificate-section");
    cerSection.innerHTML = `
    
	<div class="container">
    <input type="file" id="file1" accept="image/*" hidden>
    <div class="img-area1" >
        <i class='bx bxs-cloud-upload icon'></i>
        <label>Upload Certificate</label>
        <p>Click or drag your images here to upload JPG, GIF, or PNG, PDF Max. of 10MB</p>
    </div>
    <button class="select-image1" type='button'>Select Certificate</button>
</div>
    <textarea placeholder = "Tell us about your Certificate like the skills that you learned from it.."></textarea>
    <div class="last">
    <button class="cancel-btn2 pl">Cancel</button>
    <button class="save-btn2 pl">Save</button>
</div>
    `
    cerForm.appendChild(cerSection);
    const cancelBtn = cerSection.querySelector(".cancel-btn2");
    cancelBtn.addEventListener("click", function () {
        cerForm.removeChild(cerSection);
    });

    const saveBtn = cerSection.querySelector(".save-btn2");
    saveBtn.addEventListener("click", function () {
        // Handle saving education details here
        console.log("Education details saved.");

        // Disable input fields after saving
        const inputFields = cerSection.querySelectorAll("input");
        inputFields.forEach(function (inputField) {
            inputField.disabled = true;
        });

        // Disable the save button
        saveBtn.disabled = true;
    });
}

function addProject() {
    const projectForm = document.querySelector(".project-form");

    const projectSection = document.createElement("div");
    projectSection.classList.add("project-section");

    projectSection.innerHTML = `
        <div>
            <label>Project Title</label>
            <input type="text" placeholder="Project Title">
        </div>
        <div>
            <label>Project Description</label>
            <textarea placeholder="Describe your project, tell us about the Objective, Scope, Results, Challenges..."></textarea>
        </div>
        <div>
            <label>Link</label>
            <input type="url" placeholder="Add link of your online project if it exist.. example: www.realestate.com">
        </div>
        <div class="last">
            <button class="cancel-btn pl">Cancel</button>
            <button class="save-btn pl">Save</button>
        </div>
    `;

    projectForm.appendChild(projectSection);

    // Add event listeners for cancel and save buttons
    const cancelBtn = projectSection.querySelector(".cancel-btn");
    cancelBtn.addEventListener("click", function () {
        projectForm.removeChild(projectSection);
    });

    const saveBtn = projectSection.querySelector(".save-btn");
    saveBtn.addEventListener("click", function () {
        // Handle saving project details here
        console.log("Project details saved.");

        // Disable input fields after saving
        const inputFields = projectSection.querySelectorAll("input");
        inputFields.forEach(function (inputField) {
            inputField.disabled = true;
        });

        // Disable the save button
        saveBtn.disabled = true;
    });
}


function createLab(lab) {
    let label = document.createElement("label");
    label.innerHTML = lab;
    return label;
}

function creatInput(inpType, place) {
    let input = document.createElement("input");
    input.type = inpType;
    input.placeholder = place;
    return input;
}
