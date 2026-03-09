/* ============================================================
   DAILYSTATIONERY — script.js
   ============================================================ */

/* ===== DATA ===== */
const PRODUCTS = [
  {
    id: 1, name: 'Faber-Castell Pensil 2B (12 pcs)', cat: 'Pensil',
    price: 12000, old: 18000, badge: 'best',
    img: 'https://down-id.img.susercontent.com/file/id-11134207-7r98r-lni2107vysjla7',
    desc: 'Pensil kayu grade 2B, ujung halus, tidak mudah patah. Cocok untuk menulis & menggambar.',
    dt: new Date('2025-12-01')
  },
  {
    id: 2, name: 'Staedtler Pensil Warna Noris Club (24)', cat: 'Pensil',
    price: 50000, old: null, badge: 'sale',
    img: 'https://static-01.daraz.com.np/p/7b3373a5efff2abe852887857916c26f.jpg',
    desc: '24 warna cerah, isi tebal anti patah. Cocok untuk sekolah & hobi menggambar.',
    dt: new Date('2025-11-10')
  },
  {
    id: 3, name: 'Pilot G2 Pulpen Gel 0.5mm (6 pcs)', cat: 'Pulpen',
    price: 12000, old: null, badge: 'best',
    img: 'https://th.bing.com/th/id/OIP.a8BIGPa6dOUpvnkJ2zrVBgHaHa?w=213&h=213&c=7&r=0&o=7&pid=1.7&rm=3',
    desc: 'Tinta gel halus, grip karet, refillable. 6 warna: hitam, biru, merah, hijau, ungu, coklat.',
    dt: new Date('2025-10-05')
  },
  {
    id: 4, name: 'Uni-ball Signo 0.38mm Hitam (3 pcs)', cat: 'Pulpen',
    price: 21000, old: null, badge: 'new',
    img: 'https://cdn.dsmcdn.com/ty1535/product/media/images/prod/QC/20240910/19/21ee3a11-9fec-3d60-956b-0a47b23cb6ab/1_org_zoom.jpg',
    desc: 'Tinta gel ultra halus 0.38mm. Hitam pekat, cocok untuk tulisan rapi dan detail.',
    dt: new Date('2026-01-15')
  },
  {
    id: 5, name: 'Zebra Sarasa Clip Pulpen Warna (10 pcs)', cat: 'Pulpen',
    price: 105000, old: null, badge: null,
    img: 'https://th.bing.com/th/id/OIP.WXHhL6S5hf-GtVDYTYUBGAHaHa?w=186&h=186&c=7&r=0&o=7&pid=1.7&rm=3',
    desc: '10 warna pastel dan vibrant, tinta gel 0.5mm, bisa dijepit di buku.',
    dt: new Date('2025-09-20')
  },
  {
    id: 6, name: 'Buku Tulis Sinar Dunia 38L (10 pcs)', cat: 'Buku Tulis',
    price: 32000, old: 38000, badge: 'best',
    img: 'https://image1ws.indotrading.com/s3/productimages/webp/co37129/p784383/w300-h300/4a607773-6522-40df-985a-2fa09ee0343b.jpg',
    desc: '38 lembar garis, kertas putih bersih. Bundel 10 buku hemat untuk sekolah.',
    dt: new Date('2025-08-15')
  },
  {
    id: 7, name: 'Kokuyo Campus Notebook A5 Dot Grid', cat: 'Buku Tulis',
    price: 38000, old: null, badge: 'new',
    img: 'https://tse2.mm.bing.net/th/id/OIP.RN_W3albZ_z3kUiVE3XzeAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    desc: '80 lembar dot grid, kertas halus 70gsm, sampul lentur. Favorit pelajar & mahasiswa.',
    dt: new Date('2026-01-30')
  },
  {
    id: 8, name: 'Buku Gambar A4 120gsm (20 lembar)', cat: 'Buku Tulis',
    price: 10000, old: null, badge: null,
    img: 'data:image/webp;base64,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',
    desc: 'Kertas gambar putih tebal 120gsm, 20 lembar. Cocok untuk sketsa & tugas seni.',
    dt: new Date('2025-07-01')
  },
  {
    id: 9, name: 'Bantex Binder A5 Ring 20 — Biru Navy', cat: 'Binder',
    price: 45000, old: 57000, badge: 'sale',
    img: 'https://th.bing.com/th/id/OIP.tN4SML7qxMpMyO50rnnqRwHaHa?w=186&h=186&c=7&r=0&o=7&pid=1.7&rm=3',
    desc: 'Binder ring 20, snap button, sampul PVC tahan lama. Muat 200 lembar.',
    dt: new Date('2025-06-01')
  },
  {
    id: 10, name: 'Binder Kulit Sintetis A4 Premium — Hitam', cat: 'Binder',
    price: 120000, old: 135000, badge: 'best',
    img: 'https://down-id.img.susercontent.com/file/46b6f7e8418e9e8e7d16844f45db7641',
    desc: 'Binder ring 26 kulit sintetis premium, kantong kartu & slot pena.',
    dt: new Date('2026-02-01')
  },
  {
    id: 11, name: 'Isi Binder A5 Garis 100L (2 pack)', cat: 'Isi Binder',
    price: 22000, old: null, badge: null,
    img: 'https://down-id.img.susercontent.com/file/b34d46f525d8b9b65728c6872ef87df6',
    desc: '2 pack isi binder A5 bergaris, 100 lembar/pack. Kompatibel ring 20 & 26.',
    dt: new Date('2025-05-22')
  },
  {
    id: 12, name: 'Isi Binder A4 Kotak 100 lembar', cat: 'Isi Binder',
    price: 18000, old: null, badge: 'new',
    img: 'https://down-id.img.susercontent.com/file/b4bdf8529b0c919bc8232a6c97d24c4f',
    desc: 'Kertas binder A4 bergaris kotak, lubang 26-ring. Putih bersih anti-bleeding.',
    dt: new Date('2026-02-20')
  },
  {
    id: 13, name: 'Tas Ransel Jansport Right Pack — Hitam', cat: 'Tas Sekolah',
    price: 1500000, old: 1535000, badge: 'best',
    img: 'https://th.bing.com/th/id/OIP.QXhe4ywI5A67Hv_R3UxlqwHaHa?w=183&h=183&c=7&r=0&o=7&pid=1.7&rm=3',
    desc: 'Tas punggung 31L, cordura tahan air, garansi lifetime. Klasik & kuat.',
    dt: new Date('2025-04-10')
  },
  {
    id: 14, name: 'Tas Selempang Kanvas — Coklat', cat: 'Tas Sekolah',
    price: 120000, old: 145000, badge: 'sale',
    img: 'data:image/webp;base64,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',
    desc: 'Tas kanvas kasual, kompartemen laptop 13", bahan tebal & jahitan kuat.',
    dt: new Date('2025-03-15')
  },
  {
    id: 15, name: 'Penggaris Besi Stainless 30cm', cat: 'Penggaris & Alat Ukur',
    price: 9500, old: null, badge: null,
    img: 'https://th.bing.com/th/id/OIP.GLR8bhP2u5ZvchVOaRJ0IAHaHa?w=183&h=183&c=7&r=0&o=7&pid=1.7&rm=3',
    desc: 'Penggaris besi stainless anti-karat 30cm. Akurat, dual-scale (cm & inch).',
    dt: new Date('2025-02-20')
  },
  {
    id: 16, name: 'Stapler Kangaro DS-23S + Isi Staples', cat: 'Perlengkapan Kantor',
    price: 42000, old: 48000, badge: 'sale',
    img: 'https://th.bing.com/th/id/OIP.Jrw4zwOk7Cp7MAYnhnjilwHaHa?w=183&h=183&c=7&r=0&o=7&pid=1.7&rm=3',
    desc: 'Stapler meja 30 lembar + 1000 isi staples No.23. Set lengkap siap pakai.',
    dt: new Date('2025-01-10')
  },
  {
    id: 17, name: 'Gunting Serbaguna Stainless 21cm', cat: 'Perlengkapan Kantor',
    price: 15000, old: null, badge: null,
    img: 'https://images.unsplash.com/photo-1668853060178-2d53667b7345?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: 'Gunting stainless 21cm, pegangan ergonomis, tajam & ringan.',
    dt: new Date('2025-11-05')
  },
  {
    id: 18, name: 'Penghapus Faber-Castell Dust-Free (5 pcs)', cat: 'Pensil',
    price: 2000, old: null, badge: 'new',
    img: 'https://th.bing.com/th/id/OIP.TpzXPe1Z6aAHRD_anAisKQHaHa?w=162&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
    desc: 'Penghapus putih bersih tanpa residu, tidak merusak kertas. Isi 5 buah.',
    dt: new Date('2026-02-15')
  },
];

const DELIVERIES = [
  { id: 'jne-reg',  name: 'JNE Reguler',     icon: '📦', eta: '2–3 hari kerja', price: 7000 },
  { id: 'jne-yes',  name: 'JNE YES',          icon: '⚡', eta: 'Besok sampai',   price: 5000 },
  { id: 'jnt',      name: 'J&T Express',      icon: '🚚', eta: '1–3 hari kerja', price: 7500 },
  { id: 'sicepat',  name: 'SiCepat Reguler',  icon: '🏃', eta: '1–2 hari kerja', price: 6000 },
  { id: 'anteraja', name: 'Anteraja',          icon: '🐝', eta: '2–3 hari kerja', price: 7000 },
  { id: 'gosend',   name: 'GoSend Same Day',  icon: '🛵', eta: 'Hari ini',       price: 15000 },
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
