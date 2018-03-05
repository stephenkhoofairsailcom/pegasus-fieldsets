public class TestData  {
	@AuraEnabled public String DeveloperName {get;set;}

	public testData(Integer num){
		DeveloperName = 'Stephen Khoo ' + num;
	}
}