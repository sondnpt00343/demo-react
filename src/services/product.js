import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "./baseQuery";

// 1. Sử dụng RTK query với reducerPath là: profileApi
//    - Nhận hooks, cấu hình: reducerPath, reducer, middleware
//    - Cấu hình "refetchOnFocus" true và setupListeners

// 2. Sửa logic profile:
//    - Get: Sử dụng RTK query (build.query)
//    - Update: Sử dụng RTK query (build.mutation)

// Từ khóa:
// - "RTK query createAPI" (phục vụ việc cấu hình)

// API get profile: [GET] /users/username
// API update profile: [PUT] /users/me

// RTK query
export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery,
    endpoints: (build) => ({
        // build.query: GET method
        getAllProducts: build.query({
            query: () => `/products`,
        }),
        getOneProduct: build.query({
            query: (id) => `/products/${id}`,
        }),
        // build.mutation: POST, PUT, PATCH, DELETE
        updateProduct: build.mutation({
            query: ({ id, ...body }) => ({
                url: `/products/${id}`,
                method: "PUT",
                body,
            }),
        }),
    }),
    refetchOnFocus: true,
});

export const {
    useGetAllProductsQuery,
    useGetOneProductQuery,
    useUpdateProductMutation,
} = productApi; // hooks để gọi API, reducerPath, reducer, middleware
