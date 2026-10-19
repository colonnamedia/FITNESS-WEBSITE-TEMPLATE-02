import HomepagePhotos from './HomepagePhotos.jsx';
import {useState} from 'react';
import {ArrowRight, Check, Clock3, Dumbbell, Flame, HeartPulse, MapPin, Menu} from 'lucide-react';

const programs=[
 {icon:<Dumbbell/>,title:'Strength',text:'Coach-guided full-body sessions with movements adapted to the person in front of us.'},
 {icon:<Flame/>,title:'Conditioning',text:'Intervals and athletic circuits that can be adapted to different fitness levels.'},
 {icon:<HeartPulse/>,title:'Hybrid',text:'A mix of strength and conditioning in one structured session.'}
];
const schedule=[
 ['Monday','6:00 AM','Hybrid'],['Tuesday','5:30 PM','Strength'],['Wednesday','6:00 AM','Conditioning'],
 ['Thursday','5:30 PM','Hybrid'],['Saturday','9:00 AM','Strength']
];
const memberships=[
 {name:'Starter',price:'$79',detail:'Four classes per month',features:['A simple weekly rhythm','Guided group sessions']},
 {name:'Routine',price:'$119',detail:'Eight classes per month',features:['Two visits most weeks','Access to all training formats']},
 {name:'Unlimited',price:'$149',detail:'Unlimited classes per month',features:['Flexible class selection','Access to all training formats']}
];
const nav=[['Programs','#training'],['Schedule','#schedule'],['Memberships','#memberships'],['Coaches','#coaches'],['First visit','#start']];

