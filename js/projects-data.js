/**
 * PROJECT DATA
 * ------------
 * Add each project here. The projects page renders compact cards from this file.
 *
 * For employers to see full project material:
 *  1. github     — link to the full repository (primary codebase view)
 *  2. demo       — live app / video demo (optional)
 *  3. docs       — PDF report, slides, or local doc (optional)
 *  4. documentation — HTML shown in the "Documentation" tab (write your own)
 *  5. structure  — file-tree text shown in the "Codebase" tab
 *  6. highlights — bullet list of key implementation points
 *
 * Optional: place project files under assets/projects/<project-id>/
 * (e.g. README exports, reports, architecture diagrams)
 */

const PROJECTS = [
    {
        id: 'autoguardian',
        title: 'AutoGuardian',
        type: 'Mobile + Embedded Systems',
        year: '2025',
        summary:
            'Vehicle monitoring app with live GPS, trip history, alerts, and embedded hardware simulation.',
        description:
            'AutoGuardian is a vehicle safety and monitoring solution combining a mobile application with embedded hardware. Users authenticate, track live location, review trip history, receive alerts, and configure device settings. A Wokwi simulation demonstrates sensor data collection integrated with the app workflow.',
        features: [
            'User registration and login',
            'Live GPS tracking with map views',
            'Trip history with detailed records',
            'Real-time alerts and notifications',
            'Embedded simulation via Wokwi',
        ],
        tags: ['Mobile App', 'GPS', 'Embedded Systems', 'Wokwi'],
        links: {
            github: '', // TODO: https://github.com/your-username/autoguardian
            demo: '',
            docs: '', // TODO: e.g. assets/projects/autoguardian/report.pdf
        },
        structure: `autoguardian/
├── mobile-app/          # UI screens & app logic
├── backend/             # API / data services (if applicable)
├── firmware/            # Embedded / sensor code
└── docs/                # Design docs & reports`,
        documentation: `
            <h3>Problem</h3>
            <p>Vehicle owners need affordable monitoring for location, trip records, and safety alerts.</p>
            <h3>Solution</h3>
            <p>A mobile app paired with embedded hardware to collect and display vehicle data in real time.</p>
            <h3>My Role</h3>
            <p><!-- TODO: e.g. Full-stack development, mobile UI, embedded integration --></p>
            <h3>Architecture</h3>
            <p><!-- TODO: Describe app ↔ API ↔ hardware flow --></p>
        `,
        screenshots: [
            { src: 'assets/images/AutoGurdian/mobile_app/Login_Screen.png', alt: 'Login Screen' },
            { src: 'assets/images/AutoGurdian/mobile_app/Registration_Screen.png', alt: 'Registration Screen' },
            { src: 'assets/images/AutoGurdian/mobile_app/Home_Page_Screen.png', alt: 'Home Page' },
            { src: 'assets/images/AutoGurdian/mobile_app/Home_Page_Menu_Screen.png', alt: 'Home Menu' },
            { src: 'assets/images/AutoGurdian/mobile_app/Live_Location_Page_(Standard).png', alt: 'Live Location' },
            { src: 'assets/images/AutoGurdian/mobile_app/Live_Location_Screen_(Setellite).png', alt: 'Satellite View' },
            { src: 'assets/images/AutoGurdian/mobile_app/Trip_History_Screen.png', alt: 'Trip History' },
            { src: 'assets/images/AutoGurdian/mobile_app/Trip_History_Detail_Screen.png', alt: 'Trip Detail' },
            { src: 'assets/images/AutoGurdian/mobile_app/Alerts_Screen.png', alt: 'Alerts' },
            { src: 'assets/images/AutoGurdian/mobile_app/Settings_Screen.png', alt: 'Settings' },
            { src: 'assets/images/AutoGurdian/mobile_app/Settings_2_Screen.png', alt: 'Settings (Extended)' },
            { src: 'assets/images/AutoGurdian/simulation/Wokwi_Simulation.png', alt: 'Wokwi Simulation', wide: true },
        ],
    },
    {
        id: 'rescart',
        title: 'Rescart',
        type: 'Web / Mobile Application',
        year: '2025',
        summary:
            'Restaurant ordering platform with store browsing, checkout, and in-app chat.',
        description:
            'Rescart enables users to log in, browse restaurants, select a store, place orders, and chat with vendors or support. The project demonstrates end-to-end application flow from authentication through order completion.',
        features: [
            'Secure user login',
            'Restaurant and store selection',
            'Order placement workflow',
            'Integrated chat messaging',
        ],
        tags: ['Web App', 'E-Commerce', 'Authentication', 'Chat'],
        links: {
            github: '', // TODO: https://github.com/your-username/rescart
            demo: '',
            docs: '',
        },
        structure: `rescart/
├── frontend/            # UI & client logic
├── backend/             # Server / API
├── database/            # Schema & migrations
└── docs/                # Project documentation`,
        documentation: `
            <h3>Problem</h3>
            <p>Local restaurants need a simple digital ordering channel for customers.</p>
            <h3>Solution</h3>
            <p>A multi-store ordering platform with real-time chat for order coordination.</p>
            <h3>My Role</h3>
            <p><!-- TODO: Describe your contribution --></p>
            <h3>Implementation Notes</h3>
            <p><!-- TODO: Key technical decisions, stack, challenges solved --></p>
        `,
        screenshots: [
            { src: 'assets/images/Rescart/login.png', alt: 'Login', wide: true },
            { src: 'assets/images/Rescart/home_page.png', alt: 'Home Page', wide: true },
            { src: 'assets/images/Rescart/store_selection.png', alt: 'Store Selection', wide: true },
            { src: 'assets/images/Rescart/order.png', alt: 'Order', wide: true },
            { src: 'assets/images/Rescart/chats.png', alt: 'Chats', wide: true },
        ],
    },
];
