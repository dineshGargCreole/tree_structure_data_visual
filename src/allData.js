export const treeData = [
  {
  name: "VISION",
  children: [
    {
      name: "MISSION_1",
      fill: "green",
      parent: "VISION",
      attributes: {
        department: "Production",
      },
      children: [
        {
          name: "STRETEGY_1",
          parent: "MISSION_1",
          attributes: {
            department: "Vison",
          },
          children: [
            {
              name: "BENEFIT_1_1",
              parent: "STRETEGY_1",
              attributes: {
                department: "Vison",
              },
              children: [
                {
                  name: "OBJ_1",
                  parent: "BENEFIT_1_1",
                  attributes: {
                    department: "Vison",
                  },
                  children: [
                    {
                      name: "KR_1",
                      parent: "OBJ_1",

                      children: [
                        {
                          name: "TASK_1",
                          parent: "KR_1",
                          last: true,
                        },
                        {
                          name: "TASK_2",
                          parent: "KR_1",
                          last: true,
                        },
                      ],
                    },
                    {
                      name: "KR_2",
                      children: [
                        {
                          name: "TASK_1",
                          parent: "KR_2",

                          last: true,
                        },
                        {
                          name: "TASK_2",
                          parent: "KR_2",

                          last: true,
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "OBJ_2",
                  attributes: {
                    department: "Vison",
                  },
                  children: [
                    {
                      name: "KR_1",
                      parent: "OBJ_2",

                      children: [
                        {
                          name: "TASK_1",
                          parent: "KR_1",

                          last: true,
                        },
                        {
                          name: "TASK_2",
                          parent: "KR_1",

                          last: true,
                        },
                      ],
                    },
                    {
                      name: "KR_2",
                      parent: "OBJ_2",

                      children: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "STRETEGY_2",
          parent: "MISSION_1",

          attributes: {
            department: "Mission",
          },
          children: [
            {
              name: "BENEFIT_2_1",
              parent: "STRETEGY_2",
              attributes: {
                department: "Vison",
              },
              children: [
                {
                  name: "OBJ_1",
                  parent: "BENEFIT_2_1",
                  attributes: {
                    department: "Vison",
                  },
                  children: [
                    {
                      name: "KR_1",
                      children: [
                        {
                          name: "TASK_1",
                          parent: "KR_1",
                          last: true,
                        },
                        {
                          name: "TASK_2",
                          last: true,
                        },
                      ],
                    },
                    {
                      name: "KR_2",
                      children: [
                        {
                          name: "TASK_1",
                          last: true,
                        },
                        {
                          name: "TASK_2",
                          last: true,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "STRETEGY_3",
          parent: "MISSION_1",
          attributes: {
            department: "Benefit",
          },
          children: [
            {
              name: "BENEFIT_3_1",
              parent: "STRETEGY_3",
              attributes: {
                department: "Benefit",
              },
              children: [
                {
                  name: "OBJ_1",
                  attributes: {
                    department: "Vison",
                  },
                  children: [
                    {
                      name: "KR_1",
                      children: [
                        {
                          name: "TASK_1",
                          last: true,
                        },
                        {
                          name: "TASK_2",
                          last: true,
                        },
                      ],
                    },
                    {
                      name: "KR_2",
                      children: [
                        {
                          name: "TASK_1",
                          last: true,
                        },
                        {
                          name: "TASK_2",
                          last: true,
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "MISSION_2",
      attributes: {
        department: "Production",
      },
      children: [
        {
          name: "STRETEGY_2_1_1",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Worker",
            },
          ],
        },
      ],
    },
  ],
}
];