* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body {
    background-color: #f1f5f9;
    color: #1e293b;
    overflow: hidden;
}

.dashboard-container {
    display: flex;
    height: 100vh;
    width: 100vw;
}

.sidebar {
    width: 260px;
    background-color: #0f172a;
    color: #f8fafc;
    display: flex;
    flex-direction: column;
    padding: 1.5rem 0;
    flex-shrink: 0;
}

.sidebar-brand {
    padding: 0 1.5rem 2rem 1.5rem;
    border-bottom: 1px solid #334155;
}

.sidebar-brand h2 {
    font-size: 1.5rem;
    font-weight: 800;
}

.sidebar-brand h2 span {
    color: #3b82f6;
}

.sidebar-menu {
    display: flex;
    flex-direction: column;
    padding: 1.5rem 0;
    gap: 0.25rem;
    overflow-y: auto;
}

.menu-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #64748b;
    padding: 1rem 1.5rem 0.5rem 1.5rem;
    font-weight: 700;
}

.menu-item {
    display: block;
    padding: 0.75rem 1.5rem;
    color: #94a3b8;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    border-left: 4px solid transparent;
    transition: all 0.2s ease;
}

.menu-item:hover {
    background-color: #1e293b;
    color: #f8fafc;
}

.menu-item.active {
    background-color: #1e293b;
    color: #3b82f6;
    border-left-color: #3b82f6;
}

.main-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: hidden;
}

.top-bar {
    height: 70px;
    background-color: #ffffff;
    border-bottom: 1px solid #e2e8f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    flex-shrink: 0;
}

.top-bar h1 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #0f172a;
}

.user-profile {
    display: flex;
    align-items: center;
    gap: 0.75rem;
}

.avatar {
    width: 35px;
    height: 35px;
    background-color: #3b82f6;
    color: #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.85rem;
    font-weight: 700;
}

.username {
    font-size: 0.9rem;
    font-weight: 600;
}

.content-body {
    flex-grow: 1;
    padding: 2rem;
    overflow-y: auto;
    position: relative;
}

.view-panel {
    display: none;
    flex-direction: column;
    gap: 2rem;
    animation: fadeIn 0.25s ease-in-out forwards;
}

.view-panel.active {
    display: flex;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(5px); }
    to { opacity: 1; transform: translateY(0); }
}

.metrics-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 1.5rem;
}

.metric-card {
    background-color: #ffffff;
    border-radius: 0.75rem;
    padding: 1.5rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    border: 1px solid #e2e8f0;
}

.metric-card h3 {
    font-size: 0.85rem;
    color: #64748b;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
}

.metric-card .stat {
    font-size: 1.5rem;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 0.25rem;
}

.metric-card p {
    font-size: 0.8rem;
    color: #94a3b8;
}

.dashboard-showcase {
    background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
    color: #ffffff;
    border-radius: 1rem;
    padding: 3rem;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
}

.showcase-info {
    max-width: 650px;
}

.showcase-info h2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
}

.showcase-info p {
    color: #94a3b8;
    line-height: 1.6;
}

.provider-banner {
    padding: 2.5rem;
    border-radius: 0.75rem;
    color: #ffffff;
}

.aws-banner { background: linear-gradient(135deg, #ff9900 0%, #ec7c11 100%); }
.azure-banner { background: linear-gradient(135deg, #0078d4 0%, #005a9e 100%); }
.gcp-banner { background: linear-gradient(135deg, #34a853 0%, #1a73e8 100%); }

.provider-banner h2 { font-size: 1.75rem; margin-bottom: 0.5rem; }
.provider-banner p { color: rgba(255, 255, 255, 0.85); }

.resource-block h3 {
    font-size: 1.1rem;
    color: #0f172a;
    margin-bottom: 1rem;
}

.link-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.resource-link-card {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    padding: 1.5rem;
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s, box-shadow 0.2s;
}

.resource-link-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);
}

.resource-link-card h4 {
    font-size: 1rem;
    color: #2563eb;
    margin-bottom: 0.5rem;
}

.resource-link-card p {
    font-size: 0.875rem;
    color: #64748b;
    line-height: 1.5;
}

.quiz-container {
    max-width: 600px;
    margin: 0 auto;
}

.quiz-container h2 { margin-bottom: 0.5rem; font-size: 1.5rem; }
.quiz-container p { color: #64748b; margin-bottom: 2rem; }

.quiz-card {
    background-color: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 0.75rem;
    padding: 2rem;
    box-shadow: 0 1px 3px rgba(0,0,0,0.05);
}

.quiz-card h3 {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    line-height: 1.5;
}

.quiz-options {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.option-btn {
    width: 100%;
    text-align: left;
    padding: 1rem;
    background-color: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 0.5rem;
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;
}

.option-btn:hover {
    background-color: #f1f5f9;
}

.quiz-feedback-box {
    margin-top: 1.5rem;
    padding: 1rem;
    border-radius: 0.5rem;
    font-weight: 600;
    font-size: 0.95rem;
    text-align: center;
}

.quiz-feedback-box.correct { background-color: #dcfce7; color: #166534; }
.quiz-feedback-box.wrong { background-color: #fee2e2; color: #991b1b; }

.hidden { display: none !important; }
