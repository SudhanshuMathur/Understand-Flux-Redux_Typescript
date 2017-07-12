import { ActionCreator } from "./flux/flux_main/ActionCreator";
import { ActionConstants } from "./flux/flux_main/ActionConstants";
import { Dispatcher } from "./flux/flux_main/Dispatcher";
import { ControlPanelStore } from "./flux/flux_custom/ControlPanelStore";

//Register View listner with Store - callback
var cbView = function (objCurrentState: any){
    console.log("ControlPanel - cbView to render changes to view");
    document.getElementById('userName').innerText = objCurrentState.userName;
}

let objDispatcher = new Dispatcher();
let objControlPanelStore = new ControlPanelStore(objDispatcher);

//Register View listner with Store
objControlPanelStore.RegisterView(cbView);

//Helper or Callback Method - Dispatcher
//here function input variable objUserNameInput => event - used in order to implement event delegation.
var cbBindUserNameInput = function (objUserNameInput: any) {
    let userInputNameValue = this.value; //username entered in textbox => m,ma,mat,math,mathu,mathur
    let objActionCreator = new ActionCreator();
    let objAction = objActionCreator.CreateAction(ActionConstants.ACTION_UPDATE_USERNAME, userInputNameValue);

    //nEED A DISPATCHER -- TO CALL SOMETHING LIKE DISPATCH ACTION..and pass action object to it
    objDispatcher.DispatchAction(objAction);

};

document.getElementById('userNameInput').addEventListener('input', cbBindUserNameInput);
