import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

const Form = ({setExpenditure, setCreateexpediture}) => {
    const [expensivename, setExpensiveName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [error, setError] = useState(false);

        const addExpensive = e => {
            e.preventDefault();

            //valid
            if(quantity < 1 || isNaN(quantity) ||  expensivename.trim() === ''){
                setError(true);
                return;
            }
            setError(false);
            //create object
            const expenditure = {
                expensivename,
                quantity,
                id: shortid.generate()
            } 
            //send to expense
            setExpenditure(expenditure);
            setCreateexpediture(true);

            console.log(expenditure)
            //reset form
            setExpensiveName('');
            setQuantity(0);

        }
    return (
        <form onSubmit= {addExpensive}>
            <h2>Add your expenses here</h2>
            {error ? <Error message={"Both fields are mandatory"} /> : null}
            <div className="campo">
                <label htmlFor="expensiveName">Expensive name</label>
                <input
                    className="u-full-width"
                    placeholder="example Transport"
                    type="text"
                    value={expensivename}
                    onChange={e => setExpensiveName(e.target.value)}
                />
            </div>
            <div className="campo">
                <label htmlFor="amountSpent">Amount spent</label>
                <input
                    className="u-full-width"
                    placeholder="example 300"
                    type="number"
                    value={ quantity }
                    onChange = {e => setQuantity(parseInt(e.target.value))}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Add expensive"/>

        </form>
    );
};

export default Form;