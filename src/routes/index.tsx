import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router';
import App from '../App';
import NoDataStoresFound from '../frontend/components/datastores/noDataStoresFound';
import CreateDataStores from '../frontend/components/datastores/createDataStores';
import Sidebar from '../frontend/components/common/sidebar';
import AgentsList from '../frontend/components/agents/agentsDashboard';
import CreateAgents from '../frontend/components/agents/createAgents';
import ConnectorDashboard from '../frontend/components/connectors/connectorDashboard';

const Routes = () => {
    return (
        <BrowserRouter>
            <RouterRoutes>
                <Route path='/' element={<Sidebar />} />
                <Route path='/datastores' element={<App />}>
                    <Route index element={<NoDataStoresFound />} />
                    <Route path='create' element={<CreateDataStores />} />
                </Route>

                <Route path='/agent' element={<App />}>
                    <Route index element={<AgentsList />} />
                    <Route path='create' element={<CreateAgents />} />
                </Route>

                <Route path='/connectors' element={<App />}>
                    <Route index element={<ConnectorDashboard />} />
                </Route>

            </RouterRoutes>
        </BrowserRouter>
    )
}

export default Routes