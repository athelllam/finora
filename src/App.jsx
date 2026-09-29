import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route, Link, Navigate, useLocation} from "react-router-dom";
import {ArrowRight, BookOpen, Check, ChevronDown, CreditCard, GraduationCap, Globe2, Lightbulb, Menu, ShieldCheck, Sparkles, UserRound, X} from "lucide-react";
import "./styles.css";

const articles = [
  {slug:"how-to-invest-in-brazil-selic", title:"How to invest in Brazil and earn 13.5% a year", category:"Brazil Investing", excerpt:"A deep guide to the Selic rate, fixed income, Tesouro Selic, taxes, risks and how international readers can understand investing in Brazil."},
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
  "how-to-invest-in-brazil-selic": {
    intro:"Brazil can offer unusually high nominal interest rates, but a headline such as 15% a year should never be treated as a guaranteed return. The Selic target was 13.75% per year from September 17, 2026, after a sequence of cuts from 15.00% at the start of 2026. This guide explains how Brazil's monetary policy works, how fixed-income investments relate to Selic, and how an investor can access Brazilian government bonds through Tesouro Direto.",
    sections:[
      ["The 15% headline: what it really means",["A 15% annual Selic environment does not mean every investor automatically earns 15% net. Tesouro Selic follows the daily Selic rate, and the investor's final return is affected by the path of rates, income tax, custody costs and the exact purchase and sale dates.","For a simple illustration, R$100,000 earning a constant 15% compounded annually would become R$115,000 before taxes and costs after one year. At a constant 13.75%, the same arithmetic would produce R$113,750 before taxes and costs. Real Tesouro Selic returns are based on the daily evolution of the Selic rate, not a promise of a fixed 15% coupon."]],
      ["What is the Selic rate?",["Selic is Brazil's benchmark interest rate and is set by the Central Bank's Monetary Policy Committee (Copom). It influences the cost of credit, savings and fixed-income investments throughout the economy. When Copom raises the rate, financial conditions generally become tighter; when it cuts, borrowing conditions generally become less restrictive.","The Central Bank's official historical series shows the recent cycle clearly: the target was 15.00% during much of 2025, reached 15.00% again at the beginning of 2026, then moved to 14.75%, 14.50%, 14.25%, 14.00% and finally 13.75% from September 17, 2026."]],
      ["Selic compared with recent years",["The Copom target ended 2022 at 13.75%, 2023 at 11.75%, and 2024 at 12.25%. It stayed at 15.00% through the end of 2025. The current 2026 rate is 13.75% after the September cut.","This history matters because a Tesouro Selic investment does not permanently lock in today's rate. If Selic falls, future daily accrual falls too. If rates remain elevated for longer, the investment continues to benefit from the higher-rate environment, subject to taxes and costs."]],
      ["What the market expects next",["The Central Bank's Focus survey is a survey of market expectations, not a promise from Copom. In the September 21, 2026 Focus readout, economists expected Selic at 13.50% at the end of 2026 and 12.00% at the end of 2027. Expectations can change quickly as inflation, fiscal conditions, exchange rates, economic activity and global financial conditions change.","For an investor, the practical lesson is not to build a plan that requires rates to stay at today's level. A diversified fixed-income strategy should remain sensible even if the Selic rate moves lower over the next few years."]],
      ["What is Tesouro Selic?",["Tesouro Selic is a Brazilian federal government bond offered through Tesouro Direto. It is a post-fixed security whose return follows the daily Selic rate, with the final return also reflecting the price conditions of the security and applicable taxes and costs.","Tesouro Direto describes Tesouro Selic as a product suited to liquidity and reserve-building needs. It is different from a fixed-rate bond: the investor does not lock a single annual percentage for the entire holding period. Instead, the security follows the benchmark over time."]],
      ["How to open an account and invest",["A Brazilian investor needs a CPF and an account with an institution authorized to participate in Tesouro Direto. The official program says the account can be opened through an eligible bank or brokerage, and many institutions complete the process online. Depending on the institution, investments can be made through the institution's app or through the Tesouro Direto investor portal.","A practical workflow is: choose an authorized bank or brokerage; complete the identity and suitability registration; transfer money to the investment account or use an available Pix flow; open the Tesouro Direto area; select Tesouro Selic; review the quoted price, maturity and costs; and confirm the order."]],
      ["Taxes and costs you need to understand",["The headline Selic rate is a gross nominal reference, not the investor's net return. Brazilian fixed-income investments can be subject to income tax, and Tesouro Direto currently lists a 0.20% per-year B3 custody fee, with an exemption for Tesouro Selic holdings up to R$10,000 per CPF and the fee applying to the excess. The financial institution may also charge its own fee, although many institutions advertise zero fees.","Taxes and costs are why a headline gross rate should not be presented as the investor's net return. Before publishing a return estimate, calculate the holding period, expected Selic path, income tax and custody cost."]],
      ["What about Tesouro IPCA+ and fixed-rate bonds?",["Tesouro IPCA+ combines inflation measured by IPCA with a fixed real-rate component, while Tesouro Prefixado bonds offer a rate determined at purchase. These securities can be useful for longer-term goals, but their market prices can move substantially before maturity when interest rates change.","Tesouro Selic is commonly used for liquidity and lower price sensitivity relative to longer-duration bonds, while IPCA+ and Prefixado can be more sensitive to market-rate changes if sold before maturity."]],
      ["Can an international investor simply buy Brazilian government bonds?",["Access rules are different for non-residents and depend on residency, tax status, account structure and the institution involved. This guide describes the standard retail Tesouro Direto route for people who have the required Brazilian registration and an eligible financial account. A foreign investor should not assume that opening a normal Brazilian retail account is available without additional documentation or regulatory steps.","Currency risk is also important. A U.S.-dollar investor can earn a positive BRL return and still lose money in USD terms if the Brazilian real depreciates enough against the dollar. Conversely, BRL appreciation can increase the USD value of a BRL investment."]],
      ["A practical example",["Suppose an investor starts with R$100,000 and, purely for illustration, the average Selic-linked return over a year were 13.75%. A simple gross illustration would be about R$13,750 before taxes, custody costs and the precise daily compounding effect. The actual Tesouro Selic result will differ because the rate can change during the year and because the security follows daily Selic accrual rather than a guaranteed annual coupon.","If the objective is a reserve rather than maximizing the nominal rate, liquidity, risk, taxes and the possibility of needing the money early can matter more than chasing an extra percentage point of headline yield."]],
      ["Bottom line",["Brazil's high interest-rate environment can make government fixed income attractive to investors who understand the currency, tax and rate risks. But 15% should be treated as a historical or scenario figure, not as a guaranteed current return. As of September 23, 2026, the Copom target is 13.75% a year, while the September Focus survey had the market expecting 13.50% at year-end 2026 and 12.00% at year-end 2027.","The most important steps are to verify the current Tesouro Direto price and rate, understand the tax treatment, choose a term that matches the goal, and avoid assuming that today's Selic rate will remain unchanged."]]
    ]
  },
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


// Editorial upgrades: practical examples, sources and reader questions make each guide
// more useful than a generic summary. All examples are illustrative, not current offers.
const articleUpgrades = {
  "how-to-compare-credit-cards": {
    "takeaway": "A useful card comparison starts with your spending pattern, borrowing behavior and the benefits you will actually use—not the biggest advertised reward.",
    "table": {
      "title": "Illustrative comparison framework",
      "headers": [
        "Factor",
        "What to compare",
        "Why it matters"
      ],
      "rows": [
        [
          "Annual fee",
          "$0 vs. fee-based",
          "Changes net reward value"
        ],
        [
          "Base rewards",
          "1.5%, 2%, points, etc.",
          "Determines value on everyday spend"
        ],
        [
          "Bonus categories",
          "Dining, travel, groceries",
          "Can materially change earnings"
        ],
        [
          "APR",
          "Regular and intro APR",
          "Important if you carry a balance"
        ],
        [
          "Redemption",
          "Cash, travel, transfers",
          "Determines practical value"
        ]
      ]
    },
    "exampleTitle": "Example: $24,000 annual spending",
    "example": "At 2% flat cash back, $24,000 of eligible spending produces $480 before fees. At 1.5%, it produces $360. A category card can beat both if enough of the spending qualifies at a higher rate, but an annual fee must be deducted from the result.",
    "sources": [
      [
        "Consumer Financial Protection Bureau",
        "https://www.consumerfinance.gov/consumer-tools/credit-cards/"
      ]
    ]
  },
  "what-to-check-before-a-loan": {
    "takeaway": "Compare the same amount and term across offers, then look at APR, fees, monthly payment and total repayment together.",
    "table": {
      "title": "Loan comparison checklist",
      "headers": [
        "Term",
        "Monthly payment",
        "Total cost",
        "Question"
      ],
      "rows": [
        [
          "Shorter",
          "Higher",
          "Usually lower interest",
          "Can the budget absorb it?"
        ],
        [
          "Longer",
          "Lower",
          "Usually higher interest",
          "Is the cash-flow relief worth it?"
        ],
        [
          "Variable rate",
          "Can change",
          "Uncertain",
          "What are the adjustment rules?"
        ]
      ]
    },
    "exampleTitle": "Example: same loan, different term",
    "example": "A $10,000 loan at 12% can have very different payments and total interest depending on whether it is repaid over 24 or 60 months. The longer term can make the payment easier to fit into a monthly budget while increasing the total interest paid.",
    "sources": [
      [
        "Consumer Financial Protection Bureau",
        "https://www.consumerfinance.gov/consumer-tools/personal-loans/"
      ]
    ]
  },
  "understanding-credit-decisions": {
    "takeaway": "A credit score is one input, not a universal approval rule. Underwriting can also consider income, obligations, application details and product-specific criteria.",
    "table": {
      "title": "Factors a lender may consider",
      "headers": [
        "Factor",
        "Possible role",
        "Why it varies"
      ],
      "rows": [
        [
          "Credit history",
          "Payment and account behavior",
          "Different scoring and underwriting models"
        ],
        [
          "Income",
          "Ability to support payments",
          "Documentation and thresholds vary"
        ],
        [
          "Existing obligations",
          "Debt burden",
          "Product and lender rules differ"
        ],
        [
          "Requested amount",
          "Size of new obligation",
          "Higher amounts can change risk assessment"
        ]
      ]
    },
    "exampleTitle": "Example: similar scores, different offers",
    "example": "Two applicants can have similar credit scores but different incomes, debt obligations or requested amounts. A lender can therefore approve both but offer different limits or APRs—or approve one and decline the other.",
    "sources": [
      [
        "Consumer Financial Protection Bureau",
        "https://www.consumerfinance.gov/ask-cfpb/what-is-a-credit-score-en-315/"
      ],
      [
        "FICO",
        "https://www.myfico.com/credit-education/whats-in-your-credit-score"
      ]
    ]
  },
  "building-a-healthier-credit-profile": {
    "takeaway": "A repeatable payment and monitoring routine is more useful than chasing a single credit-score trick.",
    "table": {
      "title": "Monthly credit routine",
      "headers": [
        "Task",
        "Frequency",
        "Purpose"
      ],
      "rows": [
        [
          "Review statements",
          "Weekly",
          "Catch errors or fraud"
        ],
        [
          "Check due dates",
          "Weekly",
          "Avoid missed payments"
        ],
        [
          "Review revolving balances",
          "Weekly",
          "Keep debt manageable"
        ],
        [
          "Review credit reports",
          "Periodically",
          "Identify inaccurate information"
        ]
      ]
    },
    "exampleTitle": "Example routine",
    "example": "A simple routine could take 15 minutes each week: review recent transactions, confirm upcoming due dates and check whether balances are moving in the intended direction. Periodically, review credit reports and dispute inaccurate information through the appropriate process.",
    "sources": [
      [
        "Consumer Financial Protection Bureau",
        "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/"
      ]
    ]
  },
  "credit-card-fees-explained": {
    "takeaway": "The fee with the biggest dollar impact is not always the annual fee. For someone carrying a balance, interest can dwarf rewards and other benefits.",
    "table": {
      "title": "Common credit-card costs",
      "headers": [
        "Cost",
        "When it can apply",
        "What to check"
      ],
      "rows": [
        [
          "Annual fee",
          "Every year",
          "Fee amount and benefits"
        ],
        [
          "Purchase APR",
          "When carrying balances",
          "Regular and intro rates"
        ],
        [
          "Balance transfer fee",
          "When transferring debt",
          "Percentage and promotional terms"
        ],
        [
          "Cash advance fee",
          "Cash advances",
          "Minimum and percentage fee"
        ],
        [
          "Foreign transaction fee",
          "Certain international purchases",
          "Rate and eligible transactions"
        ]
      ]
    },
    "exampleTitle": "Example: rewards versus interest",
    "example": "A card earning 2% on $10,000 of spending produces $200 in rewards. If a revolving balance generates $600 of interest over the same period, the reward is economically smaller than the borrowing cost. This is why APR should be evaluated before reward optimization.",
    "sources": [
      [
        "Consumer Financial Protection Bureau",
        "https://www.consumerfinance.gov/consumer-tools/credit-cards/"
      ]
    ]
  },
  "emergency-financing-guide": {
    "takeaway": "Emergency financing should be compared against the cost of the emergency, not just against how quickly money arrives.",
    "table": {
      "title": "Emergency options to compare",
      "headers": [
        "Option",
        "Potential advantage",
        "Question to ask"
      ],
      "rows": [
        [
          "Payment plan",
          "May avoid new debt",
          "Can the provider spread the bill?"
        ],
        [
          "Emergency savings",
          "No new interest",
          "Will using cash leave a safe reserve?"
        ],
        [
          "Personal loan",
          "Predictable installment",
          "What is the full APR and repayment?"
        ],
        [
          "Credit card",
          "Fast access",
          "What APR and fees apply?"
        ],
        [
          "Delay discretionary expense",
          "No borrowing cost",
          "Can the purchase wait?"
        ]
      ]
    },
    "exampleTitle": "Example: $2,000 unexpected bill",
    "example": "Before borrowing $2,000, compare a provider payment plan, an emergency-fund withdrawal and a loan. The relevant figures are the cash needed today, total cost, monthly payment and the effect on your remaining emergency reserve.",
    "sources": [
      [
        "Consumer Financial Protection Bureau",
        "https://www.consumerfinance.gov/consumer-tools/personal-loans/"
      ]
    ]
  },
  "chase-credit-cards-guide": {
    "takeaway": "Chase's lineup makes the most sense when you distinguish Freedom cash-back structures from Sapphire's travel-focused Ultimate Rewards ecosystem.",
    "table": {
      "title": "Selected Chase structures — verify current terms",
      "headers": [
        "Product",
        "Annual fee",
        "Core earning",
        "Distinctive feature"
      ],
      "rows": [
        [
          "Freedom Unlimited",
          "$0",
          "1.5% general; 3% dining/drugstores; 5% Chase Travel",
          "Simple base rate"
        ],
        [
          "Freedom Flex",
          "$0",
          "1% general plus bonus categories",
          "Rotating quarterly categories"
        ],
        [
          "Sapphire Preferred",
          "$95",
          "5x Chase Travel; 3x dining; 2x other travel",
          "Travel-oriented benefits"
        ]
      ]
    },
    "exampleTitle": "Example: Freedom Unlimited spending mix",
    "example": "Using the currently listed earning structure, $500 of dining, $500 of general purchases and $500 of eligible Chase Travel in a month would correspond to $15 + $7.50 + $25 = $47.50 in rewards value before considering the exact eligible transaction rules and redemption method.",
    "sources": [
      [
        "Chase Freedom Unlimited",
        "https://creditcards.chase.com/cash-back-credit-cards/freedom/unlimited"
      ],
      [
        "Chase Sapphire Preferred",
        "https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred"
      ],
      [
        "Chase Ultimate Rewards",
        "https://www.chase.com/personal/credit-cards/education/basics/how-chase-ultimate-rewards-works"
      ]
    ]
  },
  "capital-one-credit-cards-guide": {
    "takeaway": "Capital One offers a clear split between flat cash back, category cash back and miles-based travel cards, so spending pattern and travel usage are central to the comparison.",
    "table": {
      "title": "Selected Capital One structures — verify current terms",
      "headers": [
        "Product",
        "Annual fee",
        "Core earning",
        "Main comparison question"
      ],
      "rows": [
        [
          "Quicksilver",
          "$0",
          "1.5% cash back",
          "Do you value simplicity?"
        ],
        [
          "Savor",
          "$0",
          "3% grocery, dining & entertainment; 1% other",
          "How much spending fits bonus categories?"
        ],
        [
          "Venture",
          "$95",
          "2X miles",
          "Will travel rewards offset the fee?"
        ],
        [
          "Venture X",
          "$395",
          "2X miles plus premium travel benefits",
          "Will you use the travel credit and lounges?"
        ]
      ]
    },
    "exampleTitle": "Example: category versus flat rate",
    "example": "If $1,000 of monthly spending qualifies for Savor's currently listed 3% categories and another $1,000 earns 1%, the gross monthly rewards would be about $40. A 1.5% flat-rate card would produce about $30 on the same $2,000. Actual eligibility and terms must be verified with Capital One.",
    "sources": [
      [
        "Capital One credit cards",
        "https://www.capitalone.com/credit-cards/"
      ]
    ]
  },
  "bank-of-america-credit-cards-guide": {
    "takeaway": "Bank of America's cards combine category rewards, travel rewards and—on eligible programs—benefits connected to the broader banking relationship.",
    "table": {
      "title": "Selected Bank of America structures — verify current terms",
      "headers": [
        "Product",
        "Current structure",
        "What to watch"
      ],
      "rows": [
        [
          "Customized Cash Rewards",
          "6% first-year selected category; 2% groceries/wholesale clubs; 1% other",
          "First-year period and spending limits"
        ],
        [
          "Travel Rewards",
          "1.5 points per $1; additional travel earning through BofA Travel",
          "Redemption value and booking channel"
        ]
      ]
    },
    "exampleTitle": "Example: category calculation",
    "example": "Suppose post-intro spending is $600 per month in the selected category, $500 at grocery stores and $900 elsewhere. At 3%, 2% and 1% respectively, gross annual rewards would be $216 + $120 + $108 = $444 before applicable caps and exclusions.",
    "sources": [
      [
        "Bank of America Customized Cash Rewards",
        "https://www.bankofamerica.com/credit-cards/products/cash-back-credit-card/"
      ],
      [
        "Bank of America sample agreements",
        "https://www.bankofamerica.com/credit-cards/credit-card-agreements/"
      ],
      [
        "Bank of America Travel Center announcement",
        "https://newsroom.bankofamerica.com/content/newsroom/press-releases/2026/07/book-your-next-getaway--new-bank-of-america-travel-center-makes-.html"
      ]
    ]
  },
  "citi-credit-cards-guide": {
    "takeaway": "Citi's main comparison is between simple cash back and the more complex ThankYou Rewards ecosystem, where redemption and transfer rules can materially change value.",
    "table": {
      "title": "Selected Citi structures — verify current terms",
      "headers": [
        "Product",
        "Annual fee",
        "Core structure",
        "Key detail"
      ],
      "rows": [
        [
          "Double Cash",
          "$0",
          "2% total: 1% when buying + 1% when paying",
          "Payment behavior matters"
        ],
        [
          "Strata Premier",
          "Fee applies",
          "Elevated ThankYou earnings on travel and selected categories",
          "Travel ecosystem and transfers"
        ]
      ]
    },
    "exampleTitle": "Example: Double Cash mechanics",
    "example": "If you make $2,500 of eligible purchases and then pay those purchases according to the program rules, the current 1% + 1% structure corresponds to $50 in total cash back. If only the first 1% has posted, the additional payment-based reward has not yet been earned.",
    "sources": [
      [
        "Citi ThankYou cards",
        "https://www.citi.com/credit-cards/compare/thank-you-rewards-credit-cards/"
      ],
      [
        "Citi Double Cash rewards",
        "https://www.citi.com/credit-cards/credit-card-rewards/citi-double-cash-rewards-redeem"
      ],
      [
        "Citi transfer partners",
        "https://www.citi.com/credit-cards/money-management/citi-thankyou-rewards-faqs"
      ]
    ]
  },
  "discover-credit-cards-guide": {
    "takeaway": "Discover's cash-back model combines rotating quarterly categories with a 1% base rate and an automatic first-year Cashback Match for eligible new cardmembers.",
    "table": {
      "title": "Discover it Cash Back — current structure",
      "headers": [
        "Feature",
        "Current published detail",
        "Why it matters"
      ],
      "rows": [
        [
          "Annual fee",
          "$0",
          "No recurring fee"
        ],
        [
          "Bonus categories",
          "5% at different places each quarter when activated, up to the quarterly maximum",
          "Requires category tracking"
        ],
        [
          "Other purchases",
          "1% cash back",
          "Base rate outside bonus categories"
        ],
        [
          "First year",
          "Unlimited dollar-for-dollar Cashback Match",
          "Boosts first-year rewards"
        ]
      ]
    },
    "exampleTitle": "Example: first-year match",
    "example": "If an eligible new cardmember earns $300 in cash back during the first year, Discover's current description indicates an additional $300 match at the end of the first year, for $600 total from the matched earnings.",
    "sources": [
      [
        "Discover cash-back comparison",
        "https://www.discover.com/credit-cards/compare/cash-back/"
      ],
      [
        "Discover cash-back rewards",
        "https://www.discover.com/credit-cards/cash-back/cashback-bonus.html"
      ]
    ]
  },
  "american-express-credit-cards-guide": {
    "takeaway": "American Express spans cash back and Membership Rewards, from no-fee or lower-fee everyday cards to premium products whose economics depend heavily on benefit usage.",
    "table": {
      "title": "Selected American Express structures — verify current terms",
      "headers": [
        "Product",
        "Current published detail",
        "Main comparison"
      ],
      "rows": [
        [
          "Platinum Card",
          "$895 annual fee",
          "Travel credits, lounges and premium benefits"
        ],
        [
          "Blue Cash Preferred",
          "$0 first year, then $95",
          "6% U.S. supermarkets up to stated cap; 3% transit"
        ],
        [
          "Membership Rewards cards",
          "Points vary by card",
          "Redemption and transfer options"
        ]
      ]
    },
    "exampleTitle": "Example: annual fee break-even",
    "example": "If a $95-fee card generates $220 of incremental rewards compared with a no-fee alternative for your actual spending, the incremental value is $125 before other benefits and costs. The same calculation can be applied to a premium card with a much larger fee.",
    "sources": [
      [
        "American Express credit cards",
        "https://www.americanexpress.com/us/credit-cards/"
      ],
      [
        "American Express benefits",
        "https://www.americanexpress.com/en-us/benefits/"
      ],
      [
        "Membership Rewards guide",
        "https://www.americanexpress.com/en-us/credit-cards/credit-intel/membership-rewards-how-to-earn-and-redeem-points/"
      ]
    ]
  },
  "wells-fargo-credit-cards-guide": {
    "takeaway": "Wells Fargo offers both simple flat-rate rewards and category-oriented cards, making the first comparison question whether you value simplicity or category optimization.",
    "table": {
      "title": "Wells Fargo comparison framework",
      "headers": [
        "Product family",
        "Structure",
        "What to verify"
      ],
      "rows": [
        [
          "Active Cash",
          "2% Cash Rewards on net purchases",
          "Current fee, bonus and redemption terms"
        ],
        [
          "Autograph",
          "Category-oriented rewards",
          "Current category rates and annual fee"
        ],
        [
          "Autograph Journey",
          "Travel-focused",
          "Current fee, credits and travel benefits"
        ]
      ]
    },
    "exampleTitle": "Example: Active Cash arithmetic",
    "example": "At the current rewards-program rate of two cents in Cash Rewards per $1 of net purchases, $1,800 of eligible monthly spending would correspond to about $36 in rewards, or $432 over 12 months before exclusions, fees or promotions.",
    "sources": [
      [
        "Wells Fargo Active Cash rewards terms",
        "https://www.wellsfargo.com/credit-cards/active-cash/terms/"
      ],
      [
        "Wells Fargo credit-card agreements",
        "https://www.wellsfargo.com/credit-cards/agreements/"
      ]
    ]
  },
  "cash-back-credit-cards-guide": {
    "takeaway": "The best cash-back comparison is a personalized calculation of gross rewards minus annual fees, using the spending categories and caps that actually apply to you.",
    "table": {
      "title": "Cash-back structures",
      "headers": [
        "Structure",
        "Strength",
        "Trade-off"
      ],
      "rows": [
        [
          "Flat rate",
          "Simple and predictable",
          "May miss high category rates"
        ],
        [
          "Fixed categories",
          "High rewards in known categories",
          "Requires spending to fit"
        ],
        [
          "Rotating categories",
          "Potentially high quarterly rewards",
          "Requires activation and tracking"
        ],
        [
          "Premium rewards",
          "Benefits can add value",
          "Annual fee and complexity"
        ]
      ]
    },
    "exampleTitle": "Example: net annual value",
    "example": "A no-fee 1.5% card on $30,000 of eligible spending produces $450. A 2% card produces $600, a $150 difference. If the 2% card charges a $95 annual fee, its incremental value falls to $55 before considering any other benefits or costs.",
    "sources": [
      [
        "Consumer Financial Protection Bureau — credit cards",
        "https://www.consumerfinance.gov/consumer-tools/credit-cards/"
      ]
    ]
  },
  "travel-credit-cards-guide": {
    "takeaway": "Travel-card value comes from the interaction of earning, redemption, annual fees and benefits—not from the points rate alone.",
    "table": {
      "title": "Travel-card value checklist",
      "headers": [
        "Feature",
        "Question",
        "Possible cost"
      ],
      "rows": [
        [
          "Annual fee",
          "Will I use the benefits?",
          "Recurring fee"
        ],
        [
          "Travel credit",
          "Would I make the qualifying purchase anyway?",
          "Unused credit"
        ],
        [
          "Portal bonus",
          "Is portal pricing and flexibility acceptable?",
          "Booking restrictions"
        ],
        [
          "Transfers",
          "Will I use partner programs?",
          "Complexity / irreversible transfers"
        ],
        [
          "Lounge access",
          "How often will I use it?",
          "High fee if unused"
        ]
      ]
    },
    "exampleTitle": "Example: fee break-even",
    "example": "A $95-fee travel card that creates $180 of realistic incremental rewards and credits versus a no-fee alternative has an estimated $85 net incremental value. If the credits require purchases you would not otherwise make, reduce their value accordingly.",
    "sources": [
      [
        "Consumer Financial Protection Bureau — credit cards",
        "https://www.consumerfinance.gov/consumer-tools/credit-cards/"
      ]
    ]
  },
  "secured-credit-cards-guide": {
    "takeaway": "A secured card is still a credit account. Compare the deposit, reporting, fees, APR and path for returning the deposit before opening one.",
    "table": {
      "title": "Secured-card checklist",
      "headers": [
        "Feature",
        "What to check",
        "Why"
      ],
      "rows": [
        [
          "Deposit",
          "Minimum, maximum and refund rules",
          "Cash is tied up"
        ],
        [
          "Credit limit",
          "How it relates to deposit",
          "Determines available credit"
        ],
        [
          "Reporting",
          "Which bureaus receive data",
          "Relevant to credit-building goal"
        ],
        [
          "APR",
          "Regular borrowing cost",
          "Important if carrying a balance"
        ],
        [
          "Fees",
          "Annual, late and other charges",
          "Affects total cost"
        ]
      ]
    },
    "exampleTitle": "Example: deposit versus available credit",
    "example": "If an issuer requires a $500 refundable deposit and sets a $500 credit limit, the deposit is collateral for the account; it is not $500 of extra spending money. Spending $300 would still create a $300 credit-card balance that must be paid under the account terms.",
    "sources": [
      [
        "Consumer Financial Protection Bureau — credit cards",
        "https://www.consumerfinance.gov/consumer-tools/credit-cards/"
      ]
    ]
  },
  "personal-loan-apr-explained": {
    "takeaway": "APR is most useful when comparing similar loan products, but it should be read with fees, term, payment and total repayment.",
    "table": {
      "title": "Rate terms to separate",
      "headers": [
        "Term",
        "Meaning",
        "Use in comparison"
      ],
      "rows": [
        [
          "Interest rate",
          "Rate charged on principal",
          "Shows borrowing rate"
        ],
        [
          "APR",
          "Broader annualized credit cost under applicable rules",
          "Useful for comparing similar offers"
        ],
        [
          "Total repayment",
          "Sum of scheduled payments",
          "Shows cash outflow"
        ],
        [
          "Fees",
          "Origination and other charges",
          "Can change effective economics"
        ]
      ]
    },
    "exampleTitle": "Example: why total repayment matters",
    "example": "A $10,000 loan that requires $11,200 in scheduled payments costs $1,200 above principal, regardless of whether the monthly payment looks small. A longer term can make that payment smaller while increasing the total paid.",
    "sources": [
      [
        "Consumer Financial Protection Bureau — personal loans",
        "https://www.consumerfinance.gov/consumer-tools/personal-loans/"
      ]
    ]
  },
  "fixed-vs-variable-rates": {
    "takeaway": "A variable rate is not just a lower starting rate; it is a contract that exposes the borrower to future rate changes under defined rules.",
    "table": {
      "title": "Fixed versus variable",
      "headers": [
        "Feature",
        "Fixed",
        "Variable"
      ],
      "rows": [
        [
          "Rate movement",
          "Usually stable during fixed period",
          "Can reset"
        ],
        [
          "Budget predictability",
          "Higher",
          "Lower"
        ],
        [
          "Starting rate",
          "May be higher",
          "May be lower"
        ],
        [
          "Key documents",
          "Fixed-rate terms",
          "Index, margin, caps and reset rules"
        ]
      ]
    },
    "exampleTitle": "Example: two-point index increase",
    "example": "If a variable loan is defined as an index plus a fixed margin and the index rises by two percentage points, the rate can rise by two percentage points if the contract passes the full change through. Caps, floors and reset rules can modify the result.",
    "sources": [
      [
        "Consumer Financial Protection Bureau — variable rates",
        "https://www.consumerfinance.gov/ask-cfpb/what-is-a-variable-interest-rate-en-1953/"
      ]
    ]
  },
  "how-credit-utilization-works": {
    "takeaway": "Utilization is a moving ratio based on balances and limits. It should be managed alongside cash flow and payment reliability rather than treated as a single score target.",
    "table": {
      "title": "Utilization examples",
      "headers": [
        "Balance",
        "Limit",
        "Utilization"
      ],
      "rows": [
        [
          "$2,000",
          "$10,000",
          "20%"
        ],
        [
          "$500",
          "$10,000",
          "5%"
        ],
        [
          "$2,000",
          "$5,000",
          "40%"
        ]
      ]
    },
    "exampleTitle": "Example: same balance, different limit",
    "example": "A $2,000 balance is 20% of a $10,000 limit but 40% of a $5,000 limit. The balance did not change; the utilization ratio changed because the available limit changed.",
    "sources": [
      [
        "FICO",
        "https://www.myfico.com/credit-education/whats-in-your-credit-score"
      ],
      [
        "Consumer Financial Protection Bureau",
        "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/"
      ]
    ]
  },
  "loan-term-and-monthly-payment": {
    "takeaway": "The monthly payment tells you about cash flow. Total repayment and interest tell you about cost. You need both to compare loan terms.",
    "table": {
      "title": "Term trade-off",
      "headers": [
        "Term",
        "Monthly payment",
        "Total interest",
        "Main trade-off"
      ],
      "rows": [
        [
          "Short",
          "Higher",
          "Usually lower",
          "More monthly cash flow required"
        ],
        [
          "Medium",
          "Middle",
          "Middle",
          "Balance of cost and payment"
        ],
        [
          "Long",
          "Lower",
          "Usually higher",
          "Lower payment, longer debt period"
        ]
      ]
    },
    "exampleTitle": "Example: use the Finora calculator",
    "example": "Enter the same loan amount and APR, then test 24, 36, 48 and 60 months. The shorter terms should generally show higher payments and lower total interest, while longer terms show the opposite pattern under the same assumptions.",
    "sources": [
      [
        "Consumer Financial Protection Bureau — personal loans",
        "https://www.consumerfinance.gov/consumer-tools/personal-loans/"
      ]
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
    <Link to="/money-topics" onClick={()=>setOpen(false)}>Money Topics</Link>
    <Link to="/contact" onClick={()=>setOpen(false)}>Contact</Link>
    <Link to="/work-with-us" onClick={()=>setOpen(false)}>Work With Us</Link>
    <Link to="/about" onClick={()=>setOpen(false)}>About</Link>
   </nav>
   <Link className="header-cta" to="/credit-cards">Explore options <ArrowRight size={16}/></Link>
   <button className="menu-btn" aria-label="Open navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </header>
}

function Footer(){
 return <footer className="footer"><div className="footer-main">
  <div><Link className="logo light" to="/"><span>F</span>FINORA</Link><p>Independent financial information for clearer everyday decisions.</p></div>
  <div className="footer-links"><Link to="/credit-cards">Credit Cards</Link><Link to="/loans">Loans</Link><Link to="/financial-guides">Guides</Link><Link to="/money-topics">Money Topics</Link><Link to="/about">About</Link><Link to="/editorial-policy">Editorial Policy</Link><Link to="/contact">Contact</Link><Link to="/privacy-policy">Privacy Policy</Link><Link to="/terms">Terms</Link><Link to="/advertiser-disclosure">Advertiser Disclosure</Link></div>
 </div><div className="footer-disclosure"><b>Advertising & advertiser disclosure</b><p>Finora is an independent, advertising-supported editorial site. We may receive advertising revenue and, for some products or services, compensation from referral or affiliate partners. This compensation may affect how and where some offers appear. Not every financial product available in the market is included on this website.</p><p>We do not charge readers to access our editorial content. Product availability, terms, fees and approval are determined by the provider. Always review the provider's official terms before applying.</p></div>
 <div className="footer-bottom"><span>© 2026 Finora. Information only; not a bank or lender.</span><span><Link to="/privacy-policy">Privacy</Link> · <Link to="/terms">Terms</Link> · <Link to="/advertiser-disclosure">Advertising</Link></span></div>
 </footer>
}

const FINORA_LOAN_BANKS=[
  {name:"Wells Fargo",apr:6.74,range:"6.74%–26.74% APR",status:"available",note:"Lowest advertised APR; personalized rate depends on credit, amount and term."},
  {name:"Discover",apr:6.99,range:"6.99%–24.99% APR",status:"available",note:"Published range; actual APR depends on creditworthiness, amount and term."},
  {name:"American Express",apr:6.99,range:"6.99%–19.99% APR",status:"available",note:"Personal Loans are offered to eligible, pre-approved Card Members."},
  {name:"Citi",apr:9.99,range:"9.99%–17.49% APR",status:"available",note:"Published comparison range; eligibility and actual pricing vary."},
  {name:"Capital One",apr:6.99,range:"Through Discover",status:"available",note:"Capital One now directs personal-loan customers to Discover following the merger."},
  {name:"Chase",apr:null,range:"Personal loans not offered",status:"unavailable",note:"Chase states that it does not offer personal loans."},
  {name:"Bank of America",apr:null,range:"No personal loan rate listed",status:"unavailable",note:"No current unsecured personal-loan rate is used in this calculator."}
];

function LoanCalculator(){
  const [amount,setAmount]=useState(20000);
  const [apr,setApr]=useState(12);
  const [months,setMonths]=useState(48);
  const [extra,setExtra]=useState(0);
  const [selectedBank,setSelectedBank]=useState("");
  const [submitted,setSubmitted]=useState(true);
  const selectedLoanBank=FINORA_LOAN_BANKS.find(b=>b.name===selectedBank);
  const handleBankChange=(name)=>{
    setSelectedBank(name);
    const bank=FINORA_LOAN_BANKS.find(b=>b.name===name);
    if(bank?.apr!==null && bank?.apr!==undefined){ setApr(bank.apr); setSubmitted(true); }
  };
  const safeNumber=(value,fallback,min,max)=>{
    const n=Number(value);
    if(!Number.isFinite(n)) return fallback;
    return Math.min(max,Math.max(min,n));
  };
  const principal=safeNumber(amount,20000,100,1000000);
  const annualRate=safeNumber(apr,12,0,99.99);
  const term=safeNumber(months,48,1,120);
  const extraPayment=safeNumber(extra,0,0,100000);
  const monthlyRate=annualRate/100/12;
  const basePayment=monthlyRate===0 ? principal/term : principal*(monthlyRate*Math.pow(1+monthlyRate,term))/(Math.pow(1+monthlyRate,term)-1);
  const payment=Math.min(basePayment,principal+principal*monthlyRate);
  const total=payment*term;
  const interest=Math.max(0,total-principal);
  const accelerated=extraPayment>0 ? Math.max(0, payment+extraPayment) : payment;
  let remaining=principal, paid=0, interestWithExtra=0, periods=0;
  while(remaining>0.005 && periods<600){
    const interestPart=remaining*monthlyRate;
    const scheduled=Math.min(remaining+interestPart,accelerated);
    remaining=Math.max(0,remaining-(scheduled-interestPart));
    paid+=scheduled; interestWithExtra+=interestPart; periods++;
  }
  const displayMonths=periods;
  const extraSavings=Math.max(0,interest-interestWithExtra);
  return <section className="section calculator-section" id="loan-calculator">
    <div className="calculator-shell">
      <div className="calculator-heading">
        <div><div className="eyebrow blue">FREE FINANCING TOOL</div><h2>Loan payment <em>calculator.</em></h2></div>
        <div className="loan-bank-picker">
          <div className="loan-bank-picker-head"><span>Choose a lender</span><small>Select a bank to load its published starting APR.</small></div>
          <div className="loan-bank-buttons" role="group" aria-label="Choose a U.S. bank">
            {FINORA_LOAN_BANKS.filter(bank=>bank.status==="available").map(bank=>{
              const logoClass=bank.name.toLowerCase().replace(/\s+/g,"-").replace("american-express","amex");
              return <button key={bank.name} type="button" className={`loan-bank-button ${selectedBank===bank.name?"active":""}`} onClick={()=>handleBankChange(bank.name)} aria-pressed={selectedBank===bank.name}>
                <span className={`loan-bank-logo ${logoClass}`} aria-hidden="true">
                  {bank.name==="Wells Fargo"?"WF":bank.name==="Discover"?"DISCOVER":bank.name==="American Express"?"AMEX":bank.name==="Citi"?"Citi":"Capital One"}
                </span>
                <span className="loan-bank-button-copy"><strong>{bank.name}</strong><b>from {bank.apr.toFixed(2)}% APR</b></span>
              </button>
            })}
          </div>
          <p className="loan-bank-note">Rates shown are published starting APRs. Your actual rate can differ based on creditworthiness, loan amount, term and eligibility.</p>
          {selectedLoanBank && <div className="loan-bank-status"><strong>{selectedLoanBank.range}</strong><span>{selectedLoanBank.note}</span></div>}
        </div>
      </div>
      <form className="calculator-grid" onSubmit={e=>{e.preventDefault();setSubmitted(true)}}>
        <label><span>Loan amount</span><div className="input-prefix"><b>$</b><input type="number" min="100" max="1000000" step="100" value={amount} onChange={e=>{setAmount(e.target.value);setSubmitted(false)}} /></div></label>
        <label><span>APR</span><div className="input-prefix"><input type="number" min="0" max="99.99" step="0.01" value={apr} onChange={e=>{setApr(e.target.value);setSubmitted(false)}} /><b>%</b></div></label>
        <label><span>Term</span><select value={months} onChange={e=>{setMonths(e.target.value);setSubmitted(false)}}>{[12,24,36,48,60,72,84,96,120].map(m=><option key={m} value={m}>{m} months</option>)}</select></label>
        <label><span>Optional extra payment</span><div className="input-prefix"><b>$</b><input type="number" min="0" max="100000" step="10" value={extra} onChange={e=>{setExtra(e.target.value);setSubmitted(false)}} /></div></label>
        <button className="primary-btn calculator-submit" type="submit">Calculate <ArrowRight size={17}/></button>
      </form>
      {submitted && <div className="calculator-results" aria-live="polite">
        <div className="result-main"><small>ESTIMATED MONTHLY PAYMENT</small><strong>${payment.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}</strong><span>Based on ${principal.toLocaleString('en-US',{maximumFractionDigits:0})} at {annualRate.toFixed(2)}% APR for {term} months.</span></div>
        <div className="result-stat"><span>Total interest</span><b>${interest.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}</b></div>
        <div className="result-stat"><span>Total repayment</span><b>${total.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})}</b></div>
        {extraPayment>0 && <div className="result-stat"><span>With extra ${extraPayment.toLocaleString('en-US',{maximumFractionDigits:0})}/month</span><b>{displayMonths} months · save ~${extraSavings.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2})} interest</b></div>}
      </div>}
      <p className="calculator-note">Illustrative estimate only. Actual lender calculations can differ because of fees, payment timing, compounding conventions and contract terms.</p>
    </div>
  </section>
}

