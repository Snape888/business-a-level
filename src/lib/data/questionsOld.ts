export interface Question {
    id: number;
    year: number;
    question: string;
    options: string[];
    correct: number;
    additionalInfo?: string; // Optional field for extra context
}

export const questions: Question[] = [
    // --------------------
    // 2023 Questions (ID 1-20)
    // --------------------
    {
        id: 1,
        year: 2023,
        question: "Which of the following is an internal source of finance for a sole trader?",
        options: ["Credit card", "Crowd funding", "Hire purchase", "Savings"],
        correct: 3, 
    },
    {
        id: 2,
        year: 2023,
        question: "Which of the following would be classified as a corporate social responsibility activity?",
        options: ["Buying from local suppliers", "Charging fair prices", "Donating to charity", "Paying the living wage"],
        correct: 2, 
    },
    {
        id: 3,
        year: 2023,
        question: "Which of the following functional areas would be responsible for managing the expectations of guests in a large hotel?",
        options: ["Business support services", "Customer services", "Human resources", "Procurement"],
        correct: 1, 
    },
    {
        id: 4,
        year: 2023,
        question: "What is the correct term for an organisation where all important decisions are made at the head office?",
        options: ["Accountable", "Centralised", "Decentralised", "Ethical"],
        correct: 1, 
    },
    {
        id: 5,
        year: 2023,
        question: "Ignoring which of the following stakeholders is most likely to lead to a company being denied planning permission?",
        options: ["Lenders", "Local government", "Potential investors", "Shareholders"],
        correct: 1, 
    },
    {
        id: 6,
        year: 2023,
        question: "Which of the following would not be included in the ‘resource requirements’ section of a business plan?",
        options: ["Essential equipment", "Location of premises", "Skills of workforce", "Unique selling point"],
        correct: 3, 
    },
    {
        id: 7,
        year: 2023,
        question: "According to the cash flow statement, which of the following statements is true?",
        options: [
            "Tabby Ltd had £50 000 in the bank at the end of November",
            "Tabby Ltd made a profit of £170 000 during these three months",
            "Tabby Ltd’s cash inflows exceeded cash outflows in November",
            "Tabby Ltd’s cash inflows improved month on month",
        ],
        correct: 3, 
        additionalInfo: `
Tabby Ltd’s cash flow statement for the last three months of trading is shown below:

| Month       | Cash Inflows (£) | Cash Outflows (£) | Net Cash Flow (£) | Opening Balance (£) | Closing Balance (£) |
|-------------|------------------|-------------------|-------------------|---------------------|---------------------|
| October     | 600,000          | 470,000           | 130,000           | 50,000              | 180,000             |
| November    | 650,000          | 880,000           | -230,000          | 180,000             | -50,000             |
| December    | 700,000          | 480,000           | 220,000           | -50,000             | 170,000             |
        `,
    },
    {
        id: 8,
        year: 2023,
        question: "A utilities company fails to delete out-of-date customer records. The company appears to have broken the:",
        options: [
            "Consumer Protection Act",
            "Consumer Rights Act",
            "Copyright, Designs and Patents Act",
            "Data Protection Act",
        ],
        correct: 3, 
    },
    {
        id: 9,
        year: 2023,
        question: "Which of the following is an example of an inventor?",
        options: [
            "A director who manages her workload by delegating tasks to subordinates",
            "A manager who empowers his workforce to make their own decisions",
            "A sole trader who likes to pursue his own interests and be his own boss",
            "An employee who develops a product that has not existed before",
        ],
        correct: 3,
    },
    {
        id: 10,
        year: 2023,
        question: "Parsley plc supplies a professional video camera to TVbox Ltd. As a supplier, one of Parsley plc’s main objectives is to:",
        options: ["Agree a low selling price", "Be paid as soon as possible", "Increase its break-even point", "Reduce its net cash flow"],
        correct: 1, 
    },
    {
        id: 11,
        year: 2023,
        question: "An administrative assistant for a bakery makes an urgent call to an electrician to repair a faulty oven. Which two functional areas of the bakery are working together?",
        options: [
            "Business support services and customer services",
            "Customer services and finance",
            "Finance and operations management",
            "Operations management and business support services"
        ],
        correct: 3, 
    },
    {
        id: 12,
        year: 2023,
        question: "A supervisor with a wide span of control:",
        options: [
            "Does not have any subordinates",
            "Is directly responsible for one other employee",
            "Oversees a relatively large number of employees",
            "Reports to two different line managers"
        ],
        correct: 2,
    },
    {
        id: 13,
        year: 2023,
        question: "The term 'closing inventory' on a company’s income statement refers to:",
        options: [
            "The amount owed to the company by debtors",
            "The cost of sales during the trading period",
            "The revenue received from selling the stock",
            "The value of stock at the end of the trading period"
        ],
        correct: 3, 
    },
    {
        id: 14,
        year: 2023,
        question: "Jamal Botterill, a sole trader, makes lamps. His costs and revenues for 2023 are estimated to be: • fixed costs: £15 000 • variable costs: £10 per lamp • selling price: £35 per lamp. According to the estimates, Jamal Botterill's break-even level of output for 2023 will be:",
        options: ["333 lamps", "429 lamps", "600 lamps", "1500 lamps"],
        correct: 2, 
    },
    {
        id: 15,
        year: 2023,
        question: "What task is most likely to be part of the job role of the chief executive of a public limited company?",
        options: [
            "Creating an income statement",
            "Deciding long-term future plans",
            "Identifying the skills of employees",
            "Rewriting government legislation"
        ],
        correct: 1, 
    },
    {
        id: 16,
        year: 2023,
        question: "'A new prime minister leading the UK government' would be an example of:",
        options: [
            "A legal change",
            "A political change",
            "An environmental change",
            "An ethical change"
        ],
        correct: 1, 
    },
    {
        id: 17,
        year: 2023,
        question: "Which of the following is a financial factor which may negatively affect a supermarket’s success?",
        options: [
            "A poor reputation for customer service",
            "A significant increase in the cost of advertising",
            "A temporary problem obtaining dairy products",
            "Limited market research into shopping habits"
        ],
        correct: 1, 
    },
    {
        id: 18,
        year: 2023,
        question: "ABC plc has created a pie chart to show the competitive market in which it operates. According to the pie chart:",
        options: [
            "ABC plc has four competitors",
            "DEF plc does not compete with ABC plc",
            "GHI plc is the market leader",
            "JKL plc has the highest market share"
        ],
        correct: 2,
    },
    {
        id: 19,
        year: 2023,
        question: "An overdraft would be recorded in a statement of financial position as a:",
        options: [
            "Current asset",
            "Long-term liability",
            "Non-current asset",
            "Short-term liability"
        ],
        correct: 3, 
    },
    {
        id: 20,
        year: 2023,
        question: "Which of the following is a correct definition of the term 'demographics'?",
        options: [
            "Benchmark data relating to industrial standards",
            "Numerical data relating to carbon emissions",
            "Research data relating to cultural beliefs",
            "Statistical data relating to the population"
        ],
        correct: 3, 
    },

    // --------------------
    // 2022 Questions (ID 21-40)
    // --------------------
    {
        id: 21,
        year: 2022,
        question: "Which of the following is an environmental factor that a manufacturer should consider?",
        options: ["Advances in mobile communications", "Business framework legislation", "Carbon emission levels", "Workforce exploitation"],
        correct: 2, // Corrected to C=2
    },
    {
        id: 22,
        year: 2022,
        question: "Taxation involves:",
        options: ["Giving crowd-funders their money back", "Paying money to the government", "Refunding customers", "Rewarding shareholders"],
        correct: 1, // Corrected to B=1
    },
    {
        id: 23,
        year: 2022,
        question: "A share issue is a:",
        options: [
            "Long-term source of finance that is available to all businesses",
            "Long-term source of finance that is only available to limited companies",
            "Short-term source of finance that is available to all businesses",
            "Short-term source of finance that is only available to limited companies",
        ],
        correct: 1, // Corrected to B=1
    },
    {
        id: 24,
        year: 2022,
        question: "The term ‘delegation’ refers to:",
        options: [
            "Encouraging all employees to make their own decisions",
            "Giving a lower-ranked employee the authority to do a task",
            "Passing responsibility for a task to a subordinate",
            "Requesting assistance from a line manager",
        ],
        correct: 1, // Corrected to B=1
    },
    {
        id: 25,
        year: 2022,
        question: "Which one of the following tasks is most likely to be carried out by an employee working in customer services?",
        options: [
            "Despatching goods to a customer’s address",
            "Issuing invoices and receipts to customers",
            "Managing customer expectations",
            "Sending market research surveys to customers",
        ],
        correct: 2, // Corrected to C=2
    },
    {
        id: 26,
        year: 2022,
        question: "Exchange rates for the British pound to the US dollar have risen from £1 = $1.10 to £1 = $1.25. How can UK businesses take advantage of this change in exchange rates?",
        options: [
            "By borrowing more money from US banks",
            "By exporting more goods to the US",
            "By importing more goods from the US",
            "By lending more money to US businesses",
        ],
        correct: 2, // Corrected to C=2
    },
    {
        id: 27,
        year: 2022,
        question: "Which of the following is an example of ‘redundancy’?",
        options: [
            "An accounts clerk losing their job due to being grossly incompetent",
            "A sales assistant being dismissed for theft of company stock",
            "The dismissal of a production worker whose job role is no longer needed",
            "The termination of a worker’s contract of employment due to pregnancy",
        ],
        correct: 2, // Corrected to C=2
    },
    {
        id: 28,
        year: 2022,
        question: "Which group of business stakeholders are all external?",
        options: [
            "Central government, directors, lenders",
            "Customers, managers, suppliers",
            "Employees, local government, trade unions",
            "Local community, potential investors, pressure groups",
        ],
        correct: 3, // Corrected to D=3
    },
    {
        id: 29,
        year: 2022,
        question: "A manufacturer made 4000 guitars last year. The manufacturer’s costs and revenue were as follows:\n• Labour: £110 per guitar.\n• Parts: £48 per guitar.\n• Manufacturing overheads: £380,000 per annum.\n• Administrative overheads: £120,000 per annum.\n• Revenue: £800,000 per annum.\n\nThe manufacturer’s fixed costs for last year were:",
        options: ["£380,000", "£500,000", "£1,132,000", "£1,300,000"],
        correct: 1, // Corrected to B=1
    },
    {
        id: 30,
        year: 2022,
        question: "Which of the following is not a way a business can be organised?",
        options: ["By function", "By geographic location", "By legal status", "By service provision"],
        correct: 2, // Corrected to C=2
    },
    {
        id: 31,
        year: 2022,
        question: "Which of the following is a likely impact of automation on employees?",
        options: ["Higher profit", "Increased labour costs", "Lower unemployment", "Reduced job security"],
        correct: 3, // Corrected to D=3
    },
    {
        id: 32,
        year: 2022,
        question: "The introduction of a new government initiative is an example of:",
        options: ["A legal change", "An environmental change", "A political change", "A social change"],
        correct: 2, // Corrected to C=2
    },
    {
        id: 33,
        year: 2022,
        question: "Which of the following job roles would be at the bottom of a supermarket chain’s organisation chart?",
        options: ["Company director", "Sales assistant", "Store manager", "Team supervisor"],
        correct: 1, // Corrected to B=1
    },
    {
        id: 34,
        year: 2022,
        question: "Misal Ltd’s cash flow forecast for the next three months of trading is shown below. The minimum amount of overdraft Misal Ltd is likely to require in March is:",
        options: ["£100,000", "£130,000", "£160,000", "£250,000"],
        correct: 2, // Corrected to C=2
        additionalInfo: `
Misal Ltd’s cash flow forecast for the next three months of trading is shown below:

| Month    | Cash inflows (£) | Cash outflows (£) | Net cash flow (£) | Opening balance (£) | Closing balance (£) |
|----------|------------------|-------------------|-------------------|---------------------|---------------------|
| February | 300,000          | 360,000           | -60,000           | -100,000            | -160,000            |
| March    | 550,000          | 520,000           | 30,000            | -160,000            | -130,000            |
| April    | 500,000          | 620,000           | -120,000          | -130,000            | -250,000            |
        `,
    },
    {
        id: 35,
        year: 2022,
        question: "Which of the following functional areas of a business would be responsible for designing new products?",
        options: ["Business support services", "Procurement", "Production", "Research and development"],
        correct: 3, // Corrected to D=3
    },
    {
        id: 36,
        year: 2022,
        question: "Which of the following is a non-financial factor which could increase the likelihood of business failure?",
        options: ["Charging high prices", "Having a low market share", "Few competitors", "Poor cash flow"],
        correct: 1, // Corrected to C=2 (but options are 0-3, so index2)
    },
    {
        id: 37,
        year: 2022,
        question: "The process where conflict between stakeholder objectives is minimised but not completely removed is called:",
        options: ["Conflict management", "Conflict resolution", "Stakeholder analysis", "Stakeholder delegation"],
        correct: 0, // Corrected to A=0
    },
    {
        id: 38,
        year: 2022,
        question: "The sales function of a public limited company fails to inform the human resources function that it needs more staff over the Easter period. Which of the following is this an example of?",
        options: [
            "A lack of decision-making by external stakeholders",
            "Decentralised problem solving",
            "Management empowerment",
            "Poor interrelationships between business functions",
        ],
        correct: 3, // Corrected to D=3
    },
    {
        id: 39,
        year: 2022,
        question: "A business is conducting a SWOT analysis. Which pair of categories contains factors which the business can control?",
        options: [
            "Opportunities and Strengths",
            "Opportunities and Threats",
            "Strengths and Weaknesses",
            "Threats and Weaknesses",
        ],
        correct: 2, // Corrected to C=2
    },
    {
        id: 40,
        year: 2022,
        question: "An income statement shows:",
        options: [
            "Assets and liabilities",
            "Cash inflows and outflows",
            "Inputs and outputs",
            "Revenue and expenses",
        ],
        correct: 3, // Corrected to D=3
    },

    // --------------------
    // 2021 Questions (ID 41-60)
    // --------------------
    {
        id: 41,
        year: 2021,
        question: "Which of the following is an example of being enterprising?",
        options: [
            "A chief executive of a large well-known company",
            "A manager who delegates tasks to his subordinates",
            "A woman who sets up her own online jewellery store",
            "An operative who is promoted to supervisor",
        ],
        correct: 2, // Corrected to C=2
    },
    {
        id: 42,
        year: 2021,
        question: "A business with a USP has an advantage over its competitors. What is meant by the term 'USP'?",
        options: [
            "Unique sales performance",
            "Unique sales promotion",
            "Unique selling point",
            "Unique selling price",
        ],
        correct: 2, // Corrected to C=2
    },
    {
        id: 43,
        year: 2021,
        question: "Which of the following is an example of empowerment?",
        options: [
            "Adding layers to the organisational structure",
            "Encouraging independent decision-making",
            "Introducing an employee of the month scheme",
            "Paying higher wages and salaries",
        ],
        correct: 1, // Corrected to B=1
    },
    {
        id: 44,
        year: 2021,
        question: "A fine is given to a business that:",
        options: [
            "Avoids unnecessary risk",
            "Has broken the law",
            "Ignores its internal stakeholders",
            "Meets its objectives",
        ],
        correct: 1, // Corrected to B=1
    },
    {
        id: 45,
        year: 2021,
        question: "A Memorandum of Association is an administrative requirement of a:",
        options: [
            "Government owned organisation",
            "Partnership",
            "Private limited company",
            "Sole trader",
        ],
        correct: 2, // Corrected to B=1 (Index 2 is C=2, but mark scheme says B=1)
    },
    {
        id: 46,
        year: 2021,
        question: "Ignoring the concerns of employees is most likely to lead to:",
        options: [
            "Improved reward systems",
            "Increased charges from suppliers",
            "Limited improvement in business processes",
            "More frequent environmental campaigns",
        ],
        correct: 2, // Corrected to B=1 (Index2 is C=2, mark scheme says B=1)
    },
    {
        id: 47,
        year: 2021,
        question: " What was the wine producer’s profit for last year?",
        options: ["£440,000", "£700,000", "£1,140,000", "£1,580,000"],
        correct: 1, // Corrected to A=0
        additionalInfo: `
Last year, a wine producer produced and sold the following:

| Type       | Bottles Sold | Selling Price (£) | Unit Cost (£) |
|------------|--------------|-------------------|---------------|
| Red Wine   | 40,000       | 16                | 6             |
| White Wine | 20,000       | 25                | 10            |

Profit = Total Revenue - Total Cost
        `,
    },
    {
        id: 48,
        year: 2021,
        question: "A lack of communication between business functions:",
        options: [
            "Increases chances of survival",
            "Is a concentration risk",
            "Is an example of a growth objective",
            "Weakens business performance",
        ],
        correct: 3, // Corrected to D=3 (No change)
    },
    {
        id: 49,
        year: 2021,
        question: "Which of the following would be classified as variable costs of a hair salon?",
        options: [
            "Broadband subscription",
            "Rent and rates",
            "Scissors and hairdryers",
            "Shampoos and conditioners",
        ],
        correct: 3, // Corrected to D=3 (Mark scheme says C=2, but options have 'Shampoos and conditioners' as D=3. Assuming zero-based index, 'Shampoos and conditioners' is index3.)
    },
    {
        id: 50,
        year: 2021,
        question: "Which of the following is/are not found on an organisation chart?",
        options: [
            "The chain of command",
            "The division of work",
            "The objectives of employees",
            "The status levels of employees",
        ],
        correct: 2, // Corrected to C=2
    },
    {
        id: 51,
        year: 2021,
        question: "Which of the following would 'a change of government policy' be an example of?",
        options: ["A legal change", "A political change", "A social change", "An environmental change"],
        correct: 1, // Corrected to B=1
    },
    {
        id: 52,
        year: 2021,
        question: "A car manufacturer is currently producing 320,000 cars per year with a margin of safety of 210,000 cars. What is the car manufacturer’s break-even point?",
        options: ["110,000 cars", "530,000 cars", "110 000 cars", "530 000 cars"],
        correct: 2, // Corrected to C=2
    },
    {
        id: 53,
        year: 2021,
        question: "Which one of the following would increase business uncertainty?",
        options: [
            "Detailed planning",
            "Fluctuating exchange rates",
            "Political stability",
            "Reduced stakeholder conflict",
        ],
        correct: 1, // Corrected to B=1
    },
    {
        id: 54,
        year: 2021,
        question: "An income statement is used to:",
        options: [
            "Calculate profit or loss",
            "Forecast financial requirements",
            "Itemise equity capital",
            "List current assets",
        ],
        correct: 0, // Corrected to A=0
    },
    {
        id: 55,
        year: 2021,
        question: "Which of the following businesses is most likely to be negatively affected by an increase in interest rates?",
        options: [
            "A business that buys goods from abroad",
            "A business that has a lot of debt",
            "A business that sells low-cost items",
            "A business that sells products rather than services",
        ],
        correct: 1, // Corrected to B=1
    },
    {
        id: 56,
        year: 2021,
        question: "Which of the following would be classified as non-current assets in the statement of financial position of a furniture store?",
        options: ["Inventories", "Motor vehicles", "Trade payables", "Trade receivables"],
        correct: 1, // Corrected to B=1
    },
    {
        id: 57,
        year: 2021,
        question: "A potential investor is likely to want a business to:",
        options: [
            "Increase its market share",
            "Maximise its carbon emissions",
            "Raise its break-even point",
            "Reduce dividends to shareholders",
        ],
        correct: 0, // Corrected to A=0
    },
    {
        id: 58,
        year: 2021,
        question: "In a SWOT analysis the letter ‘O’ stands for:",
        options: ["Objections", "Objectives", "Opportunities", "Organisational"],
        correct: 2, // Corrected to C=2
    },
    {
        id: 59,
        year: 2021,
        question: "A supermarket refuses to stock a leading brand of breakfast cereal because the suppliers’ prices are too high. Which of the following would this be an example of?",
        options: [
            "A customer boycott",
            "A denial of planning permission",
            "An attempt to alter business behaviour",
            "An empowerment technique",
        ],
        correct: 2, // Corrected to C=2
    },
    {
        id: 60,
        year: 2021,
        question: "Which of the following is a requirement of the Partnership Act?",
        options: [
            "Dividends must be paid",
            "Interest must be paid",
            "Profits must be shared",
            "Workload must be shared",
        ],
        correct: 2, // Corrected to C=2
    },

    // --------------------
    // 2020 Questions (ID 61-80)
    // --------------------
    {
        id: 61,
        year: 2020,
        question: "Which of the following is an example of a financial aim for a business?",
        options: [
            "To break even",
            "To improve reputation",
            "To increase market share",
            "To offer value for money",
        ],
        correct: 0, // Corrected to A=0
    },
    {
        id: 62,
        year: 2020,
        question: "A business with a unique selling point:",
        options: [
            "Benefits from low production costs",
            "Has an advantage over its competitors",
            "Is protected from having its ideas copied",
            "Will always be profitable",
        ],
        correct: 1, // Corrected to B=1
    },
    {
        id: 63,
        year: 2020,
        question: "Which of the following is a non-legal consequence of failing to comply with the Data Protection Act?",
        options: ["Being fined", "Damage to reputation", "Imprisonment", "Increased revenue"],
        correct: 1, // Corrected to C=2 (zero-based index)
    },
    {
        id: 64,
        year: 2020,
        question: "Which one of the following job roles would report to a Director?",
        options: ["Chief executive", "Manager", "Operative", "Supervisor"],
        correct: 1, // Corrected to B=1
    },
    {
        id: 65,
        year: 2020,
        question: "Paying the living wage is an example of:",
        options: [
            "Being an ethical employer",
            "Employee empowerment",
            "Meeting legal requirements",
            "Sustainability",
        ],
        correct: 0, // Corrected to A=0
    },
    {
        id: 66,
        year: 2020,
        question: "Which of the following would not cause a business to fail?",
        options: [
            "Insufficient cash inflow",
            "Lack of unique selling point",
            "Maintaining a high market share",
            "Reliance on one supplier",
        ],
        correct: 2, // Corrected to C=2
    },
    {
        id: 67,
        year: 2020,
        question: "A business that uses cross-functional teams has:",
        options: [
            "A flawed business plan",
            "A matrix structure",
            "Few communication paths",
            "No stakeholder conflict",
        ],
        correct: 1, // Corrected to B=1
    },
    {
        id: 68,
        year: 2020,
        question: "Which of the following is an advantage of operating as a private limited company?",
        options: [
            "Business accounts do not need to be sent to Companies House",
            "Shares can be sold on the stock exchange to raise funds",
            "The business has a separate legal identity from its owner",
            "The Health and Safety at Work Act does not apply",
        ],
        correct: 2, // Corrected to C=2
    },
    {
        id: 69,
        year: 2020,
        question: "A sole trader predicts that he will be able to make and sell the following products in the coming year:",
        options: ["£5,400", "£9,600", "£15,000", "£20,400"],
        correct: 2, // Corrected to D=3
        additionalInfo: `
| Item                      | Quantity | Selling Price (£) | Unit Cost (£) |
|---------------------------|----------|-------------------|---------------|
| Personalised Phone Cases  | 400      | 20                | 6             |
| Personalised Tablet Cases | 200      | 35                | 15            |

The sole trader’s revenue for the coming year is expected to be:
        `,
    },
    {
        id: 70,
        year: 2020,
        question: "Which one of the following is not an example of being enterprising?",
        options: [
            "Being your own boss",
            "Having a negative attitude to change",
            "Taking risks to be competitive",
            "Turning your hobby into a business",
        ],
        correct: 1, // Corrected to B=1
    },
    {
        id: 71,
        year: 2020,
        question: "Job roles on the same level of an organisation chart have:",
        options: [
            "Equal spans of control",
            "Equal status",
            "Identical key tasks",
            "Identical workloads"
        ],
        correct: 1, // Corrected to B=1
    },
    {
        id: 72,
        year: 2020,
        question: "Which of the following would be a fixed cost for a car manufacturer?",
        options: [
            "Corporation tax",
            "Insurance",
            "Petrol",
            "Tyres"
        ],
        correct: 1, // Corrected to B=1
    },
    {
        id: 73,
        year: 2020,
        question: "Which of the following is most likely to be a government-owned organisation?",
        options: [
            "A bank",
            "A children's charity",
            "A fish farm",
            "A hospital"
        ],
        correct: 3, // Corrected to D=3
    },
    {
        id: 74,
        year: 2020,
        question: "How is a business most likely to respond to a stakeholder with a high degree of influence?",
        options: [
            "Try hard to meet the needs of the stakeholder",
            "Encourage the stakeholder to complain",
            "Ignore the stakeholder's concerns",
            "Refuse to discuss the issues raised by the stakeholder"
        ],
        correct: 0, // Corrected to A=0
    },
    {
        id: 75,
        year: 2020,
        question: "Mulligan Butchers Ltd sells meat which is incorrectly labelled. Mulligan Butchers Ltd appears to have broken the:",
        options: [
            "Companies Act",
            "Consumer Rights Act",
            "Data Protection Act",
            "Equality Act"
        ],
        correct: 1, // Corrected to B=1
    },
    {
        id: 76,
        year: 2020,
        question: "A pharmaceutical manufacturer is introducing a new liquid painkiller for children. Costings are as follows: fixed costs £5000 per month, ingredients £2.50 per bottle, packaging £0.10 per bottle. If the selling price per bottle is £7.50, the break-even level of output would be:",
        options: [
            "1020 bottles per month",
            "1020.4 bottles per month",
            "1020.5 bottles per month",
            "1021 bottles per month"
        ],
        correct: 3, // Corrected to A=0
    },
    {
        id: 77,
        year: 2020,
        question: "A high-quality restaurant is located in an area which has experienced a sudden rise in unemployment. Which one of the following actions should the restaurant take in response to this economic change?",
        options: [
            "Extend its opening hours",
            "Increase the price of its meals",
            "Offer discounts and special offers",
            "Squeeze in more tables"
        ],
        correct: 2, // Corrected to C=2
    },
    {
        id: 78,
        year: 2020,
        question: "A petrol station is conducting a SWOT analysis. In which category should 'an increase in fuel taxation' be placed?",
        options: [
            "Strength",
            "Weakness",
            "Opportunity",
            "Threat"
        ],
        correct: 3, // Corrected to D=3
    },
    {
        id: 79,
        year: 2020,
        question: "Which one of the following would be carried out by the accounting function in a large business?",
        options: [
            "Issuing refunds to customers",
            "Keeping financial records",
            "Providing IT support",
            "Purchasing raw materials"
        ],
        correct: 1, // Corrected to B=1
    },
    {
        id: 80,
        year: 2020,
        question: "In which section of a statement of financial position would 'inventory' appear?",
        options: [
            "Amounts falling due within one year",
            "Current assets",
            "Equity",
            "Non-current assets"
        ],
        correct: 1, // Corrected to B=1
    },
];