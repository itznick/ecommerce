import { Bell, CheckCircle, Inbox, X } from "lucide-react";
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
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { Separator } from "../ui/separator";
import { Card, CardContent } from "../ui/card";
import { removeNotification } from "../../redux/slices/notificationSlice";
import { Badge } from "../ui/badge";

const Notification = () => {
  const notification = useSelector((state: RootState) => state.notification);
  const dispatch = useDispatch<AppDispatch>();
  const totalCount = notification.notifications.length;

  return (
    <Sheet>
      <SheetTrigger asChild className="relative mt-2">
        <div>
          {totalCount > 0 && (
            <Badge className="absolute flex items-center justify-center w-5 px-1 text-xs text-white bg-red-500 rounded-full pointer-events-none -top-2 -right-2">
              {totalCount}
            </Badge>
          )}
          <button aria-label="Open notifications">
            <Bell className="w-6 h-6 cursor-pointer hover:text-orange-500 sm:w-7 sm:h-7" />
          </button>
        </div>
      </SheetTrigger>
      <SheetContent className="">
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
          <Separator className="mt-4" />
        </SheetHeader>

        {notification.notifications.length > 0 ? (
          notification.notifications.map((notification) => (
            <>
              <Card
                className="mx-2 shadow-none outline-0"
                key={notification.id}
              >
                <CardContent className="flex">
                  <div className="flex items-start w-full gap-4">
                    <CheckCircle className="w-5 h-5 mt-1 text-orange-500" />
                    <div className="flex flex-col w-full">
                      <p className="w-full text-sm font-medium text-gray-800 line-clamp-3">
                        {notification.title}
                      </p>
                      {notification.type === "added" ? (
                        <span className="text-xs text-green-600">
                          {notification.message}
                        </span>
                      ) : (
                        <span className="text-xs text-red-600">
                          {notification.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      dispatch(removeNotification({ id: notification.id }));
                    }}
                  >
                    <X className="w-4 h-4 text-gray-600 hover:text-gray-900" />
                  </Button>
                </CardContent>
              </Card>
            </>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center h-full gap-4 py-8">
            <img
              src={noNotification}
              alt="No notifications available"
              className="object-contain w-48 h-48"
            />
            <span className="text-lg text-gray-700">No notifications</span>
          </div>
        )}

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
