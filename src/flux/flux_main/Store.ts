
export class Store {
    protected objState: any;
    private cbViews: any[];

    constructor(objDispatcher: any) {
        console.log("Store - constructor");
        this.objState = this.GetInitialState();
        this.cbViews = new Array();

        objDispatcher.RegisterStore(this.HandleAction.bind(this));

    }

    GetInitialState() {
        console.log("Store - GetInitialState");
         throw new Error("subclass must ovveride getInitialState() method");
    }

    RegisterView(cbView: any) {
        console.log("Store - RegisterView");
        this.cbViews.push(cbView);
    }

    HandleAction(objAction: any) {
        console.log("Store - HandleAction");
        throw new Error("subclass must ovveride HandleAction() method");
    }

    UpdateViews() {
        console.log("Store - UpdateViews");
        this.cbViews.forEach(cbView => cbView(this.objState));
    }
}