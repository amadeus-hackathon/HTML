// JavaScript Document
$(document).ready(function() {
	
	
		$(".mask, .popUp").hide();
	
	//search tab
		
		$(".facebook, .seasonal, .wellBeing").click(function(){
		$(".mask, .popUp").show();
		})

		$(".close").click(function(){
		$(".mask, .popUp").hide();
		})
});


