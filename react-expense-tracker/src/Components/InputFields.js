import React from 'react';


function InputFields() {

    const handleChange = (event) => {
        console.log(event.target.value);
    }

    const handleClick = () => {
        console.log(handleChange);
    }


    return (
       <form>
            <div className="input-fields">
                <label htmlFor="type">Type: </label>
                <select name="type" id="type" defaultValue={ 'Select' } required>
                    <option disabled defaultValue={ 'Select' }>Select</option>
                    <option value={ 'card' }>Card</option>
                    <option value={ 'cash' }>Cash</option>
                    <option value={ 'other' }>Other</option>
                </select>
                <label htmlFor="vendor" >Vendor: </label>
                <input type="text" placeholder="Name of Vendor" onChange={handleChange} required />
                <label htmlFor="date">Date: </label>
                <input type="date" required />
                <label htmlFor="amount">Amount: </label>
                <input type="number" placeholder='What did it cost?' step={ .01 } required/>
            </div>
            <div>
                <button onClick={handleClick}>Run Expenses</button>
            </div>
       </form>
    )
};

export default InputFields;

//Test Case

//Grab input fields values

//Step 1: User types in values
//Expected: Values show up on screen
//Actual: It works

//Step 2: User presses Run Expenses
//Expected: Values show up on ExpenseTable.js
//Actual: Does not work

//Step 3: