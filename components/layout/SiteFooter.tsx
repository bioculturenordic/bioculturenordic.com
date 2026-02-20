import Link from "next/link";

export default function SiteFooter() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8 text-sm">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Col */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <span className="text-xl font-bold font-heading text-primary tracking-tight">
                                BCN<span className="text-accent">01</span>
                            </span>
                        </Link>
                        <p className="text-functional-gray leading-relaxed max-w-xs">
                            Advanced bioprotective solutions for the seafood industry.
                        </p>
                    </div>

                    {/* Resources Col */}
                    <div>
                        <h4 className="font-bold text-primary mb-6">Resources</h4>
                        <ul className="space-y-3 text-functional-gray">
                            <li><Link href="#" className="hover:text-accent transition-colors">Technical Data Sheets</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">Safety Data Sheets (SDS)</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">Regulatory Statements</Link></li>
                        </ul>
                    </div>

                    {/* Company Col */}
                    <div>
                        <h4 className="font-bold text-primary mb-6">Company</h4>
                        <ul className="space-y-3 text-functional-gray">
                            <li><Link href="#" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">Contact</Link></li>
                            <li><Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div>
                        <h4 className="font-bold text-primary mb-6">Contact</h4>
                        <div className="text-functional-gray space-y-1 not-italic">
                            <p>Scientific Park 1</p>
                            <p>2100 Copenhagen Ø, Denmark</p>
                            <p className="mt-4"><a href="mailto:info@bcn01.bio" className="hover:text-accent transition-colors">info@bcn01.bio</a></p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-functional-gray text-xs">
                    <p>© 2026 BioCulture Nordic. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
