// JavaScript Document

$(document).ready(function()
		{
	$("#btn-project").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
	});
	$("#btn-about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
	});
	$("#btn-home").click(function() {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 1000);
	});
	

		});