({
	init: function (component, event, helper) {
		var rows = component.get('v.rows');
		helper.buildtable(component,rows);
	}
})