# 🧬 Next Gen Pharma
> Bridging Excellence in Science & Logistics

**Next Gen Pharma** is a state-of-the-art web application showcasing a forward-thinking pharmaceutical manufacturer and distribution network. Built with **React 19** and **Vite**, the application represents a premium digital presence, incorporating scroll-triggered micro-animations, glassmorphism UI elements, and a highly responsive design system.

---

## 🌟 Key Features

### 1. Advanced Therapeutic Portfolios
The portal provides interactive cards showcasing 8 key therapeutic segments covering over **260+ high-efficacy formulations**:
*   **Cardiac** (45+ Products) – Advanced cardiovascular formulations supporting heart health.
*   **Derma** (30+ Products) – Dermatological solutions for skin protection and restoration.
*   **Ortho** (25+ Products) – Comprehensive bone, joint, and cartilage care formulations.
*   **Neuro** (20+ Products) – Cognitive, central nervous system, and brain health therapies.
*   **Gynae** (35+ Products) – Dedicated maternal care and female wellness pharmaceuticals.
*   **Paediatric** (15+ Products) – Gentle, high-safety pediatric formulations.
*   **Gastro** (40+ Products) – Gastrointestinal formulations ensuring optimal digestive health.
*   **Diabetology** (50+ Products) – Glycemic regulators and diabetic management solutions.

### 2. Intelligent Digital Infrastructure
We integrate modern machine learning and blockchain tracking systems into our pipeline to guarantee drug traceability and accelerate R&D cycles:
*   **PharmChain AI:** Blockchain ledger integration for secure batch tracking across the pharmaceutical supply chain.
*   **RxPredict R&D:** Machine learning analytics predicting drug compound stability, solubility, and bio-equivalence.
*   **LogiSmart Distribution:** AI routing and demand forecasting model driving logistics across 20+ partner states.

### 3. Certifications & Compliance
Our state-of-the-art manufacturing facilities and distribution networks comply fully with national and international regulatory frameworks:
*   **WHO-GMP Accredited Facility** – Good Manufacturing Practices under World Health Organization standards.
*   **ISO 9001:2015 Certified QMS** – Accredited Quality Management Systems for manufacturing consistency.
*   **FSSAI licensed range** – Compliance clearance for food safety and dietary nutraceutical formulations.
*   **CDSCO Approved** – Central Drugs Standard Control Organisation approved pipelines.
*   **Drug Licence (Form 20B & 21B)** – Accredited federal drug manufacturing and wholesale distribution licenses.

### 4. Franchise & Partnership Ecosystem
Detailed portal for establishing a **PCD Pharma Franchise** with Next Gen Pharma, offering partners:
*   **Monopoly Rights** to eliminate local competition.
*   **Full Marketing Support** (visual aids, product manuals, promotional inputs).
*   **WHO-GMP Certified Ranges** directly from verified pipelines.

---

## 💻 Tech Stack & Design Architecture

*   **Framework:** [React 19](https://react.dev/) (Hooks, IntersectionObserver API for scroll animation trigger, customized timing cycles).
*   **Build Tool:** [Vite 8](https://vite.dev/) (Instant hot reloading and optimized production bundling).
*   **Linting & Quality:** [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) (Extremely fast Rust-based JS/JSX validation).
*   **Styling:** Pure CSS (using a modern tokens-based variable system defined in `src/styles/variables.css` and unified in `src/styles/global.css`). 
*   **Design Aesthetics:** Sleek dark-mode interface with emerald/teal gradients, subtle gold accents, glassmorphic container cards, custom backdrop filters, and vector grid blueprints.

---

## 📂 Project Structure

```bash
Next Gen Pharma/
├── public/                 # Static assets (favicons, manifest)
├── src/
│   ├── assets/             # Images & static graphics (Founder profiles, etc.)
│   ├── components/         # Modular layout components
│   │   ├── AiProductsStrip/          # AI tracking & ML stability products
│   │   ├── CertificationsCompliance/# Regulatory badges & QA policies
│   │   ├── CompanyIntroduction/     # Mission statements & circular progress gauges
│   │   ├── CounterStrip/            # Animated stat counters
│   │   ├── Footer/                  # Responsive multi-column site footer
│   │   ├── FranchiseOpportunity/    # PCD franchise CTA & partner benefits
│   │   ├── HeroBanner/              # Immersive title banner with CTA buttons
│   │   ├── Navbar/                  # Mobile-ready responsive navigation drawer
│   │   ├── ProductCategories/       # Grid of therapeutic area cards
│   │   ├── TestimonialsPartners/    # Client quotes & corporate partners
│   │   └── WhyChooseUs/             # Key value propositions
│   ├── styles/             # Stylesheets (variables & global resets)
│   ├── App.jsx             # Main application orchestrator
│   └── main.jsx            # React root registration
├── package.json            # Scripts and dependencies
├── vite.config.js          # Vite compilation settings
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Sg-2003/Next-Gen-Pharma.git
   cd Next-Gen-Pharma
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

### Running Locally
To launch the local development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### Production Build
To create an optimized production build:
```bash
npm run build
```
The output files will be written to the `/dist` directory, ready to be hosted on Netlify, Vercel, or any other web hosting service.

### Linting
To perform static analysis using Oxlint:
```bash
npm run lint
```

---

## 🐳 Docker & Amazon ECS Deployment

Next Gen Pharma is containerized using Docker and is configured for cloud deployment to services such as **Amazon Elastic Container Service (ECS)**.

### 1. Local Docker Setup

#### Build the Docker Image
To build the Docker image locally from the project root:
```bash
docker build -t next-gen-pharma .
```

#### Run the Docker Container
To start the container and map it to port `5173` on your host:
```bash
docker run -p 5173:5173 next-gen-pharma
```
Open your browser and navigate to `http://localhost:5173` to view the running container application.

---

### 2. Deploying to Amazon ECS

The application is deployed on Amazon ECS and is accessible at:
🔗 **Production URL:** [http://13.207.151.163:5173/](http://13.207.151.163:5173/)

Here is the standard deployment pipeline to release updates to AWS ECS:

#### Step A: Publish Docker Image to Amazon ECR (Elastic Container Registry)

1. **Authenticate Docker with Amazon ECR**:
   ```bash
   aws ecr get-login-password --region <region> | docker login --username AWS --password-stdin <aws_account_id>.dkr.ecr.<region>.amazonaws.com
   ```

2. **Create the Repository** (if not already existing):
   ```bash
   aws ecr create-repository --repository-name next-gen-pharma
   ```

3. **Tag the Local Image**:
   ```bash
   docker tag next-gen-pharma:latest <aws_account_id>.dkr.ecr.<region>.amazonaws.com/next-gen-pharma:latest
   ```

4. **Push the Image to ECR**:
   ```bash
   docker push <aws_account_id>.dkr.ecr.<region>.amazonaws.com/next-gen-pharma:latest
   ```

#### Step B: Run Task on Amazon ECS

1. **ECS Cluster**: Run the tasks within an ECS Cluster (e.g., `next-gen-pharma-cluster`).
2. **Task Definition**:
   - **Launch Type Compatibility**: Fargate (serverless) or EC2.
   - **Image**: Set to `<aws_account_id>.dkr.ecr.<region>.amazonaws.com/next-gen-pharma:latest`.
   - **Port Mappings**: Map Container Port `5173` to Host Port `5173` (or map through an Application Load Balancer to port `80`/`443`).
3. **ECS Service**:
   - Create a service to manage task lifecycle and scaling.
   - Configure Security Groups to allow inbound traffic on port `5173`.
