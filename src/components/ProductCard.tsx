export default function ProductCard({ product }: any) {
  const phone = "91XXXXXXXXXX";

  const message = `Hello, I want to order:

Product: ${product.name}
Price: ₹${product.price}`;

  const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div className="border rounded p-4">
      <img
        src={product.image}
        className="h-40 w-full object-cover rounded"
      />

      <h2 className="mt-2 font-semibold">{product.name}</h2>
      <p>₹{product.price}</p>

      <a
        href={whatsapp}
        target="_blank"
        className="block mt-2 bg-green-500 text-white px-3 py-1 rounded text-center"
      >
        Order on WhatsApp
      </a>
    </div>
  );
}