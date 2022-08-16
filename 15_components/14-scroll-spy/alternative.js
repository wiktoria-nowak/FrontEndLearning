// const sections = document.querySelectorAll('.section');
// const menuItems = document.querySelectorAll('a');
 
// const options = {
//     threshold: [0.5, 0.9]
// };
 
// const handleScrollspy = entries => {
//     entries.forEach(entry => {
//         const activeNav = document.querySelector(`a[href='#${entry.target.id}']`);
 
//         if(entry.isIntersecting) {
//             menuItems.forEach(item => item.classList.remove('active'));
//             activeNav.classList.add('active');
//         };
//     });
// };
 
// const observer = new IntersectionObserver(handleScrollspy, options);
 
// sections.forEach(section => {
//     observer.observe(section);
// });