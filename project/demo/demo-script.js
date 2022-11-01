
const navbar = document.querySelector('#nav');
const navLinks1 = document.getElementById("nav-links-1");
const navLinks2 = document.getElementById("nav-links-2");
const navLinks3 = document.getElementById("nav-links-3");
const navLinks4 = document.getElementById("nav-links-4");
// add fixed class to navbar
window.addEventListener('scroll', function () 
{
 if (window.pageYOffset > 100) 
 {
 navbar.classList.add('navbar-fixed');
 } 
 else 
 {
 navbar.classList.remove('navbar-fixed');
 }
});

showpage(0);
function showpage(index)
{
    const p = document.querySelector('.show-classdemo');
    console.log('p', p);
    switch(index) 
    {
        case 0:
            p.innerHTML = `<iframe src ="./resume.html" width="100%" height="100%" />`
            
            break;
        
        case 1:
            p.innerHTML = `<iframe src="/w07/w07index.html" width="100%" height="100%" />`
            // navLinks1.style.backgroundColor = "red" ;
            break;

        case 2:
            p.innerHTML = `<iframe src="/w08/w08index.html" width="100%" height="100%" />`
            // navLinks2.style.backgroundColor = "red" ;
            break;

        case 3:
            p.innerHTML = `<iframe src="/blogs/blog_411770083.html" width="100%" height="100%" />`
            // navLinks3.style.backgroundColor = "red" ;
            break;
         
        case 4:
            p.innerHTML = `<iframe src="/w06/blog_411770083.html" width="100%" height="100%" />`
            // navLinks4.style.backgroundColor = "red" ;
            break;

    }
}