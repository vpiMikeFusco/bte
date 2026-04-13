import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { featuredCategories } from '@/lib/mock-data';

export default function HomePage() {
  return (
    <div>
      <SiteHeader />
      <main style={{maxWidth:1200, margin:'0 auto', padding:'48px 24px'}}>
        <section style={{display:'grid', gridTemplateColumns:'1.1fr 0.9fr', gap:32, alignItems:'center'}}>
          <div>
            <div style={{display:'inline-block', padding:'8px 12px', border:'1px solid #e2e8f0', borderRadius:999, background:'#fff', fontSize:12, letterSpacing:2, textTransform:'uppercase'}}>Modern Rebuild Concept</div>
            <h1 style={{fontSize:56, lineHeight:1.05, margin:'20px 0'}}>Modern catalog search, quote workflow, and future ecommerce foundation.</h1>
            <p style={{fontSize:18, color:'#475569', maxWidth:700}}>This starter package is designed to help BTE present a cleaner customer experience while keeping room for quoting, customer accounts, and ecommerce later.</p>
            <div style={{display:'flex', gap:12, marginTop:24}}>
              <Link href="/catalog" style={{background:'#0f172a', color:'#fff', padding:'12px 20px', borderRadius:999, textDecoration:'none'}}>Browse Catalog</Link>
              <Link href="/quote" style={{border:'1px solid #cbd5e1', color:'#0f172a', padding:'12px 20px', borderRadius:999, textDecoration:'none'}}>Request Quote</Link>
            </div>
          </div>
          <div style={{background:'#fff', border:'1px solid #e2e8f0', borderRadius:24, padding:24}}>
            <div style={{background:'#0f172a', color:'#fff', borderRadius:20, padding:24}}>
              <div style={{fontSize:12, letterSpacing:2, textTransform:'uppercase', color:'#cbd5e1'}}>Quick Product Search</div>
              <div style={{fontSize:28, fontWeight:700, marginTop:12}}>Search by part number, brand, or application</div>
              <div style={{background:'#fff', color:'#64748b', padding:16, borderRadius:16, marginTop:16}}>Try F48H07A01, AO Smith Motor, or 10A breaker</div>
            </div>
          </div>
        </section>
        <section style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:16, marginTop:32}}>
          {featuredCategories.map((item) => (
            <div key={item.slug} style={{background:'#fff', border:'1px solid #e2e8f0', borderRadius:24, padding:24}}>
              <div style={{fontSize:14, color:'#64748b'}}>Category</div>
              <div style={{fontSize:24, fontWeight:700, marginTop:8}}>{item.name}</div>
              <p style={{color:'#475569'}}>{item.description}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
