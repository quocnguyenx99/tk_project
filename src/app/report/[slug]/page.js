import { notFound } from "next/navigation";
import TuyenDung from "../components/TuyenDung";
import TongQuanCoCauLaoDongThaco from "../components/TongQuanCoCauLaoDongThaco";
import DaoTaoVaPhatTrien from "../components/DaoTaoVaPhatTrien";
import ChinhSachDaiNgo from "../components/ChinhSachDaiNgo";
// import Cybersecurity from "../components/Cybersecurity";

export const dynamicParams = true;

export default function ReportDetailPage({ params }) {
  const { slug } = params;

  const renderContent = () => {
    switch (slug) {
      case "tong-quan-co-cau-lao-dong-tai-tk":
        return <TongQuanCoCauLaoDongThaco />;
      case "bieu-mau-thiet-lap-okr":
        return <ChinhSachDaiNgo />;
      case "thuc-hanh-thiet-lap-okr-cho-vi-tri-sre":
        return <DaoTaoVaPhatTrien />;
      case "hieu-qua-ap-dung-okr":
        return <TuyenDung />;
      default:
        notFound();
    }
  };

  return <main className="min-h-screen bg-gray-50">{renderContent()}</main>;
}
