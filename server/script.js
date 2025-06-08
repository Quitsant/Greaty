// Isi konten random (gambar, quotes, dll)
const kontenRandom = [
    {
        type: "img",
        src: "style/img/meme.jpg"
    },
    {
        type: "img",
        src: "style/img/meme2.jpeg"
    },
    {
        type: "text",
        text: "🔥 Hidup tanpa kopi ibarat coding tanpa semicolon!"
    },
    {
        type: "text",
        text: "💡 Jangan lupa istirahat, error juga butuh waktu buat ngerti kamu."
    }
];

// Fungsi buat generate konten baru
function tambahKontenRandom() { 
    const container = document.getElementById("mainContent");
    const data = kontenRandom[Math.floor(Math.random() * kontenRandom.length)];

    const item = document.createElement("div");
    item.className = "konten-item";

    if (data.type === "img") {
        const img = document.createElement("img");
        img.src = data.src;
        img.alt = "konten random";
        item.appendChild(img);
    } else if (data.type === "text") {
        const p = document.createElement("p");
        p.textContent = data.text;
        item.appendChild(p);
    }

            // Tambah garis pembatas setelah item
    const separator = document.createElement("div");
    separator.className = "separator";
    container.appendChild(separator);

    // 🔘 Tambah tombol interaksi
    const actionBar = document.createElement("div");
    actionBar.className = "action-bar";

const likeBtn = document.createElement("button");
likeBtn.innerHTML = "🩶";

likeBtn.onclick = function() {
    likeBtn.classList.toggle("liked");
    if (likeBtn.classList.contains("liked")) {
        likeBtn.innerHTML = "❤️"
    } else {
        likeBtn.innerHTML = "🩶"
    }


};

    const commentBtn = document.createElement("button");
    commentBtn.innerHTML = "💬 Comment";
    commentBtn.onclick = () => {
        const comment = prompt("Tulis komentarmu:");
        if (comment) alert("Komentar kamu: " + comment);
    };

    const shareBtn = document.createElement("button");
    shareBtn.innerHTML = "🔗 Share";
    shareBtn.onclick = () => {
        alert("Link disalin ke clipboard!");
        navigator.clipboard.writeText(window.location.href);
    };

    actionBar.appendChild(likeBtn);
    actionBar.appendChild(commentBtn);
    actionBar.appendChild(shareBtn);

    item.appendChild(actionBar);
    container.appendChild(item);
}


// Load awal
for (let i = 0; i < 3; i++) tambahKontenRandom();

// Infinite Scroll
window.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (scrolled >= scrollable - 100) {
        for (let i = 0; i < 2; i++) tambahKontenRandom();
    }
});


const separator = document.createElement("div");
separator.className = "separator";
container.appendChild(separator);
