const url: string = process.env.REACT_APP_API || ""
export const geoCodes = [
  {
    "lat": 44.5,
    "long": -89.5,
    "mi": 172.5,
    "state": "US-WI",
    "count": 87
  },
  {
    "lat": 39,
    "long": -80.5,
    "mi": 105,
    "state": "US-WV",
    "count": 27
  },
  {
    "lat": 44,
    "long": -72.699997,
    "mi": 75,
    "state": "US-VT",
    "count": 10
  },
  {
    "lat": 31,
    "long": -100,
    "mi": 385,
    "state": "US-TX",
    "count": 437
  },
  {
    "lat": 44.5,
    "long": -100,
    "mi": 173,
    "state": "US-SD",
    "count": 14
  },
  {
    "lat": 41.700001,
    "long": -71.5,
    "mi": 25,
    "state": "US-RI",
    "count": 16
  },
  {
    "lat": 44,
    "long": -120.5,
    "mi": 220,
    "state": "US-OR",
    "count": 63
  },
  {
    "lat": 43,
    "long": -75,
    "mi": 160,
    "state": "US-NY",
    "count": 293
  },
  {
    "lat": 44,
    "long": -71.5,
    "mi": 81,
    "state": "US-NH",
    "count": 21
  },
  {
    "lat": 41.5,
    "long": -100,
    "mi": 200,
    "state": "US-NE",
    "count": 29
  },
  {
    "lat": 38.5,
    "long": -98,
    "mi": 200,
    "state": "US-KS",
    "count": 44
  },
  {
    "lat": 33,
    "long": -90,
    "mi": 112.5,
    "state": "US-MS",
    "count": 45
  },
  {
    "lat": 40,
    "long": -89,
    "mi": 176.5,
    "state": "US-IL",
    "count": 193
  },
  {
    "lat": 39,
    "long": -75.5,
    "mi": 40,
    "state": "US-DE",
    "count": 14
  },
  {
    "lat": 41.599998,
    "long": -72.699997,
    "mi": 45,
    "state": "US-CT",
    "count": 53
  },
  {
    "lat": 34.799999,
    "long": -92.199997,
    "mi": 127.5,
    "state": "US-AR",
    "count": 46
  },
  {
    "lat": 40.273502,
    "long": -86.126976,
    "mi": 125,
    "state": "US-IN",
    "count": 101
  },
  {
    "lat": 38.573936,
    "long": -92.60376,
    "mi": 140,
    "state": "US-MO",
    "count": 92
  },
  {
    "lat": 27.994402,
    "long": -81.760254,
    "mi": 265,
    "state": "US-FL",
    "count": 323
  },
  {
    "lat": 39.876019,
    "long": -117.224121,
    "mi": 235,
    "state": "US-NV",
    "count": 47
  },
  {
    "lat": 45.367584,
    "long": -68.972168,
    "mi": 150,
    "state": "US-ME",
    "count": 20
  },
  {
    "lat": 44.182205,
    "long": -84.506836,
    "mi": 225,
    "state": "US-MI",
    "count": 151
  },
  {
    "lat": 33.247875,
    "long": -83.441162,
    "mi": 157,
    "state": "US-GA",
    "count": 160
  },
  {
    "lat": 19.741755,
    "long": -155.844437,
    "mi": 200,
    "state": "US-HI",
    "count": 22
  },
  {
    "lat": 66.160507,
    "long": -153.369141,
    "mi": 700,
    "state": "US-AK",
    "count": 11
  },
  {
    "lat": 35.860119,
    "long": -86.660156,
    "mi": 185,
    "state": "US-TN",
    "count": 104
  },
  {
    "lat": 37.926868,
    "long": -78.024902,
    "mi": 185,
    "state": "US-VA",
    "count": 129
  },
  {
    "lat": 39.833851,
    "long": -74.871826,
    "mi": 75,
    "state": "US-NJ",
    "count": 135
  },
  {
    "lat": 37.839333,
    "long": -84.27002,
    "mi": 155,
    "state": "US-KY",
    "count": 68
  },
  {
    "lat": 47.650589,
    "long": -100.437012,
    "mi": 166,
    "state": "US-ND",
    "count": 12
  },
  {
    "lat": 46.39241,
    "long": -94.63623,
    "mi": 175,
    "state": "US-MN",
    "count": 85
  },
  {
    "lat": 36.084621,
    "long": -96.921387,
    "mi": 207.5,
    "state": "US-OK",
    "count": 60
  },
  {
    "lat": 46.96526,
    "long": -109.533691,
    "mi": 267.5,
    "state": "US-MT",
    "count": 16
  },
  {
    "lat": 47.751076,
    "long": -120.740135,
    "mi": 210,
    "state": "US-WA",
    "count": 115
  },
  {
    "lat": 39.41922,
    "long": -111.950684,
    "mi": 167.5,
    "state": "US-UT",
    "count": 48
  },
  {
    "lat": 39.113014,
    "long": -105.358887,
    "mi": 190,
    "state": "US-CO",
    "count": 87
  },
  {
    "lat": 40.367474,
    "long": -82.996216,
    "mi": 112.5,
    "state": "US-OH",
    "count": 176
  },
  {
    "lat": 32.31823,
    "long": -86.902298,
    "mi": 142.5,
    "state": "US-AL",
    "count": 74
  },
  {
    "lat": 42.032974,
    "long": -93.581543,
    "mi": 152.5,
    "state": "US-IA",
    "count": 48
  },
  {
    "lat": 34.307144,
    "long": -106.018066,
    "mi": 180,
    "state": "US-NM",
    "count": 32
  },
  {
    "lat": 33.836082,
    "long": -81.163727,
    "mi": 115,
    "state": "US-SC",
    "count": 77
  },
  {
    "lat": 41.203323,
    "long": -77.194527,
    "mi": 137.5,
    "state": "US-PA",
    "count": 192
  },
  {
    "lat": 34.048927,
    "long": -111.093735,
    "mi": 197.5,
    "state": "US-AZ",
    "count": 110
  },
  {
    "lat": 39.045753,
    "long": -76.641273,
    "mi": 102.5,
    "state": "US-MD",
    "count": 91
  },
  {
    "lat": 42.407211,
    "long": -71.382439,
    "mi": 77.5,
    "state": "US-MA",
    "count": 105
  },
  {
    "lat": 36.778259,
    "long": -119.417931,
    "mi": 350,
    "state": "US-CA",
    "count": 596
  },
  {
    "lat": 44.068203,
    "long": -114.742043,
    "mi": 240,
    "state": "US-ID",
    "count": 27
  },
  {
    "lat": 43.07597,
    "long": -107.290283,
    "mi": 177.5,
    "state": "US-WY",
    "count": 8
  },
  {
    "lat": 35.782169,
    "long": -80.793457,
    "mi": 210,
    "state": "US-NC",
    "count": 158
  },
  {
    "lat": 30.39183,
    "long": -92.329102,
    "mi": 177.5,
    "state": "US-LA",
    "count": 70
  }
]

