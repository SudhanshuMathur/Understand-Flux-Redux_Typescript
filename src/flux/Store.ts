import { ActionConstants } from "./ActionConstants";

export class Store {
    private objState: any;
    private objViewListners: any[];

    constructor() {
        console.log("Store - constructor");
        this.objState = this.GetInitialState();
         this.objViewListners =  new Array();

         
    }

    GetInitialState() {
         console.log("Store - GetInitialState");
        return { userName: "Jim" };
    }

    RegisterView(objViewListner: any) {
          this.objViewListners.push(objViewListner);
    }

    HandleAction(objAction: any) {
          console.log("Store - HandleAction");
        //Handle action , and update the state and notify view
        switch (objAction.type) {
            case ActionConstants.ACTION_UPDATE_USERNAME:
                //Updating state
                this.objState.userName = objAction.value;

                //Need to update the listening views
                this.UpdateViews();
                break;
        }
    }

    UpdateViews() {
           console.log("Store - UpdateViews");
        this.objViewListners.forEach(objViewListner => objViewListner(this.objState));
    }
}