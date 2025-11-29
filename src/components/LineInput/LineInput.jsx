import "./LineInput.css"
function LineInput({printmsg, setdata})
{
    return(<span>
        <input className="line-input-box" type="number" placeholder={printmsg} onChange={(e)=>
            {
                setdata(Number(e.target.value));
            }
        }></input>
    </span>)
}

export {LineInput}