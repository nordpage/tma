import data from "../utils/mocks.json"
import React, {Suspense} from "react";
import {mocksChild} from "./mocks.ts";



export function Mocks() {

    const [mocks, setMocks] = React.useState<mocksChild[]>([])

    React.useEffect(() => {
        setMocks(data);
    },[])

    const MocksList = () => {
        return <Suspense fallback={<div>Loading...</div>}>
            <div className="horz">{
                mocks.map((mock: mocksChild, index: number) => {
                    return <div key={index} className="card">
                        <img src={mock.profile_pic}/>
                        <p>{mock.full_name}</p>
                    </div>
                })
            }</div>
            <div className="horz">{
                mocks.map((mock: mocksChild, index: number) => {
                    return <div key={index} className="card">
                        <img src={mock.profile_pic}/>
                        <p>{mock.full_name}</p>
                    </div>
                })
            }</div>
            <div className="horz">{
                mocks.map((mock: mocksChild, index: number) => {
                    return <div key={index} className="card">
                        <img src={mock.profile_pic}/>
                        <p>{mock.full_name}</p>
                    </div>
                })
            }</div>
        </Suspense>
    }
    return (
        data && <div className="horz">
            {
                <MocksList/>
            }
        </div>
    )
}