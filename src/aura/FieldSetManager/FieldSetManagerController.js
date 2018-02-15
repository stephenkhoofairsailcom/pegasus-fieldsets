({
	
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
				component.set("v.activePackage", response.getReturnValue()[1]);
            }
            else {
                console.log("Failed with state: " + state);
            }
        });

        // Send action off to be executed
        $A.enqueueAction(action);


	}
})