({
	/* @description checks if total records needs to be displayed on init
	 * @param		component for which this init action is going to be executed
	 * @param		events registered in the Component
	 * @param		helper for the Component	
	 * @return		none
	 */
	init: function (component, event, helper) {
		helper.getShowTotalRecords(component);	
	},

	/* @description checks if total records needs to be displayed when displayed rows has changed
	 * @param		component for which this init action is going to be executed
	 * @param		events registered in the Component
	 * @param		helper for the Component	
	 * @return		none
	 */
	onChangeDisplayedRows: function (component, event, helper) {
		helper.getShowTotalRecords(component);	
	}
})