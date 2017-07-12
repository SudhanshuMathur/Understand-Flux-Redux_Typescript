import { ActionCreator } from "./flux/ActionCreator";
import { ActionConstants } from "./flux/ActionConstants";
import { Dispatcher } from "./flux/Dispatcher";
import { Store } from "./flux/Store";

//Register View listner with Store - callback
var cbView = function (objCurrentState: any){
    document.getElementById('userName').innerText = objCurrentState.userName;
}

let objStore = new Store();
let objDispatcher = new Dispatcher();

//Register View listner with Store
objStore.RegisterView(cbView);

//Register Store with Dispatcher
objDispatcher.RegisterStore(objStore);

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
