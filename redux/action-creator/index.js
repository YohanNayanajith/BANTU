export const userLogin = (data) => {
    return (dispatch) => {
        dispatch({
            token:data.token,
            userID:data.userID,
            type:data.type
        });
    };
}


// export const withdrawMoney = (amount) => {
//     return (dispatch)=>{
//         dispatch({
//             type:"withdraw",
//             payload:amount
//         });
//     };
// }