import React from 'react';
import { useState } from 'react';
import Display from './ExpenseDisplay';


function InputFields() {

    const [amount, setAmount] = useState('')
    console.log(amount);

    const handleChange = (event) => {
        console.log(event.target.value);
        setAmount(event.target.value); 
        
    }

    const handleClick = () => {
        console.log(amount)
    }


    return (
        <>
            <form>
                <div className="input-fields">
                    <label htmlFor="type">Type: </label>
                    <select name="type" id="type" defaultValue={ 'Select' } onChange={handleChange} required>
                        <option disabled defaultValue={ 'Select' }>Select</option>
                        <option value={ 'card' }>Card</option>
                        <option value={ 'cash' }>Cash</option>
                        <option value={ 'other' }>Other</option>
                    </select>
                    <label htmlFor="vendor" >Vendor: </label>
                    <input type="text" placeholder="Name of Vendor" onChange={handleChange} required />
                    <label htmlFor="date">Date: </label>
                    <input type="date" onChange={handleChange} required />
                    <label htmlFor="amount">Amount: </label>
                    <input type="number" placeholder='What did it cost?' step={ .01 } onChange={handleChange} required/>
                </div>
                <div>
                    <button onClick={handleClick}>Run Expenses</button>
                </div>
            </form>
            <div>
                <Display amount={amount}/>
            </div>
        </>
    )
};

export default InputFields;

