/* ============================================================
   DAILYSTATIONERY — script.js
   ============================================================ */

/* ===== DATA ===== */
const PRODUCTS = [
  {
    id: 1, name: 'Faber-Castell Pensil 2B (12 pcs)', cat: 'Pensil',
    price: 12000, old: 18000, badge: 'best',
    img: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=500&q=80',
    desc: 'Pensil kayu grade 2B, ujung halus, tidak mudah patah. Cocok untuk menulis & menggambar.',
    dt: new Date('2025-12-01')
  },
  {
    id: 2, name: 'Staedtler Pensil Warna Noris Club (24)', cat: 'Pensil',
    price: 20000, old: null, badge: 'sale',
    img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&q=80',
    desc: '24 warna cerah, isi tebal anti patah. Cocok untuk sekolah & hobi menggambar.',
    dt: new Date('2025-11-10')
  },
  {
    id: 3, name: 'Pilot G2 Pulpen Gel 0.5mm (6 pcs)', cat: 'Pulpen',
    price: 72000, old: 80000, badge: 'best',
    img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&q=80',
    desc: 'Tinta gel halus, grip karet, refillable. 6 warna: hitam, biru, merah, hijau, ungu, coklat.',
    dt: new Date('2025-10-05')
  },
  {
    id: 4, name: 'Uni-ball Signo 0.38mm Hitam (3 pcs)', cat: 'Pulpen',
    price: 45000, old: null, badge: 'new',
    img: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=500&q=80',
    desc: 'Tinta gel ultra halus 0.38mm. Hitam pekat, cocok untuk tulisan rapi dan detail.',
    dt: new Date('2026-01-15')
  },
  {
    id: 5, name: 'Zebra Sarasa Clip Pulpen Warna (10 pcs)', cat: 'Pulpen',
    price: 95000, old: null, badge: null,
    img: 'https://images.unsplash.com/photo-1526406915894-7bcd65f60845?w=500&q=80',
    desc: '10 warna pastel dan vibrant, tinta gel 0.5mm, bisa dijepit di buku.',
    dt: new Date('2025-09-20')
  },
  {
    id: 6, name: 'Buku Tulis Sinar Dunia 38L (10 pcs)', cat: 'Buku Tulis',
    price: 28000, old: 32000, badge: 'best',
    img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80',
    desc: '38 lembar garis, kertas putih bersih. Bundel 10 buku hemat untuk sekolah.',
    dt: new Date('2025-08-15')
  },
  {
    id: 7, name: 'Kokuyo Campus Notebook A5 Dot Grid', cat: 'Buku Tulis',
    price: 38000, old: null, badge: 'new',
    img: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=500&q=80',
    desc: '80 lembar dot grid, kertas halus 70gsm, sampul lentur. Favorit pelajar & mahasiswa.',
    dt: new Date('2026-01-30')
  },
  {
    id: 8, name: 'Buku Gambar A4 120gsm (20 lembar)', cat: 'Buku Tulis',
    price: 15000, old: null, badge: null,
    img: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=500&q=80',
    desc: 'Kertas gambar putih tebal 120gsm, 20 lembar. Cocok untuk sketsa & tugas seni.',
    dt: new Date('2025-07-01')
  },
  {
    id: 9, name: 'Bantex Binder A5 Ring 20 — Biru Navy', cat: 'Binder',
    price: 55000, old: 65000, badge: 'sale',
    img: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=500&q=80',
    desc: 'Binder ring 20, snap button, sampul PVC tahan lama. Muat 200 lembar.',
    dt: new Date('2025-06-01')
  },
  {
    id: 10, name: 'Binder Kulit Sintetis A4 Premium — Hitam', cat: 'Binder',
    price: 120000, old: 135000, badge: 'best',
    img: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=500&q=80',
    desc: 'Binder ring 26 kulit sintetis premium, kantong kartu & slot pena.',
    dt: new Date('2026-02-01')
  },
  {
    id: 11, name: 'Isi Binder A5 Garis 100L (2 pack)', cat: 'Isi Binder',
    price: 22000, old: null, badge: null,
    img: 'https://images.unsplash.com/photo-1568521904616-ec9e26b44dd0?w=500&q=80',
    desc: '2 pack isi binder A5 bergaris, 100 lembar/pack. Kompatibel ring 20 & 26.',
    dt: new Date('2025-05-22')
  },
  {
    id: 12, name: 'Isi Binder A4 Kotak 100 lembar', cat: 'Isi Binder',
    price: 18000, old: null, badge: 'new',
    img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&q=80',
    desc: 'Kertas binder A4 bergaris kotak, lubang 26-ring. Putih bersih anti-bleeding.',
    dt: new Date('2026-02-20')
  },
  {
    id: 13, name: 'Tas Ransel Jansport Right Pack — Hitam', cat: 'Tas Sekolah',
    price: 850000, old: 950000, badge: 'best',
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
    desc: 'Tas punggung 31L, cordura tahan air, garansi lifetime. Klasik & kuat.',
    dt: new Date('2025-04-10')
  },
  {
    id: 14, name: 'Tas Selempang Kanvas — Coklat', cat: 'Tas Sekolah',
    price: 185000, old: 210000, badge: 'sale',
    img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80',
    desc: 'Tas kanvas kasual, kompartemen laptop 13", bahan tebal & jahitan kuat.',
    dt: new Date('2025-03-15')
  },
  {
    id: 15, name: 'Penggaris Besi Stainless 30cm', cat: 'Penggaris & Alat Ukur',
    price: 18000, old: null, badge: null,
    img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&q=80',
    desc: 'Penggaris besi stainless anti-karat 30cm. Akurat, dual-scale (cm & inch).',
    dt: new Date('2025-02-20')
  },
  {
    id: 16, name: 'Stapler Kangaro DS-23S + Isi Staples', cat: 'Perlengkapan Kantor',
    price: 42000, old: 48000, badge: 'sale',
    img: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?w=500&q=80',
    desc: 'Stapler meja 30 lembar + 1000 isi staples No.23. Set lengkap siap pakai.',
    dt: new Date('2025-01-10')
  },
  {
    id: 17, name: 'Gunting Serbaguna Stainless 21cm', cat: 'Perlengkapan Kantor',
    price: 25000, old: null, badge: null,
    img: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=500&q=80',
    desc: 'Gunting stainless 21cm, pegangan ergonomis, tajam & ringan.',
    dt: new Date('2025-11-05')
  },
  {
    id: 18, name: 'Penghapus Faber-Castell Dust-Free (5 pcs)', cat: 'Pensil',
    price: 2000, old: null, badge: 'new',
    img: 'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?w=500&q=80',
    desc: 'Penghapus putih bersih tanpa residu, tidak merusak kertas. Isi 5 buah.',
    dt: new Date('2026-02-15')
  },
];

