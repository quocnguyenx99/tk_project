"use client";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export default function TuyenDung() {
  // Data + options for the bar chart
  const okrUnderstandData = {
    labels: ["2022", "2023", "2024", "2025"],
    datasets: [
      {
        data: [75, 82, 88, 93],
        backgroundColor: ["#06b6d4", "#38bdf8", "#60a5fa", "#8b5cf6"],
        borderRadius: 8,
        // make columns bigger and closer
        categoryPercentage: 1.0,
        barPercentage: 1.0,
        barThickness: 96,
        maxBarThickness: 120,
      },
    ],
  };

  const okrUnderstandOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      datalabels: {
        display: true,
        anchor: "end",
        align: "end",
        color: "#111827",
        font: { weight: "bold", size: 12 },
        formatter: (v) => `${v}%`,
        offset: 4,
      },
      title: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `${ctx.raw}%`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: { color: "#e5e7eb" },
        ticks: {
          stepSize: 20,
          callback: (v) => v,
        },
      },
      x: {
        grid: { display: false },
      },
    },
  };

  // Line chart: % OKR nhân viên liên kết với OKR phòng ban
  const linkedOKRData = {
    labels: ["2022", "2023", "2024", "2025"],
    datasets: [
      {
        label: "% liên kết OKR phòng ban",
        data: [65, 80, 90, 95],
        borderColor: "#06b6d4",
        backgroundColor: "rgba(6, 182, 212, 0.15)",
        pointBackgroundColor: "#06b6d4",
        pointBorderColor: "#06b6d4",
        pointRadius: 4,
        pointHoverRadius: 6,
        borderWidth: 2,
        tension: 0.3,
        fill: false,
      },
    ],
  };

  const linkedOKROptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
      datalabels: { display: false },
      tooltip: {
        callbacks: { label: (ctx) => `${ctx.raw}%` },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: { color: "#e5e7eb" },
        ticks: { stepSize: 20, callback: (v) => v },
      },
      x: { grid: { display: false } },
    },
  };

  // Bar chart: Tỷ lệ nhân viên check-in OKR đúng hạn
  const checkinData = {
    labels: ["2022", "2023", "2024", "2025"],
    datasets: [
      {
        data: [80, 90, 95, 98],
        backgroundColor: ["#06c5cd", "#36c5ff", "#6aa8ff", "#8b84f6"],
        borderRadius: 8,
        categoryPercentage: 1.0,
        barPercentage: 1.0,
        barThickness: 96,
        maxBarThickness: 120,
      },
    ],
  };

  const checkinOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: { display: false },
      datalabels: {
        display: true,
        anchor: "end",
        align: "end",
        color: "#111827",
        font: { weight: "bold", size: 12 },
        formatter: (v) => `${v}%`,
        offset: 8,
        // make sure labels are not cut off at the top
        clip: false,
        clamp: true,
      },
      tooltip: {
        callbacks: { label: (ctx) => `${ctx.raw}%` },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        // add headroom so the 98% label is fully visible
        max: 120,
        grid: { color: "#e5e7eb" },
        ticks: { stepSize: 20, callback: (v) => v },
      },
      x: { grid: { display: false } },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-primary">
            Hiệu quả áp dụng OKR tại TK
          </h1>

          {/* Bảng Tỷ lệ nhân viên hiểu rõ OKR cá nhân -> CHART */}
          <div className="overflow-x-auto mb-8">
            <h2 className="text-xl font-semibold mb-4 text-center text-black">
              Tỷ lệ nhân viên hiểu rõ OKR cá nhân giai đoạn 2022 - 2025
            </h2>
            <div
              className="w-full max-w-[650px] sm:max-w-[750px] md:max-w-[900px] mx-auto"
              style={{ height: 360 }}
            >
              <Bar data={okrUnderstandData} options={okrUnderstandOptions} />
            </div>
          </div>

          {/* Bảng tổng hợp OKR -> CHART: % OKR nhân viên liên kết với OKR phòng ban */}
          <div className="overflow-x-auto mb-8">
            <h2 className="text-xl font-semibold mb-4 text-center text-black">
              Tỷ lệ OKR nhân viên liên kết với OKR phòng ban
            </h2>
            <div
              className="w-full max-w-[650px] sm:max-w-[750px] md:max-w-[900px] mx-auto"
              style={{ height: 360 }}
            >
              <Line data={linkedOKRData} options={linkedOKROptions} />
            </div>
          </div>

          {/* Bảng Tỷ lệ nhân viên thực hiện check-in OKR đúng hạn -> CHART */}
          <div className="overflow-x-auto mb-8">
            <h2 className="text-xl font-semibold mb-4 text-center text-black">
              Tỷ lệ nhân viên check-in OKR đúng hạn
            </h2>
            <div
              className="w-full max-w-[650px] sm:max-w-[750px] md:max-w-[900px] mx-auto"
              style={{ height: 360 }}
            >
              <Bar data={checkinData} options={checkinOptions} />
            </div>
          </div>

          {/* Bảng Số ý tưởng được thử nghiệm theo quý */}
          <div className="overflow-x-auto mb-8">
            <h2 className="text-xl font-semibold mb-4 text-center text-black">
              Số ý tưởng được thử nghiệm theo quý giai đoạn 2022 - 2025
            </h2>
            <table className="w-full border-collapse border text-black border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                    Năm
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                    Số ý tưởng được thử nghiệm
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
                    Ghi chú
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center font-semibold">
                    2022
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    5
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Tổ chức "Innovation Challenge" đầu tiên cấp công ty.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center font-semibold">
                    2023
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    8
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Đưa tiêu chí Stretch OKR vào đánh giá quý
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center font-semibold">
                    2024
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    12
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Quản lý và theo dõi ý tưởng trên google sheet, HR và trưởng
                    phòng trực tiếp theo dõi, quản lý và đánh giá các thông tin
                    này.
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-3 text-center font-semibold">
                    2025
                  </td>
                  <td className="border border-gray-300 px-4 py-3 text-center">
                    16
                  </td>
                  <td className="border border-gray-300 px-4 py-3">
                    Xuất dữ liệu về Jira để tạo OKR dashboard toàn công ty
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
