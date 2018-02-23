({
	/* @description gets the list of packages installed in the org when the Component
	 *				is initialised. 	
	 * @param		component for which this init action is going to be executed
	 * @param		events registered in the Component
	 * @param		helper for the Component	
	 * @return		none
	 */
	doInit: function (component, event, helper) {
		// get the name of the packages form the controller
		let action = component.get('c.getPackages');
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.packageNames", response.getReturnValue());				
            } else {
                console.log("Failed with state: " + state);
            }
        });
		$A.enqueueAction(action);
		
		let getMap = component.get('c.getPackagesMap');
        // Add callback behavior for when response is received
        getMap.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.packagesMap", response.getReturnValue());				
            } else {
                console.log("Failed with state: " + state);
            }
        });
		$A.enqueueAction(getMap);

		//set default value for currentPackage -> HCM
		component.set('v.currentPackage', {'name':'HCM', 'namespace':'fHCM2'});				
	},

	/* @description gets FieldsetPackage object for the clicked tab.	
	 * @param		component for which this action is going to be executed
	 * @param		events registered in the Component
	 * @param		helper for the Component	
	 * @return		none
	 */
	setNewCurrent: function(component,event,helper){
		let tab = event.getSource();
		let clickedTab = tab.get('v.id');
		let newPackage = helper.findPackage(component, clickedTab);		
		component.set('v.currentPackage', newPackage);
	}
})