"use client";

import React, { useState } from "react";
import Image from "next/image";

// Struktur data produk pempek
interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

// Menu pempek menggunakan gambar asli di folder public/images
const PRODUCTS: Product[] = [
  {
    id: "kapalselam",
    name: "Pempek Kapal Selam",
    price: 10000,
    image: "/images/pempekadaan.png",
    description: "Pempek ukuran besar khas Palembang dengan isian telur ayam utuh di dalamnya. Mantap, gurih, dan sangat mengenyangkan.",
  },
  {
    id: "adaan",
    name: "Pempek Adaan",
    price: 1000,
    image: "/images/pempekadaan.png",
    description: "Pempek bulat gurih dengan rasa ikan asli yang kuat berpadu santan gurih dan daun bawang cincang.",
  },
  {
    id: "kulit",
    name: "Pempek Kulit",
    price: 1000,
    image: "/images/pempekkulit.png",
    description: "Pempek renyah garing di bagian luar namun tetap lembut gurih di dalam, terbuat dari kulit ikan asli.",
  },
  {
    id: "lenjer",
    name: "Pempek Lenjer",
    price: 1000,
    image: "/images/pempeklenjer.png",
    description: "Pempek bentuk silinder klasik bertekstur kenyal dengan cita rasa ikan asli segar yang kuat.",
  },
  {
    id: "tahu",
    name: "Pempek Tahu",
    price: 1000,
    image: "/images/pempektahu.png",
    description: "Tahu sutra yang lembut dibalut dengan adonan pempek ikan asli gurih, sangat pas menyerap cuko.",
  },
  {
    id: "pastel",
    name: "Pempek Pastel",
    price: 1000,
    image: "/images/Pempekpastel.png",
    description: "Pempek pastel khas Palembang dengan isian pepaya muda serut tumis bumbu gurih tradisional.",
  },
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const phoneNumber = "6285357899235"; // Format WhatsApp internasional

  // Formatter Rupiah standar
  const formatRupiah = (number: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  // Generate link WhatsApp untuk pesanan produk tertentu
  const getWhatsAppLink = (productName: string) => {
    const text = `Halo Kedai Atin, saya mau pesan *${productName}*. Boleh diinfo mengenai harga total dan ongkos kirimnya?`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  };

  // Generate link WhatsApp untuk chat umum
  const getGeneralWhatsAppLink = () => {
    const text = `Halo Kedai Atin, saya ingin bertanya-tanya tentang menu pempek dan pemesanan...`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  };

  // Generate link WhatsApp untuk tanya ongkir dan paket
  const getOngkirDanPaketWhatsAppLink = () => {
    const text = `Halo Kedai Atin, saya mau tanya pilihan paket pempek yang tersedia dan berapa ongkir pengirimannya ya?`;
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans antialiased">
      
      {/* Header & Navigasi */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <div className="flex items-center">
            <div className="relative h-14 w-14">
              <Image
                src="/images/logo02.png"
                alt="Kedai Atin"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-650">
            <a href="#beranda" className="text-blue-900 hover:underline">Beranda</a>
            <a href="#menu" className="hover:text-blue-900 transition-colors">Menu Pempek</a>
            <a href="#keunggulan" className="hover:text-blue-900 transition-colors">Keunggulan kami</a>
            <a href="#kontak" className="hover:text-blue-900 transition-colors">Kontak</a>
          </nav>

          {/* Tombol Kontak WA & Hamburger (Mobile & Desktop) */}
          <div className="flex items-center gap-2">
            <a
              href={getGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
            >
              Hubungi Kami
            </a>

            {/* Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex md:hidden items-center justify-center p-2 rounded-lg text-gray-500 hover:text-blue-900 hover:bg-gray-100 transition-colors focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-2 shadow-inner">
            <a
              href="#beranda"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-blue-900 hover:bg-gray-50"
            >
              Beranda
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              Menu Pempek
            </a>
            <a
              href="#keunggulan"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              Keunggulan kami
            </a>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              Kontak
            </a>
            <a
              href={getGeneralWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block sm:hidden text-center px-3 py-2 rounded-lg text-sm font-bold text-white bg-blue-900 hover:bg-blue-950 transition-all"
            >
              Hubungi Kami via WA
            </a>
          </div>
        )}
      </header>

      {/* Hero Section Banner */}
      <section id="beranda" className="bg-gray-50 border-b border-gray-100 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Sisi Kiri: Teks Promosi */}
            <div className="md:col-span-7 space-y-6 text-center md:text-left">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-900 text-xs font-bold rounded">
                100% Ikan Asli Segar & Halal
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-900 leading-tight">
                Lezatnya Pempek Asli Palembang dari Kedai Atin
              </h1>
              <p className="text-base sm:text-lg text-gray-650 leading-relaxed font-medium">
                Nikmati cita rasa autentik Pempek Kedai Atin yang dibuat dari ikan segar pilihan dengan tekstur kenyal dan gurih. Disajikan bersama kuah cuko khas Palembang yang kaya rempah, berpadu rasa asam, manis, pedas, dan gurih dalam setiap gigitan.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <a
                  href="#menu"
                  className="px-6 py-3 bg-blue-900 hover:bg-blue-950 text-white font-bold rounded-lg shadow transition-all text-center text-sm"
                >
                  Pesan Menu Pempek
                </a>
                <a
                  href={getOngkirDanPaketWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold rounded-lg transition-all text-center text-sm"
                >
                  Tanya Ongkir & Paket
                </a>
              </div>
            </div>

            {/* Sisi Kanan: Logo Display */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 max-w-[90vw] max-h-[90vw] rounded-2xl overflow-hidden border border-gray-250 bg-white shadow-sm">
                <Image
                  src="/images/logo02.png"
                  alt="Kedai Atin"
                  fill
                  className="object-contain p-6"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 sm:py-24 bg-white scroll-mt-6">
        <div className="max-w-6xl mx-auto px-4">
          
          {/* Header Menu */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs uppercase tracking-widest font-extrabold text-blue-800">Daftar Menu</h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Varian Pempek Atin
            </h3>
            <p className="text-gray-500 text-base">
              Silakan pilih pempek favorit Anda di bawah ini dan klik tombol logo WhatsApp untuk langsung memesan lewat admin kami.
            </p>
          </div>

          {/* Grid Menu Pempek */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between"
              >
                {/* Gambar Pempek */}
                <div className="relative w-full h-48 sm:h-52 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>

                {/* Deskripsi & Tombol Pesan */}
                <div className="p-5 space-y-4 flex flex-col justify-between flex-grow">
                  <div className="space-y-1.5">
                    <h4 className="text-lg font-bold text-gray-900">{product.name}</h4>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed min-h-[50px]">
                      {product.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-450 font-bold uppercase tracking-wider">Harga</span>
                      <span className="text-lg font-extrabold text-blue-900">
                        {formatRupiah(product.price)} <span className="text-xs text-gray-400 font-normal">/ pcs</span>
                      </span>
                    </div>

                    {/* Tombol Pesan Langsung Via WA */}
                    <a
                      href={getWhatsAppLink(product.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-extrabold text-xs sm:text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.486.002 9.947-4.437 9.95-9.885.002-2.639-1.02-5.12-2.879-6.98-1.857-1.859-4.331-2.88-6.963-2.881-5.49 0-9.955 4.44-9.958 9.889-.002 1.815.485 3.59 1.411 5.163l-.974 3.56 3.638-.948zm12.39-5.467c-.328-.164-1.94-.959-2.241-1.07-.302-.109-.522-.164-.741.164-.219.329-.848 1.07-1.039 1.29-.19.219-.38.246-.708.082-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.824-2.274-.19-.329-.02-.507.144-.671.147-.148.328-.383.493-.574.164-.19.219-.328.328-.547.11-.219.055-.41-.027-.574-.082-.164-.741-1.785-1.015-2.441-.267-.642-.539-.556-.741-.567-.19-.01-.41-.01-.628-.01-.219 0-.575.082-.876.41-.301.328-1.149 1.12-1.149 2.733 0 1.614 1.177 3.172 1.341 3.391.164.22 2.316 3.537 5.61 4.957.783.337 1.393.539 1.869.69.787.25 1.5.214 2.064.129.629-.095 1.94-.794 2.214-1.56.274-.767.274-1.422.192-1.56-.082-.137-.301-.22-.63-.383z" />
                      </svg>
                      Pesan via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Keunggulan Section */}
      <section id="keunggulan" className="py-16 sm:py-24 bg-gray-55 border-y border-gray-150 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-xs uppercase tracking-widest font-extrabold text-blue-800">Kenapa Memilih Kami</h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Keunggulan Kedai Atin</h3>
            <p className="text-gray-500 text-base">
              Kami berkomitmen menjaga rasa otentik Palembang demi kepuasan lidah setiap pelanggan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Keunggulan 1 */}
            <div className="bg-white border border-gray-200 p-6 rounded-xl text-center space-y-3 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                🐟
              </div>
              <h4 className="font-bold text-gray-900">100% Ikan Asli Segar</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Adonan diolah dengan daging ikan asli segar pilihan tanpa bahan pengawet kimia maupun pemutih, sehingga sehat dan aman.
              </p>
            </div>

            {/* Keunggulan 2 */}
            <div className="bg-white border border-gray-200 p-6 rounded-xl text-center space-y-3 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                🍯
              </div>
              <h4 className="font-bold text-gray-900">Cuko Kental Otentik</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Menggunakan gula batok aren hitam premium dari Palembang untuk cita rasa asam manis yang pas, pekat, pedas, dan lezat.
              </p>
            </div>

            {/* Keunggulan 3 */}
            <div className="bg-white border border-gray-200 p-6 rounded-xl text-center space-y-3 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                📦
              </div>
              <h4 className="font-bold text-gray-900">Kemasan Vacuum Praktis</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Melayani pengiriman jarak jauh dengan kemasan hampa udara (vacuum) untuk menjaga cita rasa tetap segar setibanya di tempat Anda.
              </p>
            </div>

          </div>

        </div>
      </section>



      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={getGeneralWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-lg transition-transform hover:scale-105"
          aria-label="Tanya Admin"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.451 5.486.002 9.947-4.437 9.95-9.885.002-2.639-1.02-5.12-2.879-6.98-1.857-1.859-4.331-2.88-6.963-2.881-5.49 0-9.955 4.44-9.958 9.889-.002 1.815.485 3.59 1.411 5.163l-.974 3.56 3.638-.948zm12.39-5.467c-.328-.164-1.94-.959-2.241-1.07-.302-.109-.522-.164-.741.164-.219.329-.848 1.07-1.039 1.29-.19.219-.38.246-.708.082-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.824-2.274-.19-.329-.02-.507.144-.671.147-.148.328-.383.493-.574.164-.19.219-.328.328-.547.11-.219.055-.41-.027-.574-.082-.164-.741-1.785-1.015-2.441-.267-.642-.539-.556-.741-.567-.19-.01-.41-.01-.628-.01-.219 0-.575.082-.876.41-.301.328-1.149 1.12-1.149 2.733 0 1.614 1.177 3.172 1.341 3.391.164.22 2.316 3.537 5.61 4.957.783.337 1.393.539 1.869.69.787.25 1.5.214 2.064.129.629-.095 1.94-.794 2.214-1.56.274-.767.274-1.422.192-1.56-.082-.137-.301-.22-.63-.383z" />
          </svg>
        </a>
      </div>

      {/* Footer Section */}
      <footer id="kontak" className="bg-gray-900 text-gray-400 py-16 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Info Kedai */}
            <div className="md:col-span-6 space-y-4">
              <div className="relative h-14 w-14 bg-white rounded-xl flex items-center justify-center p-2">
                <Image
                  src="/images/logo02.png"
                  alt="Logo Kedai Atin"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm text-gray-450 max-w-md">
                Menyajikan kuliner khas Palembang berkualitas premium yang sehat, bersih, dan higienis. Kami melayani pemesanan lokal maupun pengiriman ke luar kota dengan kemasan aman.
              </p>
              <p className="text-xs text-gray-550 pt-2">
                &copy; {new Date().getFullYear()} Kedai Atin. Hak Cipta Dilindungi.
              </p>
            </div>

            {/* Link Cepat */}
            <div className="md:col-span-3 space-y-4">
              <h5 className="font-bold text-white text-sm uppercase tracking-wider">Tautan Cepat</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#beranda" className="hover:text-white transition-colors">Beranda</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Menu Pempek</a></li>
                <li><a href="#keunggulan" className="hover:text-white transition-colors">Keunggulan kami</a></li>
                <li><a href="#kontak" className="hover:text-white transition-colors">Kontak</a></li>
              </ul>
            </div>

            {/* Kontak Detail */}
            <div className="md:col-span-3 space-y-4 text-sm">
              <h5 className="font-bold text-white text-sm uppercase tracking-wider">Kontak & Lokasi</h5>
              <ul className="space-y-3">
                <li className="flex gap-2 items-start">
                  <span className="text-base flex-shrink-0">📍</span>
                  <span>Jl. Terukis RT 003 RW 001, Kel. Terukis Rahayu, Kec. Martapura, Kab. OKU Timur, Prov. Sumatera Selatan 32181</span>
                </li>
                <li className="flex gap-2 items-center">
                  <span>📞</span>
                  <a
                    href="https://wa.me/6285357899235"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors font-semibold"
                  >
                    +62 853-5789-9235
                  </a>
                </li>
                <li className="flex gap-2 items-start">
                  <span>⏰</span>
                  <span>Buka Setiap Hari:<br />08:00 - 21:00 WIB</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}
