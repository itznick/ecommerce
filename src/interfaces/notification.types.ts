export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "added" | "removed";
}

export interface NotificationState {
  notifications: Notification[];
}
