// Contoh JavaScript sederhana
document.addEventListener('DOMContentLoaded', function() {
    console.log('Aplikasi profil siap digunakan!');
    
    // Contoh interaksi sederhana
    document.querySelector('.profile-img').addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    document.querySelector('.profile-img').addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});