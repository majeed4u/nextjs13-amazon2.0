import { NextResponse, NextRequest } from 'next/server';
import Stripe from 'stripe';

const key = process.env.STRIPE_SECRET_KEY || '';

const stripe = new Stripe(key, {
  apiVersion: '2022-11-15',
});
const domain = 'http://localhost:3000';
export const POST = async (request) => {
  const { items, email } = await request.json();
  try {
    console.log(items, email);
    //   console.log(items, email);
    const transformItems = items.map((item) => ({
      quantity: 1,
      price_data: {
        currency: 'usd',
        unit_amount: item.price * 100,
        product_data: {
          name: item.title,
          description: item.description,
          images: [item.image],
        },
      },
    }));

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      submit_type: 'pay',
      payment_method_types: ['card'],
      mode: 'payment',

      shipping_address_collection: {
        allowed_countries: ['US', 'CA', 'SA'],
      },
      shipping_options: [{ shipping_rate: 'shr_1NNcQ1K4KxVfq0hauHU7PzsH' }],
      line_items: transformItems,
      success_url: `${domain}/success`,
      cancel_url: `${domain}/checkout`,
      metadata: {
        email,
        images: JSON.stringify(items.map((item) => item.image)),
      },
    });

    return NextResponse.json({ id: session.id }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(err.message);
  }
};
