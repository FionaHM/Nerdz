/*
although ammap has methods like getAreaCenterLatitude and getAreaCenterLongitude,
they are not suitable in quite a lot of cases as the center of some countries
is even outside the country itself (like US, because of Alaska and Hawaii)
That's why wehave the coordinates stored here
*/

var latlong = {};
latlong["ALA"] = {
    "latitude": 32.7990,
    "longitude": -86.8073
};
latlong["AK"] = {
    "latitude": 61.3850,
    "longitude": -152.2683
};
latlong["ARZ"] = {
    "latitude": 33.7712,
    "longitude": -111.3877
};
latlong["AR"] = {
    "latitude": 34.9513,
    "longitude": -92.3809
};
latlong["CA"] = {
    "latitude": 36.1700,
    "longitude": -119.7462
};
latlong["CO"] = {
    "latitude": 39.0646,
    "longitude": -105.3272
};
latlong["CT"] = {
    "latitude": 41.5834,
    "longitude": -72.7622
};

//Delaware       
latlong["DE"] = {
    "latitude": 39.318523,
    "longitude": -75.507141
};

latlong["FL"] = {
    "latitude": 27.766279,
    "longitude": -81.686783
};

latlong["GA"] = {
    "latitude": 33.040619,
    "longitude": -83.643074
};
latlong["HI"] = {
    "latitude": 21.094318,
    "longitude": 157.498337
};
latlong["ID"] = {
    "latitude": 44.240459,
    "longitude": -114.478828
};

latlong["IL"] = {
    "latitude": 40.349457,
    "longitude": -88.986137
};
latlong["IN"] = {
    "latitude": 39.849426,
    "longitude": -86.258278
};
latlong["IA"] = {
    "latitude": 42.011539,
    "longitude": -93.210526
};

latlong["KS"] = {
    "latitude": 38.526600,
    "longitude": -96.726486
};
latlong["KY"] = {
    "latitude": 37.668140,
    "longitude": -84.670067
};
latlong["LA"] = {
    "latitude": 31.169546,
    "longitude": -91.867805
};

latlong["ME"] = {
    "latitude": 44.693947,
    "longitude": -69.381927
};
latlong["MD"] = {
    "latitude": 39.063946,
    "longitude": -76.802101
};
latlong["MA"] = {
    "latitude": 42.230171,
    "longitude": -71.530106
};

latlong["MI"] = {
    "latitude": 43.326618,
    "longitude": -84.536095

};
latlong["MN"] = {
    "latitude": 45.694454,
    "longitude": -93.900192
};
latlong["MS"] = {
    "latitude": 32.741646,
    "longitude": -89.678696
};

latlong["MO"] = {
    "latitude": 38.456085,
    "longitude": -92.288368
};
latlong["MT"] = {
    "latitude": 46.921925,
    "longitude": -110.454353
};

latlong["NE"] = {
    "latitude": 41.125370,
    "longitude": -98.268082
};

latlong["NV"] = {
    "latitude": 38.313515,
    "longitude": -117.055374

};

latlong["NH"] = {
    "latitude": 43.452492,
    "longitude": -71.563896

};

latlong["NJ"] = {
    "latitude": 40.298904,
    "longitude": -74.521011

};
latlong["NM"] = {
    "latitude": 34.840515,
    "longitude": -106.248482

};
latlong["NY"] = {
    "latitude": 42.165726,
    "longitude": -74.948051
};

latlong["NC"] = {
    "latitude": 35.630066,
    "longitude": -79.806419

};
latlong["ND"] = {
    "latitude": 47.528912,
    "longitude": -99.784012

};
latlong["OH"] = {
    "latitude": 40.388783,
    "longitude": -82.764915

};

latlong["OK"] = {
    "latitude": 35.565342,
    "longitude": -96.928917

};
latlong["OR"] = {
    "latitude": 44.572021,
    "longitude": -122.070938

};
latlong["PA"] = {
    "latitude": 40.590752,
    "longitude": -77.209755

};

latlong["RI"] = {
    "latitude": 41.680893,
    "longitude": -71.511780

};
latlong["SC"] = {
    "latitude": 33.856892,
    "longitude": -80.945007

};
latlong["SD"] = {
    "latitude": 44.299782,
    "longitude": -99.438828

};

latlong["TN"] = {
    "latitude": 35.747845,
    "longitude": -86.692345

};
latlong["TX"] = {
    "latitude": 31.054487,
    "longitude": -97.563461

};
latlong["UT"] = {
    "latitude": 40.150032,
    "longitude": -111.862434

};

latlong["VT"] = {
    "latitude": 44.045876,
    "longitude": -72.710686

};
latlong["VA"] = {
    "latitude": 37.769337,
    "longitude": -78.169968

};
latlong["WA"] = {
    "latitude": 47.400902,
    "longitude": -121.490494

};

latlong["WV"] = {
    "latitude": 38.491226,
    "longitude": -80.954453

};
latlong["WI"] = {
    "latitude": 44.268543,
    "longitude": -89.616508

};
latlong["WY"] = {
    "latitude": 42.755966,
    "longitude": -107.302490

};

latlong["DC"] = {
    "latitude": 38.897438,
    "longitude": -77.026817
};