export default function NextApp(){
 const [menuOpen,setMenuOpen]=useState(false);
 const [submitted,setSubmitted]=useState(false);
 const [selectedPlan,setSelectedPlan]=useState('Trial week');
 function requestTrial(e){e.preventDefault();setSubmitted(true);}
 return <div className="app">
  <div className="demo-banner">FIREWORKS TEMPLATE DEMO · Sample schedule, people and pricing · No requests are sent or stored</div>
  <header className="topbar"><a className="logo" href="#top">KINETIC<span>HOUSE</span></a>
   <nav className={menuOpen?'open':''} aria-label="Main navigation">{nav.map(([label,href])=><a key={href} href={href} onClick={()=>setMenuOpen(false)}>{label}</a>)}</nav>
   <a className="pill" href="#start">Explore a trial <ArrowRight size={17}/></a>
   <button className="menu" type="button" aria-expanded={menuOpen} aria-label={menuOpen?'Close menu':'Open menu'} onClick={()=>setMenuOpen(!menuOpen)}><Menu/></button>
  </header>
  <main id="top">
   <section className="hero"><img className="heroImg" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1900&q=80" alt="Strength training studio" fetchPriority="high"/><div className="overlay"/><div className="heroCopy"><p className="kicker">A sample fitness studio · Pittsburgh, PA</p><h1>Train hard.<br/><span>Live stronger.</span></h1><p>Coach-led group training for people who want to get stronger, move better and feel more capable. Explore a clear path from your first visit to a routine that fits.</p><div className="actions"><a className="primary" href="#start">Plan your first visit <ArrowRight size={18}/></a><a className="ghost" href="#training">Explore programs</a></div><div className="rating">All levels welcome <span>•</span> Coach-led sessions <span>•</span> Demo content</div></div></section>
   <section className="numbers" aria-label="How the studio works"><div><b>01</b><span>Pick a program</span></div><div><b>02</b><span>Find a class time</span></div><div><b>03</b><span>Try a visit</span></div><div><b>04</b><span>Choose a plan</span></div></section>
   <section className="training" id="training"><div className="sectionHead"><p>Training programs · examples</p><h2>Find the format<br/>that fits.</h2><span>These sample programs can be configured for boxing, yoga, Pilates, martial arts or personal training. The class descriptions, rules and eligibility are replaced for each client.</span></div><div className="programGrid">{programs.map((p,i)=><article key={p.title}><div className="icon">{p.icon}</div><span>0{i+1}</span><h3>{p.title}</h3><p>{p.text}</p><a href="#schedule">See sample schedule <ArrowRight size={16}/></a></article>)}</div></section>
   <HomepagePhotos />
      <section className="split" id="coaches"><div className="photo"><img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1400&q=80" alt="Illustrative coach and participant training" loading="lazy"/></div><div className="copy"><p className="kicker dark">Meet the coaches</p><h2>Know who you will train with.</h2><p>This section is ready for real coach profiles, specialties, qualifications and photos. The image is illustrative stock photography; no staff identity or credential is implied.</p><ul><li><Check/> Coach profiles and verified credentials</li><li><Check/> Program-specific coaching approach</li><li><Check/> Real member stories with permission</li></ul><a className="text-link" href="#start">See first-visit steps <ArrowRight size={18}/></a></div></section>
   <section className="schedule" id="schedule"><div><p className="kicker dark">Example weekly schedule</p><h2>Find a time<br/>to begin.</h2><p>The times below are placeholders. A client can connect their existing booking provider so live availability and class registration stay accurate.</p></div><div className="scheduleList">{schedule.map(([day,time,format])=><div key={day}><b>{day}</b><span><Clock3 size={15}/>{time}</span><strong>{format}</strong></div>)}<p className="small-note">Sample schedule only · Confirm all classes and hours before client launch.</p></div></section>
   <section className="membership" id="memberships"><div className="membership-head"><p className="kicker dark">Membership options · sample pricing</p><h2>Make the next step clear.</h2><p>Illustrative plan structure. Replace prices, commitments, cancellation terms and benefits with each studio's approved details before publishing a client site.</p></div><div className="plan-grid">{memberships.map(plan=><article key={plan.name}><h3>{plan.name}</h3><p className="plan-price">{plan.price}<span>/month · sample</span></p><p>{plan.detail}</p><ul>{plan.features.map(f=><li key={f}><Check size={17}/>{f}</li>)}</ul><a href="#start" onClick={()=>setSelectedPlan(plan.name)}>Ask about {plan.name} <ArrowRight size={16}/></a></article>)}</div></section>
   <section className="cta" id="start"><div><p className="kicker">First visit · demo workflow</p><h2>Come see how<br/>strong can feel.</h2><p>Choose a training interest and a good time to talk. In a real client site, this step connects to the studio's confirmed booking or membership platform.</p><ol className="visit-steps"><li>Pick a class format and review the live schedule.</li><li>Complete the studio's actual waiver or booking flow.</li><li>Arrive early for an introduction and coaching guidance.</li></ol></div><form className="offer" onSubmit={requestTrial}><span>TRIAL INTEREST · NO SUBMISSION</span><h3>Plan a first visit</h3><label htmlFor="trial-name">Name</label><input id="trial-name" name="name" required autoComplete="name"/><label htmlFor="trial-email">Email</label><input id="trial-email" name="email" type="email" required autoComplete="email"/><label htmlFor="trial-interest">I'm interested in</label><select id="trial-interest" name="interest" value={selectedPlan} onChange={e=>setSelectedPlan(e.target.value)}><option>Trial week</option>{memberships.map(p=><option key={p.name}>{p.name}</option>)}</select><button className="primary light" type="submit">Preview trial request <ArrowRight size={18}/></button><small>This demo validates locally. It does not transmit, save, book or charge anything.</small>{submitted&&<p className="form-result" role="status">Demo complete. Nothing was sent or stored. A real booking provider is selected and tested for each client.</p>}</form></section>
  </main>
  <footer><a className="logo" href="#top">KINETIC<span>HOUSE</span></a><div><MapPin size={16}/> Pittsburgh-area sample · replace with verified location</div><span>© 2026 Kinetic House demo. All schedules, prices and images are illustrative.</span></footer>
 </div>
}
