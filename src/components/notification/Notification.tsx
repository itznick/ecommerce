import { Bell, Inbox } from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import noNotification from "../../assets/no-notification.png";

const Notification = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button aria-label="Open notifications">
          <Bell className="w-8 h-8 cursor-pointer hover:text-orange-500" />
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <div className="flex items-center gap-2">
            <Inbox className="w-6 h-6 text-gray-600" />
            <SheetTitle className="text-xl font-semibold">
              Notifications
            </SheetTitle>
          </div>
          <SheetDescription className="text-sm text-gray-500">
            Stay updated with your latest alerts and updates.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col items-center justify-center h-full gap-4 py-8">
          <img
            src={noNotification}
            alt="No notifications available"
            className="object-contain w-48 h-48"
          />
          <span className="text-lg text-gray-700">No notifications</span>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button className="text-white cursor-pointer bg-neutral-800 hover:bg-neutral-700">
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Notification;
