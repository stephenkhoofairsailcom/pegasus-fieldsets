({
	/* @description gets a list of FieldsetRow based on the selected namespace.
	 *				This list is only retrieved when user clicks on the package tab
	 *				for the first time.
	 * @param		component for which this init action is going to be executed
	 * @param		events registered in the Component
	 * @param		helper for the Component	
	 * @return		none
	 */
	doInit: function (component, event, helper) {
		let packageNamespace = component.get('v.packageName');
		//to be removed when moving to HCM??
		console.log('event: ' + packageNamespace.namespace);
		//query Rows, sort rows and clear filter
		helper.queryRows(component,packageNamespace.namespace);			
	},

	/* @description calls to the clearFilterString method exposed in ObjecFilter.cmp
	 *				each time that the tab is changed in order to clean filters.	
	 * @param		component for which this init action is going to be executed
	 * @param		events registered in the Component
	 * @param		helper for the Component	
	 * @return		none
	 */
	clearFilter: function (component, event, helper){
		//check if the tab has changed
		let current = component.get('v.currentPackage');
		//looking for obBjectFilter.cmp
		let filterCmp = component.find("filterCmp");
		//using exposed method to reset filters
		filterCmp.clearFilterString(component);			
	}
})