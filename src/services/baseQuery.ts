import type { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import type { AxiosRequestConfig, AxiosError } from "axios";
import isAuthenticated from "../common/isAuthenticated";
import { AUTH_TOKEN } from "../constants";

const axiosBaseQuery =
    (
        { baseUrl }: { baseUrl?: string } = {
            // TODO: PUT BASE URL OVER HERE
            // baseUrl: "http://192.168.29.148:8000/api" || "",
            // baseUrl: "http://43.204.110.168/api"
            baseUrl: "https://luxterior2023.ddns.net/api"
            // baseUrl: "http://localhost:8000/api" || "",
            // baseUrl: "https://luxterior2023.ddns.net/api"
        }
    ): BaseQueryFn<
        {
            url: string;
            method: AxiosRequestConfig["method"];
            data?: AxiosRequestConfig["data"];
            params?: AxiosRequestConfig["params"];
        },
        unknown,
        unknown
    > =>
        async ({ url, method, data, params }) => {
            try {
                if (isAuthenticated())
                    axios.defaults.headers.common["authorization"] = isAuthenticated()!;
                else delete axios.defaults.headers.common["authorization"];
                const result = await axios({ url: baseUrl + url, method, data, params });
                return { data: result.data };
            } catch (axiosError) {
                let err = axiosError as AxiosError;
                if (err.response?.status === 401) {
                    localStorage.setItem(AUTH_TOKEN, "");
                    window.location.href = "/";
                }
                return {
                    error: {
                        status: err.response?.status,
                        data: err.response?.data || err.message,
                    },
                };
            }
        };

export default axiosBaseQuery;
