import { useEffect, useState } from "react";
import { getLaunches } from "./services/launches";
import "./App.scss";
import MapChart from "./components/MapChart";
import { Launch } from "./common/interfaces";
import DateTimeSelect from "./components/DateTimeSelect";
import { getDateAfterThirtyDays, getFormattedDate } from "./common/utils";
import ReactTooltip from "react-tooltip";
import DropDown from "./components/DropDown";
import { LaunchState } from "./common/types";

function App() {
  const [loading, setLoading] = useState<Boolean>(false);
  const [launches, setLaunches] = useState<Launch[]>([]);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(getDateAfterThirtyDays());
  const [content, setContent] = useState<Launch | null>(null);
  const [launchState, setLaunchState] = useState<LaunchState>("");

  useEffect(() => {
    getLaunchesList();
  }, []);

  useEffect(() => {
    getLaunchesList();
  }, [startDate, endDate]);

  const getLaunchesList = async () => {
    setLoading(true);
    const { data, error } = await getLaunches({
      start: getFormattedDate(startDate),
      end: getFormattedDate(endDate),
      launchState: launchState,
    });
    if (error) {
      alert("Something went wrong...");
    } else {
      setLaunches(data);
    }

    setLoading(false);
  };

  const handleLaunchStateChange = (value: LaunchState) => {
    setLaunchState(value);
    getLaunchesList();
  };

  return (
    <div className="App">
      <div className="action-container">
        <DateTimeSelect
          label="State Date"
          value={startDate}
          onChange={(val) => setStartDate(val)}
        />
        <DateTimeSelect
          label="End Date"
          value={endDate}
          onChange={(val) => setEndDate(val)}
        />
        <DropDown
          label="Select Success/Failure"
          onChange={handleLaunchStateChange}
          value={launchState}
          options={[
            { id: "Success", value: "Success" },
            { id: "Failure", value: "Failure" },
          ]}
        />
      </div>

      {loading ? (
        "Loading..."
      ) : (
        <>
          {launches.length > 0 && (
            <MapChart launches={launches} setTooltipContent={setContent} />
          )}
          {content && (
            <ReactTooltip className="tooltip">
              <span>Name: {content.name}</span>
              <br />
              <span>Time of launch : {content.window_start}</span>
              <br />
              <span>Launch pad : {content.pad.name}</span>
              <br />
              <span>Agency : {content.launch_service_provider.name}</span>
            </ReactTooltip>
          )}
        </>
      )}
    </div>
  );
}

export default App;
