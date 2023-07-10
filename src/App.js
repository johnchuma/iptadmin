import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginPage from './pages/login_page';
import HomePage from './pages/home_page';
import LayoutPage from './pages/layout_page';
import IPTplaces from './pages/ipt_places';
import StudentsPage from './pages/students_page';
import StudentsAllocation from './pages/students_allocation';
import ReportPage from './pages/report_page';
import PrivateRoute from './controllers/private_route';
import NotAttendingPage from './pages/not_attending_page';

function App() {
  return (
   <BrowserRouter basename='/iptadmin'>
    <Routes>
      <Route path='/' element={<LayoutPage/>}>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path="/" element={<PrivateRoute>
        <LayoutPage/>
      </PrivateRoute>}>
      <Route path='/' index element={<HomePage/>}/>
      <Route path='/places' element={<IPTplaces/>}/>
      <Route path='/students' element={<StudentsPage/>}/>
      <Route path='/attending' element={<StudentsAllocation/>}/>
      <Route path='/notAttending' element={<NotAttendingPage/>}/>
      <Route path='/report/:id' element={<ReportPage/>}/>
      </Route>
      </Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
