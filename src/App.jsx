import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route, Link, useLocation} from "react-router-dom";
import {ArrowRight, Check, ChevronDown, CreditCard, Menu, ShieldCheck, Sparkles, X} from "lucide-react";
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
  {slug:"secured-credit-cards-guide", title:"Secured credit cards: what beginners should know", category:"Credit Cards", excerpt:"How secured cards work and what to compare when building or rebuilding credit."},
  {slug:"personal-loan-apr-explained", title:"Personal loan APR explained: what the number means", category:"Loans", excerpt:"Understand APR, interest and fees so you can compare borrowing costs more accurately."},
  {slug:"fixed-vs-variable-rates", title:"Fixed vs. variable rates: what borrowers should understand", category:"Loans", excerpt:"Learn how fixed and variable rates can affect payment predictability and borrowing costs."},
  {slug:"how-credit-utilization-works", title:"Credit utilization: why your balances can matter", category:"Financial Guides", excerpt:"A practical explanation of revolving balances, utilization and responsible credit management."},
  {slug:"loan-term-and-monthly-payment", title:"Loan term vs. monthly payment: the trade-off to understand", category:"Loans", excerpt:"A lower monthly payment can sometimes mean paying longer. Learn how term length changes total cost."}
];

const articleContent = {
  "how-to-compare-credit-cards": {
    intro:"A credit card can look attractive because of a welcome offer, a rewards rate or a polished benefits page. A better comparison starts with the full set of terms. The right card depends on how you spend, whether you carry a balance and which benefits you will realistically use.",
    sections:[
      ["Start with the cost of carrying a balance",["If you sometimes carry a balance, the purchase APR can matter much more than rewards. Compare the regular APR range and understand that the rate you receive can depend on your credit profile."]],
      ["Compare the annual fee with the value you expect",["An annual fee is not automatically bad. The useful question is whether the recurring benefits you would actually use are worth more than the fee. Avoid assigning value to perks you are unlikely to use."]],
      ["Look beyond the headline rewards rate",["Check whether rewards are unlimited, capped, rotating, category-specific or subject to redemption rules. A simple rewards structure can be more useful than a higher advertised rate that is difficult to use."]],
      ["Review eligibility and provider terms",["Approval is never guaranteed. Before applying, review the provider's current eligibility requirements, fees, rewards terms, introductory periods and any limitations that apply to the offer."]]
    ]
  },
  "what-to-check-before-a-loan": {
    intro:"Personal loans can be useful for planned expenses, consolidation or an unexpected bill, but the monthly payment alone does not tell you what borrowing will cost. Compare the complete repayment structure before deciding.",
    sections:[
      ["Compare APR and total repayment",["APR can help you compare the cost of different offers because it can incorporate certain fees in addition to the interest rate. Also look at the total amount of payments over the full term."]],
      ["Understand the term",["A longer term can reduce the required monthly payment while increasing the amount of time interest can accrue. A shorter term can cost more each month but may reduce total interest, depending on the rate and fees."]],
      ["Check every fee",["Look for origination fees, late fees, prepayment terms and any other charges. The provider's official disclosure should be the final source for current pricing and conditions."]],
      ["Borrow only what fits the plan",["A loan should solve a defined financial need rather than create room for unrelated spending. Build a repayment plan around a payment you can reasonably maintain."]]
    ]
  },
  "understanding-credit-decisions": {
    intro:"Lenders generally review information about an applicant's credit history, income, existing obligations and other eligibility criteria. Each provider can use its own underwriting model, so there is no universal formula for approval.",
    sections:[
      ["Credit history and credit scores",["A credit report can show payment history, account history, balances and other information used in credit decisions. A score is one way that information may be summarized, but lenders can use additional criteria."]],
      ["Income and existing obligations",["A lender may consider income and recurring debt obligations when evaluating whether a proposed payment fits the applicant's financial profile. The documents and thresholds vary by provider."]],
      ["The application itself matters",["Applying does not guarantee approval or a specific rate. Providers may verify information and may offer different terms based on their underwriting process."]],
      ["Review the decision carefully",["If an application is approved, compare the offered APR, fees, payment, term and total cost with the alternatives you considered rather than focusing on approval alone."]]
    ]
  },
  "building-a-healthier-credit-profile": {
    intro:"A healthier credit profile is usually built through consistent financial habits rather than a single action. The goal is to keep accounts organized, make payments reliably and avoid taking on obligations you cannot comfortably manage.",
    sections:[
      ["Pay on time",["Payment history is an important part of many credit scoring models. Set reminders or automatic payments for at least the required amount, while paying more when your budget allows."]],
      ["Keep balances manageable",["High revolving balances can make credit more expensive and can affect utilization measures. A written spending plan can help prevent balances from growing faster than your ability to repay them."]],
      ["Monitor your reports",["Review your credit reports periodically for unfamiliar accounts or inaccurate information. If something appears incorrect, use the appropriate dispute process with the relevant credit reporting agency or provider."]],
      ["Avoid unnecessary applications",["Opening several new accounts in a short period can affect parts of your credit profile. Apply when a product has a clear purpose and you understand its terms."]]
    ]
  },
  "credit-card-fees-explained": {
    intro:"Credit cards can have several different fees, and the fee structure can be more important than the reward headline. Understanding the common categories makes it easier to compare cards on a like-for-like basis.",
    sections:[
      ["Annual fees",["Some cards charge an annual fee in exchange for rewards, insurance, credits or other benefits. Compare the recurring cost with benefits you expect to use."]],
      ["Balance transfer and cash advance fees",["Balance transfers can involve a percentage fee, while cash advances can have separate fees and interest rules. Read the specific terms before using either feature."]],
      ["Foreign transaction and other fees",["If you travel internationally, check whether foreign transactions have an additional fee. Also review late-payment and returned-payment policies so there are no surprises."]],
      ["Promotional periods",["Introductory APRs and other promotions can expire. Note the end date and understand what rate or fee structure applies afterward."]]
    ]
  },
  "emergency-financing-guide": {
    intro:"An unexpected expense can make borrowing feel urgent. Before accepting an emergency financing option, slow the decision down enough to compare the cost, repayment schedule and alternatives available to you.",
    sections:[
      ["Define the amount you actually need",["Start with the expense itself and borrow only enough to address the defined need. A larger loan can increase both the payment and total cost."]],
      ["Compare speed with cost",["Fast funding can be useful, but convenience can come with higher costs or fees. Compare the full APR and repayment amount rather than choosing solely on how quickly funds arrive."]],
      ["Check the payment against your budget",["Map the proposed payment against rent, utilities, debt payments and other recurring expenses. The loan should fit a realistic budget rather than an optimistic one."]],
      ["Consider alternatives",["Depending on the situation, alternatives may include negotiating the bill, using an existing emergency fund or asking a provider about a payment plan. The best choice depends on the circumstances."]]
    ]
  },
  "chase-credit-cards-guide": {
    intro:"Chase offers a broad range of consumer credit cards, including products associated with travel, rewards and everyday spending. Because offers change, the best way to compare them is to focus on the current terms of the specific card.",
    sections:[
      ["Identify the card category",["Start by deciding whether you want travel rewards, cash back, flexible points or another feature. Different Chase cards are designed around different use cases."]],
      ["Review rewards mechanics",["Look at earning categories, redemption options, transfer features and any limits. A points program can be valuable when its redemption options match your spending and travel habits."]],
      ["Check the annual fee and credits",["Premium cards may include credits or benefits that can offset part of an annual fee for some users. Do not count a benefit at full value unless you expect to use it."]],
      ["Verify the current offer",["Welcome bonuses, APRs, fees and eligibility rules can change. Use the issuer's official application page to confirm the terms before applying."]]
    ]
  },
  "capital-one-credit-cards-guide": {
    intro:"Capital One offers credit cards across cash back, travel and other everyday categories. Comparing the cards is easier when you separate the rewards structure from the annual fee, redemption rules and other costs.",
    sections:[
      ["Choose a rewards style",["Flat-rate cash back is straightforward for many spenders, while travel-oriented products can make more sense for people who value miles and travel benefits."]],
      ["Consider how you redeem",["A rewards rate only matters if you can redeem rewards in a way that fits your preferences. Review redemption options, transfer rules and any restrictions."]],
      ["Compare fees",["Check annual fees and any other charges that could apply. If a card has a higher fee, estimate the realistic value of the benefits before applying."]],
      ["Confirm current eligibility",["The issuer decides approval and terms. Review the current offer and application disclosures directly with Capital One before submitting an application."]]
    ]
  },
  "bank-of-america-credit-cards-guide": {
    intro:"Bank of America offers consumer cards covering cash back, travel and rewards. Some products can also be relevant to customers who already use the bank's broader financial services.",
    sections:[
      ["Compare rewards categories",["Look at the spending categories that earn rewards and determine whether they match your actual expenses. A card is more useful when its rewards align with your routine."]],
      ["Consider banking relationships",["Some issuer programs can have additional features or benefits tied to eligible banking or investment relationships. Check the current terms rather than assuming a benefit applies."]],
      ["Review the fee structure",["Compare annual fees, foreign transaction fees, APR and other charges. No-fee cards can be attractive when you want a simpler cost structure."]],
      ["Use the official application page",["Offers and qualification criteria can change. Confirm the current terms and disclosures on the issuer's official website before applying."]]
    ]
  },
  "citi-credit-cards-guide": {
    intro:"Citi has consumer cards designed around cash back, rewards and travel. The right comparison depends on whether you prefer predictable rewards or category-specific earning opportunities.",
    sections:[
      ["Look at earning categories",["Some rewards cards emphasize particular spending categories. Compare the categories with your real monthly spending rather than choosing based only on the advertised maximum rate."]],
      ["Check caps and exclusions",["Category rewards can have spending caps, eligible-purchase rules or other limitations. Read the rewards terms to understand what happens after a threshold is reached."]],
      ["Consider redemption options",["Review how rewards can be redeemed and whether the available options fit your goals. Simpler redemption can be useful if you do not want to manage a complex rewards strategy."]],
      ["Verify current terms",["Rates, fees, bonuses and benefits can change. Use Citi's official materials as the final source for the current offer."]]
    ]
  },
  "discover-credit-cards-guide": {
    intro:"Discover is known for consumer credit cards with cash-back features and a straightforward rewards presentation. As with any card, the specific terms matter more than the issuer name alone.",
    sections:[
      ["Understand the cash-back structure",["Some products may use rotating or category-based rewards. Check which purchases qualify, how categories work and whether activation or other conditions apply."]],
      ["Review the base rewards rate",["A higher promotional rate can be useful, but compare it with the rate that applies to other purchases and after any introductory period ends."]],
      ["Check fees and APR",["Review the current purchase APR, balance transfer terms, cash advance fees and other charges. Avoid assuming that a rewards card is inexpensive to carry a balance on."]],
      ["Confirm current offers",["Promotions and eligibility criteria change. Review the issuer's official application disclosure before applying."]]
    ]
  },
  "american-express-credit-cards-guide": {
    intro:"American Express offers cards across everyday rewards, travel and premium benefits. Some products have higher annual fees, so the comparison should focus on realistic value rather than the number of benefits listed.",
    sections:[
      ["Compare Membership Rewards or cash-back structures",["Determine whether points, statement credits or cash back fit your spending style. Points can be valuable when you understand how you plan to redeem them."]],
      ["Value the benefits you will actually use",["Credits for travel, dining or other services only create meaningful value if you use them. Estimate realistic annual usage before deciding whether a fee is worthwhile."]],
      ["Review acceptance and payment habits",["Consider where you typically shop and how you manage your accounts. A card should fit your everyday payment needs as well as its rewards strategy."]],
      ["Verify the current welcome offer",["Welcome offers and eligibility rules can change. Confirm the current terms directly with American Express before applying."]]
    ]
  },
  "wells-fargo-credit-cards-guide": {
    intro:"Wells Fargo offers cards for cash back and everyday rewards. Comparing them is mainly a question of matching the rewards structure, fees and payment habits to your financial goals.",
    sections:[
      ["Start with your spending pattern",["A flat cash-back card can be easy to understand, while category rewards may be better for people whose spending consistently falls into eligible categories."]],
      ["Check the annual fee",["A no-annual-fee structure can make sense for someone who wants a simple card, while a fee-based card may be appropriate when the benefits are genuinely useful."]],
      ["Understand introductory terms",["Promotional APRs, balance-transfer offers and welcome rewards can have specific time windows. Record when introductory terms end before relying on them."]],
      ["Confirm the current disclosure",["The issuer's official website is the best place to verify current pricing, eligibility and reward terms before applying."]]
    ]
  },
  "cash-back-credit-cards-guide": {
    intro:"Cash-back cards generally reward eligible purchases with a percentage returned as cash, statement credit or another redemption. The most useful card depends on how predictable your spending is and how simple you want the rewards to be.",
    sections:[
      ["Flat-rate vs. category rewards",["Flat-rate cards offer a consistent rate across eligible purchases. Category cards can offer higher rates in selected categories but may require more attention to caps or changing categories."]],
      ["Check the effective value",["Compare the rewards you could realistically earn with the card's annual fee, if any. A higher advertised rate does not automatically produce more value for every spender."]],
      ["Understand redemption",["Check minimum redemption amounts, statement credits, direct deposits and any expiration or forfeiture rules. Simple redemption can reduce the effort required to benefit from rewards."]],
      ["Do not carry a balance for rewards",["Interest charges can quickly outweigh cash-back earnings. Rewards should generally be treated as a benefit of spending you can afford, not a reason to spend more or carry debt."]]
    ]
  },
  "travel-credit-cards-guide": {
    intro:"Travel cards can combine points or miles with travel-related benefits, but their value depends on how you travel and how you redeem rewards. Start by understanding the program before comparing the headline bonus.",
    sections:[
      ["Points vs. miles",["Some programs use transferable points, while others focus on miles or issuer-specific rewards. Learn where rewards can be redeemed and whether transfers have minimums or restrictions."]],
      ["Compare annual fees with real benefits",["Airport lounge access, travel credits, insurance and other benefits can be valuable, but only if they match your actual travel pattern. Estimate realistic use rather than the theoretical maximum."]],
      ["Check foreign transaction fees",["International travelers should review whether purchases outside the card's home market incur an additional fee. This can materially affect the value of a travel card."]],
      ["Understand the redemption rules",["Before applying, learn how points or miles can be redeemed, whether values vary by redemption method and whether rewards can expire or be restricted."]]
    ]
  },
  "secured-credit-cards-guide": {
    intro:"Secured credit cards are designed for people who may want a credit-building product and are willing to provide a refundable security deposit subject to the issuer's terms. They are not the same as prepaid cards.",
    sections:[
      ["How a secured card works",["A secured card typically requires a cash deposit that serves as security for the account. The card can still function as a credit account, and payment history can be relevant to credit reporting."]],
      ["Compare the deposit and credit limit",["Review the minimum and maximum deposit, how the credit limit is determined and the conditions for increasing it or receiving the deposit back."]],
      ["Check fees and reporting",["Review annual fees, APR and other charges. Also check whether the issuer reports account activity to major credit bureaus, because reporting is relevant to the credit-building purpose."]],
      ["Use the account conservatively",["The goal is consistent, affordable use and on-time payments. A secured card should not be treated as permission to take on debt that you cannot repay."]]
    ]
  },
  "personal-loan-apr-explained": {
    intro:"APR, or annual percentage rate, is designed to help borrowers compare the cost of credit. It can incorporate interest and certain fees, depending on the product and applicable rules, which makes it useful when comparing loan offers.",
    sections:[
      ["APR is not the same as the interest rate",["The interest rate describes the rate charged on the principal, while APR can incorporate certain finance charges. The exact calculation and disclosures depend on the type of credit."]],
      ["Compare the same term",["When comparing two offers, keep the repayment term and amount borrowed in mind. A lower APR is generally useful for comparison, but the complete payment schedule still matters."]],
      ["Look at total repayment",["Ask how much you will pay over the full term, including interest and applicable fees. A monthly payment can hide a higher total cost when the term is long."]],
      ["Verify the lender's disclosure",["Use the provider's official loan agreement and disclosures to confirm the final rate, fees, payment schedule and other conditions before accepting an offer."]]
    ]
  },
  "fixed-vs-variable-rates": {
    intro:"The difference between a fixed and variable rate is mainly about predictability. A fixed rate generally stays the same under the contract, while a variable rate can change according to the terms of the product.",
    sections:[
      ["Fixed rates and payment predictability",["A fixed rate can make budgeting easier because the interest rate does not normally change during the applicable fixed period. Other changes to the account can still affect costs depending on the contract."]],
      ["Variable rates and market changes",["A variable rate is usually tied to an index or reference rate plus a margin. If the applicable benchmark changes, the rate can change according to the contract."]],
      ["Compare the downside as well as the starting rate",["A variable product may begin with a lower rate, but the future rate can be higher. Review caps, floors, adjustment frequency and the index used."]],
      ["Choose based on risk tolerance and term",["The longer the borrowing period, the more important future-rate uncertainty may become. Read the provider's disclosure before choosing between structures."]]
    ]
  },
  "how-credit-utilization-works": {
    intro:"Credit utilization describes how much of available revolving credit is being used. It is one factor that can appear in credit scoring models, so understanding the concept can help consumers manage balances more intentionally.",
    sections:[
      ["The basic calculation",["A simple utilization calculation divides revolving balances by total available revolving limits. For example, a $1,000 balance against a $5,000 combined limit represents 20% utilization."]],
      ["Utilization can change quickly",["Because balances and limits can change, utilization is not a permanent label. A balance that is paid down can reduce the reported utilization in a later reporting cycle, depending on the issuer and reporting timing."]],
      ["Do not optimize at the expense of cash flow",["Paying a card down can be helpful, but consumers should not drain an emergency fund simply to chase a particular utilization number. Overall financial stability matters more than a single metric."]],
      ["Focus on the fundamentals",["Paying on time, managing debt responsibly and checking reports for errors are broader habits that can support a healthier credit profile."]]
    ]
  },
  "loan-term-and-monthly-payment": {
    intro:"Loan term is the length of time scheduled for repayment. It directly affects the monthly payment and can also affect total interest. Comparing only the monthly payment can therefore produce an incomplete picture.",
    sections:[
      ["Longer terms can lower the payment",["Spreading the same principal over more months can reduce the scheduled payment. That can improve monthly cash flow, but interest may accrue over a longer period."]],
      ["Shorter terms can reduce the repayment period",["A shorter term usually requires a higher payment but can reduce the time during which interest is charged. The actual effect depends on the rate and fees."]],
      ["Compare total cost",["When you receive multiple offers, compare the total scheduled repayment as well as the monthly payment. This makes the trade-off easier to see."]],
      ["Leave room in the budget",["The cheapest theoretical loan is not useful if the payment is unaffordable. Choose a structure that fits a realistic budget and preserves room for ordinary expenses and emergencies."]]
    ]
  }
};

