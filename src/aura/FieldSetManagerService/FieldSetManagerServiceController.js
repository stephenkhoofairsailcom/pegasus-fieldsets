({
	fsm_getPackages: function (component, event, helper) {
		// get the name of the packages form the controller
		var params = event.getParam("arguments");
		var action = component.get('c.getPackages');
		console.log('fsm_getPackages->');
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
				console.log('fsm_getPackages->call success');
				params.callback(null, response.getReturnValue());
                //component.set("v.packageNames", response.getReturnValue());
            }
            else {
				params.callback(response.getError());
                console.log("fsm_getPackages->Failed with state: " + state);
            }
        });

        // Send action off to be executed
        $A.enqueueAction(action);
	},

	fsm_getRows: function (component, event, helper) {
		var params = event.getParam("arguments");
		let action = component.get('c.getRows');
		
		// namespace of the package
		var namespace = params.namespace;

		console.log('fsm_getRows->' + namespace);

		action.setParams({
           "packageName": namespace
		});
		
	    action.setCallback(this, function(response) {
			//to be removed when moving to HCM
			console.log("Tab %s loaded in %fms", 
					namespace,
					performance.now() - startTime);

            var state = response.getState();
            if (state === "SUCCESS") {
				console.log('fsm_getRows->query rows success');
				let rowValues = response.getReturnValue();
				if(rowValues !== null){
					//component.set("v.rows", this.sortByLabel(rowValues));
					console.log('fsm_getRows->call success');
					params.callback(null, response.getReturnValue());
				}else{
					//component.set("v.rows", rowValues);
					params.callback(response.getError());
					console.log("fsm_getRows->Failed with state: " + state);
				}
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
		//to be removed when moving to HCM
		let startTime = performance.now();
		// Send action off to be executed
        $A.enqueueAction(action);	
	}

})