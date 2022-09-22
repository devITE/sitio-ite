import React, { useMemo } from "react";
import MaterialReactTable from "material-react-table";
import "../Transparencia.css";

const Transparencia_imppath = require.context("../../../img/imgT");

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    address: "261 Erdman Ford",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    name: {
      firstName: "Jane",
      lastName: "Doe",
    },
    address: "769 Dominic Grove",
    city: "Columbus",
    state: "Ohio",
  },
  {
    name: {
      firstName: "Joe",
      lastName: "Doe",
    },
    address: "566 Brakus Inlet",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    name: {
      firstName: "Kevin",
      lastName: "Vandy",
    },
    address: "722 Emie Stream",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "Rolluffs",
    },
    address: "32188 Larkin Turnpike",
    city: "Charleston",
    state: "South Carolina",
  },
];

const Art632017 = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName", //access nested data with dot notation
        header: "First Name",
      },
      {
        accessorKey: "name.lastName",
        header: "Last Name",
      },
      {
        accessorKey: "address", //normal accessorKey
        header: "Address",
      },
      {
        accessorKey: "city",
        header: "City",
      },
      {
        accessorKey: "state",
        header: "State",
      },
    ],
    []
  );

  return (
    <div>
      <img
        className="img-fluid w-100"
        src={Transparencia_imppath(`./head.png`)}
        alt="Transparencia"
      />
      <div className="w-100 mt-3 Transparencia__header-title">
        Ley de Transparencia y Acceso a la Información Pública del Estado de
        Tlaxcala. 2016.
      </div>
      <h5 className="mt-3 Transparencia__title">
        Artículo 63. (2022) Obligaciones Comunes
      </h5>
      <MaterialReactTable columns={columns} data={data} />
    </div>
  );
};

export default Art632017;
