export const featuredCategories = [
  { name: 'Motors & Drives', slug: 'motors-drives', count: '12,400+', description: 'Replacement motors, controls, drives, and related industrial components.' },
  { name: 'Circuit Protection', slug: 'circuit-protection', count: '8,900+', description: 'Breakers, disconnects, fuses, and safety devices for industrial systems.' },
  { name: 'Industrial Automation', slug: 'industrial-automation', count: '6,300+', description: 'Relays, contactors, PLC accessories, and panel control products.' },
  { name: 'Power Distribution', slug: 'power-distribution', count: '9,100+', description: 'Panels, enclosures, switches, and power handling equipment.' }
];

export const products = [
  {
    id: 'prod_1',
    partNumber: 'F48H07A01',
    title: 'AO Smith Motor',
    brand: 'AO Smith',
    category: 'Motors & Drives',
    stock: 'In stock',
    description: 'Replacement motor for industrial and commercial applications.',
    price: 189.99,
    attributes: { horsepower: '1 HP', voltage: '230V', phase: '1', frame: '48' }
  },
  {
    id: 'prod_2',
    partNumber: '1492-SPM1C100',
    title: 'Miniature Circuit Breaker, 1 Pole, C Curve, 10A',
    brand: 'Allen-Bradley',
    category: 'Circuit Protection',
    stock: 'In stock',
    description: 'Compact breaker solution for reliable low-voltage protection.',
    price: 42.5,
    attributes: { amperage: '10A', poles: '1', curve: 'C', voltage: '277V' }
  }
];
