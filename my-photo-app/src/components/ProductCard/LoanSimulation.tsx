type LoanSimulationProps = {
  credit: number;
  customerBudget: number;
};

export const LoanSimulation = (props: LoanSimulationProps) => {
  const needLoan = props.credit > props.customerBudget;
  if (needLoan) {
    return <p>You need {props.credit - props.customerBudget} more credits </p>;
  } else {
    return <p>Buy now. </p>;
  }
};
