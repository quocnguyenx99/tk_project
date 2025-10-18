"use client";
import Image from "next/image";
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

          {/* Bảng: OKR cấp phòng ban */}
          <div className="mt-10 mb-12">
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                Bảng: OKR cấp phòng ban
              </h2>
            </div>

            <div className="bg-white rounded-lg">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-400 min-w-[1200px]">
                  <thead>
                    <tr className="bg-blue-900 text-white">
                      <th className="border border-gray-400 px-3 py-2 text-center">
                        OKR
                      </th>
                      <th className="border border-gray-400 px-3 py-2 text-left">
                        Metrics
                      </th>
                      <th className="border border-gray-400 px-3 py-2 text-center">
                        Epic/Task
                      </th>
                      <th className="border border-gray-400 px-3 py-2 text-center">
                        Weight
                      </th>
                      <th className="border border-gray-400 px-3 py-2 text-center">
                        Current
                      </th>
                      <th className="border border-gray-400 px-3 py-2 text-center">
                        Target Q4
                      </th>
                      <th className="border border-gray-400 px-3 py-2 text-center">
                        Priority
                      </th>
                      <th className="border border-gray-400 px-3 py-2 text-center">
                        Type
                      </th>
                      <th className="border border-gray-400 px-3 py-2 text-center whitespace-nowrap">
                        T10/W3 1/11
                      </th>
                      <th className="border border-gray-400 px-3 py-2 text-left">
                        Note
                      </th>
                    </tr>
                    <tr className="bg-blue-200">
                      <th className="border border-gray-400 px-3 py-2 text-left" colSpan={10}>
                        O1  Stability & Reliability
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* KR1 */}
                    <tr>
                      <td className="border border-gray-400 px-3 py-2 text-center font-semibold">KR1</td>
                      <td className="border border-gray-400 px-3 py-2">Reduce 50% incidents compared to Q3</td>
                      <td className="border border-gray-400 px-3 py-2 text-center">DP-2983-Authenticate</td>
                      <td className="border border-gray-400 px-3 py-2 text-center">60%</td>
                      <td className="border border-gray-400 px-3 py-2 text-center">10 incidents</td>
                      <td className="border border-gray-400 px-3 py-2 text-center">&lt;= 4 incidents</td>
                      <td className="border border-gray-400 px-3 py-2 text-center">
                        <span className="inline-block bg-green-700 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          MEDIUM
                        </span>
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center">
                        <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          CAM KẾT
                        </span>
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center">20%</td>
                      <td className="border border-gray-400 px-3 py-2 text-sm">
                        0 issues - Authenticate to see issue details<br />
                        2 Coding, 1 Config job, 1 Thao tác raw, 2 Tech debt<br />
                        Epic này đã xử lý root cause 1 incident trong Q3
                      </td>
                    </tr>

                    {/* KR2 */}
                    <tr>
                      <td className="border border-gray-400 px-3 py-2 text-center font-semibold">KR2</td>
                      <td className="border border-gray-400 px-3 py-2">SLA 99.99%</td>
                      <td className="border border-gray-400 px-3 py-2 text-center"></td>
                      <td className="border border-gray-400 px-3 py-2 text-center">30%</td>
                      <td className="border border-gray-400 px-3 py-2 text-center">SLA 99.99%</td>
                      <td className="border border-gray-400 px-3 py-2 text-center">SLA 99.99%</td>
                      <td className="border border-gray-400 px-3 py-2 text-center">
                        <span className="inline-block bg-green-700 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          MEDIUM
                        </span>
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center">
                        <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          CAM KẾT
                        </span>
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center">33%</td>
                      <td className="border border-gray-400 px-3 py-2 text-sm">
                        Giữ SLA rate trong tháng 10<br />
                        SLA rate = average (sla by date 2024-10-01 → nay)
                      </td>
                    </tr>

                    {/* KR3 */}
                    <tr>
                      <td className="border border-gray-400 px-3 py-2 text-center font-semibold">KR3</td>
                      <td className="border border-gray-400 px-3 py-2">100% incidents Q3–Q4 có metric downtime</td>
                      <td className="border border-gray-400 px-3 py-2 text-center"></td>
                      <td className="border border-gray-400 px-3 py-2 text-center">10%</td>
                      <td className="border border-gray-400 px-3 py-2 text-center"></td>
                      <td className="border border-gray-400 px-3 py-2 text-center"></td>
                      <td className="border border-gray-400 px-3 py-2 text-center">
                        <span className="inline-block bg-green-700 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          MEDIUM
                        </span>
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center">
                        <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          CAM KẾT
                        </span>
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center">0%</td>
                      <td className="border border-gray-400 px-3 py-2 text-sm">Chưa có action</td>
                    </tr>

                    {/* O2 header (optional) */}
                    <tr className="bg-blue-200">
                      <th className="border border-gray-400 px-3 py-2 text-left" colSpan={10}>
                        O2  Team Performance & Process
                      </th>
                    </tr>
                    {/* Example row under O2 */}
                    <tr>
                      <td className="border border-gray-400 px-3 py-2 text-center font-semibold">KR1</td>
                      <td className="border border-gray-400 px-3 py-2">Chuẩn hóa 100% checklist release</td>
                      <td className="border border-gray-400 px-3 py-2 text-center">TASK-1001</td>
                      <td className="border border-gray-400 px-3 py-2 text-center">20%</td>
                      <td className="border border-gray-400 px-3 py-2 text-center">70%</td>
                      <td className="border border-gray-400 px-3 py-2 text-center">100%</td>
                      <td className="border border-gray-400 px-3 py-2 text-center">
                        <span className="inline-block bg-green-700 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          HIGH
                        </span>
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center">
                        <span className="inline-block bg-indigo-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          MỞ RỘNG
                        </span>
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center">65%</td>
                      <td className="border border-gray-400 px-3 py-2 text-sm">Đã chạy pilot ở 2 dự án</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Bảng: OKR cấp domain */}
          <div className="mt-10 mb-12">
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                Bảng: OKR cấp domain
              </h2>
            </div>
            <div className="bg-white rounded-lg">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-400 min-w-[1200px]">
                  <thead>
                    <tr className="bg-blue-900 text-white">
                      <th className="border border-gray-400 px-3 py-2 text-left">Objective</th>
                      <th className="border border-gray-400 px-3 py-2 text-left">Biz Value</th>
                      <th className="border border-gray-400 px-3 py-2 text-left">Metrics</th>
                      <th className="border border-gray-400 px-3 py-2 text-center">EPICs</th>
                      <th className="border border-gray-400 px-3 py-2 text-center">Weight</th>
                      <th className="border border-gray-400 px-3 py-2 text-center">Priority</th>
                      <th className="border border-gray-400 px-3 py-2 text-center">Target</th>
                      <th className="border border-gray-400 px-3 py-2 text-left">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Objective 1 */}
                    <tr className="bg-green-700 text-white font-semibold">
                      <td className="border border-gray-400 px-3 py-2" colSpan={8}>
                        Objective 1: Security
                      </td>
                    </tr>
                    <tr className="bg-yellow-200 font-semibold">
                      <td className="border border-gray-400 px-3 py-2" colSpan={8}>
                        KR 1: Enhance Security
                      </td>
                    </tr>
                    {/* Row 1 */}
                    <tr>
                      <td className="border border-gray-400 px-3 py-2 align-top">Giảm thiểu rủi ro do vận hành nội bộ</td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        • Sử dụng Vault để cấp phát secret key cho operation traffic<br />
                        • Managing Secret Keys cho các services của TK<br />
                        • Lên kế hoạch migrate hệ thống hiện tại sang flow mới
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Process liên quan tới security tuân thủ 100%<br />
                        100% apply Vault để quản lý SSH Key
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-left align-top">
                        <a className="text-blue-600 underline" href="#" rel="noreferrer">PLAT-325</a> •{" "}
                        <a className="text-blue-600 underline" href="#" rel="noreferrer">PLAT-343</a>
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top">MEDIUM</td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top">
                        <span className="inline-block bg-amber-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          MEDIUM
                        </span>
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Không có incident liên quan tới Security trong hệ thống<br />
                        Quản lý và detect được các problems liên quan tới security
                      </td>
                    </tr>
                    {/* Row 2 */}
                    <tr>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Tìm hiểu và đưa ra action dự phòng cho các vấn đề Security phổ biến
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        • Xác định các lỗ hổng phổ biến, nghiên cứu báo cáo/tài liệu gần đây<br />
                        • Thiết lập quy trình dự phòng (playbook)
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 text-left align-top">
                        <a className="text-blue-600 underline" href="#" rel="noreferrer">SRE-6683</a>
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top">
                        <span className="inline-block bg-amber-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          MEDIUM
                        </span>
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Không xảy ra incident liên quan tới downtime trong hệ thống
                      </td>
                    </tr>

                    {/* Objective 2 */}
                    <tr className="bg-green-700 text-white font-semibold">
                      <td className="border border-gray-400 px-3 py-2" colSpan={8}>
                        Objective 2: Stability & Reliability
                      </td>
                    </tr>
                    <tr className="bg-yellow-200 font-semibold">
                      <td className="border border-gray-400 px-3 py-2" colSpan={8}>
                        KR 1: Safety upgrade/deployment with K8s
                      </td>
                    </tr>
                    {/* Row 3 */}
                    <tr>
                      <td className="border border-gray-400 px-3 py-2 align-top">Multi Clusters for K8s (SRE)</td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        • Triển khai cụm Stateless mới trên môi trường Prod<br />
                        • Hoàn tất tách domain/services khỏi Stateful
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        0% downtime trong quá trình nâng cấp<br />
                        Đảm bảo hoạt động 99.99%
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-left align-top">
                        <a className="text-blue-600 underline" href="#" rel="noreferrer">PLAT-323</a> •{" "}
                        <a className="text-blue-600 underline" href="#" rel="noreferrer">PLAT-359</a>
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top">HIGH</td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top">
                        <span className="inline-block bg-rose-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          HIGH
                        </span>
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Triển khai thành công trên Prod, hệ thống ổn định, app stateless deploy trên multi clusters
                      </td>
                    </tr>
                    {/* Row 4 */}
                    <tr>
                      <td className="border border-gray-400 px-3 py-2 align-top">Upgrade K8s 1.29</td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        • Nâng cấp K8s từ 1.28 lên 1.29 cho các env<br />
                        • TDP (Compute, Service, Storage)
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        100% các clusters được nâng cấp lên 1.29
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-left align-top">
                        <a className="text-blue-600 underline" href="#" rel="noreferrer">PLAT-360</a> •{" "}
                        <a className="text-blue-600 underline" href="#" rel="noreferrer">PLAT-339</a>
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top">HIGH</td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top">
                        <span className="inline-block bg-rose-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          HIGH
                        </span>
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top">
                        Mỗi quý nâng cấp K8s lên 1 version cho các môi trường
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Upgrade toàn bộ các cụm lên 1.29 • SRE-Prod
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
                Bảng: OKR cấp cá nhân
              </h2>
            </div>

          <div className="bg-white rounded-lg">
            <div className="overflow-x-auto xl:overflow-visible">
              <table className="w-full border-collapse border border-gray-400 min-w-[1200px] xl:min-w-0">
                <thead>
                  <tr className="bg-blue-900 ">
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-white">
                      OKR
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-left font-semibold text-white">
                      Name
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-white">
                      EPIC
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-white">
                      Type
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-white">
                      Weight
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-white">
                      Initial
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-white">
                      Target
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-white">
                      Actual
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-white whitespace-nowrap">
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

          {/* Ví dụ về một PLAT trên Jira */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">
              Ví dụ về một PLAT trên Jira
            </h2>
            <div className="relative mx-auto w-full max-w-4xl rounded-lg border border-gray-200 shadow bg-gray-50 overflow-hidden">
              <div className="relative w-full h-64 sm:h-80 md:h-[420px]">
                <Image
                  src="/images/123.png"
                  alt="Ví dụ về một PLAT trên Jira"
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}
