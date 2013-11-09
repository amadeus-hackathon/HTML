// JavaScript Document
$(document).ready(function() {
	
	
		$(".mask, .popUp, .newPopup, .popUp1").hide();
	
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
		
		
						$("#mCondition, label[for='mCondition']").click(function(){
		$(".mask, .popUp1").show();
		})
				
						$(".close2, .done").click(function(){
		$(".mask, .popUp1").hide();
		})
		
		
		
		
		
});


