import { SiteHeader } from '@/components/site-header';

export default function AccountPage() {
  return (
    <div>
      <SiteHeader />
      <main style={{maxWidth:1200, margin:'0 auto', padding:'40px 24px'}}>
        <h1 style={{fontSize:40}}>Customer Portal Overview</h1>
        <div style={{display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:16, marginTop:24}}>
          <div style={{background:'#fff', border:'1px solid #e2e8f0', borderRadius:24, padding:24}}><div style={{color:'#64748b'}}>Quote requests</div><div style={{fontSize:32, fontWeight:700}}>4</div></div>
          <div style={{background:'#fff', border:'1px solid #e2e8f0', borderRadius:24, padding:24}}><div style={{color:'#64748b'}}>Orders</div><div style={{fontSize:32, fontWeight:700}}>2</div></div>
          <div style={{background:'#fff', border:'1px solid #e2e8f0', borderRadius:24, padding:24}}><div style={{color:'#64748b'}}>Open proposals</div><div style={{fontSize:32, fontWeight:700}}>1</div></div>
        </div>
      </main>
    </div>
  );
}
