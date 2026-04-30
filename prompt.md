You are a senior product designer, UI/UX architect, frontend engineer, and hackathon-winning startup strategist.

Your task is to design and build a modern web platform based on `masterplan.md`.

Project name:
Digital Naadam Universe

Context:
This is for Dev Hackathon 2026 under the theme “Digital Töv Tsengeldeh” / “Digital Central Stadium.” The goal is to create a purely web-based digital infrastructure for up to 1000 Naadam spectators, tourists, vendors, service companies, organizers, sponsors, and behind-the-scenes staff around Mongolia’s Central Stadium during the National Naadam Festival.

Important constraints:
- This must be a WEBSITE / WEB APP.
- Do not propose IoT.
- Do not propose physical devices.
- Do not propose Bluetooth mesh, sensors, RFID, NFC, cameras, kiosks, or hardware.
- Everything must be achievable as a web platform.
- Design for hackathon feasibility.
- Build something that looks premium, polished, and demo-ready.
- Prioritize UI/UX, clarity, wow factor, and realistic implementation.
- The final result should feel like a modern event operating system, not a basic information website.

Main product vision:
Create a web-based “Naadam Operating System” that unifies:
1. Spectator experience.
2. Tourist assistance.
3. Vendor operations.
4. Sponsor visibility.
5. Organizer control.
6. Safety reporting.
7. Data analytics.
8. Post-event insights.

The platform should feel like a combination of:
- Apple-level clean visual design.
- Linear / Vercel style dashboard precision.
- Airbnb-level user-friendly discovery.
- Stripe-level admin dashboard polish.
- Duolingo-style gamification.
- Dribbble-inspired visual creativity.
- Mongolian cultural identity adapted into modern digital design.

Do not copy any real platform. Use them only as inspiration for quality level.

Core design direction:
- Modern, clean, simple, premium.
- Spacious layout.
- Soft rounded cards.
- Subtle glassmorphism only where useful.
- Smooth micro-interactions.
- Large readable typography.
- Mobile-first but desktop dashboard must also look strong.
- Use Mongolian cultural accents without making it look old-fashioned.
- Avoid clutter.
- Avoid generic Bootstrap-like UI.
- Avoid childish graphics.
- Avoid overused gradients.
- Use a confident product feel.

Suggested visual style:
- Background: warm off-white or deep navy depending on section.
- Accent colors: Naadam red, royal blue, gold, and white.
- Use accents carefully, not everywhere.
- Use elegant Mongolian pattern-inspired borders or dividers in a subtle way.
- Use clean cards for data, maps, schedules, orders, alerts, and analytics.
- Use polished empty states, loading states, hover states, and success states.

Primary users:
1. Spectator.
2. Tourist.
3. Vendor.
4. Sponsor.
5. Event organizer.
6. Staff / volunteer.
7. Emergency or support team.

Required web app structure:

A. Public Landing Page

Goal:
Convince judges that this is a serious, innovative, realistic digital infrastructure solution for Naadam.

Sections:
1. Hero section
   - Headline: “Naadam, organized like a modern digital city.”
   - Subheadline: “A web-based operating system for spectators, vendors, sponsors, and event teams at Central Stadium.”
   - CTA buttons: “View Spectator Demo” and “Open Organizer Dashboard.”
   - Visual: animated mockup of the platform showing map, schedule, vendor orders, and analytics cards.

2. Problem section
   Show problems:
   - Visitors cannot easily find facilities.
   - Tourists struggle with language and schedules.
   - Vendors cannot manage demand efficiently.
   - Organizers lack unified real-time information.
   - Staff coordination is fragmented.
   - Sponsors lack measurable digital exposure.
   - Post-event reporting is manual.

3. Solution section
   Present Digital Naadam Universe as one web platform with different portals.

4. Feature grid
   Include:
   - Interactive Stadium Map.
   - Live Schedule.
   - Digital Ordering.
   - Multilingual Assistant.
   - Safety Reporting.
   - Gamified Naadam Journey.
   - Vendor Portal.
   - Sponsor Manager.
   - Organizer Command Center.
   - Post-event Analytics.

5. “Why it works in Mongolia” section
   Explain:
   - Smartphone-first population.
   - Naadam has dense crowds and mixed user types.
   - Mongolian events need unified digital coordination.
   - Web app avoids app install friction.
   - Works for tourists and locals.
   - Scales to other festivals, concerts, expos, and sports events.

