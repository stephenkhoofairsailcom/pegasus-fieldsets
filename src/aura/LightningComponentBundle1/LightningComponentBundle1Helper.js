({
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