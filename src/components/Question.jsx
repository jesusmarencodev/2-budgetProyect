import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types'


const Question = ({setButget, setRemaining, setShowQuestion}) => {

    //define state quantity
    const [quantity, setQuantity] = useState(0);

    //define state Error
    const [error, setError] = useState(false);

    //this function allows you to resd the budget
    const defineBudget = e => {
        setQuantity(parseInt(e.target.value))
    }
    //submit to define the budget
    const addBudget = (e) => {
        e.preventDefault();

        //valid
        if(quantity < 1 || isNaN(quantity) ){
            setError(true);
            return;
        }
        //valitation step
        setError(false);

        setButget(quantity);
        setRemaining(quantity);
        setShowQuestion(false);




    }

    return (
        <Fragment>
            <h2>Place yout budget</h2>
            {error ? <Error message={"The budget is incorrect"} /> : null}
            <form
                onSubmit={addBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Place your badget"
                    onChange={defineBudget}
                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Define budget"
                />
            </form>
        </Fragment>
    );
};

Question.propTypes ={
    setButget: PropTypes.func.isRequired,
    setRemaining : PropTypes.func.isRequired,
    setShowQuestion : PropTypes.func.isRequired,
}

export default Question;