6. Demo route cards
   Cards:
   - Spectator View.
   - Vendor View.
   - Organizer View.
   - Sponsor View.
   - Staff View.

7. Business model section
   Revenue:
   - Event licensing.
   - Vendor transaction fees.
   - Sponsor placements.
   - Premium analytics.
   - White-label platform for other events.

8. Closing CTA
   “Launch the Digital Stadium.”

B. Spectator Web App

This is the main public user experience.

Pages / modules:

1. Home
   - Greeting.
   - Today’s Naadam schedule.
   - Next event countdown.
   - Quick buttons:
     - Map.
     - Food.
     - Schedule.
     - Help.
     - Translate.
     - My Journey.
   - Alert banner for important notices.
   - “Recommended next” card.

2. Interactive Map
   Since this is a hackathon, use a beautiful custom SVG or image-based stadium map.
   It must support:
   - Search.
   - Category filters:
     - Food.
     - Restrooms.
     - Entrances.
     - Exits.
     - First aid.
     - Information booth.
     - Merchandise.
     - Seating zones.
   - Clickable locations.
   - Detail panel for each location.
   - Estimated walking time.
   - Queue indicator based on mock data.
   - “Take me there” button that shows a simple route overlay.

3. Live Schedule
   - Tabs:
     - Wrestling.
     - Archery.
     - Horse racing.
     - Opening ceremony.
     - Cultural events.
   - Event cards:
     - Time.
     - Location.
     - Status: upcoming, live, finished.
     - Save/remind button.
   - Live result updates using mock data.
   - Highlight card after event ends.

4. Food and Vendor Ordering
   - Vendor list.
   - Search and category filters.
   - Menu items.
   - Queue time.
   - Price.
   - Add to cart.
   - Checkout mock flow.
   - Order status:
     - Received.
     - Preparing.
     - Ready.
   - Pickup instruction.
   - No real payment needed for prototype. Use mock QPay/bank payment screen.

5. Multilingual Tourist Assistant
   - Chat UI.
   - Languages:
     - Mongolian.
     - English.
     - Chinese.
     - Russian.
     - Korean.
   - Preset questions:
     - “Where is my seat?”
     - “Where is the nearest restroom?”
     - “What event is happening now?”
     - “How do I order food?”
     - “What does this Naadam tradition mean?”
   - Translation card for announcements.
   - Cultural explanation cards:
     - Wrestling.
     - Archery.
     - Horse racing.
     - Deel.
     - Naadam greetings.

6. Safety and Help
   - Emergency contacts.
   - Report issue form:
     - Lost item.
     - Medical help.
     - Crowd problem.
     - Clean-up needed.
     - Wrong information.
   - Location selector.
   - Description field.
   - Submit button.
   - After submit, show tracking status.
   - Staff receives this in organizer dashboard.

7. Gamified Naadam Journey
   Keep this feature but do not make it social-media focused.
   - Personal journey map.
   - Badges:
     - First Match Watched.
     - Tried Traditional Food.
     - Found Archery Zone.
     - Learned 5 Naadam Facts.
     - Helped Report an Issue.
   - Quiz cards.
   - Points.
   - Rewards:
     - Vendor discount.
     - Sponsor coupon.
     - Digital souvenir.
   - Leaderboard optional, but not social-network based.

8. My Day Recap
   - Auto-generated personal event summary.
   - Events visited.
   - Badges earned.
   - Food ordered.
   - Favorite moment.
   - Downloadable or shareable recap card.
   - Keep sharing optional, not a core social feature.

C. Vendor Portal

Goal:
Make life easier for food, merchandise, and service companies.

Pages:

1. Vendor Dashboard
   - Today’s orders.
   - Revenue.
   - Active menu items.
   - Average wait time.
   - Low-stock warnings.
   - Customer demand chart.

2. Order Management
   - Kanban columns:
     - New.
     - Preparing.
     - Ready.
     - Completed.
   - Each order card:
     - Order ID.
     - Items.
     - Pickup time.
     - Customer note.
   - Buttons:
     - Accept.
     - Mark preparing.
     - Mark ready.
     - Complete.

3. Menu Management
   - Add / edit items.
   - Set price.
   - Toggle sold out.
   - Set preparation time.
   - Add promotion.
   - Upload image.

4. Inventory
   - Stock count.
   - Low-stock alert.
   - Suggested restock based on order trends.
   - Simple predictive demand using mock data.

