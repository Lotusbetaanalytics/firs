import React from 'react'
import MaterialTable from 'material-table';
import data from '../../data';

export const Tabletwo = () => {
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
