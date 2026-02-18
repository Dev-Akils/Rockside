
// First floor image  2D
import firstfloor2D from '../assets/2D/FIRST FLOOR/FIRST  FLOOR 2D.jpg';
import wingA from '../assets/2D/FIRST FLOOR/WING - A FLAT 1_1.jpg';
import wingB from '../assets/2D/FIRST FLOOR/WING - B FLAT 1.jpg';

// First floor image  3D
import firstfloor3D from '../assets/3D ISO/FIRST FLOOR/FIRST  FLOOR.jpg';
import wing3DA from '../assets/3D ISO/FIRST FLOOR/WING - A FLAT 1.jpg';
import wing3DB from '../assets/3D ISO/FIRST FLOOR/WING - B FLAT 1.jpg';

// First floor image  2Dstatic
import firstfloor2Dstatic from '../assets/2D STATIC/FIRST FLOOR/FIRST FLOOR PLAN.jpg';
import wing2DA from '../assets/2D STATIC/FIRST FLOOR/WING - A FLAT 1.jpg';
import wing2DB from '../assets/2D STATIC/FIRST FLOOR/WING - B FLAT 1.jpg';

// Second floor image  2D
import secondfloor2D from '../assets/2D/SECOND FLOOR/SECOND FLOOR.jpg';
import wingAA2D1 from '../assets/2D/SECOND FLOOR/WING - A FLAT 1.jpg';
import wingAA2D2 from '../assets/2D/SECOND FLOOR/WING - A FLAT 2.jpg';
import wingBB2D1 from '../assets/2D/SECOND FLOOR/WING - B FLAT 1.jpg';
import wingBB2D2 from '../assets/2D/SECOND FLOOR/WING - B FLAT 2.jpg';

//Second floor image 3D
import secondfloor3D from '../assets/3D ISO/SECOND FLOOR/SECOND FLOOR.jpg';

import wingAA3D1 from '../assets/3D ISO/SECOND FLOOR/WING - A FLAT 1.jpg';
import wingAA3D2 from '../assets/3D ISO/SECOND FLOOR/WING - A FLAT 2.jpg';
import wingBB3D1 from '../assets/3D ISO/SECOND FLOOR/WING - B FLAT 1.jpg';
import wingBB3D2 from '../assets/3D ISO/SECOND FLOOR/WING - B FLAT 2.jpg';

// Second floor image 2D static
import secondfloor2Dstatic from '../assets/2D STATIC/SECOND FLOOR/SECOND FLOOR PLAN.jpg';
import wingAA2Dstatic1 from '../assets/2D STATIC/SECOND FLOOR/WING - A FLAT 1.jpg';
import wingAA2Dstatic2 from '../assets/2D STATIC/SECOND FLOOR/WING - A FLAT 2.jpg'
import wingBB2Dstatic1 from '../assets/2D STATIC/SECOND FLOOR/WING - B FLAT 1.jpg';
import wingBB2Dstatic2 from '../assets/2D STATIC/SECOND FLOOR/WING - B FLAT 2.jpg';


// Typical floor image 2D
import thirdfloor2D from '../assets/2D/TYPICAL FLOOR/TYPICAL FLOOR.jpg';
import wingAAA2D1 from '../assets/2D/TYPICAL FLOOR/WING - A FLAT 1.jpg';
import wingAAA2D2 from '../assets/2D/TYPICAL FLOOR/WING - A FLAT 2.jpg';
import wingBBB2D1 from '../assets/2D/TYPICAL FLOOR/WING - B FLAT 1.jpg';
import wingBBB2D2 from '../assets/2D/TYPICAL FLOOR/WING - B FLAT 2.jpg';

// Typical floor image 3D
import thirdfloor3D from '../assets/3D ISO/TYPICAL FLOOR/TYPICAL FLOOR.jpg';
import wingAAA3D1 from '../assets/3D ISO/TYPICAL FLOOR/WING - A FLAT 1.jpg';
import wingAAA3D2 from '../assets/3D ISO/TYPICAL FLOOR/WING - A FLAT 2.jpg';
import wingBBB3D1 from '../assets/3D ISO/TYPICAL FLOOR/WING - B FLAT 1.jpg';
import wingBBB3D2 from '../assets/3D ISO/TYPICAL FLOOR/WING - B FLAT 2.jpg';

