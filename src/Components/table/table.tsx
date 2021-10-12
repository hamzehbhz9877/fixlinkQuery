import {ColHTMLAttributes, DetailedHTMLProps, FC, ReactNode} from "react";

interface Props {
    children: ReactNode,
    tableHeadingItem: string[],
    classes?:string,
    cols?: DetailedHTMLProps<ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>
}

const Table: FC<Props> = ({children,cols, tableHeadingItem,classes}) => {
    return (
        <div className="table-overflow">
            <table className={`table table-striped table-bordered ${classes ? classes : ""}`} width="100%">
                {cols}
                <thead>
                <tr>
                    {tableHeadingItem.map((data: string) => <th key={data}>{data}</th>)}
                </tr>
                </thead>
                <tbody>
                {children}
                </tbody>
            </table>
        </div>

    );
};

export default Table;