import { NextResponse } from 'next/server';
import connection from '../../../lib/db';

export async function GET() {
  try {
    const queryPromise = new Promise<any>((resolve, reject) => {
      connection.query('SELECT 1 + 1 AS solution', (err, results) => {
        if (err) {
          reject(new Error('Database query error'));
        } else {
          resolve(results);
        }
      });
    });

    const results = await queryPromise;
    const response = NextResponse.json({ solution: results[0].solution });

    // Agrega un log para ver la respuesta
    console.log('Response:', response);

    return response;
  } catch (error) {
    return NextResponse.error();
  }
}
