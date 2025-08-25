export const studentTableColumns = [
    {
        header:"Info",
        accessor:"info"
    },
    {
        header:"Student Id",
        accessor:"studentId",
        className:"hidden md:table-cell"
    },
    {
        header:"Grade",
        accessor:"grade",
        className:"hidden md:table-cell"
    },
    {
        header:"Phone",
        accessor:"phone",
        className:"hidden lg:table-cell"
    },
    {
        header:"Address",
        accessor:"address",
        className:"hidden lg:table-cell"
    },
    {
        header:"Actions",
        accessor:"actions",
    },
]


export const teacherTableColumns = [
    {
        header:"Info",
        accessor:"info"
    },
    {
        header:"Teacher Id",
        accessor:"teacherId",
        className:"hidden md:table-cell"
    },
    {
        header:"Subjects",
        accessor:"subjects",
        className:"hidden md:table-cell"
    },
    {
        header:"Classes",
        accessor:"classes",
        className:"hidden md:table-cell"
    },
    {
        header:"Phone",
        accessor:"phone",
        className:"hidden lg:table-cell"
    },
    {
        header:"Address",
        accessor:"address",
        className:"hidden lg:table-cell"
    },
    {
        header:"Actions",
        accessor:"actions",
    },
]

export const parentTableColumns = [
    {
        header:"Info",
        accessor:"info"
    },
    {
        header:"Student Names",
        accessor:"students",
        className:"hidden md:table-cell"
    },
    {
        header:"Phone",
        accessor:"phone",
        className:"hidden lg:table-cell"
    },
    {
        header:"Address",
        accessor:"address",
        className:"hidden lg:table-cell"
    },
    {
        header:"Actions",
        accessor:"actions",
    },
]

export const subjectTableColumns = [
    {
        header:"Student Name",
        accessor:"name"
    },
    {
        header:"Teachers",
        accessor:"teachers",
        className:"hidden md:table-cell"
    },
    {
        header:"Actions",
        accessor:"actions",
    },
]

export const classTableColumns = [
    {
        header:"Class Name",
        accessor:"name"
    },
    {
        header:"Capacity",
        accessor:"capacity",
        className:"hidden md:table-cell"
    },
    {
        header:"Grade",
        accessor:"grade",
        className:"hidden md:table-cell"
    },
    {
        header:"Supervisor",
        accessor:"supervisor",
        className:"hidden md:table-cell"
    },
    {
        header:"Actions",
        accessor:"actions",
    },
]

export const lessonTableColumns = [
    {
        header:"Subject Name",
        accessor:"name"
    },
    {
        header:"Class",
        accessor:"class",
    },
    {
        header:"Teacher",
        accessor:"teacher",
        className:"hidden md:table-cell"
    },
    {
        header:"Actions",
        accessor:"actions",
    },
]

export const exmaTableColumns = [
    {
        header:"Subject Name",
        accessor:"name"
    },
    {
        header:"Class",
        accessor:"class",
    },
    {
        header:"Teacher",
        accessor:"teacher",
        className:"hidden md:table-cell"
    },
    {
        header:"Date",
        accessor:"date",
        className:"hidden md:table-cell"
    },
    {
        header:"Actions",
        accessor:"actions",
    },
]

export const assignmentTableColumns = [
    {
        header:"Subject Name",
        accessor:"name"
    },
    {
        header:"Class",
        accessor:"class",
    },
    {
        header:"Teacher",
        accessor:"teacher",
        className:"hidden md:table-cell"
    },
    {
        header:"DueDate",
        accessor:"dueDate",
        className:"hidden md:table-cell"
    },
    {
        header:"Actions",
        accessor:"actions",
    },
]

export const resultTableColumns = [
    {
        header:"Subject Name",
        accessor:"name"
    },
    {
        header:"Student",
        accessor:"student",
    },
    {
        header:"Score",
        accessor:"score",
        className:"hidden md:table-cell"
    },

    {
        header:"Teacher",
        accessor:"teacher",
        className:"hidden md:table-cell"
    },    
    {
        header:"Class",
        accessor:"class",
        className:"hidden md:table-cell"
    },
    {
        header:"Date",
        accessor:"date",
        className:"hidden md:table-cell"
    },
    {
        header:"Actions",
        accessor:"actions",
    },
]