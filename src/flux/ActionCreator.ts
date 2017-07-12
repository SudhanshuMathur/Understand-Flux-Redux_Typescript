export class ActionCreator {
    CreateAction(actionString: string, value: any) {
        return {
            type: actionString,
            value: value
        };
    }
}
