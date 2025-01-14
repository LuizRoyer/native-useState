import { useState, useEffect } from "react";

export default function EditFruit({ selectedName }) {

    const [selectNameEdit, setSelectNameEdit] = useState(null)
    useEffect(() => {
        if (selectedName)
            fetch(`/${selectedName}.json`)
                .then((res) => res.json())
                .then((data) => setSelectNameEdit(data));
    }, [selectedName]);



    return <>
        { JSON.stringify(selectNameEdit)}
    </>
}