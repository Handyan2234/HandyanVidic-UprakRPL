# VidicConnect - Ujian Praktik PAS RPL

**Nama:** Handyan Vidic  
**Kelas:** XI PPLG 3  

## Penjelasan Fetch API
Project ini menggunakan API dari `https://jsonplaceholder.typicode.com/users`[cite: 1]. Data user ditarik menggunakan fungsi `fetch()` bawaan JS yang dieksekusi di dalam hook `useEffect` agar berjalan satu kali saat komponen pertama kali dimuat[cite: 1].

## Penjelasan Component & Fungsinya
1. **App.jsx**: Mengelola state utama (users, search) dan fungsi Fetch API[cite: 1].
2. **Navbar.jsx**: Menampilkan navigasi, form pencarian (search), dan *switch* tema[cite: 1].
3. **UserCard.jsx**: Komponen dinamis yang merender data tiap user serta menangani interaksi tombol Like dan Follow[cite: 1].
4. **Footer.jsx**: Menampilkan nama dan kelas pembuat project[cite: 1].
5. **ThemeContext.jsx**: *Global State* untuk mode terang/gelap (Light/Dark mode) pada website.

## Implementasi React Hook
* **useState**: Mengelola *array* data user, *input query* pencarian, dan status klik tombol Like/Follow[cite: 1].
* **useEffect**: Memanggil fungsi fetch API secara otomatis dan memberi instruksi *auto-focus* pada kolom pencarian[cite: 1].
* **useContext**: Mengirim data tema (dark/light mode) ke berbagai komponen tanpa *props drilling*[cite: 1].
* **useRef**: Memberikan referensi ke elemen `<input>` pencarian agar sistem bisa melakukan *focus* kursor secara otomatis[cite: 1].

## Potongan Kode Bukti Implementasi Hooks

**Bukti `useEffect` (Fetch API):**
```javascript
useEffect(() => {
  fetch('[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)')
    .then((response) => response.json())
    .then((data) => setUsers(data));
}, []);
```

**Bukti `useState` (Like/Follow):**
```javascript
const [isLiked, setIsLiked] = useState(false);
const [isFollowed, setIsFollowed] = useState(false);
```

**Bukti `useRef` (Auto-focus):**
```javascript
const searchRef = useRef(null);
useEffect(() => { searchRef.current.focus(); }, []);
```

**Bukti `useContext` (Tema Web):**
```javascript
const { theme, toggleTheme } = useContext(ThemeContext);
```
