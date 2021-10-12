import {FaChalkboardTeacher, FaKey,FaQrcode,FaChartLine} from "react-icons/fa";

export const UserItems = [
    {
        to: "",
        fa:FaChalkboardTeacher,
        text:"داشبورد"
    },
    {
        to: "/linkState",
        fa: FaChartLine,
        text:"آمار لینک ها"
    },
    {
        to: "/qrCode",
        fa: FaQrcode,
        text:"کد qr"
    },
    {
        to: "/changePassword",
        fa: FaKey,
        text:"تغییر رمز"
    },
]