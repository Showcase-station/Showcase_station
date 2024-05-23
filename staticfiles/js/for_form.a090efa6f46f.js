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
    const educationSections = educationForm.querySelectorAll(".education-section");

    // Clone the last education section
    const newEducationSection = educationSections[educationSections.length - 1].cloneNode(true);

    // Clear the input fields in the new education section
    const inputFields = newEducationSection.querySelectorAll("input");
    inputFields.forEach(function (inputField) {
        inputField.value = "";
    });

    // Append the new education section to the education form
    educationForm.appendChild(newEducationSection);
}

function addCertificate() {
    const cerForm = document.querySelector(".certificate-form");
    const cerSections = cerForm.querySelectorAll(".certificate-section");

    // Clone the last certificate section
    const newCerSection = cerSections[cerSections.length - 1].cloneNode(true);

    // Clear the input fields in the new certificate section
    const inputFields = newCerSection.querySelectorAll("input");
    inputFields.forEach(function (inputField) {
        inputField.value = "";
    });

    // Append the new certificate section to the certificate form
    cerForm.appendChild(newCerSection);
}

function addProject() {
    const projectForm = document.querySelector(".project-form");
    const projectSections = projectForm.querySelectorAll(".project-section");

    // Clone the last project section
    const newProjectSection = projectSections[projectSections.length - 1].cloneNode(true);

    // Clear the input fields in the new project section
    const inputFields = newProjectSection.querySelectorAll("input");
    inputFields.forEach(function (inputField) {
        inputField.value = "";
    });

    // Append the new project section to the project form
    projectForm.appendChild(newProjectSection);
}

