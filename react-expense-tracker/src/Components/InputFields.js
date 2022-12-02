import React from 'react';

function InputFields() {
    return (
       <form>
            <div className="input-fields">
                <label htmlFor="type">Type: </label>
                <select name="type" id="type" required>
                    <option disabled selected value="">Select</option>
                    <option value="card">Card</option>
                    <option value="cash">Cash</option>
                    <option value="other">Other</option>
                </select>
                <label htmlFor="vendor">Vendor: </label>
                <input type="text" placeholder='What did you spend it on?' required/>
                <label htmlFor="date">Date: </label>
                <input type="date" required />
                <label htmlFor="amount">Amount: </label>
                <input type="number" placeholder='What did it cost?' step={.01} required/>
            </div>
       </form>
    )
};

export default InputFields;