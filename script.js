document.addEventListener('DOMContentLoaded', function() {
    // 获取菜单按钮和移动端导航
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileNavLinks = mobileNav.querySelectorAll('a');

    // 切换移动端菜单的显示/隐藏状态
    menuToggle.addEventListener('click', function() {
        mobileNav.classList.toggle('active');
        // 也可以改变图标，例如从bars（三条线）变为times（叉）
        const icon = menuToggle.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // 当用户点击移动端菜单中的链接时，隐藏菜单
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.classList.remove('active');
            // 恢复图标
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
});