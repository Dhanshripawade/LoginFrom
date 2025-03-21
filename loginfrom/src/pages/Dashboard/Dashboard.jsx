import { Card, Row, Col } from 'react-bootstrap';
import Sidebar from '../../layout/Sidebar';
import Navbar1 from '../../layout/Navbar';
import Home from '../../components/Dashboard/Home';


 function DashboardPage() {
  return (
    <div className='col-12 d-flex'>
      <div className='col-2'>
        <Sidebar/>
       
      </div>
      <div className='col-10'>
        <Navbar1/>
        <div>
          <Home/>
        
        </div>
      </div>
     
    </div>
  );
}
export default DashboardPage;