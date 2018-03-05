describe('Test suite for Fieldset Management component', function(){
	describe('c:fieldsetManager', function(){
	 	
	 	/* setting up the test case. before running specs (it functions)
	 	 * an spy is created on the component. This spy is to call to the
	 	 * function doInit of the controller's component so we won't be calling
	 	 * the real one but a mock. And we will returning a mock response.
	 	 */
	 	/*beforeEach(function(done){	 		
	 		//let defaultTimeout = 50000;
	 		let mockPackage = [
				{
					'name' : 'HCM',
					'namespace' : 'fHCM2'
				},
				{
					'name' : 'Test Package 1',
					'namespace' : 'TP1'
				},
				{
					'name' : 'Test Package 2',
					'namespace' : 'TP2'
				}
			];

			// Create a record in advance, for use with the Save, Reload and Delete actions
            let that = this;
            $T.createComponent("c:fieldsetManager", {}, true)
            .then(function(component){
                that.component = component;
               /* return $T.waitFor(function(){
                    return component.get("v.packageNames") != null && component.get("v.packageNames") != undefined &&
                    		component.get("v.currentPackage") != null && component.get("v.currentPackage") != undefined;
                }, defaultTimeout);*/
          /*      done();
            }).catch(function(e) {
                done.fail(e);
            });
			

            /*
			$T.createComponent("c:fieldsetManager", {}, true)
            .then(function(component){
                let cmpEvent = component.getEvent("init");
                //console.log('jasmine: ' + JSON.stringify(cmpEvent));
                // Mocking out the server-side action response
                //spyOn(component, 'init').and.returnValue(mockPackage);
                component.set("v.packageNames", mockPackage);
                componentWithPackages = component;
                done();                
            }).catch(function(e) {
                done.fail(e);
            });	 */	

	 	//});

	 	/* Each spec ('it' functions) renders its components into the same div,
	 	 * so we need to clear that div out at the end of each spec.
	 	 */
        afterEach(function() {            
            $T.clearRenderedTestComponents();            
        });

	 	/* Tests that we are setting the current package
	 	 */
 		it('gets the current package when initialising the component and doing a call to the server', function(done) {
        	$T.createComponent("c:fieldsetManager", {}, true)
            .then(function(component){
                expect(component).not.toBe(null);
                expect(component.get("v.currentPackage").name).toBe("HCM");
                done();                
            }).catch(function(e) {
                done.fail(e);
            });	
        });

        /* Tests that we are getting a list of packages
	 	 */
 		it('gets a list of packages doing a call to the server', function(done) {
        	let mockPackage = [
				{
					'name' : 'HCM',
					'namespace' : 'fHCM2'
				},
				{
					'name' : 'Test Package 1',
					'namespace' : 'TP1'
				},
				{
					'name' : 'Test Package 2',
					'namespace' : 'TP2'
				}
			];

			$T.createComponent("c:fieldsetManager", {}, true)
            .then(function(component){                
                component.set("v.packageNames", mockPackage);
				let packageList = component.get("v.packageNames");
				console.log('packageNames -- > ' + JSON.stringify(packageList));
				component.init
				expect(packageList).not.toBe(undefined);
				expect(packageList).not.toBe(null);
				expect(packageList.length).toBe(3);
				expect(packageList[0]['namespace']).toBe(mockPackage[0]['namespace']); 
				expect(packageList[1]['namespace']).toBe(mockPackage[1]['namespace']); 
				expect(packageList[2]['namespace']).toBe(mockPackage[2]['namespace']);  
                		
				done();
            }).catch(function(e) {
                done.fail(e);
            });          
        });
	});

});