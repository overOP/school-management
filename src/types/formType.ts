export interface formProps {
    table: "teacher" | "student" | "parent" | "subject" | "class" | "lesson" | "exam" | "assignment" | "result" | "attendance" | "event" |  "announcement",
    type: "create" | "update" | "delete",
    data?: any,
    id?: number,
    icon?: any
}