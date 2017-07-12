import { ActionConstants } from "./ActionConstants";

export class Store {
    private objState: any;
    private cbViews: any[];

    constructor(objDispatcher: any) {
        console.log("Store - constructor");
        this.objState = this.GetInitialState();
        this.cbViews = new Array();

        objDispatcher.RegisterStore(this.HandleAction.bind(this));

    }

    GetInitialState() {
        console.log("Store - GetInitialState");
        return { userName: "Jim" };
    }

    RegisterView(cbView: any) {
        console.log("Store - RegisterView");
        this.cbViews.push(cbView);
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
        this.cbViews.forEach(cbView => cbView(this.objState));
    }
}