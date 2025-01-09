
//const numbers = [10,20,30]
//const total =numbers.reduce((currentValue, numberOFArray) => currentValue + numberOFArray, 0)

import ReduceListName from "./ReduceListName";
import UserForm from "./UserForm";

function AppReducer() {
    return (
        <>
        <h1>Use Reducer</h1>
       <ReduceListName />
       <br/>
       <UserForm />
        </>
    );
}

export default AppReducer