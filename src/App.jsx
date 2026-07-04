import { useEffect, useState } from 'react';
import heroImage from '../assets/images/pharma-hero.svg';
import innovationImage from '../assets/images/innovation-visual.svg';

const stats = [
    { label: 'Products', target: 50, suffix: '+' },
    { label: 'States', target: 20, suffix: '+' },
    { label: 'Franchise Partners', target: 100, suffix: '+' },
    { label: 'Certified', value: 'WHO-GMP' },
];

const features = [
    {
        title: 'Precision discovery',
        text: 'We use data-driven discovery to target unmet needs and shorten the path from science to patient benefit.',
    },
    {
        title: 'Clinical excellence',
        text: 'Robust trial design and patient-centered execution help us deliver dependable, ethically guided innovation.',
    },
    {
        title: 'Manufacturing resilience',
        text: 'Our operations are built for continuity, compliance, and reliable access to therapies around the world.',
    },
];

const credibilityPoints = [
    'Decades of experience in regulated healthcare environments',
    'Executive leadership with global pharma and compliance expertise',
    'Transparent reporting for investors, media, and strategic partners',
];

const partnerItems = ['Regulatory bodies', 'Healthcare partners', 'Distributors', 'Investors', 'Financial institutions'];

function App() {
    const [displayedStats, setDisplayedStats] = useState(stats.map((stat) => (stat.value ? stat.value : 0)));

    useEffect(() => {
        const duration = 1200;

        const timers = stats.map((stat, index) => {
            if (stat.value) return null;

            const startTime = performance.now();
            const step = (currentTime) => {
                const progress = Math.min((currentTime - startTime) / duration, 1);
                const value = Math.floor(progress * stat.target);
                setDisplayedStats((prev) => {
                    const next = [...prev];
                    next[index] = value;
                    return next;
                });

                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    setDisplayedStats((prev) => {
                        const next = [...prev];
                        next[index] = stat.target;
                        return next;
                    });
                }
            };

            return requestAnimationFrame(step);
        });

        return () => {
            timers.forEach((timer) => {
                if (timer) cancelAnimationFrame(timer);
            });
        };
    }, []);

    return (
        <div className="app-shell">
            <header className="site-header">
                <div className="container nav-shell">
                    <a className="brand" href="#">
                        <span className="brand-mark">NG</span>
                        <span className="brand-text">
                            <strong>Next Gen Pharma</strong>
                            <small>Science with purpose</small>
                        </span>
                    </a>
                    <nav className="site-nav" aria-label="Primary navigation">
                        <a href="#innovation">Innovation</a>
                        <a href="#credibility">Credibility</a>
                        <a href="#partners">Partners</a>
                    </nav>
                </div>
            </header>

            <main>
                <section className="hero">
                    <div className="container">
                        <div className="hero-grid">
                            <div className="hero-copy">
                                <p className="eyebrow">Trusted pharmaceutical partner</p>
                                <h1>Next Gen Pharma</h1>
                                <p className="hero-tagline">Quality Pharmaceuticals. Intelligent Distribution.</p>
                                <p>
                                    We deliver dependable medicines, strong franchise partnerships, and efficient distribution solutions across a growing national network.
                                </p>
                                <div className="hero-actions">
                                    <a className="button button-primary" href="#innovation">Explore Our Products</a>
                                    <a className="button button-secondary" href="#partners">Apply for Franchise</a>
                                </div>
                            </div>
                        </div>

                        <div className="counter-strip" aria-label="Company milestones">
                            {stats.map((stat, index) => (
                                <div key={stat.label} className={`counter-card${index === 3 ? ' counter-card-accent' : ''}`}>
                                    <span className="counter-value">
                                        {stat.value ? stat.value : `${displayedStats[index]}${stat.suffix || ''}`}
                                    </span>
                                    <span className="counter-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="section" id="innovation">
                    <div className="container">
                        <div className="section-heading">
                            <p className="eyebrow">Research & Innovation</p>
                            <h2>Focused on breakthrough therapies with measurable impact.</h2>
                            <p>
                                Our teams combine clinical insight, advanced analytics, and responsible manufacturing to create therapies that improve outcomes across evolving care landscapes.
                            </p>
                        </div>

                        <div className="card-grid">
                            {features.map((feature) => (
                                <article key={feature.title} className="info-card">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.text}</p>
                                </article>
                            ))}
                        </div>

                        <div className="feature-panel">
                            <div>
                                <p className="eyebrow">Why partners choose us</p>
                                <h3>Trusted by healthcare leaders and communities alike.</h3>
                                <p>
                                    Our institution is built to support banking partners, regulators, investors, distributors, and healthcare networks with confidence and clarity.
                                </p>
                            </div>
                            <img src={innovationImage} alt="Abstract illustration of pharmaceutical innovation and research" />
                        </div>
                    </div>
                </section>

                <section className="section section-alt" id="credibility">
                    <div className="container">
                        <div className="section-heading">
                            <p className="eyebrow">Corporate foundation</p>
                            <h2>Institutional credibility shaped by history, vision, and governance.</h2>
                            <p>
                                From our early roots in specialty therapeutics to our current global platform, we maintain a clear mission rooted in science, patient trust, and operational discipline.
                            </p>
                        </div>

                        <div className="split-layout">
                            <div className="split-copy">
                                <h3>Company history & vision</h3>
                                <p>
                                    Founded with a mission to bring reliable, life-enhancing treatments to underserved populations, Next Gen Pharma has grown into a respected enterprise focused on responsible innovation and long-term value.
                                </p>
                                <ul className="trust-list">
                                    {credibilityPoints.map((point) => (
                                        <li key={point}>{point}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="highlight-card">
                                <h3>Leadership & oversight</h3>
                                <ul className="pill-list">
                                    <li>Board-led governance</li>
                                    <li>Ethics and quality councils</li>
                                    <li>Global regulatory readiness</li>
                                    <li>Patient safety oversight</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section" id="impact">
                    <div className="container">
                        <div className="section-heading">
                            <p className="eyebrow">Investor & media readiness</p>
                            <h2>Prepared for scrutiny, partnership, and sustainable growth.</h2>
                            <p>
                                We provide the clarity, documentation, and governance expected by investors, media, and public institutions.
                            </p>
                        </div>

                        <div className="card-grid">
                            <article className="info-card">
                                <h3>Investor confidence</h3>
                                <p>Clear performance reporting and disciplined strategic planning support long-term stakeholder confidence.</p>
                            </article>
                            <article className="info-card">
                                <h3>Media transparency</h3>
                                <p>Our communications framework is designed to share progress responsibly and maintain trust with the public.</p>
                            </article>
                            <article className="info-card">
                                <h3>Regulatory strength</h3>
                                <p>Compliance, inspection readiness, and quality systems underpin every stage of our operating model.</p>
                            </article>
                        </div>
                    </div>
                </section>

                <section className="section" id="partners">
                    <div className="container trust-band">
                        <div>
                            <p className="eyebrow">Trusted network</p>
                            <h2>Supported by institutions that value discipline and accountability.</h2>
                        </div>
                        <div className="partner-list">
                            {partnerItems.map((item) => (
                                <span key={item}>{item}</span>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="site-footer" id="connect">
                <div className="container footer-shell">
                    <p>© {new Date().getFullYear()} Next Gen Pharma. Advancing health with integrity.</p>
                    <a href="mailto:partners@nextgenpharma.com">partners@nextgenpharma.com</a>
                </div>
            </footer>
        </div>
    );
}

export default App;
