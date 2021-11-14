import { FC,ColHTMLAttributes, DetailedHTMLProps,ReactNode } from 'react';
import {useIsMutating} from "react-query";

interface Props {
  children: ReactNode;
  tableHeadingItem: string[];
  classes?: string;
  cols?: DetailedHTMLProps<
    ColHTMLAttributes<HTMLTableColElement>,
    HTMLTableColElement
  >;
}

const Table: FC<Props> = ({children, cols, tableHeadingItem, classes }) => {
    const isMutating=useIsMutating()
    return (
      <div className="table-wrapper">
          <div className="table-overflow">
              <table
                  className={`table text-center table-bordered ${
                      classes ? classes : ''
                  }`}
                  width="100%"
              >
                  {cols}
                  <thead>
                  <tr>
                      {tableHeadingItem.map((data: string) => (
                          <th key={data}>{data}</th>
                      ))}
                  </tr>

                  </thead>
                  <tbody>{children}</tbody>
              </table>
          </div>
          <div className={isMutating>0 ? "content-block":""}/>
      </div>

  );
};

export default Table;