// Typical floor image 2D static
import thirdfloor2Dstatic from '../assets/2D STATIC/TYPICAL FLOOR/TYPICAL FLOOR PLAN.jpg'
import wingAAAA2D1 from '../assets/2D STATIC/TYPICAL FLOOR/WING - A FLAT 1.jpg';
import wingAAAA2D2 from '../assets/2D STATIC/TYPICAL FLOOR/WING - A FLAT 2.jpg';
import wingBBBB2D1 from '../assets/2D STATIC/TYPICAL FLOOR/WING - B FLAT 1.jpg';
import wingBBBB2D2 from '../assets/2D STATIC/TYPICAL FLOOR/WING - B FLAT 2.jpg';











export const floorData = [
    {
        id: 1, name: "Floor-1", image2D: firstfloor2D, image3D: firstfloor3D,
        image2Dstatic: firstfloor2Dstatic,
        imageSettings: {
            svgSize: "0 0 5000 2813",
            imageWidth: "5000",
            imageHeight: "2813",
        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },

        units: [
            {
                id: 1, name: "Wing A Flat 1",
                type: "4BHK", image2D: wingA, image3D: wing3DA,
                image2Dstatic: wing2DA,
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "344,875,402,875,424,849,605,849,587,880,631,875,635,911,733,915,741,875,1006,880,1006,906,1090,911,1108,853,1443,849,1434,871,1461,875,1456,906,1624,911,1633,875,1911,880,1920,853,2101,849,2101,884,2282,875,2273,1189,1496,1189,1483,1339,1244,1335,1227,1418,680,1427,706,1317,728,1312,737,1273,825,1277,843,1224,896,1224,905,1189,671,1189,631,1312,212,1308",
            },
            // { id: 2, name: "Wing A Flat 2", 
            //     type: "4BHK", image2D: wingA, image3D: wing3DA, image2Dstatic: wing2DA,  polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198,1787,2579,1797,2489,2438,2012,2428,1975,2539,1864,2544,1811,2751,1393,2751,1477,2539,1387,2534,1324,2698,1207,2687,1096,2931,715,2931,847,2693", },
            {
                id: 3, name: "Wing B Flat 1", type: "4BHK", image2D: wingB, image3D: wing3DB,
                image2Dstatic: wing2DB,
                hoverColor: "rgba(236,169,247,0.3)",
                polygonPoints: "2674,880,2855,875,2860,849,3036,853,3032,875,3323,884,3327,911,3500,906,3495,880,3522,875,3522,853,3861,853,3857,880,3901,880,3906,906,3950,906,3954,875,4214,875,4232,906,4338,906,4325,880,4356,875,4360,853,4545,853,4554,875,4607,875,4744,1312,4320,1312,4303,1251,4250,1259,4232,1184,4056,1184,4060,1211,4109,1215,4126,1277,4219,1282,4223,1312,4254,1312,4276,1427,3645,1423,3636,1339,3473,1339,3464,1255,3248,1255,3252,1255,3102,1259,2988,1259,2820,1259,2683,1259",
            },
            // { id: 4, name: "Wing B Flat 2", type: "4BHK", image2D: wingB, 
            //     image3D: wing3DB, image2Dstatic: wing2DB, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389,1292,1394,1313,1347,2139,1347,2092,1447,1864,1452,1785,1633,2245,1649,2198" },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]

    },
    {
        id: 2, name: "Floor-2", image2D: secondfloor2D,
        image3D: secondfloor3D, image2Dstatic: secondfloor2Dstatic,

        imageSettings: {
            svgSize: "0 0 1200 800",
            imageWidth: 1200,
            imageHeight: 800,

        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#e892f5",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },

        units: [
            {
                id: 1, name: "Wing A Flat 1", type: "4BHK",
                  hoverColor: "rgba(236,169,247,0.3)",
                image2D: wingAA2D1, image3D: wingAA3D1, image2Dstatic: wingAA2Dstatic1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 2, name: "Wing A Flat 2",
                  hoverColor: "rgba(236,169,247,0.3)",
                 type: "4BHK", image2D: wingAA2D2, image3D: wingAA3D2,
                image2Dstatic: wingAA2Dstatic2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 3, name: "Wing B Flat 1", 
                hoverColor: "rgba(236,169,247,0.3)",
                type: "4BHK", image2D: wingBB2D1, image3D: wingBB3D1,
                image2Dstatic: wingBB2Dstatic1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 4, name: "Wing B Flat 2",
                  hoverColor: "rgba(236,169,247,0.3)",
                 type: "4BHK", image2D: wingBB2D2, image3D: wingBB3D2,
                image2Dstatic: wingBB2Dstatic2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },
    {
        id: 3, name: "Floor-3", image2D: thirdfloor2D,
        image3D: thirdfloor3D, image2Dstatic: thirdfloor2Dstatic
        ,
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },

        imageSettings: {
            svgSize: "0 0 1200 800",
            imageWidth: 1200,
            imageHeight: 800,

        },
        units: [
            {
                id: 1, name: "Wing A Flat 1",type: "4BHK", hoverColor: "rgba(236,169,247,0.3)", image2D: wingAAA2D1, image3D: wingAAA3D1,
                image2Dstatic: wingAAAA2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 2, name: "Wing A Flat 2",type: "4BHK", image2D: wingAAA2D2, image3D: wingAAA3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingAAAA2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 3, name: "Wing B Flat 1",type: "4BHK", image2D: wingBBB2D1, image3D: wingBBB3D1,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 4, name: "Wing B Flat 2",type: "4BHK", image2D: wingBBB2D2, image3D: wingBBB3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },
    {
        id: 4, name: "Floor-4", image2D: thirdfloor2D, image3D: thirdfloor3D,
        image2Dstatic: thirdfloor2Dstatic
        ,
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },

        imageSettings: {
            svgSize: "0 0 1200 800",
            imageWidth: 1200,
            imageHeight: 800,

        },
       units: [
            {
                id: 1, name: "Wing A Flat 1",type: "4BHK", hoverColor: "rgba(236,169,247,0.3)", image2D: wingAAA2D1, image3D: wingAAA3D1,
                image2Dstatic: wingAAAA2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 2, name: "Wing A Flat 2",type: "4BHK", image2D: wingAAA2D2, image3D: wingAAA3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingAAAA2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 3, name: "Wing B Flat 1",type: "4BHK", image2D: wingBBB2D1, image3D: wingBBB3D1,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 4, name: "Wing B Flat 2",type: "4BHK", image2D: wingBBB2D2, image3D: wingBBB3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },
    {
        id: 5, name: "Floor-5", image2D: thirdfloor2D, image3D: thirdfloor3D,
        image2Dstatic: thirdfloor2Dstatic,
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },

        imageSettings: {
            svgSize: "0 0 1200 800",
            imageWidth: 1200,
            imageHeight: 800,

        },
       units: [
            {
                id: 1, name: "Wing A Flat 1",type: "4BHK", hoverColor: "rgba(236,169,247,0.3)", image2D: wingAAA2D1, image3D: wingAAA3D1,
                image2Dstatic: wingAAAA2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 2, name: "Wing A Flat 2",type: "4BHK", image2D: wingAAA2D2, image3D: wingAAA3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingAAAA2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 3, name: "Wing B Flat 1",type: "4BHK", image2D: wingBBB2D1, image3D: wingBBB3D1,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 4, name: "Wing B Flat 2",type: "4BHK", image2D: wingBBB2D2, image3D: wingBBB3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },
    {
        id: 6, name: "Floor-6", image2D: thirdfloor2D, image3D: thirdfloor3D,
        imageSettings: {
            svgSize: "0 0 1200 800",
            imageWidth: 1200,
            imageHeight: 800,

        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },

        image2Dstatic: thirdfloor2Dstatic,
       units: [
            {
                id: 1, name: "Wing A Flat 1",type: "4BHK", hoverColor: "rgba(236,169,247,0.3)", image2D: wingAAA2D1, image3D: wingAAA3D1,
                image2Dstatic: wingAAAA2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 2, name: "Wing A Flat 2",type: "4BHK", image2D: wingAAA2D2, image3D: wingAAA3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingAAAA2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 3, name: "Wing B Flat 1",type: "4BHK", image2D: wingBBB2D1, image3D: wingBBB3D1,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 4, name: "Wing B Flat 2",type: "4BHK", image2D: wingBBB2D2, image3D: wingBBB3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },
    {
        id: 7, name: "Floor-7", image2D: thirdfloor2D, image3D: thirdfloor3D,
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },

        image2Dstatic: thirdfloor2Dstatic,
        imageSettings: {
            svgSize: "0 0 1200 800",
            imageWidth: 1200,
            imageHeight: 800,

        },
         units: [
            {
                id: 1, name: "Wing A Flat 1",type: "4BHK", hoverColor: "rgba(236,169,247,0.3)", image2D: wingAAA2D1, image3D: wingAAA3D1,
                image2Dstatic: wingAAAA2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 2, name: "Wing A Flat 2",type: "4BHK", image2D: wingAAA2D2, image3D: wingAAA3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingAAAA2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 3, name: "Wing B Flat 1",type: "4BHK", image2D: wingBBB2D1, image3D: wingBBB3D1,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 4, name: "Wing B Flat 2",type: "4BHK", image2D: wingBBB2D2, image3D: wingBBB3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },
    {
        id: 8, name: "Floor-8", image2D: thirdfloor2D, image3D: thirdfloor3D,
        image2Dstatic: thirdfloor2Dstatic,
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },

        imageSettings: {
            svgSize: "0 0 1200 800",
            imageWidth: 1200,
            imageHeight: 800,

        },
       units: [
            {
                id: 1, name: "Wing A Flat 1",type: "4BHK", hoverColor: "rgba(236,169,247,0.3)", image2D: wingAAA2D1, image3D: wingAAA3D1,
                image2Dstatic: wingAAAA2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 2, name: "Wing A Flat 2",type: "4BHK", image2D: wingAAA2D2, image3D: wingAAA3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingAAAA2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 3, name: "Wing B Flat 1",type: "4BHK", image2D: wingBBB2D1, image3D: wingBBB3D1,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 4, name: "Wing B Flat 2",type: "4BHK", image2D: wingBBB2D2, image3D: wingBBB3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ],
    },
    {
        id: 9, name: "Floor-9", image2D: thirdfloor2D, image3D: thirdfloor3D,
        image2Dstatic: thirdfloor2Dstatic,
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },

        imageSettings: {
            svgSize: "0 0 1200 800",
            imageWidth: 1200,
            imageHeight: 800,

        },
       units: [
            {
                id: 1, name: "Wing A Flat 1",type: "4BHK", hoverColor: "rgba(236,169,247,0.3)", image2D: wingAAA2D1, image3D: wingAAA3D1,
                image2Dstatic: wingAAAA2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 2, name: "Wing A Flat 2",type: "4BHK", image2D: wingAAA2D2, image3D: wingAAA3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingAAAA2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 3, name: "Wing B Flat 1",type: "4BHK", image2D: wingBBB2D1, image3D: wingBBB3D1,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 4, name: "Wing B Flat 2",type: "4BHK", image2D: wingBBB2D2, image3D: wingBBB3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },
    {
        id: 10, name: "Floor-10", image2D: thirdfloor2D, image3D: thirdfloor3D,
        image2Dstatic: thirdfloor2Dstatic,
        imageSettings: {
            svgSize: "0 0 1200 800",
            imageWidth: 1200,
            imageHeight: 800,

        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },

       units: [
            {
                id: 1, name: "Wing A Flat 1",type: "4BHK", hoverColor: "rgba(236,169,247,0.3)", image2D: wingAAA2D1, image3D: wingAAA3D1,
                image2Dstatic: wingAAAA2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 2, name: "Wing A Flat 2",type: "4BHK", image2D: wingAAA2D2, image3D: wingAAA3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingAAAA2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 3, name: "Wing B Flat 1",type: "4BHK", image2D: wingBBB2D1, image3D: wingBBB3D1,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 4, name: "Wing B Flat 2",type: "4BHK", image2D: wingBBB2D2, image3D: wingBBB3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ],
    },
    {
        id: 11, name: "Floor-11", image2D: thirdfloor2D, image3D: thirdfloor3D,
        image2Dstatic: thirdfloor2Dstatic,
        imageSettings: {
            svgSize: "0 0 1200 800",
            imageWidth: 1200,
            imageHeight: 800,

        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ],

       units: [
            {
                id: 1, name: "Wing A Flat 1",type: "4BHK", hoverColor: "rgba(236,169,247,0.3)", image2D: wingAAA2D1, image3D: wingAAA3D1,
                image2Dstatic: wingAAAA2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 2, name: "Wing A Flat 2",type: "4BHK", image2D: wingAAA2D2, image3D: wingAAA3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingAAAA2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 3, name: "Wing B Flat 1",type: "4BHK", image2D: wingBBB2D1, image3D: wingBBB3D1,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 4, name: "Wing B Flat 2",type: "4BHK", image2D: wingBBB2D2, image3D: wingBBB3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
        ],
    },
    {
        id: 12, name: "Floor-12", image2D: thirdfloor2D, image3D: thirdfloor3D,
        image2Dstatic: thirdfloor2Dstatic,
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },
        imageSettings: {
            svgSize: "0 0 1200 800",
            imageWidth: 1200,
            imageHeight: 800,

        },
        units: [
            {
                id: 1, name: "Wing A Flat 1",type: "4BHK", hoverColor: "rgba(236,169,247,0.3)", image2D: wingAAA2D1, image3D: wingAAA3D1,
                image2Dstatic: wingAAAA2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 2, name: "Wing A Flat 2",type: "4BHK", image2D: wingAAA2D2, image3D: wingAAA3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingAAAA2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 3, name: "Wing B Flat 1",type: "4BHK", image2D: wingBBB2D1, image3D: wingBBB3D1,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 4, name: "Wing B Flat 2",type: "4BHK", image2D: wingBBB2D2, image3D: wingBBB3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },
    {
        id: 13, name: "Floor-13", image2D: thirdfloor2D, image3D: thirdfloor3D,
        image2Dstatic: thirdfloor2Dstatic,
        imageSettings: {
            svgSize: "0 0 1200 800",
            imageWidth: 1200,
            imageHeight: 800,

        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },

       units: [
            {
                id: 1, name: "Wing A Flat 1",type: "4BHK", hoverColor: "rgba(236,169,247,0.3)", image2D: wingAAA2D1, image3D: wingAAA3D1,
                image2Dstatic: wingAAAA2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 2, name: "Wing A Flat 2",type: "4BHK", image2D: wingAAA2D2, image3D: wingAAA3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingAAAA2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 3, name: "Wing B Flat 1",type: "4BHK", image2D: wingBBB2D1, image3D: wingBBB3D1,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 4, name: "Wing B Flat 2",type: "4BHK", image2D: wingBBB2D2, image3D: wingBBB3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },
    {
        id: 14, name: "Floor-14", image2D: thirdfloor2D, image3D: thirdfloor3D,
        image2Dstatic: thirdfloor2Dstatic,
        imageSettings: {
            svgSize: "0 0 1200 800",
            imageWidth: 1200,
            imageHeight: 800,

        },
        buttonSettings: {
            fourBHK: {
                bgColor: "#eca9f7",
                text: "4BHK"
            },
            threeBHK: {
                bgColor: "#00ffe5",
                text: "3BHK"
            }
        },

         units: [
            {
                id: 1, name: "Wing A Flat 1",type: "4BHK", hoverColor: "rgba(236,169,247,0.3)", image2D: wingAAA2D1, image3D: wingAAA3D1,
                image2Dstatic: wingAAAA2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 2, name: "Wing A Flat 2",type: "4BHK", image2D: wingAAA2D2, image3D: wingAAA3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingAAAA2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 3, name: "Wing B Flat 1",type: "4BHK", image2D: wingBBB2D1, image3D: wingBBB3D1,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D1, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
            {
                id: 4, name: "Wing B Flat 2",type: "4BHK", image2D: wingBBB2D2, image3D: wingBBB3D2,  hoverColor: "rgba(236,169,247,0.3)",
                image2Dstatic: wingBBBB2D2, polygonPoints: "397,2671,757,2131,1038,2141,1149,1982,863,1998,1011,1765,1154,1558,1186,1521,1043,1521,1139,1384,1202,1389"
            },
        ],
        features: [
            "Grand double-height air-conditioned building entrance lobby",
            "Beautiful floor lobbies",
            "High-speed elevators",
            "Power backup for water pumps, lifts, firefighting systems, and common area lighting",
            "CCTV Surveillance at building entrance lobby, lifts, and parking entry & exit"
        ]
    },

]