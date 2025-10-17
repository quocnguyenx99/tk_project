"use client";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export default function TongQuanCoCauLaoDongThaco() {
  // Dữ liệu cho biểu đồ 1.1 - theo cấp bậc
  const data = {
    labels: ["2022", "2023", "2024"],
    datasets: [
      {
        label: "Quản lý",
        data: [50, 60, 71],
        backgroundColor: "#22D3EE",
        borderColor: "#22D3EE",
        borderWidth: 0,
      },
      {
        label: "Nhân viên",
        data: [375, 402, 420],
        backgroundColor: "#0891B2", // darker blue
        borderColor: "#0891B2",
        borderWidth: 0,
      },
    ],
  };

  // Dữ liệu cho biểu đồ 1.2 - theo trình độ học vấn
  const educationData = {
    labels: ["2022", "2023", "2024"],
    datasets: [
      {
        label: "Cao đẳng",
        data: [24, 30, 36],
        backgroundColor: "#0F4C75", // darker blue
        borderColor: "#0F4C75",
        borderWidth: 0,
      },
      {
        label: "Đại học",
        data: [363, 387, 405],
        backgroundColor: "#0891B2", // medium blue
        borderColor: "#0891B2",
        borderWidth: 0,
      },
      {
        label: "Trên ĐH",
        data: [38, 45, 50],
        backgroundColor: "#22D3EE", // light blue
        borderColor: "#22D3EE",
        borderWidth: 0,
      },
    ],
  };

  // Dữ liệu cho biểu đồ 1.3 - theo độ tuổi
  const ageData = {
    labels: ["2022", "2023", "2024"],
    datasets: [
      {
        label: "<30",
        data: [230, 255, 270],
        backgroundColor: "#0F4C75", // darker blue
        borderColor: "#0F4C75",
        borderWidth: 0,
      },
      {
        label: "30 - 45",
        data: [175, 183, 192],
        backgroundColor: "#0891B2", // medium blue
        borderColor: "#0891B2",
        borderWidth: 0,
      },
      {
        label: ">45",
        data: [20, 24, 29],
        backgroundColor: "#22D3EE", // light blue
        borderColor: "#22D3EE",
        borderWidth: 0,
      },
    ],
  };

  // Dữ liệu cho biểu đồ 1.4 - theo giới tính
  const genderData = {
    labels: ["2022", "2023", "2024"],
    datasets: [
      {
        label: "Nam",
        data: [322, 347, 362],
        backgroundColor: "#22D3EE", // light blue
        borderColor: "#22D3EE",
        borderWidth: 0,
      },
      {
        label: "Nữ",
        data: [103, 115, 129],
        backgroundColor: "#0891B2", // medium blue
        borderColor: "#0891B2",
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "center",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: false,
      },
      datalabels: {
        display: true,
        align: "end",
        anchor: "end",
        color: "#000",
        font: {
          weight: "bold",
          size: 12,
        },
        formatter: (value) => {
          return value.toLocaleString(); // Format số với dấu phẩy
        },
        offset: 4,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 500,
        ticks: {
          stepSize: 100,
          font: {
            size: 12,
          },
        },
        grid: {
          color: "#E5E5E5",
        },
      },
      x: {
        ticks: {
          font: {
            size: 12,
          },
        },
        grid: {
          display: false,
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 0,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-primary">
            Tổng quan cơ cấu lao động tại TK
          </h1>

          {/* Chart Container */}
          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg flex justify-center">
            <div
              className="w-full max-w-[650px]"
              style={{ height: "300px", minHeight: "250px" }}
            >
              <Bar data={data} options={options} />
            </div>
          </div>

          {/* Chart Description */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-700 px-4">
              Biểu đồ 1.1. Tình hình nguồn nhân lực của TK theo cấp bậc
            </p>
          </div>

          {/* Chart Container 2 - Education Level */}
          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg flex justify-center">
            <div
              className="w-full max-w-[650px]"
              style={{ height: "300px", minHeight: "250px" }}
            >
              <Bar data={educationData} options={options} />
            </div>
          </div>

          {/* Chart Description 2 */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-700 px-4">
              Biểu đồ 1.2. Tình hình nguồn nhân lực của TK theo trình độ học
              vấn
            </p>
          </div>

          {/* Chart Container 3 - Age Group */}
          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg flex justify-center">
            <div
              className="w-full max-w-[650px]"
              style={{ height: "300px", minHeight: "250px" }}
            >
              <Bar data={ageData} options={options} />
            </div>
          </div>

          {/* Chart Description 3 */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-700 px-4">
              Biểu đồ 1.3. Tình hình nguồn nhân lực của TK theo độ tuổi
            </p>
          </div>

          {/* Chart Container 4 - Gender */}
          <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg flex justify-center">
            <div
              className="w-full max-w-[650px]"
              style={{ height: "300px", minHeight: "250px" }}
            >
              <Bar data={genderData} options={options} />
            </div>
          </div>

          {/* Chart Description 4 */}
          <div className="text-center">
            <p className="text-sm sm:text-base md:text-lg font-bold text-gray-700 px-4">
              Biểu đồ 1.4. Tình hình nguồn nhân lực của TK theo giới tính
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
