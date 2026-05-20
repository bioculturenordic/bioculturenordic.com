import { Card } from "../ui/card";
import { Info } from "lucide-react";

export default function TrustSection() {
    return (
        <section id="trust" className="py-24 bg-functional-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-6 font-heading">Compliance</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Container 1: ISO-8 Cleanroom */}
                    <Card className="overflow-hidden p-0 h-auto min-h-96 relative group border-0 shadow-lg">
                        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        <div className="absolute inset-0 z-0">
                            <img
                                src="/images/lab4.jpeg"
                                alt="ISO-8 Cleanroom"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/95 z-20 flex items-end p-8">
                            <div>
                                 <h3 className="text-white font-bold text-xl mb-2">Packaged in ISO-8 Cleanrooms</h3>
                                <p className="text-gray-300 text-sm">Aseptically packaged in Denmark</p>
                            </div>
                        </div>
                    </Card>

                    {/* Container 2: GMP & HACCP Protocols */}
                    <Card className="overflow-hidden p-8 h-auto min-h-96 relative bg-white border border-gray-100 shadow-lg flex flex-col pb-6">
                        <h3 className="text-primary font-bold text-xl mb-6">GMP & HACCP Protocols</h3>
                        <div className="flex-grow flex flex-col justify-center gap-4">

                            <div className="group relative flex items-center justify-between p-3 border border-gray-200 rounded hover:border-accent hover:bg-accent/5 transition-colors cursor-help">
                                <div>
                                    <div className="font-bold text-primary text-sm">HACCP Integration</div>
                                    <div className="text-xs text-functional-gray">Hazard Analysis & Critical Control</div>
                                </div>
                                <Info size={16} className="text-accent" />
                                {/* Tooltip */}
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-primary text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-30 shadow-xl pointer-events-none">
                                    Established HACCP-protocols for complete food safety compliance.
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-primary"></div>
                                </div>
                            </div>

                            <div className="group relative flex items-center justify-between p-3 border border-gray-200 rounded hover:border-accent hover:bg-accent/5 transition-colors cursor-help">
                                <div>
                                    <div className="font-bold text-primary text-sm">(EC) 178/2002</div>
                                    <div className="text-xs text-functional-gray">General Food Law Compliance</div>
                                </div>
                                <Info size={16} className="text-accent" />
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-primary text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-30 shadow-xl pointer-events-none">
                                    Adherence to traceability, hygiene standards, and food safety principles in European food processing.
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-primary"></div>
                                </div>
                            </div>

                            <div className="group relative flex items-center justify-between p-3 border border-gray-200 rounded hover:border-accent hover:bg-accent/5 transition-colors cursor-help">
                                <div>
                                    <div className="font-bold text-primary text-sm">(EC) 852/2004</div>
                                    <div className="text-xs text-functional-gray">Hygiene of Foodstuffs</div>
                                </div>
                                <Info size={16} className="text-accent" />
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-primary text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-30 shadow-xl pointer-events-none">
                                    Full compliance with general hygiene requirements for food business operators under EU legislation.
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-primary"></div>
                                </div>
                            </div>

                        </div>
                    </Card>

                    {/* Container 3: Regulatory Standards */}
                    <Card className="overflow-hidden p-8 h-auto min-h-96 relative bg-white border border-gray-100 shadow-lg flex flex-col pb-6">
                        <h3 className="text-primary font-bold text-xl mb-6">Regulatory</h3>
                        <div className="flex-grow flex flex-col justify-center gap-4">

                            {/* Fødevarestyrelsen */}
                            <div className="group relative flex items-center justify-between p-3 border border-gray-200 rounded hover:border-accent hover:bg-accent/5 transition-colors cursor-help">
                                <div>
                                    <div className="font-bold text-primary text-sm">DVFA Audited</div>
                                    <div className="text-xs text-functional-gray">ID: 1506617</div>
                                </div>
                                <Info size={16} className="text-accent" />
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-primary text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-30 shadow-xl pointer-events-none">
                                    BioCulture Nordic is audited by the Danish Veterinary and Food Administration (Fødevarestyrelsen).
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-primary"></div>
                                </div>
                            </div>

                            {/* EFSA */}
                            <div className="group relative flex items-center justify-between p-3 border border-gray-200 rounded hover:border-accent hover:bg-accent/5 transition-colors cursor-help">
                                <div>
                                    <div className="font-bold text-primary text-sm">EFSA QPS Source</div>
                                    <div className="text-xs text-functional-gray">Qualified Presumption of Safety</div>
                                </div>
                                <Info size={16} className="text-accent" />
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-primary text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-30 shadow-xl pointer-events-none">
                                    The fermentation strain used to produce our lactic acid is Qualified Presumption of Safety (QPS) listed.
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-primary"></div>
                                </div>
                            </div>

                            {/* EC 101/2013 */}
                            <div className="group relative p-3 border border-gray-200 rounded hover:border-accent hover:bg-accent/5 transition-colors cursor-help">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="font-bold text-primary text-sm">(EC) 101/2013</div>
                                        <div className="text-xs text-functional-gray">Lactic Acid Treatment</div>
                                    </div>
                                    <Info size={16} className="text-accent" />
                                </div>
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-primary text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-30 shadow-xl pointer-events-none">
                                    Authorized Lactic Acid E 270 usage for surface treatment and organic regulation in European animal foods. Please refer to (EC) 101/2013.
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-primary"></div>
                                </div>
                            </div>

                        </div>
                    </Card>

                </div>
            </div>
        </section>
    );
}
