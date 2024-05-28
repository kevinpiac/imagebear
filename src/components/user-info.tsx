import {
  useAuth,
  useAccessControl,
  LogoutButton,
  SignedIn,
} from "@kobbleio/next/client";
import { FC } from "react";

export const UserInfo: FC = () => {
  const { quotas } = useAccessControl();
  const { user } = useAuth();

  console.log("Quotas", quotas);
  console.log("User", user);

  const quota = quotas?.find((quota) => quota.name === "image-generated");

  return (
    <div className={"text-white space-x-3 text-sm"}>
      <span>{user?.email}</span>
      <span
        className={
          "p-2 rounded-full border border-teal-800 bg-teal-500/40 text-teal-100"
        }
      >
        AI Credit: {quota?.usage ?? 0} / {quota?.limit ?? 0}
      </span>
      <SignedIn>
        <LogoutButton>Logout</LogoutButton>
      </SignedIn>
    </div>
  );
};
