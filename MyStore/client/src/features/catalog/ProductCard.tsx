import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    return (
        <Card>
            <CardHeader avatar={
                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    {product.name.charAt(0).toUpperCase()}
                </Avatar>
            }
                title={product.name}
                titleTypographyProps={{ sx: { fontWeight: 'bold', color: 'primary.main' } }}
            />
            <CardMedia
                component="img"
                height="140"
                sx={{ backgroundSize: 'contained', bgColor: 'primary.light' }}
                image={product.pictureUrl}
                title={product.name}
            />
            <CardContent>
                <Typography gutterBottom color='secondary' variant="h5">
                    ${(product.price / 100).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">ADD TO CART</Button>
                <Button size="small" component={Link} to={`/catalog/${product.id}`}>VIEW</Button>
            </CardActions>
        </Card>
    )
}