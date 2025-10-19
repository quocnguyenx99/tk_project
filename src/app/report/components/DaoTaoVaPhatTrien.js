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
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-black">
                OKR cấp công ty: Tăng cường bảo mật, ổn định và hiệu quả hạ tầng
                công nghệ, hỗ trợ mở rộng các sản phẩm chiến lược.
              </h2>
            </div>
          </div>

          {/* Bảng: OKR cấp domain */}
          <div className="mt-10 mb-12">
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-base sm:text-lg md:text-xl font-semibold text-black">
                Bảng 1: OKR cấp domain
              </h2>
            </div>
            <div className="bg-white rounded-lg">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-400 min-w-[1200px]">
                  <thead>
                    <tr className="bg-blue-900 text-white">
                      <th className="border border-gray-400 px-3 py-2 text-left">
                        Objective
                      </th>
                      <th className="border border-gray-400 px-3 py-2 text-left">
                        Biz Value
                      </th>
                      <th className="border border-gray-400 px-3 py-2 text-left">
                        Metrics
                      </th>
                      <th className="border border-gray-400 px-3 py-2 text-center">
                        EPICs
                      </th>
                      <th className="border border-gray-400 px-3 py-2 text-center">
                        Weight
                      </th>
                      <th className="border border-gray-400 px-3 py-2 text-center">
                        Priority
                      </th>
                      <th className="border border-gray-400 px-3 py-2 text-center">
                        Target
                      </th>
                      <th className="border border-gray-400 px-3 py-2 text-left">
                        Note
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Objective 1: Security */}
                    <tr className="bg-cyan-400 text-black font-semibold">
                      <td
                        className="border border-gray-400 px-3 py-2"
                        colSpan={8}
                      >
                        Objective 1: Security
                      </td>
                    </tr>

                    {/* KR 1: Enhance Security */}
                    <tr className="bg-yellow-200 font-semibold">
                      <td
                        className="border border-gray-400 px-3 py-2"
                        colSpan={8}
                      >
                        KR 1: Enhance Security
                      </td>
                    </tr>

                    {/* Row 1 */}
                    <tr>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Giảm thiểu rủi ro do vận hành nội bộ
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Sử dụng Vault để cấp phát secret key; Sử dụng Vault để
                        quản lý và cấp phát SSH key cho cấp server/node (SRE);
                        Thiết lập dây chuyền quản lý ssh key trong hệ thống;
                        Phát hiện command lines nguy hiểm hệ thống; Phát hiện và
                        cảnh báo kịp thời các command lines nguy hiểm sử dụng
                        thiếp; ngăn chặn rủi ro trước khi gây tổn thương.
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Process liên quan tới security tuân thủ 100%
                        <br />
                        100% apply Vault để quản lý SSH Key
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-left align-top">
                        PLAT-325
                        <br />
                        PLAT-343
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top">
                        MEDIUM
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top">
                        <span className="inline-block bg-amber-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          MEDIUM
                        </span>
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Không có incident liên quan tới Security trong hệ thống
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Tìm hiểu và đưa ra action dự phòng cho các vấn đề
                        Security phổ biến
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Xác định các lỗ hổng phổ biến; Nghiên cứu các báo cáo và
                        tài liệu gần đây; Thiết lập quy trình dự phòng
                        (playbook)
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 text-left align-top">
                        SRE-6683
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top">
                        <span className="inline-block bg-amber-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          MEDIUM
                        </span>
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Không xảy ra incident liên quan tới downtime trong hệ
                        thống
                      </td>
                    </tr>

                    {/* Objective 2: Stability & Reliability */}
                    <tr className="bg-cyan-400 text-black font-semibold">
                      <td
                        className="border border-gray-400 px-3 py-2"
                        colSpan={8}
                      >
                        Objective 2: Stability & Reliability
                      </td>
                    </tr>

                    {/* KR 1: Safety upgrade/deployment with K8s */}
                    <tr className="bg-yellow-200 font-semibold">
                      <td
                        className="border border-gray-400 px-3 py-2"
                        colSpan={8}
                      >
                        KR 1: Safety upgrade/deployment with K8s
                      </td>
                    </tr>

                    {/* Multi Clusters for K8s */}
                    <tr className="bg-purple-200 ">
                      <td
                        className="border border-gray-400 px-3 py-2"
                        colSpan={8}
                      >
                        Multi Clusters for K8s
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Multi Clusters for K8s (SRE)
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Triển khai cụm Stateless mới trên môi trường Prod
                        <br />
                        Hoàn tất tách domain/services khỏi Stateful
                        <br />
                        Tách biệt các services trong cụm Stateless mới của Prod
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        0% downtime trong quá trình nâng cấp
                        <br />
                        Đảm bảo hoạt động 99.99%
                        <br />
                        Đảm bảo cụm clusters hoạt động 99.99%
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-left align-top">
                        PLAT-323
                        <br />
                        PLAT-359
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top">
                        HIGH
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top">
                        <span className="inline-block bg-rose-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          HIGH
                        </span>
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Triển khai thành công cụm Stateless trên Prod, hệ thống
                        ổn định, các stateless deploy trên multi clusters
                      </td>
                    </tr>

                    {/* Upgrade K8s */}
                    <tr className="bg-purple-200 ">
                      <td
                        className="border border-gray-400 px-3 py-2"
                        colSpan={8}
                      >
                        Upgrade K8s
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Upgrade K8s 1.29
                        <br />
                        Upgrade toàn bộ các cluster-env của TDP & SRE (Prod +
                        Non-Prod)
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Nâng cấp K8s từ phiên bản 1.28 lên 1.29 cho các env
                        <br />
                        Upgrade các phiên bản K8s 1.29 cho các cluster-env của
                        TDP và SRE (Prod + Non-Prod)
                        <br />
                        TDP (Compute, Service, Storage)
                        <br />
                        Chuẩn hóa quy trình Internal Tools và nâng cấp K8s lên
                        1.29
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        100% các clusters được nâng cấp lên 1.29
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-left align-top">
                        PLAT-360
                        <br />
                        PLAT-339
                        <br />
                        PLAT-347
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top">
                        HIGH
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top">
                        <span className="inline-block bg-rose-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          HIGH
                        </span>
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top">
                        Mỗi quý nâng cấp K8s lên 1 version cho các môi trường
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Mỗi quý sẽ có action nâng cấp K8s lên 1 version cho các
                        môi trường • Upgrade toàn bộ các cụm lên 1.29 • SRE-Prod
                        • SRE-Internal-Tools
                      </td>
                    </tr>

                    {/* KR2: Make sure the Observ stream operates stably */}
                    <tr className="bg-yellow-200 font-semibold">
                      <td
                        className="border border-gray-400 px-3 py-2"
                        colSpan={8}
                      >
                        KR2: Make sure the Observ stream operates stably
                      </td>
                    </tr>

                    {/* Row 5 */}
                    <tr>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Đảm bảo không mất logs/metrics
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Đảm bảo tính ổn định observability hoạt động đạt hiệu
                        <br />
                        Hạn chế việc loại bỏ log/metrics
                        <br />
                        Có view theo dõi của việc hệ thống observability
                        <br />
                        Đánh giá hiệu quả của việc backup schema lại
                        <br />
                        Chuẩn hóa Dashboard/monitoring cho các component
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 text-left align-top">
                        PLAT-367
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Đảm bảo tăng observ để thúc hiện các yêu cầu đạo có thể
                        hỗ trợ luận lý SRE-Roadmap 2024's Note
                      </td>
                    </tr>

                    {/* KR3: Reduce risks related to Stateful */}
                    <tr className="bg-yellow-200 font-semibold">
                      <td
                        className="border border-gray-400 px-3 py-2"
                        colSpan={8}
                      >
                        KR3: Reduce risks related to Stateful
                      </td>
                    </tr>

                    {/* Database & Storage */}
                    <tr className="bg-purple-200">
                      <td
                        className="border border-gray-400 px-3 py-2"
                        colSpan={8}
                      >
                        Database & Storage
                      </td>
                    </tr>

                    {/* Row 6 */}
                    <tr>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Apply standard backup flow for Stateful components
                        (MongoDB, Redis, SRE)
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Đưng một tool/pattern backup chung cho toàn bộ hệ
                        thống/migrated vào backup DB hiện tại sẽ sẵn pattern
                        chung; Visualizable được các action backup chung; Check
                        được trạng thái các job; Apply backup strategy dùng 3rd
                        party được; Verify được tính chính của việc restore;
                        Apply recovery cho các thành phần Stateful MongoDB,
                        Redis
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Visualizable được các action backup chung, check được
                        trạng thái các job; Apply thành công backup cho Stateful
                        component; Verify được data có chính có được viết thành
                        công hay khi backup
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-left align-top">
                        PLAT-372
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top">
                        HIGH
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Đây là vấn đề ưu tiên flow backup chung; Apply thành
                        công tool; Thành công khi restore cho tất cả backup cho
                        các thành phần Stateful MongoDB, Redis Apply lại thành
                        công dao to visualizable các thành phần
                      </td>
                    </tr>

                    {/* Row 7 */}
                    <tr>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Upgrade PostgreSQL from 13 → 15
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 text-left align-top">
                        PLAT-368
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top">
                        MEDIUM
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 align-top"></td>
                    </tr>

                    {/* Ceph Storage */}
                    <tr className="bg-purple-200">
                      <td
                        className="border border-gray-400 px-3 py-2"
                        colSpan={8}
                      >
                        Ceph Storage
                      </td>
                    </tr>

                    {/* Row 8 */}
                    <tr>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Giảm thiểu các rủi ro liên quan tới Cụm TDP's Ceph
                        <br />
                        Re-design lại các pool của ceph üz
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Review lại toàn bộ các vấn đề liên quan tới Ceph
                        <br />
                        Re-design lại các pool của ceph üz
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 text-left align-top">
                        PLAT-361
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top">
                        MEDIUM
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Review, giúp cải thiện performance của Ceph
                      </td>
                    </tr>

                    {/* Deployment & CI/CD */}
                    <tr className="bg-purple-200">
                      <td
                        className="border border-gray-400 px-3 py-2"
                        colSpan={8}
                      >
                        Deployment & CI/CD
                      </td>
                    </tr>

                    {/* Row 9 */}
                    <tr>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Xây dựng DR cho hệ thống Registry
                        <br />
                        Build Harbor backup system in Serving cluster
                        <br />
                        Remove stale (OCP) to save money
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 text-left align-top">
                        PLAT-315
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 align-top"></td>
                    </tr>

                    {/* KR4: Reduce risks related to Physical */}
                    <tr className="bg-yellow-200 font-semibold">
                      <td
                        className="border border-gray-400 px-3 py-2"
                        colSpan={8}
                      >
                        KR4: Reduce risks related to Physical
                      </td>
                    </tr>

                    {/* Row 10 */}
                    <tr>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Quy hoạch lại resources của hạ tầng TK & Giảm thiểu rủi
                        ro liên quan đến phần cứng
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Đánh giá lại nguyên hiện có; Phân tích toàn diện cấu
                        hình thiết bị; Đối với các thiết bị cũ có thể có tác
                        hại; Hỗ trợ sử dụng tài nguyên theo hiệu quả; và nâng
                        cao khả năng
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Đánh giá: 100% các cluster hiện tại không gây ra tình
                        trạng thiếu kha thiếu resources
                        <br />
                        Đảm bảo sử dụng hiệu 80% resources có sẵn
                        <br />
                        Đảm bảo sử dụng tài nguyên hiệu quả 90% resources có sử
                        của toàn hệ thống
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-left align-top">
                        PLAT-343
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 align-top"></td>
                    </tr>

                    {/* Row 11 */}
                    <tr>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Đảm bảo không có ảnh hưởng khi onboard 1 khách hàng mới
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Đảm bảo hệ thống đơn giản, tăng sự tin cậy của khách
                        hàng
                        <br />
                        Tối ưu hiệu suất hệ thống
                        <br />
                        Tiết kiệm chi phí vận hành
                      </td>
                      <td className="border border-gray-400 px-3 py-2 align-top">
                        Không tăng số lượng incident
                        <br />
                        Thời gian phản hồi và xử lý &lt; 5 phút
                        <br />
                        Tối ưu các vòng deploy/rollback
                        <br />
                        Mức sử dụng tài nguyên khi onboard khách hàng &lt; 50%
                      </td>
                      <td className="border border-gray-400 px-3 py-2 text-left align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 text-center align-top"></td>
                      <td className="border border-gray-400 px-3 py-2 align-top"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Bảng: OKR cấp cá nhân */}
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-black">
              Bảng 2: OKR cấp cá nhân
            </h2>
          </div>

          <div className="bg-white rounded-lg">
            <div className="overflow-x-auto xl:overflow-visible">
              <table className="w-full border-collapse border border-gray-400 min-w-[1200px] xl:min-w-0">
                <thead>
                  <tr className="bg-blue-900">
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
                      1.5
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
                      1.5
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
                      PLAT-343
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Cam kết ▼
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0.5
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
                      PLAT-325
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Cam kết ▼
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0.7
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
                      SRE-6683
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Mở rộng ▼
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0.3
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
                      Stability & Reliability
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      8.5
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
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      3.0
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
                      Multi clusters for K8s - Separate Stateful, stateless
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      PLAT-359
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Mở rộng ▼
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0.5
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
                      PLAT-323
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Cam kết ▼
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0.5
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      50%
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
                      PLAT-360
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Cam kết ▼
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      1.0
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
                      PLAT-339
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Cam kết ▼
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0.7
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      50%
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
                      Chuẩn hóa cum Internal Tools & Upgrade K8s to 1.28
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      PLAT-347
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Cam kết ▼
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0.3
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
                      1.0
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
                      PLAT-347
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Cam kết ▼
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      1.0
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
                      1.5
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
                      PLAT-372
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Cam kết ▼
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0.7
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
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      A2
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Upgrade PostgreSQL from 13 → 15
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      PLAT-368
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Mở rộng ▼
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0.4
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

                  {/* A3 - Giảm thiểu sử dụng */}
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      A3
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Giảm thiểu các rủi ro liên quan tới Cụm TDP's Ceph
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      PLAT-361
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Mở rộng ▼
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0.2
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      70%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                  </tr>

                  {/* A4 - Key toàn OR cho hệ thống Registry */}
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      A4
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Xây dựng DR cho hệ thống Registry
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      PLAT-315
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Cam kết ▼
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0.2
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      50%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      100%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                  </tr>

                  {/* KR5 */}
                  <tr className="bg-yellow-100">
                    <td className="border border-gray-400 px-3 py-2 text-center font-semibold">
                      KR5
                    </td>
                    <td className="border border-gray-400 px-3 py-2 font-medium">
                      Incident
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0.2
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
                      Reduce incident trong quý/năm
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Cam kết ▼
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0.2
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

                  {/* O3 */}
                  <tr className="bg-blue-200">
                    <td className="border border-gray-400 px-3 py-2 text-center font-bold">
                      O3
                    </td>
                    <td className="border border-gray-400 px-3 py-2 font-semibold">
                      Simplicity
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      1.0
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      A1
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Chuẩn hóa/Quy hoạch lại các repo phía TDP/SRE
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Mở rộng ▼
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      1.0
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      25%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      100%
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                  </tr>

                  {/* O4 */}
                  <tr className="bg-blue-200">
                    <td className="border border-gray-400 px-3 py-2 text-center font-bold">
                      O4
                    </td>
                    <td className="border border-gray-400 px-3 py-2 font-semibold">
                      Extend phala
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      1.5
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      A1
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Nghiên cứu, lên phương án dựng/upgrade cụm Kafka hiện tại
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Mở rộng ▼
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0.5
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
                      Nghiên cứu và lên phương án phân bổ tài nguyên/chi phí hạ
                      tầng theo tenant
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Mở rộng ▼
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0.5
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
                      Tiếp quản lại hạ tầng Blockchain
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Mở rộng ▼
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      0.5
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
                </tbody>
              </table>
            </div>
          </div>

          {/* Ví dụ về một PLAT trên Jira */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4 text-center text-black">
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
