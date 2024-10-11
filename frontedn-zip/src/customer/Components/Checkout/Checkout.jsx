import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddDeliveryAddressForm from "./AddAddress";
import { useLocation, useNavigate } from "react-router-dom";
import OrderSummary from "./OrderSummary";

const steps = [
  "Login",
  "Delivery Adress",
  "Order Summary",
  "Payment",
];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(1);
  const [skipped, setSkipped] = React.useState(new Set());
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const step = queryParams.get('step');
  const navigate=useNavigate();
 
console.log("step",step)


  const handleNext = () => {
    let newSkipped = skipped;
   

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    navigate(`/checkout?step=${step-1}`)
  };



  const handleReset = () => {
    setActiveStep(0);
  };

  const handlePayment=()=>{
    console.log("handle payment")
  }

  return (
    <Box className="px-5 lg:px-32 " sx={{ width: "100%" }}>
      <Stepper activeStep={step}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
         
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={step == 2}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            
          </Box>
          {/* <Typography sx={{ my: 6 }}>Title</Typography> */}

          <div className="my-5">
            {step == 2? <AddDeliveryAddressForm handleNext={handleNext} />:<OrderSummary/>}
          </div>

          {/* <AddDeliveryAddressForm handleNext={handleNext} /> */}

          
        </React.Fragment>
      )}
    </Box>
  );
}
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepLabel from "@mui/material/StepLabel";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import AddDeliveryAddressForm from "./AddAddress";
// import { useLocation, useNavigate } from "react-router-dom";
// import OrderSummary from "./OrderSummary";
// import { useDispatch, useSelector } from "react-redux";
// import {createPayment} from "../../../Redux/Customers/Payment/Action"; // Adjust import according to your setup

// const steps = [
//   "Login",
//   "Delivery Address",
//   "Order Summary",
//   "Payment",
// ];

// export default function Checkout() {
//   const [activeStep, setActiveStep] = React.useState(1);
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const step = parseInt(queryParams.get("step"), 10) || 0; // Ensure step is an integer
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const jwt = localStorage.getItem("jwt");
//   const { cart } = useSelector((store) => store); // Assuming you have the cart in your redux store

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     navigate(`/checkout?step=${step - 1}`);
//   };

//   const handleReset = () => {
//     setActiveStep(0);
//   };

//   const handlePayment = async () => {
//     const orderDetails = {
//       items: cart.cartItems, // Assuming this holds the items
//       totalPrice: cart.cart.totalDiscountedPrice, // Use the actual total price
//       jwt,
//     };

//     try {
//       const response = await dispatch(createPayment(orderDetails)); // Call your API to create the payment link
//       const paymentUrl = response.data.url; // Adjust this based on your API response structure
//       window.location.href = paymentUrl; // Redirect the user to Stripe
//     } catch (error) {
//       console.error("Error creating payment link:", error);
//     }
//   };

//   return (
//     <Box className="px-5 lg:px-32 " sx={{ width: "100%" }}>
//       <Stepper activeStep={step}>
//         {steps.map((label, index) => (
//           <Step key={label}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//       {activeStep === steps.length ? (
//         <React.Fragment>
//           <Typography sx={{ mt: 2, mb: 1 }}>
//             All steps completed - you&apos;re finished
//           </Typography>
//           <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//             <Box sx={{ flex: "1 1 auto" }} />
//             <Button onClick={handleReset}>Reset</Button>
//           </Box>
//         </React.Fragment>
//       ) : (
//         <React.Fragment>
//           <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
//             <Button
//               color="inherit"
//               disabled={step === 0}
//               onClick={handleBack}
//               sx={{ mr: 1 }}
//             >
//               Back
//             </Button>
//             <Box sx={{ flex: "1 1 auto" }} />
//           </Box>

//           <div className="my-5">
//             {step === 2 ? (
//               <OrderSummary onPayment={handlePayment} />
//             ) : (
//               <AddDeliveryAddressForm handleNext={handleNext} />
//             )}
//           </div>
//         </React.Fragment>
//       )}
//     </Box>
//   );
// }
