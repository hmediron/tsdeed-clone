// إضافة حركة دوران لزر واتساب عند المرور عليه
const whatsappBtn = document.getElementById('whatsappBtn');

whatsappBtn.addEventListener('mouseenter', function() {
    whatsappBtn.classList.add('rotate-on-hover');
});

whatsappBtn.addEventListener('mouseleave', function() {
    whatsappBtn.classList.remove('rotate-on-hover');
}); 