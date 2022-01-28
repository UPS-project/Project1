import { LightningElement ,track} from 'lwc';

export default class BeerSearch extends LightningElement {
    @track SearchValue;
    handlechange(event)
    {
        const value=event.target.value;
        const searchevent=new CustomEvent(
            'search',{
                detail : value
            }
        );
        this.dispatchEvent(searchevent);
    }
}