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
                    <Card className="overflow-hidden p-0 h-96 relative group border-0 shadow-lg">
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
                                <h3 className="text-white font-bold text-xl mb-2">Produced in ISO-8 Cleanrooms</h3>
                                <p className="text-gray-300 text-sm">Produced in sterile Danish facilities</p>
                            </div>
                        </div>
                    </Card>

                    {/* Container 2: ISO Compliance */}
                    <Card className="overflow-hidden p-8 h-96 relative bg-white border border-gray-100 shadow-lg flex flex-col">
                        <h3 className="text-primary font-bold text-xl mb-6">ISO methods we follow when demonstrating efficacy</h3>
                        <div className="flex-grow flex flex-col justify-center gap-4">

                            <div className="group relative flex items-center justify-between p-3 border border-gray-200 rounded hover:border-accent hover:bg-accent/5 transition-colors cursor-help">
                                <div>
                                    <div className="font-bold text-primary text-sm">ISO 7218</div>
                                    <div className="text-xs text-functional-gray">Microbiology General Guidance</div>
                                </div>
                                <Info size={16} className="text-accent" />
                                {/* Tooltip */}
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-primary text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-30 shadow-xl pointer-events-none">
                                    General requirements and guidance for microbiological examinations.
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-primary"></div>
                                </div>
                            </div>

                            <div className="group relative flex items-center justify-between p-3 border border-gray-200 rounded hover:border-accent hover:bg-accent/5 transition-colors cursor-help">
                                <div>
                                    <div className="font-bold text-primary text-sm">ISO 11290-1/2</div>
                                    <div className="text-xs text-functional-gray">Listeria Detection & Enum.</div>
                                </div>
                                <Info size={16} className="text-accent" />
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-primary text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-30 shadow-xl pointer-events-none">
                                    Horizontal method for the detection and enumeration of Listeria monocytogenes.
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-primary"></div>
                                </div>
                            </div>

                            <div className="group relative flex items-center justify-between p-3 border border-gray-200 rounded hover:border-accent hover:bg-accent/5 transition-colors cursor-help">
                                <div>
                                    <div className="font-bold text-primary text-sm">ISO 20976-1:2019</div>
                                    <div className="text-xs text-functional-gray">Challenge Testing</div>
                                </div>
                                <Info size={16} className="text-accent" />
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-primary text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-30 shadow-xl pointer-events-none">
                                    Guidelines for conducting challenge tests of food and feed products.
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-primary"></div>
                                </div>
                            </div>

                        </div>
                    </Card>

                    {/* Container 3: Regulatory Standards */}
                    <Card className="overflow-hidden p-8 h-96 relative bg-white border border-gray-100 shadow-lg flex flex-col">
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
                                    BioCulture Nordic is audited by the Danish Veterinary and Food Administration.
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-primary"></div>
                                </div>
                            </div>

                            {/* EFSA */}
                            <div className="group relative flex items-center justify-between p-3 border border-gray-200 rounded hover:border-accent hover:bg-accent/5 transition-colors cursor-help">
                                <div>
                                    <div className="font-bold text-primary text-sm">EFSA QPS Status</div>
                                    <div className="text-xs text-functional-gray">Qualified Presumption of Safety</div>
                                </div>
                                <Info size={16} className="text-accent" />
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-primary text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-30 shadow-xl pointer-events-none">
                                    Biocultures are pre-vetted as safe by the European Food Safety Authority.
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-primary"></div>
                                </div>
                            </div>

                            {/* EC 1333/2008 */}
                            <div className="group relative p-3 border border-gray-200 rounded hover:border-accent hover:bg-accent/5 transition-colors cursor-help">
                                <div className="flex items-center justify-between mb-2">
                                    <div>
                                        <div className="font-bold text-primary text-sm">EC 1333/2008</div>
                                        <div className="text-xs text-functional-gray">Processing Aid</div>
                                    </div>
                                    <Info size={16} className="text-accent" />
                                </div>
                                <p className="text-[10px] text-functional-gray leading-tight">
                                    Optional: Label as Lactic acid culture or protective culture.
                                </p>
                                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-3 bg-primary text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-30 shadow-xl pointer-events-none">
                                    Biocultures are classified as Processing Aids under EC Regulation 1333/2008.
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
