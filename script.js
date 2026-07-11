/* ===========================
   GOOGLE FONT
=========================== */

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

/* ===========================
   ROOT VARIABLES
=========================== */

:root{

--primary:#2563eb;
--secondary:#7c3aed;
--accent:#06b6d4;

--bg:#07111f;
--card:#111827;

--text:#ffffff;
--text2:#b8c5d6;

--border:rgba(255,255,255,.08);

--shadow:0 15px 45px rgba(0,0,0,.35);

--radius:20px;

}

body.light{

--bg:#f6f9fc;

--card:#ffffff;

--text:#111827;

--text2:#4b5563;

}

/* ===========================
RESET
=========================== */

*{

margin:0;

padding:0;

box-sizing:border-box;

scroll-behavior:smooth;

font-family:'Poppins',sans-serif;

}

body{

background:var(--bg);

color:var(--text);

overflow-x:hidden;

}

/* ===========================
SCROLLBAR
=========================== */

::-webkit-scrollbar{

width:8px;

}

::-webkit-scrollbar-thumb{

background:linear-gradient(180deg,var(--primary),var(--secondary));

border-radius:20px;

}

/* ===========================
LOADER
=========================== */

.loader{

position:fixed;

inset:0;

background:#050b17;

display:flex;

justify-content:center;

align-items:center;

z-index:99999;

}

.spinner{

width:70px;

height:70px;

border-radius:50%;

border:6px solid rgba(255,255,255,.1);

border-top:6px solid var(--primary);

animation:spin 1s linear infinite;

}

@keyframes spin{

100%{

transform:rotate(360deg);

}

}

/* ===========================
CURSOR
=========================== */

.cursor{

position:fixed;

width:22px;

height:22px;

border-radius:50%;

background:rgba(37,99,235,.35);

pointer-events:none;

backdrop-filter:blur(10px);

transform:translate(-50%,-50%);

z-index:9999;

}

/* ===========================
NAVBAR
=========================== */

.navbar{

position:fixed;

top:0;

left:0;

width:100%;

padding:18px 9%;

display:flex;

justify-content:space-between;

align-items:center;

background:rgba(8,16,30,.55);

backdrop-filter:blur(18px);

border-bottom:1px solid rgba(255,255,255,.08);

z-index:999;

}

.logo{

font-size:30px;

font-weight:700;

color:white;

text-decoration:none;

}

.logo span{

color:var(--accent);

}

.nav-links{

display:flex;

gap:35px;

list-style:none;

}

.nav-links a{

text-decoration:none;

color:white;

font-weight:500;

transition:.3s;

}

.nav-links a:hover{

color:var(--accent);

}

.resume-btn{

padding:12px 24px;

border-radius:50px;

background:linear-gradient(135deg,var(--primary),var(--secondary));

text-decoration:none;

color:white;

font-weight:600;

box-shadow:var(--shadow);

}

.resume-btn:hover{

transform:translateY(-3px);

}
