import React from "react";

export interface tableProps {
    columns: {
        header: string;
        accessor: string;
        className?: string;
    }[]
    renderRow: (item : any) => React.ReactNode;
    data: any[];
}