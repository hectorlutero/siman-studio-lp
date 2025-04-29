'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Home', href: '/' },
        { label: 'Services', href: '#services' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
            ? 'bg-oxford-100/80 backdrop-blur-lg shadow-lg shadow-oxford-500/10'
            : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="text-2xl font-bold tech-heading relative group"
                    >
                        Siman Studio
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-turquoise-500 group-hover:w-full transition-all duration-300"></span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="nav-link text-white-500 hover:text-turquoise-500 transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <button className="tech-button group flex items-center gap-2">
                            Schedule Call
                            <span className="w-2 h-2 rounded-full bg-turquoise-500 group-hover:bg-munsell-500 transition-colors"></span>
                        </button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-white-500 hover:text-turquoise-500 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0 overflow-hidden'
                    }`}>
                    <nav className="py-4 space-y-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="nav-link block text-white-500 hover:text-turquoise-500 transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <button className="tech-button w-full flex items-center justify-center gap-2">
                            Schedule Call
                            <span className="w-2 h-2 rounded-full bg-turquoise-500"></span>
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
} 