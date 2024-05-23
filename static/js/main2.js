
let foot = document.getElementById("footer");
foot.innerHTML = `
<div class="foot">
        <div class="cont">
            <a href="{% url 'about' %}">About Us</a>
            <a href="{% url 'contact' %}">Contact us</a>
            <a href="{% url 'how it works' %}">How it works</a>
        </div>
        <div class="cont">
            <a href="{% url 'terms' %}">Terms</a>
            <a href="{% url 'privacy' %}">Privacy policy</a>
            </div>
         <div class="cont">
            <a href="{% url 'help' %}">Help and Support</a>
     </div>
     <div class="cont">
        <a href="#"><i class="fa-brands fa-x-twitter" style="background-color : black"></i></a>
        <a href="#"><i class="fa-brands fa-linkedin-in "></i></a>
        <a href="#"><i class="fa-brands fa-facebook-f " style="background-color: rgba(36, 109, 234, 0.733);"></i></a>
        <a href="#">  <i class="fa-brands fa-github " style="background-color : black"></i></a>
      
     </div>
     </div>
    <div class="cont1">
        <img src="{% static '../static/images/logo.png' %}">
        <p>&copy; All Rights Reserved</p>
    </div>

`;


