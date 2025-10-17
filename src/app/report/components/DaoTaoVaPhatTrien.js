"use client";
import { useState } from "react";

export default function DaoTaoVaPhatTrien() {
  const [expandedLevel, setExpandedLevel] = useState(null);

  const careerLevels = [
    {
      id: 1,
      title: "Nhân viên",
      subtitle: "1-2 năm kinh nghiệm",
      color: "from-red-400 to-red-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      content:
        "• Thực thi các công việc được cấp trên giao phó;\n• Phối hợp với các nhân viên khác để hoàn thành nhiệm vụ.",
    },
    {
      id: 2,
      title: "Trưởng nhóm",
      subtitle:
        "Có kinh nghiệm ít nhất 3 năm và quản lý nhóm nhỏ (< 6n người) trong vòng 1 năm",
      color: "from-orange-400 to-orange-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      content:
        "• Đảm nhận một nhóm hàng, 1 nhóm khách hàng hoặc 1 công việc mang tính chuyên môn cao;\n• Ra quyết định trong phạm vi được ủy quyền;\n• Tạo tinh thần làm việc nhóm.",
    },
    {
      id: 3,
      title: "Giám sát",
      subtitle:
        "Có kinh nghiệm ít nhất 5 năm và quản lý nhóm nhỏ (< 15 người) trong vòng 3 năm",
      color: "from-yellow-400 to-yellow-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      content:
        "• Hoạch định, tổ chức, giám sát 1 lĩnh vực hoạt động của phòng ban; Quản lý ngân sách được giao; Kèm cặp và đánh giá nhân viên trực thuộc.",
    },
    {
      id: 4,
      title: "Trưởng phòng",
      subtitle:
        "Có kinh nghiệm ít nhất 8 năm và quản lý nhóm (>15 người) trong vòng 5 năm",
      color: "from-green-400 to-green-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      content:
        "• Lập kế hoạch cho phòng ban mình; Quản lý ngân sách, kết hợp với các phòng ban để hoàn thành nhiệm vụ;\n• Phân công, giao việc và kiểm soát tiến độ; Đánh giá hiệu quả từng nhóm thành viên; Đào tạo, kèm cặp, huấn luyện để phát triển đội ngũ.",
    },
    {
      id: 5,
      title: "Giám đốc",
      subtitle:
        "Có kinh nghiệm ít nhất 10 năm và 5 năm điều hành ở vị trí tương đương",
      color: "from-blue-400 to-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      content:
        "• Lập chiến lược ngắn hạn và trung hạn cho các bộ phận phụ trách; Quản lý ngân sách; Phân bố nguồn lực; Thiết lập sơ đồ tổ chức và các mối quan hệ trong phòng ban;\n• Đánh giá hiệu quả và mục tiêu cần đạt; Đào tạo và nâng tầm đội ngũ kế thừa.",
    },
  ];

  const toggleExpanded = (levelId) => {
    setExpandedLevel(expandedLevel === levelId ? null : levelId);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-primary">
            Thực hành thiết lập OKR cho vị trí SRE
          </h1>

          <div className="bg-white rounded-lg">
            <div className="overflow-x-auto xl:overflow-visible">
              <table className="w-full border-collapse border border-gray-400 min-w-[1200px] xl:min-w-0">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-gray-800">
                      OKR
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-left font-semibold text-gray-800">
                      Name
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-gray-800">
                      EPIC
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-gray-800">
                      Type
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-gray-800">
                      Weight
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-gray-800">
                      Initial
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-gray-800">
                      Target
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-gray-800">
                      Actual
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-gray-800 whitespace-nowrap">
                      On track?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* O1 */}
                  <tr className="bg-blue-200">
                    <td className="border border-gray-400 px-3 py-2 text-center font-bold">
                      O1
                    </td>
                    <td className="border border-gray-400 px-3 py-2 font-semibold">
                      Security
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      1,5
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                  </tr>
                  <tr className="bg-yellow-100">
                    <td className="border border-gray-400 px-3 py-2 text-center font-semibold">
                      KR1
                    </td>
                    <td className="border border-gray-400 px-3 py-2 font-medium">
                      Enhance Security
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      1,5
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      A1
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      [Security] Automated Detection of Dangerous Command Lines
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      <a
                        className="text-blue-600 underline"
                        href="#"
                        rel="noreferrer"
                      >
                        PLAT-343
                      </a>
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Cam kết
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0,5
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      100%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      A2
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      [Security] Managing Secret Keys in TK System
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      <a
                        className="text-blue-600 underline"
                        href="#"
                        rel="noreferrer"
                      >
                        PLAT-325
                      </a>
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Cam kết
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0,7
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      100%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      A3
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Tìm hiểu và đưa ra action dự phòng cho các vấn đề Security
                      phổ biến
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      <a
                        className="text-blue-600 underline"
                        href="#"
                        rel="noreferrer"
                      >
                        SRE-6683
                      </a>
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Mở rộng
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0,3
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      100%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                  </tr>

                  {/* O2 */}
                  <tr className="bg-blue-200">
                    <td className="border border-gray-400 px-3 py-2 text-center font-bold">
                      O2
                    </td>
                    <td className="border border-gray-400 px-3 py-2 font-semibold">
                      Stability & Reliability (SLA 99.99%)
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      6,0
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                  </tr>
                  <tr className="bg-yellow-100">
                    <td className="border border-gray-400 px-3 py-2 text-center font-semibold">
                      KR1
                    </td>
                    <td className="border border-gray-400 px-3 py-2 font-medium">
                      Safety upgrade/deployment with K8s
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Mở rộng
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      3,0
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      A1
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Multi clusters for K8s - Separate Stateful, Stateless
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      <a
                        className="text-blue-600 underline"
                        href="#"
                        rel="noreferrer"
                      >
                        PLAT-359
                      </a>
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Mở rộng
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0,5
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      50%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      A2
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Dùng cụm Stateless mới trên môi trường Prod
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      <a
                        className="text-blue-600 underline"
                        href="#"
                        rel="noreferrer"
                      >
                        PLAT-323
                      </a>
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Cam kết
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0,5
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      100%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      A3
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Upgrade K8s from 1.28 to 1.29
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      <a
                        className="text-blue-600 underline"
                        href="#"
                        rel="noreferrer"
                      >
                        PLAT-360
                      </a>
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Cam kết
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      1,0
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      100%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      A4
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Upgrade K8s TK-prod-cep cluster to v1.28
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      <a
                        className="text-blue-600 underline"
                        href="#"
                        rel="noreferrer"
                      >
                        PLAT-347
                      </a>
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Cam kết
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0,7
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      100%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      A5
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Chuẩn hóa quy trình Internal Tools & Upgrade K8s to 1.29
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      <a
                        className="text-blue-600 underline"
                        href="#"
                        rel="noreferrer"
                      >
                        PLAT-366
                      </a>
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Cam kết
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0,3
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      100%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                  </tr>

                  {/* KR2 */}
                  <tr className="bg-yellow-100">
                    <td className="border border-gray-400 px-3 py-2 text-center font-semibold">
                      KR2
                    </td>
                    <td className="border border-gray-400 px-3 py-2 font-medium">
                      Make sure the Observ stream operates stably
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      1,0
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      A1
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Đảm bảo không mất logs/metrics
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      <a
                        className="text-blue-600 underline"
                        href="#"
                        rel="noreferrer"
                      >
                        PLAT-367
                      </a>
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Cam kết
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      1,0
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      100%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                  </tr>

                  {/* KR3 */}
                  <tr className="bg-yellow-100">
                    <td className="border border-gray-400 px-3 py-2 text-center font-semibold">
                      KR3
                    </td>
                    <td className="border border-gray-400 px-3 py-2 font-medium">
                      Reduce risks related to Stateful
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      1,5
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      A1
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Apply standard backup flow for Stateful components
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      <a
                        className="text-blue-600 underline"
                        href="#"
                        rel="noreferrer"
                      >
                        PLAT-372
                      </a>
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Cam kết
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0,7
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      80%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
