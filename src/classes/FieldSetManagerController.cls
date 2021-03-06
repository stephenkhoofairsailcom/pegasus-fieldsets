public class FieldSetManagerController {


	@AuraEnabled
	public static List<FieldsetPackage> getPackages(){
		return FieldSetManagerHelper.buildFieldsetPackage();
	}


	@AuraEnabled
	public static List<FieldsetRow> getRows(String packageName){
		return FieldSetManagerHelper.buildFieldsetRows(packageName);		
	}

	@AuraEnabled
	public static Map<String, String> getPackagesMap(){
		return 	FieldSetManagerHelper.getPackagesMap();
	}


}