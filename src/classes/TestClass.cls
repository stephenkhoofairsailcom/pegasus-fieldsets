@isTest 
private class TestClass {

	@IsTest
	private static void test_getSobjectsDetails_Without_PackageName(){
		System.assert(FieldSetManagerHelper.getSobjectsDetails('') == null );

	}
	@IsTest
	private static void test_getSobjectsDetails_With_PackageName(){
		String packageName = [SELECT NamespacePrefix FROM Organization].NamespacePrefix;
		System.assert(FieldSetManagerHelper.getSobjectsDetails(packageName) != null );
		System.assert(FieldSetManagerHelper.getSobjectsDetails(packageName).keySet() != null );
	}
	@IsTest
	private static void test_getSobjectsInPackage_WithoutPackageName(){
		System.assert(FieldSetManagerHelper.getSobjectsInPackage('') == null );
	}
	

	@IsTest
	private static void test_getSobjectsInPackage_With_Silly_PackageName(){
		System.assert(FieldSetManagerHelper.getSobjectsInPackage('Test') != null );
		System.assert(FieldSetManagerHelper.getSobjectsInPackage('Test').size() == 0 );
	}
	
	@IsTest
	private static void test_getSobjectsInPackage_With_PackageName(){
		String packageName = [SELECT NamespacePrefix FROM Organization].NamespacePrefix;
		System.assert(FieldSetManagerHelper.getSobjectsInPackage(packageName) != null );
		System.assert(FieldSetManagerHelper.getSobjectsInPackage(packageName).size() > 0 );
	}
	
	@IsTest
	private static void test_buildFieldsetRows_Without_PackageName(){
		System.assert(FieldSetManagerHelper.buildFieldsetRows('') != null );	
		System.assert(FieldSetManagerHelper.buildFieldsetRows('').size() == 0 );	

	}	

	@IsTest
	private static void test_buildFieldsetRows_With_Silly_PackageName(){
		System.assert(FieldSetManagerHelper.buildFieldsetRows('') != null );	
		System.assert(FieldSetManagerHelper.buildFieldsetRows('').size() == 0 );	

	}	

	@IsTest
	private static void test_buildFieldsetRows_With_PackageName(){
		String packageName = [SELECT NamespacePrefix FROM Organization].NamespacePrefix;
		System.assert(FieldSetManagerHelper.buildFieldsetRows(packageName) != null );
		System.assert(FieldSetManagerHelper.buildFieldsetRows(packageName).size() >0);	
	
	}


	@IsTest
	private static void test_getInstalledPackages(){
		System.assert(FieldSetManagerHelper.getInstalledPackages() != null );
		System.assert(FieldSetManagerHelper.getInstalledPackages().size() >=1 );
		System.assert(FieldSetManagerHelper.getInstalledPackages().get(0).equals('fHCM2'));

	}

	@IsTest
	private static void test_buildFieldsetPackage(){
		System.assert(FieldSetManagerHelper.buildFieldsetPackage() != null );
		System.assert(FieldSetManagerHelper.buildFieldsetPackage().size() > 0);
		System.assert(FieldSetManagerHelper.buildFieldsetPackage().get(0).namespace.equals('fHCM2'));
		System.assert(FieldSetManagerHelper.buildFieldsetPackage().get(0).name.equals('HCM'));
	}
	@IsTest
	private static void test_getPackages(){
		System.assert(FieldSetManagerController.getPackages() != null);
		System.assert(FieldSetManagerController.getPackages().size() >0);
	}

	@IsTest
	private static void test_getPackages_Without_PackageName(){
		System.assert(FieldSetManagerController.getRows('') != null);
		System.assert(FieldSetManagerController.getRows('').size() == 0);

	}

	@IsTest
	private static void test_getPackages_With_Silly_PackageName(){
		System.assert(FieldSetManagerController.getRows('Test') != null);
		System.assert(FieldSetManagerController.getRows('Test').size() == 0);

	}

	@IsTest
	private static void test_getPackages_With_PackageName(){
		String packageName = [SELECT NamespacePrefix FROM Organization].NamespacePrefix;
		System.assert(FieldSetManagerController.getRows(packageName) != null);
		System.assert(FieldSetManagerController.getRows(packageName).size() > 0);
	}

	@IsTest private static void test_Controller(){
		String packageName = [SELECT NamespacePrefix FROM Organization].NamespacePrefix;
		ConfigureController controller = new ConfigureController();
		System.assert(controller.buildFieldsetRows == null);
		System.assert(controller.SobjectsInPackage != null);

	}

}