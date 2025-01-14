import { useState, useMemo } from "react";
import SortedList from "./SortedList";


function UseMemoAndUseCallback() {

    const [numbers] = useState([10, 20, 30, 40])

    const total = useMemo(() =>
        numbers.reduce((totalValue, number) => totalValue + number, 0),
        [numbers])


    const [names] = useState(["luiz", "felipe", "claudia", "fernando"])
   

    return (
        <div>
            <h1>UseMemo and UseCallback</h1>

            total : {total}<br/>
            <>Names: {names.join(", ")}</>
            <br/>
            <SortedList list={names}/>
        </div>
       
    );
}

export default UseMemoAndUseCallback