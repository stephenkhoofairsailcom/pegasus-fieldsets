public class ConfigureController {

	//public static string packageName = 'SPCMT1';
	public static string packageName = 'fHCM2';
	public String buildFieldsetRows {
		
		get{
			String value = '';
			List<FieldsetRow> myList = FieldSetManagerHelper.buildFieldsetRows(packageName);
			for(FieldsetRow fsRow: myList){
				value = value + fsRow.toString() + '<br/>';
			}
			return null;
		}
		set;
	}


	public String SobjectsInPackage {
		
		get{
			String value = '';
			List<Schema.DescribeSObjectResult> objectsInPackage = FieldSetManagerHelper.getSobjectsInPackage(packageName);
			for(Schema.DescribeSObjectResult fsRow: objectsInPackage){
				value = value + fsRow.getName() + '<br/>';
			}
			
			return value;
		}
		set;
	}


}