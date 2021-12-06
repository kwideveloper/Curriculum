var html = document.getElementById("html");
var css = document.getElementById("css");
var js = document.getElementById("js");
var php = document.getElementById("php");
var sass = document.getElementById("sass");
var react = document.getElementById("react");
var bootstrap = document.getElementById("bootstrap");
var btn_subir = document.getElementById("btn_subir");



html.style.width = "0";
react.style.width = "0";
css.style.width = "0";
js.style.width = "0";
php.style.width = "0";
sass.style.width = "0";

window.addEventListener("scroll",function(){

    
    var y = window.scrollY;
    // console.log(y);

    if(y > 501) {
        html.style.width = "90%";
        css.style.width = "90%";
        js.style.width = "70%";
        react.style.width = "50%";
        php.style.width = "70%";
        sass.style.width = "95%";
        bootstrap.style.width = "80%";
    } else {
        html.style.width = "0";
        css.style.width = "0";
        js.style.width = "0";
        php.style.width = "0";
        sass.style.width = "0";
        react.style.width = "0";
        sass.style.width = "0";
        bootstrap.style.width = "0";
    }

});


$(document).ready(function(){
 
	$('#btn_subir').click(function(){
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('#btn_subir').show("fast");
		} else {
            $('#btn_subir').hide("fast");
		}
	});
 
});
