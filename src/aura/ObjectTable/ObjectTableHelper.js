({
	buildtable: function (component) {
		component.set('v.columns', [
					{label: 'Label', fieldName: 'fieldsetsUrl', type: 'url',  typeAttributes: {label: { fieldName: 'label' } }, 
						cellAttributes:{ 'iconName': 'utility:new_window', iconPosition: 'left' }
					},
					{label: 'API Name', fieldName: 'name', type: 'text'}
				]);			
		}
})