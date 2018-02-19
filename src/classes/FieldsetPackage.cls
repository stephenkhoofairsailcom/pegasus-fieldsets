public class FieldsetPackage {

	@AuraEnabled public string name {get;set;}
	@AuraEnabled public string namespace {get;set;}

	public FieldsetPackage(string name, string namespace){
		this.name = name;
		this.namespace = namespace;
	}

}