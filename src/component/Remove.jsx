import { useSelector, useDispatch } from "react-redux"
import { removeDetail } from "./slice"

export default function Remove() {
    const a = useSelector(state => state.value)
    const dispatch = useDispatch()

    const removev = () => {
        let b = 20
        dispatch(removeDetail(b))

    }
    return (
        <div>

            <button onClick={removev}>submit</button>
            <h2>{a}</h2>
        </div>
    ) 
}
