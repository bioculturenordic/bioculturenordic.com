import Link from "next/link";

export default function SiteFooter() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8 text-sm">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

                    {/* Brand Col */}
                    <div className="space-y-4">
                        <Link href="/" className="inline-block">
                            <span className="text-xl font-bold font-heading text-primary tracking-tight">
                                LA<span className="text-accent">01</span>
                            </span>
                        </Link>
                        <p className="text-functional-gray leading-relaxed max-w-xs">
                            Natural L(+) Lactic Acid (E 270) solutions for the food and seafood industry.
                        </p>
                    </div>

                    {/* Certificates Col */}
                    <div>
                        <h4 className="font-bold text-primary mb-6">Certificates</h4>
                        <p className="text-functional-gray leading-relaxed max-w-xs">
                            Kosher and Halal compliance certificates are available upon request.
                        </p>
                    </div>

                    {/* Contact Col */}
                    <div>
                        <h4 className="font-bold text-primary mb-6">Contact</h4>
                        <div className="text-functional-gray space-y-1 not-italic">
                            <p>Transformervej 14</p>
                            <p>2860 Søborg, Denmark</p>
                            <p className="mt-4"><a href="mailto:contact@bioculturenordic.com" className="hover:text-accent transition-colors">contact@bioculturenordic.com</a></p>
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