5. Vendor Analytics
   - Top-selling items.
   - Peak order time.
   - Revenue by hour.
   - Average wait time.
   - Missed sales due to sold-out items.

D. Organizer Command Center

Goal:
This is the strongest behind-the-scenes part. Make judges see this as infrastructure.

Pages:

1. Overview Dashboard
   - Total registered users.
   - Active users.
   - Orders today.
   - Open incidents.
   - Top crowded areas based on user check-ins/mock data.
   - Vendor performance.
   - Sponsor performance.
   - Live schedule status.

2. Event Schedule Manager
   - Add/edit events.
   - Drag-and-drop timeline.
   - Set event status:
     - Upcoming.
     - Live.
     - Delayed.
     - Finished.
   - Push update to public schedule.

3. Incident Center
   - Incoming reports from users.
   - Filter by severity.
   - Assign to staff.
   - Status:
     - New.
     - Assigned.
     - In progress.
     - Resolved.
   - Internal notes.
   - Response time metric.

4. Staff and Volunteer Coordination
   - Staff list.
   - Assign zones.
   - Assign tasks.
   - Shift schedule.
   - Task status.
   - Quick broadcast message to staff portal.

5. Vendor Control
   - All vendors.
   - Sales.
   - Queue time.
   - Stock warnings.
   - Complaints.
   - Ability to feature vendor on spectator home.

6. Sponsor Control
   - Sponsor list.
   - Active campaigns.
   - Impressions.
   - Clicks.
   - Coupon redemptions.
   - Sponsored challenge setup.

7. Analytics
   - Attendance over time.
   - Map usage.
   - Most searched places.
   - Popular events.
   - Food order trends.
   - Incident heatmap.
   - User language distribution.
   - Revenue overview.

8. Announcement Center
   - Create announcement.
   - Choose target:
     - All users.
     - Tourists.
     - Vendors.
     - Staff.
     - Specific zone.
   - Priority:
     - Normal.
     - Important.
     - Emergency.
   - Preview before sending.

9. Post-event Report Generator
   - Generate PDF-style report page.
   - Include:
     - Attendance.
     - Revenue.
     - Engagement.
     - Vendor performance.
     - Incident response.
     - Sponsor results.
     - Recommendations for next year.

E. Sponsor Portal

Goal:
Make sponsors measurable and valuable.

Pages:

1. Sponsor Dashboard
   - Campaign impressions.
   - Clicks.
   - Coupon claims.
   - Redemptions.
   - Sponsored challenge participation.

2. Campaign Builder
   - Upload banner.
   - Write message.
   - Choose placement:
     - Home card.
     - Map pin.
     - Vendor promo.
     - Gamified challenge reward.
   - Set time window.

3. Sponsored Rewards
   - Create coupon.
   - Connect coupon to badge or quiz.
   - Track redemption.

F. Staff Portal

Goal:
Simplify work for volunteers, cleaning teams, support staff, and safety teams.

Pages:

1. My Tasks
   - Assigned incidents.
   - Zone responsibilities.
   - Shift time.
   - Task priority.

2. Incident Detail
   - Location.
   - Description.
   - Reporter type.
   - Severity.
   - Action buttons:
     - Accept.
     - Mark in progress.
     - Resolve.

3. Internal Announcements
   - Updates from organizer command center.

Technical requirements:
- Build as a web application.
- Use React, Next.js, Vue, or another modern web stack.
- Mobile-first design.
- Desktop dashboard must be polished.
- Use mock data if backend is not fully implemented.
- Real-time features can be simulated with local state, polling, or mocked WebSocket behavior.
- Use localStorage for prototype persistence if needed.
- Use clean component architecture.
- Use reusable design system components:
  - Button.
  - Card.
  - Modal.
  - Badge.
  - Tabs.
  - Sidebar.
  - Data table.
  - Chart card.
  - Alert.
  - Map marker.
  - Status chip.
  - Form field.
- Include dark mode if feasible.
- Include Mongolian and English language toggle if feasible.
- No unfinished pages.
- Every navigation item must lead somewhere useful.
- Mock data should feel realistic for Mongolia and Naadam.

