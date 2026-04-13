import Link from 'next/link';
import { SiteHeader } from '@/components/site-header';
import { products } from '@/lib/mock-data';

export default function CatalogPage() {
  return (
    <div>
      <SiteHeader />
      <main style={{maxWidth:1200, margin:'0 auto', padding:'40px 24px'}}>
        <h1 style={{fontSize:40}}>Catalog</h1>
        <div style={{display:'grid', gap:16, marginTop:24}}>
          {products.map((product) => (
            <Link key={product.id} href={`/products/${product.partNumber}`} style={{textDecoration:'none', color:'inherit', background:'#fff', border:'1px solid #e2e8f0', borderRadius:24, padding:24}}>
              <div style={{fontWeight:700}}>{product.partNumber}</div>
              <div style={{fontSize:22, marginTop:8}}>{product.title}</div>
              <div style={{color:'#64748b', marginTop:8}}>{product.brand} • {product.category}</div>
              <div style={{marginTop:8}}>CAD {product.price.toFixed(2)}</div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