const FinoraSearchStyles=()=> <style>{`
.finora-search-section{padding-top:18px}.finora-search-shell{max-width:1040px;margin:0 auto}.finora-search-copy{text-align:center;margin-bottom:24px}.finora-search-copy h2{font-size:clamp(34px,5vw,58px);margin:6px 0 4px}.finance-word,.oracle-word{white-space:nowrap}.finance-fin,.oracle-ora,.search-word{color:#8ca55d}.finora-search-copy p{font-size:17px;color:#667085;margin:0}.finora-search-form{max-width:820px;margin:0 auto}.finora-search-box{display:flex;align-items:center;gap:12px;border:1px solid #d9dee7;background:#fff;border-radius:18px;padding:7px 18px;box-shadow:0 12px 35px rgba(16,24,40,.08)}.finora-search-box svg{width:22px;height:22px;color:#667085;flex:none}.finora-search-box input{border:0;outline:0;flex:1;min-width:0;font-size:17px;padding:14px 4px;color:#101828;background:transparent}.finora-search-box input::placeholder{color:#98a2b3}.finora-search-results{max-width:820px;margin:22px auto 0;border-top:1px solid #eaecf0;padding-top:8px}.search-result-card{display:block;padding:17px 0;border-bottom:1px solid #eaecf0;text-decoration:none}.search-result-card span{font-size:11px;text-transform:uppercase;letter-spacing:.08em;color:#667085}.search-result-card strong{display:block;font-size:18px;margin:5px 0;color:#101828}.search-result-card p{margin:0;color:#667085;line-height:1.55}.search-empty{color:#667085;text-align:center;padding:20px 0}.search-hint{max-width:820px;margin:13px auto 0;color:#98a2b3;font-size:12px;text-align:center}.brazil-invest-calculator{margin-top:10px;padding:28px;border:1px solid #e4e7ec;border-radius:22px;background:#fff;box-shadow:0 10px 30px rgba(16,24,40,.06)}.brazil-invest-calculator-header{display:flex;justify-content:space-between;gap:20px;align-items:end;margin-bottom:20px}.brazil-invest-calculator-header h3{margin:5px 0 0;font-size:26px}.brazil-invest-calculator-header p{margin:0;color:#667085;max-width:620px;line-height:1.55}.brazil-invest-input{width:100%;font-size:22px;font-weight:700;padding:14px 0;border:0;outline:none;box-sizing:border-box;background:transparent}.brazil-invest-calculator>.brazil-usd-input{margin-top:2px}.brazil-invest-input:focus{border-color:#16a34a;box-shadow:0 0 0 3px rgba(22,163,74,.12)}.brazil-invest-years{display:flex;gap:10px;margin-top:12px}.brazil-invest-year{flex:1;border:1px solid #d0d5dd;background:#fff;border-radius:11px;padding:12px 10px;font-weight:700;cursor:pointer}.brazil-invest-year.active{background:#16a34a;border-color:#16a34a;color:#fff}.brazil-invest-result{margin-top:20px;padding:20px;border-radius:16px;background:#f0fdf4}.brazil-invest-result small{display:block;color:#667085;text-transform:uppercase;letter-spacing:.08em;font-size:10px}.brazil-invest-result strong{display:block;font-size:36px;margin:3px 0}.brazil-invest-result span{color:#475467}.brazil-invest-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:14px}.brazil-invest-stat{padding:14px;border:1px solid #e4e7ec;border-radius:12px}.brazil-invest-stat small{display:block;color:#667085}.brazil-invest-stat strong{font-size:18px}.brazil-invest-note{margin:12px 0 0;color:#98a2b3;font-size:12px;line-height:1.5}@media(max-width:760px){.brazil-invest-calculator-header{display:block}.brazil-invest-calculator{padding:20px}.brazil-invest-grid{grid-template-columns:1fr}}.brazil-compound-calculator{margin:30px 0 38px;padding:28px;border:1px solid #dfe5ec;border-radius:22px;background:linear-gradient(180deg,#ffffff 0%,#f7faf8 100%);box-shadow:0 12px 34px rgba(16,24,40,.07)}.brazil-compound-head{display:grid;grid-template-columns:minmax(0,1fr) 180px;gap:24px;align-items:start;margin-bottom:22px}.brazil-compound-head h3{margin:5px 0 8px!important;font-size:28px!important}.brazil-compound-head p{margin:0;max-width:650px;color:#667085;font-size:15px;line-height:1.6}.brazil-compound-rate{border:1px solid #bbf7d0;background:#f0fdf4;border-radius:16px;padding:15px}.brazil-compound-rate small{display:block;color:#667085;font-size:10px;letter-spacing:.08em}.brazil-compound-rate strong{display:block;font-size:30px;color:#15803d;margin-top:3px}.brazil-compound-label{display:grid;gap:8px;font-weight:700;color:#344054;font-size:13px}.brazil-usd-input{display:flex;align-items:center;height:54px;background:#fff;border:1px solid #cfd8d3;border-radius:13px;padding:0 15px;gap:10px;box-sizing:border-box}.brazil-usd-input:focus-within{border-color:#16a34a;box-shadow:0 0 0 3px rgba(22,163,74,.12)}.brazil-usd-input b{font-size:14px;color:#475467}.brazil-usd-input input{border:0;outline:0;width:100%;font-size:23px;font-weight:750;background:transparent;color:#101828}.brazil-compound-calculator .brazil-invest-years{margin-top:12px}.brazil-compound-calculator .brazil-invest-year{min-height:46px}.brazil-compound-calculator .brazil-invest-result{margin-top:18px;background:#f0fdf4;border-color:#bbf7d0}.brazil-compound-calculator .brazil-invest-result strong{font-size:38px;color:#101828}.brazil-history{margin:36px 0 42px;padding:24px;border:1px solid #e3e8ef;border-radius:22px;background:#f7f9fc}.brazil-history-heading{display:flex;justify-content:space-between;align-items:end;gap:20px;margin-bottom:16px}.brazil-history-heading h3{margin:5px 0 0!important;font-size:25px!important}.brazil-history-heading>span{font-size:12px;color:#667085}.brazil-history .brazil-data-grid{margin:0}.brazil-history .brazil-data-grid div{transition:transform .18s ease,box-shadow .18s ease}.brazil-history .brazil-data-grid div:first-child{border-top:3px solid #94a3b8}.brazil-history .brazil-data-grid div:nth-child(2){border-top:3px solid #64748b}.brazil-history .brazil-data-grid div:nth-child(3){border-top:3px solid #475569}.brazil-history .brazil-data-grid div:nth-child(4){border-top:3px solid #334155}.brazil-history .brazil-data-grid div:nth-child(5){border-top:3px solid #16a34a}.brazil-history .brazil-data-grid div:nth-child(6){border-top:3px solid #15803d;background:#f0fdf4}.brazil-history .brazil-data-grid strong{font-size:26px}.brazil-history .brazil-data-grid div:nth-child(6) strong{color:#15803d}.selic-chart{margin:24px auto 32px;padding:18px 20px;border:1px solid #e3e8ef;border-radius:20px;background:#f7f9fc;box-shadow:0 10px 28px rgba(16,24,40,.07);overflow:hidden;max-width:920px}.selic-chart-head{display:flex;justify-content:space-between;align-items:flex-end;gap:20px;margin-bottom:8px}.selic-chart-head .eyebrow{color:#8ca55d}.selic-chart-head h3{margin:5px 0 0!important;color:#101828;font-size:22px!important}.selic-chart-highlight{min-width:108px;padding:8px 11px;border:1px solid #d7e4bd;border-radius:12px;background:#eef5e4;text-align:right}.selic-chart-highlight span{display:block;color:#667085;font-size:9px;text-transform:uppercase;letter-spacing:.08em}.selic-chart-highlight strong{display:block;color:#5f7738;font-size:21px;margin-top:2px}.selic-chart-wrap{width:100%;overflow:hidden}.selic-chart svg{display:block;width:100%;height:auto;min-width:560px}.selic-grid-line{stroke:#cbd5e1;stroke-opacity:.7;stroke-width:1}.selic-axis-label{fill:#667085;font-size:10px}.selic-drop-line{stroke:#8ca55d;stroke-opacity:.20;stroke-width:1;stroke-dasharray:3 5}.selic-line{stroke:#8ca55d;stroke-width:3.5;stroke-linecap:round;stroke-linejoin:round;filter:drop-shadow(0 0 7px rgba(140,165,93,.28))}.selic-area{opacity:.9}.selic-point{fill:#f7f9fc;stroke:#78954c;stroke-width:3}.selic-point-peak{fill:#8ca55d;stroke:#f7f9fc;stroke-width:4;filter:drop-shadow(0 0 7px rgba(179,201,130,.45))}.selic-year{fill:#475467;font-size:11px;font-weight:700}.selic-value{fill:#344054;font-size:11px;font-weight:800}.selic-value-peak{fill:#5f7738;font-size:12px}.selic-chart-foot{display:flex;justify-content:space-between;align-items:center;margin-top:-2px;color:#667085;font-size:11px}.selic-chart-foot span{display:flex;align-items:center;gap:7px}.selic-chart-foot i{display:inline-block;width:7px;height:7px;border-radius:50%;background:#a8c46f;box-shadow:0 0 8px rgba(168,196,111,.55)}.selic-chart-foot strong{color:#475467;font-weight:700}@media(max-width:760px){.selic-chart{padding:15px 16px;margin:20px 0 26px}.selic-chart-head{align-items:flex-start}.selic-chart-highlight{min-width:94px}.selic-chart-head h3{font-size:20px!important}.selic-chart-wrap{overflow-x:auto}.selic-chart svg{min-width:560px}.selic-chart-foot{margin-top:5px}}
.brazil-feature{padding-top:36px}.brazil-feature-header{display:grid;grid-template-columns:1fr 280px;gap:32px;align-items:end}.brazil-feature-header h2{font-size:clamp(34px,5vw,58px);margin:7px 0 12px}.brazil-lead{max-width:760px;font-size:18px;color:#667085;line-height:1.65}.brazil-rate-card{padding:22px;border:1px solid #e4e7ec;border-radius:18px;background:#f8fafc}.brazil-rate-card small{display:block;color:#667085;letter-spacing:.08em;font-size:11px}.brazil-rate-card strong{display:block;font-size:42px;margin:4px 0}.brazil-rate-card span{color:#667085;font-size:13px}.brazil-data-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:30px 0}.brazil-data-grid div{border:1px solid #eaecf0;border-radius:14px;padding:18px;background:#fff}.brazil-data-grid span{display:block;color:#667085;font-size:12px}.brazil-data-grid strong{display:block;font-size:24px;margin-top:5px}.brazil-article{max-width:900px;margin:0 auto;font-size:17px;line-height:1.75;color:#344054}.brazil-article h3{font-size:27px;line-height:1.2;color:#101828;margin:38px 0 12px}.brazil-article ol{padding-left:24px}.brazil-table-wrap{overflow-x:auto;margin:18px 0 8px}.brazil-article table{width:100%;border-collapse:collapse;min-width:600px}.brazil-article th,.brazil-article td{text-align:left;padding:13px;border-bottom:1px solid #eaecf0}.brazil-article th{background:#f8fafc;color:#475467}.brazil-provider-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:22px 0 28px}.brazil-provider-card{border:1px solid #e4e7ec;border-radius:16px;padding:20px;background:#fff}.brazil-provider-card h4{font-size:22px;margin:6px 0 8px;color:#101828}.brazil-provider-card p{font-size:15px;line-height:1.55;color:#667085;margin:0 0 14px}.brazil-provider-card a{display:block!important;margin-top:9px!important;font-weight:700}.brazil-provider-card .eyebrow{font-size:10px;margin:0}.brazil-article a{color:#16a34a;text-decoration:underline}.brazil-disclaimer{margin-top:28px;padding:18px;border-left:3px solid #98a2b3;background:#f8fafc}.brazil-article a{color:inherit;text-decoration:underline}

.loan-bank-offers{padding-top:8px}.loan-bank-list{display:grid;gap:12px}.loan-bank-row{display:grid;grid-template-columns:180px minmax(0,1fr) 190px;gap:24px;align-items:center;padding:22px 24px;border:1px solid #e3e8ef;border-radius:20px;background:#fff;box-shadow:0 9px 25px rgba(16,24,40,.045);transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease}.loan-bank-row:hover{transform:translateY(-2px);border-color:#cfd8d3;box-shadow:0 14px 30px rgba(16,24,40,.08)}.loan-offer-logo{height:62px;display:flex;align-items:center;justify-content:center;border-radius:14px;font-weight:900;letter-spacing:-.05em;padding:0 12px;text-align:center;box-sizing:border-box}.loan-offer-logo.wells-fargo{background:#c8102e;color:#fff;font-size:15px}.loan-offer-logo.discover{background:#f7f9fc;color:#183b63;border:1px solid #e3e8ef;font-size:15px;position:relative}.loan-offer-logo.discover:after{content:"";width:13px;height:13px;border-radius:50%;background:#f58220;margin-left:5px}.loan-offer-logo.amex{background:#1677b8;color:#fff;font-size:11px;letter-spacing:.05em}.loan-offer-logo.citi{background:#f7f9fc;color:#17365d;border:1px solid #e3e8ef;font-family:Arial,sans-serif;font-size:27px;position:relative}.loan-offer-logo.citi:before{content:"";position:absolute;top:13px;width:45px;height:13px;border-top:4px solid #e31837;border-radius:50%}.loan-offer-logo.capital-one{background:#f7f9fc;color:#17365d;border:1px solid #e3e8ef;font-size:15px}.loan-offer-copy{min-width:0}.loan-offer-top{display:flex;justify-content:space-between;align-items:center;gap:15px}.loan-offer-name{font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:#667085;font-weight:800}.loan-offer-rate{font-size:15px;font-weight:850;color:#15803d;white-space:nowrap}.loan-offer-copy h3{margin:6px 0 6px;font-size:20px;color:#101828}.loan-offer-copy p{margin:0;color:#667085;font-size:13px;line-height:1.6}.loan-offer-action{display:flex;flex-direction:column;align-items:stretch;gap:7px}.loan-offer-button{justify-content:center;display:inline-flex!important;align-items:center;gap:7px;text-decoration:none;white-space:nowrap}.loan-offer-action>span{text-align:center;font-size:10px;color:#98a2b3}.loan-offer-disclaimer{margin:14px 2px 0;color:#98a2b3;font-size:11px;line-height:1.55}@media(max-width:850px){.loan-bank-row{grid-template-columns:110px minmax(0,1fr);gap:18px}.loan-offer-action{grid-column:2}.loan-offer-button{width:max-content}.loan-offer-action>span{text-align:left}}@media(max-width:600px){.loan-bank-row{grid-template-columns:1fr;padding:18px}.loan-offer-logo{width:150px}.loan-offer-top{display:block}.loan-offer-rate{display:block;margin-top:5px}.loan-offer-action{grid-column:auto}.loan-offer-button{width:100%}.loan-offer-action>span{text-align:center}}
@media(max-width:760px){.loan-bank-buttons{grid-template-columns:repeat(2,minmax(0,1fr))}.loan-bank-picker{padding:14px}.brazil-compound-head{grid-template-columns:1fr}.brazil-history{padding:18px}.brazil-history-heading{display:block}.brazil-history-heading>span{display:block;margin-top:6px}.brazil-provider-grid{grid-template-columns:1fr}.finora-search-box{border-radius:15px;padding-left:13px;padding-right:13px}.brazil-feature-header{grid-template-columns:1fr}.brazil-data-grid{grid-template-columns:repeat(2,1fr)}.brazil-article{font-size:16px}.brazil-article h3{font-size:24px}}
`}</style>;

