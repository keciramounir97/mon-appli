HTML structure: Moved <ul class="myList" id="notesList"></ul> outside of <div class="input-group"> so notes render below the input bar rather than inline next to the button.

Tab switching (SwitchTab): Changed document.querySelector(".tab-content") to document.querySelectorAll(".tab-content") so the for loop iterates properly over all tabs.

Empty note validation: Added a return; inside if (text === "") in addNote() so an empty note isn't created after closing the alert.

Timer countdown (startTimer): Added sec-- inside the interval so the countdown actually decreases instead of staying stuck on the initial number.
