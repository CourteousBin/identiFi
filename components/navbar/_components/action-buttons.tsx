"use client";

import React, { useState, useEffect } from "react";

import { usePrivy, useWallets } from "@privy-io/react-auth";
import { Button } from "@/components/ui/button";
import { X, AlignJustify, User } from "lucide-react";
import Link from "next/link";
import DropdownMenu from "./drop-down-menu";
import { useRouter } from 'next/navigation'

import { getUserByAddress } from "@/utils/queries";

const ActionButtons = () => {
  const { ready, authenticated, login, logout } = usePrivy();
  const disableLogin = !ready || (ready && authenticated);
  const { wallets } = useWallets();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [UserInfo, setUserInfo] = useState("");
  const router = useRouter(); // 获取 Next.js 的 router 对象

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const handleLogout = async () => {
    try {
      await logout(); // 等待 logout 完成
      // console.log("用户已成功注销");

      // 重定向到根路径
      router.push("/"); // 使用 Next.js 的 router 进行重定向
    } catch (error) {
      console.error("注销时出错:", error);
    }
  };

  useEffect(() => {
    const getUserInfo = async () => {
      /**
       * 当你从某个函数或 API 获取数据时，如果 TypeScript 无法推断出返回值的确切类型，你可能会使用 as any 来绕过类型检查。
       */

      console.log("aciton buttons clicked");

      let userInfo = (await getUserByAddress(
        ready ? wallets[0]?.address : "0x0"
      )) as any;
      setUserInfo(userInfo);
    };

    getUserInfo();
  }, [ready, authenticated]);

  return (
    <div className="pr-2">
      <div className="items-center justify-center flex ">
        {/* 
          这个前缀表示该样式只在屏幕宽度达到 
          xl（extra large，通常是 1280px 及以上）时生效。
          space-x-4: 这个类用于在一个 Flexbox 容器内的子元素之间添加水平间距。
          具体来说，space-x-4 表示在每个直接子元素之间添加一个固定的水平间距
         */}
        <div className="flex xl:space-x-4">
          {authenticated && UserInfo !== "User does not exist." ? (
            <>
              <Link href={"/dashboard"} className="lg:flex items-center hidden">
                <div className="">Dashboard</div>
                {/* 
                ml-4 == margin-left
                mr-0 == margin-right
                 */}
                <div className="font-thin lg:flex ml-4 mr-0 items-center hidden">
                  |
                </div>
              </Link>
            </>
          ) : authenticated && UserInfo == "User does not exist." ? (
            <>
              <Link href={"/onboard"} className="lg:flex items-center hidden">
                <div className="">Get DID</div>
                {/* 
                ml-4 == margin-left
                mr-0 == margin-right
                 */}
                <div className="font-thin lg:flex ml-4 mr-0 items-center hidden">
                  |
                </div>
              </Link>
            </>
          ) : (
            ""
          )}
        </div>

        {/* 
          pr: 代表 "padding-right
         */}
        <div className="flex lg:space-x-2 items-center pr-4">
          <Link href={"/free"}>
            <Button
              variant={"outline"}
              className="
              lg:flex
              items-center
              hidden
              border-none 
              text-md
              "
            ></Button>
          </Link>
          {authenticated ? (
            <Button className="hidden lg:block " onClick={handleLogout}>
              Disconnect
            </Button>
          ) : (
            <Button className="hidden lg:block" onClick={login}>
              Connect
            </Button>
          )}
        </div>
      </div>

      {isDropdownVisible && (
        <div
          onClick={toggleDropdown}
          className="
             rounded-full
             xl:hidden"
        >
          <X className="h-5 w-5  items-center justify-center rounded-full" />
        </div>
      )}
      {!isDropdownVisible && (
        <div onClick={toggleDropdown} className="flex lg:hidden">
          <AlignJustify className="h-6 w-6 items-center justify-center mr-2" />
        </div>
      )}

      {isDropdownVisible && <DropdownMenu onClose={closeDropdown} />}
    </div>
  );
};

export default ActionButtons;
