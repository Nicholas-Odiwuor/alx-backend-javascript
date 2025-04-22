export default function createInt8TypedArray(length, position, value) {
  // Validate arguments
  if (typeof length !== 'number' || typeof position !== 'number' || typeof value !== 'number') {
    throw new Error('Invalid argument type');
  }
  // Create buffer and DataView
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  // Check position boundaries
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  // Set the Int8 value
  view.setInt8(position, value);
  return view;
}