const faqs=[
 ["Is Finora a bank?","No. Finora is an independent financial information site. We do not approve loans, issue credit cards or make underwriting decisions."],
 ["Does it cost anything to use the site?","The educational content is free. When an offer links to a provider, the application is handled by that provider."],
 ["How does Finora make money?","Finora is supported by advertising and, for some offers, referral or affiliate compensation. This helps us keep informational content available to readers at no charge."],
 ["Can I apply for a financial product on Finora?","No. When an article links to a provider, you are taken to the provider's official website, where its own terms and approval criteria apply."],
 ["Are Finora articles financial advice?","No. Finora publishes general educational information. Your circumstances are unique, so consider professional advice when you need individualized financial, tax or legal guidance."]
];

function AdSlot({label="ADVERTISEMENT"}){return <div className="ad-slot" aria-label="Advertisement placeholder"><span>{label}</span></div>}

function ScrollToTop(){
  const {pathname} = useLocation();
  useEffect(()=>{ window.scrollTo({top:0,left:0,behavior:"auto"}); },[pathname]);
  return null;
}

function Seo({title="Finora — Financial Information",description="Finora provides independent educational information about credit cards, loans and practical personal finance topics."}){
  const location=useLocation();
  useEffect(()=>{
    document.title=title;
    let meta=document.querySelector('meta[name="description"]');
    if(!meta){meta=document.createElement('meta');meta.name='description';document.head.appendChild(meta)}
    meta.setAttribute('content',description);
    let canonical=document.querySelector('link[rel="canonical"]');
    if(!canonical){canonical=document.createElement('link');canonical.rel='canonical';document.head.appendChild(canonical)}
    canonical.href=window.location.origin+location.pathname;
  },[title,description,location.pathname]);
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
    <Link to="/news" onClick={()=>setOpen(false)}>Money Topics</Link>
    <Link to="/about" onClick={()=>setOpen(false)}>About</Link>
   </nav>
   <Link className="header-cta" to="/credit-cards">Explore options <ArrowRight size={16}/></Link>
   <button className="menu-btn" aria-label="Open navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </header>
}

