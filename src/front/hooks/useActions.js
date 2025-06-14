import useGlobalReducer from "./useGlobalReducer"

export const useActions = () => {
    const {store, dispatch} = useGlobalReducer();

    const test = () => {
        dispatch({
            type: "set_hello",
            payload: "test"
        })
    }

    return {
        test
    }
}