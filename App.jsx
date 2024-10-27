import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login/Login.jsx';
import Signup from './login/Signup.jsx';
import Landing from './landing/Landing.jsx';
import Userdb from './User_db/Userdb.jsx';
import Agentdb from './Agent_db/App.jsx';
import Dashboard from './Agent_db/pages/Dashboard.jsx';
import Header from './login/Header.jsx';
import Footer from './login/Footer.jsx';
import AddPolicy from './Agent_db/pages/AddPolicy';
import PolicyList from './Agent_db/pages/PolicyList';
import EditPolicy from './Agent_db/pages/EditPolicy';
import PolicyDetails from './Agent_db/pages/PolicyDetails';
import Users from './Agent_db/pages/Users';  // New Import
import Policies from './Agent_db/pages/Policies';  // New Import
import Categories from './Agent_db/pages/Categories';  // New Import
import SubCategories from './Agent_db/pages/SubCategories';  // New Import
import AllPolicies from './Agent_db/pages/SoldPolicies';  // New Import
import ApprovedPolicyHolders from './Agent_db/pages/ApprovedPolicyHolders';  // New Import
import PendingApproval from './Agent_db/pages/PendingApprovals';  // New Import
import DisapprovedPolicyHolders from './Agent_db/pages/DisapprovedPolicyHolders';  // New Import
import InsuranceCards from './Agent_db/pages/InsuranceCards.jsx';
import InsuranceCardsUpdate from'./Agent_db/pages/InsuranceCardsUpdate.jsx';
import InsuranceCardsDelete from'./Agent_db/pages/InsuranceCardsDelete.jsx';
import Claimsn from './Agent_db/pages/Claimsn.jsx';
import HealthInsurance from './Agent_db/pages/HealthInsurance.jsx';
import TravelInsurance from './Agent_db/pages/TravelInsurance.jsx';
import LifeInsurance from './Agent_db/pages/LifeInsurance.jsx';
import MotorInsurance from './Agent_db/pages/MotorInsurance.jsx';
import TermsAndConditions from './Agent_db/pages/TermsAndConditions.jsx'
import MyBusiness from './Agent_db/pages/MyBusiness.jsx';
import UpdateLifeInsurance from './Agent_db/pages/LifeInsuranceUpdate.jsx';
import DeletePolicy from './Agent_db/pages/LifeInsuranceDelete.jsx';
import HealthPolicyDelete from './Agent_db/pages/HealthInsuranceDelete.jsx';
import HealthInsuranceForm from './Agent_db/pages/HealthInsuranceUpdate.jsx';
import Products from './Agent_db/pages/Products.jsx';
import MotorInsuranceUpdate from './Agent_db/pages/MotorInsuranceUpdate.jsx';
import UpdateTravelInsurance from './Agent_db/pages/TravelInsuranceUpdate.jsx';
import TravelPolicyDelete from './Agent_db/pages/TravelInsuranceDelete.jsx';
import MotorPolicyDelete from './Agent_db/pages/MotorPolicyDelete.jsx';
import PaymentPage from './Agent_db/pages/PaymentPage.jsx';
import InactiveExpiredPolicies from './Agent_db/pages/PendingRenewals.jsx';
import EarningsSection from './Agent_db/pages/EarningsPage.jsx';
import ContestsSection from './Agent_db/pages/Contests.jsx';
import DownloadHealthInsuranceForm from './Agent_db/pages/DownloadHealthInsuranceForm.jsx';
import InsuranceCardsDownloads from './Agent_db/pages/InsuranceCardsDownloads.jsx';
import DownloadLifeInsuranceForm from './Agent_db/pages/DownloadLifeInsuranceForm.jsx';
import DownloadTravelInsuranceForm from './Agent_db/pages/DownloadTravelInsuranceForm.jsx';
import DownloadMotorInsuranceForm from './Agent_db/pages/DownloadMotorInsuranceForm.jsx';
import CustomerList from './Agent_db/pages/MyCustomers.jsx';
import AgentClubDashboard from './Agent_db/pages/Clubs.jsx';
import Locate from './Agent_db/pages/Locate.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Userdb" element={<Userdb />} />
        <Route path="/Agentdb" element={<Agentdb />} />
        <Route path="/dashboard" element= {<Dashboard />} />
        <Route path="/add-policy"element={<InsuranceCards />}/>
        <Route path="/update-policy"element={<InsuranceCardsUpdate />}/>
        <Route path="/delete-policy"element={<InsuranceCardsDelete />}/>
        <Route path="/policy-list" element={<PolicyList />}/>
        <Route path="/edit-policy/:id" element={<EditPolicy />}/>
        <Route path="/policy-details/:id" element={<PolicyDetails />}/>
          {/* New routes for additional pages */}
        <Route path="/users" element={<Users />}/>
        <Route path="/policies" element={<Policies />}/>
        <Route path="/categories" element={<Categories />}/>
        <Route path="/subcategories" element={<SubCategories />}/>
        <Route path="/all-policies" element={<AllPolicies />}/>
        <Route path="/approved-policy-holders" element={<ApprovedPolicyHolders />}/>
        <Route path="/pending-approval" element={<PendingApproval />}/>
        <Route path="/disapproved-policy-holders" element={<DisapprovedPolicyHolders />}/>
        <Route path="/claim" element={ <Claimsn />}/>
        <Route path="/health-policy" element={<HealthInsurance />}/>
        <Route path="/life-policy-update" element={<UpdateLifeInsurance />}/>
        <Route path="/health-policy-update" element={<HealthInsuranceForm />}/>
        <Route path="/motor-policy-update" element={<MotorInsuranceUpdate />}/>
        <Route path="/travel-policy-update" element={<UpdateTravelInsurance />}/>
        <Route path="/life-policy-delete" element={<DeletePolicy />}/>
        <Route path="/health-policy-delete" element={<HealthPolicyDelete />}/>
        <Route path="/travel-policy-delete" element={<TravelPolicyDelete />}/>
        <Route path="/motor-policy-delete" element={<MotorPolicyDelete />}/>
        <Route path="/life-policy" element={<LifeInsurance />}/>
        <Route path="/travel-policy" element={<TravelInsurance />}/>
        <Route path="/motor-policy" element={<MotorInsurance />}/>
        <Route path="/acknowledgement" element={<TermsAndConditions/>}/>
        <Route path="/business" element={<MyBusiness/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/payment-page" element={<PaymentPage/>}/>
        <Route path="/earnings-page" element={<EarningsSection/>}/>
        <Route path="/contests-page" element={<ContestsSection/>}/>
        <Route path="/download-forms" element={<InsuranceCardsDownloads/>}/>
        <Route path="/download-healthform" element={<DownloadHealthInsuranceForm/>}/>
        <Route path="/download-lifeform" element={<DownloadLifeInsuranceForm/>}/>
        <Route path="/download-travelform" element={<DownloadTravelInsuranceForm/>}/>
        <Route path="/download-motorform" element={<DownloadMotorInsuranceForm/>}/>
        <Route path="/expired-policies-page" element={<InactiveExpiredPolicies/>}/>
        <Route path="/customers" element={<CustomerList/>}/>
        <Route path="/clubs" element={<AgentClubDashboard/>}/>
        <Route path="/locate" element={<Locate/>}/>
      </Routes>
    </Router>
  );
}

export default App