// app/api/test-db/route.js
import { NextResponse } from 'next/server';
import connection from '../../../lib/db';

export async function GET() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT 1 + 1 AS solution', (err, results) => {
      if (err) {
        reject(new Error('Database query error'));
      } else {
        resolve(NextResponse.json({ solution: results[0].solution }));
      }
    });
  });
}
