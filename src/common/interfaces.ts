import { LaunchState } from "./types";

export interface Launch {
  id: string;
  name: string;
  window_start: string;
  pad: Pod;
  launch_service_provider: LaunchServiceProvider;
  status: {
    abbrev: string;
  };
}

export interface LaunchServiceProvider {
  id: number;
  url: string;
  name: string;
  type: string;
}
export interface Pod {
  name: string;
  latitude: string;
  longitude: string;
}

export interface LaunchParams {
  start: string;
  end: string;
  launchState: LaunchState;
}

// {
//   "id": "621d64e6-0513-45dc-8ffa-c9fd56518398",
//   "url": "https://lldev.thespacedevs.com/2.2.0/launch/621d64e6-0513-45dc-8ffa-c9fd56518398/",
//   "slug": "falcon-9-block-5-inspiration4",
//   "name": "Falcon 9 Block 5 | Inspiration4",
//   "status": {
//     "id": 3,
//     "name": "Launch Successful",
//     "abbrev": "Success",
//     "description": "The launch vehicle successfully inserted its payload(s) into the target orbit(s)."
//   },
//   "last_updated": "2022-09-05T00:59:32Z",
//   "net": "2021-09-16T00:02:56Z",
//   "window_end": "2021-09-16T05:13:00Z",
//   "window_start": "2021-09-16T00:02:00Z",
//   "probability": 90,
//   "holdreason": "",
//   "failreason": "",
//   "hashtag": "Inspiration4",
//   "launch_service_provider": {
//     "id": 121,
//     "url": "https://lldev.thespacedevs.com/2.2.0/agencies/121/",
//     "name": "SpaceX",
//     "type": "Commercial"
//   },
//   "rocket": {
//     "id": 2825,
//     "configuration": {
//       "id": 164,
//       "url": "https://lldev.thespacedevs.com/2.2.0/config/launcher/164/",
//       "name": "Falcon 9",
//       "family": "Falcon",
//       "full_name": "Falcon 9 Block 5",
//       "variant": "Block 5"
//     }
//   },
//   "mission": {
//     "id": 1232,
//     "name": "Inspiration4",
//     "description": "Inspiration4 is the world’s first all-commercial astronaut mission to orbit. Jared Isaacman, founder and CEO of Shift4 Payments, is donating the three seats alongside him aboard Dragon to individuals from the general public - Medical Officer Hayley Arceneaux, a physician assistant at St. Jude Children’s Research Hospital and pediatric cancer survivor; Mission Specialist Chris Sembroski, an Air Force veteran and aerospace data engineer; and Mission Pilot Dr. Sian Proctor, a geoscientist, entrepreneur, and trained pilot.\r\nThe Inspiration4 crew received commercial astronaut training by SpaceX on the Falcon 9 launch vehicle and Dragon spacecraft, orbital mechanics, operating in microgravity, zero gravity, and other forms of stress testing. They will go through emergency preparedness training, spacesuit and spacecraft ingress and egress exercises, as well as partial and full mission simulations.\r\nThe Crew Dragon spacecraft will remain in a 575 km high orbit for three days before reentering Earth's atmosphere for a soft water landing off the coast of Florida. During their multi-day journey in orbit, the Inspiration4 crew will conduct scientific research designed to advance human health on Earth and during future long-duration spaceflights. For this mission, Crew Dragon is configured to feature an observation dome in place of docking port to provide views to the crew.",
//     "launch_designator": null,
//     "type": "Human Exploration",
//     "orbit": {
//       "id": 8,
//       "name": "Low Earth Orbit",
//       "abbrev": "LEO"
//     }
//   },
//   "pad": {
//     "id": 87,
//     "url": "https://lldev.thespacedevs.com/2.2.0/pad/87/",
//     "agency_id": null,
//     "name": "Launch Complex 39A",
//     "info_url": null,
//     "wiki_url": "https://en.wikipedia.org/wiki/Kennedy_Space_Center_Launch_Complex_39#Launch_Pad_39A",
//     "map_url": "http://maps.google.com/maps?q=28.608+N,+80.604+W",
//     "latitude": "28.60822681",
//     "longitude": "-80.60428186",
//     "location": {
//       "id": 27,
//       "url": "https://lldev.thespacedevs.com/2.2.0/location/27/",
//       "name": "Kennedy Space Center, FL, USA",
//       "country_code": "USA",
//       "map_image": "https://nyc3.digitaloceanspaces.com/spacelaunchnow-prod-east/media/launch_images/location_27_20200803142447.jpg",
//       "total_launch_count": 206,
//       "total_landing_count": 0
//     },
//     "map_image": "https://nyc3.digitaloceanspaces.com/spacelaunchnow-prod-east/media/launch_images/pad_87_20200803143537.jpg",
//     "total_launch_count": 149,
//     "orbital_launch_attempt_count": 147
//   },
//   "webcast_live": true,
//   "image": "https://nyc3.digitaloceanspaces.com/spacelaunchnow-prod-east/media/launch_images/falcon2520925_image_20210914155606.jpeg",
//   "infographic": "https://nyc3.digitaloceanspaces.com/spacelaunchnow-prod-east/media/launch_images/falcon2520925_infographic_20210911160456.jpg",
//   "program": [],
//   "orbital_launch_attempt_count": 6116,
//   "location_launch_attempt_count": 191,
//   "pad_launch_attempt_count": 134,
//   "agency_launch_attempt_count": 144,
//   "orbital_launch_attempt_count_year": 103,
//   "location_launch_attempt_count_year": 9,
//   "pad_launch_attempt_count_year": 9,
//   "agency_launch_attempt_count_year": 27
// },
