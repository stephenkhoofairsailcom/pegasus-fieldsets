public class TestController  {


	@AuraEnabled
	public static List<TestData> getData(){
		List<TestData> items = new List<TestData>();

		for(integer aloop = 1; aloop <= 20; aloop++){
			items.add(new TestData(aloop));
		}

		return items;
	}


	public class testData{
		@AuraEnabled public String DeveloperName {get;set;}

		public testData(Integer num){
			DeveloperName = 'Stephen Khoo ' + num;
		}
	}

}