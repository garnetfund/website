'use client'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Scroll reveal
    function initRv() {
      const obs = new IntersectionObserver(
        (es) => { es.forEach(e => { if (e.isIntersecting) e.target.classList.add('vis') }) },
        { threshold: 0.08 }
      )
      document.querySelectorAll('.rv:not(.vis)').forEach(el => obs.observe(el))
    }
    initRv()

    // Analyst data
    const analysts: {n:string,r:string,s:string,y:string}[] = [
      {n:"Darya Tchavdarova",r:"Senior Analyst",s:"Consumer",y:"2028"},
      {n:"Ryan Conniff",r:"Analyst",s:"Consumer",y:"2028"},
      {n:"Will McCoy",r:"Analyst",s:"Consumer",y:"2029"},
      {n:"William Seigler",r:"Senior Analyst",s:"Industrials",y:"2028"},
      {n:"Ryan Ayers",r:"Analyst",s:"Industrials",y:"2027"},
      {n:"Jonnie Williams",r:"Analyst",s:"Industrials",y:"2026"},
      {n:"Sean Conroy",r:"Analyst",s:"Industrials",y:"2028"},
      {n:"John Krokondelas",r:"Analyst",s:"Industrials",y:"2029"},
      {n:"Nick Holjak",r:"Senior Analyst",s:"TMT",y:"2027"},
      {n:"Cooper Johnston",r:"Analyst",s:"TMT",y:"2027"},
      {n:"Sahil Agarwal",r:"Analyst",s:"TMT",y:"2028"},
      {n:"Thomas Patterson",r:"Analyst",s:"TMT",y:"2028"},
      {n:"Valentin di Stefano",r:"Senior Analyst",s:"Financial",y:"2028"},
      {n:"Sven Nielsen",r:"Analyst",s:"Financial",y:"2028"},
      {n:"John Gardner",r:"Analyst",s:"Financial",y:"2029"},
      {n:"Arnav Goel",r:"Analyst",s:"Financial",y:"2028"},
      {n:"Jacob Kaliberda",r:"Senior Analyst",s:"Healthcare",y:"2027"},
      {n:"Ethan Brodman",r:"Analyst",s:"Healthcare",y:"2028"},
      {n:"Julia Judkins",r:"Analyst",s:"Healthcare",y:"2028"},
      {n:"Michael Luca",r:"Analyst",s:"Healthcare",y:"2028"},
      {n:"Frederic Smith",r:"Analyst",s:"Healthcare",y:"2029"},
      {n:"Allison Eschenbach",r:"Senior Analyst",s:"Energy",y:"2026"},
      {n:"Liam Gayduk",r:"Analyst",s:"Energy",y:"2026"},
      {n:"Jackson Davis",r:"Analyst",s:"Energy",y:"2028"},
      {n:"Jack Kwait",r:"Analyst",s:"Energy",y:"2029"},
      {n:"Camden Smith",r:"Senior Analyst",s:"Credit",y:"2026"},
      {n:"Dalton Kahl",r:"Analyst",s:"Credit",y:"2027"},
      {n:"Luke Ribar",r:"Analyst",s:"Credit",y:"2027"},
      {n:"Thibault Hangyas",r:"Analyst",s:"Credit",y:"2028"},
      {n:"Nicolas Gauvin",r:"Senior Analyst",s:"Currencies",y:"2027"},
      {n:"Josh Shannon",r:"Analyst",s:"Currencies",y:"2027"},
      {n:"Beau Porter",r:"Analyst",s:"Currencies",y:"2027"},
  {n:"Anthony Watson",r:"Senior Analyst",s:"Derivatives",y:"2027"},
      {n:"Sophia McCoy",r:"Analyst",s:"Derivatives",y:"2028"},
    ]

    function slugify(name: string) { return name.toLowerCase().replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'') }
    function initials(name: string) { return name.split(' ').map((n:string)=>n[0]).slice(0,2).join('') }

    function renderA(sec: string) {
      const g = document.getElementById('agrid')
      if (!g) return
      const f = analysts.filter(a => sec === 'all' ? true : a.s === sec)
      g.innerHTML = f.map(a => {
        const slug = slugify(a.n)
        const ini = initials(a.n)
        return `<div class="ac">
          <img class="ac-photo" src="https://www.garnetfund.org/headshots/${slug}.jpg" alt="${a.n}"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
          <div class="ac-ph" style="display:none">${ini}</div>
          <div class="an">${a.n}</div>
          <div class="as">${a.s} · ${a.y}</div>
          ${a.r==='Senior Analyst'?'<span class="ab">Sr. Analyst</span>':''}
        </div>`
      }).join('')
    }
    renderA('all')

    const stabs = document.getElementById('stabs')
    if (stabs) {
      stabs.addEventListener('click', (e) => {
        const t = (e.target as HTMLElement).closest('.stab') as HTMLElement
        if (!t) return
        document.querySelectorAll('.stab').forEach(x => x.classList.remove('active'))
        t.classList.add('active')
        renderA(t.dataset.s || 'all')
      })
    }

    function go(id: string) {
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'))
      const page = document.getElementById('pg-'+id)
      if (page) page.classList.add('active')
      document.querySelectorAll('.nv button').forEach(b => b.classList.remove('active'))
      const b = document.getElementById('nb-'+id)
      if (b) b.classList.add('active')
      window.scrollTo({top:0,behavior:'smooth'})
      setTimeout(initRv, 100)
    }

    // Expose go() globally so onclick attributes work
    ;(window as any).go = go

    const nbHome = document.getElementById('nb-home')
    if (nbHome) nbHome.classList.add('active')

  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&family=Roboto+Mono:wght@300;400;500&display=swap');
        :root{--g:#73000a;--gd:#4a0006;--gm:#f5e8ea;--cr:#ffffff;--ink:#0e0d0c;--i60:rgba(14,13,12,0.6);--i30:rgba(14,13,12,0.3);--wh:#f5f5f5;--rl:rgba(14,13,12,0.12);--fd:'Roboto',sans-serif;--fs:'Roboto',sans-serif;--fp:'Roboto',sans-serif;--fm:'Roboto Mono',monospace}
        *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
        p{padding-bottom:0.15em;font-family:var(--fp)}
        html{scroll-behavior:smooth}
        body{background:#fff;color:var(--ink);font-family:var(--fp);font-size:15px;line-height:1.6;overflow-x:hidden;-webkit-font-smoothing:antialiased}
        nav{position:fixed;top:0;left:0;right:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:0 48px;height:64px;background:rgba(250,248,244,0.95);backdrop-filter:blur(12px);border-bottom:1px solid var(--rl)}
        .nl{display:flex;align-items:center;gap:10px;cursor:pointer;text-decoration:none}
        .nl img{height:34px;width:auto}
        .nl-g{width:32px;height:32px;background:var(--g);display:flex;align-items:center;justify-content:center;font-family:var(--fp);font-size:18px;font-weight:600;color:#fff}
        .nl-t{font-family:var(--fp);font-size:13px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--ink)}
        .nv{display:flex;align-items:center;gap:4px;list-style:none}
        .nv button{font-family:var(--fs);font-size:12px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:var(--i60);background:none;border:none;cursor:pointer;padding:8px 14px;transition:color .2s;border-bottom:2px solid transparent}
        .nv button:hover{color:var(--g)}
        .nv button.active{color:var(--g);border-bottom-color:var(--g)}
        .nv .ncta{background:var(--g)!important;color:#fff!important;border-bottom:none!important}
        .nv .ncta:hover{background:var(--gd)!important}
        .page{display:none;padding-top:64px;min-height:100vh}
        .page.active{display:block}
        .sl{font-family:var(--fp);font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--g);margin-bottom:16px;display:flex;align-items:center;gap:10px}
        .sl::before{content:'';display:block;width:24px;height:1px;background:var(--g)}
        .st{font-family:var(--fp);font-size:clamp(28px,3.5vw,44px);font-weight:300;line-height:1.15;letter-spacing:-.3px;margin-bottom:24px}
        .st em{color:var(--g)}
        .btnp{background:var(--g);color:#fff;font-family:var(--fs);font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:14px 32px;text-decoration:none;transition:background .2s;display:inline-block;border:none;cursor:pointer}
        .btnp:hover{background:var(--gd)}
        .btng{color:var(--ink);font-family:var(--fs);font-size:12px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;text-decoration:none;border-bottom:1px solid var(--i30);padding-bottom:2px;transition:color .2s;cursor:pointer;background:none;border-top:none;border-left:none;border-right:none}
        .btng:hover{color:var(--g);border-bottom-color:var(--g)}
        .hero-full{padding:120px 80px 100px;background:url(/moore-school.jpg) center 40%/cover no-repeat;position:relative;display:flex;flex-direction:column;justify-content:center;min-height:calc(100vh - 64px)}
        .hero-full::before{content:'';position:absolute;inset:0;background:rgba(20,8,8,0.48);pointer-events:none}
        .hew{font-family:var(--fm);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:rgba(255,255,255,.7);margin-bottom:28px;display:flex;align-items:center;gap:12px;position:relative;z-index:1}
        .hew::before{content:'';display:block;width:32px;height:1px;background:rgba(255,255,255,.5)}
        .ht{font-family:var(--fp);font-size:clamp(48px,5.5vw,80px);font-weight:500;line-height:1.05;letter-spacing:-.5px;color:#fff;margin-bottom:32px;position:relative;z-index:1}
        .hs{font-family:var(--fp);font-size:15px;color:rgba(255,255,255,.75);line-height:1.85;max-width:480px;margin-bottom:48px;position:relative;z-index:1}
        .ha{display:flex;align-items:center;gap:20px;position:relative;z-index:1}
        .tk{background:var(--ink);color:rgba(255,255,255,.5);font-family:var(--fm);font-size:11px;letter-spacing:.1em;padding:10px 0;overflow:hidden;white-space:nowrap}
        .tki{display:inline-block;animation:tk 30s linear infinite}
        .tki span{margin:0 48px}
        .tki .up{color:#4ade80}
        .tki .dn{color:#f87171}
        @keyframes tk{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .appsec{background:var(--cr);padding:48px}
        .appbody{font-family:var(--fp);font-size:14px;color:var(--i60);line-height:1.9;margin-bottom:40px}
        .jsteps{display:grid;grid-template-columns:repeat(3,1fr);gap:2px}
        .jst{padding:28px 32px;border:1px solid var(--rl);background:var(--wh);display:flex;flex-direction:column;gap:16px}
        .jsn{font-family:var(--fp);font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:var(--g)}
        .jst h4{font-family:var(--fp);font-size:18px;font-weight:600;color:var(--ink);margin-bottom:8px}
        .jst p{font-family:var(--fp);font-size:13px;color:var(--i60);line-height:1.85}
        .alm{padding:48px;background:var(--cr)}
        .fgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;margin-bottom:64px}
        .fc{padding:24px;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:opacity .2s;text-align:center}
        .fc:hover{border-color:var(--g)}
        .firm-logo-wrap{width:100%;height:160px;display:flex;align-items:center;justify-content:center;overflow:hidden}
        .firm-logo-wrap img{max-width:180px;max-height:100px;width:auto;height:auto;object-fit:contain}
        .pstats{display:grid;grid-template-columns:repeat(3,1fr);gap:2px}
        .ps{padding:40px 32px}
        .ps:nth-child(1){background:var(--g)}
        .ps:nth-child(2){background:var(--gd)}
        .ps:nth-child(3){background:var(--ink)}
        .psn{font-family:var(--fp);font-size:56px;font-weight:500;color:#fff;line-height:1;margin-bottom:8px}
        .psl{font-family:var(--fm);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.5)}
        .tmp{padding:48px;background:var(--cr)}
        .tmph{display:grid;grid-template-columns:1fr 1fr;gap:64px;margin-bottom:64px;align-items:end}
        .tmi{font-family:var(--fp);font-size:14px;color:var(--i60);line-height:1.9}
        .lgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;margin-bottom:48px}
        .mc{background:var(--wh);border:1px solid var(--rl);padding:32px 28px;transition:border-color .2s}
        .mc:hover{border-color:var(--g)}
        .mphoto{width:80px;height:80px;border-radius:50%;object-fit:cover;object-position:center top;margin-bottom:20px;display:block}
        .mph-ph{width:80px;height:80px;border-radius:50%;background:var(--gm);display:flex;align-items:center;justify-content:center;font-family:var(--fp);font-size:28px;font-weight:500;color:var(--g);margin-bottom:20px}
        .mn{font-family:var(--fs);font-size:15px;font-weight:600;color:var(--ink);margin-bottom:6px}
        .mr{font-family:var(--fm);font-size:10px;color:var(--g);letter-spacing:.1em;text-transform:uppercase;margin-bottom:4px}
        .my{font-family:var(--fm);font-size:10px;color:var(--i30)}
        .ash{margin-top:48px}
        .ahd{display:flex;align-items:center;justify-content:space-between;margin-bottom:32px;padding-bottom:16px;border-bottom:1px solid var(--rl);flex-wrap:wrap;gap:12px}
        .at{font-family:var(--fs);font-size:12px;font-weight:600;letter-spacing:.12em;text-transform:uppercase}
        .stabs{display:flex;gap:8px;flex-wrap:wrap}
        .stab{font-family:var(--fm);font-size:10px;letter-spacing:.08em;padding:5px 12px;border:1px solid var(--rl);color:var(--i60);cursor:pointer;transition:all .15s;background:transparent}
        .stab:hover,.stab.active{background:var(--g);border-color:var(--g);color:#fff}
        .agrid{display:grid;grid-template-columns:repeat(5,1fr);gap:2px}
        .ac{background:var(--wh);border:1px solid var(--rl);padding:24px 20px;transition:border-color .2s}
        .ac:hover{border-color:var(--g)}
        .ac-photo{width:72px;height:72px;border-radius:50%;object-fit:cover;object-position:center top;margin-bottom:16px;display:block}
        .ac-ph{width:72px;height:72px;border-radius:50%;background:var(--gm);display:flex;align-items:center;justify-content:center;font-family:var(--fp);font-size:22px;font-weight:500;color:var(--g);margin-bottom:16px}
        .an{font-family:var(--fs);font-size:13px;font-weight:600;color:var(--ink);margin-bottom:4px}
        .as{font-family:var(--fm);font-size:10px;color:var(--i30);letter-spacing:.06em}
        .ab{display:inline-block;font-family:var(--fm);font-size:9px;letter-spacing:.08em;text-transform:uppercase;padding:2px 8px;background:var(--gm);color:var(--g);margin-top:8px;border:1px solid rgba(115,0,10,.2)}
        .jp{padding:48px;background:var(--cr)}
        .jhero{display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;margin-bottom:80px}
        .jb{font-family:var(--fp);font-size:14px;color:var(--i60);line-height:1.9;margin-bottom:32px}
        .jcta{background:var(--g);color:#fff;font-family:var(--fs);font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:14px 36px;text-decoration:none;display:inline-block}
        .jcta:hover{background:var(--gd)}
        .jgain{display:flex;flex-direction:column;gap:2px}
        .jg{padding:24px 28px;border:1px solid var(--rl);background:var(--wh);display:grid;grid-template-columns:32px 1fr;gap:16px;align-items:start}
        .jgn{font-family:var(--fp);font-size:28px;font-weight:400;color:var(--g);line-height:1}
        .jg h4{font-family:var(--fs);font-size:13px;font-weight:600;letter-spacing:.04em;text-transform:uppercase;color:var(--ink);margin-bottom:6px}
        .jg p{font-size:12px;color:var(--i60);line-height:1.6}
        .aptitle{font-family:var(--fs);font-size:12px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;margin-bottom:32px;padding-bottom:16px;border-bottom:1px solid var(--rl)}
        .apsteps{display:grid;grid-template-columns:repeat(3,1fr);gap:2px;margin-bottom:64px}
        .aps{padding:40px 36px;position:relative;background:var(--wh);border:1px solid var(--rl)}
        .aps:nth-child(1){background:var(--g)}
        .aps:nth-child(2){background:var(--gd)}
        .aps:nth-child(3){background:var(--ink)}
        .apsr{font-family:var(--fm);font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.4);margin-bottom:16px}
        .apst{font-family:var(--fp);font-size:28px;font-weight:500;color:#fff;line-height:1.2;margin-bottom:12px}
        .apsd{font-family:var(--fp);font-size:13px;color:rgba(255,255,255,.6);line-height:1.85}
        .apsn{position:absolute;right:28px;bottom:16px;font-family:var(--fp);font-size:96px;font-weight:600;color:rgba(255,255,255,.05);line-height:1.2;pointer-events:none}
        .dp{padding:48px;background:var(--cr)}
        .dl{display:grid;grid-template-columns:1fr 1fr;gap:80px;margin-top:64px;align-items:start}
        .db{font-family:var(--fp);font-size:14px;color:var(--i60);line-height:1.9;margin-bottom:32px}
        .dm{background:var(--gm);border-left:3px solid var(--g);padding:24px 28px;margin-bottom:32px}
        .dm strong{font-family:var(--fp);font-size:18px;font-weight:500;display:block;margin-bottom:8px;color:var(--g)}
        .dm p{font-family:var(--fp);font-size:13px;color:var(--ink);line-height:1.85}
        .dbtn{background:var(--g);color:#fff;font-family:var(--fs);font-size:12px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;padding:14px 36px;text-decoration:none;display:inline-block}
        .dbtn:hover{background:var(--gd)}
        .tcards{display:flex;flex-direction:column;gap:0}
        .tcard{background:var(--wh);padding:36px;display:grid;grid-template-columns:100px 1fr;gap:28px;align-items:start;border:1px solid var(--rl);border-bottom:none;flex:1}
        .tcard:last-child{border-bottom:1px solid var(--rl)}
        .tcf{font-family:var(--fm);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#fff;background:var(--g);padding:8px 0;width:100px;text-align:center;display:block;margin-top:2px}
        .tcb h4{font-family:var(--fp);font-size:14px;font-weight:600;color:var(--ink);margin-bottom:10px}
        .tcb p{font-family:var(--fp);font-size:13px;color:var(--i60);line-height:1.9}
        .site-footer{background:var(--gd);padding:60px 80px;display:grid;grid-template-columns:1fr 1fr 1fr;gap:48px;align-items:start}
        .flg{display:flex;align-items:center;gap:12px;margin-bottom:16px}
        .flgm{width:36px;height:36px;background:rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;font-family:var(--fp);font-size:20px;font-weight:600;color:#fff}
        .flgt{font-family:var(--fs);font-size:13px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.7)}
        .fsub{font-family:var(--fm);font-size:10px;color:rgba(255,255,255,.3);letter-spacing:.1em;line-height:1.8}
        .fc5 h5{font-family:var(--fm);font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.3);margin-bottom:20px}
        .fc5 ul{list-style:none;display:flex;flex-direction:column;gap:12px}
        .fc5 ul a,.fc5 ul button{font-family:var(--fs);font-size:13px;color:rgba(255,255,255,.6);text-decoration:none;background:none;border:none;cursor:pointer;padding:0;transition:color .2s;text-align:left}
        .fc5 ul a:hover,.fc5 ul button:hover{color:#fff}
        .fb{background:var(--gd);border-top:1px solid rgba(255,255,255,.08);padding:20px 80px;display:flex;align-items:center;justify-content:space-between}
        .fb p{font-family:var(--fm);font-size:10px;color:rgba(255,255,255,.2);letter-spacing:.08em}
        @keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}
        .hew{animation:fadeUp .7s ease both .1s}
        .ht{animation:fadeUp .7s ease both .2s}
        .hs{animation:fadeUp .7s ease both .3s}
        .ha{animation:fadeUp .7s ease both .4s}
        .rv{opacity:0;transform:translateY(20px);transition:opacity .6s ease,transform .6s ease}
        .rv.vis{opacity:1;transform:translateY(0)}
        @media(max-width:900px){
          nav{padding:0 16px}
          .nv button{padding:6px 6px;font-size:10px}
          .tmph,.jhero,.dl,.apsteps,.pstats{grid-template-columns:1fr;gap:40px}
          .hero-full{padding:80px 24px}
          .appsec,.alm,.tmp,.jp,.dp{padding:48px 24px}
          .site-footer{grid-template-columns:1fr;padding:48px 24px}
          .fb{padding:20px 24px;flex-direction:column;gap:8px}
          .lgrid{grid-template-columns:repeat(2,1fr)}
          .agrid{grid-template-columns:repeat(2,1fr)}
          .fgrid{grid-template-columns:repeat(2,1fr)}
          .jsteps{grid-template-columns:1fr}
        }
      `}</style>

      <nav>
        <a className="nl" onClick={() => (window as any).go('home')} style={{cursor:'pointer'}}>
          <img src="/garnet-logo.png" alt="Garnet Fund" style={{height:'36px',width:'36px',objectFit:'contain',borderRadius:'2px'}} />
          <span className="nl-t">Garnet Fund</span>
        </a>
        <ul className="nv">
          <li><button id="nb-home" onClick={() => (window as any).go('home')}>Home</button></li>
          <li><button id="nb-team" onClick={() => (window as any).go('team')}>Team</button></li>
          <li><button id="nb-join" onClick={() => (window as any).go('join')}>Join</button></li>
          <li><button id="nb-donate" onClick={() => (window as any).go('donate')} className="ncta">Donate</button></li>
        </ul>
      </nav>

      {/* HOME */}
      <div id="pg-home" className="page active">
        <div className="hero-full">
          <div className="hew">University of South Carolina &nbsp;·&nbsp; Moore School of Business</div>
          <h1 className="ht">Garnet Fund</h1>
          <p className="hs">Garnet Fund is a student-run investment fund at the University of South Carolina.</p>
          <div className="ha">
            <button className="btnp" onClick={() => (window as any).go('join')}>Join the Fund</button>
          </div>
        </div>


        <div className="appsec" style={{borderBottom:'1px solid var(--rl)'}}>
          <div className="sl rv">Who We Are</div>
          <div style={{maxWidth:'760px'}}>
            <h2 className="st rv">The Garnet Fund</h2>
            <p className="appbody rv">Garnet Fund is a student-managed investment fund at the Darla Moore School of Business. Founded in 2026, over 35 undergraduate students manage a real equity and alternatives portfolio each fall. This year we are starting with $110,000 under management, with a five-year goal of reaching $1 million in AUM. Our purpose is simple: give USC students hands-on experience with the skills that matter in finance.</p>
            <p className="appbody rv">Members go through a structured curriculum covering financial modeling, stock valuation, and portfolio management, and compete in investment competitions throughout the year. As the fund grows, we plan to put a portion of returns back into the school through scholarships and educational resources, subject to approval from our advisory board and faculty advisors.</p>
          </div>
        </div>

        <div className="appsec">
          <div className="sl rv">Investment Philosophy</div>
          <h2 className="st rv">How We Invest</h2>
          <p className="appbody rv" style={{maxWidth:'680px',marginBottom:'48px'}}>Garnet Fund manages risk by diversifying across a long/short equity portfolio, taking long positions in companies we believe are undervalued and short positions in those we consider overvalued.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:'2px'}} className="rv">
            {[
              {label:'Investment Strategy',title:'Long / Short, Bottom-Up',body:'We follow a long/short, bottom-up investment strategy where students research individual companies and pitch them based on fundamental analysis and valuation.'},
              {label:'Investable Capital',title:'Capital Allocation',body:'Of our total allocated capital, ~75% is managed by the long/short equity team and the remaining ~25% is allocated to the alternatives team.'},
              {label:'Defense',title:'Investment Committee Review',body:'All investment pitches are submitted to the Investment Committee for evaluation. A majority vote from the committee is required before any position is entered.'},
              {label:'Due Diligence',title:'Position Sizing & Monitoring',body:'Portfolio managers work closely with sector teams to determine position sizing. Positions are continuously monitored to assess whether the original thesis remains valid.'},
            ].map((c,i) => (
              <div key={i} style={{background:'var(--wh)',border:'1px solid var(--rl)',padding:'36px 32px',display:'flex',flexDirection:'column'}}>
                <div style={{fontFamily:'var(--fp)',fontSize:'10px',letterSpacing:'.14em',textTransform:'uppercase',color:'var(--g)',marginBottom:'16px'}}>{c.label}</div>
                <h4 style={{fontFamily:'var(--fp)',fontSize:'18px',fontWeight:600,color:'var(--ink)',marginBottom:'10px'}}>{c.title}</h4>
                <p style={{fontFamily:'var(--fp)',fontSize:'13px',color:'var(--i60)',lineHeight:1.85,flex:1}}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="appsec">
          <div className="sl rv">Analyst Training</div>
          <h2 className="st rv" style={{marginBottom:'8px'}}>Six-Week Training Program</h2>
          <p style={{fontFamily:'var(--fp)',fontSize:'14px',color:'var(--i60)',lineHeight:1.8,maxWidth:'600px',marginBottom:'40px'}} className="rv">Every new analyst goes through a six-week training program before touching the live portfolio.</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'2px'}} className="rv">
            {[
              {week:'Week 1',title:'Introduction to the Fund & Value Investing',body:'Overview of the fund, meet your onboarding class, and an introduction to the principles of value investing.'},
              {week:'Week 2',title:'Accounting, Ratios & Multiples',body:'A deep dive into accounting fundamentals, key financial ratios, and valuation multiples.'},
              {week:'Week 3',title:'Financial Modeling',body:'Analysts build a full three-statement model from scratch, then work through DCF, comps, precedent transactions, and a reverse DCF.'},
              {week:'Week 4',title:'Initial Research & Idea Generation',body:'Learn how to source investment ideas, develop an initial thesis, and structure early-stage research on a company.'},
              {week:'Week 5',title:'Buyside Modeling: Levers & Drivers',body:'Go beyond accounting models to understand implied levers, value drivers, and how buyside investors frame an investment.'},
              {week:'Week 6',title:'Buyside Modeling: Data & Forecasting',body:'Learn how to use data to forecast business performance and pressure-test your model assumptions.'},
            ].map((w,i) => (
              <div key={i} style={{background:'var(--wh)',border:'1px solid var(--rl)',padding:'28px 24px',display:'flex',flexDirection:'column'}}>
                <div style={{fontFamily:'var(--fp)',fontSize:'10px',letterSpacing:'.12em',textTransform:'uppercase',color:'var(--g)',marginBottom:'12px'}}>{w.week}</div>
                <h4 style={{fontFamily:'var(--fp)',fontSize:'16px',fontWeight:600,color:'var(--ink)',marginBottom:'8px'}}>{w.title}</h4>
                <p style={{fontFamily:'var(--fp)',fontSize:'13px',color:'var(--i60)',lineHeight:1.85,flex:1}}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="appsec">
          <div className="sl rv">Member Benefits</div>
          <h2 className="st rv" style={{marginBottom:'32px'}}>What You&apos;ll Gain</h2>
          <div className="jsteps rv">
            <div className="jst"><div className="jsn">01</div><h4>Live Portfolio Management</h4><p>Members contribute directly to a live long/short equity portfolio. Your research drives actual investment decisions.</p></div>
            <div className="jst"><div className="jsn">02</div><h4>Continuous Learning</h4><p>The learning does not stop after the training program. Senior analysts work closely with newer members.</p></div>
            <div className="jst"><div className="jsn">03</div><h4>Career Placement</h4><p>Garnet Fund alumni have landed roles at Morgan Stanley, Bank of America, Evercore, Point72, and others.</p></div>
          </div>
        </div>

        <div className="appsec">
          <div className="sl rv">Alumni Placement</div>
          <div className="fgrid rv">
            {['logo-morganstanley.png','logo-bofa.png','logo-wellsfargo.png','logo-deutschebank.png','logo-evercore.png','logo-lazard.png','logo-jefferies.png','logo-pipersandler.png','logo-point72.png','logo-raymondjames.png','logo-truist.png'].map((logo,i) => (
              <div key={i} className="fc"><div className="firm-logo-wrap"><img src={`/${logo}`} alt={logo.replace('logo-','').replace('.png','')} /></div></div>
            ))}
          </div>
        </div>

      </div>

      {/* TEAM */}
      <div id="pg-team" className="page">
        <div className="tmp" style={{paddingTop:'40px'}}>
          <div className="tmph">
            <div><div className="sl rv">Leadership</div><h2 className="st rv">The Investment Team</h2></div>
            <p className="tmi rv">Our leadership team runs the day-to-day of the fund, covering strategy, portfolio management, risk, operations, and data.</p>
          </div>
          <div className="lgrid rv">
            {[
              {slug:'arav-patel',ini:'AP',name:'Arav Patel',role:'President',year:'2027'},
              {slug:'chase-mcshane',ini:'CM',name:'Chase McShane',role:'Equities Portfolio Manager',year:'2027'},
              {slug:'anthony-watson',ini:'AW',name:'Anthony Watson',role:'Alternatives PM & Sr. Analyst',year:'2027'},
              {slug:'cooper-johnston',ini:'CJ',name:'Cooper Johnston',role:'Risk Manager',year:'2027'},
              {slug:'sophia-mccoy',ini:'SM',name:'Sophia McCoy',role:'Head of Operations',year:'2028'},
              {slug:'anish-ghana',ini:'AG',name:'Anish Ghana',role:'Head of Data Governance',year:'2027'},
            ].map((m,i) => (
              <div key={i} className="mc">
                <img src={`https://www.garnetfund.org/headshots/${m.slug}.jpg`} className="mphoto" alt={m.name} onError={(e)=>{(e.target as HTMLElement).style.display='none';(e.target as HTMLElement).nextElementSibling && ((e.target as HTMLElement).nextElementSibling as HTMLElement).style && ((e.target as HTMLElement).nextElementSibling as HTMLElement).style.setProperty('display','flex')}} />
                <div className="mph-ph" style={{display:'none'}}>{m.ini}</div>
                <div className="mn">{m.name}</div><div className="mr">{m.role}</div><div className="my">Class of {m.year}</div>
              </div>
            ))}
          </div>
          <div className="ash">
            <div className="ahd rv">
              <span className="at">Investment Analysts</span>
              <div className="stabs" id="stabs">
                {['all','Consumer','Industrials','TMT','Financial','Healthcare','Energy','Credit','Currencies','Derivatives'].map(s => (
                  <button key={s} className={`stab${s==='all'?' active':''}`} data-s={s}>{s==='all'?'All':s}</button>
                ))}
              </div>
            </div>
            <div className="agrid" id="agrid"></div>
          </div>
        </div>
      </div>

      {/* JOIN */}
      <div id="pg-join" className="page">
        <div className="jp" style={{paddingTop:'40px'}}>
          <div style={{maxWidth:'640px',marginBottom:'48px'}}>
            <div className="sl rv">Recruitment</div>
            <h2 className="st rv">Join the Garnet Fund</h2>
            <p className="jb rv">Applications for Fall 2026 open soon.</p>
            <a href="mailto:garnetinvestmentfund@gmail.com" className="jcta rv">Apply Now</a>
          </div>
          <div className="aptitle rv">Application Process</div>
          <div className="apsteps">
            <div className="aps rv"><div className="apsr">Round I</div><div className="apst">Resume &amp; Essay Screening</div><div className="apsd">Candidates submit a resume and a short essay demonstrating analytical thinking and genuine interest in financial markets.</div><div className="apsn">1</div></div>
            <div className="aps rv"><div className="apsr">Round II</div><div className="apst">Behavioral Interview</div><div className="apsd">Shortlisted candidates interview with current fund members. Interviewers assess communication skills and intellectual curiosity.</div><div className="apsn">2</div></div>
            <div className="aps rv"><div className="apsr">Round III</div><div className="apst">Investment Case Study</div><div className="apsd">Finalists complete a take-home stock pitch and present it to the full investment team.</div><div className="apsn">3</div></div>
          </div>
        </div>
      </div>

      {/* DONATE */}
      <div id="pg-donate" className="page">
        <div className="dp" style={{paddingTop:'60px'}}>
          <div className="sl rv">For Investors &amp; Donors</div>
          <div className="dl">
            <div>
              <h2 className="st rv">Support the Garnet Fund</h2>
              <p className="db rv">Garnet Fund is entirely student-run and operates with real capital. Donor support is what makes that possible. Every dollar goes toward giving Moore School students a genuine investment experience.</p>
              <div className="dm rv"><strong>$1M AUM Milestone</strong><p>When the fund hits $1 million in AUM, we plan to put a portion of returns back into the school through scholarships and educational resources.</p></div>
              <a href="https://give4garnet.sc.edu/giving-day/104390/donate" target="_blank" className="dbtn">Donate via Give 4 Garnet →</a>
            </div>
            <div className="tcards rv">
              <div style={{marginBottom:'20px'}}><div className="sl" style={{marginBottom:'8px'}}>Investor Transparency</div><p style={{fontFamily:'var(--fp)',fontSize:'13px',color:'var(--i60)',lineHeight:1.85}}>All donors receive regular updates on fund performance and activity.</p></div>
              <div className="tcard"><div className="tcf">Monthly</div><div className="tcb"><h4>Investor Letter</h4><p>Covers portfolio performance, current holdings, and any notable changes to positioning.</p></div></div>
              <div className="tcard"><div className="tcf">Annual</div><div className="tcb"><h4>Year-End Report</h4><p>A full summary of the year covering fund performance, member outcomes, and placement results.</p></div></div>
              <div className="tcard"><div className="tcf">Semiannual</div><div className="tcb"><h4>Advisory Meeting</h4><p>Held twice a year with fund leadership, faculty advisors, and donors.</p></div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer">
        <div><div className="flg"><div className="flgm">G</div><span className="flgt">Garnet Fund</span></div><p className="fsub">University of South Carolina &nbsp;·&nbsp; Darla Moore School of Business<br/>Columbia, SC · Est. 2024</p></div>
        <div className="fc5"><h5>Navigate</h5><ul><li><button onClick={() => (window as any).go('team')}>The Team</button></li><li><button onClick={() => (window as any).go('join')}>Join the Fund</button></li><li><button onClick={() => (window as any).go('donate')}>Donate / Invest</button></li></ul></div>
        <div className="fc5"><h5>Contact</h5><p style={{fontFamily:'var(--fm)',fontSize:'11px',color:'rgba(255,255,255,.5)',marginBottom:'16px'}}>garnetinvestmentfund@gmail.com</p><ul><li><a href="https://www.linkedin.com/company/garnet-fund/" target="_blank">LinkedIn</a></li><li><a href="https://garnetgate.sa.sc.edu/organization/thefund" target="_blank">Garnet Gate</a></li><li><a href="https://give4garnet.sc.edu/giving-day/104390/donate" target="_blank">Give 4 Garnet</a></li></ul></div>
      </div>
      <div className="fb"><p>© 2026 Garnet Fund · University of South Carolina</p><p>Not affiliated with any registered investment adviser · Educational purposes only</p></div>
    </>
  )
}
