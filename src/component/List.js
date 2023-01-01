import { DeleteOutlined } from "@ant-design/icons";
import {  InputNumber, Table} from "antd";

export const List = ({ list, setList }) => {
  return (
    <>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => {
              return <span>${value}</span>;
            },
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
            render: (value, record) => {
              return (
                <InputNumber
                  min={0}
                  defaultValue={value}
                  onChange={(value) => {
                    setList((p) =>
                      p.map((cart) => {
                        if (record.id === cart.id) {
                          cart.total = cart.price * value;
                        }
                        return cart;
                      })
                    );
                  }}
                ></InputNumber>
              );
            },
          },
          {
            title: "Total",
            dataIndex: "total",
            render: (value) => {
              return <span>${value}</span>;
            },
          },
          {
            title: "Delate",
            dataIndex: "delate",
            render: (value, record) => (
              <DeleteOutlined
                style={{ fontSize: "20px", color: "#c11c" }}
                onClick={() => {
                  setList((p) =>
                    p.filter((f)=> f !== record)
                    )
                }}
              />
            ),
          },
        ]}
        dataSource={list}
        summary={(data) => {
          const total = data.reduce((pre, current) => {
            return pre + current.total;
          }, 0);
          return <span>Total: ${total}</span>;
        }}
      />
    </>
  );
};
