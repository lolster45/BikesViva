
const bikeInventory = [
  {
    id: 1,
    brand: 'Trek',
    model: 'Domane SL 6',
    type: 'Road',
    price: 3500,
    year: 2022,
    inStock: true,
    size: 'l',
    description: 'A versatile road bike known for its endurance performance and smooth ride, perfect for long-distance road cycling.'
  },
  {
    id: 2,
    brand: 'Specialized',
    model: 'Rockhopper',
    type: 'Mountain',
    price: 1200,
    year: 2023,
    inStock: true,
    size: 's',
    description: 'An entry-level mountain bike built for adventurous trails, offering reliable performance at an affordable price.'
  },
  {
    id: 3,
    brand: 'Cannondale',
    model: 'Synapse Carbon 105',
    type: 'Road',
    price: 2800,
    year: 2021,
    inStock: false,
    size: 'm',
    description: 'A carbon road bike designed for long, smooth rides with endurance geometry and a lightweight frame.'
  },
  {
    id: 4,
    brand: 'Giant',
    model: 'Defy Advanced 2',
    type: 'Road',
    price: 2400,
    year: 2020,
    inStock: true,
    size: 's',
    description: 'This road bike blends performance and comfort, making it ideal for weekend warriors and competitive cyclists alike.'
  },
  {
    id: 5,
    brand: 'Santa Cruz',
    model: 'Hightower',
    type: 'Mountain',
    price: 5200,
    year: 2023,
    inStock: true,
    size: 'l',
    description: 'A high-performance mountain bike that dominates technical trails with its full suspension and precision handling.'
  },
  {
    id: 6,
    brand: 'Yeti',
    model: 'SB130',
    type: 'Mountain',
    price: 6000,
    year: 2022,
    inStock: false,
    size: 'm',
    description: 'A premium trail bike built for aggressive riders, offering exceptional downhill control and climbing capability.'
  },
  {
    id: 7,
    brand: 'Scott',
    model: 'Spark RC 900',
    type: 'Mountain',
    price: 7500,
    year: 2023,
    inStock: true,
    size: 'l',
    description: 'A lightweight and responsive cross-country race bike with cutting-edge suspension for the most demanding trails.'
  },
  {
    id: 8,
    brand: 'Canyon',
    model: 'Endurace CF SL 8',
    type: 'Road',
    price: 3300,
    year: 2022,
    inStock: true,
    size: 's',
    description: 'A carbon road bike that combines speed, comfort, and endurance for riders who love long-distance challenges.'
  },
  {
    id: 9,
    brand: 'Bianchi',
    model: 'Oltre XR4',
    type: 'Road',
    price: 7000,
    year: 2023,
    inStock: true,
    size: 'm',
    description: 'A high-end Italian racing bike designed for superior aerodynamics and performance on the road.'
  },
  {
    id: 10,
    brand: 'Orbea',
    model: 'Occam H10',
    type: 'Mountain',
    price: 3000,
    year: 2021,
    inStock: false,
    size: 'l',
    description: 'A capable all-mountain bike with balanced geometry for both climbing efficiency and downhill fun.'
  },
  {
    id: 11,
    brand: 'Cube',
    model: 'Stereo Hybrid 160',
    type: 'Electric Mountain',
    price: 5800,
    year: 2023,
    inStock: true,
    size: 'm',
    description: 'An electric mountain bike that excels on tough terrain, providing both power and agility for off-road adventures.'
  },
  {
    id: 12,
    brand: 'Merida',
    model: 'eONE-SIXTY',
    type: 'Electric Mountain',
    price: 6500,
    year: 2023,
    inStock: true,
    size: 's',
    description: 'A full-suspension electric mountain bike designed to tackle the steepest climbs and toughest trails with ease.'
  },
  {
    id: 13,
    brand: 'Pinarello',
    model: 'Dogma F12',
    type: 'Road',
    price: 12000,
    year: 2023,
    inStock: false,
    size: 'l',
    description: 'An elite road racing machine with cutting-edge aerodynamics and a lightweight frame for maximum performance.'
  },
  {
    id: 14,
    brand: 'Cervelo',
    model: 'R5 Dura Ace',
    type: 'Road',
    price: 9500,
    year: 2022,
    inStock: true,
    size: 'm',
    description: 'A professional-grade road bike built for speed and precision with top-tier components and exceptional handling.'
  },
  {
    id: 15,
    brand: 'Kona',
    model: 'Process 153',
    type: 'Mountain',
    price: 4600,
    year: 2021,
    inStock: true,
    size: 'l',
    description: 'A rugged mountain bike for enduro riders, offering excellent control and responsiveness on technical descents.'
  },
  {
    id: 16,
    brand: 'Fuji',
    model: 'Cross 1.1',
    type: 'Cyclocross',
    price: 1600,
    year: 2022,
    inStock: true,
    size: 's',
    description: 'A versatile cyclocross bike designed for both racing and off-road adventures, built to handle mud and rough terrain.'
  },
  {
    id: 17,
    brand: 'Surly',
    model: 'Straggler',
    type: 'Gravel',
    price: 1500,
    year: 2021,
    inStock: true,
    size: 'm',
    description: 'A steel gravel bike that’s as tough as it is comfortable, perfect for bikepacking and gravel touring.'
  },
  {
    id: 18,
    brand: 'Raleigh',
    model: 'Tamland 2',
    type: 'Gravel',
    price: 1800,
    year: 2020,
    inStock: true,
    size: 'l',
    description: 'A versatile gravel bike built for long-distance riding and mixed terrain, with stable handling and ample tire clearance.'
  },
  {
    id: 19,
    brand: 'Diamondback',
    model: 'Haanjo 7C Carbon',
    type: 'Gravel',
    price: 2100,
    year: 2023,
    inStock: false,
    size: 's',
    description: 'A lightweight carbon gravel bike designed for speed and comfort on any type of terrain, perfect for gravel racing.'
  },
  {
    id: 20,
    brand: 'Ghost',
    model: 'Lector SF',
    type: 'Mountain',
    price: 4000,
    year: 2023,
    inStock: true,
    size: 'm',
    description: 'A carbon hardtail mountain bike that’s agile and fast, built for technical climbs and demanding trails.'
  }
];


  
export default bikeInventory;
  