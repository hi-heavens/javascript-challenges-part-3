let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
const janeEl = document.getElementById("jane-el");

// Use addEventListener() to listen for button clicks
janeEl.addEventListener("click", function() {
    // Log Jane's score when the button is clicked (via data)
    console.log(data[0].score);
});
