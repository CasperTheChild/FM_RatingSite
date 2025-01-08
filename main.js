let ThanksGivingPage = document.querySelector("#ThanksGivingPage");
let InclusiveRating = document.querySelector("#InclusiveRating");

let SubmitButton = document.querySelector("#SubmitButton");
let ScoreButtons = document.querySelectorAll(".ScoreNumber");
let ScoreButtonIndex = -1;

let ChoosedRating = document.querySelector("#ChoosedRating");

for (let i = 0; i < ScoreButtons.length; i++) {
    ScoreButtons[i].addEventListener("click", function () {
        if (ScoreButtonIndex != -1) {
            ScoreButtons[ScoreButtonIndex].classList.remove("active");
            ScoreButtons[ScoreButtonIndex].setAttribute("aria-pressed", false);
        }

        /*      I don't know if I need it. It allows users to deselect a choice.
        if (ScoreButtonIndex === i) {
            ScoreButtons[ScoreButtonIndex].classList.remove("active");
            ScoreButtonIndex = -1;
            return;
        }
        */

        ScoreButtons[i].classList.add("active");
        ScoreButtons[i].setAttribute("aria-pressed", true);
        ScoreButtonIndex = i;
    })
}

SubmitButton.addEventListener("click", function () {
    if (ScoreButtonIndex === -1) {
        alert("A score needs to be selected");
        return;
    }

    ThanksGivingPage.classList.remove("DisplayNone");
    InclusiveRating.classList.add("DisplayNone");

    ChoosedRating.innerHTML = ScoreButtonIndex + 1;
})