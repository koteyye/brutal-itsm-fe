import {search} from "../api/users.js";

export const searchObject = {
    job: (data) => search.searchJob(data),
    org: (data) => search.searchOrg(data)
}

export const useSearch = async(data, searchObject) => {

    try {
        return await searchObject(data)
    } catch (e) {
        return []
    }
}