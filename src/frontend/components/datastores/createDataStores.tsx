import CreateDatastoresForm from "./createDatastoresForm";
import DatastoreFooter from "./datastoreFooter";
import EnhancedTable from "./dataStoresTable";

const CreateDataStores = () => {
    return (
        <>
            <CreateDatastoresForm title="Create Datastore" />
            <EnhancedTable />
            <DatastoreFooter />
        </>
    )
}

export default CreateDataStores