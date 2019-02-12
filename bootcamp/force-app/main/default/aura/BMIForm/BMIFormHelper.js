({
	calculateBMIVal : function(component, event, helper) {
        var heightVal = component.get("v.height");
        var weightVal = component.get("v.weight");
        var bmiVal = (weightVal * 0.45)/ (heightVal*heightVal) ;
        component.set("v.bmi", bmiVal);

        var displayBox = component.find("display");
        //if the value of bmi is less than or equal to 20 call css method called is risk ( red) and if not call no risk (green)
        if(component.get("v.bmi") >= 20.0) {
           $A.util.removeClass(displayBox, 'is-risk'); 
           $A.util.addClass(displayBox, 'no-risk'); 
        } else{
           $A.util.addClass(displayBox, 'is-risk');
           $A.util.removeClass(displayBox, 'no-risk'); 
        }
    }

    

})