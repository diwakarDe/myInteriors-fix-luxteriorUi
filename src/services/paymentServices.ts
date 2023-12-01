import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";

export const paymentsApi = createApi({
    reducerPath: "payments",
    baseQuery: baseQuery(),
    tagTypes: ['GetTickets','TransactionLogs'],
    endpoints: (builder) => ({
        getPlans: builder.query<any, any>({
            query: (data: any) => ({
                url: `/plans/get-plan`,
                method: "GET",
                data,
            }),
        }),
        checkout: builder.mutation<any, any>({
            query: (data: any) => ({
                url: `/payment/checkout`,
                method: "POST",
                data,
            }),
        }),
        getSecretKey: builder.query<any, any>({
            query: (data: any) => ({
                url: `/payment/get-key`,
                method: 'GET',
                data
            }),
            providesTags: ['GetTickets'],
        }),
        getRemainingSubs: builder.query<any,any>({
            query: (data:any) =>({
                url:'/subs/remaining-generations',
                method: 'GET',
                data
            })
        }),
        getTransactionLogs: builder.query<any,void>({
            query: (args:void) =>({
                url:'/payment/get-payment',
                method: 'GET',
            })
        })
        
    }),
});

export const {
useGetTransactionLogsQuery,
    useGetPlansQuery,
    useCheckoutMutation,
    useGetSecretKeyQuery,
    useGetRemainingSubsQuery,

} = paymentsApi;