function Footer(){
 return <footer className="footer"><div className="footer-main">
  <div><Link className="logo light" to="/"><span>F</span>FINORA</Link><p>Independent financial information for clearer everyday decisions.</p></div>
  <div className="footer-links"><Link to="/credit-cards">Credit Cards</Link><Link to="/loans">Loans</Link><Link to="/financial-guides">Guides</Link><Link to="/news">Money Topics</Link><Link to="/about">About</Link><Link to="/editorial-policy">Editorial Policy</Link><Link to="/contact">Contact</Link><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms">Terms</Link><Link to="/advertiser-disclosure">Advertiser Disclosure</Link></div>
 </div><div className="footer-disclosure"><b>Advertising & advertiser disclosure</b><p>Finora is an independent, advertising-supported editorial site. We may receive advertising revenue and, for some products or services, compensation from referral or affiliate partners. This compensation may affect how and where some offers appear. Not every financial product available in the market is included on this website.</p><p>We do not charge readers to access our editorial content. Product availability, terms, fees and approval are determined by the provider. Always review the provider's official terms before applying.</p></div>
 <div className="footer-bottom"><span>© 2026 Finora. Information only; not a bank or lender.</span><span><Link to="/privacy-policy">Privacy</Link> · <Link to="/terms">Terms</Link> · <Link to="/advertiser-disclosure">Advertising</Link></span></div>
 </footer>
}

