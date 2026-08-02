document.addEventListener('DOMContentLoaded',()=>{
const wa=document.createElement('a');
wa.href='https://wa.me/917870100099';
wa.target='_blank';
wa.className='whatsapp-float';
wa.innerHTML='💬';
document.body.appendChild(wa);

document.querySelectorAll('nav a').forEach(a=>{
a.addEventListener('mouseenter',()=>a.style.opacity='0.8');
a.addEventListener('mouseleave',()=>a.style.opacity='1');
});
});
