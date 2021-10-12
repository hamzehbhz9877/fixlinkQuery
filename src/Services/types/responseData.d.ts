interface Api<T> {
  data: T;
  isSuccess?: boolean;
  IsSuccess?: boolean;
  message?: string;
  statusCode: number;
  Message?: string;
}

interface statistics {
  countPermanentLink: string;
  countTemporaryLink: string;
  countUsers: string;
}

interface generatorLink {
  qr: string;
  shortLink: string;
  statusLink: number;
}

interface getLinkVisit {
  countVisit: number;
  visitToday: number;
  createAt: string;
  lastDateVisit: string;
  statusLinkVisit: number;
  visitThisMonth: number;
  visitThisWeek: number;
}

interface notifications {
  notifications: {
    createAtPersian: string;
    id: string;
    text: string;
    title: string;
  }[];
  pages: number;
}

interface login {
  expires_in: number;
  jwt: string;
  role: string;
  token_type: string;
  userName: string;
}

interface adminDashboard extends statistics {
  countBotLinkWeeklies: { day: string; value: number }[];
  countLinkWeeklies: { day: string; value: number }[];
}

interface user {
  countLink: number;
  createAtPersian: string;
  email: string;
  fullName: string;
  id: string;
  isActive: boolean;
  userName: string;
}

interface users {
  pages: number;
  userResponseDto: user[];
}

interface adminUser extends user {}

interface contactUs {
  contactUs: {
    createAtPersian: string;
    email: string;
    fullName: string;
    id: string;
    subject: string;
    text: string;
    userName: string;
  }[];
  pages: 1;
}

interface notifications {
  notifications: {
    createAtPersian: string;
    id: string;
    text: string;
    title: string;
  }[];
  pages: number;
}

//user panel
interface links {
  links: {
    bigLink: string;
    createAt: string;
    id: string;
    isActive: boolean;
    referenceCount: number;
    shortLink: string;
  }[];
  pages: number;
}

type dailyData = {
  hour: string;
  value: number;
}[];
type weeklyData = {
  day: string;
  date: string;
  value: number;
}[];
type monthlyData = {
  date: string;
  value: number;
}[];
type yearlyData = {
  month: string;
  date: string;
  value: number;
}[];

interface qrCode {
  links: {
    bigLink: string;
    qr: string;
    shortLink: string;
  }[];
  pages: number;
}
interface userLinks {
  linkForUserDto: {
    bigLink: string;
    createAt: string;
    id: string;
    refrenceCount: number;
    shortLink: string;
  }[];
  pages: number;
}
