export class Dispatcher {

    private objStores: any[];

    constructor(){
        console.log("Dispatcher - constructor");
        this.objStores =  new Array();
    }

    RegisterStore(objStore: any) {
         console.log("Dispatcher - RegisterStore");
        this.objStores.push(objStore);

    }

    DispatchAction(objAction: any) {
        console.log("Dispatcher - DispatchAction");
        //Call the Store(or multiple stores) and call the store method which handler the action we pass to it
        this.objStores.forEach(objStore => objStore.HandleAction(objAction));
    }

}