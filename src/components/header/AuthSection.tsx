import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

export const AuthSection = ({ isSignedIn }: { isSignedIn: boolean }) =>
  isSignedIn ? (
    <div className="max-sm:hidden sm:hidden md:flex">
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  ) : (
    <div className="w-20 py-2 text-base text-center text-white bg-orange-500 rounded-md max-sm:hidden sm:hidden md:block line-clamp-1">
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </div>
  );
