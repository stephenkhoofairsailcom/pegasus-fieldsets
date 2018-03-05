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
		//changed to follow best practices --> logic in controller
		helper.getPackages(component);
		helper.getPackagesMap(component);

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