import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-column">
                <h2>Company</h2>
                <ul>
                    <li><a href="#">The Linktree Blog</a></li>
                    <li><a href="#">Engineering Blog</a></li>
                    <li><a href="#">Marketplace</a></li>
                    <li><a href="#">What's New</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Press</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Link in Bio</a></li>
                    <li><a href="#">Social Good</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h2>Community</h2>
                <ul>
                    <li><a href="#">Linktree for Enterprise</a></li>
                    <li><a href="#">2023 Creator Report</a></li>
                    <li><a href="#">2022 Creator Report</a></li>
                    <li><a href="#">Charities</a></li>
                    <li><a href="#">What's Trending</a></li>
                    <li><a href="#">Creator Profile Directory</a></li>
                    <li><a href="#">Explore Templates</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h2>Support</h2>
                <ul>
                    <li><a href="#">Help Topics</a></li>
                    <li><a href="#">Getting Started</a></li>
                    <li><a href="#">Linktree Pro</a></li>
                    <li><a href="#">Features & How-Tos</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Report a Violation</a></li>
                </ul>
            </div>
            <div className="footer-column">
                <h2>Trust & Legal</h2>
                <ul>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Notice</a></li>
                    <li><a href="#">Cookie Notice</a></li>
                    <li><a href="#">Trust Center</a></li>
                    <li><a href="#">Cookie Preferences</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
