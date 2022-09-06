import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { Launch, Pod } from "../../common/interfaces";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

type MapChartProps = {
  launches: Launch[];
  setTooltipContent: (data: Launch | null) => void;
};

const MapChart = ({ launches, setTooltipContent }: MapChartProps) => {
  return (
    <div data-tip="">
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        {launches.map((launch, key) => {
          return (
            <Marker
              key={key}
              coordinates={[parseInt(launch.pad.longitude), parseInt(launch.pad.latitude)]}
            >
              <circle
                r={8}
                fill="#F53"
                onMouseEnter={() => {
                
                  setTooltipContent(launch);
                }}
                onMouseLeave={() => {
                  setTooltipContent(null);
                }}
              />
            </Marker>
          );
        })}
      </ComposableMap>
    </div>
  );
};

export default MapChart;
