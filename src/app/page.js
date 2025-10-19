"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Heart,
  Square,
  Lightbulb,
  ThumbsUp,
  Users,
  Clock,
  HandHeart,
  RefreshCw,
  ShoppingCart,
  UserRoundPen,
  GlobeLock,
  Map,
  BadgeDollarSign,
  PanelsTopLeft,
  CalendarSync,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Swiper background images */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            loop
            autoplay={{ delay: 4000 }}
            navigation
            pagination={{ clickable: true }}
            className="w-full h-full"
          >
            <SwiperSlide>
              <div className="relative w-full h-full">
                <Image
                  src="/images/banner_2.webp"
                  alt="Banner 1"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay phủ lên ảnh */}
                <div className="absolute inset-0 bg-black/70 pointer-events-none" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="relative w-full h-full">
                <Image
                  src="/images/banner_1.jpeg"
                  alt="Banner 2"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay phủ lên ảnh */}
                <div className="absolute inset-0 bg-black/50 pointer-events-none" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
          <div className="w-12 sm:w-16 h-1 bg-secondary mb-4 rounded" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 leading-tight">
            Giới thiệu công ty
          </h1>
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mb-6 lg:mb-8 leading-relaxed">
            Công ty Cổ phần Công nghệ TK Việt Nam được thành lập ngày
            13/01/2017, hoạt động theo mô hình Software as a Service (SaaS) với
            định hướng cung cấp nền tảng công nghệ thúc đẩy chuyển đổi số cho
            doanh nghiệp, khởi đầu từ lĩnh vực thương mại điện tử.
          </p>
          <button className="bg-secondary hover:bg-orange-600 cursor-pointer text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 min-w-[180px] sm:min-w-[220px] w-full max-w-xs text-sm sm:text-base transform hover:scale-105 active:scale-95">
            Tham gia ngay
          </button>
        </div>
      </section>

      {/* Section 2: Desktop layout with image + content, Mobile layout with cards */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-white">
        {/* Desktop & Tablet Layout (md and up) */}
        <div className="hidden md:flex max-w-6xl mx-auto flex-col lg:flex-row items-start justify-center gap-8 px-4">
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/images/home_content_img.png"
              alt="Digital Transformation"
              className="max-w-[450px] w-full"
            />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-16 lg:mt-24">
            {/* Items */}
            <div className="flex flex-col gap-8 lg:gap-16">
              {/* Item 1 */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <div className="flex items-center min-w-[140px]">
                    <div
                      className="h-1 w-full"
                      style={{
                        background:
                          "linear-gradient(to right, transparent, #FF6B00)",
                      }}
                    />
                    <div className="w-4 h-4 rounded-full bg-secondary -ml-2" />
                  </div>
                  {/* Title */}
                  <h3 className="text-primary font-bold text-xl mb-0">
                    Tầm nhìn
                  </h3>
                </div>
                <p className="text-black text-base mt-2 md:ml-[160px]">
                  Trở thành một tập đoàn công nghệ hàng đầu, tập trung vào việc
                  phát triển đội ngũ nhân sự chất lượng cao, xây dựng các sản
                  phẩm công nghệ mới và "Go Global" (mở rộng ra thị trường quốc
                  tế).
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <div className="flex items-center min-w-[140px]">
                    <div
                      className="h-1 w-full"
                      style={{
                        background:
                          "linear-gradient(to right, transparent, #FF6B00)",
                      }}
                    />
                    <div className="w-4 h-4 rounded-full bg-secondary -ml-2" />
                  </div>
                  <h3 className="text-primary font-bold text-xl mb-0">
                    Sứ mệnh
                  </h3>
                </div>
                <p className="text-black text-base mt-2 md:ml-[160px]">
                  Thay đổi cuộc sống con người bằng cách cung cấp những trải
                  nghiệm tuyệt vời trên nền tảng internet.
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                  <div className="flex items-center min-w-[140px]">
                    <div
                      className="h-1 w-full"
                      style={{
                        background:
                          "linear-gradient(to right, transparent, #FF6B00)",
                      }}
                    />
                    <div className="w-4 h-4 rounded-full bg-secondary -ml-2" />
                  </div>
                  <h3 className="text-primary font-bold text-xl mb-0">
                    Giá trị cốt lõi
                  </h3>
                </div>
                <div className="text-black text-base mt-2 md:ml-[160px] space-y-1">
                  <p>• Lấy khách hàng làm trung tâm (Customer-driven)</p>
                  <p>• Hướng tới mục tiêu (Goal-driven)</p>
                  <p>• Lấy con người làm trọng tâm (People-driven)</p>
                  <p>• Chính trực (Integrity)</p>
                  <p>• Thích ứng (Adaptive)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout (sm and below) - Cards */}
        <div className="md:hidden max-w-7xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-8">
            <div className="w-12 h-1 bg-secondary mx-auto mb-4 rounded" />
            <h2 className="text-xl font-bold text-primary mb-3">Về THACO</h2>
            <p className="text-sm text-black max-w-2xl mx-auto">
              Tập đoàn Trường Hải với tầm nhìn, sứ mạng và chiến lược phát triển
              bền vững
            </p>
          </div>

          {/* Cards Grid */}
          <div className="space-y-4">
            {/* Tầm nhìn Card */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="p-5">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-primary mb-3">
                  Tầm nhìn
                </h3>

                {/* Content */}
                <p className="text-sm text-black leading-relaxed">
                  Tập đoàn công nghiệp đa ngành hàng đầu khu vực ASEAN, phát
                  triển bền vững trong bối cảnh hội nhập khu vực và thế giới.
                </p>
              </div>
              <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            </div>

            {/* Sứ mạng Card */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="p-5">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-primary mb-3">Sứ mạng</h3>

                {/* Content */}
                <p className="text-sm text-black leading-relaxed">
                  Mang lại giá trị cho khách hàng, đối tác, xã hội và phát triển
                  kinh tế đất nước với tinh thần "Tận tâm phục vụ".
                </p>
              </div>
              <div className="h-1 bg-gradient-to-r from-secondary to-orange-600"></div>
            </div>

            {/* Chiến lược Card */}
            <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
              <div className="p-5">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-primary mb-3">
                  Chiến lược
                </h3>

                {/* Content */}
                <p className="text-sm text-black leading-relaxed">
                  THACO là Tập đoàn công nghiệp đa ngành có các Tập đoàn thành
                  viên hoạt động trong các lĩnh vực: Ô tô, Nông nghiệp, Cơ khí &
                  Công nghiệp hỗ trợ, Đầu tư & Xây dựng, Thương mại & Dịch vụ và
                  Logistics, có tính bổ trợ và tích hợp cao, tham gia chuỗi giá
                  trị toàn cầu và chuyển đổi số.
                </p>
              </div>
              <div className="h-1 bg-gradient-to-r from-green-500 to-green-600"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Giá trị cốt lối section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <div className="w-12 sm:w-16 h-1 bg-secondary mx-auto mb-4 rounded" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
              Sản phẩm
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            {/* Tận tâm */}
            <div className="group flex flex-col items-center text-center p-3 sm:p-4 md:p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative mb-3 md:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-600 mb-2">
                Thương mại điện tử
              </h3>
            </div>

            {/* Trung thực */}
            <div className="group flex flex-col items-center text-center p-3 sm:p-4 md:p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative mb-3 md:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <UserRoundPen className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-600 mb-2">
                Bán lẻ đa kênh (Omni-Channel Platform)
              </h3>
            </div>

            {/* Trí tuệ */}
            <div className="group flex flex-col items-center text-center p-3 sm:p-4 md:p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative mb-3 md:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <GlobeLock className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-600 mb-2">
                Hệ thống quản trị hồ sơ khách hàng (Customer Profile Management)
              </h3>
            </div>

            {/* Tự tin */}
            <div className="group flex flex-col items-center text-center p-3 sm:p-4 md:p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative mb-3 md:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <CalendarSync className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-600 mb-2">
                Giải pháp tự động hóa marketing (Tempi.vn)
              </h3>
            </div>

            {/* Tôn trọng */}
            <div className="group flex flex-col items-center text-center p-3 sm:p-4 md:p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative mb-3 md:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <PanelsTopLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-600 mb-2">
                Nền tảng xây dựng website/landing page
              </h3>
            </div>

            {/* Trung tín */}
            <div className="group flex flex-col items-center text-center p-3 sm:p-4 md:p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative mb-3 md:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <BadgeDollarSign className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-600 mb-2">
                Blockchain
              </h3>
            </div>

            {/* Tận tình */}
            <div className="group flex flex-col items-center text-center p-3 sm:p-4 md:p-6 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 cursor-pointer">
              <div className="relative mb-3 md:mb-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Map className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 group-hover:scale-125 transition-all duration-500"></div>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-blue-600 mb-2">
                KarbonMap
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Đối tác section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <div className="w-12 sm:w-16 h-1 bg-secondary mx-auto mb-4 rounded" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
              Đối tác
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
            {/* Partner 1 */}
            <div className="flex items-center justify-center">
              <Image
                src="/images/logo_pv.png"
                alt="Partner 1"
                width={480}
                height={210}
                className="object-contain w-auto h-24 sm:h-32 md:h-40 lg:h-48"
                priority
              />
            </div>
            {/* Partner 2 */}
            <div className="flex items-center justify-center">
              <Image
                src="/images/logo_takashimaya.jpg"
                alt="Partner 2"
                width={480}
                height={210}
                className="object-contain w-auto h-24 sm:h-32 md:h-40 lg:h-48"
              />
            </div>
            {/* Partner 3 */}
            <div className="flex items-center justify-center">
              <Image
                src="/images/logo_coopmart.png"
                alt="Partner 3"
                width={480}
                height={210}
                className="object-contain w-auto h-24 sm:h-32 md:h-40 lg:h-48"
              />
            </div>
            {/* Partner 4 */}
            <div className="flex items-center justify-center">
              <Image
                src="/images/logo_wild_asis.png"
                alt="Partner 4"
                width={480}
                height={210}
                className="object-contain w-auto h-24 sm:h-32 md:h-40 lg:h-48"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
