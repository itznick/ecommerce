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
          <Bell className="hover:text-orange-500 cursor-pointer w-6 h-6" />
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

        <div className="flex flex-col items-center justify-center gap-4 h-full py-8">
          <img
            src={noNotification}
            alt="No notifications available"
            className="h-48 w-48 object-contain"
          />
          <span className="text-lg text-gray-700">No notifications</span>
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button className="bg-neutral-800 text-white hover:bg-neutral-700 cursor-pointer">
              Close
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Notification;