function Home(){
 return <><Seo title="Finora — Financial Information, Credit Cards & Loans" description="Explore independent financial information about credit cards, loans and practical money decisions with Finora."/>
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
        <div className="opportunity-rate"><small>COMPARE</small><strong>Rates &amp; terms</strong><span>Before you apply</span></div>
        <div className="opportunity-bars"><div><span style={{width:"84%"}}/></div><div><span style={{width:"68%"}}/></div><div><span style={{width:"92%"}}/></div></div>
        <Link to="/loans" className="opportunity-button">See Loan Options <ArrowRight size={16}/></Link>
      </div>
      <div className="floating-chip chip-one">Competitive rates</div><div className="floating-chip chip-two">Multiple options</div>
    </div>
  </section>
  <AdSlot/>
  <HowItWorks/>
  <AdSlot/>
  <ArticleGrid title="Start exploring" limit={6}/>
  <section className="section home-editorial-note"><div className="callout"><div className="eyebrow">EDITORIAL APPROACH</div><h2>Information first. <em>Offers second.</em></h2><p>Finora is built to help readers understand financial products before they visit a provider. We separate educational content from advertising and referral relationships, and we encourage readers to verify current terms directly with the provider.</p><Link className="text-link" to="/editorial-policy">Read our editorial policy <ArrowRight size={16}/></Link></div></section>
 </>
}

