'use client'
import React from "react";
import userApi, { useGetUserListQuery } from "@/lib/api/UserApi";
import { useSelector } from "@/lib/redux/index";
import Link from 'next/link';
import { useDispatch } from "@/lib/redux/index";
import { selectUserList } from '@/lib/redux/slices/UserSlice';
import { map } from "lodash";

export default function userList() {

  const userList = useSelector(selectUserList)
  console.log(userList)
  // 不論是否使用 hook 若在 extraReducer 有設定皆會運作
  useGetUserListQuery()
  
  return (
    <>
      <h1>user List</h1>
      {
        map(userList, (user) => <Link key={user.id} href={`/userDetail/${user.id}`}> { user.name }</Link>)
      }
    </>
  )
}
