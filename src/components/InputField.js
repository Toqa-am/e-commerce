export default function InputField(props){


    return(
        <>
        <div className="mb-3 ">
                    <label htmlFor={props.for} className="form-label">{props.label} </label>
                    <input 
                    type={props.type} 
                    id={props.for}
                    className={`form-control ${props.err ? "border-danger" : "border-success"}`}  
                    value={props.val}
                    // (e) => changeData(e)
                    onChange={props.chg}
                    name={props.name}
                    pattern={props.pattern||null}
                    
                    />
                    <p className="text-danger"> {props.err}</p>
        </div>
        </>
    )
}