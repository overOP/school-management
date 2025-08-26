export interface teacherProps {
    id: number,
    teacherId: string,
    name: string,
    email?: string,
    photo: string,
    phone: string,
    subjects: string[],
    classes: string[],
    address: string
}
export interface studentProps {
    id: number,
    studentId: string,
    name: string,
    email?: string,
    photo: string,
    phone?: string,
    grade: number,
    class: string,
    address: string
}
export interface parentProps {
    id: number,
    name: string,
    email?: string,
    students: string[],
    phone: string,
    address: string
}
export interface subjectProps {
    id: number,
    name: string,
    teachers: string[],
}
export interface classProps {
    id: number,
    name: string,
    capacity: number,
    grade: number,
    supervisor: string,
}
export interface lessonProps {
    id: number,
    subject: string,
    class: string,
    teacher: string,
}
export interface examProps {
    id: number,
    subject: string,
    class: string,
    teacher: string,
    date: string
}
export interface assignmentProps {
    id: number,
    subject: string,
    class: string,
    teacher: string,
    dueDate: string
}
export interface resultProps {
    id: number,
    subject: string,
    class: string,
    teacher: string,
    student: string,
    type: "exam" | "assignment",
    date: string,
    score: number
}
export interface eventProps {
    id: number,
    title: string,
    class: string,
    date: string,
    startTime: string,
    endTime: string
}
export interface announcementProps {
    id: number,
    title: string,
    class: string,
    date: string,
}