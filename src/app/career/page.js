"use client";
import Image from "next/image";
import { useState } from "react";

export default function Career() {
	return (
		<>
			{/* Banner */}
			<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
				<div className="absolute inset-0 w-full h-full z-0">
					<Image
						src="/images/career.jpg"
						alt="Career Banner"
						fill
						className="object-cover"
						priority
					/>
					<div className="absolute inset-0 bg-primary/70 pointer-events-none" />
				</div>
				
			</section>

			{/* Organizational Chart Section */}
			<section className="py-12 sm:py-16 md:py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-0">
					<div className="relative max-w-6xl mx-auto">
						{/* BOD Header */}
						<div className="flex justify-center items-center mb-4 md:mb-6 xl:mb-0">
							<div className="inline-block bg-blue-600 text-white px-14 py-5 rounded-lg font-extrabold text-2xl shadow">
								BOD
							</div>
						</div>

						{/* Connectors (responsive, precisely aligned) */}
						<div className="relative h-12 md:h-16 xl:h-20 pointer-events-none" aria-hidden="true">
							{/* Center drop from BOD to main line */}
							<div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-6 md:h-8 xl:h-10 bg-blue-600"></div>

							{/* xl: main horizontal (trimmed ends) + drops */}
							<div className="hidden xl:block">
								<div className="absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-blue-600"></div>
								<div style={{ left: "12.5%" }} className="absolute top-10 bottom-0 w-0.5 bg-blue-600"></div>
								<div style={{ left: "37.5%" }} className="absolute top-10 bottom-0 w-0.5 bg-blue-600"></div>
								<div style={{ left: "62.5%" }} className="absolute top-10 bottom-0 w-0.5 bg-blue-600"></div>
								<div style={{ left: "87.5%" }} className="absolute top-10 bottom-0 w-0.5 bg-blue-600"></div>
							</div>

							{/* md–lg: main horizontal (trimmed ends) + drops */}
							<div className="hidden md:block xl:hidden">
								<div className="absolute top-8 left-[25%] right-[25%] h-0.5 bg-blue-600"></div>
								<div style={{ left: "25%" }} className="absolute top-8 bottom-0 w-0.5 bg-blue-600"></div>
								<div style={{ left: "75%" }} className="absolute top-8 bottom-0 w-0.5 bg-blue-600"></div>
							</div>
						</div>

						{/* Organization Chart */}
						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-0">
							{/* Khối phát triển sản phẩm */}
							<div className="bg-white rounded-lg border-2 border-gray-300 p-6 shadow-lg">
								<h3 className="font-bold text-center mb-6 text-gray-800 border-b-2 pb-3 text-lg">
									Khối phát triển sản phẩm
								</h3>
								<div className="space-y-4">
									<div className="bg-blue-200 p-4 rounded-lg text-center text-sm border border-blue-400">
										Bộ phận Quản trị Dự án
									</div>
									<div className="bg-blue-200 p-4 rounded-lg text-center text-sm border border-blue-400">
										Bộ phận Quản lý chất lượng
									</div>
									<div className="bg-blue-200 p-4 rounded-lg text-center text-sm border border-blue-400">
										Bộ phận Kinh doanh
									</div>
								</div>
							</div>

							{/* Khối Công nghệ */}
							<div className="bg-white rounded-lg border-2 border-gray-300 p-6 shadow-lg">
								<h3 className="font-bold text-center mb-6 text-gray-800 border-b-2 pb-3 text-lg">
									Khối Công nghệ
								</h3>
								<div className="space-y-4">
									<div className="bg-blue-200 p-4 rounded-lg text-center text-sm border border-blue-400">
										Bộ phận Lập trình dự án
									</div>
									<div className="bg-blue-200 p-4 rounded-lg text-center text-sm border border-blue-400">
										Bộ phận Hạ tầng - CSDL
									</div>
									<div className="bg-blue-200 p-4 rounded-lg text-center text-sm border border-blue-400">
										Bộ phận AI & Machine Learning
									</div>
								</div>
							</div>

							{/* Khối Quản trị Nhân sự */}
							<div className="bg-white rounded-lg border-2 border-gray-300 p-6 shadow-lg">
								<h3 className="font-bold text-center mb-6 text-gray-800 border-b-2 pb-3 text-lg">
									Khối Quản trị Nhân sự
								</h3>
								<div className="space-y-4">
									<div className="bg-blue-200 p-4 rounded-lg text-center text-sm border border-blue-400">
										Bộ phận Tuyển dụng
									</div>
									<div className="bg-blue-200 p-4 rounded-lg text-center text-sm border border-blue-400">
										Bộ phận Đào tạo & Phát triển
									</div>
									<div className="bg-blue-200 p-4 rounded-lg text-center text-sm border border-blue-400">
										Bộ phận Lương & Phúc lợi
									</div>
									<div className="bg-blue-200 p-4 rounded-lg text-center text-sm border border-blue-400">
										Bộ phận Hành chính
									</div>
								</div>
							</div>

							{/* Khối Tài chính */}
							<div className="bg-white rounded-lg border-2 border-gray-300 p-6 shadow-lg">
								<h3 className="font-bold text-center mb-6 text-gray-800 border-b-2 pb-3 text-lg">
									Khối Tài chính
								</h3>
								<div className="space-y-4">
									<div className="bg-blue-200 p-4 rounded-lg text-center text-sm border border-blue-400">
										Bộ phận Kế toán
									</div>
									<div className="bg-blue-200 p-4 rounded-lg text-center text-sm border border-blue-400">
										Bộ phận Đầu tư
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* end shared container */}
				</div>
			</section>
		</>
	);
}
