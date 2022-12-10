import React from 'react';
import { useState } from 'react';
import Table from './ExpenseDisplay';


function InputFields() {

    const [expenseArray, setExpenseArray] = useState([]);
    const [expense, setExpense] = useState(
        {
            type:'Select',
            vendor:'',
            date:'',
            amount:'',

        }
    );

    const handleChange = (e) => {
        e.preventDefault();
        setExpense({
            ...expense,
            [e.target.id]: e.target.value,
        })
    };

    const handleClick = (e) => {
        e.preventDefault();
        const newExpenseArray = expenseArray.map((singleExpense) => {
            return singleExpense
        });
        newExpenseArray.push(expense);
        setExpenseArray(newExpenseArray);
        clearFields();
    
    };

    const clearFields = () => {
        setExpense(
        {
            type:'Select',
            vendor:'',
            date:'',
            amount:'',
        })
    }

    return (
        <>
            <form>
                <div className="input-fields">
                    <label htmlFor="type">Type: </label>
                    <select 
                        name="type" 
                        id="type" 
                        defaultValue={ 'Select' } 
                        value={ expense.type } 
                        onChange={handleChange} 
                        required
                    >
                        <option disabled defaultValue={ 'Select' }>Select</option>
                        <option value={ 'Card' }>Card</option>
                        <option value={ 'Cash' }>Cash</option>
                        <option value={ 'Other' }>Other</option>
                    </select>
                    <label htmlFor="vendor" >Vendor: </label>
                    <input 
                        type="text" 
                        id="vendor" 
                        placeholder="Name of Vendor" 
                        value={ expense.vendor } onChange={handleChange} 
                        required />
                    <label htmlFor="date">Date: </label>
                    <input type="date" id="date" value={expense.date} onChange={handleChange} required />
                    <label htmlFor="amount">Amount: </label>
                    <input type="number" id="amount"placeholder='What did it cost?' step={ .01 } value={expense.amount} onChange={handleChange} required/>
                </div>
                <div>
                    <button onClick={handleClick}>Log Expense</button>
                </div>
            </form>
            <div>
                <Table 
                expenseArray={expenseArray}
                />
            </div>
        </>
    )
};

export default InputFields;