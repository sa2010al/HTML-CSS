window.addEventListener('load', function() {
    // array of month full names
    var months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    var dateElement = document.getElementById('Date');
    // date gets current date , a date object
    var date = new Date();
    // with current date in nicely formated way
    dateElement.innerText = "Today is " + months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
})