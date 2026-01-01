const products = [
  { id: 1, name: "Hydrating Facial Wash", price: 75000 },
  { id: 2, name: "Vitamin C Serum", price: 120000 },
  { id: 3, name: "Moisturizing Cream", price: 95000 }
];

export default function DataTable() {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Nama Produk</th>
          <th>Harga</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {products.map((p) => (
          <tr key={p.id}>
            <td>{p.name}</td>
            <td>Rp {p.price.toLocaleString()}</td>
            <td>
              <button onClick={() => console.log("Edit:", p.name)}>Edit</button>
              <button onClick={() => console.log("Hapus:", p.name)}>
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
