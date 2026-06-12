# VidicConnect - Ujian Praktik RPL

**Nama:** Handyan Vidic  
**Kelas:** XI PPLG 3  

## Penjelasan Fetch API
Project ini menggunakan API dari `https://jsonplaceholder.typicode.com/users`. Data user ditarik menggunakan fungsi `fetch()` bawaan JS yang dieksekusi di dalam hook `useEffect` agar berjalan satu kali saat komponen pertama kali dimuat.

## Penjelasan Component & Fungsinya
1. **App.jsx**: Mengelola state utama (users, search) dan fungsi Fetch API.
2. **Navbar.jsx**: Menampilkan navigasi, form pencarian (search), dan *switch* tema.
3. **UserCard.jsx**: Komponen dinamis yang merender data tiap user serta menangani interaksi tombol Like dan Follow.
4. **Footer.jsx**: Menampilkan nama dan kelas pembuat project.
5. **ThemeContext.jsx**: *Global State* untuk mode terang/gelap (Light/Dark mode) pada website.

## Implementasi React Hook
* **useState**: Mengelola *array* data user, *input query* pencarian, dan status klik tombol Like/Follow.
* **useEffect**: Memanggil fungsi fetch API secara otomatis dan memberi instruksi *auto-focus* pada kolom pencarian.
* **useContext**: Mengirim data tema (dark/light mode) ke berbagai komponen tanpa *props drilling*.
* **useRef**: Memberikan referensi ke elemen `<input>` pencarian agar sistem bisa melakukan *focus* kursor secara otomatis.

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