const DELIVERIES = [
  { id: 'jne-reg',  name: 'JNE Reguler',     icon: '📦', eta: '2–3 hari kerja', price: 18000 },
  { id: 'jne-yes',  name: 'JNE YES',          icon: '⚡', eta: 'Besok sampai',   price: 35000 },
  { id: 'jnt',      name: 'J&T Express',      icon: '🚚', eta: '1–3 hari kerja', price: 15000 },
  { id: 'sicepat',  name: 'SiCepat Reguler',  icon: '🏃', eta: '1–2 hari kerja', price: 16000 },
  { id: 'anteraja', name: 'Anteraja',          icon: '🐝', eta: '2–3 hari kerja', price: 14000 },
  { id: 'gosend',   name: 'GoSend Same Day',  icon: '🛵', eta: 'Hari ini',       price: 25000 },
];

const BANKS = {
  mbanking: [
    { id: 'bca',     logo: '🏦', name: 'BCA',       type: 'Mobile Banking' },
    { id: 'mandiri', logo: '🏛️', name: 'Mandiri',   type: 'Mobile Banking' },
    { id: 'bni',     logo: '🔵', name: 'BNI',       type: 'Mobile Banking' },
    { id: 'bri',     logo: '🔶', name: 'BRI',       type: 'Mobile Banking' },
    { id: 'cimb',    logo: '🟥', name: 'CIMB Niaga',type: 'Mobile Banking' },
    { id: 'permata', logo: '🟦', name: 'Permata',   type: 'Mobile Banking' },
  ],
  ewallet: [
    { id: 'gopay',     logo: '💚', name: 'GoPay',      type: 'E-Wallet' },
    { id: 'ovo',       logo: '💜', name: 'OVO',        type: 'E-Wallet' },
    { id: 'dana',      logo: '💙', name: 'DANA',       type: 'E-Wallet' },
    { id: 'shopeepay', logo: '🧡', name: 'ShopeePay',  type: 'E-Wallet' },
    { id: 'linkaja',   logo: '❤️', name: 'LinkAja',    type: 'E-Wallet' },
  ],
  va: [
    { id: 'bca-va',     logo: '🏦', name: 'BCA',     type: 'Virtual Account' },
    { id: 'mandiri-va', logo: '🏛️', name: 'Mandiri', type: 'Virtual Account' },
    { id: 'bni-va',     logo: '🔵', name: 'BNI',     type: 'Virtual Account' },
    { id: 'bri-va',     logo: '🔶', name: 'BRI',     type: 'Virtual Account' },
    { id: 'permata-va', logo: '🟦', name: 'Permata', type: 'Virtual Account' },
  ],
  minimarket: [
    { id: 'indomaret', logo: '🏪', name: 'Indomaret', type: 'Swalayan' },
    { id: 'alfamart',  logo: '🏬', name: 'Alfamart',  type: 'Swalayan' },
    { id: 'lawson',    logo: '🟦', name: 'Lawson',    type: 'Swalayan' },
    { id: 'alfamidi',  logo: '🟥', name: 'Alfamidi',  type: 'Swalayan' },
  ],
};

