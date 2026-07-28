export const PROBLEMS = [
  { title: 'Growing too fast?', hint: 'Growth exposes the seams first.', approach: 'We map where volume breaks the current operating model, then reinforce the two or three points that actually buckle — instead of rebuilding everything.' },
  { title: 'Manual work consuming valuable time?', hint: 'Count the hours before writing code.', approach: 'We time the real work, quantify the cost, and automate only the steps where the payback is obvious and the exceptions are manageable.' },
  { title: 'Disconnected systems?', hint: 'Integration is a data contract problem.', approach: 'We define one source of truth per entity, then connect systems through contracts and events rather than brittle point-to-point syncs.' },
  { title: 'Poor decision-making from scattered data?', hint: 'Decisions first, dashboards second.', approach: 'We start from the decisions leaders make weekly, work backwards to the numbers that change them, and build only that model.' },
  { title: 'Need AI but don’t know where to begin?', hint: 'Find the one workflow worth it.', approach: 'We shortlist candidate workflows by value and feasibility, prove one in weeks, and give you an honest read on where AI is the wrong tool.' },
  { title: 'Operational bottlenecks?', hint: 'The constraint moves. Follow it.', approach: 'We instrument the flow, find the true constraint, relieve it, and re-measure — because fixing the wrong stage just moves the queue.' },
  { title: 'Low productivity?', hint: 'Usually a process, not a people, issue.', approach: 'We observe the actual path work takes, remove handoffs and re-entry, and give teams tooling that matches how they already think.' },
  { title: 'Legacy systems slowing innovation?', hint: 'Modernize in slices, not big bangs.', approach: 'We wrap the legacy core in stable interfaces, move capability out slice by slice, and keep the business running the whole time.' },
  { title: 'Difficulty scaling?', hint: 'Scale the model, not just the servers.', approach: 'We separate what must scale technically from what must scale operationally, then design for both with clear cost per unit of growth.' },
];

export const SOLUTIONS = [
  { title: 'Artificial Intelligence', teaser: 'Where judgement is repetitive and expensive.', problem: 'Teams drown in judgement calls that are repetitive but too nuanced for rules.', approach: 'We scope a narrow, evaluable task, build a measured baseline, and keep humans in the loop where stakes are high.', outcome: 'Faster decisions with an accuracy number you can defend.' },
  { title: 'Automation', teaser: 'Remove the work nobody should be doing.', problem: 'Skilled people spend their week copying, checking, and chasing.', approach: 'We document the real path, automate the deterministic middle, and design clean exception handling.', outcome: 'Hours returned every week, with fewer errors reaching customers.' },
  { title: 'Digital Transformation', teaser: 'Change the operating model, not the logos.', problem: 'Digital initiatives stall because the process underneath never changed.', approach: 'We sequence change by business outcome, pairing each technical step with an operational one.', outcome: 'A roadmap that ships value quarterly instead of a two-year promise.' },
  { title: 'Custom Platforms', teaser: 'When your advantage doesn’t fit a package.', problem: 'Off-the-shelf tools force your differentiator into someone else’s workflow.', approach: 'We build the minimum platform around what is genuinely yours and buy the rest.', outcome: 'Software that fits the business instead of the reverse.' },
  { title: 'Web Applications', teaser: 'Interfaces people don’t need training for.', problem: 'Internal tools are slow, ugly, and quietly avoided.', approach: 'We design around the primary task, then engineer for speed and reliability.', outcome: 'Higher adoption without a change-management campaign.' },
  { title: 'Mobile Applications', teaser: 'Work happens away from the desk.', problem: 'Field and floor teams record work twice — once on paper, once later.', approach: 'We build offline-first mobile flows that match the physical sequence of the job.', outcome: 'Data captured at the source, in real time.' },
  { title: 'Data Analytics', teaser: 'Numbers that survive scrutiny.', problem: 'Every team reports a different version of the same metric.', approach: 'We agree definitions, build a governed model, and expose it through a single layer.', outcome: 'One set of numbers nobody argues with.' },
  { title: 'Cloud Solutions', teaser: 'Right-sized, not fashionably large.', problem: 'Cloud bills grow while reliability doesn’t.', approach: 'We architect for your actual load profile, automate delivery, and make cost visible per workload.', outcome: 'Predictable spend and deployments that stop being events.' },
  { title: 'Industrial IoT', teaser: 'Make the plant floor legible.', problem: 'Machines produce signals nobody stores or interprets.', approach: 'We instrument selectively, stream to a reliable pipeline, and surface only actionable states.', outcome: 'Downtime seen coming instead of explained afterwards.' },
  { title: 'System Integration', teaser: 'Fewer moving parts, better contracts.', problem: 'Point-to-point connections multiply until nobody can change anything.', approach: 'We introduce contracts, events, and a clear ownership map per data domain.', outcome: 'Changes ship without breaking three other systems.' },
  { title: 'Business Intelligence', teaser: 'Reporting that drives a meeting.', problem: 'Dashboards exist but decisions still wait for a spreadsheet.', approach: 'We design reporting around the decision cadence and cut everything else.', outcome: 'Shorter meetings, clearer accountability.' },
  { title: 'API Development', teaser: 'Capability you can reuse.', problem: 'Business logic is duplicated in every new project.', approach: 'We expose stable, documented, versioned APIs with real observability.', outcome: 'New products built in weeks on what already exists.' },
  { title: 'Process Optimization', teaser: 'Sometimes the answer isn’t software.', problem: 'Automating a broken process makes it fail faster.', approach: 'We redesign the flow first, then decide what deserves to be automated.', outcome: 'Less complexity to build, run, and pay for.' },
  { title: 'Digital Consulting', teaser: 'A second opinion with skin in the game.', problem: 'Big decisions rest on vendor claims and internal politics.', approach: 'We assess options against your constraints and stay accountable through delivery.', outcome: 'Confident decisions, documented trade-offs.' },
];

