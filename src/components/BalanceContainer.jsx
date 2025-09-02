import { useEffect, useState } from "react"

const BalanceContainer = (props) => {
    const {transaction}=props
    const[income,setincome]=useState(0)
    const[expense,setexpense]=useState(0)
    const[balance,setbalance]=useState(0)
    useEffect(()=>{
        let i=0
        let e=0
        transaction.forEach((t)=>{
            if(t.amount>0)
                i+=Number(t.amount)
            else
                e-=Number(t.amount)
        })
        setincome(i)
        setexpense(e)
        setbalance(i-e)
    },[transaction])    
    return (
        <div className="balancecontainer">
            <div className="currencyitem">
                <div className="title">Income</div>
                <div className="amount green">${income}</div>
            </div>
            <div className="currencyitem">
                <div className="title">Expense</div>
                <div className="amount red">${expense}</div>
            </div>
            <div className="currencyitem">
                <div className="title">balance</div>
                <div className="amount">${balance}</div>
            </div>
        </div>
    )
}
export default BalanceContainer;