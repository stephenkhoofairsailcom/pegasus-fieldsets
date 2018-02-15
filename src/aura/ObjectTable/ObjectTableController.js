({
	init: function (component, event, helper) {

	//console.time('init');
	var rows = component.get('v.rows');
	helper.buildtable(component,rows);
	//console.timeEnd('init');

	}
})