export const FAQS = [
  { q: 'What kinds of organizations do you work with?', a: 'Manufacturers, hospitals, retailers, schools, logistics operators, utilities, banks, government bodies, NGOs, startups and enterprises. The common thread is a problem worth solving, not a sector.' },
  { q: 'Do you only develop software?', a: 'No. We deliver whatever solves the problem: process redesign, automation, integration, analytics, AI, or advice that saves you from building anything at all.' },
  { q: 'Can you modernize existing systems?', a: 'Yes, and usually incrementally. We wrap the legacy core in stable interfaces and move capability out in slices so the business keeps running throughout.' },
  { q: 'Can you help us identify the problem before proposing a solution?', a: 'That is our default. Engagements begin with a short discovery that produces a written problem statement, a measurable objective, and options — including the option to do less.' },
  { q: 'Do you provide long-term support?', a: 'Yes. We support what we build with clear service levels, and we prefer partnerships measured in years, with impact reviewed on a regular cadence.' },
];

export const INDUSTRIES = ['Manufacturing', 'Healthcare', 'Retail', 'Education', 'Logistics', 'Construction', 'Energy', 'Finance', 'Government', 'NGOs', 'Startups', 'Enterprise', 'SMEs'];

export const TECH = [
  { name: 'Python', role: 'AI & data' },
  { name: 'React', role: 'Interfaces' },
  { name: 'Node.js', role: 'Services' },
  { name: '.NET', role: 'Enterprise core' },
  { name: 'PostgreSQL', role: 'Data' },
  { name: 'Docker', role: 'Delivery' },
  { name: 'Azure', role: 'Cloud' },
  { name: 'AWS', role: 'Cloud' },
  { name: 'OpenAI', role: 'Reasoning' },
  { name: 'TensorFlow', role: 'Modelling' },
  { name: 'Flutter', role: 'Mobile' },
  { name: 'Power BI', role: 'Reporting' },
  { name: 'FastAPI', role: 'APIs' },
  { name: 'Kubernetes', role: 'Scale' },
  { name: 'Airflow', role: 'Pipelines' },
  { name: 'Terraform', role: 'Infrastructure' },
];

export const WHY = [
  { num: '01', title: 'Think before building', body: 'The first deliverable is a sharper question, not a sprint plan.' },
  { num: '02', title: 'Technology-agnostic', body: 'No stack loyalty. The problem picks the tools.' },
  { num: '03', title: 'Engineering excellence', body: 'Tested, observable, documented — systems that survive their authors.' },
  { num: '04', title: 'Long-term partnerships', body: 'We stay long enough to see whether it actually worked.' },
  { num: '05', title: 'Outcome-driven delivery', body: 'Success is a number agreed up front, then measured.' },
];

export const STEPS = [
  { num: '01', title: 'Understand', body: 'Listen to the people doing the work. Separate symptoms from causes before anything is proposed.' },
  { num: '02', title: 'Discover', body: 'Study data, systems, and constraints. Quantify the cost of the problem in the organization’s own terms.' },
  { num: '03', title: 'Design', body: 'Shape the smallest solution that changes the outcome, with the trade-offs written down.' },
  { num: '04', title: 'Build', body: 'Engineer in short cycles with production-grade quality, tested and observable from day one.' },
  { num: '05', title: 'Measure', body: 'Compare against the baseline agreed at the start. No baseline, no claim of impact.' },
  { num: '06', title: 'Improve', body: 'Feed what we learn back into the system. Solved problems still deserve maintenance.' },
];

export const WORKFLOW = [
  { num: '01', title: 'Discovery', body: 'Problem statement, stakeholders, and the measure of success.' },
  { num: '02', title: 'Research', body: 'Data, systems, and constraints examined in the real environment.' },
  { num: '03', title: 'Architecture', body: 'Decisions documented with trade-offs and cost of change.' },
  { num: '04', title: 'Development', body: 'Short cycles, working software, no surprise integrations.' },
  { num: '05', title: 'Deployment', body: 'Automated, reversible, and boring by design.' },
  { num: '06', title: 'Continuous improvement', body: 'Measured, tuned, and extended against the baseline.' },
];

export const PRINCIPLES = [
  { num: '01', title: 'Understand deeply', body: 'Time spent understanding is never the expensive part of a project.' },
  { num: '02', title: 'Question assumptions', body: 'Including our own, and especially the ones everybody repeats.' },
  { num: '03', title: 'Design intentionally', body: 'Every element earns its place, in software and in operations.' },
  { num: '04', title: 'Build responsibly', body: 'Secure, maintainable, and honest about its limits.' },
  { num: '05', title: 'Measure impact', body: 'If it can’t be measured, we don’t claim it.' },
  { num: '06', title: 'Never stop improving', body: 'The system that stops learning starts decaying.' },
];

export const FUTURE = [
  { name: 'AI', body: 'Applied narrowly, evaluated honestly, kept under human judgement.' },
  { name: 'Automation', body: 'Fewer humans doing machine work; more doing the thinking.' },
  { name: 'Smart Operations', body: 'Operations that sense their own state and respond.' },
  { name: 'Data Intelligence', body: 'Governed data that shortens the distance to a decision.' },
  { name: 'Digital Ecosystems', body: 'Systems that connect through contracts, not heroics.' },
  { name: 'Human-centered Innovation', body: 'Technology shaped around the people who live with it.' },
];
