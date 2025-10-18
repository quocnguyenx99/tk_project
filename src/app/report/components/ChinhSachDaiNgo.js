"use client";

export default function ChinhSachDaiNgo() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center text-primary">
            Biểu mẫu thiết lập OKR
          </h1>

          {/* Title for the table */}
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-black">
              Bảng 1: OKR cấp phòng ban
            </h2>
          </div>

          {/* OKR Table */}
          <div className="bg-white rounded-lg">
            <div className="overflow-x-auto xl:overflow-visible">
              <table className="w-full border-collapse border border-gray-400 min-w-[1100px] xl:min-w-0">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-black">
                      OKR
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-black">
                      Metrics
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-black">
                      Epic/Task
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-black">
                      Weight
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-black">
                      Current
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-black">
                      Target Q4
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-black">
                      Priority
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-black">
                      Type
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-black whitespace-nowrap">
                      T10/ W3 1/11
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-black">
                      Note
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* O1 */}
                  <tr className="bg-blue-50">
                    <td className="border border-gray-400 px-3 py-2 text-center font-semibold">
                      O1
                    </td>
                    <td
                      className="border border-gray-400 px-3 py-2 text-black italic"
                      colSpan={9}
                    >
                      Mục tiêu chính
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 align-top text-center">
                      <div className="font-semibold">KR1</div>
                      <div className="text-xs text-black">Kết quả then chốt</div>
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-black">
                      Chỉ số đo lường cụ thể
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-black">
                      Nhiệm vụ
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Trọng số
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Giá trị thực tế đạt được ở Q3
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Mục tiêu Q4
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Mức độ ưu tiên (High/Medium/Low)
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Cam kết/Mở rộng
                    </td>
                    <td className="border border-gray-400 px-3 py-2 text-center">
                      Theo dõi tiến độ
                    </td>
                    <td className="border border-gray-400 px-3 py-2">
                      Ghi chú chi tiết (tình trạng hiện tại, các vấn đề, cách tính toán
                      hoặc link tham chiếu)
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center font-semibold">
                      KR2
                    </td>
                    <td className="border border-gray-400 px-3 py-2" />
                    <td className="border border-gray-400 px-3 py-2" />
                    <td className="border border-gray-400 px-3 py-2" />
                    <td className="border border-gray-400 px-3 py-2" />
                    <td className="border border-gray-400 px-3 py-2" />
                    <td className="border border-gray-400 px-3 py-2" />
                    <td className="border border-gray-400 px-3 py-2" />
                    <td className="border border-gray-400 px-3 py-2" />
                    <td className="border border-gray-400 px-3 py-2" />
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center font-semibold">
                      KR3
                    </td>
                    <td className="border border-gray-400 px-3 py-2" />
                    <td className="border border-gray-400 px-3 py-2" />
                    <td className="border border-gray-400 px-3 py-2" />
                    <td className="border border-gray-400 px-3 py-2" />
                    <td className="border border-gray-400 px-3 py-2" />
                    <td className="border border-gray-400 px-3 py-2" />
                    <td className="border border-gray-400 px-3 py-2" />
                    <td className="border border-gray-400 px-3 py-2" />
                    <td className="border border-gray-400 px-3 py-2" />
                  </tr>

                  {/* O2 */}
                  <tr className="bg-blue-50">
                    <td className="border border-gray-400 px-3 py-2 text-center font-semibold">
                      O2
                    </td>
                    <td className="border border-gray-400 px-3 py-2" colSpan={9}></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center font-semibold">
                      KR1
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center font-semibold">
                      KR2
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                  </tr>

                  {/* O3 */}
                  <tr className="bg-blue-50">
                    <td className="border border-gray-400 px-3 py-2 text-center font-semibold">
                      O3
                    </td>
                    <td className="border border-gray-400 px-3 py-2" colSpan={9}></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center font-semibold">
                      KR1
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center font-semibold">
                      KR2
                    </td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                  </tr>

                  {/* ... */}
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center">...</td>
                    <td className="border border-gray-400 px-3 py-2" colSpan={9}></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Title for the personal OKR table */}
          <div className="text-center mt-8 sm:mt-10 mb-4 sm:mb-6">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold text-black">
              Bảng 2: OKR cấp cá nhân
            </h2>
          </div>

          {/* Personal OKR Table */}
          <div className="bg-white rounded-lg">
            <div className="overflow-x-auto xl:overflow-visible">
              <table className="w-full border-collapse border border-gray-400 min-w-[1100px] xl:min-w-0">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-black">
                      OKR
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-black">
                      Name
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-black">
                      EPIC
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-black">
                      Type
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-black">
                      Weight
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-black">
                      Initial
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-black">
                      Target
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-black">
                      Actual
                    </th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-semibold text-black">
                      Note
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* O1 */}
                  <tr className="bg-blue-200">
                    <td className="border border-gray-400 px-3 py-2 text-center font-semibold">
                      O1
                    </td>
                    <td className="border border-gray-400 px-3 py-2" colSpan={8}></td>
                  </tr>
                  <tr className="bg-yellow-100">
                    <td className="border border-gray-400 px-3 py-2 text-center font-semibold">
                      KR1
                    </td>
                    <td className="border border-gray-400 px-3 py-2" colSpan={8}></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center">A1</td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center">A2</td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                  </tr>

                  {/* O2 */}
                  <tr className="bg-blue-200">
                    <td className="border border-gray-400 px-3 py-2 text-center font-semibold">
                      O2
                    </td>
                    <td className="border border-gray-400 px-3 py-2" colSpan={8}></td>
                  </tr>
                  <tr className="bg-yellow-100">
                    <td className="border border-gray-400 px-3 py-2 text-center font-semibold">
                      KR1
                    </td>
                    <td className="border border-gray-400 px-3 py-2" colSpan={8}></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center">A1</td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                  </tr>
                  <tr className="bg-yellow-100">
                    <td className="border border-gray-400 px-3 py-2 text-center font-semibold">
                      KR2
                    </td>
                    <td className="border border-gray-400 px-3 py-2" colSpan={8}></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center">A1</td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                  </tr>

                  {/* O3 (optional sample) */}
                  <tr className="bg-blue-200">
                    <td className="border border-gray-400 px-3 py-2 text-center font-semibold">
                      O3
                    </td>
                    <td className="border border-gray-400 px-3 py-2" colSpan={8}></td>
                  </tr>
                  <tr className="bg-yellow-100">
                    <td className="border border-gray-400 px-3 py-2 text-center font-semibold">
                      KR1
                    </td>
                    <td className="border border-gray-400 px-3 py-2" colSpan={8}></td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center">A1</td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2 text-center"></td>
                    <td className="border border-gray-400 px-3 py-2"></td>
                  </tr>

                  {/* ... */}
                  <tr>
                    <td className="border border-gray-400 px-3 py-2 text-center">...</td>
                    <td className="border border-gray-400 px-3 py-2" colSpan={8}></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ...existing code... */}
        </div>
      </div>
    </div>
  );
}
