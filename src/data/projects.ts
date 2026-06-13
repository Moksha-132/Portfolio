
import { Code, TrendingUp, Brain, Tv, Shield, Briefcase, Globe, Cloud } from 'lucide-react';
import { Project } from '../types/portfolio';

export const projects: Project[] = [
    {
        title: 'Shnoor SaaS Platform',
        description:
            'The Ultimate SaaS Hub for modern teams. Features Admin Analytics, Manager Portals for client scheduling, and Instant Discovery for one-click checkouts and flexible billing plans.',
        techStack: ['Next.js', 'React', 'Tailwind CSS', 'SaaS', 'Stripe'],
        icon: Briefcase,
        gradient: 'from-orange-500/20 to-amber-500/20',
        demo: 'https://shnoor-saas-platform.vercel.app',
    },
    {
        title: 'PlagCheck - Originality Intelligence',
        description:
            'A powerful plagiarism detection engine that scans documents and source code to ensure originality. Features a modern, responsive interface built with Next.js and advanced text analysis algorithms.',
        techStack: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Text Analysis'],
        icon: Shield,
        gradient: 'from-orange-500/20 to-red-500/20',
        demo: 'https://plagarism-detection.vercel.app',
    },
    {
        title: 'AI Trade Intelligence',
        description:
            'An enterprise-grade AI ecosystem for global trade. Features high-accuracy OCR for complex shipping documents, automated duty calculation engines, and predictive analytics for supply chain optimization.',
        techStack: ['React', 'FastAPI', 'PostgreSQL', 'Python', 'OCR/AI'],
        icon: Globe,
        gradient: 'from-indigo-500/20 to-blue-500/20',
        github: 'https://github.com/Moksha-132/AI-Imports-and-Exports-Website',
        demo: 'https://ai-imports-and-exports-website.vercel.app',
    },
    {
        title: 'CloudScale Storage Platform',
        description:
            'A modern, high-performance cloud storage architecture designed for security and speed. Implements advanced file management, real-time sync, and a sleek glassmorphic interface.',
        techStack: ['React', 'Node.js', 'Express', 'Cloud APIs', 'UI/UX'],
        icon: Cloud,
        gradient: 'from-cyan-500/20 to-blue-500/20',
        github: 'https://github.com/Moksha-132/Cloud-Platform',
        demo: 'https://cloud-platform-ashen.vercel.app',
    },
    {
        title: 'Live Code Editor',
        description:
            'A browser-based code editor supporting HTML, CSS, and JavaScript with real-time code execution and output rendering. Designed for fast prototyping and learning.',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        icon: Code,
        gradient: 'from-violet-500/20 to-purple-500/20',
        github: 'https://github.com/Moksha-132/Online-Live-Code-Editor',
        demo: 'https://online-live-code-editor.vercel.app/',
    },
];
