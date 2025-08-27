import { FieldError } from "react-hook-form";

export interface formProps {
    table: "teacher" | "student" | "parent" | "subject" | "class" | "lesson" | "exam" | "assignment" | "result" | "attendance" | "event" |  "announcement",
    type: "create" | "update" | "delete",
    data?: any,
    id?: number,
    icon?: any
}
export interface teacherFormProps  {
    type: "create" | "update"
    data?: any
}
export interface InputFieldProps {
  label: string;
  type?: string;
  register: any;
  name: string;
  defaultValue?: string;
  error?: FieldError;
  hidden?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};