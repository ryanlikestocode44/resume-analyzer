// src/components/OverallScoreChart.tsx
import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useLanguage } from "@/hooks/useLanguage";

ChartJS.register(ArcElement, Tooltip, Legend);

interface OverallScoreChartProps {
  score: number; // antara 0–100
}

const OverallScoreChart: React.FC<OverallScoreChartProps> = ({ score }) => {
  const { t } = useLanguage();

  const data = {
    labels: ["Score", "Sisa"],
    datasets: [
      {
        data: [score, 100 - score],
        backgroundColor: ["#10b981", "#e5e7eb"], // Hijau & Abu
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return context.label === "Score" ? `${score}/100` : null;
          },
        },
      },
    },
  };

  return (
    <div className="relative w-40 h-40">
      <Doughnut data={data} options={options as any} />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-green-600">{score}</span>
        <span className="text-xs text-gray-500">{t.comparison} 100</span>
      </div>
    </div>
  );
};

export default OverallScoreChart;
