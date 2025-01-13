// Fungsi untuk validasi form sebelum menampilkan jawaban
function validateForm() {
    // Validasi Nama
    var name = document.forms["message-form"]["name"].value; // Mengambil nilai dari input nama
    if (name == "") { // Mengecek apakah nama kosong
        alert("Nama harus diisi."); // Menampilkan alert jika nama kosong
        return false; // Menghentikan pengiriman form
    }

    // Validasi Email
    var email = document.forms["message-form"]["email"].value; // Mengambil nilai dari input email
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/; // Pola regex untuk validasi format email
    if (email == "") { // Mengecek apakah email kosong
        alert("Email harus diisi."); // Menampilkan alert jika email kosong
        return false; // Menghentikan pengiriman form
    } else if (!email.match(emailPattern)) { // Mengecek apakah email sesuai dengan pola regex
        alert("Format email tidak valid."); // Menampilkan alert jika format email tidak valid
        return false; // Menghentikan pengiriman form
    }

    // Validasi Tanggal Lahir
    var date = document.forms["message-form"]["date"].value; // Mengambil nilai dari input tanggal lahir
    if (date == "") { // Mengecek apakah tanggal lahir kosong
        alert("Tanggal Lahir harus diisi."); // Menampilkan alert jika tanggal lahir kosong
        return false; // Menghentikan pengiriman form
    }

    // Validasi Jenis Kelamin
    var gender = document.forms["message-form"]["gender"].value; // Mengambil nilai dari input jenis kelamin
    if (gender == "") { // Mengecek apakah jenis kelamin kosong
        alert("Jenis Kelamin harus dipilih."); // Menampilkan alert jika jenis kelamin tidak dipilih
        return false; // Menghentikan pengiriman form
    }

    // Validasi Pesan
    var message = document.forms["message-form"]["message"].value; // Mengambil nilai dari input pesan
    if (message == "") { // Mengecek apakah pesan kosong
        alert("Pesan harus diisi."); // Menampilkan alert jika pesan kosong
        return false; // Menghentikan pengiriman form
    }

    // Jika semua validasi lolos, form bisa dikirimkan
    return true;
}

// Fungsi untuk menampilkan jawaban setelah form disubmit
function showAnswer() {
    // Mengambil nilai dari setiap input form
    var name = document.forms["message-form"]["name"].value; // Nama
    var email = document.forms["message-form"]["email"].value; // Email
    var date = document.forms["message-form"]["date"].value; // Tanggal Lahir
    var gender = document.forms["message-form"]["gender"].value; // Jenis Kelamin
    var message = document.forms["message-form"]["message"].value; // Pesan

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
