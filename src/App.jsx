import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route, Link, useLocation} from "react-router-dom";
import {ArrowRight, Check, ChevronDown, CreditCard, Landmark, Menu, ShieldCheck, Sparkles, X} from "lucide-react";
import "./styles.css";

const articles = [
  {slug:"how-to-compare-credit-cards", title:"How to compare a credit card before applying", category:"Credit Cards", excerpt:"The key fees, benefits and terms to review before choosing a card."},
  {slug:"what-to-check-before-a-loan", title:"What to check before taking a personal loan", category:"Loans", excerpt:"A practical checklist for comparing repayment terms and total borrowing costs."},
  {slug:"understanding-credit-decisions", title:"How lenders evaluate a credit application", category:"Financial Guides", excerpt:"Understand the factors that can influence a lender's decision."},
  {slug:"building-a-healthier-credit-profile", title:"Simple habits for a healthier credit profile", category:"Financial Guides", excerpt:"Everyday habits that can help you keep your finances organized."},
  {slug:"credit-card-fees-explained", title:"Credit card fees explained", category:"Credit Cards", excerpt:"Annual fees, balance transfers, foreign transaction fees and more."},
  {slug:"emergency-financing-guide", title:"What to consider before emergency financing", category:"Loans", excerpt:"Questions to answer before borrowing when an unexpected expense appears."},
  {slug:"chase-credit-cards-guide", title:"Chase credit cards: what to compare before applying", category:"Credit Cards", excerpt:"A practical overview of Chase card categories, rewards, fees and application considerations."},
  {slug:"capital-one-credit-cards-guide", title:"Capital One credit cards: a guide to comparing options", category:"Credit Cards", excerpt:"Understand common Capital One card categories and the details worth checking before applying."},
  {slug:"bank-of-america-credit-cards-guide", title:"Bank of America credit cards: what to know", category:"Credit Cards", excerpt:"Compare common Bank of America card features, rewards structures and costs."},
  {slug:"citi-credit-cards-guide", title:"Citi credit cards: comparing rewards and everyday cards", category:"Credit Cards", excerpt:"A guide to the main factors to compare across Citi consumer credit card options."},
  {slug:"discover-credit-cards-guide", title:"Discover credit cards: understanding cash-back options", category:"Credit Cards", excerpt:"What to look at when comparing Discover cards, rewards and fees."},
  {slug:"american-express-credit-cards-guide", title:"American Express cards: rewards, fees and benefits", category:"Credit Cards", excerpt:"Understand the main considerations when comparing American Express consumer cards."},
  {slug:"wells-fargo-credit-cards-guide", title:"Wells Fargo credit cards: a practical comparison guide", category:"Credit Cards", excerpt:"Review common rewards, fees and eligibility considerations for Wells Fargo cards."},
  {slug:"cash-back-credit-cards-guide", title:"Cash-back credit cards: how to compare them", category:"Credit Cards", excerpt:"Learn the difference between flat-rate and category-based cash-back structures."},
  {slug:"travel-credit-cards-guide", title:"Travel credit cards: points, miles and annual fees", category:"Credit Cards", excerpt:"The key questions to ask before choosing a travel rewards card."},
  {slug:"secured-credit-cards-guide", title:"Secured credit cards: what beginners should know", category:"Credit Cards", excerpt:"How secured cards work and what to compare when building or rebuilding credit."}
];

const faqs=[
 ["Is Finora a bank?","No. Finora is an independent financial information site. We do not approve loans or issue credit cards."],
 ["Does it cost anything to use the site?","The educational content is free. When an offer links to a provider, the application is handled by that provider."],
 ["How does Finora make money?","Finora is supported by advertising and, for some offers, referral or affiliate compensation. This helps us keep informational content available to readers at no charge."],
 ["Can I apply for a financial product on Finora?","No. When an article links to a provider, you are taken to the provider's official website, where its own terms and approval criteria apply."]
];

function AdSlot({label="ADVERTISEMENT"}){return <div className="ad-slot"><span>{label}</span></div>}

