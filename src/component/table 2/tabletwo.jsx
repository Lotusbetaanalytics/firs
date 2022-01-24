import React, { useEffect } from 'react'
import MaterialTable from 'material-table';
import { useDispatch, useSelector } from 'react-redux';
import { logAction } from '../../redux/actions_/logActions';

export const Tabletwo = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logAction());
     }, [dispatch]);

  const getlog = useSelector((state) => state.getlog);
  const { data } = getlog;

  console.log(data)

    return (
        <div>
            <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            { title: "id", field: "_id" },
            { title: "Name", field: "name" },
            { title: "Email", field: "email" },
            {
              title: "Phone Number",field: "phoneNumber",
            },
            {
                title: "Company Name",field: "company",
              },
              {
                title: "Laptop",field: "laptop",
              },
              {
                title: "Host Name",field: "host.firstName",
              },
              {
                title: "Time",field: "time",
              },
              {
                title: "Date",field: "date",
              },
              {
                title: "Purpose",field: "purpose",
              },
              {
                title: "Time in",field: "timeIn",
              },
              {
                title: "Time out",field: "timeOut",
              },
              {
                title: "Token",field: "token",
              },
              {
                title: "Active",field: "isActive",
              },
              {
                title: "Status",field: "status",
              },
          ]}
          data={data}
          title="Visitors Log"
          options={{
            exportButton: true
          }}
          
        />
      </div>
        </div>
    )
}
