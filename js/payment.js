// Razorpay Payment Integration
const RAZORPAY_KEY = "rzp_test_YOUR_KEY_HERE"; // ← apna test key daalo

async function initPayment(product) {
  try {
    const orderRes = await fetch("http://localhost:5000/api/create-order", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({amount: product.price*100, currency:"INR", receipt:"ord_"+Date.now()})
    });
    const order = await orderRes.json();
    const options = {
      key: RAZORPAY_KEY, amount: order.amount, currency: order.currency,
      name: "Best Deals India", description: product.name, order_id: order.id,
      handler: async (r) => {
        const v = await fetch("http://localhost:5000/api/verify-payment", {
          method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(r)
        });
        const res = await v.json();
        alert(res.success ? "✅ Payment Success: "+r.razorpay_payment_id : "❌ Failed");
      },
      theme: {color: "#f97316"}
    };
    new Razorpay(options).open();
  } catch(e) { alert("Payment error: "+e.message); }
}

if (!document.querySelector('script[src*="razorpay"]')) {
  const s = document.createElement("script");
  s.src = "https://checkout.razorpay.com/v1/checkout.js";
  document.head.appendChild(s);
}
