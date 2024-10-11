"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export function Menu() {
  return (
    <NavigationMenu className="hidden lg:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* 
          legacyBehavior 属性
          legacyBehavior 是 Next.js 11 及以前版本中的一个属性，用来启用旧版的行为。
          在 Next.js 12 及以后版本中，<Link> 组件的行为有所改变，特别是在与子元素的交互上。
          当 legacyBehavior 被设置为 true 时，<Link> 组件会按照旧的方式处理其子元素，允许直接在 <Link> 内部使用 <a> 标签。
          如果不使用此属性，则 <Link> 组件会自动渲染其子元素为链接。
          */}
          {/* 
          passHref 属性
          passHref 是一个属性，指示 <Link> 组件将 href 属性传递给其子元素（通常是 <a> 标签）。这在使用 legacyBehavior 时是必要的，
          因为如果你直接在 <Link> 内部使用 <a> 标签，而不传递 href，则该 <a> 标签不会获得链接的目标路径。 
          */}
          <Link href={"/"} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href={"/verify-identity"} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Verify Identity
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
