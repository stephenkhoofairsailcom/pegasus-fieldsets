public class FieldsetRow {

	@AuraEnabled String	objectID {get; set;}
	@AuraEnabled String label {get; set;}
	@AuraEnabled String name {get; set;}
	@AuraEnabled String	fieldsetsUrl {get; set;}

	public FieldsetRow(String objectID, String label, String name, String fieldsetsUrl){
		this.objectID = objectID;
		this.label = label;
		this.name = name;
		this.fieldsetsUrl = fieldsetsUrl;
	}
}