import React, {useState, useEffect} from 'react';
import './index.css';
import Question from './components/Question';
import Form from './components/Form';
import List from './components/List';
import BudgetControl from './components/BudgetControl';

function App() {
	//define State
	const [ budget, setButget ] = useState(0);
	const [ remaining, setRemaining ] = useState(0);
  const [ showquestion, setShowQuestion ] = useState(true);
  const [expenditures, setExpenditures] = useState([]);
  const [expenditure, setExpenditure] = useState({});
  const [createexpediture, setCreateexpediture] = useState(false);

  //useEffect that updates the remaining
  useEffect(()=>{
    if(createexpediture){
      //add a new budget
      setExpenditures([
        ...expenditures,
        expenditure
      ])
      //remaining budget
      const remainingBudget = remaining - expenditure.quantity;
      setRemaining(remainingBudget);


      //reset false
      setCreateexpediture(false);
    }

  },[expenditure, setExpenditure, expenditures, remaining, createexpediture]);




	return (
		<div className="container">
			<header>
				<h1>Weekly expense</h1>
				<div className="contenido-principal contenido">
					{showquestion ? (
						<Question setButget={setButget} setRemaining={setRemaining} setShowQuestion={setShowQuestion} />
					) : (
						<div className="row">
							<div className="one-half column">
                <Form 
                  setExpenditure={setExpenditure} 
                  setCreateexpediture={setCreateexpediture}
                />
							</div>
							<div className="one-half column">
                <List
                  expenditures={expenditures}
                />
                <BudgetControl
                  budget={budget}
                  remaining={remaining}
                />
              </div>
						</div>
					)}
				</div>
			</header>
		</div>
	);
}

export default App;