Suggested routes:
/                 landing page
/app              spectator home
/app/map          interactive map
/app/schedule     live schedule
/app/vendors      food and vendor ordering
/app/assistant    multilingual assistant
/app/safety       safety and help
/app/journey      gamified journey
/app/recap        my day recap
/vendor           vendor dashboard
/vendor/orders    vendor order management
/vendor/menu      menu management
/vendor/inventory inventory
/vendor/analytics analytics
/organizer        command center
/organizer/schedule schedule manager
/organizer/incidents incident center
/organizer/staff staff coordination
/organizer/vendors vendor control
/organizer/sponsors sponsor control
/organizer/analytics analytics
/organizer/announcements announcements
/organizer/report post-event report
/sponsor          sponsor dashboard
/sponsor/campaigns campaign builder
/staff            staff portal

Important UI details:
- Use a left sidebar for desktop dashboards.
- Use bottom navigation for mobile spectator app.
- Use sticky top bars with context actions.
- Use status chips:
  - Live.
  - Delayed.
  - Ready.
  - Low stock.
  - Urgent.
  - Resolved.
- Use subtle animations:
  - Card hover.
  - Page transition.
  - Modal open.
  - Progress bars.
  - Count-up stats.
- Use skeleton loaders.
- Use empty states.
- Use confirmation toasts.
- Use realistic sample data.

Sample realistic data:
Events:
- Opening Ceremony.
- National Wrestling Round 1.
- Archery Final.
- Horse Racing Result Update.
- Traditional Music Performance.
- Award Ceremony.

Vendors:
- Khuushuur House.
- Airag Corner.
- Naadam Souvenir Shop.
- Coffee Ger.
- Traditional Food Court.

Map zones:
- Main Gate.
- Section A.
- Section B.
- Wrestling Arena.
- Archery Zone.
- First Aid.
- Restroom North.
- Food Court.
- Souvenir Area.
- Info Booth.
- Exit East.
- Taxi / Bus Point.

Incident types:
- Medical help.
- Lost item.
- Clean-up needed.
- Crowd issue.
- Wrong information.
- Vendor complaint.

Gamification examples:
- “Find the Archery Zone.”
- “Answer 3 Naadam culture questions.”
- “Watch one wrestling match.”
- “Try one traditional food.”
- “Visit the souvenir zone.”
- “Use the map successfully.”

Business logic:
The platform solves three layers of problems:

1. Visitor problems:
- They do not know where to go.
- They miss events.
- They wait too long in queues.
- Tourists do not understand Mongolian announcements.
- They do not know who to contact during problems.

2. Vendor problems:
- They cannot predict demand.
- They lose customers due to queues.
- They cannot update menus instantly.
- They do not know peak sales times.
- They lack digital ordering.

3. Organizer problems:
- They lack one central dashboard.
- Incident reports are scattered.
- Staff tasks are hard to coordinate.
- Sponsors lack measurable ROI.
- Post-event reporting is manual.
- Event data is not reused for future planning.

Each feature must visibly connect to one of these problems.

Hackathon demo priorities:
Build these first:
1. Landing page.
2. Spectator home.
3. Interactive map.
4. Vendor ordering.
5. Organizer command center.
6. Incident reporting and incident dashboard.
7. Vendor portal.
8. Sponsor dashboard.
9. Analytics page.

The demo story should be:
1. A tourist opens the web app.
2. They switch language to English.
3. They use the map to find food.
4. They order khuushuur.
5. They receive an event reminder.
6. They report a lost item or clean-up issue.
7. Organizer sees the report instantly.
8. Staff receives a task.
9. Vendor sees the order.
10. Sponsor sees campaign analytics.
11. Organizer generates post-event report.

Design quality bar:
The final product must look like a real startup product ready for judges, not a school project. Every page should have visual hierarchy, consistent spacing, polished typography, and realistic data. Use a clean, premium design system.

Avoid:
- IoT.
- Hardware.
- Physical sensors.
- Blockchain.
- Unnecessary AI buzzwords.
- Fake impossible technology.
- Cluttered dashboards.
- Generic templates.
- Social media feed as a core feature.
- Overcomplicated navigation.
- Long paragraphs in UI.

Deliverables:
1. Complete responsive web UI.
2. Clean component structure.
3. Mock dataset.
4. Landing page.
5. Spectator app.
6. Vendor portal.
7. Organizer dashboard.
8. Sponsor portal.
9. Staff portal.
10. Clear README explaining:
   - What problem it solves.
   - Key features.
   - Tech stack.
   - How to run locally.
   - Demo flow.
   - Future expansion.

Final instruction:
Use `masterplan.md` as the source of truth. Build the most polished, modern, feasible, web-only Naadam event operating system possible. The output should be impressive enough for a preliminary hackathon submission and structured enough to expand into a real startup product.
