 // Year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Simple scroll reveal
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting) { e.target.classList.add('visible') } });
    }, { threshold:.12 });
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

    // Collection filter
    const pills = document.querySelectorAll('.filter-pill');
    const items = document.querySelectorAll('#productGrid .item');
    pills.forEach(p=>p.addEventListener('click', ()=>{
      pills.forEach(x=>x.classList.remove('active')); p.classList.add('active');
      const f = p.dataset.filter;
      items.forEach(it=>{
        const show = f==='all' || it.classList.contains(f);
        it.style.display = show ? '' : 'none';
      });
    }));

    // Fake submit handler (replace with backend later)
    function fakeSubmit(form){
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.innerHTML; btn.disabled = true; btn.innerHTML = 'Sending…';
      setTimeout(()=>{ btn.innerHTML = 'Sent ✓'; setTimeout(()=>{ btn.disabled=false; btn.innerHTML=original; form.reset(); }, 1800); }, 1200);
    }

    // Back to top visibility
    const back = document.getElementById('backToTop');
    window.addEventListener('scroll', ()=>{ back.style.display = window.scrollY > 400 ? 'block' : 'none'; });
    back.addEventListener('click', ()=>window.scrollTo({top:0, behavior:'smooth'}));

    const typingElement = document.querySelector("#typing-text");
const textArray = ["Niffer Outfit Store"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = textArray[textIndex];
    if (isDeleting) {
        charIndex--;
        typingElement.textContent = currentText.substring(0, charIndex);
    } else {
        charIndex++;
        typingElement.textContent = currentText.substring(0, charIndex);
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Pause before deleting
        return;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100); // Typing speed
}

typeEffect();
