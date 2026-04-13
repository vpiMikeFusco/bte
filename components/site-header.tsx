import Link from 'next/link';

export function SiteHeader() {
  return (
    <header style={{borderBottom:'1px solid #e2e8f0', background:'#fff'}}>
      <div style={{maxWidth:1200, margin:'0 auto', padding:'16px 24px', display:'flex', alignItems:'center', justifyContent:'space-between'}}>
        <Link href="/" style={{display:'flex', gap:16, alignItems:'center', textDecoration:'none', color:'#0f172a'}}>
          <img src="https://btelectric.com/img/logo.jpg" alt="BTE logo" style={{width:56,height:56,borderRadius:16,objectFit:'cover',border:'1px solid #e2e8f0'}} />
          <div>
            <div style={{fontWeight:700, fontSize:20}}>BTE Electric</div>
            <div style={{fontSize:14, color:'#64748b'}}>Industrial Electrical Supply & Service</div>
          </div>
        </Link>
        <nav style={{display:'flex', gap:20}}>
          <Link href="/catalog">Catalog</Link>
          <Link href="/quote">Quote</Link>
          <Link href="/account">Account</Link>
          <Link href="/checkout">Checkout</Link>
        </nav>
      </div>
    </header>
  );
}