const FINORA_SEARCH_TAGS={
  "how-to-compare-credit-cards":["credit card","credit cards","card","cards","compare cards","best card","choose card","apply","application","apr","interest","annual fee","fee","fees","rewards","cashback","cash back","points","miles","benefits","credit limit","spending","bank card"],
  "what-to-check-before-a-loan":["loan","loans","personal loan","borrow","borrowing","debt","financing","finance","apr","interest rate","monthly payment","payment","repayment","term","lender","lending","emergency loan","credit"],
  "understanding-credit-decisions":["credit decision","credit application","approval","approved","denied","underwriting","lender","credit score","score","credit report","income","debt","eligibility","qualification","application"],
  "building-a-healthier-credit-profile":["credit building","build credit","improve credit","credit health","credit profile","credit score","score","payment history","late payment","balances","utilization","credit report","debt","financial habits"],
  "credit-card-fees-explained":["card fees","credit card fees","annual fee","balance transfer","cash advance","foreign transaction","late fee","fee","fees","apr","promotional apr","interest","credit card cost"],
  "emergency-financing-guide":["emergency financing","emergency loan","unexpected expense","urgent loan","borrow money","cash emergency","medical bill","repair bill","personal loan","payment plan","emergency fund","short term loan"],
  "chase-credit-cards-guide":["chase","chase cards","chase credit card","freedom unlimited","freedom flex","sapphire","sapphire preferred","ultimate rewards","points","travel rewards","cash back","cashback","annual fee","credit card"],
  "capital-one-credit-cards-guide":["capital one","capital one cards","quicksilver","savor","venture","venture x","miles","cash back","cashback","travel card","travel rewards","rewards","annual fee","credit card"],
  "bank-of-america-credit-cards-guide":["bank of america","bofa","boa","customized cash rewards","travel rewards","unlimited cash rewards","preferred rewards","banking relationship","cash back","cashback","travel","credit card","annual fee"],
  "citi-credit-cards-guide":["citi","citibank","citi cards","double cash","thankyou rewards","thank you points","strata","cash back","cashback","points","travel","rewards","credit card","annual fee"],
  "discover-credit-cards-guide":["discover","discover card","discover it","cash back","cashback","5 percent","5%","rotating categories","cash rewards","credit card","rewards","annual fee","apr"],
  "american-express-credit-cards-guide":["american express","amex","amex card","platinum","gold card","blue cash","membership rewards","mr points","cash back","cashback","travel","lounge","premium card","annual fee"],
  "wells-fargo-credit-cards-guide":["wells fargo","wells fargo card","active cash","autograph","reflect","cash rewards","cash back","cashback","travel","rewards","credit card","annual fee","apr"],
  "cash-back-credit-cards-guide":["cash back","cashback","cash rewards","flat rate","category rewards","rewards rate","2% cash back","1.5%","spending rewards","credit card rewards","redemption"],
  "travel-credit-cards-guide":["travel card","travel credit card","travel rewards","points","miles","airline miles","hotel points","transfer partners","airport lounge","travel benefits","foreign transaction fee","annual fee"],
  "secured-credit-cards-guide":["secured card","secured credit card","build credit","rebuild credit","bad credit","poor credit","credit building","security deposit","deposit","credit limit","starter card","credit report"],
  "personal-loan-apr-explained":["apr","annual percentage rate","loan apr","loan interest","interest rate","personal loan","borrowing cost","finance charge","fees","total repayment","loan cost"],
  "fixed-vs-variable-rates":["fixed rate","variable rate","fixed interest","variable interest","interest rate risk","benchmark rate","index rate","rate changes","loan rate","mortgage rate","borrowing"],
  "how-credit-utilization-works":["credit utilization","utilization ratio","credit limit","credit card balance","available credit","30 percent","30%","credit score","balances","revolving credit"],
  "loan-term-and-monthly-payment":["loan term","loan duration","monthly payment","payment amount","total interest","total cost","short term loan","long term loan","repayment period","amortization","personal loan"],
  "how-to-invest-in-brazil-selic":["invest","investing","investment","investments","investing in brazil","brazil investment","brazil investing","brazilian investment","selic","interest rate","fixed income","fixed-income","government bonds","government bond","treasury","treasury bonds","tesouro direto","tesouro selic","brazil bonds","brazilian bonds","bond","bonds","yield","return","15 percent","15%","13.75%","copom","central bank","brazil","real","brl","taxes","cpf"]
};

