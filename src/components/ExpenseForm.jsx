import { useEffect, useState } from "react"
import { toast } from "react-toastify";

const ExpenseForm = (props) => {
    const { addexpense, edititem, updatexpense ,setedit} = props;
    const [title, settitle] = useState("")
    const [amount, setamount] = useState("")
    useEffect(() => {
        settitle(edititem?.title || "")
        setamount(edititem?.amount || "")
    }, [edititem])
    const handlertitle = (e) => {
        settitle(e.target.value)
    }
    const handleramount = (e) => {
        setamount(e.target.value)
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(edititem);
        
        if(edititem)
        {
            updatexpense(edititem._id,title,amount)
            setedit(null)
        }
        else if (title && amount) {
            addexpense(title, amount);
            toast.info("added successfully")
        }
        else
            toast.warning("add title and amount propely")
        settitle("")
        setamount("")
    }
    return (
        <div className="expenseform">
            <h4>{edititem ? "Edit Transactin" : "Add Transaction"}</h4>
            <form onSubmit={handlesubmit}>
                <div className="in">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" placeholder="enter title" name="title" value={title} onChange={handlertitle} />
                </div>
                <div className="in">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" id="amount" placeholder="enter amount" name="amount" value={amount} onChange={handleramount} />
                </div>
                <div>
                    <button type="submit">submit</button>
                </div>
            </form>
        </div>
    )
}
export default ExpenseForm