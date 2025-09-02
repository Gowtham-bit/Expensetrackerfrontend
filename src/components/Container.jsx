import { useState, useEffect } from "react";
import History from "./History";
import ExpenseForm from "./ExpenseForm";
import { toast } from "react-toastify";
import BalanceContainer from "./BalanceContainer";
const INITIAL = []
const Container = () => {
    const [transaction, settransaction] = useState(INITIAL);
    const [edititem,setedit]=useState(null)
    const addexpense = async (title, amount) => {
        await fetch("https://expensetrackerbackend-d057.onrender.com/addExpense",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({title,amount})
        })
        getAllExpense();
    }
    useEffect(() => {
        getAllExpense();
    }, [])
    const getAllExpense = async () => {
        const response = await fetch("https://expensetrackerbackend-d057.onrender.com/getExpenses");
        const data = await response.json();
        settransaction(data);
    }
    const deletetransaction = async (id) => {
       await fetch("https://expensetrackerbackend-d057.onrender.com/deleteExpense",{
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({id})
        })
        getAllExpense();
    }
    const edittransaction=(i)=>{
        setedit(i)
        console.log(edititem);
        
    }
    const updatexpense=(async (id,title,amount)=>{
        let result = await fetch("https://expensetrackerbackend-d057.onrender.com/updateExpense",{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({id, title,amount})
        })
        getAllExpense();
    })
    return (
        <div className="container">
            <h2>Expense Tracker</h2>
            <BalanceContainer transaction={transaction} />
            <History transaction={transaction} deletetransaction={deletetransaction} edittransaction={edittransaction} />
            <ExpenseForm addexpense={addexpense} edititem={edititem} updatexpense={updatexpense} setedit={setedit}/>
        </div>
    )
}
export default Container;