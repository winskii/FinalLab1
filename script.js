
const showButton = document.getElementById("showButton");

const outputCard = document.getElementById("outputCard");

showButton.addEventListener("click", function () {

    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const birthday = document.getElementById("birthday").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const school = document.getElementById("school").value;
    const course = document.getElementById("course").value;
    const favoriteFood = document.getElementById("favoriteFood").value;
    const hobby = document.getElementById("hobby").value;

    const favoriteColor = document.querySelector("#favoriteColor").value;

    const selectedGender = document.querySelector(
        'input[name="gender"]:checked'
    );

    let gender = "";

    if (selectedGender) {
        gender = selectedGender.value;
    } else {
        gender = "Not selected";
    }

    document.getElementById("outputName").textContent = fullName;
    document.getElementById("outputEmail").textContent = email;
    document.getElementById("outputAge").textContent = age;
    document.getElementById("outputBirthday").textContent = birthday;
    document.getElementById("outputPhone").textContent = phone;
    document.getElementById("outputAddress").textContent = address;
    document.getElementById("outputSchool").textContent = school;
    document.getElementById("outputCourse").textContent = course;
    document.getElementById("outputFood").textContent = favoriteFood;
    document.getElementById("outputHobby").textContent = hobby;
    document.getElementById("outputColor").textContent = favoriteColor;
    document.getElementById("outputGender").textContent = gender;

    outputCard.style.display = "block";

    const infoItems = document.querySelectorAll(".info-item");

    infoItems.forEach(function (item) {
        item.style.backgroundColor = "#f8fafc";
    });

    const formGroups = document.getElementsByClassName("form-group");

    for (let i = 0; i < formGroups.length; i++) {
        formGroups[i].style.marginBottom = "5px";
    }

    const inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].setAttribute("autocomplete", "off");
    }

});