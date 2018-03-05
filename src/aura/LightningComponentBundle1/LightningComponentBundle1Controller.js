({
	doInit: function (component, event, helper) {
		console.log('->doInit');
		var action = component.get('c.getData');
        // Add callback behavior for when response is received
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
				console.log('->call success');
                component.set("v.items", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });

        // Send action off to be executed
        $A.enqueueAction(action);
		
		var oURL = component.find("aURL");
		console.log('oURL->'+oURL);
        oURL.set("v.value", "https://pcmt1-dev-ed.my.salesforce.com/_ui/common/config/entity/FieldSetListUI/d?retURL=%2F0IX%2Fe%3Fsetupid%3DCustomObjects&setupid=CustomObjects&tableEnumOrId=01I0N000001MpRr");

		// get the Service Component
		var fsmService = component.find("fsmService");
		// get some packageNames for a test
		fsmService.getPackages($A.getCallback(function(error, data){
								if(error==null){
									console.log("getPackages back->");
									component.set("v.packageNames", data);
								}else{
									console.log("getPackages error->" + error);
								}
							  }
							)
		);
		// get some object rows for the package for a test
		fsmService.getRows('SPCMT1', $A.getCallback(function(error, data){
								if(error==null){
									console.log("getRows back->");
									component.set("v.rows", data);
									console.log(data);
								}else{
									console.log("getRows error->" + error);
								}
							  }
							)
		);

		helper.showError('oh oh, there is an error..');

	},


	/* 
		Method that is called when the v.rows attribute is changed
	*/
	onRowChange: function(component, event, helper){
		var myRows = component.get('v.rows');
		console.log('row value changed' + myRows);
	}



})