function HowItWorks(){return <section className="how section"><div className="how-visual"><div className="visual-grid"/><div className="visual-glow glow-one"/><div className="visual-glow glow-two"/><div className="visual-center"><span>FINORA</span><b>Make a clearer<br/>financial choice.</b><i/></div><div className="floating-stat"><span>01</span><b>Compare</b><small>options side by side</small></div><div className="floating-stat second"><span>02</span><b>Understand</b><small>costs and terms</small></div><div className="floating-stat third"><span>03</span><b>Choose</b><small>with more clarity</small></div></div><div className="how-copy"><div className="eyebrow">HOW IT WORKS</div><h2>A simpler way to navigate <em>financial products.</em></h2><p>Start with a topic, review the information that matters and follow the provider's official website when you are ready to explore an offer.</p>{[["01","Choose a topic","Start with credit cards, loans or a financial guide."],["02","Compare details","Review costs, benefits, eligibility and practical considerations."],["03","Visit the provider","Applications and approvals happen on the provider's own website."]].map(x=><div className="step" key={x[0]}><span>{x[0]}</span><div><h3>{x[1]}</h3><p>{x[2]}</p></div></div>)}</div></section>}

function ArticleGrid({title="Articles", limit, category}){
 const base=category?articles.filter(a=>a.category===category):articles;
 const list=limit?base.slice(0,limit):base;
 return <section className="section guides"><div className="section-heading"><div><div className="eyebrow">READ & LEARN</div><h2>{title} <em>that answer real questions.</em></h2></div><p>Original editorial-style financial information organized by topic, with practical questions to consider before applying.</p></div><div className="guide-grid">{list.map((a,i)=><Link className="guide-card" to={"/article/"+a.slug} key={a.slug}><div className="guide-number">{String(i+1).padStart(2,"0")}</div><small>{a.category}</small><h3>{a.title}</h3><p>{a.excerpt}</p><span>Read article <ArrowRight size={16}/></span></Link>)}</div></section>
}

function BankCard({name, network, accent, description, href, styleType="dark", image}) {
  return <article className="bank-card">
    <div className={"bank-card-visual " + styleType}><img className="bank-card-image" src={image} alt={`${name} credit card`} /><span className="card-badge">{accent}</span></div>
    <div className="bank-card-body"><div className="bank-card-kicker">{network}</div><h3>{name}</h3><p>{description}</p><Link className="bank-card-link" to={href}>Explore cards <ArrowRight size={16}/></Link></div>
  </article>
}

function CreditCardsPage(){
  const issuers = [
    {name:"Chase",network:"Visa",accent:"Travel & rewards",styleType:"chase",image:"/images/cards/chase-card.png",description:"A major U.S. issuer with a broad selection of rewards, travel and everyday credit cards.",href:"/article/chase-credit-cards-guide"},
    {name:"American Express",network:"Amex",accent:"Premium rewards",styleType:"amex",image:"/images/cards/american-express-card.png",description:"Known for Membership Rewards, travel benefits and a wide range of premium and everyday cards.",href:"/article/american-express-credit-cards-guide"},
    {name:"Capital One",network:"Mastercard",accent:"Cash back & travel",styleType:"capital",image:"/images/cards/capital-one-card.png",description:"Offers cash-back, travel and everyday cards designed for different spending patterns and goals.",href:"/article/capital-one-credit-cards-guide"},
    {name:"Bank of America",network:"Visa",accent:"Rewards & banking",styleType:"boa",image:"/images/cards/bank-of-america-card.png",description:"Consumer cards spanning cash back, travel and rewards, with options connected to its banking ecosystem.",href:"/article/bank-of-america-credit-cards-guide"},
    {name:"Citi",network:"Mastercard",accent:"Cash back & rewards",styleType:"citi",image:"/images/cards/citi-card.png",description:"A major issuer with cards focused on cash back, everyday rewards and travel-oriented benefits.",href:"/article/citi-credit-cards-guide"},
    {name:"Discover",network:"Discover",accent:"Cash back",styleType:"discover",image:"/images/cards/discover-card.png",description:"A U.S. issuer known for straightforward cash-back products and consumer-focused card features.",href:"/article/discover-credit-cards-guide"},
    {name:"Wells Fargo",network:"Visa",accent:"Everyday rewards",styleType:"wells",image:"/images/cards/wells-fargo-card.png",description:"A large U.S. bank offering cards for cash back, rewards and everyday spending needs.",href:"/article/wells-fargo-credit-cards-guide"}
  ];
  return <><Seo title="Credit Cards — Compare Rewards, Fees & Card Types | Finora" description="Explore credit card categories and issuer guides covering rewards, fees, travel benefits and application considerations."/>
    <section className="cards-hero"><div className="cards-hero-copy"><div className="eyebrow blue">CREDIT CARDS</div><h1>Find the right credit card <em>for your lifestyle.</em></h1><p>Compare cards from major banks and explore rewards, cash back, travel perks and everyday benefits before you apply.</p><div className="hero-checks"><span><Check size={16}/> Top issuers</span><span><Check size={16}/> Side-by-side comparison</span><span><Check size={16}/> Clear card guides</span></div></div><div className="cards-hero-art"><img className="cards-hero-banner-image" src="/images/cards/credit-cards-hero-banner.png" alt="Credit cards hero banner" /></div></section>
    <section className="section content-intro"><div className="content-intro-grid"><div><div className="eyebrow">BEFORE YOU CHOOSE</div><h2>Compare more than <em>the reward rate.</em></h2></div><div><p>A useful card comparison includes the annual fee, purchase APR, introductory terms, rewards rules, redemption options, foreign transaction fees and eligibility criteria. The right choice depends on how you spend and whether you can comfortably pay the balance.</p><p>Offers change frequently. Use Finora's guides to understand what to compare, then verify the current offer on the issuer's official website.</p></div></div></section>
    <AdSlot/>
    <section className="section issuer-section"><div className="section-heading"><div><div className="eyebrow">MAJOR ISSUERS</div><h2>Explore cards by <em>bank.</em></h2></div><p>Start with an issuer, then open its dedicated guide to understand common card categories, rewards, fees and application considerations.</p></div><div className="issuer-toolbar"><div className="filter-pills"><span className="active">All Cards</span><span>Cash Back</span><span>Travel Rewards</span><span>No Annual Fee</span><span>Business Cards</span><span>Secured Cards</span></div><div className="sort-pill">Sort by <b>Featured</b><ChevronDown size={16}/></div></div><div className="bank-grid featured-bank-grid">{issuers.map(issuer=><BankCard key={issuer.name} {...issuer}/>)}</div></section>
    <AdSlot/>
    <section className="section"><div className="section-heading"><div><div className="eyebrow">CARD TYPES</div><h2>Choose by what <em>matters to you.</em></h2></div><p>The best card depends on how you spend, what you value and the terms you are comfortable with.</p></div><div className="category-grid"><Link className="category-card" to="/article/cash-back-credit-cards-guide"><div className="icon-wrap"><CreditCard size={22}/></div><h3>Cash Back</h3><p>Learn how flat-rate and category-based cash-back cards work and what fees to compare.</p><span>Read guide <ArrowRight size={16}/></span></Link><Link className="category-card" to="/article/travel-credit-cards-guide"><div className="icon-wrap"><Sparkles size={22}/></div><h3>Travel Rewards</h3><p>Understand points, miles, transfer partners, annual fees and travel benefits.</p><span>Read guide <ArrowRight size={16}/></span></Link><Link className="category-card" to="/article/secured-credit-cards-guide"><div className="icon-wrap"><ShieldCheck size={22}/></div><h3>Building Credit</h3><p>Explore secured and starter-card concepts and the factors to consider before applying.</p><span>Read guide <ArrowRight size={16}/></span></Link></div></section>
    <section className="section"><div className="callout"><div className="eyebrow">A USEFUL RULE</div><h2>Rewards are valuable only when the <em>cost makes sense.</em></h2><p>If you carry a balance, interest charges can outweigh rewards. If you pay in full, compare fees and benefits based on your actual spending rather than the maximum advertised value.</p><Link className="text-link" to="/article/credit-card-fees-explained">Read the fee guide <ArrowRight size={16}/></Link></div></section>
  </>
}

function CategoryPage({type}){
 const title=type==="loans"?"Loans":"Financial Guides";
 const description=type==="loans"?"Practical information about personal loans, borrowing costs, repayment terms and questions to consider before applying.":"Practical explainers about credit, borrowing and everyday financial decisions.";
 return <><Seo title={`${title} — Practical Financial Guides | Finora`} description={description}/><PageHero eyebrow="EXPLORE" title={title} text={description}/><section className="section content-intro"><div className="content-intro-grid"><div><div className="eyebrow">HOW TO USE THESE GUIDES</div><h2>Read the details <em>before the decision.</em></h2></div><div><p>Finora articles are educational. They explain common product terms and comparison questions, but they do not replace a provider's official disclosures or individualized professional advice.</p><p>Start with the topic closest to your situation, make a shortlist of the questions you need answered, and verify current terms directly with the provider.</p></div></div></section><AdSlot/><ArticleGrid title={`${title}: practical articles`} category={type==="loans"?"Loans":"Financial Guides"}/><AdSlot/><section className="section"><div className="callout"><div className="eyebrow">BEFORE YOU APPLY</div><h2>Compare the details that <em>matter.</em></h2><p>Rates, fees, eligibility, repayment terms and provider conditions can vary. Always confirm current information with the official provider.</p></div></section></>
}

function PageHero({eyebrow,title,text}){return <section className="page-hero"><div className="eyebrow">{eyebrow}</div><h1>{title} <em>made clearer.</em></h1><p>{text}</p></section>}

function Article({article}){
 const content=articleContent[article.slug] || {intro:article.excerpt,sections:[["What to look for",["Compare total cost, fees, eligibility, repayment terms and benefits that are relevant to your situation."]],["Questions worth asking",["What is the total cost?","Which fees apply?","What eligibility requirements matter?","What happens if circumstances change?"]]]};
 return <><Seo title={`${article.title} | Finora`} description={article.excerpt}/><article className="article"><div className="eyebrow">{article.category}</div><h1>{article.title}</h1><p className="article-lead">{content.intro}</p><div className="article-meta"><span>Finora educational guide</span><span>Verify current terms with the provider</span></div><AdSlot/>{content.sections.map(([heading,paragraphs])=><section className="article-section" key={heading}><h2>{heading}</h2>{paragraphs.map((text,i)=>i===paragraphs.length-1 && paragraphs.length>2 ? <p key={i}>{text}</p> : <p key={i}>{text}</p>)}</section>)}<section className="article-checklist"><h2>Before you apply</h2><ul><li>Confirm the current rate, fees and eligibility criteria.</li><li>Review the provider's complete disclosure and repayment terms.</li><li>Compare the total cost, not just the advertised monthly payment or reward.</li><li>Make sure the product fits your budget and intended use.</li></ul></section><AdSlot/><div className="article-disclaimer"><strong>Finora note:</strong> This article is general educational information, not financial, tax or legal advice. Product terms can change and approval is determined by the provider.</div><div className="article-next"><Link to="/financial-guides">Explore more guides <ArrowRight size={17}/></Link></div></article><section className="section"><ArticleGrid title="Continue reading" limit={3}/></section></>
}

function FAQ(){const [active,setActive]=useState(0);return <div className="faq"><div className="faq-heading"><div className="eyebrow">FAQ</div><h2>Questions, <em>answered.</em></h2><p>Clear explanations before you make a financial decision.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={active===i?"faq-item active":"faq-item"} key={q}><button onClick={()=>setActive(active===i?-1:i)}><span>{q}</span><ChevronDown size={19}/></button>{active===i&&<p>{a}</p>}</div>)}</div></div>}

