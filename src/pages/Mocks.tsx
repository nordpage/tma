import data from "../utils/mocks.json"
import React from "react";
import {mocksChild} from "./mocks.ts";



export function Mocks() {

    const [mocks, setMocks] = React.useState<mocksChild[]>([])

    React.useEffect(() => {
        setMocks(data);
    },[])

    const MocksList = () => {
        return <div className="friendList">{
            mocks.map((mock: mocksChild, index: number) => {
                return <div key={index}>{mock.full_name}</div>
            })
        }</div>
    }
    return (
        data && <div className="horz">
            {
                <MocksList/>
            }
        </div>
    )
}