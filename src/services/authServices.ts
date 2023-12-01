import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";
import { compose } from "@reduxjs/toolkit";
import { result } from "lodash";

export const authApi = createApi({
	reducerPath: "auth",
	baseQuery: baseQuery(),
	endpoints: (builder) => ({
		registerUser: builder.mutation<any, any>({
			query: (data: any) => ({
				url: `/auth/register`,
				method: "POST",
				data,
			}),
		}),

		loginUser: builder.mutation<any, { email: string; password: string }>({
			query: (data: any) => ({
				url: `/auth/login`,
				method: "POST",
				data,
			}),
		}),
		getRegisterUser: builder.query<any, void>({
			query: (data: void) => ({
				url: `/auth/get-user-profile`,
				method: "GET",

			}),
			transformResponse: (result: any) => {
				console.log(result, "check result")
				const user = {
					firstName: result.data.firstName,
					lastname: result.data.lastName,
					email: result.data.email,

					//   contactNo: result.contact,

					region: result.data.region,
					address: result.data.address,
				}
				return user

			}
		}),

		editRegisterUser: builder.mutation<any, any>({
			query: (data: any) => ({
				url: `/auth/edit-profile`,
				method: "POST",
				data,
			}),
		}),

	}),
});

export const {
	useRegisterUserMutation,
	useLoginUserMutation,
	useGetRegisterUserQuery,
	useEditRegisterUserMutation,
} = authApi;
