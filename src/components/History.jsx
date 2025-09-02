import ExpenseItem from "./ExpenseItem";

const History = (props) => {
    const { transaction,deletetransaction,edittransaction} = props

    return (

        <div className="history">
        <h3>History</h3>
        {transaction.map((i)=>{
            return <ExpenseItem key={i.id} i={i} deletetransaction={deletetransaction} edittransaction={edittransaction}/>
        })}
        </div>

    )
}
export default History;