// We'll use the crypto module from the backend
// This file contains utility functions and type definitions for the frontend

export type HashAlgorithm = 'SHA-256' | 'SHA-512';

export interface HashRequest {
  message: string;
  algorithm: HashAlgorithm;
}

export interface HashResponse {
  hash: string;
  algorithm: HashAlgorithm;
}

// SHA-256 constants for visualization
export const SHA256_INITIAL_HASH = [
  '6a09e667', 'bb67ae85', '3c6ef372', 'a54ff53a',
  '510e527f', '9b05688c', '1f83d9ab', '5be0cd19'
];

// SHA-512 constants for visualization
export const SHA512_INITIAL_HASH = [
  '6a09e667f3bcc908', 'bb67ae8584caa73b', '3c6ef372fe94f82b', 'a54ff53a5f1d36f1',
  '510e527fade682d1', '9b05688c2b3e6c1f', '1f83d9abfb41bd6b', '5be0cd19137e2179'
];

// First few SHA-256 round constants for display
export const SHA256_ROUND_CONSTANTS = [
  '428a2f98', '71374491', 'b5c0fbcf', 'e9b5dba5',
  '3956c25b', '59f111f1', '923f82a4', 'ab1c5ed5'
];

// Helper functions to describe bit operations visually
export function rotrDescription(x: number, bits: number): string {
  return `Rotate right: move each bit ${bits} positions to the right, wrapping around`;
}

export function shrDescription(x: number, bits: number): string {
  return `Shift right: move each bit ${bits} positions to the right, filling with 0s`;
}

export function xorDescription(a: string, b: string): string {
  return `XOR: compare each bit, return 1 if bits are different, 0 if same`;
}

export function andDescription(a: string, b: string): string {
  return `AND: compare each bit, return 1 only if both bits are 1`;
}

export function notDescription(a: string): string {
  return `NOT: invert each bit, 0 becomes 1 and 1 becomes 0`;
}