function ScrollToTop(){
  const {pathname} = useLocation();
  useEffect(()=>{ window.scrollTo({top:0,left:0,behavior:"auto"}); },[pathname]);
  return null;
}

function Header(){
 const [open,setOpen]=useState(false);
 return <header className="header">
   <Link className="logo" to="/"><span>F</span>FINORA</Link>
   <nav className={open?"nav open":"nav"}>
    <Link to="/credit-cards" onClick={()=>setOpen(false)}>Credit Cards</Link>
    <Link to="/loans" onClick={()=>setOpen(false)}>Loans</Link>
    <Link to="/financial-guides" onClick={()=>setOpen(false)}>Financial Guides</Link>
    <Link to="/news" onClick={()=>setOpen(false)}>News</Link>
    <Link to="/about" onClick={()=>setOpen(false)}>About</Link>
   </nav>
   <Link className="header-cta" to="/credit-cards">Explore options <ArrowRight size={16}/></Link>
   <button className="menu-btn" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </header>
}

function Footer(){
 return <footer className="footer"><div className="footer-main">
  <div><Link className="logo light" to="/"><span>F</span>FINORA</Link><p>Independent financial information for clearer everyday decisions.</p></div>
  <div className="footer-links"><Link to="/credit-cards">Credit Cards</Link><Link to="/loans">Loans</Link><Link to="/financial-guides">Guides</Link><Link to="/news">News</Link><Link to="/about">About</Link></div>
 </div><div className="footer-disclosure"><b>Advertising & advertiser disclosure</b><p>Finora is an independent, advertising-supported editorial site. We may receive advertising revenue and, for some products or services, compensation from referral or affiliate partners. This compensation may affect how and where some offers appear. Not every financial product available in the market is included on this website.</p><p>We do not charge readers to access our editorial content. Product availability, terms, fees and approval are determined by the provider. Always review the provider's official terms before applying.</p></div>
 <div className="footer-bottom"><span>© 2026 Finora. Information only; not a bank or lender.</span><span>Privacy · Terms · Advertiser Disclosure</span></div>
 </footer>
}

