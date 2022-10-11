import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { red } from '@mui/material/colors'; 

function Cart() {
    return(
        <div className='me-2'>
        <ShoppingCartIcon sx={{ color: red[500] }} fontSize="large"/>
        </div>
    )
}

export default Cart;