// app/api/products/route.js
import connectToDatabase from '../../../lib/mongodb';
import Product from '../../../models/Product';

export async function GET() {
  try {
    await connectToDatabase();
    const products = await Product.find({});
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    return new Response('Error fetching products', { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { name, price } = await request.json();
    await connectToDatabase();
    const newProduct = new Product({ name, price });
    await newProduct.save();
    return new Response(JSON.stringify(newProduct), { status: 201 });
  } catch (error) {
    return new Response('Error saving product', { status: 500 });
  }
}
