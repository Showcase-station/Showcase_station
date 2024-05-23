document.getElementById("add-education-btn").addEventListener("click", function() {
    addEducationSection();
});
let i = 1;
document.getElementById("add-certificate-btn").addEventListener("click", function() {
    addCertificate();
    i++;
});
document.getElementById("prg").addEventListener("click", function() {
    createProject();
    i++;
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
    cancelBtn.addEventListener("click", function() {
        educationForm.removeChild(educationSection);
    });

    const saveBtn = educationSection.querySelector(".save-btn");
    saveBtn.addEventListener("click", function() {
        // Handle saving education details here
        console.log("Education details saved.");
        
        // Disable input fields after saving
        const inputFields = educationSection.querySelectorAll("input");
        inputFields.forEach(function(inputField) {
            inputField.disabled = true;
        });

        // Disable the save button
        saveBtn.disabled = true;
    });
}
