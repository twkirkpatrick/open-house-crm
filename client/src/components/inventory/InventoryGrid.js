//* Dependencies
import React, { Fragment, useContext, useEffect, useState } from 'react';
import '../../App.css';

//* Material-UI components, hooks, and icons
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { DataGrid } from '@material-ui/data-grid';

//* Custom components
import Spinner from '../layout/Spinner';
import InventoryItem from '../inventory/InventoryItem';

//* State context
import InventoryContext from '../../context/inventory/inventoryContext';

const columns = [
  { field: 'name', headerName: 'Name', width: 170 },
  {
    field: 'purchased',
    type: 'date',
    headerName: 'Purchased',
    width: 130,
  },
  { field: 'location', headerName: 'Location', width: 150 },
  { field: 'cost', headerName: 'Cost', width: 100 },
  { field: 'value', headerName: 'Value', width: 100 },
  { field: 'status', headerName: 'Status', width: 100 },
];

const InventoryGrid = () => {
  const inventoryContext = useContext(InventoryContext);
  const [selectedInv, setSelectedInv] = useState(null);

  const { inventory, getInventory, loading, setCurrent } = inventoryContext;

  //* Gets inventory from MongoDB
  useEffect(() => {
    getInventory();
    // eslint-disable-next-line
  }, []);

  //* Returns JSX to DOM if inventory is empty
  if (inventory !== null && inventory.length === 0 && !loading) {
    return (
      <Typography variant='h4' align='center' style={{ marginTop: '3rem' }}>
        Inventory List is Empty!
      </Typography>
    );
  }

  //* Returns JSX to DOM if inventory is not empty
  return (
    <Fragment>
      {selectedInv !== null ? (
        <Fragment>
          <InventoryItem selectedInv={selectedInv} />
        </Fragment>
      ) : (
        <h1>Select inventory</h1>
      )}

      {inventory !== null && !loading ? (
        <Box style={{ height: 400, width: '100%' }}>
          <DataGrid
            rows={inventory.map((inventoryItem) => ({
              id: inventoryItem._id,
              name: inventoryItem.name,
              purchased: inventoryItem.purchased,
              cost: '$' + inventoryItem.cost,
              location: inventoryItem.location,
              value: '$' + inventoryItem.value,
              status: inventoryItem.status,
            }))}
            columns={columns}
            pageSize={10}
            density='compact'
            onSelectionChange={(newSelection) => {
              setSelectedInv(newSelection.rowIds);
            }}
          />
        </Box>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default InventoryGrid;
