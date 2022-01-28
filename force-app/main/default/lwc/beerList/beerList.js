import { LightningElement ,track, wire} from 'lwc';
import search from '@salesforce/apex/BeerController.search';
export default class BeerList extends LightningElement {
    @track beerRecords;
    @track errors;
    @wire(search)
        wiredrecords({err,data}){
            console.log('Data ',data);
            this.beerRecords=data;
            this.errors=err;
        }
    handlesearch(event)
    {
        const val=event.detail;
        console.log('searh value',val);
        search({
            param : val
        })
        .then(result => {
            console.log('beer records',result);
            this.beerRecords=result;
            this.errors=undefined;
        })
        .catch(error => {
            console.log('errors ',error);
            this.errors=error;
            this.beerRecords=undefined;
        })
    }
}