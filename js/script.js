// Fungsi Slides
let slideIndex = 0;
function moveSlide(step) {
    let slides = document.querySelectorAll(".slider .slides img");
    slideIndex += step;

    if (slideIndex < 0) {
        slideIndex = slides.length - 1; 
    }
    if (slideIndex >= slides.length) {
        slideIndex = 0; 
    }

    let slidesContainer = document.querySelector(".slider .slides");
    slidesContainer.style.transform = "translateX(" + (-slideIndex * 100) + "%)";
}

// Autoplay
setInterval(() => {
    moveSlide(1); 
}, 3000); // 3 detik

// Fungsi untuk validasi form sebelum menampilkan jawaban
function validateForm() {
    // Validasi Nama
    var name = document.forms["message-form"]["name"].value; 
    if (name == "") { 
        alert("Nama harus diisi."); 
        return false; 
    }

    // Validasi Email
    var email = document.forms["message-form"]["email"].value; 
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Pola regex untuk validasi format email
    if (email == "") { 
        alert("Email harus diisi."); 
        return false; 
    } else if (!email.match(emailPattern)) { 
        alert("Format email tidak valid."); 
        return false; // Menghentikan pengiriman form
    }

    // Validasi Tanggal Lahir
    var date = document.forms["message-form"]["date"].value; 
    if (date == "") { 
        alert("Tanggal Lahir harus diisi."); 
        return false; 
    }

    // Validasi Jenis Kelamin
    var gender = document.forms["message-form"]["gender"].value; 
    if (gender == "") { 
        alert("Jenis Kelamin harus dipilih."); 
        return false; 
    }

    // Validasi Pesan
    var message = document.forms["message-form"]["message"].value; 
    if (message == "") { 
        alert("Pesan harus diisi."); 
        return false; 
    }

    // Jika semua validasi lolos, form bisa dikirimkan
    return true;
}

// Fungsi untuk menampilkan jawaban setelah form disubmit
function showAnswer() {
    // Mengambil nilai dari setiap input form
    var name = document.forms["message-form"]["name"].value; 
    var email = document.forms["message-form"]["email"].value; 
    var date = document.forms["message-form"]["date"].value; 
    var gender = document.forms["message-form"]["gender"].value; 
    var message = document.forms["message-form"]["message"].value; 

    // Memeriksa kembali validasi form sebelum menampilkan jawaban
    // Validasi Nama
    if (name == "") {
        alert("Nama harus diisi.");
        return false;
    }
    // Validasi Email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email == "") {
        alert("Email harus diisi.");
        return false;
    } else if (!email.match(emailPattern)) {
        alert("Format email tidak valid.");
        return false;
    }
    // Validasi Tanggal Lahir
    if (date == "") {
        alert("Tanggal Lahir harus diisi.");
        return false;
    }
    // Validasi Jenis Kelamin
    if (gender == "") {
        alert("Jenis Kelamin harus dipilih.");
        return false;
    }
    // Validasi Pesan
    if (message == "") {
        alert("Pesan harus diisi.");
        return false;
    }

    // Jika semua data valid, menampilkan jawaban di bawah form
    var answerDiv = document.getElementById("answer"); // Mendapatkan elemen dengan id "answer"
    answerDiv.innerHTML = `
        <h3>Rekaman Pesan Anda:</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tanggal Lahir:</strong> ${date}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `; // Mengisi elemen "answer" dengan data yang diambil dari form

    // Mencegah form agar tidak dikirim ke server
    return false; // Menghentikan pengiriman form ke server
}