export const stateCodes: Record<string, string> = {
  "US-AL": "Alabama",
  "US-AK": "Alaska",
  "US-AS": "American Samoa",
  "US-AZ": "Arizona",
  "US-AR": "Arkansas",
  "US-CA": "California",
  "US-CO": "Colorado",
  "US-CT": "Connecticut",
  "US-DE": "Delaware",
  "US-DC": "District Of Columbia",
  "US-FM": "Federated States Of Micronesia",
  "US-FL": "Florida",
  "US-GA": "Georgia",
  "US-GU": "Guam",
  "US-HI": "Hawaii",
  "US-ID": "Idaho",
  "US-IL": "Illinois",
  "US-IN": "Indiana",
  "US-IA": "Iowa",
  "US-KS": "Kansas",
  "US-KY": "Kentucky",
  "US-LA": "Louisiana",
  "US-ME": "Maine",
  "US-MH": "Marshall Islands",
  "US-MD": "Maryland",
  "US-MA": "Massachusetts",
  "US-MI": "Michigan",
  "US-MN": "Minnesota",
  "US-MS": "Mississippi",
  "US-MO": "Missouri",
  "US-MT": "Montana",
  "US-NE": "Nebraska",
  "US-NV": "Nevada",
  "US-NH": "New Hampshire",
  "US-NJ": "New Jersey",
  "US-NM": "New Mexico",
  "US-NY": "New York",
  "US-NC": "North Carolina",
  "US-ND": "North Dakota",
  "US-MP": "Northern Mariana Islands",
  "US-OH": "Ohio",
  "US-OK": "Oklahoma",
  "US-OR": "Oregon",
  "US-PW": "Palau",
  "US-PA": "Pennsylvania",
  "US-PR": "Puerto Rico",
  "US-RI": "Rhode Island",
  "US-SC": "South Carolina",
  "US-SD": "South Dakota",
  "US-TN": "Tennessee",
  "US-TX": "Texas",
  "US-UT": "Utah",
  "US-VT": "Vermont",
  "US-VI": "Virgin Islands",
  "US-VA": "Virginia",
  "US-WA": "Washington",
  "US-WV": "West Virginia",
  "US-WI": "Wisconsin",
  "US-WY": "Wyoming"
}

export interface Sentiment {
  compound: number,
  neg: number,
  neu: number,
  pos: number,
  state_id: string
}

export function fetchSentiment(hashtags: Array<string>, since: string, until: string) {

  const fetchPromise = geoCodes.map(geoCodes => {

    return fetch(new Request(
      url,
      {
        method: "post",
        headers: {
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Methods': 'POST',
          // 'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          // 'Accept': "*/*"
        },

        body: JSON.stringify({
          hashtags,
          geocode: [geoCodes.lat, geoCodes.long, geoCodes.mi].toString() + "mi",
          since,
          until,
          count: geoCodes.count,
        }),
      }
    ))
  })
  return fetchPromise

}