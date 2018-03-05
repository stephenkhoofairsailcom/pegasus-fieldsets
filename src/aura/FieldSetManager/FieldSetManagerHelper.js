({
	/* @description gets FieldsetPackage object for the clicked tab.	
	 * @param		component for which this action is going to be executed
	 * @param		clicked tab contains namespace of the installed package
	 * @return		FieldsetPackage object
	 */
	findPackage: function (component,clickedTab) {
		//map with all packages that can be installed and uses fieldsets	
		let myPackageMap = component.get('v.packagesMap');
		let packageName = myPackageMap[clickedTab];		
		return {'name':packageName, 'namespace':clickedTab};
	},
	// added to avoid anonymous functions and call them from tests
	getPackages: function(component){
		let action = component.get('c.getPackages');
        let self = this;
		// Add callback behavior for when response is received
		action.setCallback(this, function(response) {           
		   self.actionResponseHandler(response, self.updatePackageNames, component);
		    
        });		
		$A.enqueueAction(action);
	},
	// added to avoid anonymous functions and call them from tests
	actionResponseHandler: function(response, update, component){
		let state = response.getState();
		let retValue = response.getReturnValue();
        
		if (state === "SUCCESS") {           
			update(retValue, component);	
							
        } else {			
            console.log("Failed with state: " + state);
        }
	},
	// added to avoid anonymous functions and call them from tests
	updatePackageNames:function(result, component){
		component.set("v.packageNames", result);
		
	},
	// added to avoid anonymous functions and call them from tests
	getPackagesMap: function(component){
		let action = component.get('c.getPackagesMap');
        let self = this;
		// Add callback behavior for when response is received
        action.setCallback(this, function(response) {
			self.actionResponseHandler(response, self.updatePackageMap, component);  
        });
		$A.enqueueAction(action);
	},
	// added to avoid anonymous functions and call them from tests
	updatePackageMap:function(result, component){
		component.set("v.packagesMap", result);	            
	}
})