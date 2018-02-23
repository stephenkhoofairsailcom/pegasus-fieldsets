/* Class for handling errors to be displayed in 
 * LEX components, and show friendly messages to the 
 * user.
 */
public class ErrorHandler{
	//type of the error: warning or error
	@AuraEnabled
	public String type {get;set;}
	
	//message displayed to the user
	@AuraEnabled
	public String description {get;set;}

	public ErrorHandler (String type, String description){
		this.type = type;
		this.description = description;
	}
}