const STEPS = {
  bca: [
    'Buka aplikasi BCA Mobile',
    'Pilih <strong>m-Transfer → Transfer Antar Rekening</strong>',
    'Nomor rekening: <span class="step-code">2100 456 789</span> (a.n. PT DailyStationery)',
    'Input nominal sesuai total tagihan',
    'Masukkan PIN BCA Mobile, konfirmasi',
    'Simpan bukti & klik <strong>Sudah Bayar</strong>',
  ],
  mandiri: [
    'Buka Livin\' by Mandiri',
    'Pilih <strong>Transfer → Ke Rekening Mandiri</strong>',
    'Rekening: <span class="step-code">1190 0087 7654</span> (a.n. PT DailyStationery)',
    'Input nominal tagihan',
    'Masukkan MPIN, geser konfirmasi',
    'Klik <strong>Sudah Bayar</strong>',
  ],
  bni: [
    'Buka BNI Mobile Banking',
    'Pilih <strong>Transfer → Antar Rekening BNI</strong>',
    'No. rekening: <span class="step-code">0987 234 567</span> (a.n. PT DailyStationery)',
    'Input nominal',
    'Masukkan password transaksi',
    'Konfirmasi & klik <strong>Sudah Bayar</strong>',
  ],
  bri: [
    'Buka BRImo',
    'Pilih <strong>Transfer → Sesama BRI</strong>',
    'No. rekening: <span class="step-code">0341 0100 8765</span> (a.n. PT DailyStationery)',
    'Input nominal tagihan',
    'Masukkan PIN BRImo',
    'Klik <strong>Sudah Bayar</strong>',
  ],
  cimb: [
    'Buka OCTO Mobile',
    'Pilih <strong>Transfer Dana → CIMB Niaga</strong>',
    'No. rekening: <span class="step-code">5600 123 456 78</span> (a.n. PT DailyStationery)',
    'Input nominal',
    'Masukkan PIN OCTO',
    'Klik <strong>Sudah Bayar</strong>',
  ],
  permata: [
    'Buka PermataMobile X',
    'Pilih <strong>Transfer → PermataBank</strong>',
    'No. rekening: <span class="step-code">8907 654 321</span> (a.n. PT DailyStationery)',
    'Input nominal',
    'Masukkan PIN',
    'Klik <strong>Sudah Bayar</strong>',
  ],
  gopay: [
    'Buka Gojek / GoPay',
    'Pilih <strong>Transfer → Ke GoPay</strong>',
    'No. GoPay: <span class="step-code">0812-3456-7890</span> (DailyStationery)',
    'Input nominal',
    'Masukkan PIN GoPay',
    'Klik <strong>Sudah Bayar</strong>',
  ],
  ovo: [
    'Buka OVO',
    'Pilih <strong>Transfer → Ke OVO</strong>',
    'No. OVO: <span class="step-code">0818-5678-9012</span> (DailyStationery)',
    'Input nominal',
    'Security Code / fingerprint',
    'Klik <strong>Sudah Bayar</strong>',
  ],
  dana: [
    'Buka DANA',
    'Pilih <strong>Kirim → Ke DANA</strong>',
    'No. DANA: <span class="step-code">0821-9087-6543</span> (DailyStationery)',
    'Input nominal',
    'Masukkan PIN DANA',
    'Klik <strong>Sudah Bayar</strong>',
  ],
  shopeepay: [
    'Buka Shopee',
    'Pilih <strong>ShopeePay → Transfer</strong>',
    'No.: <span class="step-code">0856-1234-5678</span> (DailyStationery)',
    'Input nominal',
    'Masukkan PIN ShopeePay',
    'Klik <strong>Sudah Bayar</strong>',
  ],
  linkaja: [
    'Buka LinkAja',
    'Pilih <strong>Transfer → Kirim ke Nomor</strong>',
    'No.: <span class="step-code">0877-4321-8765</span> (DailyStationery)',
    'Input nominal',
    'Masukkan PIN LinkAja',
    'Klik <strong>Sudah Bayar</strong>',
  ],
  'bca-va': [
    'Buka BCA Mobile',
    'Pilih <strong>m-Transfer → BCA Virtual Account</strong>',
    'Nomor VA: <span class="step-code">8808 1234 5678 910</span>',
    'Cek nama DAILYSTATIONERY & nominal',
    'Masukkan PIN BCA',
    'Klik <strong>Sudah Bayar</strong>',
  ],
  'mandiri-va': [
    'Buka Livin\' by Mandiri',
    'Pilih <strong>Bayar → Multipayment</strong>',
    'Kode: <span class="step-code">88908</span> | VA: <span class="step-code">88908 999 8765</span>',
    'Cek nominal & konfirmasi MPIN',
    'Screenshot bukti',
    'Klik <strong>Sudah Bayar</strong>',
  ],
  'bni-va': [
    'Buka BNI Mobile',
    'Pilih <strong>Transfer → Virtual Account Billing</strong>',
    'Nomor VA: <span class="step-code">8806 5000 1234 567</span>',
    'Cek merchant & nominal',
    'Input password transaksi',
    'Klik <strong>Sudah Bayar</strong>',
  ],
  'bri-va': [
    'Buka BRImo',
    'Pilih <strong>BRIVA</strong>',
    'Nomor BRIVA: <span class="step-code">15200 0991 23456</span>',
    'Cek tagihan & konfirmasi',
    'Masukkan PIN',
    'Klik <strong>Sudah Bayar</strong>',
  ],
  'permata-va': [
    'Buka PermataMobile X',
    'Pilih <strong>Tagihan → Virtual Account</strong>',
    'Nomor VA: <span class="step-code">8625 000 9876</span>',
    'Cek & konfirmasi',
    'Masukkan PIN',
    'Klik <strong>Sudah Bayar</strong>',
  ],
  indomaret: [
    'Datang ke Indomaret terdekat',
    'Tunjukkan kode ke kasir: <span class="step-code">DS-INM-' + rndCode() + '</span>',
    'Sebutkan bayar DAILYSTATIONERY',
    'Bayar tagihan + admin Rp 2.500',
    'Simpan struk sebagai bukti',
    'Klik <strong>Sudah Bayar</strong>',
  ],
  alfamart: [
    'Datang ke Alfamart terdekat',
    'Tunjukkan kode ke kasir: <span class="step-code">DS-ALF-' + rndCode() + '</span>',
    'Sebutkan e-commerce DailyStationery',
    'Bayar tagihan + admin Rp 2.500',
    'Simpan struk bukti',
    'Klik <strong>Sudah Bayar</strong>',
  ],
  lawson: [
    'Datang ke Lawson terdekat',
    'Tunjukkan kode: <span class="step-code">DS-LWS-' + rndCode() + '</span>',
    'Kasir input kode ke sistem',
    'Bayar + admin Rp 2.500',
    'Simpan struk',
    'Klik <strong>Sudah Bayar</strong>',
  ],
  alfamidi: [
    'Datang ke Alfamidi terdekat',
    'Tunjukkan kode: <span class="step-code">DS-AMD-' + rndCode() + '</span>',
    'Bayar e-commerce DailyStationery',
    'Bayar + admin Rp 2.500',
    'Simpan struk bukti',
    'Klik <strong>Sudah Bayar</strong>',
  ],
};

