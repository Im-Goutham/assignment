import { LaunchState } from "../../common/types";

type DropDownProps = {
  label: string;
  value: string;
  options: { id: string; value: string }[];
  onChange: (val: LaunchState) => void;
};

function DropDown({ label, value, options, onChange }: DropDownProps) {
  const handleChange = (e: any) => {
    onChange(e.target.value);
  };
  return (
    <div className="date-container">
      <label>{label}</label>
      <select value={value} onChange={handleChange}>
        <option value={""}>Select option</option>
        {options.map(({ id, value }: { id: string; value: string }) => {
          return <option value={id}>{value}</option>;
        })}
      </select>
    </div>
  );
}

export default DropDown;
