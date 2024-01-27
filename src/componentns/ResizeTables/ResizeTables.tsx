/* eslint-disable @typescript-eslint/no-explicit-any */
import { SearchOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Row, Table } from "antd";
import { ColumnsType, TableProps } from "antd/es/table";
import { useEffect, useState } from "react";

import "./ResizeTables.css";
import { TwoArrow } from "../../icons/TwoArrow";

interface Props<T> {
  columns: ColumnsType<T>;
  data: Array<T>;
  onChangePagination?: (pagination: any) => void;
  isRowSelection: boolean;
  borderRadius?: string;
  onRowClick?: (record: any) => void;
  tablaBoxShadow?: boolean;
  idTable?: string;
  setSelectedRowKeys?: React.Dispatch<React.SetStateAction<React.Key[]>>;
  setSelectedRows?: React.Dispatch<React.SetStateAction<T[]>>;
  setSelectedAllRows?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ResizeTables = <T extends object>({
  columns,
  data,
  onChangePagination,
  isRowSelection,
  borderRadius,
  onRowClick,
  tablaBoxShadow = true,
  idTable,
  setSelectedRowKeys,
  setSelectedRows,
  setSelectedAllRows,
}: Props<T>) => {
  const [responsiveColumns, setResponsiveColumns] =
    useState<ColumnsType<T>>(columns);
  const [hiddenColumns, setHiddenColumns] = useState<ColumnsType<T>>(columns);

  const [paginationTable, setPaginationTable] = useState([]);

  const onSelectChange: TableProps<T>["rowSelection"] = {
    // selectedRowKeys,
    onChange: (selectedKeys, selectedRows) => {
      if (setSelectedRows) {
        setSelectedRows(selectedRows);
      }

      if (setSelectedRowKeys) {
        setSelectedRowKeys(selectedKeys);
      }
    },

    onSelectAll: (selected) => {
      setSelectedAllRows ? setSelectedAllRows(selected) : null;
    },
  };

  // Este useEffect se puede quitar es solo para que typescript no se queje
  useEffect(() => {
    console.log(setPaginationTable);
  }, [paginationTable]);

  useEffect(() => {
    const handleResize = () => {
      const width = document.documentElement.clientWidth;

      if (width < 768) {
        const visibleColumns = columns.slice(0, 2);
        const newHiddenColumns = columns.slice(2);
        setResponsiveColumns(visibleColumns);
        setHiddenColumns(newHiddenColumns);
      } else {
        setResponsiveColumns(columns);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [columns]);

  // useEffect(() => {}, [responsiveColumns]);

  const onChangeTable: TableProps<T>["onChange"] = (pagination) => {
    if (pagination && onChangePagination) {
      const { current, pageSize } = pagination;
      onChangePagination({
        page: current || 1,
        entitiesPerPage: pageSize || 10,
      });
    }
  };

  const onClickHiddenColumn = (clickedColumn: any) => {
    const updatedHideColumns = hiddenColumns.filter(
      (column) => column.title !== clickedColumn.title
    );

    const updatedResponsiveColumns = [...responsiveColumns, clickedColumn];
    const firstResponsiveColumn = updatedResponsiveColumns[0];
    const updatedResponsiveWithoutFirst = updatedResponsiveColumns.slice(1);

    setHiddenColumns([...updatedHideColumns, firstResponsiveColumn]);
    setResponsiveColumns(updatedResponsiveWithoutFirst);
  };

  const additionalColumn = {
    title: (
      <div
        style={{
          width: "1px",
          padding: "0px",
          marginRight: "7px",
          // fontFamily: "Montserrat",
        }}
        className="menuTable"
      >
        <Dropdown
          trigger={["click", "hover"]}
          // menu={{ items }}
          overlay={
            <Menu>
              {hiddenColumns.map((column: any, index: number) => (
                <Menu.Item
                  key={index}
                  onClick={() => onClickHiddenColumn(column)}
                >
                  <Row align={"middle"} justify={"space-between"}>
                    <span
                      style={{
                        marginLeft: "5px",
                        fontFamily: "Lato",
                        fontSize: "12px",
                        color: "#999",
                      }}
                    >
                      {column?.title}
                    </span>
                  </Row>
                </Menu.Item>
              ))}
            </Menu>
          }
          placement="bottomLeft"
          arrow={{ pointAtCenter: true }}
        >
          <a onClick={(e) => e.preventDefault()}>
            {/* Sin a o button no funciona */}
            <TwoArrow />
          </a>
        </Dropdown>
      </div>
    ),
    key: "menuPlegable",
    dataIndex: "menuPlegable",
  };

  // useEffect(() => {}, [responsiveColumns, hiddenColumns]);

  const columnsWithCustomTitle = [
    ...responsiveColumns.map((column: any) => ({
      ...column,
      title: (
        <div>
          {column.title}
          {/* Agrega aquí tus elementos adicionales */}
          {column.dataIndex === "columnName" && (
            <SearchOutlined style={{ marginLeft: "8px" }} />
          )}
        </div>
      ),
    })),
    additionalColumn,
  ];

  // console.log(borderRadius, "borderRadius");

  return (
    <Table
      id={idTable}
      onRow={
        onRowClick
          ? (record) => {
              return {
                onClick: () => onRowClick(record), // Asigna la función de clic a la fila
              };
            }
          : undefined
      }
      rowSelection={isRowSelection ? onSelectChange : undefined}
      className={`TableStyled ${tablaBoxShadow ? "TableBoxShadow" : ""}`}
      style={{
        borderRadius:
          borderRadius !== undefined ||
          borderRadius != null ||
          borderRadius !== ""
            ? borderRadius
            : "",
      }}
      // columns={responsiveColumns}
      columns={columnsWithCustomTitle}
      dataSource={data}
      onChange={onChangeTable}
      pagination={{
        // total: paginationTable?.total,
        current: 1,
        total: 10,
        pageSize: 40,
        position: ["bottomLeft"],
      }}
      // loading={{
      //   indicator: (
      //     <div>
      //       <Spin />
      //     </div>
      //   ),
      // spinning: !data,
      // }}
    />
  );
};