latlong["AD"] = {
    "latitude": 42.5,
    "longitude": 1.5
};
latlong["AE"] = {
    "latitude": 24,
    "longitude": 54
};
latlong["AF"] = {
    "latitude": 33,
    "longitude": 65
};
latlong["AG"] = {
    "latitude": 17.05,
    "longitude": -61.8
};
latlong["AI"] = {
    "latitude": 18.25,
    "longitude": -63.1667
};
latlong["AL"] = {
    "latitude": 41,
    "longitude": 20
};
latlong["AM"] = {
    "latitude": 40,
    "longitude": 45
};
latlong["AN"] = {
    "latitude": 12.25,
    "longitude": -68.75
};
latlong["AO"] = {
    "latitude": -12.5,
    "longitude": 18.5
};
latlong["AP"] = {
    "latitude": 35,
    "longitude": 105
};
latlong["AQ"] = {
    "latitude": -90,
    "longitude": 0
};
latlong["ARG"] = {
    "latitude": -34,
    "longitude": -64
};
latlong["AS"] = {
    "latitude": -14.3333,
    "longitude": -170
};
latlong["AT"] = {
    "latitude": 47.3333,
    "longitude": 13.3333
};
latlong["AU"] = {
    "latitude": -27,
    "longitude": 133
};
latlong["AW"] = {
    "latitude": 12.5,
    "longitude": -69.9667
};
latlong["AZ"] = {
    "latitude": 40.5,
    "longitude": 47.5
};
latlong["BA"] = {
    "latitude": 44,
    "longitude": 18
};
latlong["BB"] = {
    "latitude": 13.1667,
    "longitude": -59.5333
};
latlong["BD"] = {
    "latitude": 24,
    "longitude": 90
};
latlong["BE"] = {
    "latitude": 50.8333,
    "longitude": 4
};
latlong["BF"] = {
    "latitude": 13,
    "longitude": -2
};
latlong["BG"] = {
    "latitude": 43,
    "longitude": 25
};
latlong["BH"] = {
    "latitude": 26,
    "longitude": 50.55
};
latlong["BI"] = {
    "latitude": -3.5,
    "longitude": 30
};
latlong["BJ"] = {
    "latitude": 9.5,
    "longitude": 2.25
};
latlong["BM"] = {
    "latitude": 32.3333,
    "longitude": -64.75
};
latlong["BN"] = {
    "latitude": 4.5,
    "longitude": 114.6667
};
latlong["BO"] = {
    "latitude": -17,
    "longitude": -65
};
latlong["BR"] = {
    "latitude": -10,
    "longitude": -55
};
latlong["BS"] = {
    "latitude": 24.25,
    "longitude": -76
};
latlong["BT"] = {
    "latitude": 27.5,
    "longitude": 90.5
};
latlong["BV"] = {
    "latitude": -54.4333,
    "longitude": 3.4
};
latlong["BW"] = {
    "latitude": -22,
    "longitude": 24
};
latlong["BY"] = {
    "latitude": 53,
    "longitude": 28
};
latlong["BZ"] = {
    "latitude": 17.25,
    "longitude": -88.75
};
latlong["CAN"] = {
    "latitude": 54,
    "longitude": -100
};
latlong["CC"] = {
    "latitude": -12.5,
    "longitude": 96.8333
};
latlong["CD"] = {
    "latitude": 0,
    "longitude": 25
};
latlong["CF"] = {
    "latitude": 7,
    "longitude": 21
};
latlong["CG"] = {
    "latitude": -1,
    "longitude": 15
};
latlong["CH"] = {
    "latitude": 47,
    "longitude": 8
};
latlong["CI"] = {
    "latitude": 8,
    "longitude": -5
};
latlong["CK"] = {
    "latitude": -21.2333,
    "longitude": -159.7667
};
latlong["CL"] = {
    "latitude": -30,
    "longitude": -71
};
latlong["CM"] = {
    "latitude": 6,
    "longitude": 12
};
latlong["CN"] = {
    "latitude": 35,
    "longitude": 105
};
latlong["COL"] = {
    "latitude": 4,
    "longitude": -72
};
latlong["CR"] = {
    "latitude": 10,
    "longitude": -84
};
latlong["CU"] = {
    "latitude": 21.5,
    "longitude": -80
};
latlong["CV"] = {
    "latitude": 16,
    "longitude": -24
};
latlong["CX"] = {
    "latitude": -10.5,
    "longitude": 105.6667
};
latlong["CY"] = {
    "latitude": 35,
    "longitude": 33
};
latlong["CZ"] = {
    "latitude": 49.75,
    "longitude": 15.5
};
latlong["DED"] = {
    "latitude": 51,
    "longitude": 9
};
latlong["DJ"] = {
    "latitude": 11.5,
    "longitude": 43
};
latlong["DK"] = {
    "latitude": 56,
    "longitude": 10
};
latlong["DM"] = {
    "latitude": 15.4167,
    "longitude": -61.3333
};
latlong["DO"] = {
    "latitude": 19,
    "longitude": -70.6667
};
latlong["DZ"] = {
    "latitude": 28,
    "longitude": 3
};
latlong["EC"] = {
    "latitude": -2,
    "longitude": -77.5
};
latlong["EE"] = {
    "latitude": 59,
    "longitude": 26
};
latlong["EG"] = {
    "latitude": 27,
    "longitude": 30
};
latlong["EH"] = {
    "latitude": 24.5,
    "longitude": -13
};
latlong["ER"] = {
    "latitude": 15,
    "longitude": 39
};
latlong["ES"] = {
    "latitude": 40,
    "longitude": -4
};
latlong["ET"] = {
    "latitude": 8,
    "longitude": 38
};
latlong["EU"] = {
    "latitude": 47,
    "longitude": 8
};
latlong["FI"] = {
    "latitude": 62,
    "longitude": 26
};
latlong["FJ"] = {
    "latitude": -18,
    "longitude": 175
};
latlong["FK"] = {
    "latitude": -51.75,
    "longitude": -59
};
latlong["FM"] = {
    "latitude": 6.9167,
    "longitude": 158.25
};
latlong["FO"] = {
    "latitude": 62,
    "longitude": -7
};
latlong["FR"] = {
    "latitude": 46,
    "longitude": 2
};
latlong["GAB"] = {
    "latitude": -1,
    "longitude": 11.75
};
latlong["GB"] = {
    "latitude": 54,
    "longitude": -2
};
latlong["GD"] = {
    "latitude": 12.1167,
    "longitude": -61.6667
};
latlong["GE"] = {
    "latitude": 42,
    "longitude": 43.5
};
latlong["GF"] = {
    "latitude": 4,
    "longitude": -53
};
latlong["GH"] = {
    "latitude": 8,
    "longitude": -2
};
latlong["GI"] = {
    "latitude": 36.1833,
    "longitude": -5.3667
};
latlong["GL"] = {
    "latitude": 72,
    "longitude": -40
};
latlong["GM"] = {
    "latitude": 13.4667,
    "longitude": -16.5667
};
latlong["GN"] = {
    "latitude": 11,
    "longitude": -10
};
latlong["GP"] = {
    "latitude": 16.25,
    "longitude": -61.5833
};
latlong["GQ"] = {
    "latitude": 2,
    "longitude": 10
};
latlong["GR"] = {
    "latitude": 39,
    "longitude": 22
};
latlong["GS"] = {
    "latitude": -54.5,
    "longitude": -37
};
latlong["GT"] = {
    "latitude": 15.5,
    "longitude": -90.25
};
latlong["GU"] = {
    "latitude": 13.4667,
    "longitude": 144.7833
};
latlong["GW"] = {
    "latitude": 12,
    "longitude": -15
};
latlong["GY"] = {
    "latitude": 5,
    "longitude": -59
};
latlong["HK"] = {
    "latitude": 22.25,
    "longitude": 114.1667
};
latlong["JH"] = {
    "latitude": 40.3,
    "longitude": -89
};
latlong["HM"] = {
    "latitude": -53.1,
    "longitude": 72.5167
};
latlong["HN"] = {
    "latitude": 15,
    "longitude": -86.5
};
latlong["HR"] = {
    "latitude": 45.1667,
    "longitude": 15.5
};
latlong["HT"] = {
    "latitude": 19,
    "longitude": -72.4167
};
latlong["HU"] = {
    "latitude": 47,
    "longitude": 20
};
latlong["IDA"] = {
    "latitude": -5,
    "longitude": 120
};
latlong["IE"] = {
    "latitude": 53,
    "longitude": -8
};
latlong["ISL"] = {
    "latitude": 31.5,
    "longitude": 34.75
};
latlong["IND"] = {
    "latitude": 20,
    "longitude": 77
};
latlong["IO"] = {
    "latitude": -6,
    "longitude": 71.5
};
latlong["IQ"] = {
    "latitude": 33,
    "longitude": 44
};
latlong["IR"] = {
    "latitude": 32,
    "longitude": 53
};
latlong["IS"] = {
    "latitude": 65,
    "longitude": -18
};
latlong["IT"] = {
    "latitude": 42.8333,
    "longitude": 12.8333
};
latlong["JM"] = {
    "latitude": 18.25,
    "longitude": -77.5
};
latlong["JO"] = {
    "latitude": 31,
    "longitude": 36
};
latlong["JP"] = {
    "latitude": 36,
    "longitude": 138
};
latlong["KE"] = {
    "latitude": 1,
    "longitude": 38
};
latlong["KG"] = {
    "latitude": 41,
    "longitude": 75
};
latlong["KH"] = {
    "latitude": 13,
    "longitude": 105
};
latlong["KI"] = {
    "latitude": 1.4167,
    "longitude": 173
};
latlong["KM"] = {
    "latitude": -12.1667,
    "longitude": 44.25
};
latlong["KN"] = {
    "latitude": 17.3333,
    "longitude": -62.75
};
latlong["KP"] = {
    "latitude": 40,
    "longitude": 127
};
latlong["KR"] = {
    "latitude": 37,
    "longitude": 127.5
};
latlong["KW"] = {
    "latitude": 29.3375,
    "longitude": 47.6581
};
// latlong["KY"] = {
//     "latitude": 19.5,
//     "longitude": -80.5
// };
latlong["KZ"] = {
    "latitude": 48,
    "longitude": 68
};
latlong["LAO"] = {
    "latitude": 18,
    "longitude": 105
};
latlong["LB"] = {
    "latitude": 33.8333,
    "longitude": 35.8333
};
latlong["LC"] = {
    "latitude": 13.8833,
    "longitude": -61.1333
};
latlong["LI"] = {
    "latitude": 47.1667,
    "longitude": 9.5333
};
latlong["LK"] = {
    "latitude": 7,
    "longitude": 81
};
latlong["LR"] = {
    "latitude": 6.5,
    "longitude": -9.5
};
latlong["LS"] = {
    "latitude": -29.5,
    "longitude": 28.5
};
latlong["LT"] = {
    "latitude": 55,
    "longitude": 24
};
latlong["LU"] = {
    "latitude": 49.75,
    "longitude": 6
};
latlong["LV"] = {
    "latitude": 57,
    "longitude": 25
};
latlong["LY"] = {
    "latitude": 25,
    "longitude": 17
};
latlong["MAR"] = {
    "latitude": 32,
    "longitude": -5
};
latlong["MC"] = {
    "latitude": 43.7333,
    "longitude": 7.4
};
latlong["MOD"] = {
    "latitude": 47,
    "longitude": 29
};
latlong["MEN"] = {
    "latitude": 42.5,
    "longitude": 19.4
};
latlong["MG"] = {
    "latitude": -20,
    "longitude": 47
};
latlong["MH"] = {
    "latitude": 9,
    "longitude": 168
};
latlong["MK"] = {
    "latitude": 41.8333,
    "longitude": 22
};
latlong["ML"] = {
    "latitude": 17,
    "longitude": -4
};
latlong["MM"] = {
    "latitude": 22,
    "longitude": 98
};
latlong["MON"] = {
    "latitude": 46,
    "longitude": 105
};
// latlong["MO"] = {
//     "latitude": 22.1667,
//     "longitude": 113.55
// };
latlong["MP"] = {
    "latitude": 15.2,
    "longitude": 145.75
};
latlong["MQ"] = {
    "latitude": 14.6667,
    "longitude": -61
};
latlong["MR"] = {
    "latitude": 20,
    "longitude": -12
};
// latlong["MS"] = {
//     "latitude": 16.75,
//     "longitude": -62.2
// };
// latlong["MT"] = {
//     "latitude": 35.8333,
//     "longitude": 14.5833
// };
latlong["MU"] = {
    "latitude": -20.2833,
    "longitude": 57.55
};
latlong["MV"] = {
    "latitude": 3.25,
    "longitude": 73
};
latlong["MW"] = {
    "latitude": -13.5,
    "longitude": 34
};
latlong["MX"] = {
    "latitude": 23,
    "longitude": -102
};
latlong["MY"] = {
    "latitude": 2.5,
    "longitude": 112.5
};
latlong["MZ"] = {
    "latitude": -18.25,
    "longitude": 35
};
latlong["NA"] = {
    "latitude": -22,
    "longitude": 17
};
// latlong["NC"] = {
//     "latitude": -21.5,
//     "longitude": 165.5
// };
latlong["NER"] = {
    "latitude": 16,
    "longitude": 8
};
latlong["NF"] = {
    "latitude": -29.0333,
    "longitude": 167.95
};
latlong["NG"] = {
    "latitude": 10,
    "longitude": 8
};
latlong["NI"] = {
    "latitude": 13,
    "longitude": -85
};
latlong["NL"] = {
    "latitude": 52.5,
    "longitude": 5.75
};
latlong["NO"] = {
    "latitude": 62,
    "longitude": 10
};
latlong["NP"] = {
    "latitude": 28,
    "longitude": 84
};
latlong["NR"] = {
    "latitude": -0.5333,
    "longitude": 166.9167
};
latlong["NU"] = {
    "latitude": -19.0333,
    "longitude": -169.8667
};
latlong["NZ"] = {
    "latitude": -41,
    "longitude": 174
};
latlong["OM"] = {
    "latitude": 21,
    "longitude": 57
};
latlong["PAN"] = {
    "latitude": 9,
    "longitude": -80
};
latlong["PE"] = {
    "latitude": -10,
    "longitude": -76
};
latlong["PF"] = {
    "latitude": -15,
    "longitude": -140
};
latlong["PG"] = {
    "latitude": -6,
    "longitude": 147
};
latlong["PH"] = {
    "latitude": 13,
    "longitude": 122
};
latlong["PK"] = {
    "latitude": 30,
    "longitude": 70
};
latlong["PL"] = {
    "latitude": 52,
    "longitude": 20
};
latlong["PM"] = {
    "latitude": 46.8333,
    "longitude": -56.3333
};
latlong["PR"] = {
    "latitude": 18.25,
    "longitude": -66.5
};
latlong["PS"] = {
    "latitude": 32,
    "longitude": 35.25
};
latlong["PT"] = {
    "latitude": 39.5,
    "longitude": -8
};
latlong["PW"] = {
    "latitude": 7.5,
    "longitude": 134.5
};
latlong["PY"] = {
    "latitude": -23,
    "longitude": -58
};
latlong["QA"] = {
    "latitude": 25.5,
    "longitude": 51.25
};
latlong["RE"] = {
    "latitude": -21.1,
    "longitude": 55.6
};
latlong["RO"] = {
    "latitude": 46,
    "longitude": 25
};
latlong["RS"] = {
    "latitude": 44,
    "longitude": 21
};
latlong["RU"] = {
    "latitude": 60,
    "longitude": 100
};
latlong["RW"] = {
    "latitude": -2,
    "longitude": 30
};
latlong["SA"] = {
    "latitude": 25,
    "longitude": 45
};
latlong["SB"] = {
    "latitude": -8,
    "longitude": 159
};
// latlong["SC"] = {
//     "latitude": -4.5833,
//     "longitude": 55.6667
// };
latlong["SUD"] = {
    "latitude": 15,
    "longitude": 30
};
latlong["SE"] = {
    "latitude": 62,
    "longitude": 15
};
latlong["SG"] = {
    "latitude": 1.3667,
    "longitude": 103.8
};
latlong["SH"] = {
    "latitude": -15.9333,
    "longitude": -5.7
};
latlong["SI"] = {
    "latitude": 46,
    "longitude": 15
};
latlong["SJ"] = {
    "latitude": 78,
    "longitude": 20
};
latlong["SK"] = {
    "latitude": 48.6667,
    "longitude": 19.5
};
latlong["SL"] = {
    "latitude": 8.5,
    "longitude": -11.5
};
latlong["SM"] = {
    "latitude": 43.7667,
    "longitude": 12.4167
};
latlong["SN"] = {
    "latitude": 14,
    "longitude": -14
};
latlong["SO"] = {
    "latitude": 10,
    "longitude": 49
};
latlong["SR"] = {
    "latitude": 4,
    "longitude": -56
};
latlong["ST"] = {
    "latitude": 1,
    "longitude": 7
};
latlong["SV"] = {
    "latitude": 13.8333,
    "longitude": -88.9167
};
latlong["SY"] = {
    "latitude": 35,
    "longitude": 38
};
latlong["SZ"] = {
    "latitude": -26.5,
    "longitude": 31.5
};
latlong["TC"] = {
    "latitude": 21.75,
    "longitude": -71.5833
};
latlong["TD"] = {
    "latitude": 15,
    "longitude": 19
};
latlong["TF"] = {
    "latitude": -43,
    "longitude": 67
};
latlong["TG"] = {
    "latitude": 8,
    "longitude": 1.1667
};
latlong["TH"] = {
    "latitude": 15,
    "longitude": 100
};
latlong["TJ"] = {
    "latitude": 39,
    "longitude": 71
};
latlong["TK"] = {
    "latitude": -9,
    "longitude": -172
};
latlong["TM"] = {
    "latitude": 40,
    "longitude": 60
};
latlong["TUN"] = {
    "latitude": 34,
    "longitude": 9
};
latlong["TO"] = {
    "latitude": -20,
    "longitude": -175
};
latlong["TR"] = {
    "latitude": 39,
    "longitude": 35
};
latlong["TT"] = {
    "latitude": 11,
    "longitude": -61
};
latlong["TV"] = {
    "latitude": -8,
    "longitude": 178
};
latlong["TW"] = {
    "latitude": 23.5,
    "longitude": 121
};
latlong["TZ"] = {
    "latitude": -6,
    "longitude": 35
};
latlong["UA"] = {
    "latitude": 49,
    "longitude": 32
};
latlong["UG"] = {
    "latitude": 1,
    "longitude": 32
};
latlong["UM"] = {
    "latitude": 19.2833,
    "longitude": 166.6
};
latlong["US"] = {
    "latitude": 38,
    "longitude": -97
};
latlong["UY"] = {
    "latitude": -33,
    "longitude": -56
};
latlong["UZ"] = {
    "latitude": 41,
    "longitude": 64
};
// latlong["VA"] = {
//     "latitude": 41.9,
//     "longitude": 12.45
// };
latlong["VC"] = {
    "latitude": 13.25,
    "longitude": -61.2
};
latlong["VE"] = {
    "latitude": 8,
    "longitude": -66
};
latlong["VG"] = {
    "latitude": 18.5,
    "longitude": -64.5
};
latlong["VI"] = {
    "latitude": 18.3333,
    "longitude": -64.8333
};
latlong["VN"] = {
    "latitude": 16,
    "longitude": 106
};
latlong["VU"] = {
    "latitude": -16,
    "longitude": 167
};
latlong["WF"] = {
    "latitude": -13.3,
    "longitude": -176.2
};
latlong["WS"] = {
    "latitude": -13.5833,
    "longitude": -172.3333
};
latlong["YE"] = {
    "latitude": 15,
    "longitude": 48
};
latlong["YT"] = {
    "latitude": -12.8333,
    "longitude": 45.1667
};
latlong["ZA"] = {
    "latitude": -29,
    "longitude": 24
};
latlong["ZM"] = {
    "latitude": -15,
    "longitude": 30
};
latlong["ZW"] = {
    "latitude": -20,
    "longitude": 30
};


