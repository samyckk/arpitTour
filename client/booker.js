function book(event) {
    event.preventDefault();

    var selectedLocation = document.querySelector("input[list='mylist']").value;

    var locationToHTML = {
        "Vancouver, Canada": "vancouver.html",
        "Paris, France": "paris.html",
        "Monaco, Monaco": "monaco.html",
        "Bern, Switzerland": "bern.html",
        "Seoul, South Korea": "seoul.html",
        "Tokyo, Japan": "tokyo.html"
    };

    if (locationToHTML.hasOwnProperty(selectedLocation)) {
        window.open(locationToHTML[selectedLocation], "_blank");
    } else {
        alert("This particular package is not available at the moment");
    }
}