import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";

export const roomsApi = createApi({
    reducerPath: "room",
    baseQuery: baseQuery(),
    tagTypes: ['GetRooms'],
    endpoints: (builder) => ({
        addRoom: builder.mutation<any, any>({
            query: (data: any) => ({
                url: `/room/add-room`,
                method: "POST",
                data,
            }),
            invalidatesTags: ['GetRooms']
        }),
        deleteRoom: builder.mutation<any, any>({
            query: (data: any) => ({
                url: `/room/delete-room`,
                method: "POST",
                data,
            }),
            invalidatesTags: ['GetRooms']
        }),
        updateRoomName: builder.mutation<any, any>({
            query: (data: any) => ({
                url: `/room/rename-room`,
                method: "POST",
                data,
            }),
            invalidatesTags: ['GetRooms']
        }),
        restoreRoom: builder.mutation<any, any>({
            query: (data: any) => ({
                url: `/room/restore-trash-item`,
                method: "POST",
                data,
            }),
            invalidatesTags: ['GetRooms']
        }),
        addToFavRoom: builder.mutation<any, any>({
            query: (data: any) => ({
                url: `/room/fav-room`,
                method: "POST",
                data,
            }),
            invalidatesTags: ['GetRooms']
        }),
        getRoomTypes: builder.query<any, any>({
            query: (data: any) => ({
                url: `/room/theme-data`,
                method: "GET",
                data,
            })
        }),
        getRoomThemes: builder.query<any, any>({
            query: (data: any) => ({
                url: `/room/theme-data`,
                method: "GET",
                data,
            })
        }),
        getRooms: builder.query<any, any>({
            query: (data: any) => ({
                url: `/room/get-all-room-of-a-user?pageSize=10`,
                method: "GET",
                data,
            }),
            providesTags: ['GetRooms']
        }),
        getDeletedRooms: builder.query<any, any>({
            query: (data: any) => ({
                url: `/room/get-trash`,
                method: "GET",
                data,
            }),
            providesTags: ['GetRooms']
        }),
        getFavRooms: builder.query<any, any>({
            query: (data: any) => ({
                url: `/room/get-fav-room`,
                method: "GET",
                data,
            }),
            providesTags: ['GetRooms']
        }),
    }),
});

export const {
    useAddRoomMutation,
    useGetRoomsQuery,
    useDeleteRoomMutation,
    useGetRoomThemesQuery,
    useGetRoomTypesQuery,
    useGetDeletedRoomsQuery,
    useRestoreRoomMutation,
    useAddToFavRoomMutation,
    useGetFavRoomsQuery,
    useUpdateRoomNameMutation
} = roomsApi;
