const envelope = document.getElementById('envelope');
const openBtn = document.getElementById('openBtn');

// พื้นหลังไล่สีเปลี่ยนเรื่อย ๆ
const colors = [
    "linear-gradient(135deg, pink, lightblue)",
    "linear-gradient(135deg, lightpink, peachpuff)",
    "linear-gradient(135deg, lavenderblush, lightcoral)",
    "linear-gradient(135deg, mistyrose, lightskyblue)"
];
let colorIndex = 0;
setInterval(() => {
    colorIndex = (colorIndex + 1) % colors.length;
    document.body.style.background = colors[colorIndex];
}, 3000);

// หยุดลอยและซูมเข้าหลัง 3 วิ
setTimeout(() => {
    envelope.style.animation = 'none';
    envelope.style.transform = 'scale(1.05)';
}, 3000);

// เอฟเฟกต์หัวใจลอยพื้นหลัง
function createFloatingHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.bottom = '0px';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}
setInterval(createFloatingHeart, 500);

// เมื่อกดปุ่ม
openBtn.addEventListener('click', () => {
    // หัวใจระเบิดกลางจอ
    for (let i = 0; i < 60; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = "50%";
        heart.style.top = "50%";

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 400;
        const x = Math.cos(angle) * distance + 'px';
        const y = Math.sin(angle) * distance + 'px';
        heart.style.setProperty('--x', x);
        heart.style.setProperty('--y', y);

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1000);
    }

    // ลิงก์ไป toey.html
    setTimeout(() => {
        window.location.href = "toey.html";
    }, 1200);
});
