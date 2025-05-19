import crypto from "crypto";

/**
 * Generates a SHA-256 hash for the given message
 * @param message The message to hash
 * @returns SHA-256 hash as a hexadecimal string
 */
export function generateSha256Hash(message: string): string {
  return crypto.createHash("sha256").update(message).digest("hex");
}

/**
 * Generates a SHA-512 hash for the given message
 * @param message The message to hash
 * @returns SHA-512 hash as a hexadecimal string
 */
export function generateSha512Hash(message: string): string {
  return crypto.createHash("sha512").update(message).digest("hex");
}

/**
 * Calculates all intermediate steps of SHA-256 for visualization
 * Note: This is a simplified version for educational purposes
 * @param message The message to hash
 * @returns Object containing intermediate values
 */
export function visualizeSha256(message: string) {
  // This function would normally calculate all the steps for visualization
  // But for performance and complexity reasons, we'll just return the final hash
  // In a full implementation, we'd calculate each step and return intermediate values
  
  const hash = generateSha256Hash(message);
  
  return {
    message,
    paddedMessage: "Padded message representation would go here",
    blocks: ["Block representation would go here"],
    initialHash: [
      "6a09e667", "bb67ae85", "3c6ef372", "a54ff53a",
      "510e527f", "9b05688c", "1f83d9ab", "5be0cd19"
    ],
    roundConstants: ["428a2f98", "71374491", "b5c0fbcf", "e9b5dba5", /* ... */],
    compressionSteps: ["Compression function steps would go here"],
    finalHash: hash
  };
}

/**
 * Calculates all intermediate steps of SHA-512 for visualization
 * Note: This is a simplified version for educational purposes
 * @param message The message to hash
 * @returns Object containing intermediate values
 */
export function visualizeSha512(message: string) {
  // Similarly simplified for educational purposes
  
  const hash = generateSha512Hash(message);
  
  return {
    message,
    paddedMessage: "Padded message representation would go here",
    blocks: ["Block representation would go here"],
    initialHash: [
      "6a09e667f3bcc908", "bb67ae8584caa73b", "3c6ef372fe94f82b", "a54ff53a5f1d36f1",
      "510e527fade682d1", "9b05688c2b3e6c1f", "1f83d9abfb41bd6b", "5be0cd19137e2179"
    ],
    roundConstants: ["428a2f9843a53f85", "d807aa98a3030242", /* ... */],
    compressionSteps: ["Compression function steps would go here"],
    finalHash: hash
  };
}
