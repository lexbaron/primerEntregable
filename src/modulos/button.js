

function Button ({click, backgroundColor}){
    return(
        <div >
            <button onClick={click} style ={{background: backgroundColor }}><i className="fa-solid fa-angle-right"></i></button>
        </div>
    )
}

export default Button