function About(){return <><Seo title="About Finora — Our Editorial Approach" description="Learn what Finora is, how its financial guides are created and how advertising and referral relationships are disclosed."/><PageHero eyebrow="ABOUT FINORA" title="Financial information without the noise." text="Finora is an independent editorial-style site covering credit cards, loans and practical personal finance topics."/><section className="section"><div className="about-grid"><div><div className="eyebrow">OUR APPROACH</div><h2>Useful information, <em>clearly organized.</em></h2></div><div><p>Our articles are designed to help readers understand financial products before visiting a provider's official website. We do not make approval decisions and we do not act as a bank or lender.</p><p>We aim to explain common financial concepts in plain language, highlight questions readers should ask and make it easier to compare the terms that matter.</p><p>Finora is supported by advertising. Some links or recommendations may also be associated with referral or affiliate compensation. Those relationships do not change the need to verify the provider's current terms.</p></div></div></section><AdSlot/><section className="section"><FAQ/></section><section className="section"><div className="about-link-grid"><Link to="/editorial-policy"><strong>Editorial Policy</strong><span>How we approach accuracy, updates and commercial relationships <ArrowRight size={16}/></span></Link><Link to="/advertiser-disclosure"><strong>Advertiser Disclosure</strong><span>How advertising and referral compensation can work <ArrowRight size={16}/></span></Link></div></section></>}

