import { toast } from "react-toastify"

const ExpenseItem=(props)=>{
    const {i,deletetransaction,edittransaction}=props
    const{id,title,amount}=i
    const classname=amount >0?"positive":"negative"
    const handlerdelete=()=>{
        deletetransaction(i._id)
        toast.info("deleted successfully")
    }
    const handleredit=()=>{
        edittransaction(i)
    }
    return(
        <div className={`expenseitem ${classname}`}>
        <span className="title">{title}</span>
        <span className="amount">{amount}</span>
        <div className="btncontainer">
            <button onClick={handleredit}>edit</button>
            <button onClick={handlerdelete}>delete</button>
        </div>
        </div>
    )
}
export default ExpenseItem;