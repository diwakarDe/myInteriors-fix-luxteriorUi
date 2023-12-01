import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";

export const expertsApi = createApi({
    reducerPath: "experts",
    baseQuery: baseQuery(),
    endpoints: (builder) => ({
        getDesigners: builder.query<any, any>({
            query: (data: any) => ({
                url: `/expert/experts-list?pageSize=${data.pageSize}`,
                method: "GET",
                data,
            }),
        })
    }),
});

export const {
    useGetDesignersQuery,
} = expertsApi;
