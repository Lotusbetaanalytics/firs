import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { useDispatch, useSelector } from "react-redux";
import { logAction } from "../../redux/actions_/logActions";

export const Tabletwo = () => {
  const dispatch = useDispatch();
  const [tableData, setTableData] = useState([]);
  const getlog = useSelector((state) => state.getlog);

  useEffect(() => {
    if (getlog.success) {
      setTableData(getlog.data);
    }
  }, [getlog, tableData]);

  useEffect(() => {
    dispatch(logAction());
  }, [dispatch]);

  return (
    <div>
      <div style={{ maxWidth: "100%" }}>
        {getlog.loading ? (
          <h1>Loading...</h1>
        ) : (
          <MaterialTable
            columns={[
              { title: "Name", field: "name" },
              { title: "Email", field: "email" },
              {
                title: "Phone Number",
                field: "phoneNumber",
              },
              {
                title: "Company Name",
                field: "company",
              },
              {
                title: "Laptop",
                field: "laptop",
              },
              {
                title: "Host Name",
                field: "host.firstName",
              },
              {
                title: "Time",
                field: "time",
              },
              {
                title: "Date",
                field: "date",
              },
              {
                title: "Purpose",
                field: "purpose",
              },
              {
                title: "Time in",
                field: "timeIn",
              },
              {
                title: "Time out",
                field: "timeOut",
              },
              {
                title: "Token",
                field: "token",
              },
              {
                title: "Active",
                field: "isActive",
              },
              {
                title: "Status",
                field: "status",
              },
            ]}
            data={tableData}
            title="Visitors Log"
            options={{
              exportButton: true,
            }}
          />
        )}
      </div>
    </div>
  );
};