function normalizeSearchText(value){
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9%$]+/g," ").trim();
}

function FinoraSearch(){
  const [query,setQuery]=useState("");
  const normalizedQuery=normalizeSearchText(query);
  const queryWords=normalizedQuery.split(/\s+/).filter(word=>word.length>1);
  const localMatches=articles.map(article=>{
    const tags=(FINORA_SEARCH_TAGS[article.slug]||[]).map(normalizeSearchText);
    const haystack=normalizeSearchText(`${article.title} ${article.excerpt} ${article.category}`);
    let score=0;
    if(normalizedQuery && haystack.includes(normalizedQuery)) score+=40;
    tags.forEach(tag=>{if(normalizedQuery.includes(tag)||tag.includes(normalizedQuery)) score+=20;});
    queryWords.forEach(word=>{
      if(haystack.includes(word)) score+=7;
      tags.forEach(tag=>{if(tag.includes(word)||word.includes(tag)) score+=4;});
    });
    return {...article,score};
  }).filter(article=>normalizedQuery.length>1 && article.score>0).sort((a,b)=>b.score-a.score).slice(0,3);

  return <section className="section finora-search-section"><div className="finora-search-shell"><div className="finora-search-copy"><div className="eyebrow blue">FINORA SEARCH</div><h2><span className="finance-word"><span className="finance-fin">Fin</span>ance</span> <span className="oracle-word"><span className="oracle-ora">Ora</span>cle</span> <span className="search-word">Search</span>.</h2><p>Discover everything about personal finance</p></div><form className="finora-search-form" onSubmit={e=>e.preventDefault()}><div className="finora-search-box"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m21 21-4.4-4.4m2.4-5.6a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg><input aria-label="Search Finora personal finance guides" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Type anything you want to know" /></div></form>{normalizedQuery.length>1 && <div className="finora-search-results" aria-live="polite">{localMatches.length ? localMatches.map(article=><Link key={article.slug} to={`/article/${article.slug}`} className="search-result-card"><span>{article.category}</span><strong>{article.title}</strong><p>{article.excerpt}</p></Link>) : <p className="search-empty">No Finora guide matches that question yet. Try terms like <b>credit cards</b>, <b>loans</b>, <b>APR</b>, <b>cash back</b>, <b>travel rewards</b>, <b>credit score</b> or <b>investing</b>.</p>}</div>}{normalizedQuery.length<=1 && <p className="search-hint">Search by topic, question, bank, product, fee, reward, loan term or credit concept.</p>}</div></section>
}function BrazilInvestingArticle(){
  const [brazilYears,setBrazilYears]=useState(1);
  const [brazilAmount,setBrazilAmount]=useState("100000");
  const formatBrazilUsd=(value)=>Math.max(0,Math.round(value||0)).toLocaleString("de-DE");
  const setBrazilAmountValue=(value)=>{
    const digits=String(value).replace(/\D/g,"").slice(0,12);
    setBrazilAmount(digits||"0");
  };
  const brazilPrincipal=Math.min(1000000000,Math.max(0,Number(brazilAmount)||0));
  const brazilFuture=brazilPrincipal*Math.pow(1.1375,brazilYears);
  const brazilInterest=brazilFuture-brazilPrincipal;
  const brazilAmountDisplay=formatBrazilUsd(brazilPrincipal);
  return <section className="section brazil-feature"><div className="brazil-feature-header"><div><div className="eyebrow">BRAZIL INVESTING GUIDE</div><h2>How to invest in Brazil and earn <em>13.5% a year.</em></h2><p className="brazil-lead">A deep guide to Selic, Brazilian fixed income, Tesouro Direto, taxes, account opening, rate cycles and the risks an international investor needs to understand.</p></div><div className="brazil-rate-card"><small>CURRENT COPOM TARGET</small><strong>13.75%</strong><span>per year · effective from September 17, 2026</span></div></div><SelicHistoryChart/><div className="brazil-article"><p>Brazil can offer unusually high nominal interest rates, but 15% should never be presented as a guaranteed return. The current Copom target is 13.75% a year. The market's September 2026 Focus expectations put the year-end 2026 Selic at 13.50% and the year-end 2027 rate at 12.00%.</p><div className="brazil-compound-calculator"><div className="brazil-compound-head"><div><div className="eyebrow">COMPOUND INTEREST CALCULATOR</div><h3>See what your money could become.</h3><p>Enter an initial amount and select a holding period. This illustration compounds the full amount annually at a constant 13.75% rate.</p></div><div className="brazil-compound-rate"><small>ASSUMED ANNUAL RATE</small><strong>13.75%</strong></div></div><label className="brazil-compound-label"><span>Initial investment</span><div className="brazil-usd-input"><b>USD</b><input aria-label="Initial investment in US dollars" inputMode="numeric" value={brazilAmountDisplay} onChange={e=>setBrazilAmount(e.target.value)}/></div></label><div className="brazil-invest-years"><button type="button" className={brazilYears===1?"brazil-invest-year active":"brazil-invest-year"} onClick={()=>setBrazilYears(1)}>1 Year</button><button type="button" className={brazilYears===2?"brazil-invest-year active":"brazil-invest-year"} onClick={()=>setBrazilYears(2)}>2 Years</button><button type="button" className={brazilYears===3?"brazil-invest-year active":"brazil-invest-year"} onClick={()=>setBrazilYears(3)}>3 Years</button></div><div className="brazil-invest-result"><small>PROJECTED VALUE AFTER {brazilYears} {brazilYears===1?"YEAR":"YEARS"}</small><strong>USD {formatBrazilUsd(brazilFuture)}</strong><span>Starting from USD {formatBrazilUsd(brazilPrincipal)} at a constant 13.75% annual compound rate.</span></div><div className="brazil-invest-grid"><div className="brazil-invest-stat"><small>Initial amount</small><strong>USD {formatBrazilUsd(brazilPrincipal)}</strong></div><div className="brazil-invest-stat"><small>Interest earned</small><strong>USD {formatBrazilUsd(brazilInterest)}</strong></div></div><p className="brazil-invest-note">Illustration only. It assumes the 13.75% rate stays unchanged for the entire period and does not account for taxes, fees, inflation or exchange-rate movements. A 13.75% return is not guaranteed.</p></div><h3>Why Selic matters</h3><p>Selic is Brazil's benchmark interest rate. It influences the cost of credit and the returns available across Brazilian fixed-income products. When the Central Bank tightens policy, cash and floating-rate investments generally benefit from higher rates; when the bank cuts, the future accrual on Selic-linked products declines.</p><h3>Why the rate moved from 15% to 13.75%</h3><p>The Central Bank's official history shows a sequence of cuts in 2026: 15.00% in January, 14.75% in March, 14.50% in April, 14.25% in June, 14.00% in August and 13.75% in September. The rate is still high, but the direction during 2026 has been downward.</p><h3>What is Tesouro Selic?</h3><p>Tesouro Selic is a federal government bond available through Tesouro Direto. It is post-fixed: its return follows the daily Selic rate rather than locking a single annual rate. This makes it fundamentally different from a fixed-rate bond and useful for understanding liquidity-oriented portfolios.</p><h3>How to open your account and invest step by step</h3><p>The current official route is straightforward, but the exact screens depend on the institution. The Brazilian government says investors can access Tesouro Direto through an authorized bank or brokerage, while the Tesouro Direto website also provides a list of participating institutions. The government service lists CPF, identity documentation, proof of address, registration information and a bank account among the common requirements.</p><ol><li><strong>Get a CPF if you need one.</strong> Brazilian citizens and eligible foreign individuals can obtain a CPF through Receita Federal. <a href="https://www.gov.br/receitafederal/pt-br/assuntos/meu-cpf" target="_blank" rel="noopener noreferrer">Check the official CPF information</a>.</li><li><strong>Choose where you will invest.</strong> You can use a participating bank or brokerage. <a href="https://tesourodireto.com.br/como-investir/bancos-e-corretoras" target="_blank" rel="noopener noreferrer">See the official list of Tesouro Direto banks and brokerages</a>.</li><li><strong>Complete your account registration.</strong> Expect identity verification, personal information, tax residency information and an investor-profile questionnaire. The institution may request additional documents before enabling investments.</li><li><strong>Fund the account.</strong> Transfer money from your bank account or use the payment method offered by the institution. The current Tesouro Direto service also supports a direct Cad&Pag route for eligible users with a Gov.br account at the required security level.</li><li><strong>Open the investments area.</strong> Look for “Investments”, “Renda Fixa” or “Tesouro Direto”. Review the available securities, maturity dates, quoted rates and applicable costs before confirming.</li><li><strong>Select the security.</strong> For a Selic-linked strategy, select Tesouro Selic. For other objectives, compare Prefixado and IPCA+ securities rather than assuming that Tesouro Selic is appropriate for every horizon.</li><li><strong>Confirm the order.</strong> Enter the amount, review the order summary and authorize it using the institution's security process.</li><li><strong>Monitor the investment.</strong> Since August 17, 2026, the standalone Tesouro Direto app has been discontinued. Investors can use the official Portal do Investidor or their financial institution's app to view the portfolio and place transactions.</li></ol><h3>Where can you open an account?</h3><p>Below are examples of official channels. Finora does not receive an application or approve an account; the bank or brokerage handles the entire onboarding process.</p><div className="brazil-provider-grid"><div className="brazil-provider-card"><div className="eyebrow">GOVERNMENT</div><h4>Tesouro Direto</h4><p>Official information, investor portal, available securities, participating institutions and investment procedures.</p><a href="https://tesourodireto.com.br/" target="_blank" rel="noopener noreferrer">Visit Tesouro Direto →</a><a href="https://www.gov.br/pt-br/servicos/comprar-titulos-publicos-federais" target="_blank" rel="noopener noreferrer">Government investment service →</a></div><div className="brazil-provider-card"><div className="eyebrow">DIGITAL BANK</div><h4>Nubank</h4><p>Nubank offers Tesouro Direto and CDBs through its app. Account opening and investment availability are subject to its current eligibility and verification process.</p><a href="https://nubank.com.br/" target="_blank" rel="noopener noreferrer">Open or access Nubank →</a><a href="https://nubank.com.br/nu/investimentos/tesouro-direto" target="_blank" rel="noopener noreferrer">Nubank Tesouro Direto →</a></div><div className="brazil-provider-card"><div className="eyebrow">BANK</div><h4>Banco do Brasil</h4><p>BB allows customers to invest in Tesouro Direto through its investment platforms and also offers CDBs, LCIs, LCAs, funds and other products.</p><a href="https://bb.com.br/" target="_blank" rel="noopener noreferrer">Visit Banco do Brasil →</a><a href="https://blog.bb.com.br/tesouro-direto-o-que-e-e-como-comecar-a-investir/" target="_blank" rel="noopener noreferrer">BB: how to invest in Tesouro Direto →</a></div></div><h3>How to invest through Nubank</h3><p>Nubank's current instructions put both Tesouro Direto and CDB investments inside the app. If you do not already have a Nubank account, start through the official Nubank website or app and complete its identity-verification process. Once the account is active, the investment flow is handled inside the app.</p><ol><li>Open the Nubank app and sign in.</li><li>Go to the <strong>Planning</strong> area, identified by the dollar-sign icon, and select <strong>Investments</strong>.</li><li>For government bonds, select <strong>Tesouro Direto</strong>. For bank-issued fixed income, select <strong>CDB</strong>.</li><li>Review the available securities. For Tesouro Direto, compare the title type, maturity, quoted return and other conditions. For a CDB, check whether it is CDI-linked, fixed-rate or inflation-linked, along with its maturity and liquidity.</li><li>Open the product details before applying. Check the issuer, maturity, liquidity, taxation and any relevant fees.</li><li>Tap <strong>Apply</strong>, enter the amount and confirm with your four-digit password.</li><li>After processing, monitor the position in the Investments area. Nubank states that its CDBs are subject to income tax and, when applicable, IOF; the exact tax treatment depends on the product and holding period.</li></ol><p><a href="https://nubank.com.br/nu/investimentos/tesouro-direto" target="_blank" rel="noopener noreferrer">See Nubank's current Tesouro Direto instructions</a> · <a href="https://nubank.com.br/nu/investimentos/cdb" target="_blank" rel="noopener noreferrer">See Nubank's current CDB instructions</a></p><h3>How to invest through Banco do Brasil</h3><p>Banco do Brasil says customers can open a digital account through the App BB. The bank's published onboarding flow asks the customer to choose “Quero ser cliente”, provide CPF and contact details, submit document photos and a selfie, and wait for validation. Once the account is active, investments can be accessed through the investment area or App Investimentos BB.</p><ol><li>Download the official <strong>App BB</strong> and choose <strong>Quero ser cliente</strong> if you are not already a customer.</li><li>Provide your CPF, contact information and other requested registration details.</li><li>Submit the requested identity documents and selfie. The bank may request additional information such as proof of residence or income during onboarding.</li><li>After the account is approved, open <strong>Investimentos</strong> in the app.</li><li>For Tesouro Direto, open the Tesouro Directo area, complete any required Tesouro Nacional registration and review the available titles.</li><li>Select the security, enter the amount and confirm the purchase.</li><li>For other fixed-income products, the BB app also provides access to products such as CDB, LCI and LCA. Compare the rate, maturity, liquidity, issuer and tax treatment before applying.</li></ol><p><a href="https://bb.com.br/" target="_blank" rel="noopener noreferrer">Open Banco do Brasil's official website</a> · <a href="https://blog.bb.com.br/tesouro-direto-o-que-e-e-como-comecar-a-investir/" target="_blank" rel="noopener noreferrer">Read BB's Tesouro Direto guide</a></p><h3>Other investment options</h3><p>Tesouro Direto is only one part of Brazil's investment market. Depending on your objective and investor profile, you may encounter CDBs, LCIs, LCAs, investment funds, stocks, ETFs and other securities. The <a href="https://www.gov.br/investidor/pt-br" target="_blank" rel="noopener noreferrer">CVM's official Investor Portal</a> explains investment categories, how to invest and precautions. The <a href="https://edu.b3.com.br/tipos-de-investimentos/renda-fixa" target="_blank" rel="noopener noreferrer">B3 Education portal</a> also provides free material about fixed income and other investment products.</p><p>For an investor comparing a CDB with Tesouro Selic, do not look only at the advertised percentage. Compare the reference rate, maturity, liquidity, issuer risk, taxes and whether the quoted rate is fixed or linked to CDI/Selic. For stocks and ETFs, the price can fluctuate and the investor can lose part of the principal.</p><h3>Taxes, custody fees and the real return</h3><p>The headline Selic rate is a gross nominal reference, not the investor's net return. Brazilian fixed-income investments can be subject to income tax, and Tesouro Direto currently lists a 0.20% per-year B3 custody fee, with Tesouro Selic exempt from custody fees on holdings up to R$10,000 per CPF and the fee applying to the excess. Your institution may have its own fee structure.</p><h3>15% versus 13.75%: a simple illustration</h3><div className="brazil-table-wrap"><table><thead><tr><th>Starting amount</th><th>Assumed annual rate</th><th>Gross one-year value*</th><th>Gross interest*</th></tr></thead><tbody><tr><td>R$100,000</td><td>15.00%</td><td>R$115,000</td><td>R$15,000</td></tr><tr><td>R$100,000</td><td>13.75%</td><td>R$113,750</td><td>R$13,750</td></tr></tbody></table></div><small>*Simple one-year illustration before income tax, custody costs and the exact daily path of Selic. It is not a promised Tesouro Selic return.</small><h3>What the forecast means for an investor</h3><p>The Focus survey is a market expectation, not a commitment from Copom. If rates fall toward the market's expected 12% area in 2027, new money invested in Selic-linked products would generally earn less than it would at today's rate. That is one reason to distinguish between a product that follows Selic and a fixed-rate security that locks a rate at purchase.</p><h3>What international investors need to consider</h3><p>Non-residents face additional account, tax and regulatory considerations. A Brazilian-real investment also creates currency risk: a dollar-based investor can earn a positive BRL return and still lose money in USD terms if the real depreciates enough. This page describes the standard retail route for investors who can establish the required Brazilian registration and eligible financial account; it is not a guarantee that every non-resident can use the same process.</p><h3>Sources and verification</h3><p><a href="https://www.gov.br/receitafederal/pt-br/assuntos/meu-cpf" target="_blank" rel="noreferrer">Receita Federal — CPF</a> · <a href="https://www.bcb.gov.br/controleinflacao/historicotaxasjuros" target="_blank" rel="noreferrer">Banco Central — Selic history</a> · <a href="https://www.tesourodireto.com.br/conheca/" target="_blank" rel="noreferrer">Tesouro Direto — rules and investing</a> · <a href="https://www.tesourodireto.com.br/ca/produtos/titulos/selic" target="_blank" rel="noreferrer">Tesouro Selic — official product page</a></p><div className="brazil-disclaimer"><strong>Important:</strong> This article is educational. Rates, taxes, product availability and account rules can change. Verify current terms with Banco Central, Tesouro Direto and your financial institution before investing. A 13.5% annual return is not guaranteed.</div></div></section>
}

