export const updateUserInfo =(payload)=>{
    return{
        type: "UPDATE_USERINFO",
        value: payload

    }
}

export const updateLogStatus =(payload)=>{
    return{
        type: "UPDATE_STATUS",
        value: payload

    }
}

export const updateMap =(payload)=>{
    return{
        type: "UPDATE_MAP",
        value: payload

    }
}

export const updateList =(payload)=>{
    return{
        type: "UPDATE_LIST",
        value: payload

    }
}

export const deleteListing =(index)=>{
    return{
        type: "DELETE_LISTING",
        value: index

    }
}

