import CreateDatastoresForm from "./createDatastoresForm";
import DatastoreFooter from "./datastoreFooter";
import EnhancedTable from "./dataStoresTable";

const EditDatastores = () => {
    return (
        <>
            <CreateDatastoresForm title="Edit Datastore" />
            <EnhancedTable />
            <DatastoreFooter btn2Text="Update" />
        </>
    )
}

export default EditDatastores;
