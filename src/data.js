
export const DummyData = {
    name: "VISION",
    children: [
      {
        name: "MISSION_1",
        fill: "green",
        depth: 1,
        parent: "VISION",
        attributes: {
          department: "Production",
        },
        children: [
          {
            name: "STRETEGY_1",
            depth: 2,
            parent: "MISSION_1",
            attributes: {
              department: "Vison",
            },
            children: [
              {
                name: "BENEFIT_1_1",
                parent: "STRETEGY_1",
                depth: 3,
                attributes: {
                  department: "Vison",
                },
                children: [],
                // __rd3t: {id:'B1', depth:3, collapse: true},
              },
            ],
            // __rd3t: {id:'S1', depth:2, collapse: true},
          },
          {
            name: "STRETEGY_2",
            parent: "MISSION_1",
            depth: 2,
            attributes: {
              department: "Mission",
            },
            children: [
              {
                name: "BENEFIT_2_1",
                parent: "STRETEGY_2",
                depth: 3,
                attributes: {
                  department: "Vison",
                },
                children: [],
                // __rd3t: {id:'B2', depth:3, collapse: true},
              },
            ],
            // __rd3t: {id:'S2', depth:2, collapse: true},
          },
          {
            name: "STRETEGY_3",
            parent: "MISSION_1",
            depth: 2,
            attributes: {
              department: "Benefit",
            },
            children: [
              {
                name: "BENEFIT_3_1",
                depth: 3,
                parent: "STRETEGY_3",
                attributes: {
                  department: "Benefit",
                },
                children: [],
                // __rd3t: {id:'B3', depth:3, collapse: true},
              },
            ],
            // __rd3t: {id:'S3', depth:2, collapse: true},
          },
        ],
        // __rd3t: {id:'M1', depth:1, collapse: true},
      },
      {
        name: "MISSION_2",
        depth: 1,
        attributes: {
          department: "Production",
        },
        children: [
          {
            name: "STRETEGY_2_1_1",
            depth: 2,
            attributes: {
              department: "Fabrication",
            },
            children: [],
            // __rd3t: {id:'S21', depth:2, collapse: true},
          },
        ],
        // __rd3t: {id:'M2', depth:1, collapse: true},
      },
    ],
  };
  