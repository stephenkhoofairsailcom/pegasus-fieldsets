

window._ltngCore = (function() {
    var value = 0; // private

    return { //public API

		// show an error on the lightning page
		showError : function(errMsg) {
			var toastEvent = $A.get("e.force:showToast");
			toastEvent.setParams({
				mode: 'sticky',
				type: 'error',
				title: 'Error',
				message: errMsg
			});
			toastEvent.fire();
		},

        getValue: function() {
            return value;
        }
    };
}());