function SelicHistoryChart(){
  const points=[
    {year:'2021',rate:9.25},{year:'2022',rate:13.75},{year:'2023',rate:11.75},
    {year:'2024',rate:12.25},{year:'2025',rate:15.00},{year:'2026',rate:13.75}
  ];
  const min=8.5,max=15.5,left=52,right=738,top=28,bottom=214;
  const x=i=>left+(i*(right-left)/(points.length-1));
  const y=v=>bottom-((v-min)/(max-min))*(bottom-top);
  const line=points.map((p,i)=>`${x(i)},${y(p.rate)}`).join(' ');
  const area=`${left},${bottom} ${line} ${right},${bottom}`;
  return <div className="selic-chart">
    <div className="selic-chart-head">
      <div><div className="eyebrow">SELIC RATE HISTORY</div><h3>Brazil's benchmark rate over time.</h3></div>
      <div className="selic-chart-highlight"><span>2025 peak</span><strong>15.00%</strong></div>
    </div>
    <div className="selic-chart-wrap">
      <svg viewBox="0 0 760 268" role="img" aria-label="Brazil Selic rate history from 2021 to 2026">
        <defs><linearGradient id="selicArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#8ca55d" stopOpacity="0.30"/><stop offset="100%" stopColor="#8ca55d" stopOpacity="0.02"/></linearGradient></defs>
        {[9,11,13,15].map(v=><g key={v}><line x1={left} x2={right} y1={y(v)} y2={y(v)} className="selic-grid-line"/><text x="8" y={y(v)+4} className="selic-axis-label">{v}%</text></g>)}
        <polygon points={area} fill="url(#selicArea)" className="selic-area"/>
        <polyline points={line} fill="none" className="selic-line"/>
        {points.map((p,i)=><g key={p.year}>
          <line x1={x(i)} x2={x(i)} y1={y(p.rate)+9} y2={bottom} className="selic-drop-line"/>
          <circle cx={x(i)} cy={y(p.rate)} r={i===4?7:5.5} className={i===4?'selic-point selic-point-peak':'selic-point'}/>
          <text x={x(i)} y="242" textAnchor="middle" className="selic-year">{p.year}</text>
          <text x={x(i)} y={y(p.rate)-13} textAnchor="middle" className={i===4?'selic-value selic-value-peak':'selic-value'}>{p.rate.toFixed(2)}%</text>
        </g>)}
      </svg>
    </div>
    <div className="selic-chart-foot"><span><i/> Copom target · annual rate</span><strong>2021 → 2026</strong></div>
  </div>;
}

function BrazilInvestingFeature(){
  return <section className="section brazil-feature"><div className="brazil-feature-header"><div><div className="eyebrow">BRAZIL INVESTING GUIDE</div><h2>How to invest in Brazil and earn <em>13.5% a year.</em></h2><p className="brazil-lead">A deep guide to Selic, Brazilian fixed income, Tesouro Direto, taxes, account opening, rate cycles and the risks an international investor needs to understand.</p><Link className="primary-btn" to="/article/how-to-invest-in-brazil-selic">Read the full Brazil investing guide <ArrowRight size={17}/></Link></div><div className="brazil-rate-card"><small>CURRENT COPOM TARGET</small><strong>13.75%</strong><span>per year · effective from September 17, 2026</span></div></div><SelicHistoryChart/></section>
}

function BrazilInvestmentCalculator(){
  const [amount,setAmount]=useState("100000");
  const [years,setYears]=useState(1);
  const rate=0.1375;
  const principal=Math.max(0,Number(String(amount).replace(/\D/g,""))||0);
  const finalAmount=principal*Math.pow(1+rate,years);
  const interest=finalAmount-principal;
  const formatUSD=(value)=>`USD ${Math.round(value||0).toLocaleString("de-DE")}`;
  const displayAmount=`USD ${Math.max(0,Number(String(amount).replace(/\D/g,""))||0).toLocaleString("de-DE")}`;
  const handleAmount=(value)=>{
    const digits=String(value).replace(/\D/g,"").slice(0,12);
    setAmount(digits||"0");
  };
  return <section className="section brazil-invest-calculator">
    <div className="brazil-invest-calculator-header"><div><div className="eyebrow">COMPOUND INTEREST CALCULATOR</div><h3>See what 13.75% a year could do to your money.</h3></div><p>Enter an initial amount in U.S. dollars and choose a time horizon. The estimate compounds the balance annually at a fixed 13.75% rate.</p></div>
    <div className="brazil-usd-input"><b>USD</b><input className="brazil-invest-input" type="text" inputMode="numeric" value={displayAmount.replace(/^USD /,"")} onChange={e=>handleAmount(e.target.value)} aria-label="Initial investment in U.S. dollars"/></div>
    <div className="brazil-invest-years" role="group" aria-label="Investment period">{[1,2,3].map(y=><button type="button" key={y} className={`brazil-invest-year ${years===y?"active":""}`} onClick={()=>setYears(y)}>{y} {y===1?"Year":"Years"}</button>)}</div>
    <div className="brazil-invest-result" aria-live="polite"><small>Estimated value after {years} {years===1?"year":"years"}</small><strong>{formatUSD(finalAmount)}</strong><span>Estimated interest earned: {formatUSD(interest)}</span></div>
    <div className="brazil-invest-grid"><div className="brazil-invest-stat"><small>Starting amount</small><strong>{formatUSD(principal)}</strong></div><div className="brazil-invest-stat"><small>Annual rate</small><strong>13.75%</strong></div></div>
    <p className="brazil-invest-note">Illustrative calculation only. It assumes the 13.75% annual rate remains unchanged for the selected period and does not account for taxes, fees, inflation or exchange-rate movements. Actual investment returns may differ.</p>
  </section>
}

function Home(){
  return <><Seo title="Finora — Financial Information, Credit Cards & Loans" description="Explore independent financial information about credit cards, loans and practical money decisions with Finora."/>
    <FinoraSearchStyles/><FinoraSearch/>
    <section className="home-hero-aggressive">
      <div className="home-hero-aggressive-copy">
        <div className="eyebrow"><span/> FINANCIAL INFORMATION</div>
        <div className="urgency-pill"><span/> BEFORE YOU APPLY — CHECK THE DETAILS</div>
        <h1>Understand the numbers. <em>Then compare your options.</em></h1>
        <p>Finora explains credit cards, loans and everyday borrowing decisions with practical examples, calculators and questions to check before you apply.</p>
        <div className="home-hero-actions"><Link className="primary-btn" to="/loans">Explore loan guides <ArrowRight size={18}/></Link><a className="text-btn" href="/#loan-calculator">Use the loan calculator</a></div>
        <div className="trust-row hero-trust-row"><span><Check size={17}/> Educational guides</span><span><Check size={17}/> Practical examples</span><span><Check size={17}/> Free tools</span></div>
      </div>
      <div className="home-hero-opportunity"><div className="opportunity-glow"/><div className="opportunity-card"><div className="opportunity-top"><span>FINORA TOOLS</span><Sparkles size={17}/></div><div className="opportunity-title">See the cost before you apply.</div><div className="opportunity-rate"><small>CALCULATOR</small><strong>Payment + interest</strong><span>Using your own numbers</span></div><div className="opportunity-bars"><div><span style={{width:"84%"}}/></div><div><span style={{width:"68%"}}/></div><div><span style={{width:"92%"}}/></div></div><a href="/#loan-calculator" className="opportunity-button">Open Calculator <ArrowRight size={16}/></a></div><div className="floating-chip chip-one">Illustrative</div><div className="floating-chip chip-two">No application</div></div>
    </section>
    <LoanCalculator/>
    <BrazilInvestingFeature/>
    <BrazilInvestmentCalculator/>
    <HowItWorks/>
    <AdSlot/>
    <ArticleGrid title="Start with practical guides" limit={6}/>
    <section className="section home-editorial-note"><div className="callout"><div className="eyebrow">EDITORIAL APPROACH</div><h2>Information first. <em>Offers second.</em></h2><p>Finora is built to help readers understand financial products before they visit a provider. We separate educational content from advertising and referral relationships, use practical examples, and encourage readers to verify current terms directly with the provider.</p><Link className="text-link" to="/editorial-policy">Read our editorial policy <ArrowRight size={16}/></Link></div></section>
  </>
}
function HowItWorks(){return <>
<style>{`
.how-links{margin-top:24px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}
.how-link{display:flex;align-items:center;justify-content:space-between;gap:14px;padding:14px 15px;border:1px solid #e2e7df;border-radius:15px;background:rgba(255,255,255,.82);color:#151918;text-decoration:none;box-shadow:0 8px 22px rgba(20,30,24,.045);transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease}
.how-link:hover{transform:translateY(-2px);border-color:#a9c77c;box-shadow:0 12px 28px rgba(20,30,24,.08)}
.how-link-main{display:flex;align-items:center;gap:11px;min-width:0}
.how-link-icon{width:34px;height:34px;border-radius:10px;background:#f0f7e9;display:grid;place-items:center;color:#719f42;flex:0 0 auto}
.how-link-copy{min-width:0}.how-link-copy strong{display:block;font-size:13px;line-height:1.2}.how-link-copy span{display:block;margin-top:3px;font-size:10px;line-height:1.35;color:#718096}
.how-link>svg{color:#718096;flex:0 0 auto}
.how-featured{margin-top:12px;padding-top:17px;border-top:1px solid #e7ebe5}
.how-featured-label{font-size:10px;letter-spacing:.14em;font-weight:800;color:#7b8794;margin-bottom:9px}
.how-article-links{display:flex;flex-wrap:wrap;gap:8px}
.how-article-link{display:inline-flex;align-items:center;gap:7px;padding:9px 11px;border-radius:999px;background:#f6f8f4;color:#344054;text-decoration:none;font-size:11px;font-weight:700;border:1px solid #e6ebe2;transition:all .2s ease}
.how-article-link:hover{background:#edf5e5;border-color:#c9dcae;color:#507d2c}
@media(max-width:800px){.how-links{grid-template-columns:1fr}.how-featured{margin-bottom:4px}}
`}</style>
<section className="how section"><div className="how-visual"><div className="visual-grid"/><div className="visual-glow glow-one"/><div className="visual-glow glow-two"/><div className="visual-center"><span>FINORA</span><b>Make a clearer<br/>financial choice.</b><i/></div><div className="floating-stat"><span>01</span><b>Compare</b><small>options side by side</small></div><div className="floating-stat second"><span>02</span><b>Understand</b><small>costs and terms</small></div><div className="floating-stat third"><span>03</span><b>Choose</b><small>with more clarity</small></div></div><div className="how-copy"><div className="eyebrow">HOW IT WORKS</div><h2>A simpler way to navigate <em>financial products.</em></h2><p>Finora helps you move from a financial question to useful information, practical tools and provider resources — without making the application decision for you.</p>{[["01","Choose a topic","Start with credit cards, loans or a financial guide."],["02","Compare the details","Review rates, fees, rewards, eligibility and total cost before you act."],["03","Use the right tool","Run the numbers with a calculator, then open the relevant guide for deeper context."]].map(x=><div className="step" key={x[0]}><span>{x[0]}</span><div><h3>{x[1]}</h3><p>{x[2]}</p></div></div>)}<div className="how-links"><Link className="how-link" to="/credit-cards"><div className="how-link-main"><div className="how-link-icon"><CreditCard size={17}/></div><div className="how-link-copy"><strong>Explore Credit Cards</strong><span>Compare card types, rewards and fees.</span></div></div><ArrowRight size={16}/></Link><Link className="how-link" to="/loans"><div className="how-link-main"><div className="how-link-icon"><ArrowRight size={17}/></div><div className="how-link-copy"><strong>Explore Loans</strong><span>Understand APR, payments and borrowing costs.</span></div></div><ArrowRight size={16}/></Link><Link className="how-link" to="/financial-guides"><div className="how-link-main"><div className="how-link-icon"><Sparkles size={17}/></div><div className="how-link-copy"><strong>Financial Guides</strong><span>Learn the concepts behind everyday decisions.</span></div></div><ArrowRight size={16}/></Link><a className="how-link" href="/#loan-calculator"><div className="how-link-main"><div className="how-link-icon"><Check size={17}/></div><div className="how-link-copy"><strong>Open the Loan Calculator</strong><span>Estimate payment, interest and total repayment.</span></div></div><ArrowRight size={16}/></a></div><div className="how-featured"><div className="how-featured-label">START WITH A GUIDE</div><div className="how-article-links"><Link className="how-article-link" to="/article/how-to-invest-in-brazil-selic">Brazil & Selic <ArrowRight size={13}/></Link><Link className="how-article-link" to="/article/how-to-compare-credit-cards">Compare credit cards <ArrowRight size={13}/></Link><Link className="how-article-link" to="/article/personal-loan-apr-explained">Understand APR <ArrowRight size={13}/></Link></div></div></div></section></>}


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


