({
	
	/* @description gets a list of FieldsetPackage installed in the system.	
	 * @param		component for which this init action is going to be executed
	 * @param		events registered in the Component
	 * @param		helper for the Component	
	 * @return		none
	 */
	doInit: function (component, event, helper) {
		console.log('->call doInit');

		// get the name of the packages form the controller
		var action = component.get('c.getPackages');
		console.log('action->');
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
				console.log('->call success');
                component.set("v.packageNames", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });

        // Send action off to be executed
        $A.enqueueAction(action);


	}
})