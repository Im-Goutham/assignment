import type { Launch, LaunchParams } from "../common/interfaces";

export const getLaunches = ({
  start,
  end,
  launchState,
}: LaunchParams): Promise<{ data: Launch[]; error: Object | null }> => {
  return fetch(
    `${process.env.REACT_APP_API}/2.2.0/launch/?window_end__gte=${start}&window_end__lte=${end}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (launchState) {
        const newData = data.results.filter(
          ({ status }: { status: string }) => status == launchState
        );

        return {
          data: newData,
          error: null,
        };
      }
      return { data: data.results, error: "" };
    })
    .catch((error) => {
      return { data: [], error: error };
    });
};
