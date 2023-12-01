import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";

export const ticketsApi = createApi({
    reducerPath: "tickets",
    baseQuery: baseQuery(),
    tagTypes: ['GetTickets'],
    endpoints: (builder) => ({
        addRequest: builder.mutation<any, any>({
            query: (data: any) => ({
                url: `/ticket/register`,
                method: "POST",
                data,
            }),
            invalidatesTags: ['GetTickets']
        }),
        getRequests: builder.query<any, any>({
            query: (data: any) => ({
                url: `/ticket/get-all-tickets`,
                method: "GET",
                data,
            }),
            providesTags: ['GetTickets'],
        }),
        getRequest: builder.query<any, any>({
            query: (data: any) => ({
                url: `/ticket/get-ticket?ticketId=${data.ticketId}`,
                method: 'GET',
                data
            }),
            providesTags: ['GetTickets'],
        }),
        addHelpMessage: builder.mutation<any, any>({
            query: (data: any) => ({
                url: '/support/contact-us',
                method: "POST",
                data
            })
        }),
        searchTickets: builder.mutation<any, any>({
            query: (data: any) => ({
                url: `/ticket/search-tickets?ticketStatus=${data}`,
                method: "GET",
                data
            }),

        }),
        searchRooms: builder.mutation<any, any>({
            query: (data: any) => ({
                url: `/room/search-room`,
                method: "POST",
                data
            }),

        })
    }),
});

export const {
    useAddRequestMutation,
    useGetRequestsQuery,
    useGetRequestQuery,
    useAddHelpMessageMutation,
    useSearchTicketsMutation,
    useSearchRoomsMutation
} = ticketsApi;
