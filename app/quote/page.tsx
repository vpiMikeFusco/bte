import { SiteHeader } from '@/components/site-header';

export default function QuotePage() {
  return (
    <div>
      <SiteHeader />
      <main style={{maxWidth:900, margin:'0 auto', padding:'40px 24px'}}>
        <div style={{background:'#fff', border:'1px solid #e2e8f0', borderRadius:24, padding:32}}>
          <div style={{fontSize:14, color:'#64748b', textTransform:'uppercase'}}>Quote Request</div>
          <h1 style={{fontSize:40}}>Request Pricing or Availability</h1>
          <p style={{color:'#475569'}}>Upload a BOM, spreadsheet, PDF, or part list. This page is intended to represent the quote-first flow.</p>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:16, marginTop:24}}>
            <input placeholder='Full name' style={{padding:14, borderRadius:16, border:'1px solid #cbd5e1'}} />
            <input placeholder='Company name' style={{padding:14, borderRadius:16, border:'1px solid #cbd5e1'}} />
            <input placeholder='Email' style={{padding:14, borderRadius:16, border:'1px solid #cbd5e1'}} />
            <input placeholder='Phone' style={{padding:14, borderRadius:16, border:'1px solid #cbd5e1'}} />
          </div>
          <textarea placeholder='Part numbers, quantities, notes, or BOM details' style={{marginTop:16, width:'100%', minHeight:140, padding:14, borderRadius:16, border:'1px solid #cbd5e1'}} />
          <div style={{marginTop:16, padding:24, border:'1px dashed #cbd5e1', borderRadius:16, color:'#64748b'}}>BOM / file upload area</div>
          <button style={{marginTop:16, background:'#0f172a', color:'#fff', padding:'14px 18px', borderRadius:999, border:0}}>Submit Quote Request</button>
        </div>
      </main>
    </div>
  );
}
