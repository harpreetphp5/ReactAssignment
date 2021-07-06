import LoadProducts from '../category/LoadProducts';
import Product from '../product/Product';

it('renders without crashing', () => {

    expect(<Product />).toMatchSnapshot();
});

it('Loads Individual Product', () => {
    const match = { params: { id: 'Blue Stripe Stoneware Plate' } }
    expect(Product(match)).toMatchSnapshot();
});