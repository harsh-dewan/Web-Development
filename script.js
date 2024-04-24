const checkBoxList = document.querySelectorAll(".custom-checkbox");
const allInputFields = document.querySelectorAll(".goal-input");
const errorLabel = document.querySelector(".error-label");
const  progressValue = document.querySelector(".progress-value");
var count = 0;

checkBoxList.forEach(
    (checkbox) =>
    {
        checkbox.addEventListener('click',(e)=>{

            const allFieldsFilled = [...allInputFields].every(
                function(input) {
                    return input.value;
                }
            );
            if(allFieldsFilled) {
            checkbox.parentElement.classList.toggle('completed');
            count += 1;
            var percent = ((count/3)*100)+"%";
            progressValue.style.width=percent;
            // errorLabel.parentElement.classList.remove('show-error');
            }
            else {
                errorLabel.parentElement.classList.add('show-error');
            }
        })
    }
)

allInputFields.forEach(
    (input) => {
        input.addEventListener('focus',() => {
            errorLabel.parentElement.classList.remove('show-error');
        })
    }
)