function News(){return <><Seo title="Money Topics & Financial Explainers | Finora" description="Explore Finora's educational money topics and financial explainers about credit, borrowing and everyday decisions."/><PageHero eyebrow="MONEY TOPICS" title="Financial topics worth understanding." text="Educational explainers and practical articles about financial products and everyday money decisions."/><AdSlot/><ArticleGrid title="Money topics & explainers"/></>}

function EditorialPolicy(){return <><Seo title="Editorial Policy | Finora" description="Finora's editorial policy explains our approach to accuracy, clarity, updates, sources and commercial relationships."/><PageHero eyebrow="EDITORIAL POLICY" title="How Finora approaches financial content." text="Our goal is to publish useful, understandable and transparent educational information."/><section className="section legal-page"><h2>Purpose and independence</h2><p>Finora publishes general educational content about credit cards, loans and personal finance. We are not a bank, lender, broker, financial adviser or credit-card issuer. Editorial pages are intended to help readers understand concepts and questions before visiting a provider.</p><h2>Accuracy and clarity</h2><p>We aim to use plain language and avoid guarantees about approval, rates, savings or outcomes. Financial products and offers can change, so readers should verify current information using the provider's official disclosures before making a decision.</p><h2>Commercial relationships</h2><p>Finora may display advertising and may receive referral or affiliate compensation for some links or offers. Commercial relationships are disclosed on the site. Compensation can influence where some offers appear, but it does not turn a product into a recommendation that is suitable for every reader.</p><h2>Updates</h2><p>When an article depends on changing product terms, we encourage readers to check the issuer or provider directly. We may update pages as information changes. A page should not be interpreted as a promise that every listed feature, rate or promotion remains available.</p><h2>Corrections</h2><p>If you notice an apparent factual error, please contact Finora with the page URL and the information you believe needs correction. We will review the issue and update the page when appropriate.</p><h2>AI-assisted drafting</h2><p>Some editorial production workflows may use software or AI-assisted drafting tools. Finora remains responsible for the published page and aims to review and edit material before publication. Automated drafting is not a substitute for checking provider terms or other authoritative information.</p></section></>}

function AdvertiserDisclosure(){return <><Seo title="Advertiser Disclosure | Finora" description="Learn how Finora's advertising and referral relationships may affect how financial offers appear on the site."/><PageHero eyebrow="ADVERTISER DISCLOSURE" title="How Finora can be supported." text="Transparency matters when financial content and advertising appear on the same website."/><section className="section legal-page"><h2>Advertising</h2><p>Finora may display advertising from third-party advertising networks, including Google AdSense when enabled. Advertisements are separate from editorial content and are selected or delivered by advertising systems according to their own processes.</p><h2>Referral and affiliate relationships</h2><p>Some links to financial providers may be referral or affiliate links. If a reader follows a qualifying link or completes an eligible action, Finora may receive compensation. Not every product in a category is necessarily included, and compensation may affect placement or prominence.</p><h2>No guarantee of approval</h2><p>Finora does not approve loans, issue credit cards or determine eligibility. A provider's rates, fees, terms and approval decision are controlled by that provider.</p><h2>What readers should do</h2><p>Use Finora to understand the questions worth asking, then read the provider's official disclosures before applying. Compare the full cost and conditions rather than choosing solely because an offer appears prominently on the page.</p></section></>}

function Contact(){return <><Seo title="Contact Finora" description="Contact Finora about site content, corrections, advertising questions or general feedback."/><PageHero eyebrow="CONTACT" title="Questions or corrections?" text="We welcome feedback about Finora's content, site experience and commercial disclosures."/><section className="section"><div className="contact-card"><div><div className="eyebrow">GET IN TOUCH</div><h2>Tell us what you <em>found.</em></h2><p>For a correction, include the page URL and a short explanation of the issue. For advertising or partnership questions, clearly identify the page or offer you are asking about.</p></div><div className="contact-box"><strong>Public contact email</strong><p>contact@finorabizz.com</p><small>This address is intended for the Finora brand and should be activated when the custom domain email is configured.</small></div></div></section></>}

function PrivacyPolicy(){return <><Seo title="Privacy Policy | Finora" description="Read Finora's privacy policy covering analytics, advertising, cookies, information use and user choices."/><PageHero eyebrow="PRIVACY POLICY" title="How information is handled on Finora." text="This policy explains the types of information that may be processed when you use the Finora website."/><section className="section legal-page"><p className="legal-updated">Last updated: September 14, 2026</p><h2>1. Overview</h2><p>Finora is an informational website covering credit cards, loans and personal finance. This policy describes how information may be collected, used and shared through the website and services connected to it.</p><h2>2. Information you provide</h2><p>Finora does not require an account to read ordinary editorial pages. If you contact us by email, we may receive the information you choose to include, such as your name, email address and message. We use that information to respond to the request and maintain appropriate business records.</p><h2>3. Analytics</h2><p>Finora may use Google Analytics to understand website traffic, page views, engagement and technical information about visits. Analytics services may use cookies, identifiers or similar technologies. The information is used to understand site performance and improve content and navigation.</p><h2>4. Advertising and Google AdSense</h2><p>If Google AdSense is enabled on Finora, Google and its partners may use cookies or similar technologies to provide, measure and personalize advertising, subject to applicable settings and policies. Advertising systems may process information such as IP address, browser information, device information, approximate location and interaction with ads. Finora does not control the information collected directly by third-party advertising systems.</p><h2>5. Cookies and similar technologies</h2><p>Cookies may be used for analytics, security, preferences and advertising. Some cookies are necessary for website functionality, while others help understand usage or deliver advertising. Your browser and certain privacy controls may allow you to limit or delete cookies.</p><h2>6. How information is used</h2><p>Information may be used to operate and secure the site, understand traffic, improve content, respond to inquiries, measure advertising and comply with legal obligations.</p><h2>7. Third-party services</h2><p>Finora may use third-party services such as Vercel for hosting, Google Tag Manager for tag management, Google Analytics for measurement and Google AdSense or other advertising services when enabled. Those services may process information according to their own privacy policies and terms.</p><h2>8. Your choices</h2><p>You can manage cookies through browser settings and, where available, through consent or privacy controls presented by the website or relevant advertising service. You may also use Google's advertising privacy controls and account settings where applicable.</p><h2>9. Children's privacy</h2><p>Finora is not directed to children under the age required by applicable law. We do not knowingly request personal information from children for ordinary use of the site.</p><h2>10. Changes to this policy</h2><p>We may update this policy when the website, analytics, advertising or applicable requirements change. The latest version will be published on this page with an updated date.</p><h2>11. Contact</h2><p>For privacy questions, use the contact information on our <Link className="inline-link" to="/contact">Contact page</Link>.</p></section></>}

function Terms(){return <><Seo title="Terms of Use | Finora" description="Read the terms governing use of the Finora financial information website."/><PageHero eyebrow="TERMS OF USE" title="The terms for using Finora." text="Please read these terms before relying on information published on the site."/><section className="section legal-page"><h2>1. Informational purpose</h2><p>Finora provides general educational information. The site is not a bank, lender, broker, financial adviser, tax adviser or law firm, and its content is not individualized financial, tax or legal advice.</p><h2>2. No guarantee</h2><p>We do not guarantee approval, rates, savings, eligibility, availability or any particular outcome from using information on the site. Providers control their own products, pricing, underwriting and application processes.</p><h2>3. Third-party providers</h2><p>Links may take you to third-party websites. Those websites have their own terms, privacy policies and disclosures. Finora is not responsible for information or transactions conducted on third-party websites.</p><h2>4. Accuracy and changes</h2><p>We aim to publish useful and accurate information, but financial products and regulations can change. You should verify current terms with the relevant provider or qualified professional.</p><h2>5. Intellectual property</h2><p>Unless otherwise stated, Finora's original text, branding and design are protected by applicable intellectual property laws. You may not reproduce substantial portions of the site without permission.</p><h2>6. Acceptable use</h2><p>You agree not to interfere with the website, attempt unauthorized access, use automated systems to abuse the service or use the site for unlawful purposes.</p><h2>7. Advertising</h2><p>Finora may display advertising and may receive referral or affiliate compensation. See the <Link className="inline-link" to="/advertiser-disclosure">Advertiser Disclosure</Link> for more information.</p><h2>8. Changes</h2><p>These terms may be updated as the site evolves. Continued use of the website after an update constitutes acceptance of the revised terms to the extent permitted by law.</p></section></>}

function App(){
 return <BrowserRouter><ScrollToTop/><Header/><main><Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/credit-cards" element={<CreditCardsPage/>}/>
  <Route path="/loans" element={<CategoryPage type="loans"/>}/>
  <Route path="/financial-guides" element={<CategoryPage type="guides"/>}/>
  <Route path="/news" element={<News/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/editorial-policy" element={<EditorialPolicy/>}/>
  <Route path="/advertiser-disclosure" element={<AdvertiserDisclosure/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
  <Route path="/terms" element={<Terms/>}/>
  {articles.map(a=><Route key={a.slug} path={"/article/"+a.slug} element={<Article article={a}/>}/>)}
  <Route path="*" element={<Home/>}/>
 </Routes></main><Footer/></BrowserRouter>
}
export default App;
