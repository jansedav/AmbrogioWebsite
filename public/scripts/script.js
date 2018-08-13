function myFunction() {
    var x = document.getElementById("myNavBar");
    var y = document.getElementById("myLogo")
    var z = document.getElementById("myNavContainer")
    if (x.className === "NavBar") {
        x.className += " responsive";
        y.className += " responsive"
        z.className += " responsive"
    } else {
        x.className = "NavBar";
        y.className = "logo"
        z.className = "NavContainer"
    }
}
