import Image from 'next/image';
export const revalidate = 30; //ISR cache for 30s

export default async function ProductsPage() {

    const res = await fetch('https://fakestoreapi.com/products', {
    next: { revalidate },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  const products = await res.json();

    return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Our Products</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <li
            key={p.id}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <div className="relative h-48 w-full">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-contain p-4"
              />
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-lg truncate">{p.title}</h2>
              <p className="mt-2 text-indigo-600 font-bold">${p.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );

}