import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './customer/Components/Navbar/Navigation';
import CustomerRoutes from './Routers/CustomerRoutes';
import AdminRoutes from './Routers/AdminRoutes';
import NotFound from './Pages/Notfound';
import AdminPannel from './Admin/AdminPannel';
// import Routers from './Routers/Routers';

function App() {
  const isAdmin=true;
  return (
    <div className="">
      
      <Routes>
        <Route path="/*" element={<CustomerRoutes />} />
        <Route path="/admin/*" element={<AdminPannel />} />
        
      </Routes>
    </div>
  );
}

export default App;
// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Navigation from './customer/Components/Navbar/Navigation';
// import CustomerRoutes from './Routers/CustomerRoutes';
// import AdminRoutes from './Routers/AdminRoutes';
// import NotFound from './Pages/Notfound';
// import AdminPannel from './Admin/AdminPannel';
// import { StripeProvider } from './StripeContext'; // Adjust the path if necessary

// function App() {
//   const isAdmin = true; // You might want to dynamically set this based on your authentication logic

//   return (
//     <StripeProvider>
//       <div className="">
//         {/* You can add your Navigation here if needed */}
//         <Routes>
//           <Route path="/*" element={<CustomerRoutes />} />
//           <Route path="/admin/*" element={<AdminPannel />} />
//           <Route path="*" element={<NotFound />} /> {/* Adding a NotFound route */}
//         </Routes>
//       </div>
//     </StripeProvider>
//   );
// }

// export default App;