function LoanBankOffers(){
 const lenders=[
  {name:"Wells Fargo",className:"wells-fargo",rate:"6.74%–26.74% APR",headline:"Fixed-rate personal loans",detail:"Loans from $3,000 to $100,000 with 12–84 month terms. No origination fee, closing fee or prepayment penalty. Personal loans are available to existing Wells Fargo customers who meet the requirements.",href:"https://www.wellsfargo.com/personal-loans/"},
  {name:"Discover",className:"discover",rate:"6.99%–24.99% APR",headline:"Flexible personal loans",detail:"Personal loans from $2,500 to $40,000 with 36–84 month terms and no fees. The actual APR depends on creditworthiness, amount and term.",href:"https://www.discover.com/personal-loans/"},
  {name:"American Express",className:"amex",rate:"6.99%–19.99% APR",headline:"Loans for eligible Card Members",detail:"Fixed-rate personal loans from $3,500, with 12–60 month terms. Personal Loans are available to eligible American Express Card Members and rates depend on the offer and credit profile.",href:"https://www.americanexpress.com/en-us/banking/personal-loans/"},
  {name:"Citi",className:"citi",rate:"9.99%–17.49% APR",headline:"Fixed-rate personal loans",detail:"Citi offers personal loans with 12–60 month repayment periods. Rates depend on creditworthiness, term and the customer's relationship with Citi; automatic payments can qualify for an APR discount.",href:"https://www.citi.com/personal-loans"},
  {name:"Capital One",className:"capital-one",rate:"Through Discover",headline:"Personal loans through Discover",detail:"Capital One states that, following its merger with Discover, personal-loan customers can explore and apply through Discover. The displayed APR range therefore refers to the Discover personal-loan product.",href:"https://www.discover.com/personal-loans/"}
 ];
 return <><style>{`
.loan-bank-offers{padding-top:8px}.loan-bank-offers .section-heading{max-width:1180px}.loan-bank-list{display:grid;gap:14px;max-width:1080px;margin:0 auto}.loan-bank-row{display:grid;grid-template-columns:180px minmax(0,640px) 170px;gap:30px;align-items:center;padding:24px 26px;border:1px solid #e3e8ef;border-radius:20px;background:#fff;box-shadow:0 9px 25px rgba(16,24,40,.045);transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease}.loan-bank-row:hover{transform:translateY(-2px);border-color:#cfd8d3;box-shadow:0 14px 30px rgba(16,24,40,.08)}.loan-offer-logo{width:170px;height:92px;display:flex;align-items:center;justify-content:center;border-radius:14px;font-weight:900;padding:0 12px;text-align:center;box-sizing:border-box;box-shadow:0 7px 18px rgba(16,24,40,.08)}.loan-offer-logo.wells-fargo{background:#c8102e;color:#fff;font-size:20px;line-height:1.02}.loan-offer-logo.discover{background:#fff;color:#183b63;border:1px solid #d9dee7;font-size:20px;position:relative;letter-spacing:-.04em}.loan-offer-logo.discover:after{content:"";width:18px;height:18px;border-radius:50%;background:#f58220;margin-left:7px}.loan-offer-logo.amex{background:#1677b8;color:#fff;font-size:15px;letter-spacing:.04em;line-height:1.15}.loan-offer-logo.citi{background:#fff;color:#17365d;border:1px solid #d9dee7;font-family:Arial,sans-serif;font-size:38px;position:relative;letter-spacing:-.08em}.loan-offer-logo.citi:before{content:"";position:absolute;top:22px;width:64px;height:18px;border-top:5px solid #e31837;border-radius:50%}.loan-offer-logo.capital-one{background:#fff;color:#17365d;border:1px solid #d9dee7;font-size:20px;position:relative;letter-spacing:-.05em}.loan-offer-logo.capital-one:before{content:"";position:absolute;width:88px;height:25px;top:29px;border-top:6px solid #d71920;border-radius:50%;transform:rotate(-3deg)}.loan-offer-copy{min-width:0;max-width:640px}.loan-offer-top{display:flex;justify-content:space-between;align-items:center;gap:18px}.loan-offer-name{font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:#667085;font-weight:800}.loan-offer-rate{font-size:15px;font-weight:850;color:#8ca55d;white-space:nowrap}.loan-offer-copy h3{margin:7px 0 7px;font-size:20px;color:#101828}.loan-offer-copy p{margin:0;color:#667085;font-size:13px;line-height:1.6;max-width:620px}.loan-offer-action{display:flex;flex-direction:column;align-items:stretch;gap:7px;padding-left:4px}.loan-offer-button{justify-content:center;display:inline-flex!important;align-items:center;gap:7px;text-decoration:none;white-space:nowrap;background:#8ca55d!important;border-color:#8ca55d!important;color:#fff!important}.loan-offer-button:hover{background:#78954c!important;border-color:#78954c!important}.loan-offer-action>span{text-align:center;font-size:10px;color:#98a2b3}.loan-offer-disclaimer{max-width:1080px;margin:14px auto 0;color:#98a2b3;font-size:11px;line-height:1.55}@media(max-width:1050px){.loan-bank-list{max-width:100%}.loan-bank-row{grid-template-columns:160px minmax(0,1fr) 160px;gap:22px}.loan-offer-logo{width:150px}}@media(max-width:850px){.loan-bank-row{grid-template-columns:120px minmax(0,1fr);gap:18px}.loan-offer-logo{width:120px;height:78px;font-size:15px!important}.loan-offer-action{grid-column:2;padding-left:0}.loan-offer-button{width:max-content}.loan-offer-action>span{text-align:left}}@media(max-width:600px){.loan-bank-row{grid-template-columns:1fr;padding:18px}.loan-offer-logo{width:150px;height:82px}.loan-offer-top{display:block}.loan-offer-rate{display:block;margin-top:5px}.loan-offer-action{grid-column:auto}.loan-offer-button{width:100%}.loan-offer-action>span{text-align:center}}
`}</style><section className="section loan-bank-offers"><div className="section-heading"><div><div className="eyebrow">LENDER DETAILS</div><h2>Compare the <em>loan options.</em></h2></div><p>Review the published APR ranges, basic terms and lender-specific details before visiting the provider. Rates and eligibility can change.</p></div><div className="loan-bank-list">{lenders.map(lender=><article className="loan-bank-row" key={lender.name}><div className={`loan-offer-logo ${lender.className}`} aria-label={`${lender.name} logo`}>{lender.name==="Wells Fargo"?<>WELLS<br/>FARGO</>:lender.name==="Discover"?<>DISCOVER</>:lender.name==="American Express"?<>AMERICAN<br/>EXPRESS</>:lender.name==="Citi"?<>citi</>:<>CAPITAL ONE</>}</div><div className="loan-offer-copy"><div className="loan-offer-top"><span className="loan-offer-name">{lender.name}</span><span className="loan-offer-rate">{lender.rate}</span></div><h3>{lender.headline}</h3><p>{lender.detail}</p></div><div className="loan-offer-action"><a className="primary-btn loan-offer-button" href={lender.href} target="_blank" rel="noreferrer">Visit {lender.name}<ArrowRight size={15}/></a><span>Official lender site</span></div></article>)}</div><p className="loan-offer-disclaimer">Published APR ranges are for reference and may depend on creditworthiness, loan amount, term, relationship status or eligibility. Always verify the current offer directly with the lender.</p></section></>
}

function CategoryPage({type}){
 const isLoans=type==="loans";
 const title=isLoans?"Loans":"Financial Guides";
 const description=isLoans?"Understand how personal borrowing works — from APR and monthly payments to loan terms, fees, credit requirements and total repayment.":"Go beyond product pages with practical explainers on credit, borrowing, cash flow, interest, utilization and the financial concepts behind everyday decisions.";
 const topics=isLoans?[
   ["APR & interest","Learn why APR matters, what it can include and how to compare borrowing costs beyond the advertised rate.","/article/personal-loan-apr-explained"],
   ["Loan terms","See how 24-, 36-, 48- and 60-month terms can change the monthly payment and total interest on the same balance.","/article/loan-term-and-monthly-payment"],
   ["Borrowing decisions","Understand affordability, fees, credit considerations and the questions to ask before submitting a loan application.","/article/personal-loan-apr-explained"]
 ]:[
   ["Credit fundamentals","Understand utilization, payment history, APR and other concepts that shape how consumers evaluate credit products.","/article/how-credit-utilization-works"],
   ["Everyday money decisions","Learn how rates, fees, repayment schedules and product structures affect the real cost of financial choices.","/article/fixed-vs-variable-rates"],
   ["Investing & rates","Explore concepts such as Selic, fixed income, compounding and the difference between nominal and real returns.","/article/how-to-invest-in-brazil-selic"]
 ];
 return <><Seo title={`${title} — Practical Financial Guides | Finora`} description={description}/><PageHero eyebrow={isLoans?"BORROWING & CREDIT":"MONEY KNOWLEDGE"} title={title} text={description}/>{isLoans?<section className="section category-deep-intro"><div className="category-deep-grid"><div><div className="eyebrow">BORROWING, EXPLAINED</div><h2>A loan is more than a <em>monthly payment.</em></h2></div><div><p>The payment is the number most borrowers see first, but it is only one part of the cost. A useful loan comparison also looks at APR, interest, origination or other fees, repayment length, late-payment consequences and whether the payment comfortably fits the budget.</p><p>Use this section to build a better comparison before you apply. Start with the amount you actually need, test more than one term in the Finora calculator, and then verify the lender's current disclosures and eligibility requirements.</p></div></div><div className="category-topic-grid">{topics.map(([name,text,href])=><Link className="category-topic-card" key={name} to={href}><div className="category-topic-number">0{topics.indexOf(topics.find(t=>t[0]===name))+1}</div><h3>{name}</h3><p>{text}</p><span>Read the guide <ArrowRight size={15}/></span></Link>)}</div></section>:<section className="section category-deep-intro"><div className="category-deep-grid"><div><div className="eyebrow">BUILD YOUR FINANCIAL FOUNDATION</div><h2>Understand the system <em>behind the product.</em></h2></div><div><p>Financial products can look simple on the surface while hiding important differences in pricing, timing, risk and eligibility. These guides focus on the concepts that help you read an offer more carefully and ask better questions.</p><p>Instead of treating one rate, reward or feature as the whole story, look at how the pieces interact: interest with time, balances with credit limits, fees with benefits and nominal returns with inflation and taxes.</p></div></div><div className="category-topic-grid">{topics.map(([name,text,href],i)=><Link className="category-topic-card" key={name} to={href}><div className="category-topic-number">0{i+1}</div><h3>{name}</h3><p>{text}</p><span>Read the guide <ArrowRight size={15}/></span></Link>)}</div></section>}{isLoans&&<><LoanCalculator/><LoanBankOffers/></>}<AdSlot/><ArticleGrid title={isLoans?"Loan topics worth understanding":"Financial concepts worth understanding"} category={isLoans?"Loans":"Financial Guides"}/><AdSlot/>{isLoans?<section className="section category-bottom"><div className="callout"><div className="eyebrow">BEFORE YOU BORROW</div><h2>Compare the cost across <em>different terms.</em></h2><p>A longer term can lower the monthly payment while increasing the time you remain in debt and, in many cases, the total interest paid. Run the same amount and APR through different terms before deciding what payment is actually affordable.</p><div className="category-actions"><a className="primary-btn" href="/#loan-calculator">Open the loan calculator <ArrowRight size={16}/></a><Link className="text-link" to="/article/loan-term-and-monthly-payment">Read about loan terms <ArrowRight size={16}/></Link></div></div></section>:<section className="section category-bottom"><div className="callout"><div className="eyebrow">KEEP LEARNING</div><h2>Connect the numbers to the <em>real-world decision.</em></h2><p>A financial concept becomes useful when you can apply it to an actual balance, rate, fee or time horizon. Use the guides as a starting point, then check the current provider terms and your own circumstances before acting.</p><div className="category-actions"><Link className="primary-btn" to="/article/how-to-invest-in-brazil-selic">Explore the Brazil investing guide <ArrowRight size={16}/></Link><Link className="text-link" to="/money-topics">Browse money topics <ArrowRight size={16}/></Link></div></div></section>}</>
}

function PageHero({eyebrow,title,text}){return <section className="page-hero"><div className="eyebrow">{eyebrow}</div><h1>{title} <em>made clearer.</em></h1><p>{text}</p></section>}

function Article({article}){
  const content=articleContent[article.slug] || {intro:article.excerpt,sections:[]};
  const upgrade=articleUpgrades[article.slug] || {};
  const [faqOpen,setFaqOpen]=useState(-1);
  const questions=[
    `What should I compare before ${article.category.toLowerCase()==='loans'?'borrowing':'applying'}?`,
    "Can the terms change?",
    "Where should I verify current terms?"
  ];
  const answers=[
    "Start with the full cost, fees, eligibility rules, key benefits and the way the product fits your actual budget or spending pattern.",
    "Many financial products have terms that can change, including rates, promotions, fees and eligibility criteria. Treat the provider's current disclosure as the final source.",
    "Use the provider's official website and disclosure documents for current pricing, eligibility, rewards, repayment terms and application conditions."
  ];
  return <><Seo title={`${article.title} | Finora`} description={article.excerpt}/><article className="article">
    <div className="eyebrow">{article.category}</div><h1>{article.title}</h1><p className="article-lead">{content.intro}</p>
    <div className="article-meta"><span>Finora Editorial Team</span><span>Last reviewed: September 23, 2026</span><span>Educational information</span></div>
    {upgrade.takeaway && <div className="article-takeaway"><strong>Key takeaway</strong><p>{upgrade.takeaway}</p></div>}
    <AdSlot/>
    {content.sections.map(([heading,paragraphs])=><section className="article-section" key={heading}><h2>{heading}</h2>{paragraphs.map((text,i)=><p key={i}>{text}</p>)}</section>)}
    {upgrade.table && <section className="article-table-section"><h2>{upgrade.table.title}</h2><div className="article-table-wrap"><table><thead><tr>{upgrade.table.headers.map(h=><th key={h}>{h}</th>)}</tr></thead><tbody>{upgrade.table.rows.map((row,i)=><tr key={i}>{row.map((cell,j)=><td key={j}>{cell}</td>)}</tr>)}</tbody></table></div><p className="table-note">Illustrative or current published product information, as indicated. Verify the live provider terms before applying.</p></section>}
    {upgrade.example && <section className="article-example"><div className="eyebrow blue">ILLUSTRATIVE EXAMPLE</div><h2>{upgrade.exampleTitle}</h2><p>{upgrade.example}</p></section>}
    <section className="article-checklist"><h2>Before you apply</h2><ul><li>Confirm the current rate, fees and eligibility criteria.</li><li>Review the provider's complete disclosure and repayment terms.</li><li>Compare total cost, not just the advertised monthly payment or reward.</li><li>Use realistic assumptions about your spending, benefits or ability to repay.</li><li>Keep a copy or note of the terms you reviewed before submitting an application.</li></ul></section>
    <section className="article-faq"><div className="eyebrow">FAQ</div><h2>Questions readers <em>often ask.</em></h2>{questions.map((q,i)=><div className={faqOpen===i?"article-faq-item active":"article-faq-item"} key={q}><button type="button" onClick={()=>setFaqOpen(faqOpen===i?-1:i)}><span>{q}</span><ChevronDown size={18}/></button>{faqOpen===i&&<p>{answers[i]}</p>}</div>)}</section>
    {upgrade.sources?.length>0 && <section className="article-sources"><h2>Sources & further reading</h2><p>Primary or authoritative sources used to frame the guide. Product terms can change, so readers should consult the linked source for the latest information.</p><ul>{upgrade.sources.map(([name,url])=><li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></li>)}</ul></section>}
    <AdSlot/><div className="article-disclaimer"><strong>Finora note:</strong> This article is general educational information, not financial, tax or legal advice. Product terms can change and approval is determined by the provider. Illustrative examples use hypothetical figures unless explicitly identified otherwise.</div><div className="article-next"><Link to="/financial-guides">Explore more guides <ArrowRight size={17}/></Link></div>
  </article><section className="section"><ArticleGrid title="Continue reading" limit={3}/></section></>
}
function FAQ(){const [active,setActive]=useState(0);return <div className="faq"><div className="faq-heading"><div className="eyebrow">FAQ</div><h2>Questions, <em>answered.</em></h2><p>Clear explanations before you make a financial decision.</p></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={active===i?"faq-item active":"faq-item"} key={q}><button onClick={()=>setActive(active===i?-1:i)}><span>{q}</span><ChevronDown size={19}/></button>{active===i&&<p>{a}</p>}</div>)}</div></div>}

