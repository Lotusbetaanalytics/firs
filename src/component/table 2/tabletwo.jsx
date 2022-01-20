import React from 'react'
import MaterialTable from 'material-table';
import data from '../../data';
import { useSelector } from 'react-redux';
import { logAction } from '../../redux/actions_/logActions';

export const Tabletwo = () => {
  
  useEffect(() => {
    dispatch(logAction());
     }, [dispatch]);

  const getlog = useSelector((state) => state.getlog);
  const { data } = getlog;
    return (
        <div>
            <div style={{ maxWidth: "100%" }}>
        <MaterialTable
          columns={[
            { title: "id", field: "id" },
            { title: "title", field: "title" },
            { title: "year", field: "year", type: "numeric" },
            {
              title: "interval",field: "runtime",
            },
            {
                title: "type of music",field: "genres",
              },
              {
                title: "who direct",field: "director",
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
