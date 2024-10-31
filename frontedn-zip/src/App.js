// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import Navigation from './customer/Components/Navbar/Navigation';
// import CustomerRoutes from './Routers/CustomerRoutes';
// import AdminRoutes from './Routers/AdminRoutes';
// import NotFound from './Pages/Notfound';
// import AdminPannel from './Admin/AdminPannel';
// // import Routers from './Routers/Routers';

// function App() {
//   const isAdmin=true;
//   return (
//     <div className="">
      
//       <Routes>
//         <Route path="/*" element={<CustomerRoutes />} />
//         <Route path="/admin/*" element={<AdminPannel />} />
        
//       </Routes>
//     </div>
//   );`
// }

// export default App;



// import { Route, Routes } from 'react-router-dom';
// import './App.css';
// import CustomerRoutes from './Routers/CustomerRoutes';
// import AdminPannel from './Admin/AdminPannel';
// import PaymentSuccess from './customer/Components/paymentSuccess/PaymentSuccess';

// function App() {
//   return (
//     <div className="">
//       <Routes>
//         <Route path="/*" element={<CustomerRoutes />} />
//         <Route path="/admin/*" element={<AdminPannel />} />
//         <Route path="/payment-success/:orderId" element={<PaymentSuccess />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import { Route, Routes } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './App.css';
import CustomerRoutes from './Routers/CustomerRoutes';
import AdminPannel from './Admin/AdminPannel';
import PaymentSuccess from './customer/Components/paymentSuccess/PaymentSuccess';

// Load your Stripe publishable key
const stripePromise = loadStripe('pk_test_51Q8bJEKODdllGjjVKVazZJqDW6V36TckZTHsjZ0d4agCsQ9Rnh3OcDZufwNnjlBBw17Dvs2foLszEinuPjE4arMx00SmkCQuZz'); // Replace with your actual publishable key

function App() {
  return (
    <div className="">
      <Elements stripe={stripePromise}> 
        <Routes>
          <Route path="/*" element={<CustomerRoutes />} />
          <Route path="/admin/*" element={<AdminPannel />} />
          {/* <Route path="/payment-success/:orderId" element={<PaymentSuccess />} /> */}
        </Routes>
      </Elements>
    </div>
  );
}

export default App;

