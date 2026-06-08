document.getElementById("registerForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const res = await fetch("https://herisusanta.my.id/javalogin/api/auth.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `action=register&username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    });

    if (isFormValid) {
               
                registerForm.classList.add('is-submitting');

                
                const dataPendaftaran Baru = {
                    username: usernameInput.value.trim(),
                    email: emailInput.value.trim(),
                    password: passwordInput.value
                };

        
    const data = await res.json();

    if (data.status === "success") {
        document.getElementById("message").innerText = "Daftar berhasil, Selamat bergabung";
        window.location.href = "../index.html";
    } else {
        document.getElementById("message").innerText = data.message || "Gagal Daftar";
    }
});
