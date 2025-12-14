export type State = {
    _id: string;
    name: string;
    countryId: string;
};
export declare function getStates(countryId?: string): State[];
export declare function getState(stateId?: string): State | null;
