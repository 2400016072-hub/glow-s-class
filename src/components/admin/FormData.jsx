import { useState } from "react";

export default function FormData() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    image: "",
    description: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Data produk skincare:", form);

    // reset form
    setForm({
      name: "",
      category: "",
      price: "",
      image: "",
      description: "",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        border: "1px solid #ccc",
        padding: 20,
        marginBottom: 20,
        width: 400,
      }}
    >
      <h3>Tambah Produk Skincare</h3>

      <input
        type="text"
        name="name"
        placeholder="Nama Produk"
        value={form.name}
        onChange={handleChange}
        required
      />
      <br /><br />

      <input
        type="text"
        name="category"
        placeholder="Kategori (Serum, Cleanser, dll)"
        value={form.category}
        onChange={handleChange}
        required
      />
      <br /><br />

      <input
        type="number"
        name="price"
        placeholder="Harga"
        value={form.price}
        onChange={handleChange}
        required
      />
      <br /><br />

      <input
        type="text"
        name="image"
        placeholder="Image URL (Unsplash / Pexels)"
        value={form.image}
        onChange={handleChange}
        required
      />
      <br /><br />

      <textarea
        name="description"
        placeholder="Deskripsi Produk"
        value={form.description}
        onChange={handleChange}
        rows={3}
        required
      />
      <br /><br />

      <button type="submit">Simpan Produk</button>
    </form>
  );
}
