"use client";
import Image from "next/image";
import { Mail, Phone, MapPin, Facebook, Twitter } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../../config/emailjs';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus('');

    try {
      // Gửi email qua EmailJS
      const result = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          title: `Liên hệ từ ${formData.name}`,
          time: new Date().toLocaleString('vi-VN', {
            timeZone: 'Asia/Ho_Chi_Minh',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
          }),
          to_email: 'kimnguyen.525102250764@st.ueh.edu.vn', // Email nhận
        },
        emailjsConfig.publicKey
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fixed banner image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/images/lien_he.jpg"
            alt="Ảnh liên hệ"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay chỉ phủ lên ảnh */}
          <div className="absolute inset-0 bg-primary/70 pointer-events-none" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 sm:w-16 h-1 bg-secondary mb-3 sm:mb-4 rounded" />
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                Liên hệ
              </h1>
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-0 leading-relaxed max-w-2xl">
                Bạn có câu hỏi hoặc muốn liên hệ?
                <br className="hidden sm:block" />
                Hãy điền vào biểu mẫu bên dưới hoặc liên hệ qua thông tin được cung cấp.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-[#f7fafd] py-8 sm:py-10 md:py-14 flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-primary mb-2 mt-2 sm:mt-4 px-4">
          Liên hệ
        </h1>
        <p className="text-gray-500 text-center mb-6 sm:mb-8 text-sm sm:text-base px-4">
          Có câu hỏi hay góp ý? Hãy để lại tin nhắn cho chúng tôi!
        </p>

        {/* Mobile Layout */}
        <div className="w-full max-w-4xl mx-auto md:hidden px-4">
          {/* Contact Form Mobile */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mb-6">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 text-sm">
                  Tin nhắn đã được gửi thành công! Chúng tôi sẽ liên hệ lại với bạn sớm.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm">
                  Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.
                </div>
              )}
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm">
                  Họ và tên<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Nguyễn Văn A"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="vidu@gmail.com"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1 text-sm">
                  Nội dung
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Nhập nội dung tin nhắn"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>
              <div className="flex items-center justify-center mt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`${
                    isLoading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-secondary hover:bg-orange-600'
                  } text-white font-semibold px-6 py-2 rounded transition text-sm w-full sm:w-auto`}
                >
                  {isLoading ? 'Đang gửi...' : 'Gửi liên hệ'}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Mobile */}
          <div
            className="relative rounded-2xl overflow-hidden min-h-[300px] flex flex-col justify-between text-white p-4 sm:p-6"
            style={{
              background: "url(/images/bg_contact_form.png) center/cover",
            }}
          >
            <div>
              <h2 className="text-lg sm:text-xl font-semibold mb-2">
                Thông tin liên hệ
              </h2>
              <p className="mb-6 text-white/80 text-sm">
                Hãy nhắn điều gì đó để bắt đầu cuộc trò chuyện!
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-white/20 rounded-full flex-shrink-0 mt-0.5">
                    <Mail className="text-white" size={16} />
                  </span>
                  <span className="text-sm break-all">kimnguyen.525102250764@st.ueh.edu.vn</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-white/20 rounded-full flex-shrink-0 mt-0.5">
                    <MapPin className="text-white" size={16} />
                  </span>
                  <span className="text-sm">
                    54 Nguyễn Văn Thủ, Phường Sài Gòn, TP. Hồ Chí Minh
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/40 transition"
              >
                <Facebook className="text-white" size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/40 transition"
              >
                <Twitter className="text-white" size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="w-full max-w-4xl mx-auto hidden md:grid grid-cols-2 gap-8 bg-white rounded-2xl shadow-lg p-4">
          {/* Contact Info Card Desktop */}
          <div
            className="relative rounded-2xl overflow-hidden min-h-[600px] flex flex-col justify-between text-white p-4"
            style={{
              background: "url(/images/bg_contact_form.png) center/cover",
            }}
          >
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Thông tin liên hệ
              </h2>
              <p className="mb-8 text-white/80">
                Hãy nhắn điều gì đó để bắt đầu cuộc trò chuyện!
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-white/20 rounded-full">
                    <Mail className="text-white" size={20} />
                  </span>
                  <span>kimnguyen.525102250764@st.ueh.edu.vn</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-white/20 rounded-full">
                    <MapPin className="text-white" size={20} />
                  </span>
                  <span>
                    54 Nguyễn Văn Thủ, Phường Sài Gòn, TP. Hồ Chí Minh
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/40 transition"
              >
                <Facebook className="text-white" size={18} />
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full hover:bg-white/40 transition"
              >
                <Twitter className="text-white" size={18} />
              </a>
            </div>
          </div>

          {/* Contact Form Desktop */}
          <form className="flex flex-col gap-4 justify-center" onSubmit={handleSubmit}>
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                Tin nhắn đã được gửi thành công! Chúng tôi sẽ liên hệ lại với bạn sớm.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.
              </div>
            )}
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Họ và tên<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Nguyễn Văn A"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="vidu@gmail.com"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Nội dung
              </label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Nhập nội dung tin nhắn"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="flex items-center justify-end mt-2">
              <button
                type="submit"
                disabled={isLoading}
                className={`${
                  isLoading 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-secondary hover:bg-orange-600'
                } text-white font-semibold px-6 py-2 rounded transition`}
              >
                {isLoading ? 'Đang gửi...' : 'Gửi liên hệ'}
              </button>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/letter_send.png"
                alt="máy bay giấy"
                width={180}
                height={180}
                className="opacity-80 mt-2"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
