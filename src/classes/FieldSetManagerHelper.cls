public class FieldSetManagerHelper {
	
	public final static String URL_PREFIX = '/_ui/common/config/entity/FieldSetListUI/d?tableEnumOrId=';

	//Map of all supported packages
	public static Map<String, String> packageMap = new Map<String, String>();
	static {
		packageMap.put( 'fHCM2',	'HCM');
		packageMap.put( 'fRecruit', 'Recruit');
		packageMap.put( 'fResource','Resource');
		packageMap.put( 'fta',		'Time');
		packageMap.put( 'fpay',		'Payflow');
		packageMap.put( 'fDL',		'DataLoader');
		packageMap.put( 'fAsync',	'Async Reporting');
		packageMap.put( 'SPCMT1',	'SPCMT1 Name');
		packageMap.put( 'TestTab',	'Test tab');

		packageMap.put( 'fauto',	'Auto Enrolment');

	}
	
	/*
	*Get a list of all supported installed packages 
	*HCM is a first tab by default
	*The rest of tabs are sorted alphabetically
	*/
	public static List<String> getInstalledPackages(){
		Set<String> packagesSet = new Set<String>();
		for(ApexClass item : [Select NamespacePrefix from ApexClass where NamespacePrefix in: packageMap.keyset()]){
			String namespace = (String)item.get('NamespacePrefix');

			if(namespace.equals('fHCM2')){
				continue;
			}
			packagesSet.add(namespace);
		}
		List<String> result = new List<String>(packagesSet);
		result.sort();
		result.add(0,'fHCM2');
		result.add(1,'TestTab');
		return result;
	}
	/*
	* Build a map of Fieldset Package objects for all installed supported packages
	*/
	public static List<FieldsetPackage> buildFieldsetPackage(){
		List<String> packageNames = getInstalledPackages();
		List<FieldsetPackage> result = new List<FieldsetPackage>();
		for(String item: packageNames){
			if(packageMap.containsKey(item)){
				result.add(new FieldsetPackage(packageMap.get(item), item));
			}
		}
		return result;
	}

	/*
	* Build a List of Fieldset Rows objects based on selected package
	*/
	public static List<FieldsetRow> buildFieldsetRows(String packageName){
		List<FieldsetRow> listFieldsetRows = new List<FieldsetRow>();		
		if(packageName == null || packageName == ''){
			System.debug('Package name cannot be null');
			return listFieldsetRows;
		}
		List<Schema.DescribeSObjectResult> objectsInPackage = getSobjectsInPackage(packageName);
		Map<String, String> objectDetails = getSobjectsDetails(packageName);
		if(objectDetails == null || objectDetails.keySet().size() == 0){
			System.debug('Cannot find objects details for package ' + packageName);
			return listFieldsetRows;
		}
		for(Schema.DescribeSObjectResult objDesc : objectsInPackage){
			String key = objDesc.getName();
			String sobjDurableId = objectDetails.containsKey(key)? objectDetails.get(key) : null;
			if(sobjDurableId == null){
				continue;
			}
			String sobjectUrl = objectDetails.containsKey(key)? URL_PREFIX + sobjDurableId : '';
			FieldsetRow rowFieldset = new FieldsetRow(sobjDurableId, objDesc.getLabel(), objDesc.getName(), sobjectUrl);
			listFieldsetRows.add(rowFieldset);
		}
		return listFieldsetRows;
	}
	
	/*
	* Gets a Map of Schema.DescribeSObjectResult objects based on selected package
	* Map represents all custom objects from selected package.
	*/
	@TestVisible
	public static List<Schema.DescribeSObjectResult> getSobjectsInPackage(String packageName){
		if(packageName == null || packageName == ''){
			System.debug('Package name cannot be null');
			return null;
		}
		List<Schema.DescribeSObjectResult> objectsInPackage = new List<Schema.DescribeSObjectResult>();
		for(Schema.SObjectType objType : Schema.getGlobalDescribe().values()){
			Schema.DescribeSObjectResult objDesc = objType.getDescribe();
			String objName = objDesc.getName();
			if (objName.startsWith(packageName) && objName.endsWith('__c')){	
				objectsInPackage.add(objDesc);
			}
		}
		return objectsInPackage;
	}

	/*
	* Gets a Map of EntityDefinition objects based on selected package. This table needs to be
	* queried in order to get the durableId of an object and build the url to the fieldset
	* configure page in classic.
	*/
	@TestVisible
	private static Map<String, String> getSobjectsDetails(String packageName){
		if(packageName == null || packageName == ''){
			System.debug('Package name cannot be null');
			return null;
		}
		Map<String, String> objectDetails = new Map<String, String>();
		List<EntityDefinition> entityDefinitionList = [SELECT DurableId, QualifiedApiName FROM EntityDefinition WHERE NamespacePrefix = :packageName and QualifiedApiName like '%__c'];
		for(EntityDefinition sobj: entityDefinitionList){
			objectDetails.put(sobj.QualifiedApiName, sobj.DurableId);	
		}
		return objectDetails;
	}

}