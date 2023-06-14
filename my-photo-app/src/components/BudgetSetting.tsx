type BudgetSettingProps = {
  budget: number;
  setBudget: (budget: number) => void;
};

export const BudgetSetting = (props: BudgetSettingProps) => {
  return (
    <div>
      <p>Your Budget: {props.budget}</p>
      <button
        onClick={() => {
          props.setBudget(props.budget + 1);
        }}
      >
        Add Budget
      </button>
    </div>
  );
};
