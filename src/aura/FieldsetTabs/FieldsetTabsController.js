({
	onTabActive: function (component, event, helper) {
		//console.log('Clicked ' + JSON.stringify(component));
		let tab = event.getSource();
		if(tab!=undefined){
			var packageNamespace = tab.get('v.id');
			console.log('event: ' + packageNamespace);
			component.set("v.activePackage", helper.findSelectedPackage(component,packageNamespace));
			//query Rows and clear filter
			helper.queryRows(component,packageNamespace);
		}
	}
	
})