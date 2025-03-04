import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SchoolCoreProvider } from '@school/context/core/index';
import SchoolMain from '@school/pages/Main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/school/main" element={
          <SchoolCoreProvider >
            <SchoolMain />
          </SchoolCoreProvider>
          }
        />
        <Route path="*" element={<Navigate to="/school/main" />} />
      </Routes>
    </Router>
  );
}

export default App;
