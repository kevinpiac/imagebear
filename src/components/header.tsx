import { UserInfo } from "@/components/user-info";

export const Header = () => {
  return (
    <div className={"h-14 shadow shrink-0 flex justify-end items-center px-10"}>
      <UserInfo></UserInfo>
    </div>
  );
};
