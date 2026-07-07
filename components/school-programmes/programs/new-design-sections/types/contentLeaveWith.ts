export interface LeaveWithItemType {
  icon: string;
  desc: string;
}

export interface LeaveWithContentType {
  badge: string;
  title: string;
  footnote: string;
  items: LeaveWithItemType[];
}

export interface LeaveWithPageContentType {
  leaveWith: LeaveWithContentType;
}
