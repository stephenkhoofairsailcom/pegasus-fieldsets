({
	buildtable: function (component) {
		try{
			component.set('v.columns', [
						{label: 'Label', fieldName: 'fieldsetsUrl', type: 'url', typeAttributes: {label: { fieldName: 'label' } },
							cellAttributes:{ iconName: 'utility:new_window', iconPosition: 'left' }
						},
						{label: 'API Name', fieldName: 'name', type: 'text'}
					]);			
		}catch(err){
			console.error(err);
		}
	}
})