function Home(){
 return <>
  <section className="home-hero-aggressive">
    <div className="home-hero-aggressive-copy">
      <div className="eyebrow"><span/> FINANCIAL OPPORTUNITIES</div>
      <div className="urgency-pill"><span/> BEFORE YOU APPLY — CHECK THIS FIRST</div>
      <h1>Discover Better <em>Loan Opportunities.</em></h1>
      <p>You could be missing better rates. Explore competitive loan opportunities, compare available terms and find financing options that may fit your needs — all in one place.</p>
      <div className="home-hero-actions">
        <Link className="primary-btn" to="/loans">Check My Options <ArrowRight size={18}/></Link>
        <Link className="text-btn" to="/loans">Explore loan options</Link>
      </div>
      <div className="trust-row hero-trust-row">
        <span><Check size={17}/> Competitive rates</span>
        <span><Check size={17}/> Compare options</span>
        <span><Check size={17}/> Free to explore</span>
      </div>
    </div>

    <div className="home-hero-opportunity">
      <div className="opportunity-glow"/>
      <div className="opportunity-card">
        <div className="opportunity-top"><span>YOUR LOAN OPTIONS</span><Sparkles size={17}/></div>
        <div className="opportunity-title">Explore what may be available.</div>
        <div className="opportunity-rate">
          <small>COMPARE</small>
          <strong>Rates &amp; terms</strong>
          <span>Before you apply</span>
        </div>
        <div className="opportunity-bars">
          <div><span style={{width:"84%"}}/></div>
          <div><span style={{width:"68%"}}/></div>
          <div><span style={{width:"92%"}}/></div>
        </div>
        <Link to="/loans" className="opportunity-button">See Loan Options <ArrowRight size={16}/></Link>
      </div>
      <div className="floating-chip chip-one">Competitive rates</div>
      <div className="floating-chip chip-two">Multiple options</div>
    </div>
  </section>
  <AdSlot/>
  <HowItWorks/>
  <AdSlot/>
  <ArticleGrid title="Start exploring"/>
 </>
}
function HowItWorks(){return <section className="how section"><div className="how-visual"><div className="visual-grid"/><div className="visual-glow glow-one"/><div className="visual-glow glow-two"/><div className="visual-center"><span>FINORA</span><b>Make a clearer<br/>financial choice.</b><i/></div><div className="floating-stat"><span>01</span><b>Compare</b><small>options side by side</small></div><div className="floating-stat second"><span>02</span><b>Understand</b><small>costs and terms</small></div><div className="floating-stat third"><span>03</span><b>Choose</b><small>with more clarity</small></div></div><div className="how-copy"><div className="eyebrow">HOW IT WORKS</div><h2>A simpler way to navigate <em>financial products.</em></h2><p>Start with a topic, review the information that matters and follow the provider's official website when you are ready to explore an offer.</p>{[["01","Choose a topic","Start with credit cards, loans or a financial guide."],["02","Compare details","Review costs, benefits, eligibility and practical considerations."],["03","Visit the provider","Applications and approvals happen on the provider's own website."]].map(x=><div className="step" key={x[0]}><span>{x[0]}</span><div><h3>{x[1]}</h3><p>{x[2]}</p></div></div>)}</div></section>}

function ArticleGrid({title="Articles", limit}){
 const list=limit?articles.slice(0,limit):articles;
 return <section className="section guides"><div className="section-heading"><div><div className="eyebrow">READ & LEARN</div><h2>{title} <em>that answer real questions.</em></h2></div><p>Original editorial-style financial information organized by topic.</p></div><div className="guide-grid">{list.map((a,i)=><Link className="guide-card" to={"/article/"+a.slug} key={a.slug}><div className="guide-number">0{i+1}</div><small>{a.category}</small><h3>{a.title}</h3><p>{a.excerpt}</p><span>Read article <ArrowRight size={16}/></span></Link>)}</div></section>
}


function BankCard({name, network, accent, description, href, styleType="dark", cardLabel, image}) {
  const initials = name === "Bank of America" ? "BofA" : name === "American Express" ? "AMEX" : name.split(" ").map(x=>x[0]).join("").slice(0,3);
  return <article className="bank-card">
    <div className={"bank-card-visual " + styleType}>
      <img className="bank-card-image" src={image} alt={`${name} credit card`} />
      <span className="card-badge">{accent}</span>
    </div>
    <div className="bank-card-body">
      <div className="bank-card-kicker">{network}</div>
      <h3>{name}</h3>
      <p>{description}</p>
      <Link className="bank-card-link" to={href}>Explore cards <ArrowRight size={16}/></Link>
    </div>
  </article>
}
function CreditCardsPage(){
  const issuers = [
    {name:"Chase",network:"Visa",accent:"Travel & rewards",styleType:"chase",cardLabel:"SAPPHIRE",image:"/images/cards/chase-card.png",description:"A major U.S. issuer with a broad selection of rewards, travel and everyday credit cards.",href:"/article/chase-credit-cards-guide"},
    {name:"American Express",network:"Amex",accent:"Premium rewards",styleType:"amex",cardLabel:"AMERICAN EXPRESS",image:"/images/cards/american-express-card.png",description:"Known for Membership Rewards, travel benefits and a wide range of premium and everyday cards.",href:"/article/american-express-credit-cards-guide"},
    {name:"Capital One",network:"Mastercard",accent:"Cash back & travel",styleType:"capital",cardLabel:"CAPITAL ONE",image:"/images/cards/capital-one-card.png",description:"Offers cash-back, travel and everyday cards designed for different spending patterns and goals.",href:"/article/capital-one-credit-cards-guide"},
    {name:"Bank of America",network:"Visa",accent:"Rewards & banking",styleType:"boa",cardLabel:"BANK OF AMERICA",image:"/images/cards/bank-of-america-card.png",description:"Consumer cards spanning cash back, travel and rewards, with options connected to its banking ecosystem.",href:"/article/bank-of-america-credit-cards-guide"},
    {name:"Citi",network:"Mastercard",accent:"Cash back & rewards",styleType:"citi",cardLabel:"CITI",image:"/images/cards/citi-card.png",description:"A major issuer with cards focused on cash back, everyday rewards and travel-oriented benefits.",href:"/article/citi-credit-cards-guide"},
    {name:"Discover",network:"Discover",accent:"Cash back",styleType:"discover",cardLabel:"DISCOVER",image:"/images/cards/discover-card.png",description:"A U.S. issuer known for straightforward cash-back products and consumer-focused card features.",href:"/article/discover-credit-cards-guide"},
    {name:"Wells Fargo",network:"Visa",accent:"Everyday rewards",styleType:"wells",cardLabel:"WELLS FARGO",image:"/images/cards/wells-fargo-card.png",description:"A large U.S. bank offering cards for cash back, rewards and everyday spending needs.",href:"/article/wells-fargo-credit-cards-guide"}
  ];

  return <>
    <section className="cards-hero">
      <div className="cards-hero-copy">
        <div className="eyebrow blue">CREDIT CARDS</div>
        <h1>Find the right credit card <em>for your lifestyle.</em></h1>
        <p>Compare cards from major banks and explore rewards, cash back, travel perks and everyday benefits before you apply.</p>
        <div className="hero-checks">
          <span><Check size={16}/> Top issuers</span><span><Check size={16}/> Side-by-side comparison</span><span><Check size={16}/> Clear card guides</span>
        </div>
      </div>
      <div className="cards-hero-art">
        <img className="cards-hero-banner-image" src="/images/cards/credit-cards-hero-banner.png" alt="Credit cards hero banner" />
      </div>
    </section>

    <AdSlot/>

    <section className="section issuer-section">
      <div className="section-heading"><div><div className="eyebrow">MAJOR ISSUERS</div><h2>Explore cards by <em>bank.</em></h2></div><p>Start with an issuer, then open its dedicated guide to understand common card categories, rewards, fees and application considerations.</p></div>
      <div className="issuer-toolbar">
        <div className="filter-pills"><span className="active">All Cards</span><span>Cash Back</span><span>Travel Rewards</span><span>No Annual Fee</span><span>Business Cards</span><span>Secured Cards</span></div>
        <div className="sort-pill">Sort by <b>Featured</b><ChevronDown size={16}/></div>
      </div>
      <div className="bank-grid featured-bank-grid">{issuers.map(issuer=><BankCard key={issuer.name} {...issuer}/>)}</div>
    </section>

    <AdSlot/>

    <section className="section">
      <div className="section-heading"><div><div className="eyebrow">CARD TYPES</div><h2>Choose by what <em>matters to you.</em></h2></div><p>The best card depends on how you spend, what you value and the terms you are comfortable with.</p></div>
      <div className="category-grid">
        <Link className="category-card" to="/article/cash-back-credit-cards-guide"><div className="icon-wrap"><CreditCard size={22}/></div><h3>Cash Back</h3><p>Learn how flat-rate and category-based cash-back cards work and what fees to compare.</p><span>Read guide <ArrowRight size={16}/></span></Link>
        <Link className="category-card" to="/article/travel-credit-cards-guide"><div className="icon-wrap"><Sparkles size={22}/></div><h3>Travel Rewards</h3><p>Understand points, miles, transfer partners, annual fees and travel benefits.</p><span>Read guide <ArrowRight size={16}/></span></Link>
        <Link className="category-card" to="/article/secured-credit-cards-guide"><div className="icon-wrap"><ShieldCheck size={22}/></div><h3>Building Credit</h3><p>Explore secured and starter-card concepts and the factors to consider before applying.</p><span>Read guide <ArrowRight size={16}/></span></Link>
      </div>
    </section>
  </>
}
function CategoryPage({type}){
 const filtered=type==="cards"?articles.filter(a=>a.category==="Credit Cards"):type==="loans"?articles.filter(a=>a.category==="Loans"):articles.filter(a=>a.category==="Financial Guides");
 const title=type==="cards"?"Credit Cards":type==="loans"?"Loans":"Financial Guides";
 return <><PageHero eyebrow="EXPLORE" title={title} text={`Explore practical information about ${title.toLowerCase()}, with dedicated articles instead of a single long page.`}/><AdSlot/><ArticleGrid title={`${title}: latest articles`}/><AdSlot/><section className="section"><div className="callout"><div className="eyebrow">BEFORE YOU APPLY</div><h2>Compare the details that <em>matter.</em></h2><p>Rates, fees, eligibility, repayment terms and provider conditions can vary. Always confirm current information with the official provider.</p></div></section></>
}

function PageHero({eyebrow,title,text}){return <section className="page-hero"><div className="eyebrow">{eyebrow}</div><h1>{title} <em>made clearer.</em></h1><p>{text}</p></section>}

function Article({article}){
 return <><article className="article"><div className="eyebrow">{article.category}</div><h1>{article.title}</h1><p className="article-lead">{article.excerpt}</p><AdSlot/><h2>What to look for</h2><p>When comparing financial products, start with the total cost, eligibility requirements, fees, repayment terms and the benefits that are actually relevant to your situation. Information can change, so confirm the current terms with the provider before applying.</p><h2>Questions worth asking</h2><ul><li>What is the total cost over the full term?</li><li>Are there annual, origination, transfer or other fees?</li><li>What eligibility requirements apply?</li><li>What happens if your circumstances change?</li></ul><AdSlot/><h2>Before you apply</h2><p>Use the provider's official website to verify rates, fees, eligibility and application requirements. Finora does not approve financial products.</p><div className="article-next"><Link to="/financial-guides">More financial guides <ArrowRight size={17}/></Link></div></article><section className="section"><ArticleGrid title="You may also like" limit={3}/></section></>
}

function FAQ(){const [active,setActive]=useState(0);return <div className="faq"><div className="faq-heading"><div className="eyebrow">FAQ</div><h2>Questions, <em>answered.</em></h2><p>Clear explanations before you make a financial decision.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={active===i?"faq-item active":"faq-item"} key={q}><button onClick={()=>setActive(active===i?-1:i)}><span>{q}</span><ChevronDown size={19}/></button>{active===i&&<p>{a}</p>}</div>)}</div></div>}

