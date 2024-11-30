import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ComplaintForm from './components/complaints/ComplaintForm';
import InterventionList from './components/interventions/InterventionList';

function App() {
  // Example data - in a real app, this would come from your backend
  const sampleInterventions = [
    {
      id: 1,
      date: '2024-01-01',
      status: 'Pending',
      technicianId: 'TECH001',
      notes: 'Initial inspection scheduled'
    }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-xl font-bold text-gray-900">SAV Management</h1>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link to="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                    Home
                  </Link>
                  <Link to="/complaints/new" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                    New Complaint
                  </Link>
                  <Link to="/interventions" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                    Interventions
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">Welcome to SAV Management System</h2>
                <p className="mt-4 text-gray-600">Manage customer complaints and technical interventions efficiently</p>
              </div>
            } />
            <Route path="/complaints/new" element={
              <div className="max-w-2xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Submit New Complaint</h2>
                <ComplaintForm onSubmit={(data) => console.log('New complaint:', data)} />
              </div>
            } />
            <Route path="/interventions" element={
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Interventions</h2>
                <InterventionList interventions={sampleInterventions} />
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;