import { Store } from "../flux_main/Store";
import { ActionConstants } from "../flux_main/ActionConstants";

export class ControlPanelStore extends Store {

    GetInitialState() {
        console.log("ControlPanelStore - GetInitialState");
        return { userName: "Jim" };
    }


    HandleAction(objAction: any) {
        console.log("ControlPanelStore - HandleAction");
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

}