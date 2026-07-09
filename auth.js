// ====================== auth.js ======================
const AUTH_KEY = "isLoggedIn";
const USER_KEY = "clinicUser";

// Dummy Login Credentials
const DUMMY = {
    email: "doctor@clinic.com",
    password: "clinic@1234"
};

// Check login hai ya nahi
function isAuthenticated() {
    return localStorage.getItem(AUTH_KEY) === "true";
}

// Login karne ka function
function login(email, password) {
    if (email === DUMMY.email && password === DUMMY.password) {
        localStorage.setItem(AUTH_KEY, "true");
        localStorage.setItem(USER_KEY, JSON.stringify({
            name: "Dr. Ananya Sharma",
            email: email,
            role: "Pediatrician"
        }));
        return true;
    }
    return false;
}

// Logout karne ka function — ab kisi bhi page (chahe kitna bhi nested ho) se sahi kaam karega
function logout() {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(USER_KEY);
    sessionStorage.clear();

    // Absolute path use kiya — root se resolve hoga, relative "../" ki tarah depth-dependent nahi
    window.location.replace("/index.html");
}

// Har page ko protect karne ke liye
function protectPage() {
    if (!isAuthenticated()) {
        window.location.replace("/index.html");
    }
}

// Current user details
function getCurrentUser() {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
}