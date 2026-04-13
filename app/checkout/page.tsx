import { SiteHeader } from '@/components/site-header';

export default function CheckoutPage() {
  return (
    <div>
      <SiteHeader />
      <main style={{maxWidth:1200, margin:'0 auto', padding:'40px 24px', display:'grid', gridTemplateColumns:'1fr 360px', gap:24}}>
        <section style={{background:'#fff', border:'1px solid #e2e8f0', borderRadius:24, padding:32}}>
          <div style={{fontSize:14, color:'#64748b', textTransform:'uppercase'}}>Checkout</div>
          <h1 style={{fontSize:40}}>Complete your order</h1>
          <input placeholder='Email' style={{display:'block', width:'100%', marginTop:16, padding:14, borderRadius:16, border:'1px solid #cbd5e1'}} />
          <select style={{display:'block', width:'100%', marginTop:16, padding:14, borderRadius:16, border:'1px solid #cbd5e1'}}>
            <option>Standard Shipping — CAD 18.00</option>
            <option>Express Shipping — CAD 42.00</option>
          </select>
          <div style={{marginTop:16, padding:24, border:'1px solid #e2e8f0', borderRadius:16}}>Payment intent / Stripe Elements area</div>
          <div style={{marginTop:16, padding:24, border:'1px solid #e2e8f0', borderRadius:16}}>Inventory reservation area</div>
          <button style={{marginTop:16, background:'#0f172a', color:'#fff', padding:'14px 18px', borderRadius:999, border:0}}>Place Order</button>
        </section>
        <aside style={{background:'#fff', border:'1px solid #e2e8f0', borderRadius:24, padding:24}}>
          <div style={{fontSize:14, color:'#64748b', textTransform:'uppercase'}}>Order Summary</div>
          <div style={{display:'grid', gap:12, marginTop:16}}>
            <div style={{display:'flex', justifyContent:'space-between'}}><span>Subtotal</span><span>CAD 232.49</span></div>
            <div style={{display:'flex', justifyContent:'space-between'}}><span>Shipping</span><span>CAD 18.00</span></div>
            <div style={{display:'flex', justifyContent:'space-between'}}><span>Tax</span><span>CAD 30.06</span></div>
            <div style={{display:'flex', justifyContent:'space-between', borderTop:'1px solid #e2e8f0', paddingTop:12, fontWeight:700}}><span>Total</span><span>CAD 280.55</span></div>
          </div>
        </aside>
      </main>
    </div>
  );
}
