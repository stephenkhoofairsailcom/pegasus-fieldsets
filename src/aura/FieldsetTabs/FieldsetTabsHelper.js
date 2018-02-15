({	

	findSelectedPackage: function (component, fieldsetPackage){
		var fieldsetPackages = component.get("v.packageNames");
		for(var itemNum = 0;  itemNum < fieldsetPackages.length; itemNum++){	
				var thePackage = fieldsetPackages[itemNum];
				if(thePackage.namespace === fieldsetPackage){
					return thePackage;
				}
		}
		return null;
	},

	queryRows: function (component, namespace){
		var action = component.get('c.getRows');
		
		action.setParams({
           "packageName": namespace
       });
		action.setStorable();
	    action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
				console.log('->query rows success');
                component.set("v.rows", response.getReturnValue());
				//component.set("v.rowsFiltered", null);
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
		    // Send action off to be executed
        $A.enqueueAction(action);
	}
	

})