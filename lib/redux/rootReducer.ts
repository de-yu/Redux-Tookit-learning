/* Instruments */
import { counterSlice } from './slices'
import userApi from '@/lib/api/UserApi'
import { userSlice } from './slices/UserSlice'

export const reducer = {
  counter: counterSlice.reducer,
  user: userSlice.reducer,
  [userApi.reducerPath]: userApi.reducer
}