var mapData = [{
    "code": "ALA",
    "name": "Alabama",
    "value": 10,
    "category": "CAT 1"

}, {
    "code": "ALA",
    "name": "Alabama",
    "value": 60,
    "category": "CAT 3"
}, {
    "code": "AK",
    "name": "Alaska",
    "value": 40,
    "category": "CAT 2"

}, {
    "code": "ARZ",
    "name": "Arizona",
    "value": 20,
    "category": "CAT 3"

}, {
    "code": "AR",
    "name": "Arkansas",
    "value": 33,
    "category": "CAT 4"
        // "color": ""
}, {
    "code": "CA",
    "name": "California",
    "value": 32,
    "category": "CAT 5"
        // "color": ""
}, {
    "code": "CO",
    "name": "Colorado",
    "value": 120,
    "category": "CAT 3"
        // "color": ""
}, {
    "code": "CT",
    "name": "Connecticut",
    "value": 30,
    "category": "CAT 2"
}, {
    "code": "DE",
    "name": "Delaware",
    "value": 23,
    "category": "CAT 3"
}, {
    "code": "FL",
    "name": "Florida",
    "value": 22,
    "category": "CAT 1"
}, {
    "code": "GA",
    "name": "Georgia",
    "value": 50,
    "category": "CAT 2"
}, {
    "code": "HI",
    "name": "Hawaii",
    "value": 100,
    "category": "CAT 3"
}, {
    "code": "ID",
    "name": "Idaho",
    "value": 123,
    "category": "CAT 4"
}, {
    "code": "IL",
    "name": "Illinois",
    "value": 300,
    "category": "CAT 5"
}, {
    "code": "IN",
    "name": "Indiana",
    "value": 424,
    "category": "CAT 1"
}, {
    "code": "IA",
    "name": "Iowa",
    "value": 240,
    "category": "CAT 5"
}, {
    "code": "KS",
    "name": "Kansas",
    "value": 670,
    "category": "CAT 1"
}, {
    "code": "KY",
    "name": "Kentucky",
    "value": 345,
    "category": "CAT 2"
}, {
    "code": "LA",
    "name": "Louisiana",
    "value": 345,
    "category": "CAT 3"
}, {
    "code": "ME",
    "name": "Maine",
    "value": 235,
    "category": "CAT 4"
}, {
    "code": "MD",
    "name": "Maryland",
    "value": 264,
    "category": "CAT 5"
}, {
    "code": "MA",
    "name": "Massachusetts",
    "value": 375,
    "category": "CAT 1"
}, {
    "code": "MI",
    "name": "Michigan",
    "value": 270,
    "category": "CAT 2"
}, {
    "code": "MN",
    "name": "Minnesota",
    "value": 238,
    "category": "CAT 3"
}, {
    "code": "MS",
    "name": "Mississippi",
    "value": 230,
    "category": "CAT 4"
}, {
    "code": "MO",
    "name": "Missouri",
    "value": 234,
    "category": "CAT 5"
}, {
    "code": "MT",
    "name": "Montana",
    "value": 140,
    "category": "CAT 1"
}, {
    "code": "NE",
    "name": "Nebraska",
    "value": 457,
    "category": "CAT 2"
}, {
    "code": "NV",
    "name": "Nevada",
    "value": 456,
    "category": "CAT 3"
}, {
    "code": "NH",
    "name": "New Hampshire",
    "value": 345,
    "category": "CAT 4"
}, {
    "code": "NJ",
    "name": "New Jersey",
    "value": 370,
    "category": "CAT 5"
}, {
    "code": "NM",
    "name": "New Mexico",
    "value": 370,
    "category": "CAT 1"
}, {
    "code": "NY",
    "name": "New York",
    "value": 34,
    "category": "CAT 2"
}, {
    "code": "NC",
    "name": "North Carolina",
    "value": 34,
    "category": "CAT 3"
}, {
    "code": "ND",
    "name": "North Dakota",
    "value": 346,
    "category": "CAT 3"
}, {
    "code": "OH",
    "name": "Ohio",
    "value": 346,
    "category": "CAT 2"
}, {
    "code": "OK",
    "name": "Oklahoma",
    "value": 235,
    "category": "CAT 1"
}, {
    "code": "OR",
    "name": "Oregon",
    "value": 235,
    "category": "CAT 5"
}, {
    "code": "PA",
    "name": "Pennsylvania",
    "value": 230,
    "category": "CAT 4"
}, {
    "code": "RI",
    "name": "Rhode Island",
    "value": 235,
    "category": "CAT 3"
}, {
    "code": "SC",
    "name": "South Carolina",
    "value": 235,
    "category": "CAT 2"
}, {
    "code": "SD",
    "name": "South Dakota",
    "value": 235,
    "category": "CAT 1"
}, {
    "code": "TN",
    "name": "Tennesee",
    "value": 235,
    "category": "CAT 5"
}, {
    "code": "TX",
    "name": "Texas",
    "value": 260,
    "category": "CAT 4"
}, {
    "code": "UT",
    "name": "Utah",
    "value": 260,
    "category": "CAT 3"
}, {
    "code": "VT",
    "name": "Vermont",
    "value": 270,
    "category": "CAT 2"
}, {
    "code": "VA",
    "name": "Virginia",
    "value": 466,
    "category": "CAT 1"
}, {
    "code": "WA",
    "name": "Washington",
    "value": 235,
    "category": "CAT 5"
}, {
    "code": "WV",
    "name": "West Virginia",
    "value": 324,
    "category": "CAT 4"
}, {
    "code": "WI",
    "name": "Wisconsin",
    "value": 260,
    "category": "CAT 3"
}, {
    "code": "WY",
    "name": "Wyoming",
    "value": 238,
    "category": "CAT 2"
}, {
    "code": "DC",
    "name": "Washington, D.C.",
    "value": 235,
    "category": "CAT 1"
}, {
    "code": "AF",
    "name": "Afghanistan",
    "value": 323,
    "color": "#eea638"
}, {
    "code": "AL",
    "name": "Albania",
    "value": 321,
    "color": "#d8854f"
}, {
    "code": "DZ",
    "name": "Algeria",
    "value": 3598,
    "color": "#de4c4f"
}, {
    "code": "AO",
    "name": "Angola",
    "value": 196,
    "color": "#de4c4f"
}, {
    "code": "ARG",
    "name": "Argentina",
    "value": 407,
    "color": "#86a965"
}, {
    "code": "AM",
    "name": "Armenia",
    "value": 310,
    "color": "#d8854f"
}, {
    "code": "AU",
    "name": "Australia",
    "value": 2260,
    "color": "#8aabb0"
}, {
    "code": "AT",
    "name": "Austria",
    "value": 841,
    "color": "#d8854f"
}, {
    "code": "AZ",
    "name": "Azerbaijan",
    "value": 930,
    "color": "#d8854f"
}, {
    "code": "BH",
    "name": "Bahrain",
    "value": 132,
    "color": "#eea638"
}, {
    "code": "BD",
    "name": "Bangladesh",
    "value": 150,
    "color": "#eea638"
}, {
    "code": "BY",
    "name": "Belarus",
    "value": 95,
    "color": "#d8854f"
}, {
    "code": "BE",
    "name": "Belgium",
    "value": 1075,
    "color": "#d8854f"
}, {
    "code": "BJ",
    "name": "Benin",
    "value": 9099,
    "color": "#de4c4f"
}, {
    "code": "BT",
    "name": "Bhutan",
    "value": 737,
    "color": "#eea638"
}, {
    "code": "BO",
    "name": "Bolivia",
    "value": 10088108,
    "color": "#86a965"
}, {
    "code": "BA",
    "name": "Bosnia and Herzegovina",
    "value": 3752228,
    "color": "#d8854f"
}, {
    "code": "BW",
    "name": "Botswana",
    "value": 2030738,
    "color": "#de4c4f"
}, {
    "code": "BR",
    "name": "Brazil",
    "value": 196655014,
    "color": "#86a965"
}, {
    "code": "BN",
    "name": "Brunei",
    "value": 405938,
    "color": "#eea638"
}, {
    "code": "BG",
    "name": "Bulgaria",
    "value": 7446135,
    "color": "#d8854f"
}, {
    "code": "BF",
    "name": "Burkina Faso",
    "value": 16967845,
    "color": "#de4c4f"
}, {
    "code": "BI",
    "name": "Burundi",
    "value": 8575172,
    "color": "#de4c4f"
}, {
    "code": "KH",
    "name": "Cambodia",
    "value": 14305183,
    "color": "#eea638"
}, {
    "code": "CM",
    "name": "Cameroon",
    "value": 20030362,
    "color": "#de4c4f"
}, {
    "code": "CAN",
    "name": "Canada",
    "value": 34349561,
    "color": "#a7a737"
}, {
    "code": "CV",
    "name": "Cape Verde",
    "value": 500585,
    "color": "#de4c4f"
}, {
    "code": "CF",
    "name": "Central African Rep.",
    "value": 4486837,
    "color": "#de4c4f"
}, {
    "code": "TD",
    "name": "Chad",
    "value": 11525496,
    "color": "#de4c4f"
}, {
    "code": "CL",
    "name": "Chile",
    "value": 17269525,
    "color": "#86a965"
}, {
    "code": "CN",
    "name": "China",
    "value": 1347565324,
    "color": "#eea638"
}, {
    "code": "COL",
    "name": "Colombia",
    "value": 46927125,
    "color": "#86a965"
}, {
    "code": "KM",
    "name": "Comoros",
    "value": 753943,
    "color": "#de4c4f"
}, {
    "code": "CD",
    "name": "Congo, Dem. Rep.",
    "value": 67757577,
    "color": "#de4c4f"
}, {
    "code": "CG",
    "name": "Congo, Rep.",
    "value": 4139748,
    "color": "#de4c4f"
}, {
    "code": "CR",
    "name": "Costa Rica",
    "value": 4726575,
    "color": "#a7a737"
}, {
    "code": "CI",
    "name": "Cote d'Ivoire",
    "value": 20152894,
    "color": "#de4c4f"
}, {
    "code": "HR",
    "name": "Croatia",
    "value": 4395560,
    "color": "#d8854f"
}, {
    "code": "CU",
    "name": "Cuba",
    "value": 11253665,
    "color": "#a7a737"
}, {
    "code": "CY",
    "name": "Cyprus",
    "value": 1116564,
    "color": "#d8854f"
}, {
    "code": "CZ",
    "name": "Czech Rep.",
    "value": 10534293,
    "color": "#d8854f"
}, {
    "code": "DK",
    "name": "Denmark",
    "value": 5572594,
    "color": "#d8854f"
}, {
    "code": "DJ",
    "name": "Djibouti",
    "value": 905564,
    "color": "#de4c4f"
}, {
    "code": "DO",
    "name": "Dominican Rep.",
    "value": 10056181,
    "color": "#a7a737"
}, {
    "code": "EC",
    "name": "Ecuador",
    "value": 14666055,
    "color": "#86a965"
}, {
    "code": "EG",
    "name": "Egypt",
    "value": 82536770,
    "color": "#de4c4f"
}, {
    "code": "SV",
    "name": "El Salvador",
    "value": 6227491,
    "color": "#a7a737"
}, {
    "code": "GQ",
    "name": "Equatorial Guinea",
    "value": 720213,
    "color": "#de4c4f"
}, {
    "code": "ER",
    "name": "Eritrea",
    "value": 5415280,
    "color": "#de4c4f"
}, {
    "code": "EE",
    "name": "Estonia",
    "value": 1340537,
    "color": "#d8854f"
}, {
    "code": "ET",
    "name": "Ethiopia",
    "value": 84734262,
    "color": "#de4c4f"
}, {
    "code": "FJ",
    "name": "Fiji",
    "value": 868406,
    "color": "#8aabb0"
}, {
    "code": "FI",
    "name": "Finland",
    "value": 5384770,
    "color": "#d8854f"
}, {
    "code": "FR",
    "name": "France",
    "value": 63125894,
    "color": "#d8854f"
}, {
    "code": "GAB",
    "name": "Gabon",
    "value": 1534262,
    "color": "#de4c4f"
}, {
    "code": "GM",
    "name": "Gambia",
    "value": 1776103,
    "color": "#de4c4f"
}, {
    "code": "GE",
    "name": "Georgia",
    "value": 4329026,
    "color": "#d8854f"
}, {
    "code": "DED",
    "name": "Germany",
    "value": 82162512,
    "color": "#d8854f"
}, {
    "code": "GH",
    "name": "Ghana",
    "value": 24965816,
    "color": "#de4c4f"
}, {
    "code": "GR",
    "name": "Greece",
    "value": 11390031,
    "color": "#d8854f"
}, {
    "code": "GT",
    "name": "Guatemala",
    "value": 14757316,
    "color": "#a7a737"
}, {
    "code": "GN",
    "name": "Guinea",
    "value": 10221808,
    "color": "#de4c4f"
}, {
    "code": "GW",
    "name": "Guinea-Bissau",
    "value": 1547061,
    "color": "#de4c4f"
}, {
    "code": "GY",
    "name": "Guyana",
    "value": 756040,
    "color": "#86a965"
}, {
    "code": "HT",
    "name": "Haiti",
    "value": 10123787,
    "color": "#a7a737"
}, {
    "code": "HN",
    "name": "Honduras",
    "value": 7754687,
    "color": "#a7a737"
}, {
    "code": "HK",
    "name": "Hong Kong, China",
    "value": 7122187,
    "color": "#eea638"
}, {
    "code": "HU",
    "name": "Hungary",
    "value": 9966116,
    "color": "#d8854f"
}, {
    "code": "IS",
    "name": "Iceland",
    "value": 324366,
    "color": "#d8854f"
}, {
    "code": "IND",
    "name": "India",
    "value": 1241491960,
    "color": "#eea638"
}, {
    "code": "IDA",
    "name": "Indonesia",
    "value": 242325638,
    "color": "#eea638"
}, {
    "code": "IR",
    "name": "Iran",
    "value": 74798599,
    "color": "#eea638"
}, {
    "code": "IQ",
    "name": "Iraq",
    "value": 32664942,
    "color": "#eea638"
}, {
    "code": "IE",
    "name": "Ireland",
    "value": 4525802,
    "color": "#d8854f"
}, {
    "code": "ISL",
    "name": "Israel",
    "value": 7562194,
    "color": "#eea638"
}, {
    "code": "IT",
    "name": "Italy",
    "value": 60788694,
    "color": "#d8854f"
}, {
    "code": "JM",
    "name": "Jamaica",
    "value": 2751273,
    "color": "#a7a737"
}, {
    "code": "JP",
    "name": "Japan",
    "value": 126497241,
    "color": "#eea638"
}, {
    "code": "JO",
    "name": "Jordan",
    "value": 6330169,
    "color": "#eea638"
}, {
    "code": "KZ",
    "name": "Kazakhstan",
    "value": 16206750,
    "color": "#eea638"
}, {
    "code": "KE",
    "name": "Kenya",
    "value": 41609728,
    "color": "#de4c4f"
}, {
    "code": "KR",
    "name": "Korea, Dem. Rep.",
    "value": 24451285,
    "color": "#eea638"
}, {
    "code": "KP",
    "name": "Korea, Rep.",
    "value": 48391343,
    "color": "#eea638"
}, {
    "code": "KW",
    "name": "Kuwait",
    "value": 2818042,
    "color": "#eea638"
}, {
    "code": "KG",
    "name": "Kyrgyzstan",
    "value": 5392580,
    "color": "#eea638"
}, {
    "code": "LAO",
    "name": "Laos",
    "value": 6288037,
    "color": "#eea638"
}, {
    "code": "LV",
    "name": "Latvia",
    "value": 2243142,
    "color": "#d8854f"
}, {
    "code": "LB",
    "name": "Lebanon",
    "value": 4259405,
    "color": "#eea638"
}, {
    "code": "LS",
    "name": "Lesotho",
    "value": 2193843,
    "color": "#de4c4f"
}, {
    "code": "LR",
    "name": "Liberia",
    "value": 4128572,
    "color": "#de4c4f"
}, {
    "code": "LY",
    "name": "Libya",
    "value": 6422772,
    "color": "#de4c4f"
}, {
    "code": "LT",
    "name": "Lithuania",
    "value": 3307481,
    "color": "#d8854f"
}, {
    "code": "LU",
    "name": "Luxembourg",
    "value": 515941,
    "color": "#d8854f"
}, {
    "code": "MK",
    "name": "Macedonia, FYR",
    "value": 2063893,
    "color": "#d8854f"
}, {
    "code": "MG",
    "name": "Madagascar",
    "value": 21315135,
    "color": "#de4c4f"
}, {
    "code": "MW",
    "name": "Malawi",
    "value": 15380888,
    "color": "#de4c4f"
}, {
    "code": "MY",
    "name": "Malaysia",
    "value": 28859154,
    "color": "#eea638"
}, {
    "code": "ML",
    "name": "Mali",
    "value": 15839538,
    "color": "#de4c4f"
}, {
    "code": "MR",
    "name": "Mauritania",
    "value": 3541540,
    "color": "#de4c4f"
}, {
    "code": "MU",
    "name": "Mauritius",
    "value": 1306593,
    "color": "#de4c4f"
}, {
    "code": "MX",
    "name": "Mexico",
    "value": 114793341,
    "color": "#a7a737"
}, {
    "code": "MOD",
    "name": "Moldova",
    "value": 3544864,
    "color": "#d8854f"
}, {
    "code": "MON",
    "name": "Mongolia",
    "value": 2800114,
    "color": "#eea638"
}, {
    "code": "MEN",
    "name": "Montenegro",
    "value": 632261,
    "color": "#d8854f"
}, {
    "code": "MAR",
    "name": "Morocco",
    "value": 32272974,
    "color": "#de4c4f"
}, {
    "code": "MZ",
    "name": "Mozambique",
    "value": 23929708,
    "color": "#de4c4f"
}, {
    "code": "MM",
    "name": "Myanmar",
    "value": 48336763,
    "color": "#eea638"
}, {
    "code": "NA",
    "name": "Namibia",
    "value": 2324004,
    "color": "#de4c4f"
}, {
    "code": "NP",
    "name": "Nepal",
    "value": 30485798,
    "color": "#eea638"
}, {
    "code": "NL",
    "name": "Netherlands",
    "value": 16664746,
    "color": "#d8854f"
}, {
    "code": "NZ",
    "name": "New Zealand",
    "value": 4414509,
    "color": "#8aabb0"
}, {
    "code": "NI",
    "name": "Nicaragua",
    "value": 5869859,
    "color": "#a7a737"
}, {
    "code": "NER",
    "name": "Niger",
    "value": 16068994,
    "color": "#de4c4f"
}, {
    "code": "NG",
    "name": "Nigeria",
    "value": 162470737,
    "color": "#de4c4f"
}, {
    "code": "NO",
    "name": "Norway",
    "value": 4924848,
    "color": "#d8854f"
}, {
    "code": "OM",
    "name": "Oman",
    "value": 2846145,
    "color": "#eea638"
}, {
    "code": "PK",
    "name": "Pakistan",
    "value": 176745364,
    "color": "#eea638"
}, {
    "code": "PAN",
    "name": "Panama",
    "value": 3571185,
    "color": "#a7a737"
}, {
    "code": "PG",
    "name": "Papua New Guinea",
    "value": 7013829,
    "color": "#8aabb0"
}, {
    "code": "PY",
    "name": "Paraguay",
    "value": 6568290,
    "color": "#86a965"
}, {
    "code": "PE",
    "name": "Peru",
    "value": 29399817,
    "color": "#86a965"
}, {
    "code": "PH",
    "name": "Philippines",
    "value": 94852030,
    "color": "#eea638"
}, {
    "code": "PL",
    "name": "Poland",
    "value": 38298949,
    "color": "#d8854f"
}, {
    "code": "PT",
    "name": "Portugal",
    "value": 10689663,
    "color": "#d8854f"
}, {
    "code": "PR",
    "name": "Puerto Rico",
    "value": 3745526,
    "color": "#a7a737"
}, {
    "code": "QA",
    "name": "Qatar",
    "value": 1870041,
    "color": "#eea638"
}, {
    "code": "RO",
    "name": "Romania",
    "value": 21436495,
    "color": "#d8854f"
}, {
    "code": "RU",
    "name": "Russia",
    "value": 142835555,
    "color": "#d8854f"
}, {
    "code": "RW",
    "name": "Rwanda",
    "value": 10942950,
    "color": "#de4c4f"
}, {
    "code": "SA",
    "name": "Saudi Arabia",
    "value": 28082541,
    "color": "#eea638"
}, {
    "code": "SN",
    "name": "Senegal",
    "value": 12767556,
    "color": "#de4c4f"
}, {
    "code": "RS",
    "name": "Serbia",
    "value": 9853969,
    "color": "#d8854f"
}, {
    "code": "SL",
    "name": "Sierra Leone",
    "value": 5997486,
    "color": "#de4c4f"
}, {
    "code": "SG",
    "name": "Singapore",
    "value": 5187933,
    "color": "#eea638"
}, {
    "code": "SK",
    "name": "Slovak Republic",
    "value": 5471502,
    "color": "#d8854f"
}, {
    "code": "SI",
    "name": "Slovenia",
    "value": 2035012,
    "color": "#d8854f"
}, {
    "code": "SB",
    "name": "Solomon Islands",
    "value": 552267,
    "color": "#8aabb0"
}, {
    "code": "SO",
    "name": "Somalia",
    "value": 9556873,
    "color": "#de4c4f"
}, {
    "code": "ZA",
    "name": "South Africa",
    "value": 50459978,
    "color": "#de4c4f"
}, {
    "code": "ES",
    "name": "Spain",
    "value": 46454895,
    "color": "#d8854f"
}, {
    "code": "LK",
    "name": "Sri Lanka",
    "value": 21045394,
    "color": "#eea638"
}, {
    "code": "SUD",
    "name": "Sudan",
    "value": 34735288,
    "color": "#de4c4f"
}, {
    "code": "SR",
    "name": "Suriname",
    "value": 529419,
    "color": "#86a965"
}, {
    "code": "SZ",
    "name": "Swaziland",
    "value": 1203330,
    "color": "#de4c4f"
}, {
    "code": "SE",
    "name": "Sweden",
    "value": 9440747,
    "color": "#d8854f"
}, {
    "code": "CH",
    "name": "Switzerland",
    "value": 7701690,
    "color": "#d8854f"
}, {
    "code": "SY",
    "name": "Syria",
    "value": 20766037,
    "color": "#eea638"
}, {
    "code": "TW",
    "name": "Taiwan",
    "value": 23072000,
    "color": "#eea638"
}, {
    "code": "TJ",
    "name": "Tajikistan",
    "value": 6976958,
    "color": "#eea638"
}, {
    "code": "TZ",
    "name": "Tanzania",
    "value": 46218486,
    "color": "#de4c4f"
}, {
    "code": "TH",
    "name": "Thailand",
    "value": 69518555,
    "color": "#eea638"
}, {
    "code": "TG",
    "name": "Togo",
    "value": 6154813,
    "color": "#de4c4f"
}, {
    "code": "TT",
    "name": "Trinidad and Tobago",
    "value": 1346350,
    "color": "#a7a737"
}, {
    "code": "TUN",
    "name": "Tunisia",
    "value": 10594057,
    "color": "#de4c4f"
}, {
    "code": "TR",
    "name": "Turkey",
    "value": 73639596,
    "color": "#d8854f"
}, {
    "code": "TM",
    "name": "Turkmenistan",
    "value": 5105301,
    "color": "#eea638"
}, {
    "code": "UG",
    "name": "Uganda",
    "value": 34509205,
    "color": "#de4c4f"
}, {
    "code": "UA",
    "name": "Ukraine",
    "value": 45190180,
    "color": "#d8854f"
}, {
    "code": "AE",
    "name": "United Arab Emirates",
    "value": 7890924,
    "color": "#eea638"
}, {
    "code": "GB",
    "name": "United Kingdom",
    "value": 62417431,
    "color": "#d8854f"
}, {
    "code": "UY",
    "name": "Uruguay",
    "value": 3380008,
    "color": "#86a965"
}, {
    "code": "UZ",
    "name": "Uzbekistan",
    "value": 27760267,
    "color": "#eea638"
}, {
    "code": "VE",
    "name": "Venezuela",
    "value": 29436891,
    "color": "#86a965"
}, {
    "code": "PS",
    "name": "West Bank and Gaza",
    "value": 4152369,
    "color": "#eea638"
}, {
    "code": "VN",
    "name": "Vietnam",
    "value": 88791996,
    "color": "#eea638"
}, {
    "code": "YE",
    "name": "Yemen, Rep.",
    "value": 24799880,
    "color": "#eea638"
}, {
    "code": "ZM",
    "name": "Zambia",
    "value": 13474959,
    "color": "#de4c4f"
}, {
    "code": "ZW",
    "name": "Zimbabwe",
    "value": 12754378,
    "color": "#de4c4f"
}];

