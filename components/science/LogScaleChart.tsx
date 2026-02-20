"use client";

import { motion } from "framer-motion";

export default function LogScaleChart() {
    const width = 800;
    const height = 400;
    const padding = { left: 60, right: 40, top: 20, bottom: 40 };

    // Data: Time (Days, log scale approx) vs Log CFU/g
    // We will map Day X to linear X axis for simplicity of reading, or log? 
    // User data: 0.1, 1, 7, 14, 30.
    // Let's use linear X axis for days 0-30 to show the time clearly.
    // Y axis is Log10: 0 -> 7 (roughly 10^0 to 10^7).

    // Data Points (Day, LogValue)
    // Control:
    // Start (0): 200 -> 2.3
    // 0.1: 200 -> 2.3
    // 1: 400 -> 2.6
    // 7: 4000 -> 3.6
    // 14: 40000 -> 4.6
    // 30: 4E6 -> 6.6
    const controlData = [
        { x: 0, y: 2.3 },
        { x: 0.1, y: 2.3 },
        { x: 1, y: 2.6 },
        { x: 7, y: 3.6 },
        { x: 14, y: 4.6 },
        { x: 30, y: 6.6 },
    ];

    // BCN01:
    // Start (0): 200 -> 2.3
    // 0.1: 10 -> 1.0
    // 1: 5 -> 0.7
    // 7: 4 -> 0.6
    // 14: 3 -> 0.47
    // 30: 0 -> 0 (Log 0 is 1 cfu, but user said 0... let's assume <1 or 0 for graph purposes) -> Let's map to 0
    const treatedData = [
        { x: 0, y: 2.3 },
        { x: 0.1, y: 1.0 },
        { x: 1, y: 0.7 },
        { x: 7, y: 0.6 },
        { x: 14, y: 0.47 },
        { x: 30, y: 0 },
    ];

    const mapX = (d: number) => padding.left + (d / 30) * (width - padding.left - padding.right);
    const mapY = (val: number) => height - padding.bottom - (val / 7) * (height - padding.top - padding.bottom);

    const createPath = (data: { x: number, y: number }[]) => {
        return data.map((p, i) => {
            const x = mapX(p.x);
            const y = mapY(p.y);
            return `${i === 0 ? 'M' : 'L'} ${x},${y}`;
        }).join(' ');
    };

    return (
        <div className="w-full overflow-hidden bg-white border border-gray-100 rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h3 className="text-primary font-bold font-heading text-lg">Growth Inhibition of <i className="font-serif italic">L. monocytogenes</i></h3>
                    <p className="text-gray-500 text-sm font-mono">Smoked Salmon Model, 8°C (Abusive Temp)</p>
                </div>
                <div className="flex gap-4 text-xs font-bold">
                    <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-gray-300"></div> Control</div>
                    <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-accent"></div> BCN01 Treated</div>
                </div>
            </div>

            <div className="relative viewBox-container aspect-[2/1] w-full">
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
                    {/* Grid Lines Y */}
                    {[0, 1, 2, 3, 4, 5, 6, 7].map((logVal) => (
                        <g key={logVal}>
                            <line
                                x1={padding.left}
                                y1={mapY(logVal)}
                                x2={width - padding.right}
                                y2={mapY(logVal)}
                                stroke="#e5e7eb"
                                strokeWidth="1"
                                strokeDasharray="4 4"
                            />
                            <text x={padding.left - 10} y={mapY(logVal)} dy="4" textAnchor="end" fontSize="10" fill="#9ca3af">{logVal}</text>
                        </g>
                    ))}
                    <text x="10" y={height / 2} transform={`rotate(-90 10,${height / 2})`} textAnchor="middle" fontSize="10" fill="#6b7280" fontWeight="bold">Log CFU/g</text>

                    {/* Grid Lines X */}
                    {[0, 7, 14, 30].map((day) => (
                        <text key={day} x={mapX(day)} y={height - 10} textAnchor="middle" fontSize="10" fill="#6b7280">Day {day}</text>
                    ))}

                    {/* Paths */}
                    <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                        d={createPath(controlData)}
                        fill="none"
                        stroke="#cbd5e1"
                        strokeWidth="3"
                        strokeDasharray="5 5"
                    />
                    <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 2 }}
                        d={createPath(treatedData)}
                        fill="none"
                        stroke="#2C7A7B"
                        strokeWidth="4"
                    />

                    {/* Points */}
                    {treatedData.map((p, i) => (
                        <motion.circle
                            key={i}
                            cx={mapX(p.x)}
                            cy={mapY(p.y)}
                            r="4"
                            fill="#fff"
                            stroke="#2C7A7B"
                            strokeWidth="2"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 1 + (i * 0.1) }}
                        />
                    ))}
                </svg>
            </div>
        </div>
    );
}
