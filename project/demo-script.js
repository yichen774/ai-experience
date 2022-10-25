showpage(0);
function showpage(index)
{
    const p = document.querySelector('.show-classdemo');
    console.log('p', p);
    switch(index) 
    {
        case 0:
            p.innerHTML = `<iframe src ="./homepage-tem.jpeg" width="100%" height="100%" />`
            break;
        
        case 1:
            p.innerHTML = `<iframe src="/w07/w07index.html" width="100%" height="100%" />`
            break;

        case 2:
            p.innerHTML = `<iframe src="/w08/w08index.html" width="100%" height="100%" />`
            break;

        case 3:
            p.innerHTML = `<iframe src="/w05/w05.html" width="100%" height="100%" />`
            break;
         
        case 4:
            p.innerHTML = `<iframe src="/w06/blog_411770083.html" width="100%" height="100%" />`
            break;

    }
}