// AMMAP PART OF THIS AWESOME DEMO
var map;
// min and max bullet sizes - adjust them to your needs
var minBulletSize = 7;
var maxBulletSize = 80;

// set dark theme
AmCharts.theme = AmCharts.themes.chalk;

// get min and max values
var min = Infinity;
var max = -Infinity;
for (var i = 0; i < mapData.length; i++) {
    var value = mapData[i].value;
    if (value < min) {
        min = value;
    }
    if (value > max) {
        max = value;
    }
}

function colorPicker() {

}

// build map
AmCharts.ready(function() {
    map = new AmCharts.AmMap();
    map.addClassNames = true;
    map.pathToImages = "http://www.amcharts.com/lib/3/images/";
    map.fontFamily = "Lato";
    map.fontSize = 15;
    map.creditsPosition = "top-right";
    map.zoomControl.buttonFillColor = "#629b6d";

    // style tooltip
    map.balloon = {
        adjustBorderColor: false,
        horizontalPadding: 20,
        verticalPadding: 10,
        color: "#FFFFFF",
        maxWidth: 300,
        borderAlpha: 0,
        borderThickness: 1
    }

    // bubbles are images, we set opacity and tooltip text
    map.imagesSettings = {
        balloonText: "[[title]]: [[value]]",
        alpha: 0.7
    }

    map.addClassNames = true;
    map.defs = {
        "filter": [{
            "id": "blur",
            "feGaussianBlur": {
                "in": "SourceGraphic",
                "stdDeviation": 2
            }
        }]
    };

    // make areas barely visible
    map.areasSettings = {
        unlistedAreasAlpha: 0.1,
        unlistedAreasOutlineAlpha: 0
    };

    // data provider.We use continents map to show real world map in background.
    var dataProvider = {
        map: "continentsLow",
        images: []
    }

    // create circle for each country
    var maxSquare = maxBulletSize * maxBulletSize * 2 * Math.PI;
    var minSquare = minBulletSize * minBulletSize * 2 * Math.PI;

    // create circle for each country
    for (var i = 0; i < mapData.length; i++) {
        var dataItem = mapData[i];
        var value = dataItem.value;

        // calculate size of a bubble
        var square = (value - min) / (max - min) * (maxSquare - minSquare) + minSquare;
        if (square < minSquare) {
            square = minSquare;
        }

        if (dataItem.category === "CAT 1") {
            dataItem.color = "#e8d685";
        } else if (dataItem.category === "CAT 2") {
            dataItem.color = "#c9f0e1";
        } else if (dataItem.category === "CAT 3") {
            dataItem.color = "#ae85c9";
        } else if (dataItem.category === "CAT 4") {
            dataItem.color = "#629b6d";
        } else {
            var colorArr = ["#e8d685", "#c9f0e1", "#ae85c9", "#629b6d", "#d48652"];

            var randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];
            dataItem.color = randomColor;
        }
        var size = Math.sqrt(square / (Math.PI * 2));
        var id = dataItem.code;
        // var icon = "M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM13.704,19.47l-2.338,2.336l-6.43-6.431l6.429-6.432l2.339,2.341l-4.091,4.091L13.704,19.47zM20.775,21.803l-2.337-2.339l4.092-4.09l-4.092-4.092l2.337-2.339l6.43,6.426L20.775,21.803z";
        var icon = "M21.021,16.349c-0.611-1.104-1.359-1.998-2.109-2.623c-0.875,0.641-1.941,1.031-3.103,1.031c-1.164,0-2.231-0.391-3.105-1.031c-0.75,0.625-1.498,1.519-2.111,2.623c-1.422,2.563-1.578,5.192-0.35,5.874c0.55,0.307,1.127,0.078,1.723-0.496c-0.105,0.582-0.166,1.213-0.166,1.873c0,2.932,1.139,5.307,2.543,5.307c0.846,0,1.265-0.865,1.466-2.189c0.201,1.324,0.62,2.189,1.463,2.189c1.406,0,2.545-2.375,2.545-5.307c0-0.66-0.061-1.291-0.168-1.873c0.598,0.574,1.174,0.803,1.725,0.496C22.602,21.541,22.443,18.912,21.021,16.349zM15.808,13.757c2.362,0,4.278-1.916,4.278-4.279s-1.916-4.279-4.278-4.279c-2.363,0-4.28,1.916-4.28,4.279S13.445,13.757,15.808,13.757z";
        // var icon = "M21.066,20.667c1.227-0.682,1.068-3.311-0.354-5.874c-0.611-1.104-1.359-1.998-2.109-2.623c-0.875,0.641-1.941,1.031-3.102,1.031c-1.164,0-2.231-0.391-3.104-1.031c-0.75,0.625-1.498,1.519-2.111,2.623c-1.422,2.563-1.578,5.192-0.35,5.874c0.549,0.312,1.127,0.078,1.723-0.496c-0.105,0.582-0.166,1.213-0.166,1.873c0,2.938,1.139,5.312,2.543,5.312c0.846,0,1.265-0.865,1.466-2.188c0.2,1.314,0.62,2.188,1.461,2.188c1.396,0,2.545-2.375,2.545-5.312c0-0.66-0.062-1.291-0.168-1.873C19.939,20.745,20.516,20.983,21.066,20.667zM15.5,12.201c2.361,0,4.277-1.916,4.277-4.279S17.861,3.644,15.5,3.644c-2.363,0-4.28,1.916-4.28,4.279S13.137,12.201,15.5,12.201zM24.094,14.914c1.938,0,3.512-1.573,3.512-3.513c0-1.939-1.573-3.513-3.512-3.513c-1.94,0-3.513,1.573-3.513,3.513C20.581,13.341,22.153,14.914,24.094,14.914zM28.374,17.043c-0.502-0.907-1.116-1.641-1.732-2.154c-0.718,0.526-1.594,0.846-2.546,0.846c-0.756,0-1.459-0.207-2.076-0.55c0.496,1.093,0.803,2.2,0.861,3.19c0.093,1.516-0.381,2.641-1.329,3.165c-0.204,0.117-0.426,0.183-0.653,0.224c-0.056,0.392-0.095,0.801-0.095,1.231c0,2.412,0.935,4.361,2.088,4.361c0.694,0,1.039-0.71,1.204-1.796c0.163,1.079,0.508,1.796,1.199,1.796c1.146,0,2.09-1.95,2.09-4.361c0-0.542-0.052-1.06-0.139-1.538c0.492,0.472,0.966,0.667,1.418,0.407C29.671,21.305,29.541,19.146,28.374,17.043zM6.906,14.914c1.939,0,3.512-1.573,3.512-3.513c0-1.939-1.573-3.513-3.512-3.513c-1.94,0-3.514,1.573-3.514,3.513C3.392,13.341,4.966,14.914,6.906,14.914zM9.441,21.536c-1.593-0.885-1.739-3.524-0.457-6.354c-0.619,0.346-1.322,0.553-2.078,0.553c-0.956,0-1.832-0.321-2.549-0.846c-0.616,0.513-1.229,1.247-1.733,2.154c-1.167,2.104-1.295,4.262-0.287,4.821c0.451,0.257,0.925,0.064,1.414-0.407c-0.086,0.479-0.136,0.996-0.136,1.538c0,2.412,0.935,4.361,2.088,4.361c0.694,0,1.039-0.71,1.204-1.796c0.165,1.079,0.509,1.796,1.201,1.796c1.146,0,2.089-1.95,2.089-4.361c0-0.432-0.04-0.841-0.097-1.233C9.874,21.721,9.651,21.656,9.441,21.536z";
        dataProvider.images.push({
            // type: "circle",

            svgPath: icon,
            // type: "circle",
            width: size,
            height: size,
            color: dataItem.color,
            longitude: latlong[id].longitude,
            latitude: latlong[id].latitude,
            title: dataItem.name,
            value: value
        });
    }

    map.dataProvider = dataProvider;

    // Listen for the init event and initialize box2d part
    map.addListener("init", initBox2D)

    map.write("mapdiv");
});


