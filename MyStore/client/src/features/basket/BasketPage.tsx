import { Add, Delete, Remove } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Button, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import agent from "../../app/api/agent";
import { useStoreContext } from "../../app/context/StoreContext";
import BasketSummary from "./BasketSummary";

export default function BasketPage() {

    const { basket, setBasket, removeItem } = useStoreContext();
    const [status, setStatus] = useState({
        loading: false,
        name: ''
    });

    function handleAddItem(productId: number, name: string) {
        setStatus({ loading: true, name }); // when names of properties are equal doesn't need to explicit "name: name"

        agent.Basket.addItem(productId, 1)
            .then(basket => setBasket(basket))
            .catch(error => console.log(error))
            .finally(() => setStatus({ loading: false, name: '' }))
    }

    function handleRemoveItem(productId: number, name: string, quantity = 1) {
        setStatus({ loading: true, name }); // when names of properties are equal doesn't need to explicit "name: name"

        agent.Basket.removeItem(productId, quantity)
            .then(() => removeItem(productId, quantity))
            .catch(error => console.log(error))
            .finally(() => setStatus({ loading: false, name: '' }))
    }

    if (!basket) return <Typography variant="h3">Your basket is empty!</Typography>

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="right">Subtotal</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {basket.items.map(basketItem => (
                            <TableRow
                                key={basketItem.productId}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Box display='flex' alignItems={'center'}>
                                        <img src={basketItem.pictureUrl} alt={basketItem.name} style={{ height: 50, marginRight: 20 }} />
                                        <span>{basketItem.name}</span>
                                    </Box>
                                </TableCell>
                                <TableCell align="right">${(basketItem.price / 100).toFixed(2)}</TableCell>
                                <TableCell align="center">
                                    <LoadingButton
                                        loading={status.loading && status.name === 'remove' + basketItem.productId}
                                        onClick={() => handleRemoveItem(basketItem.productId, 'remove' + basketItem.productId)} color="error">
                                        <Remove />
                                    </LoadingButton>
                                    {basketItem.quantity}
                                    <LoadingButton
                                        loading={status.loading && status.name === 'add' + basketItem.productId}
                                        onClick={() => handleAddItem(basketItem.productId, 'add' + basketItem.productId)} color="secondary">
                                        <Add />
                                    </LoadingButton>

                                </TableCell>
                                <TableCell align="right">${((basketItem.price / 100) * basketItem.quantity).toFixed(2)}</TableCell>
                                <TableCell align="right">
                                    <LoadingButton
                                        loading={status.loading && status.name === 'delete' + basketItem.productId}
                                        onClick={() => handleRemoveItem(basketItem.productId, 'delete' + basketItem.productId, basketItem.quantity)} color="error">
                                        <Delete />
                                    </LoadingButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container>
                <Grid item xs={6} />
                <Grid item xs={6}>
                    <BasketSummary />
                    <Button component={Link} to="/checkout" variant="contained" size="large" fullWidth>Checkout</Button>
                </Grid>
            </Grid>
        </>

    )
}