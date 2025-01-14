import { useMemo } from "react";

function SortedList({list}){


    const sortedList = useMemo(() => [...list].sort(), [list])

    return  (<>{sortedList.join(", ")}</>)
}


export default SortedList