interface generateLinkPost {
  bigLink: string;
  shortLink: string;
}

interface viewerLinkPost {
  viewerLink: string;
}

interface pagination {
  page: number;
  search: string;
}

interface contactUsPost {
  email: string;
  fullName: string;
  subject: string;
  text: string;
}

interface userPost {
  userName: string;
  password: string;
}

interface registerPost {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  rePassword: string;
}

interface notificationPost {
  title: string;
  text: string;
  id?: string;
}

interface changePassword {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

interface forgetPassword {
  email: string;
}

interface submitPassword {
  newPassword: string;
  confirmPassword: string;
}
