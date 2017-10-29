export interface Consent {
    name: string;
    email: string;
    options: ConsentAction;
}

export interface ConsentAction {
    oneCheck: boolean;
    twoCheck: boolean;
    threeCheck: boolean;
}
