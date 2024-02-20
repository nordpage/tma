import React, {useState} from "react";
import "../toggle.css"

type Props = {
    header: string,
    children: React.ReactNode
}

export function Toggle({header, children} : Props) {

    const [exandle, setExpandle] = useState(false)

    const onToggle = () => {
        setExpandle(!exandle)
    }

    return(
        <div className="container">
            <div className="header">{header} <input type="button" value="Show" onClick={onToggle}/></div>
            {exandle && <div>{children}</div>}
        </div>
    )
}