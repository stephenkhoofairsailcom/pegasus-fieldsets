({
	/* @description a filter is applied on the master rows based on the key to search.
	 *				Results of the filters are stored in displayed rows.
	 * @param		component for which this init action is going to be executed
	 * @param		searh key that defines the filter criterion 
	 * @return		none			
	 */
	findByName: function (component, searchKey) {
		let myRows = component.get("v.masterRows");
		if(searchKey != undefined && searchKey != null && searchKey != ''){
			
			let myFilteredRows = myRows.filter(function(row){
				console.log(searchKey.trim().toLowerCase());
				let isValueMatching = row.label.trim().toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
				return isValueMatching;	
			}); 
			
			component.set("v.displayedRows", myFilteredRows);
			console.log(myFilteredRows);
		} else{
			console.log('in else');
			component.set("v.displayedRows", myRows);
		}
	},

	/* @description Formats the search key. If more than one space is found in the search key
	 *				only one is kept and the rest are deleted. Additionally, spaces at the beginning
	 *				or end of the search key are removed.
	 * @param		raw search key	 
	 * @return		cleaned search key			
	 */
	formatSearchKey: function(searchKey){
		let key = null;
		if(searchKey != undefined && searchKey != null){
			key = searchKey.replace(/\s\s+/g, ' ').trim();
		}

		return key;
	}
})