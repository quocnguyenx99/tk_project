import Image from "next/image";

export default function About() {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fixed banner image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/about-img.webp"
            alt="Vietnam Silicon Team"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay chỉ phủ lên ảnh */}
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        </div>

        {/* Team Members on top of banner */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-16">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center mb-6 sm:mb-8 md:mb-12">
            Thành viên
          </h2>
          <div className="flex justify-center gap-6 lg:gap-8 flex-wrap">
            {/* Team Member Card 1 */}
            <div
              className="shine-effect bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-lg shadow-lg transition-transform hover:-translate-y-2 group flex-1 max-w-[250px]"
              style={{ height: "450px" }}
            >
              <div
                className="relative overflow-hidden p-4"
                style={{ height: "350px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[2500ms] animate-shine-diagonal"></div>
                <div className="relative h-full w-full rounded-lg overflow-hidden border-4 border-white/20 shadow-inner">
                  <Image
                    src="/images/thuy.jpg"
                    alt="Trần Diệu Thuỳ"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-white">
                  Trần Diệu Thuỳ
                </h3>
              </div>
            </div>

            {/* Team Member Card 2 */}
            <div
              className="shine-effect bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-lg shadow-lg transition-transform hover:-translate-y-2 group flex-1 max-w-[250px]"
              style={{ height: "450px" }}
            >
              <div
                className="relative overflow-hidden p-4"
                style={{ height: "350px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[2500ms] animate-shine-diagonal"></div>
                <div className="relative h-full w-full rounded-lg overflow-hidden border-4 border-white/20 shadow-inner">
                  <Image
                    src="/images/kim.jpg"
                    alt="Nguyễn Quế Kim"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-white">
                  Nguyễn Quế Kim
                </h3>
              </div>
            </div>

            {/* Team Member Card 3 */}
            <div
              className="shine-effect bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-lg shadow-lg transition-transform hover:-translate-y-2 group flex-1 max-w-[250px]"
              style={{ height: "450px" }}
            >
              <div
                className="relative overflow-hidden p-4"
                style={{ height: "350px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[2500ms] animate-shine-diagonal"></div>
                <div className="relative h-full w-full rounded-lg overflow-hidden border-4 border-white/20 shadow-inner">
                  <Image
                    src="/images/han.jpg"
                    alt="Nguyễn Bảo Hân"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-white">
                  Nguyễn Bảo Hân
                </h3>
              </div>
            </div>

            {/* Team Member Card 4 */}
            <div
              className="shine-effect bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-lg shadow-lg transition-transform hover:-translate-y-2 group flex-1 max-w-[250px]"
              style={{ height: "450px" }}
            >
              <div
                className="relative overflow-hidden p-4"
                style={{ height: "350px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[2500ms] animate-shine-diagonal"></div>
                <div className="relative h-full w-full rounded-lg overflow-hidden border-4 border-white/20 shadow-inner">
                  <Image
                    src="/images/anh.jpg"
                    alt="Phan Ngọc Ánh"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-white">
                  Phan Ngọc Ánh
                </h3>
              </div>
            </div>

            {/* Team Member Card 5 */}
            <div
              className="shine-effect bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-lg shadow-lg transition-transform hover:-translate-y-2 group flex-1 max-w-[250px]"
              style={{ height: "450px" }}
            >
              <div
                className="relative overflow-hidden p-4"
                style={{ height: "350px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[2500ms] animate-shine-diagonal"></div>
                <div className="relative h-full w-full rounded-lg overflow-hidden border-4 border-white/20 shadow-inner">
                  <Image
                    src="/images/phung.jpg"
                    alt="Võ Thị Kim Phụng"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-white">
                  Võ Thị Kim Phụng
                </h3>
              </div>
            </div>

            {/* Team Member Card 6 */}
            <div
              className="shine-effect bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 rounded-lg shadow-lg transition-transform hover:-translate-y-2 group flex-1 max-w-[250px]"
              style={{ height: "450px" }}
            >
              <div
                className="relative overflow-hidden p-4"
                style={{ height: "350px" }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[2500ms] animate-shine-diagonal"></div>
                <div className="relative h-full w-full rounded-lg overflow-hidden border-4 border-white/20 shadow-inner">
                  <Image
                    src="/images/vy.jpg"
                    alt="Trương Thị Khánh Vy"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-white">
                  Trương Thị Khánh Vy
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
