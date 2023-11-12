'use client'

import { useGetUserDetailQuery, useGetUserListQuery, useUpdateUserMutation, useDeleteUserMutation } from '@/lib/api/UserApi'
import { useParams  } from 'next/navigation'
import { selectUserDetail, selectUserList, selectUserDetailCopy } from '@/lib/redux/slices/UserSlice'
import { useSelector } from '@/lib/redux';
import Link from 'next/link';
import { map } from 'lodash';
import { useEffect } from 'react';

export default function userDetail() {

  const searchParams = useParams();
  const userDetail = useSelector(state => selectUserDetail(state, searchParams.id as string));
  const userDetailCopy = useSelector(state => selectUserDetailCopy(state, searchParams.id as string));
  const userList = useSelector(selectUserList)

  console.log(userDetailCopy)
  useGetUserListQuery()
  useGetUserDetailQuery({
    id: searchParams.id as string
  })

  const [ updateUser, updateResult] = useUpdateUserMutation()
  const [ deleteUser, deleteResult] = useDeleteUserMutation()

  useEffect(() => {
    console.log(updateResult)
  }, [updateResult])
  return (
    <>
      <h1>userDetail</h1>
      <p>
      {
        map(userList, (user) => <Link key={user.id} href={`/userDetail/${user.id}`}> { user.name }</Link>)
      }
      </p>
      <div className="" onClick={() => updateUser({id: userDetail.id})}>
        update
      </div>
      <div className="" onClick={() => deleteUser({id: userDetail.id})}>
        delete
      </div>
      <p>
      { userDetail.id }<br />
      { userDetail.name }<br />
      { userDetail.message }<br />
      </p>
    </>
  )
}
