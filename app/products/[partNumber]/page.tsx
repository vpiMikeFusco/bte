import { notFound } from 'next/navigation';
import { SiteHeader } from '@/components/site-header';
import { products } from '@/lib/mock-data';

export default async function ProductPage({ params }: { params: Promise<{ partNumber: string }> }) {
  const { partNumber } = await params;
  const product = products.find((p) => p.partNumber === partNumber);
  if (!product) return notFound();

  return (
    <div>
      <SiteHeader />
      <main style={{maxWidth:1200, margin:'0 auto', padding:'40px 24px', display:'grid', gridTemplateColumns:'1fr 360px', gap:24}}>
        <section style={{background:'#fff', border:'1px solid #e2e8f0', borderRadius:24, padding:32}}>
          <div style={{fontSize:14, color:'#64748b'}}>{product.brand}</div>
          <h1 style={{fontSize:40, margin:'8px 0'}}>{product.title}</h1>
          <div style={{color:'#475569'}}>Part Number: {product.partNumber}</div>
          <p style={{fontSize:18, color:'#475569'}}>{product.description}</p>
          <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:12, marginTop:24}}>
            {Object.entries(product.attributes).map(([k,v]) => (
              <div key={k} style={{background:'#f8fafc', padding:16, borderRadius:16, border:'1px solid #e2e8f0'}}>
                <div style={{fontSize:12, color:'#94a3b8', textTransform:'uppercase'}}>{k}</div>
                <div style={{fontWeight:700, marginTop:4}}>{v}</div>
              </div>
            ))}
          </div>
        </section>
        <aside style={{background:'#fff', border:'1px solid #e2e8f0', borderRadius:24, padding:24}}>
          <div style={{fontSize:14, color:'#64748b', textTransform:'uppercase'}}>Actions</div>
          <div style={{fontSize:28, fontWeight:700, marginTop:12}}>CAD {product.price.toFixed(2)}</div>
          <button style={{marginTop:16, width:'100%', background:'#0f172a', color:'#fff', padding:'14px 18px', borderRadius:999, border:0}}>Add to Cart</button>
          <a href="/quote" style={{display:'block', marginTop:12, textAlign:'center', border:'1px solid #cbd5e1', color:'#0f172a', padding:'14px 18px', borderRadius:999, textDecoration:'none'}}>Request Pricing</a>
        </aside>
      </main>
    </div>
  );
}