function About(){return <><Seo title="About Finora — Our Story, Founders & Mission" description="Discover the story behind Finora, the people who built it and the mission to make financial information clearer and more useful."/><PageHero eyebrow="ABOUT FINORA" title="Two friends. Two countries. One idea: make money easier to understand." text="Finora began with a simple belief shared by two economists: better financial information can help people make better decisions and build a healthier financial life."/><section className="section about-story-intro"><div className="about-story-grid"><div><div className="eyebrow">THE BEGINNING</div><h2>A conversation about money became a <em>platform.</em></h2></div><div><p>Finora was created by two friends who met through their shared interest in economics, markets and the everyday financial decisions that shape people's lives. One grew up in Brazil; the other in the United States. Although their backgrounds were different, they noticed the same problem on both sides of the Atlantic: financial information was everywhere, but useful financial understanding was harder to find.</p><p>Rates, credit cards, loans, investing products and financial terminology were often presented in ways that assumed readers already knew the system. The two founders believed there was room for something different — a platform that could slow down, explain the important details and give people a clearer starting point before they made a financial decision.</p><p>That idea became Finora: an independent financial information platform built around clarity, context and practical education.</p></div></div></section><section className="section about-founders"><div className="section-heading"><div><div className="eyebrow">THE FOUNDERS</div><h2>Two perspectives, <em>one mission.</em></h2></div><p>The founders brought different experiences of the financial systems they grew up around, but the same academic foundation and curiosity about how money works.</p></div><div className="founder-grid"><article className="founder-card"><div className="founder-avatar"><UserRound size={28}/></div><div className="eyebrow">BRAZIL</div><h3>Lucas Almeida</h3><p className="founder-role">Co-founder · Economics & Financial Research</p><p>Lucas grew up in Brazil and developed an early interest in the relationship between interest rates, inflation, credit and household financial decisions. He studied Economics at university and later completed a master's degree focused on finance and economic analysis.</p><p>His experience gave Finora a close perspective on the realities of emerging-market finance, where inflation, high interest rates, currency movements and access to credit can have a particularly visible effect on everyday life.</p><p>Lucas became especially interested in translating economic concepts into practical questions: What does an interest rate actually mean for a household? What is the real cost of a loan? How should someone think about a financial product before focusing on the headline number?</p><div className="founder-tags"><span><GraduationCap size={14}/> Economics</span><span><BookOpen size={14}/> Master's degree</span><span><Globe2 size={14}/> Brazil</span></div></article><article className="founder-card"><div className="founder-avatar"><UserRound size={28}/></div><div className="eyebrow">UNITED STATES</div><h3>Michael Carter</h3><p className="founder-role">Co-founder · Product & Financial Education</p><p>Michael grew up in the United States and became interested in the way financial products influence everyday choices, from credit cards and personal loans to savings and long-term investing. He studied Economics at university and completed a master's degree with a focus on applied economics and financial markets.</p><p>His perspective brought a strong interest in consumer finance and product comparison. He saw how difficult it could be for readers to distinguish between an attractive headline and the details that actually determine the value, cost or suitability of a financial product.</p><p>Michael's focus at Finora became the connection between financial knowledge and product experience: building tools, comparisons and explanations that help readers ask better questions before they apply.</p><div className="founder-tags"><span><GraduationCap size={14}/> Economics</span><span><BookOpen size={14}/> Master's degree</span><span><Globe2 size={14}/> United States</span></div></article></div></section><section className="section about-timeline"><div className="section-heading"><div><div className="eyebrow">THE FINORA STORY</div><h2>From an idea to a <em>financial information platform.</em></h2></div><p>The company has grown around a simple principle: financial education should be practical enough to use, not just interesting to read.</p></div><div className="about-timeline-grid"><div className="timeline-item"><span>01</span><div><h3>The problem</h3><p>Lucas and Michael kept seeing the same gap: people could find thousands of pages about financial products, but much of the information was fragmented, promotional or difficult to compare.</p></div></div><div className="timeline-item"><span>02</span><div><h3>The idea</h3><p>They began discussing what a better financial information experience could look like — one built around plain-language explanations, useful comparisons, calculators and links back to primary sources.</p></div></div><div className="timeline-item"><span>03</span><div><h3>The platform</h3><p>Finora was built to bring those pieces together. Instead of telling readers what they should choose, the platform focuses on helping them understand what they are looking at and which questions deserve attention.</p></div></div><div className="timeline-item"><span>04</span><div><h3>The mission</h3><p>The long-term goal is to make financial information easier to navigate across markets and life stages, so more people can approach decisions about borrowing, spending and investing with greater understanding.</p></div></div></div></section><section className="section about-principles"><div className="about-principles-grid"><div><div className="eyebrow">WHAT WE BELIEVE</div><h2>Financial literacy should improve <em>quality of life.</em></h2><p>Money is not an abstract subject. It affects where people live, how they handle emergencies, whether they can afford a major purchase and how confidently they plan for the future.</p><p>That is why Finora treats financial education as something practical. A useful explanation should leave a reader with a clearer understanding of the trade-offs involved and a better idea of what to verify next.</p></div><div className="principle-list"><div className="principle-item"><div className="icon-wrap"><Lightbulb size={21}/></div><div><h3>Clarity before complexity</h3><p>We explain the basic idea first, then add the details that matter for a real decision.</p></div></div><div className="principle-item"><div className="icon-wrap"><BookOpen size={21}/></div><div><h3>Education over pressure</h3><p>Our goal is to explain products and concepts rather than pressure readers into a particular financial choice.</p></div></div><div className="principle-item"><div className="icon-wrap"><ShieldCheck size={21}/></div><div><h3>Details matter</h3><p>Rates, fees, eligibility, repayment terms and changing conditions can matter more than a headline benefit.</p></div></div><div className="principle-item"><div className="icon-wrap"><Globe2 size={21}/></div><div><h3>Different markets, broader perspective</h3><p>Finora benefits from the founders' experience across Brazil and the United States and aims to make financial systems easier to understand across borders.</p></div></div></div></div></section><section className="section"><div className="about-what-we-do"><div><div className="eyebrow">WHAT FINORA DOES</div><h2>Turning financial information into <em>something people can use.</em></h2></div><div className="about-service-grid"><div><CreditCard size={22}/><h3>Compare products</h3><p>We organize important differences between cards, loans and other financial products so readers know which terms to investigate.</p></div><div><BookOpen size={22}/><h3>Explain concepts</h3><p>Our guides break down financial terminology, rates, fees, rewards, repayment structures and other concepts in practical language.</p></div><div><Lightbulb size={22}/><h3>Build useful tools</h3><p>Calculators and interactive experiences help readers turn abstract percentages and terms into concrete examples.</p></div><div><Globe2 size={22}/><h3>Connect to primary sources</h3><p>When current product terms matter, we point readers toward the relevant provider, government agency or other authoritative source.</p></div></div></div></section><AdSlot/><section className="section"><div className="about-editorial-box"><div className="eyebrow">EDITORIAL APPROACH</div><h2>Independent in presentation. Careful about <em>the details.</em></h2><div className="about-editorial-columns"><p>Finora is not a bank, lender, broker, financial adviser or credit-card issuer. The platform does not make approval decisions and cannot guarantee a particular rate, reward, return or outcome.</p><p>Financial products change. Rates move, promotions expire, eligibility criteria are updated and providers can change their terms. Our pages are therefore designed to give readers context and questions to investigate, while encouraging verification against current provider disclosures.</p><p>Finora may be supported by advertising and may receive referral or affiliate compensation for some links. Commercial relationships are disclosed on the site. They do not remove the need for readers to review the actual terms of a product before applying.</p></div><div className="about-editorial-links"><Link to="/editorial-policy">Read our Editorial Policy <ArrowRight size={16}/></Link><Link to="/advertiser-disclosure">See our Advertiser Disclosure <ArrowRight size={16}/></Link></div></div></section><section className="section"><FAQ/></section><section className="section"><div className="about-link-grid"><Link to="/editorial-policy"><strong>Editorial Policy</strong><span>How we approach accuracy, updates and commercial relationships <ArrowRight size={16}/></span></Link><Link to="/contact"><strong>Contact Finora</strong><span>Questions, corrections, partnerships and general inquiries <ArrowRight size={16}/></span></Link></div></section></>}
function MoneyTopics(){return <><Seo title="Money Topics & Financial Explainers | Finora" description="Explore Finora's educational money topics and financial explainers about credit, borrowing and everyday decisions."/><PageHero eyebrow="MONEY TOPICS" title="Financial topics worth understanding." text="Educational explainers and practical articles about financial products and everyday money decisions."/><section className="section content-intro"><div className="content-intro-grid"><div><div className="eyebrow">HOW TO USE THESE TOPICS</div><h2>Context before <em>the decision.</em></h2></div><div><p>These pages are designed as explainers, not breaking-news pages. Each guide focuses on a practical question, an illustrative example and the terms readers should verify with the relevant provider.</p><p>When a topic depends on changing rates, offers or regulations, use the linked primary source for the current information.</p></div></div></section><AdSlot/><ArticleGrid title="Money topics & explainers"/></>}

function EditorialPolicy(){return <><Seo title="Editorial Policy | Finora" description="Finora's editorial policy explains our approach to accuracy, clarity, updates, sources and commercial relationships."/><PageHero eyebrow="EDITORIAL POLICY" title="How Finora approaches financial content." text="Our goal is to publish useful, understandable and transparent educational information."/><section className="section legal-page"><h2>Purpose and independence</h2><p>Finora publishes general educational content about credit cards, loans and personal finance. We are not a bank, lender, broker, financial adviser or credit-card issuer. Editorial pages are intended to help readers understand concepts and questions before visiting a provider.</p><h2>Accuracy and clarity</h2><p>We aim to use plain language and avoid guarantees about approval, rates, savings or outcomes. Financial products and offers can change, so readers should verify current information using the provider's official disclosures before making a decision.</p><h2>Commercial relationships</h2><p>Finora may display advertising and may receive referral or affiliate compensation for some links or offers. Commercial relationships are disclosed on the site. Compensation can influence where some offers appear, but it does not turn a product into a recommendation that is suitable for every reader.</p><h2>Updates</h2><p>When an article depends on changing product terms, we encourage readers to check the issuer or provider directly. We may update pages as information changes. A page should not be interpreted as a promise that every listed feature, rate or promotion remains available.</p><h2>Corrections</h2><p>If you notice an apparent factual error, please contact Finora with the page URL and the information you believe needs correction. We will review the issue and update the page when appropriate.</p><h2>AI-assisted drafting</h2><p>Some editorial production workflows may use software or AI-assisted drafting tools. Finora remains responsible for the published page and aims to review and edit material before publication. Automated drafting is not a substitute for checking provider terms or other authoritative information.</p></section></>}

function AdvertiserDisclosure(){return <><Seo title="Advertiser Disclosure | Finora" description="Learn how Finora's advertising and referral relationships may affect how financial offers appear on the site."/><PageHero eyebrow="ADVERTISER DISCLOSURE" title="How Finora can be supported." text="Transparency matters when financial content and advertising appear on the same website."/><section className="section legal-page"><h2>Advertising</h2><p>Finora may display advertising from third-party advertising networks, including Google AdSense when enabled. Advertisements are separate from editorial content and are selected or delivered by advertising systems according to their own processes.</p><h2>Referral and affiliate relationships</h2><p>Some links to financial providers may be referral or affiliate links. If a reader follows a qualifying link or completes an eligible action, Finora may receive compensation. Not every product in a category is necessarily included, and compensation may affect placement or prominence.</p><h2>No guarantee of approval</h2><p>Finora does not approve loans, issue credit cards or determine eligibility. A provider's rates, fees, terms and approval decision are controlled by that provider.</p><h2>What readers should do</h2><p>Use Finora to understand the questions worth asking, then read the provider's official disclosures before applying. Compare the full cost and conditions rather than choosing solely because an offer appears prominently on the page.</p></section></>}

function Contact(){return <><Seo title="Contact Finora" description="Contact Finora about site content, corrections, advertising questions or general feedback."/><PageHero eyebrow="CONTACT" title="Questions or corrections?" text="We welcome feedback about Finora's content, site experience and commercial disclosures."/><section className="section"><div className="contact-card"><div><div className="eyebrow">GET IN TOUCH</div><h2>Tell us what you <em>found.</em></h2><p>For a correction, include the page URL and a short explanation of the issue. For advertising or partnership questions, clearly identify the page or offer you are asking about.</p></div><div className="contact-box"><strong>Public contact email</strong><p>contact@finorabizz.com</p><small>This address is intended for the Finora brand and should be activated when the custom domain email is configured.</small></div></div></section></>}

function WorkWithUs(){return <><Seo title="Work With Us | Finora" description="Learn about careers at Finora, the kinds of roles we hire for and how to submit your resume for future opportunities."/><PageHero eyebrow="WORK WITH US" title="Build the future of clearer financial information." text="Finora grows by bringing together people who care about useful information, thoughtful products and a better way to explain money."/><section className="section content-intro"><div className="content-intro-grid"><div><div className="eyebrow">CAREERS AT FINORA</div><h2>Good work should be <em>well rewarded.</em></h2></div><div><p>Finora is building an independent financial information platform designed to make complicated financial products easier to understand. Our work sits at the intersection of personal finance, editorial research, technology, design and digital media.</p><p>We have hiring opportunities throughout the year as the company expands its editorial coverage, product experiences and technology. When we hire, we look for people who can bring strong judgment, practical skills and a genuine interest in making information more useful to readers.</p><p>Finora aims to offer competitive, well-paid opportunities for the people who join the team. Compensation and benefits vary by role, experience, location and employment arrangement, and are discussed during the hiring process.</p></div></div></section><section className="section"><div className="section-heading"><div><div className="eyebrow">WHAT WE BUILD</div><h2>Work that turns financial information into <em>something useful.</em></h2></div><p>Our teams work across editorial, research, technology, design, growth and operations to make the Finora experience clearer and more useful.</p></div><div className="category-grid"><div className="category-card"><div className="icon-wrap"><CreditCard size={22}/></div><h3>Editorial & Research</h3><p>Research financial products, write explainers, review sources and turn complex subjects into clear, useful information.</p></div><div className="category-card"><div className="icon-wrap"><Sparkles size={22}/></div><h3>Product & Technology</h3><p>Build the website, calculators, search experiences, internal tools and other digital products used by Finora readers.</p></div><div className="category-card"><div className="icon-wrap"><ShieldCheck size={22}/></div><h3>Design & Creative</h3><p>Develop visual systems, interfaces, editorial layouts and creative assets that make information easier to navigate.</p></div></div></section><section className="section legal-page"><div className="eyebrow">HOW WE WORK</div><h2>Clear thinking, high standards and <em>real ownership.</em></h2><p>We value careful research, direct communication, strong writing, thoughtful design and reliable execution. People are encouraged to question assumptions, improve existing work and take ownership of meaningful projects.</p><p>You do not need to come from one particular background. Relevant experience can come from finance, media, technology, design, research, operations, analytics or another field. What matters is the ability to learn, contribute and produce work that meets a high standard.</p><h2>What we look for</h2><h3>Clear communication</h3><p>Explain your thinking directly and make complex subjects easier for other people to understand.</p><h3>Ownership</h3><p>Take responsibility for the quality of your work, follow through on commitments and look for ways to improve the result.</p><h3>Curiosity</h3><p>Ask good questions, investigate unfamiliar subjects and keep learning as financial products, markets and technology change.</p><h3>Attention to detail</h3><p>Financial information requires careful wording, accurate numbers and a willingness to verify important details before publication or release.</p><h3>Practical judgment</h3><p>Balance speed with quality and focus on work that creates a meaningful improvement for readers or the business.</p><h3>Respect for readers</h3><p>Write and build with the understanding that people rely on clear information when making decisions about their money.</p><h2>More areas may open as Finora grows</h2><p>Depending on the company's needs, future opportunities may include growth and partnerships, business operations, finance, analytics, content production, engineering, product management and other specialist roles.</p><h2>Hiring throughout the year</h2><p>Finora has vacancies and hiring opportunities during the year rather than limiting recruiting to a single annual application period. Some openings may be created for specific projects, while others may support longer-term growth. A role may not always be publicly advertised before we begin reviewing candidates, so people with relevant experience are welcome to introduce themselves.</p><p>Submitting a resume does not guarantee an interview, employment or a specific opening. Applications are reviewed according to the company's current needs, the requirements of the role and the experience and skills presented by each candidate.</p></section><section className="section"><div className="callout"><div className="eyebrow">SEND YOUR RESUME</div><h2>Interested in joining <em>Finora?</em></h2><p>Send your current resume to <strong>contact@finorabizz.com</strong> along with a short introduction explaining the type of work you are interested in. If you have a portfolio, writing samples, GitHub profile or other relevant work, include those links as well.</p><p>For the subject line, use <strong>Finora Careers — [Your Name]</strong>. This helps us identify career inquiries quickly.</p><a className="text-link" href="mailto:contact@finorabizz.com?subject=Finora%20Careers">Email your resume <ArrowRight size={16}/></a></div></section><section className="section legal-page"><h2>A simple application is enough to start</h2><p>Please send a resume and relevant professional materials rather than sensitive personal documents. Do not include passwords, government identification numbers, bank details or other confidential information in an initial application.</p><p>Finora reviews career inquiries as opportunities arise. If your background matches a current or future need, the team can follow up with additional questions, an interview or information about the role.</p></section></>}

function PrivacyPolicy(){return <><Seo title="Privacy Policy | Finora" description="Read Finora's privacy policy covering analytics, advertising, cookies, information use and user choices."/><PageHero eyebrow="PRIVACY POLICY" title="How information is handled on Finora." text="This policy explains the types of information that may be processed when you use the Finora website."/><section className="section legal-page"><p className="legal-updated">Last updated: September 14, 2026</p><h2>1. Overview</h2><p>Finora is an informational website covering credit cards, loans and personal finance. This policy describes how information may be collected, used and shared through the website and services connected to it.</p><h2>2. Information you provide</h2><p>Finora does not require an account to read ordinary editorial pages. If you contact us by email, we may receive the information you choose to include, such as your name, email address and message. We use that information to respond to the request and maintain appropriate business records.</p><h2>3. Analytics</h2><p>Finora may use Google Analytics to understand website traffic, page views, engagement and technical information about visits. Analytics services may use cookies, identifiers or similar technologies. The information is used to understand site performance and improve content and navigation.</p><h2>4. Advertising and Google AdSense</h2><p>If Google AdSense is enabled on Finora, Google and its partners may use cookies or similar technologies to provide, measure and personalize advertising, subject to applicable settings and policies. Advertising systems may process information such as IP address, browser information, device information, approximate location and interaction with ads. Finora does not control the information collected directly by third-party advertising systems.</p><h2>5. Cookies and similar technologies</h2><p>Cookies may be used for analytics, security, preferences and advertising. Some cookies are necessary for website functionality, while others help understand usage or deliver advertising. Your browser and certain privacy controls may allow you to limit or delete cookies.</p><h2>6. How information is used</h2><p>Information may be used to operate and secure the site, understand traffic, improve content, respond to inquiries, measure advertising and comply with legal obligations.</p><h2>7. Third-party services</h2><p>Finora may use third-party services such as Vercel for hosting, Google Tag Manager for tag management, Google Analytics for measurement and Google AdSense or other advertising services when enabled. Those services may process information according to their own privacy policies and terms.</p><h2>8. Your choices</h2><p>You can manage cookies through browser settings and, where available, through consent or privacy controls presented by the website or relevant advertising service. You may also use Google's advertising privacy controls and account settings where applicable.</p><h2>9. Children's privacy</h2><p>Finora is not directed to children under the age required by applicable law. We do not knowingly request personal information from children for ordinary use of the site.</p><h2>10. Changes to this policy</h2><p>We may update this policy when the website, analytics, advertising or applicable requirements change. The latest version will be published on this page with an updated date.</p><h2>11. Contact</h2><p>For privacy questions, use the contact information on our <Link className="inline-link" to="/contact">Contact page</Link>.</p></section></>}

function Terms(){return <><Seo title="Terms of Use | Finora" description="Read the terms governing use of the Finora financial information website."/><PageHero eyebrow="TERMS OF USE" title="The terms for using Finora." text="Please read these terms before relying on information published on the site."/><section className="section legal-page"><h2>1. Informational purpose</h2><p>Finora provides general educational information. The site is not a bank, lender, broker, financial adviser, tax adviser or law firm, and its content is not individualized financial, tax or legal advice.</p><h2>2. No guarantee</h2><p>We do not guarantee approval, rates, savings, eligibility, availability or any particular outcome from using information on the site. Providers control their own products, pricing, underwriting and application processes.</p><h2>3. Third-party providers</h2><p>Links may take you to third-party websites. Those websites have their own terms, privacy policies and disclosures. Finora is not responsible for information or transactions conducted on third-party websites.</p><h2>4. Accuracy and changes</h2><p>We aim to publish useful and accurate information, but financial products and regulations can change. You should verify current terms with the relevant provider or qualified professional.</p><h2>5. Intellectual property</h2><p>Unless otherwise stated, Finora's original text, branding and design are protected by applicable intellectual property laws. You may not reproduce substantial portions of the site without permission.</p><h2>6. Acceptable use</h2><p>You agree not to interfere with the website, attempt unauthorized access, use automated systems to abuse the service or use the site for unlawful purposes.</p><h2>7. Advertising</h2><p>Finora may display advertising and may receive referral or affiliate compensation. See the <Link className="inline-link" to="/advertiser-disclosure">Advertiser Disclosure</Link> for more information.</p><h2>8. Changes</h2><p>These terms may be updated as the site evolves. Continued use of the website after an update constitutes acceptance of the revised terms to the extent permitted by law.</p></section></>}


function FinoraEnhancements(){return <style>{`
.calculator-section{padding-top:24px}.calculator-shell{background:#f7f9fc;border:1px solid #e3e8ef;border-radius:28px;padding:34px}.calculator-heading{display:grid;grid-template-columns:minmax(0,1fr) minmax(260px,.8fr);gap:32px;align-items:end;margin-bottom:24px}.calculator-heading h2{margin:6px 0 0}.calculator-heading p{margin:0;color:#667085;line-height:1.7}.loan-bank-picker{position:relative;padding:16px 18px;border:1px solid #dfe5ec;border-radius:18px;background:rgba(255,255,255,.9);box-shadow:0 10px 28px rgba(16,24,40,.07)}.loan-bank-picker-head{display:flex;align-items:end;justify-content:space-between;gap:14px;margin-bottom:11px}.loan-bank-picker-head>span{font-size:12px;font-weight:800;color:#344054}.loan-bank-picker-head small{font-size:10px;color:#98a2b3}.loan-bank-buttons{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:8px}.loan-bank-button{min-width:0;min-height:70px;padding:9px 8px;border:1px solid #e1e6ed;border-radius:13px;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:7px;cursor:pointer;transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease,background .18s ease}.loan-bank-button:hover{transform:translateY(-2px);border-color:#b9c5bd;box-shadow:0 8px 20px rgba(16,24,40,.08)}.loan-bank-button.active{border-color:#8ca55d;background:#f5f8ee;box-shadow:0 0 0 2px rgba(140,165,93,.13)}.loan-bank-logo{height:23px;display:flex;align-items:center;justify-content:center;font-weight:900;letter-spacing:-.04em;white-space:nowrap}.loan-bank-logo.wells-fargo{width:30px;border-radius:4px;background:#c8102e;color:#fff;font-size:11px;letter-spacing:-.08em}.loan-bank-logo.discover{font-size:11px;color:#1b365d;position:relative;padding-right:3px}.loan-bank-logo.discover:after{content:"";position:absolute;width:8px;height:8px;border-radius:50%;background:#f58220;right:-2px;bottom:1px}.loan-bank-logo.amex{width:37px;border-radius:3px;background:#1677b8;color:#fff;font-size:8px;letter-spacing:.04em}.loan-bank-logo.citi{font-family:Arial,sans-serif;font-size:17px;color:#17365d;position:relative}.loan-bank-logo.citi:before{content:"";position:absolute;left:11px;top:-4px;width:15px;height:8px;border-top:3px solid #e31837;border-radius:50%}.loan-bank-logo.capital-one{font-size:8px;color:#17365d;letter-spacing:-.03em}.loan-bank-button-copy{display:grid;gap:2px;text-align:center;min-width:0}.loan-bank-button-copy strong{font-size:9px;line-height:1.1;color:#101828;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}.loan-bank-button-copy b{font-size:8px;color:#15803d;white-space:nowrap}.loan-bank-note{font-size:11px!important;line-height:1.45!important;margin:9px 0 0!important;color:#98a2b3!important}.loan-bank-status{display:flex;flex-direction:column;gap:3px;margin-top:9px;padding:9px 11px;border-radius:11px;background:#f0fdf4;border:1px solid #bbf7d0}.loan-bank-status strong{font-size:12px;color:#15803d}.loan-bank-status span{font-size:10px;color:#667085;line-height:1.4}.calculator-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr)) auto;gap:14px;align-items:end}.calculator-grid label{display:grid;gap:8px;color:#344054;font-weight:600;font-size:13px}.calculator-grid input,.calculator-grid select{width:100%;height:48px;border:1px solid #d0d5dd;border-radius:12px;background:#fff;padding:0 14px;font-size:16px;box-sizing:border-box}.input-prefix{height:48px;border:1px solid #d0d5dd;border-radius:12px;background:#fff;display:flex;align-items:center;padding:0 12px;gap:7px}.input-prefix input{border:0!important;height:44px!important;padding:0!important;outline:0}.calculator-submit{height:48px;white-space:nowrap;border:0}.calculator-results{display:grid;grid-template-columns:1.5fr 1fr 1fr;gap:12px;margin-top:20px}.result-main,.result-stat{background:#fff;border:1px solid #e3e8ef;border-radius:16px;padding:18px}.result-main{display:grid;gap:5px}.result-main small{font-size:11px;font-weight:800;letter-spacing:.08em;color:#667085}.result-main strong{font-size:30px;line-height:1.1}.result-main span,.result-stat span{color:#667085;font-size:13px;line-height:1.5}.result-stat{display:grid;align-content:center;gap:6px}.result-stat b{font-size:18px}.calculator-note{font-size:12px;color:#667085;margin:14px 0 0}.category-deep-intro{padding-top:8px}.category-deep-grid{display:grid;grid-template-columns:minmax(280px,.85fr) minmax(0,1.15fr);gap:70px;align-items:start}.category-deep-grid h2{font-size:clamp(32px,4vw,50px);line-height:1.02;margin:7px 0}.category-deep-grid p{color:#667085;line-height:1.8;margin:0 0 14px}.category-topic-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:42px}.category-topic-card{display:flex;flex-direction:column;min-height:235px;padding:22px;border:1px solid #e3e8ef;border-radius:20px;background:#fff;text-decoration:none;box-shadow:0 10px 28px rgba(16,24,40,.05);transition:transform .2s ease,box-shadow .2s ease,border-color .2s ease}.category-topic-card:hover{transform:translateY(-3px);box-shadow:0 16px 34px rgba(16,24,40,.09);border-color:#cfd8d3}.category-topic-number{font-size:11px;font-weight:800;letter-spacing:.1em;color:#16a34a;margin-bottom:28px}.category-topic-card h3{margin:0 0 9px;font-size:20px;color:#101828}.category-topic-card p{margin:0;color:#667085;line-height:1.65;font-size:14px}.category-topic-card span{display:flex;align-items:center;gap:6px;margin-top:auto;padding-top:20px;color:#101828;font-size:13px;font-weight:750}.category-bottom{padding-top:0}.category-actions{display:flex;gap:18px;align-items:center;flex-wrap:wrap;margin-top:20px}.category-actions .primary-btn{display:inline-flex}.category-actions .text-link{display:inline-flex;align-items:center;gap:7px}@media(max-width:850px){.loan-bank-buttons{grid-template-columns:repeat(3,minmax(0,1fr))}.loan-bank-picker-head{display:block}.loan-bank-picker-head small{display:block;margin-top:3px}.category-deep-grid{grid-template-columns:1fr;gap:20px}.category-topic-grid{grid-template-columns:1fr}}
.article-meta{display:flex;gap:10px;flex-wrap:wrap;margin:14px 0 24px}.article-meta span{font-size:12px;color:#667085;border:1px solid #e3e8ef;border-radius:999px;padding:7px 10px}.article-takeaway,.article-example{margin:28px 0;padding:22px 24px;border:1px solid #e3e8ef;border-radius:18px;background:#f7f9fc}.article-takeaway strong{font-size:12px;text-transform:uppercase;letter-spacing:.08em}.article-takeaway p{margin:8px 0 0;font-size:18px;line-height:1.6}.article-example h2{margin:6px 0 10px}.article-example p{margin:0;line-height:1.75}.article-faq{margin:42px 0}.article-faq h2{margin:6px 0 18px}.article-faq-item{border-top:1px solid #e3e8ef}.article-faq-item:last-child{border-bottom:1px solid #e3e8ef}.article-faq-item button{width:100%;display:flex;justify-content:space-between;align-items:center;gap:20px;padding:17px 0;background:none;border:0;text-align:left;font:inherit;font-weight:650;cursor:pointer}.article-faq-item p{margin:0 0 17px;color:#667085;line-height:1.7}.article-sources{margin:40px 0;padding-top:26px;border-top:1px solid #e3e8ef}.article-sources p{color:#667085;line-height:1.7}.article-sources li{margin:8px 0}.article-sources a{color:inherit}.article-table-section{margin:42px 0}.article-table-section h2{margin-bottom:16px}.article-table-wrap{overflow-x:auto;border:1px solid #e3e8ef;border-radius:16px;background:#fff}.article-table-section table{width:100%;border-collapse:collapse;min-width:620px}.article-table-section th,.article-table-section td{text-align:left;padding:14px 16px;border-bottom:1px solid #e3e8ef;vertical-align:top;line-height:1.55}.article-table-section th{font-size:12px;text-transform:uppercase;letter-spacing:.05em;color:#475467;background:#f7f9fc}.article-table-section tr:last-child td{border-bottom:0}.table-note{font-size:12px!important;color:#667085;margin-top:10px!important;line-height:1.6!important}.article-section p{line-height:1.78}.article-sources a{word-break:break-word}.article-table-section td:first-child{font-weight:650}.calculator-grid button:focus-visible,.calculator-grid input:focus-visible,.calculator-grid select:focus-visible,.article-faq-item button:focus-visible{outline:3px solid rgba(0,96,255,.25);outline-offset:2px}@media(max-width:900px){.calculator-heading,.calculator-grid{grid-template-columns:1fr 1fr}.calculator-submit{grid-column:1/-1}.calculator-results{grid-template-columns:1fr 1fr}.result-main{grid-column:1/-1}}@media(max-width:600px){.calculator-shell{padding:22px;border-radius:20px}.calculator-heading,.calculator-grid,.calculator-results{grid-template-columns:1fr}.calculator-submit{grid-column:auto}.result-main{grid-column:auto}.article-takeaway p{font-size:16px}}

.about-story-intro{padding-top:10px}.about-story-grid{display:grid;grid-template-columns:minmax(280px,.8fr) minmax(0,1.2fr);gap:76px;align-items:start}.about-story-grid h2{font-size:clamp(34px,4.2vw,56px);line-height:1.02;margin:7px 0}.about-story-grid p{color:#667085;line-height:1.82;margin:0 0 18px}.about-founders{padding-top:18px}.founder-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:20px;margin-top:30px}.founder-card{padding:30px;border:1px solid #e3e8ef;border-radius:24px;background:#fff;box-shadow:0 12px 32px rgba(16,24,40,.05)}.founder-avatar{width:58px;height:58px;border-radius:16px;background:#f3f6ea;color:#8ca55d;display:flex;align-items:center;justify-content:center;margin-bottom:22px}.founder-card .eyebrow{margin-bottom:7px}.founder-card h3{font-size:30px;line-height:1.1;margin:0 0 5px}.founder-role{font-size:13px!important;font-weight:700;color:#344054!important;margin:0 0 20px!important}.founder-card p{color:#667085;line-height:1.75}.founder-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:20px}.founder-tags span{display:inline-flex;align-items:center;gap:6px;padding:8px 10px;border:1px solid #e3e8ef;border-radius:999px;color:#475467;font-size:11px;font-weight:700;background:#f8fafb}.about-timeline{padding-top:10px}.about-timeline-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1px;margin-top:28px;border:1px solid #e3e8ef;border-radius:22px;overflow:hidden;background:#e3e8ef}.timeline-item{display:grid;grid-template-columns:42px 1fr;gap:18px;padding:28px;background:#fff}.timeline-item>span{width:36px;height:36px;border-radius:11px;background:#f3f6ea;color:#8ca55d;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:900}.timeline-item h3{margin:0 0 7px;font-size:19px}.timeline-item p{margin:0;color:#667085;line-height:1.7;font-size:14px}.about-principles{padding-top:4px}.about-principles-grid{display:grid;grid-template-columns:minmax(280px,.9fr) minmax(0,1.1fr);gap:70px;align-items:start}.about-principles-grid h2{font-size:clamp(32px,4vw,50px);line-height:1.04;margin:7px 0 18px}.about-principles-grid>div>p{color:#667085;line-height:1.8}.principle-list{display:grid;gap:12px}.principle-item{display:grid;grid-template-columns:46px 1fr;gap:15px;padding:20px;border:1px solid #e3e8ef;border-radius:18px;background:#fff}.principle-item .icon-wrap{margin:0;width:46px;height:46px}.principle-item h3{margin:2px 0 5px;font-size:17px}.principle-item p{margin:0;color:#667085;line-height:1.6;font-size:13px}.about-what-we-do{padding:34px;border-radius:26px;background:#f7f9fc;border:1px solid #e3e8ef}.about-what-we-do h2{max-width:680px;font-size:clamp(32px,4vw,50px);line-height:1.04;margin:7px 0 30px}.about-service-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.about-service-grid>div{padding:22px;border-radius:18px;background:#fff;border:1px solid #e3e8ef}.about-service-grid svg{color:#8ca55d}.about-service-grid h3{margin:14px 0 7px;font-size:18px}.about-service-grid p{margin:0;color:#667085;line-height:1.65;font-size:13px}.about-editorial-box{padding:34px;border:1px solid #e3e8ef;border-radius:24px;background:#fff}.about-editorial-box h2{font-size:clamp(30px,3.5vw,46px);line-height:1.05;margin:7px 0 22px;max-width:700px}.about-editorial-columns{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px}.about-editorial-columns p{margin:0;color:#667085;line-height:1.75;font-size:14px}.about-editorial-links{display:flex;gap:20px;flex-wrap:wrap;margin-top:26px;padding-top:22px;border-top:1px solid #e3e8ef}.about-editorial-links a{display:inline-flex;align-items:center;gap:7px;color:#101828;font-weight:750;text-decoration:none}.about-editorial-links a:hover{color:#8ca55d}@media(max-width:850px){.about-story-grid,.about-principles-grid{grid-template-columns:1fr;gap:28px}.founder-grid,.about-timeline-grid,.about-service-grid{grid-template-columns:1fr}.about-editorial-columns{grid-template-columns:1fr}.about-what-we-do,.about-editorial-box{padding:24px}}
`}</style>}

function App(){
 return <BrowserRouter><FinoraEnhancements/><ScrollToTop/><Header/><main><Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/credit-cards" element={<CreditCardsPage/>}/>
  <Route path="/loans" element={<CategoryPage type="loans"/>}/>
  <Route path="/financial-guides" element={<CategoryPage type="guides"/>}/>
  <Route path="/money-topics" element={<MoneyTopics/>}/><Route path="/news" element={<Navigate to="/money-topics" replace/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/editorial-policy" element={<EditorialPolicy/>}/>
  <Route path="/advertiser-disclosure" element={<AdvertiserDisclosure/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/work-with-us" element={<WorkWithUs/>}/>
  <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
  <Route path="/terms" element={<Terms/>}/>
  <Route path="/article/how-to-invest-in-brazil-selic" element={<><Seo title="How to invest in Brazil and earn 13.5% a year | Finora" description="Deep guide to Brazil's Selic rate, fixed income, Tesouro Selic, taxes and how to invest through Tesouro Direto."/><BrazilInvestingArticle/></>} />
  {articles.map(a=><Route key={a.slug} path={"/article/"+a.slug} element={<Article article={a}/>}/>)}
  <Route path="*" element={<Home/>}/>
 </Routes></main><Footer/></BrowserRouter>
}
export default App;
