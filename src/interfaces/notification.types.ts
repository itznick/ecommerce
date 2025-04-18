export interface Notification {
  id: number;
  title: string;
  message: string;
  type: "added" | "removed";
}

export interface NotificationState {
  notifications: Notification[];
}