// BOX2D (Physics) part
var width = 900;
var height = 600;
var pixels2meters = 30; // box2d uses meters, not pixels and this is ratio
var framesPerSecond = 40;
var world;
var images;

function initBox2D() {
    var b2Vec2 = Box2D.Common.Math.b2Vec2;
    var b2BodyDef = Box2D.Dynamics.b2BodyDef;
    var b2Body = Box2D.Dynamics.b2Body;
    var b2FixtureDef = Box2D.Dynamics.b2FixtureDef;
    var b2Fixture = Box2D.Dynamics.b2Fixture;
    var b2World = Box2D.Dynamics.b2World;
    var b2PolygonShape = Box2D.Collision.Shapes.b2PolygonShape;
    var b2CircleShape = Box2D.Collision.Shapes.b2CircleShape;
    var b2DistanceJointDef = Box2D.Dynamics.Joints.b2DistanceJointDef;
    var b2DebugDraw = Box2D.Dynamics.b2DebugDraw;


    world = new b2World(
        new b2Vec2(0, 10), //gravity
        false //allow sleep, false otherwise joints might not be restored
    );

    // walls and ground. please, study box2d tutorials if you want to understand everything below
    var wallsBodyDef = new b2BodyDef();
    wallsBodyDef.type = b2Body.b2_staticBody;

    var wallsFixtureDef = new b2FixtureDef();
    wallsFixtureDef.density = 1.0;
    wallsFixtureDef.friction = 0.5;
    wallsFixtureDef.restitution = 0.2;

    // floor
    wallsFixtureDef.shape = new b2PolygonShape();
    wallsFixtureDef.shape.SetAsBox(width / pixels2meters, 10 / pixels2meters);
    wallsBodyDef.position.Set(0, (height - 10) / pixels2meters);
    world.CreateBody(wallsBodyDef).CreateFixture(wallsFixtureDef);

    // left wall
    wallsFixtureDef.shape.SetAsBox(5 / pixels2meters, height / pixels2meters);
    wallsBodyDef.position.Set(0, 0);
    world.CreateBody(wallsBodyDef).CreateFixture(wallsFixtureDef);

    // right wall
    wallsBodyDef.position.Set(width / pixels2meters, 0);
    world.CreateBody(wallsBodyDef).CreateFixture(wallsFixtureDef);


    // bubbles
    var bubbleBodyDef = new b2BodyDef();
    bubbleBodyDef.angularDamping = 3; // we don't want to bubbles to rotate like crazy
    bubbleBodyDef.linearDamping = 0.5; // makes movement more smooth. If you increase this value, bubbles will move like in some oil
    bubbleBodyDef.type = b2Body.b2_dynamicBody;

    var bubbleFixtureDef = new b2FixtureDef();
    bubbleFixtureDef.density = 0.2;
    bubbleFixtureDef.friction = 0.3;
    bubbleFixtureDef.restitution = 0.6; // adjust this property to reduce or increase bouncing

    // we need to keep bubbles in place, so we create a static body to which bubbles will be constrained - think of a nail at each bubble position
    var nailFixtureDef = new b2FixtureDef();
    nailFixtureDef.shape = new b2CircleShape(2 / pixels2meters);

    var nailBodyDef = new b2BodyDef();
    nailBodyDef.type = b2Body.b2_staticBody; // nails are static, they don't move

    // now, loop through images of map's data provider
    images = map.dataProvider.images;

    for (var i = 0; i < images.length; i++) {
        var image = images[i];

        // create bubble
        bubbleFixtureDef.shape = new b2CircleShape(image.width / 2 / pixels2meters);
        bubbleBodyDef.position.x = image.displayObject.x / pixels2meters;
        bubbleBodyDef.position.y = image.displayObject.y / pixels2meters;
        var bubble = world.CreateBody(bubbleBodyDef).CreateFixture(bubbleFixtureDef);

        // create nail
        nailBodyDef.position.x = image.displayObject.x / pixels2meters;
        nailBodyDef.position.y = image.displayObject.y / pixels2meters;
        var nail = world.CreateBody(nailBodyDef).CreateFixture(nailFixtureDef);
        nail.SetSensor(true); // nail is sensor - this means the bubbles won't colide with it and can overlap

        // now, we need to link bubble with a nail with a joint (imagine a string)
        var jointDef = new b2DistanceJointDef();
        jointDef.bodyA = bubble.GetBody();
        jointDef.bodyB = nail.GetBody();
        // the following tow lines describes stiffness of a string, try to modify them.
        jointDef.dampingRatio = 0.4;
        jointDef.frequencyHz = 1.5;
        // lenght 0 means that the bubble will try to be at the nail position (if other bubbles allow)
        jointDef.length = 0;
        //connect the centers
        jointDef.localAnchorA = new b2Vec2(0, 0);
        jointDef.localAnchorB = new b2Vec2(0, 0);

        var joint = world.CreateJoint(jointDef);
        // store definition, image and joint in mapImage object
        image.jointDef = jointDef;
        image.box2Dimage = bubble;
        image.joint = joint;
    }

    //setup debug draw (if you don't need it, just delete the lines, uncomment to see how box objects are drawn)
    /*
    var debugDraw = new b2DebugDraw();
    debugDraw.SetSprite(document.getElementById("canvas").getContext("2d"));
    debugDraw.SetDrawScale(pixels2meters);
    debugDraw.SetFillAlpha(0.5);
    debugDraw.SetLineThickness(1.0);
    debugDraw.SetFlags(b2DebugDraw.e_shapeBit | b2DebugDraw.e_jointBit);
    world.SetDebugDraw(debugDraw);
    */
    // interval to update bubbles
    // release initially to do some animation
    releaseBubbles();
    // attach bubbles in some time
    setTimeout(attachBubbles, 8000);
    window.setInterval(update, 1000 / framesPerSecond);
}

