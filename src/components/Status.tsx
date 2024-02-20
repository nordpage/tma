import "../status.css"

type Props = {
    type: number
}

export const Status = ({type} : Props) => {
    const Circle = () => {
        switch (type) {
            case 0:
                return <div className="circle offline"/>;
            case 1:
                return <div className="circle online"/>;
            case 2:
            case 3:
                return <div className="circle busy"/>;
            default:
                return <div className="circle default"/>;
        }
    }

    return (
        <Circle/>
    )
}