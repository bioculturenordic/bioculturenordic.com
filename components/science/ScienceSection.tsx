import LogScaleChart from "./LogScaleChart";

export default function ScienceSection() {
    return (
        <section className="py-24 bg-functional-white" id="science">
            <div className="container mx-auto px-4">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-primary mb-2 font-heading">Efficacy Data</h2>
                    <div className="h-1 w-20 bg-accent mb-6" />
                    <p className="text-functional-gray text-lg max-w-3xl">
                        In controlled studies BCN01 demonstrates significant log-reduction capabilities removing +99% of all Listeria species within 5-30 minutes.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Chart 1: Log Reduction */}
                    <div>
                        <LogScaleChart />
                        <p className="text-xs text-gray-400 mt-2 italic">* Data based on inoculation studies using L. monocytogenes pools.</p>
                    </div>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg border border-clinical-border shadow-sm">
                            <div className="text-4xl font-mono font-bold text-functional-green mb-2">99.9%</div>
                            <h4 className="font-bold text-primary text-sm uppercase tracking-wide">Reduction Rate</h4>
                            <p className="text-sm text-functional-gray mt-2">Consistent performance across all tested food sources and surfaces.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-clinical-border shadow-sm">
                            <div className="text-4xl font-mono font-bold text-primary mb-2">Flora</div>
                            <h4 className="font-bold text-primary text-sm uppercase tracking-wide">Stabilizing Microbiota</h4>
                            <p className="text-sm text-functional-gray mt-2">Restores a natural benign microbial ecosystem during processing where the product is most vulnerable.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-clinical-border shadow-sm">
                            <div className="text-4xl font-mono font-bold text-accent mb-2">No</div>
                            <h4 className="font-bold text-primary text-sm uppercase tracking-wide">Sensory Impact</h4>
                            <p className="text-sm text-functional-gray mt-2">No impact on taste, texture, or smell of food products.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-clinical-border shadow-sm">
                            <div className="text-4xl font-mono font-bold text-functional-gray mb-2">EFSA</div>
                            <h4 className="font-bold text-primary text-sm uppercase tracking-wide">QPS-listed</h4>
                            <p className="text-sm text-functional-gray mt-2">Qualified Presumption of Safety status.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