/* ===== STATE ===== */
var cart       = [];
var selDel     = DELIVERIES[2];
var selMethod  = null;
var selBank    = null;
var txnCode    = '';

/* ===== UTILS ===== */
function rndCode() {
  return Math.random().toString(36).slice(2, 8).toUpperCase();
}

function fmt(n) {
  return 'Rp ' + n.toLocaleString('id-ID');
}

function genTxn() {
  var c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', r = 'DS';
  for (var i = 0; i < 10; i++) r += c[Math.floor(Math.random() * c.length)];
  return r;
}

function toast(msg) {
  var t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(function () { t.classList.remove('show'); }, 2500);
}

/* ===== NAVIGATION ===== */
function showPg(id) {
  document.querySelectorAll('.page').forEach(function (p) { p.classList.remove('active'); });
  document.getElementById('pg-' + id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHome()     { showPg('home'); }
function goProducts() { showPg('products'); renderProds(); }
function goSuccess()  { showPg('success'); }

function scrollTo2(id) {
  var el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* ===== CART ===== */
function toggleCart() {
  document.getElementById('cart-overlay').classList.toggle('open');
  document.getElementById('cart-sidebar').classList.toggle('open');
}

function addToCart(id) {
  var p  = PRODUCTS.find(function (x) { return x.id === id; });
  if (!p) return;
  var ex = cart.find(function (x) { return x.id === id; });
  if (ex) ex.qty++;
  else cart.push(Object.assign({}, p, { qty: 1 }));
  updateCart();
  toast('✓ ' + p.name.substring(0, 30) + '... ditambahkan');
}

function rmFromCart(id) {
  cart = cart.filter(function (x) { return x.id !== id; });
  updateCart();
}

function chgQty(id, d) {
  var it = cart.find(function (x) { return x.id === id; });
  if (!it) return;
  it.qty += d;
  if (it.qty <= 0) { rmFromCart(id); return; }
  updateCart();
}

function updateCart() {
  var cnt  = cart.reduce(function (s, c) { return s + c.qty; }, 0);
  document.getElementById('cart-count').textContent = cnt;

  var list = document.getElementById('cart-list');
  var foot = document.getElementById('cart-foot');

  if (cart.length === 0) {
    list.innerHTML = '<div class="c-empty"><div class="c-empty-icon">🛒</div><div style="font-family:\'Playfair Display\',serif;font-size:1.1rem">Keranjang masih kosong</div><p style="font-size:.82rem;color:var(--muted);margin-top:.5rem">Tambahkan produk favoritmu!</p></div>';
    foot.style.display = 'none';
    return;
  }

  foot.style.display = 'block';
  list.innerHTML = cart.map(function (it) {
    return '<div class="cart-item">' +
      '<img class="c-img" src="' + it.img + '" onerror="this.src=\'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=200&q=80\'">' +
      '<div class="c-info">' +
        '<div class="c-name">' + it.name + '</div>' +
        '<div class="c-price">' + fmt(it.price) + '</div>' +
        '<div class="qty-ctrl">' +
          '<button class="qty-btn" onclick="chgQty(' + it.id + ',-1)">−</button>' +
          '<span class="qty-num">' + it.qty + '</span>' +
          '<button class="qty-btn" onclick="chgQty(' + it.id + ',1)">+</button>' +
        '</div>' +
      '</div>' +
      '<button class="btn-rm" onclick="rmFromCart(' + it.id + ')">✕</button>' +
    '</div>';
  }).join('');

  var sub = cart.reduce(function (s, c) { return s + c.price * c.qty; }, 0);
  document.getElementById('c-subtotal').textContent = fmt(sub);
  document.getElementById('c-ship').textContent     = selDel ? fmt(selDel.price) : 'Pilih di checkout';
  document.getElementById('c-total').textContent    = fmt(sub + (selDel ? selDel.price : 0));
}

/* ===== PRODUCTS ===== */
function renderProds() { applyFilter(); }

function applyFilter() {
  var sort = (document.getElementById('sort-sel') || {}).value || 'newest';
  var cat  = (document.getElementById('cat-sel')  || {}).value || 'all';
  var minP = parseFloat((document.getElementById('p-min') || {}).value) || 0;
  var maxP = parseFloat((document.getElementById('p-max') || {}).value) || Infinity;

  var list = PRODUCTS.slice();
  if (cat  !== 'all')     list = list.filter(function (p) { return p.cat === cat; });
  if (minP > 0)           list = list.filter(function (p) { return p.price >= minP; });
  if (maxP < Infinity)    list = list.filter(function (p) { return p.price <= maxP; });

  if      (sort === 'price-low')  list.sort(function (a, b) { return a.price - b.price; });
  else if (sort === 'price-high') list.sort(function (a, b) { return b.price - a.price; });
  else if (sort === 'az')         list.sort(function (a, b) { return a.name.localeCompare(b.name); });
  else                            list.sort(function (a, b) { return b.dt - a.dt; });

  var grid = document.getElementById('prod-grid');
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = '<div class="no-prod"><div style="font-size:3rem;margin-bottom:1rem">🔍</div><div style="font-family:\'Playfair Display\',serif;font-size:1.1rem">Produk tidak ditemukan</div><p style="font-size:.82rem;margin-top:.5rem">Coba ubah filter</p></div>';
    return;
  }

  var bc = { best: 'b-best', new: 'b-new', sale: 'b-sale' };
  var bl = { best: '🔥 Terlaris', new: '✨ Baru', sale: '🏷️ Diskon' };

  grid.innerHTML = list.map(function (p) {
    return '<div class="prod-card">' +
      '<div class="prod-img-wrap">' +
        '<img class="prod-img" src="' + p.img + '" alt="' + p.name + '" loading="lazy" onerror="this.src=\'https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=500&q=80\'">' +
        (p.badge ? '<div class="prod-badge ' + bc[p.badge] + '">' + bl[p.badge] + '</div>' : '') +
      '</div>' +
      '<div class="prod-info">' +
        '<div class="prod-cat">'  + p.cat  + '</div>' +
        '<div class="prod-name">' + p.name + '</div>' +
        '<div class="prod-desc">' + p.desc + '</div>' +
        '<div class="prod-foot">' +
          '<div>' +
            '<span class="prod-price">' + fmt(p.price) + '</span>' +
            (p.old ? '<span class="prod-old">' + fmt(p.old) + '</span>' : '') +
          '</div>' +
          '<button class="btn-add" onclick="addToCart(' + p.id + ')">+</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');

  var lbl = document.getElementById('prod-count');
  if (lbl) lbl.textContent = 'Menampilkan ' + list.length + ' produk';
}

function resetFilter() {
  ['sort-sel', 'cat-sel'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.value = id === 'sort-sel' ? 'newest' : 'all';
  });
  ['p-min', 'p-max'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.value = '';
  });
  applyFilter();
}

function filterCat(cat) {
  goProducts();
  setTimeout(function () {
    var cs = document.getElementById('cat-sel');
    if (cs) { cs.value = cat; applyFilter(); }
  }, 100);
}

/* ===== CHECKOUT ===== */
function startCheckout() {
  if (cart.length === 0) return;
  toggleCart();
  renderDelOpts();
  renderOrdSum();
  goStep(1);
  showPg('payment');
}

function renderDelOpts() {
  var g = document.getElementById('del-grid');
  if (!g) return;
  g.innerHTML = DELIVERIES.map(function (d) {
    return '<div class="del-opt' + (selDel && selDel.id === d.id ? ' sel' : '') + '" id="dop-' + d.id + '" onclick="selDeliv(\'' + d.id + '\')">' +
      '<div class="del-logo">' + d.icon + '</div>' +
      '<div>' +
        '<div class="del-name">'  + d.name  + '</div>' +
        '<div class="del-eta">'   + d.eta   + '</div>' +
        '<div class="del-price">' + fmt(d.price) + '</div>' +
      '</div>' +
    '</div>';
  }).join('');
}

function selDeliv(id) {
  selDel = DELIVERIES.find(function (d) { return d.id === id; });
  document.querySelectorAll('.del-opt').forEach(function (el) { el.classList.remove('sel'); });
  var el = document.getElementById('dop-' + id);
  if (el) el.classList.add('sel');
  renderOrdSum();
  updateCart();
}

function renderOrdSum() {
  var c = document.getElementById('ord-items');
  if (!c) return;
  var sub  = cart.reduce(function (s, x) { return s + x.price * x.qty; }, 0);
  var ship = selDel ? selDel.price : 0;

  c.innerHTML = cart.map(function (it) {
    return '<div class="ord-item">' +
      '<span style="flex:1">' + it.name + '</span>' +
      '<span class="ord-qty">×' + it.qty + '</span>' +
      '<span class="ord-price">' + fmt(it.price * it.qty) + '</span>' +
    '</div>';
  }).join('') +
  '<div class="ord-item">' +
    '<span style="flex:1;color:var(--muted)">Ongkos Kirim (' + (selDel ? selDel.name : '-') + ')</span>' +
    '<span class="ord-price" style="color:var(--muted)">' + fmt(ship) + '</span>' +
  '</div>';

  var tv = document.getElementById('ord-total-val');
  if (tv) tv.textContent = fmt(sub + ship);
}

function getTotal() {
  return cart.reduce(function (s, c) { return s + c.price * c.qty; }, 0) + (selDel ? selDel.price : 0);
}

/* ===== STEPS ===== */
function goStep(n) {
  for (var i = 1; i <= 4; i++) {
    var el  = document.getElementById('ps' + i);
    if (el) el.style.display = (i === n) ? 'block' : 'none';

    var dot = document.getElementById('s' + i);
    if (dot) {
      dot.classList.remove('active', 'done');
      if      (i < n) dot.classList.add('done');
      else if (i === n) dot.classList.add('active');
    }

    if (i < 4) {
      var ln = document.getElementById('l' + i);
      if (ln) ln.classList.toggle('done', i < n);
    }
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ===== PAYMENT ===== */
function chooseMethod(m) {
  selMethod = m;

  if (m === 'qris') { goStep(4); renderQRIS(); return; }

  var titles = {
    mbanking:    'Pilih Bank',
    ewallet:     'Pilih E-Wallet',
    va:          'Pilih Bank (Virtual Account)',
    minimarket:  'Pilih Toko Swalayan',
  };
  var t = document.getElementById('s3-title');
  if (t) t.textContent = titles[m] || 'Pilih';

  var bg   = document.getElementById('bank-grid');
  if (!bg) return;
  var opts = BANKS[m] || [];

  bg.innerHTML = opts.map(function (b) {
    return '<div class="bank-opt" onclick="pickBank(\'' + b.id + '\',\'' + b.name + '\',\'' + b.logo + '\',\'' + b.type + '\')">' +
      '<div class="bank-logo">' + b.logo + '</div>' +
      '<div class="bank-name">' + b.name + '</div>' +
      '<div class="bank-type">' + b.type + '</div>' +
    '</div>';
  }).join('');

  goStep(3);
}

function pickBank(id, name, logo, type) {
  selBank = { id: id, name: name, logo: logo, type: type };
  goStep(4);
  renderTxn();
}

function renderTxn() {
  txnCode = genTxn();
  var total = getTotal();
  var steps = STEPS[selBank.id] || [
    'Ikuti instruksi pembayaran',
    'Bayar sesuai total tagihan',
    'Simpan bukti',
    'Klik Sudah Bayar',
  ];

  var card = document.getElementById('txn-card');
  if (!card) return;

  card.innerHTML =
    '<div class="txn-hdr">' +
      '<div class="txn-b-logo">' + selBank.logo + '</div>' +
      '<div><div class="txn-b-name">' + selBank.name + '</div><div class="txn-method">' + selBank.type + '</div></div>' +
    '</div>' +
    '<div class="txn-amt-card">' +
      '<div class="txn-amt-lbl">Total Tagihan</div>' +
      '<div class="txn-amt">' + fmt(total) + '</div>' +
      '<div class="txn-id">Kode Transaksi: ' + txnCode + '</div>' +
    '</div>' +
    '<div style="font-size:.7rem;color:var(--rust);background:rgba(196,98,45,.1);padding:.6rem 1rem;border-radius:8px;margin-bottom:1.2rem;text-align:center">⚠️ Simulasi saja. Tidak dapat digunakan untuk transaksi nyata.</div>' +
    '<div class="txn-steps">' +
      '<div style="font-size:.75rem;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:1px;margin-bottom:.5rem">Cara Pembayaran</div>' +
      steps.map(function (s, i) {
        return '<div class="txn-step"><div class="sn">' + (i + 1) + '</div><div class="st">' + s + '</div></div>';
      }).join('') +
    '</div>' +
    '<div class="txn-acts">' +
      '<button class="btn-tb" onclick="goStep(3)">← Kembali</button>' +
      '<button class="btn-paid" onclick="confirmPay()">✓ Sudah Bayar</button>' +
    '</div>';
}

function renderQRIS() {
  txnCode = genTxn();
  var total = getTotal();
  var items = cart.map(function (c) { return c.name + ' x' + c.qty; }).join(', ');
  var qrData = 'DAILYSTATIONERY | Kode: ' + txnCode + ' | Total: Rp ' + total.toLocaleString('id-ID') + ' | ' + items;

  var card = document.getElementById('txn-card');
  if (!card) return;

  card.innerHTML =
    '<div class="qr-band">QRIS — Bayar dengan Semua Aplikasi</div>' +
    '<div class="qr-body">' +
      '<div class="qr-merchant">🏪 DailyStationery</div>' +
      '<div style="font-size:.75rem;color:var(--muted);margin-bottom:.5rem">Jl. Kemang Raya No. 88, Jakarta Selatan</div>' +
      '<div id="qr-box"></div>' +
      '<div class="qr-amount">' + fmt(total) + '</div>' +
      '<div style="font-size:.72rem;color:var(--muted);margin-top:.3rem">Kode: ' + txnCode + '</div>' +
      '<div class="qr-note">Scan menggunakan GoPay, OVO, DANA, ShopeePay, BCA Mobile, atau aplikasi lain yang mendukung QRIS.<br><br>' +
        '<strong style="color:var(--rust)">⚠️ QR ini bersifat simulasi.</strong></div>' +
    '</div>' +
    '<button class="btn-paid" style="width:100%;margin-top:1.5rem" onclick="confirmPay()">✓ Sudah Scan & Bayar</button>';

  setTimeout(function () {
    var el = document.getElementById('qr-box');
    if (!el) return;
    try {
      new QRCode(el, {
        text: qrData,
        width: 200, height: 200,
        colorDark: '#1A1208',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.M,
      });
    } catch (e) {
      el.innerHTML = '<div style="width:200px;height:200px;background:var(--mc);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:.8rem;color:var(--muted);text-align:center;padding:1rem;margin:0 auto">QR Simulasi</div>';
    }
  }, 300);
}

/* ===== SUCCESS ===== */
function confirmPay() { buildReceipt(); goSuccess(); }

function buildReceipt() {
  var now  = new Date();
  var ds   = now.toLocaleDateString('id-ID', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
  var ts   = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  var sub  = cart.reduce(function (s, c) { return s + c.price * c.qty; }, 0);
  var ship = selDel ? selDel.price : 0;
  var total = sub + ship;

  var kasirs = ['Siti Rahma', 'Budi Santoso', 'Mega Putri', 'Randi Arya'];
  var kasir  = kasirs[Math.floor(Math.random() * kasirs.length)];

  var body = document.getElementById('rct-body');
  if (!body) return;

  body.innerHTML =
    '<div class="rct-row"><span class="rct-label">Tanggal</span><span class="rct-val">' + ds + '</span></div>' +
    '<div class="rct-row"><span class="rct-label">Waktu</span><span class="rct-val">' + ts + ' WIB</span></div>' +
    '<div class="rct-row"><span class="rct-label">Kode Transaksi</span><span class="rct-val mono">' + txnCode + '</span></div>' +
    '<div class="rct-row"><span class="rct-label">Metode</span><span class="rct-val">' + (selBank ? selBank.name + ' — ' + selBank.type : 'QRIS') + '</span></div>' +
    '<div class="rct-row"><span class="rct-label">Kasir</span><span class="rct-val">' + kasir + '</span></div>' +
    '<div class="rct-row"><span class="rct-label">Pengiriman</span><span class="rct-val">' + (selDel ? selDel.name : '-') + '</span></div>' +
    '<hr class="rct-div">' +
    '<div style="font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:.5rem">Detail Pembelian</div>' +
    cart.map(function (it) {
      return '<div class="rct-item">' +
        '<div class="rct-iname">' + it.name + '</div>' +
        '<div class="rct-idet"><span>' + fmt(it.price) + ' × ' + it.qty + '</span><span class="rct-itotal">' + fmt(it.price * it.qty) + '</span></div>' +
      '</div>';
    }).join('') +
    '<hr class="rct-div">' +
    '<div class="rct-row"><span class="rct-label">Subtotal</span><span class="rct-val">' + fmt(sub) + '</span></div>' +
    '<div class="rct-row"><span class="rct-label">Ongkos Kirim</span><span class="rct-val">' + fmt(ship) + '</span></div>' +
    '<div class="rct-row"><span class="rct-label">Biaya Layanan</span><span class="rct-val">Rp 0</span></div>' +
    '<div class="rct-row"><span class="rct-label">Diskon</span><span class="rct-val" style="color:var(--sage)">- Rp 0</span></div>' +
    '<hr class="rct-div-s">' +
    '<div class="rct-grand"><span>TOTAL</span><span class="rct-grand-p">' + fmt(total) + '</span></div>' +
    '<hr class="rct-div">' +
    '<div class="rct-row"><span class="rct-label" style="font-size:.75rem">Lokasi</span><span class="rct-val" style="font-size:.75rem">Jl. Kemang Raya No.88<br>Jak-Sel 12730</span></div>' +
    '<div class="rct-row"><span class="rct-label" style="font-size:.75rem">Status</span><span class="rct-val" style="color:var(--sage);font-size:.75rem">✓ PEMBAYARAN DITERIMA</span></div>';

  var bar = document.getElementById('rct-bar');
  if (bar) bar.textContent = txnCode.split('').join(' ');

  var rc = document.getElementById('rct-card');
  if (rc) rc.classList.remove('open');
  var rb = document.getElementById('rct-btn-txt');
  if (rb) rb.textContent = 'Lihat Keterangan Lengkap';

  cart = [];
  updateCart();
}

function toggleReceipt() {
  var rc = document.getElementById('rct-card');
  var rb = document.getElementById('rct-btn-txt');
  if (!rc || !rb) return;
  rc.classList.toggle('open');
  rb.textContent = rc.classList.contains('open') ? 'Tutup Keterangan' : 'Lihat Keterangan Lengkap';
}
