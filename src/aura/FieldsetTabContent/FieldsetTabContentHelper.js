({
	/* @description gets a list of FieldSetRow based on the namespace selected 
	 * @param		component to be updated with the list of FieldsetRow
	 * @param		namespace selected
	 * @return		none
	 */
	queryRows: function (component, namespace){
		try{
			let action = component.get('c.getRows');
		
			action.setParams({
			   "packageName": namespace
			});
		
			action.setCallback(this, function(response) {
				//to be removed when moving to HCM
				console.log("Tab %s loaded in %fms", 
						namespace,
						performance.now() - startTime);

				let state = response.getState();
				if (state === "SUCCESS") {
					console.log('->query rows success');
					let rowValues = response.getReturnValue();
					if(rowValues !== null && rowValues.length>0){						
						component.set("v.masterRows", this.sortByLabel(rowValues));
						component.set("v.displayedRows", this.sortByLabel(rowValues));
					}else{
						component.set("v.masterRows", rowValues);
						component.set("v.displayedRows", rowValues);
						console.warn('There are no Objects in the ' + namespace +  ' Package.');
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
		}catch(err){
			console.error(err);
		}
	}, 

	/* @description Ascendingly sorts a list of FieldsetRow based on the language of the running user.
	 * @param		List of FieldsetRow
	 * @return		Sorted list of FieldsetRow 
	 */
	sortByLabel: function(rows){
		try{
			//$Locale is a global value provider that returns information about the current user’s preferred locale.
			let locale = $A.get("$Locale.language");
			//sorting uses the language locale to compare 
			rows.sort(function(a,b) {
				return a.label.localeCompare(b.label, locale);
			});
		}catch(err){
			console.error(err);
		}

		return rows;
	}
})