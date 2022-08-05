export const objData = [
    {
        name: "OBJ_1",
        parent: "BENEFIT_1_1",
        attributes: {
          department: "Vison",
        },
        children: [],
        __rd3t: {id:'1', depth:4},
    },
    {
        name: "OBJ_2",
        parent: "BENEFIT_1_1",
        attributes: {
          department: "Vison",
        },
        children: [],
        __rd3t: {id:'2', depth:4},
    },
    {
        name: "OBJ_1",
        parent: "BENEFIT_2_1",
        attributes: {
            department: "Vison",
        },
        children: [],
        __rd3t: {id:'3', depth:4},
    },
    {
        name: "OBJ_1",
        attributes: {
            department: "Vison",
        },
        children: [],
        __rd3t: {id:'4', depth:4},
    }
]


export const krData = [
    {
        name: "KR_1",
        parent: "OBJ_1",

        children: [],
        __rd3t: {id:'5', depth:5},
    },
    {
        name: "KR_2",
        parent: "OBJ_1",

        children: [],
        __rd3t: {id:'6', depth:5},
    },
    {
        name: "KR_1",
        parent: "OBJ_2",

        children: [],
        __rd3t: {id:'7', depth:5},
    },
    {
        name: "KR_2",
        parent: "OBJ_2",

        children: [],
        __rd3t: {id:'8', depth:5},
    }
]

export const taskData = [
    {
        name: "TASK_1",
        parent: "KR_1",
        last: true,
        __rd3t: {id:'9', depth:6, collapse: true},
    }
]