function About(){return <><PageHero eyebrow="ABOUT FINORA" title="Financial information without the noise." text="Finora is an independent editorial-style site covering credit cards, loans and practical personal finance topics."/><section className="section"><div className="about-grid"><div><div className="eyebrow">OUR APPROACH</div><h2>Useful information, <em>clearly organized.</em></h2></div><div><p>Our articles are designed to help readers understand financial products before visiting a provider's official website. We do not make approval decisions and we do not act as a bank or lender.</p><p>Finora is supported by advertising. Some links or recommendations may also be associated with referral or affiliate compensation.</p></div></div></section><AdSlot/><section className="section"><FAQ/></section></>}

function News(){return <><PageHero eyebrow="FINANCIAL NEWS" title="Money topics worth understanding." text="News-style explainers and practical articles about financial products and everyday money decisions."/><AdSlot/><ArticleGrid title="Financial news & explainers"/></>}

function App(){
 const found=(slug)=>articles.find(a=>a.slug===slug);
 return <BrowserRouter><ScrollToTop/><Header/><main><Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/credit-cards" element={<CreditCardsPage/>}/>
  <Route path="/loans" element={<CategoryPage type="loans"/>}/>
  <Route path="/financial-guides" element={<CategoryPage type="guides"/>}/>
  <Route path="/news" element={<News/>}/>
  <Route path="/about" element={<About/>}/>
  {articles.map(a=><Route key={a.slug} path={"/article/"+a.slug} element={<Article article={a}/>}/>)}
 </Routes></main><Footer/></BrowserRouter>
}
export default App;
