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
/* ===========================
   HERO SECTION
=========================== */

.hero{

min-height:100vh;

padding:150px 9% 100px;

display:flex;

justify-content:space-between;

align-items:center;

position:relative;

overflow:hidden;

}

.hero-left{

width:55%;

z-index:2;

}

.hero-left h3{

font-size:26px;

font-weight:500;

color:var(--accent);

margin-bottom:15px;

}

.hero-left h1{

font-size:72px;

line-height:1.1;

margin-bottom:15px;

font-weight:800;

}

.hero-left h1 span{

background:linear-gradient(90deg,#3b82f6,#06b6d4,#8b5cf6);

-webkit-background-clip:text;

-webkit-text-fill-color:transparent;

}

.hero-left h2{

font-size:34px;

margin-bottom:20px;

font-weight:600;

color:var(--text);

}

.typing{

color:var(--accent);

}

.hero-left p{

font-size:18px;

color:var(--text2);

line-height:1.8;

max-width:650px;

margin-bottom:40px;

}

/* ===========================
BUTTONS
=========================== */

.hero-buttons{

display:flex;

gap:20px;

flex-wrap:wrap;

}

.btn1,

.btn2{

padding:16px 36px;

border-radius:60px;

text-decoration:none;

font-weight:600;

transition:.35s;

display:inline-flex;

align-items:center;

justify-content:center;

}

.btn1{

background:linear-gradient(135deg,var(--primary),var(--secondary));

color:#fff;

box-shadow:0 15px 35px rgba(37,99,235,.35);

}

.btn1:hover{

transform:translateY(-6px);

box-shadow:0 25px 50px rgba(37,99,235,.45);

}

.btn2{

border:2px solid var(--primary);

color:var(--text);

background:transparent;

}

.btn2:hover{

background:var(--primary);

color:#fff;

transform:translateY(-6px);

}

/* ===========================
SOCIAL ICONS
=========================== */

.social-icons{

display:flex;

gap:18px;

margin-top:40px;

}

.social-icons a{

width:55px;

height:55px;

display:flex;

justify-content:center;

align-items:center;

border-radius:50%;

background:rgba(255,255,255,.06);

border:1px solid rgba(255,255,255,.08);

color:white;

font-size:22px;

transition:.35s;

backdrop-filter:blur(15px);

}

.social-icons a:hover{

background:linear-gradient(135deg,var(--primary),var(--secondary));

transform:translateY(-8px);

}

/* ===========================
RIGHT IMAGE
=========================== */

.hero-right{

width:40%;

display:flex;

justify-content:center;

align-items:center;

position:relative;

z-index:2;

}

.profile-card{

width:380px;

height:380px;

border-radius:50%;

background:rgba(255,255,255,.05);

border:1px solid rgba(255,255,255,.08);

backdrop-filter:blur(30px);

display:flex;

justify-content:center;

align-items:center;

overflow:hidden;

box-shadow:0 20px 60px rgba(0,0,0,.45);

position:relative;

animation:float 5s ease-in-out infinite;

}

.profile-card img{

width:100%;

height:100%;

object-fit:cover;

}

.circle{

position:absolute;

width:420px;

height:420px;

border-radius:50%;

border:2px dashed rgba(6,182,212,.4);

animation:rotate 18s linear infinite;

}

/* ===========================
BLOBS
=========================== */

.blob{

position:absolute;

border-radius:50%;

filter:blur(90px);

opacity:.45;

}

.blob1{

width:350px;

height:350px;

background:#2563eb;

top:-120px;

right:-100px;

}

.blob2{

width:260px;

height:260px;

background:#7c3aed;

left:-100px;

bottom:40px;

}

.blob3{

width:220px;

height:220px;

background:#06b6d4;

bottom:120px;

right:30%;

}

/* ===========================
ANIMATIONS
=========================== */

@keyframes float{

0%,100%{

transform:translateY(0);

}

50%{

transform:translateY(-20px);

}

}

@keyframes rotate{

100%{

transform:rotate(360deg);

}

}
