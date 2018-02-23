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

	/* @description displays the given error in a cool look&feel component	
	 * @param		error message
	 * @return		none
	 */
	showError : function(errMsg) {
		var toastEvent = $A.get("e.force:showToast");
		toastEvent.setParams({
			mode: 'sticky',
			type: 'error',
			title: 'Error',
			message: errMsg
		});
		toastEvent.fire();
	}

})