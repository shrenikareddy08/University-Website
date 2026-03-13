const universityName = "ABC University";
const highestPackage = 2400000;
const placementRate = 95;

function formatCurrency(amount){
    return amount.toLocaleString("en-IN");
}



// PAGE LOAD EVENTS
document.addEventListener("DOMContentLoaded", function(){

    // DARK MODE
    const toggleBtn = document.getElementById("themeToggle");

    const savedTheme = localStorage.getItem("theme");

    if(savedTheme === "dark"){
        document.body.classList.add("dark-mode");
        if(toggleBtn) toggleBtn.textContent = "☀️";
    }

    if(toggleBtn){

        toggleBtn.addEventListener("click", function(){

            document.body.classList.toggle("dark-mode");

            if(document.body.classList.contains("dark-mode")){
                localStorage.setItem("theme","dark");
                toggleBtn.textContent="☀️";
            }
            else{
                localStorage.setItem("theme","light");
                toggleBtn.textContent="🌙";
            }

        });

    }


    // DYNAMIC INPUT HANDLING
    const nameInput = document.getElementById("name");
    const preview = document.getElementById("previewName");

    if(nameInput){

        nameInput.addEventListener("input", function(){

            preview.textContent = "Typing: " + nameInput.value;

        });

    }

});



// FORM VALIDATION
function validateForm(){

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if(name === "" || email === ""){
        alert("All fields are required!");
        return false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(!email.match(emailPattern)){
        alert("Enter a valid email address!");
        return false;
    }

    alert("Form Submitted Successfully!");

    return true;

}
