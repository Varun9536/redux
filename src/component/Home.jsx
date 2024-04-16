
import { useDispatch } from "react-redux"
import { addDetail } from "./slice"

function Home() {

    const dispatch = useDispatch()

    const ondetail = ()=>
    {
        dispatch(addDetail({n : 20}))

    }
    return (
        <>
            <button onClick={ondetail}>submit</button>
        </>
    )
}

export default Home
