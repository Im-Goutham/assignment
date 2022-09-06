import DateTimePicker from "react-datetime-picker";
import './DateTimeSelect.scss'

type DateTimeSelectProps = {
  label: string;
  value: Date;
  onChange: (val: Date) => void;
};
function DateTimeSelect({ label, value, onChange }: DateTimeSelectProps) {
  return (
    <div className="date-container">
      <label>{label}</label>
      <DateTimePicker onChange={onChange} value={value} />
    </div>
  );
}

export default DateTimeSelect;
