import crypto from 'crypto';

export async function POST(request) {
  const { order_id, payment_id, signature } = await request.json();

  const secret = process.env.RAZORPAY_API_SECRET;

  const generated_signature = crypto
    .createHmac('sha256', secret)
    .update(`${order_id}|${payment_id}`)
    .digest('hex');

  if (generated_signature === signature) {
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } else {
    return new Response(
      JSON.stringify({ success: false, message: 'Invalid signature' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
