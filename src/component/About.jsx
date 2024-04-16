import { useSelector } from "react-redux"

function About() {
    const x = useSelector((state) => {
        return state.value
    })

    return (
        <>
            <h1>{x}</h1>
        </>
    )
}

export default About
