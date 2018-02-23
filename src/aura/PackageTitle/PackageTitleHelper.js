({
	/* @description checks if the total number of records needs to be displayed based on 
	 *				the results of the displayed rows. So if there is any filter applied 
	 *				(this means that display rows and 	master rows won't have same lenght)
	 *				then records to be displayed will follow the pattern "x items of y" otherwise
	 *				"x items"
	 * @param		component for which this init action is going to be executed
	 * @return		none			
	 */
	getShowTotalRecords: function (component) {
		try{
			let myMasterRows = component.get("v.masterRows");
			let mydisplayedRows = component.get("v.displayedRows");
			let showTotalRecords =  myMasterRows != undefined && myMasterRows != null && mydisplayedRows != undefined && mydisplayedRows != null && mydisplayedRows.length != myMasterRows.length;
		
			component.set('v.showTotalRecords', showTotalRecords);
		}catch(err){
			console.error(err);
		}
	}
})