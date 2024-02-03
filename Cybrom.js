import { useSelector } from "react-redux";
import { Increment, Decrement } from "./CounterSlice";
import { useDispatch } from "react-redux";



const Cybrom = () => {
    const myval = useSelector((state) => state.mycounter.cnt);
    const mydis = useDispatch();
    return (
        <>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"40vh"}}>
                <div>
                    <h1>My Counter Programm</h1>
                    <button onClick={() => { mydis(Increment()) }}>Increment</button>
                    <h1>{myval}</h1>
                    <button onClick={() => { mydis(Decrement()) }}>Decrement</button>
                </div>
            </div>
        </>
    );
}
export default Cybrom;