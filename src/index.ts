import { data } from "./data";

export type State = {
    _id: string,
    name: string,
    countryId: string,
}

export function getStates(countryId?: string): State[] {
    let res = (data || []).map((item) => {
        return {
            _id: item[0] || '',
            name: item[1] || '',
            countryId: item[2] || '',
        }
    })
    if (countryId && res?.length) {
        res = res.filter((state) => state.countryId === countryId)
    }
    return res;
}

export function getState(stateId?: string): State | null {
    let res = (data || []).map((item) => {
        return {
            _id: item[0] || '',
            name: item[1] || '',
            countryId: item[2] || '',
        }
    })
    if (stateId && res?.length) {
        return res.find((state) => state._id === stateId)
    }
    return null
}


