import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import agent from "../../app/api/agent";
import { Product } from "../../app/models/product";
import { RootState } from "../../app/store/ConfigureStore";

const productsAdapter = createEntityAdapter<Product>();

export const fetchProductsAsync = createAsyncThunk<Product[]>(
    'catalog/fetchProductsAsync',
    async (_, thunkAPI) => {
        try {
            return await agent.Catalog.list();
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data })
        }
    }
)

export const fetchProductAsync = createAsyncThunk<Product, number>(
    'catalog/fetchProductAsync',
    async (productId, thunkAPI) => {
        try {
            return await agent.Catalog.details(productId);
        } catch (error: any) {
            return thunkAPI.rejectWithValue({ error: error.data });
        }
    }
)

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState: productsAdapter.getInitialState({
        productsLoadedState: false,
        status: 'idle'
    }),
    reducers: {},
    extraReducers: (builder => {
        builder.addCase(fetchProductsAsync.pending, (state) => {
            state.status = 'pendingFetchProductsAsync';
        });
        builder.addCase(fetchProductsAsync.fulfilled, (state, action) => {
            productsAdapter.setAll(state, action.payload);
            state.status = 'idle';
            state.productsLoadedState = true;
        });
        builder.addCase(fetchProductsAsync.rejected, (state, action) => {
            state.status = 'idle';
            console.log(action.payload);
        });


        builder.addCase(fetchProductAsync.pending, (state) => {
            state.status = 'pendingFetchProductAsync';
        });
        builder.addCase(fetchProductAsync.fulfilled, (state, action) => {
            productsAdapter.upsertOne(state, action.payload);
            state.status = 'idle';
        });
        builder.addCase(fetchProductAsync.rejected, (state, action) => {
            state.status = 'idle';
            console.log(action);
        })


    })
})

export const productSelectors = productsAdapter.getSelectors((state: RootState) => state.catalog);