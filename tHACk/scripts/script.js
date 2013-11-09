// JavaScript Document
$(document).ready(function() {
	
	
		$(".mask, .popUp, .newPopup").hide();
	
	//search tab
		
		$(".facebook, .seasonal, .wellBeing").click(function(){
		$(".mask, .popUp").show();
		})

		$(".close").click(function(){
		$(".mask, .popUp").hide();
		})
		
		$(".placeDescription.arrow").click(function(){
		$(".newPopup").show();
		})
		
		
				$(".close1").click(function(){
		$(".newPopup").hide();
		})
		
		
});


