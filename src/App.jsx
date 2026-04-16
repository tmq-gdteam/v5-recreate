import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Dashboard from './components/Dashboard';
import JourneyView from './views/JourneyView';
import LeadsView from './views/LeadsView';
import InboxView from './views/InboxView';
import WidgetView from './views/WidgetView';
import TrainView from './views/TrainView';

const Placeholder = ({ title }) => (
  <div className="flex items-center justify-center w-full h-full text-text-subtle font-semibold min-h-[50vh] text-section-hd uppercase tracking-wider">
    {title} - Under Construction
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inbox" element={<InboxView />} />
          <Route path="journey" element={<JourneyView />} />
          <Route path="data-enrichment" element={<LeadsView />} />
          <Route path="widget" element={<WidgetView />} />
          <Route path="train" element={<TrainView />} />
          <Route path="settings" element={<Placeholder title="Settings" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
