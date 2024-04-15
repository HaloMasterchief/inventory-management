import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';


const CardView = (props) => {
    const { totalProducts, totalStoreValue, outOfStockCount, uniqueCategories } = { ...props }

    const cardStyleObj = { backgroundColor: '#21421e', color: 'white', width: '285px', alignItems: 'center', borderRadius: '8px' }
    const TypographyStyleObj = { marginLeft: '34px' }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', color: '#648c11' }}>
            <Card style={cardStyleObj}>

                <CardContent>
                    <Typography variant="h5" component="h2">
                        <ShoppingCartIcon style={{ marginRight: '8px' }} />
                        Total Products
                    </Typography>
                    <Typography variant="h4" style={TypographyStyleObj} alignItems={"center"}>
                        {totalProducts}
                    </Typography>
                </CardContent>
            </Card>
            <Card style={cardStyleObj}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        <CurrencyExchangeIcon style={{ marginRight: '8px' }} />
                        Total Store Value
                    </Typography>
                    <Typography variant="h4" style={TypographyStyleObj}>
                        ${totalStoreValue.toFixed(2)}
                    </Typography>
                </CardContent>
            </Card>
            <Card style={cardStyleObj}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        <RemoveShoppingCartIcon style={{ marginRight: '8px' }} />
                        Out of Stocks
                    </Typography>
                    <Typography variant="h4" style={TypographyStyleObj}>
                        {outOfStockCount}
                    </Typography>
                </CardContent>
            </Card>
            <Card style={cardStyleObj}>
                <CardContent>
                    <Typography variant="h5" component="h2">
                        <CategoryIcon style={{ marginRight: '8px' }} />
                        No of Category
                    </Typography>
                    <Typography variant="h4" style={TypographyStyleObj}>
                        {uniqueCategories}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default CardView;
