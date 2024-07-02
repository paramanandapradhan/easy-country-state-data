export type State = {
    _id: string;
    name: string;
    countryId: string;
};
export declare function getStates(countryId?: string): State[];
