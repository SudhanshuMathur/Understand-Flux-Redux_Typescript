export class Dispatcher {

    private cbStores: any[];

    constructor(){
        console.log("Dispatcher - constructor");
        this.cbStores =  new Array();
    }

    RegisterStore(cbStore: any) {
         console.log("Dispatcher - RegisterStore");
        this.cbStores.push(cbStore);

    }

    DispatchAction(objAction: any) {
        console.log("Dispatcher - DispatchAction");
        //Call the Store(or multiple stores) and call the store method which handler the action we pass to it
        this.cbStores.forEach(cbStore => cbStore(objAction));
    }

}