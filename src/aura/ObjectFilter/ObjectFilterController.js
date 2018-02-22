({
	/* @description Each time that a new character is typed in the search box,
	 *				a new search is running.
	 * @param		component for which this init action is going to be executed
	 * @param		events registered in the Component
	 * @param		helper for the Component
	 * @return		none			
	 */
	searchKeyChange: function (component, event, helper) {
		let searchKey = component.find("filterString").get("v.value");
		let formattedKey =  helper.formatSearchKey(searchKey);
		
		helper.findByName(component,formattedKey);
	},
    
	/* @description Resets the search box and the displayrows	
	 * @param		component for which this init action is going to be executed
	 * @param		events registered in the Component
	 * @param		helper for the Component
	 * @return		none			
	 */
    resetFilter: function (component){        
		let masterRows = component.get('v.masterRows');

		component.find("filterString").set("v.value",null);
		//component.find("lololo").set("v.value",null);		
		component.set('v.displayedRows',masterRows);
    }
  
})