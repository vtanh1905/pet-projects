import { Readable } from 'stream';
import csv from 'csv-parser';

export function convertBufferToStream(buffer: Buffer) {
  const stream = new Readable();

  stream.push(buffer);
  stream.push(null); // end of stream

  return stream;
}

export async function readCSVFile<T>(file: Express.Multer.File): Promise<T[]> {
  const results: T[] = [];
  const stream = convertBufferToStream(file.buffer);

  return new Promise((resolve, reject) => {
    stream
      .pipe(csv())
      .on('data', (row: T) => {
        results.push(row);
      })
      .on('end', () => {
        resolve(results);
      })
      .on('error', (err) => {
        reject(err); // reject on parser error
      });

    // also catch errors on the source stream
    stream.on('error', (err) => {
      reject(err);
    });
  });
}
