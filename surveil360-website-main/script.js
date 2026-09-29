   function showPage(id) {
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      const btns = document.querySelectorAll('.nav-btn');
      const pages = ['home', 'about', 'services', 'industries', 'team', 'contact'];
      const idx = pages.indexOf(id);
      if (idx >= 0) btns[idx].classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function handleSubmit() {
      const btn = document.querySelector('.form-submit');
      btn.textContent = '✓ Request Sent — We\'ll be in touch within 24hrs';
      btn.style.background = '#00E87A';
      btn.style.color = '#030B1A';
      btn.disabled = true;
    }