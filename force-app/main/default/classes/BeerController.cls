public with sharing class BeerController {
    public BeerController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<SObject> search(String param)
    {
        String likeparam='%'+param+'%';
        String query='';
        if(param!=null)
        {
            query='select id,name,id__c,Alchohol_Percentage__c,price__c,brewery_name__c,image__c from beer__c where name like :likeparam limit 30';
        }
        else {
            
            query='select id,name,id__c,Alchohol_Percentage__c,price__c,brewery_name__c,image__c from beer__c limit 30';
        }
        List<SObject> resList=Database.query(query);
        return resList;
    }
}
