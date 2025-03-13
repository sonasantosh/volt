import CreateDatastoresForm from "./createDatastoresForm";
import DatastoreFooter from "./datastoreFooter";
import EnhancedTable from "./dataStoresTable";
const UpdateDatastores = () => {
  return (
    <>
    <CreateDatastoresForm updateDataStore title="Add/Edit Data" />
    <EnhancedTable />
    <DatastoreFooter btn2Text="Update" />
</>
  )
}

export default UpdateDatastores;
