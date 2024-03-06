// import React, { useState, useEffect } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// // import { Elements } from "@stripe/react-stripe-js";

// // import CheckoutForm from "./CheckoutForm";
// import "../Stripe.css";
// import { useSelector } from "react-redux";
// import { selectCurrentOrder } from "../features/order/orderSlice";

// // Make sure to call loadStripe outside of a component’s render to avoid
// // recreating the Stripe object on every render.
// // This is your test publishable API key.

// export default async function StripeCheckout() {
//   // const [clientSecret, setClientSecret] = useState("");
//   const currentOrder = useSelector(selectCurrentOrder);

//   useEffect(() => {
//     // Create PaymentIntent as soon as the page loads

//     async function fetchData() {
//       const stripe = await loadStripe(
//         "pk_test_51OqeJySEpPoTkUObnSbzZwzydtrZgnslAeZtlgd54ftGdDN29AxJUhZv6yCzvjFh1kkSiVFy7fPs5ayXS4dYEiYv00sDH06Z8L"
//       );

//       const body = {
//         products: currentOrder.items,
//       };
//       console.log("body is -->", body);
//       console.log("currentOrder.items is -->", currentOrder.items);

//       const headers = {
//         "Content-Type": "application/json",
//       };

//       const response = await fetch(
//         "http://localhost:8080/create-checkout-session",
//         {
//           method: "POST",
//           headers: headers,
//           body: JSON.stringify(body),
//         }
//       );

//       const session = await response.json();
//       const result = stripe.redirectToCheckout({
//         sessionId: session.id,
//       });

//       if (result.error) {
//         console.log(result.error);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <div className="Stripe">
//       {/* {clientSecret && (
//         <Elements options={options} stripe={stripePromise}>
//           <CheckoutForm />
//         </Elements>
//       )} */}
//       hello
//     </div>
//   );
// }