//update bubbles
function update() {
    var images = map.dataProvider.images;

    for (var i = 0; i < images.length; i++) {
        var image = images[i];
        var box2Dimage = image.box2Dimage;
        // box2D takes care of positions of bubbles, we simply get those positions and set them on ammap bubbles.
        var bbody = box2Dimage.GetBody();
        var position = bbody.GetPosition();

        var currentX = position.x;
        var currentY = position.y;

        image.displayObject.translate(position.x * 30, position.y * 30, 1, true);
    }


    world.Step(1 / framesPerSecond, 10, 10);

    // uncomment next line if you want to see box2d objects in action (also canvas element at the bottom)
    //world.DrawDebugData();
    world.ClearForces();
};

// releases bubbles
function releaseBubbles() {
    for (var i = 0; i < images.length; i++) {
        var image = images[i];
        setTimeout(destroyJoint, Math.random() * 2000, image); // we release bubbles randomly during 2 sec interval
    }
}

// destroys joint
function destroyJoint(image) {
    if (image.joint) {
        world.DestroyJoint(image.joint);
        image.joint = null;
    }
}

// attach bubbles back
function attachBubbles() {
    for (var i = 0; i < images.length; i++) {
        var image = images[i];
        if (!image.joint) {
            setTimeout(restoreJoint, Math.random() * 100, image); // we attach bubbles randomly during 0.1 sec interval
        }
    }
}

// restores joint
function restoreJoint(image) {
    var joint = world.CreateJoint(image.jointDef);
    image.joint = joint;
}
