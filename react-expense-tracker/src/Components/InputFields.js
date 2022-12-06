import React from 'react';
import { useState } from 'react';
import Table from './ExpenseDisplay';


function InputFields() {

    const [input, setInput] = useState([
        { type: '', vendor:'', date:'', amount:''}
    ]);
   

    const handleClick = (event) => {
        
    }


    return (
        <>
            <form>
                <div className="input-fields">
                    <label htmlFor="type">Type: </label>
                    <select name="type" id="type" defaultValue={ 'Select' } value={ input.type } onChange={e => setInput({ ...input, type: e.target.value })} required>
                        <option disabled defaultValue={ 'Select' }>Select</option>
                        <option value={ 'card' }>Card</option>
                        <option value={ 'cash' }>Cash</option>
                        <option value={ 'other' }>Other</option>
                    </select>
                    <label htmlFor="vendor" >Vendor: </label>
                    <input type="text" placeholder="Name of Vendor" value={input.vendor} onChange={e => setInput({ ...input, vendor: e.target.value })} required />
                    <label htmlFor="date">Date: </label>
                    <input type="date" value={input.date} onChange={e => setInput({ ...input, date: e.target.value })} required />
                    <label htmlFor="amount">Amount: </label>
                    <input type="number" placeholder='What did it cost?' step={ .01 } value={input.amount} onChange={e => setInput({ ...input, amount: e.target.value})} required/>
                </div>
                <div>
                    <button onClick={handleClick}>Run Expenses</button>
                </div>
            </form>
            <div>
                <Table 
                type={input.type}
                vendor={input.vendor}
                date={input.date}
                amount={input.amount}
                />
            </div>
        </>
    )
};

export default InputFields;

