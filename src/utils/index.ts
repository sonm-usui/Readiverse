import { APIErrorResponse, APIResponse } from "../models/misc";

export const commonResponseHandler = async <R, K extends keyof R, E = never>(
    response: Promise<APIResponse<R> | APIErrorResponse<E>>,
    key: K | null,
    thunk: any,
) => {
    const { data, error } = await response;
    if (data) {
        return key ? data?.[key] : data;
    } else {
        return thunk.rejectWithValue(error.errors);
    }
};
