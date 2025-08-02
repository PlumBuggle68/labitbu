/* tslint:disable */
/* eslint-disable */
export function generate_labitbu_bytes(pubkey_hex: string, base_images_js: any, accessories_js: any): Uint8Array;
export function test_file_size_constraint(base_images_js: any, accessories_js: any): string;
export function mint(pubkey_hex: string, payload_bytes: Uint8Array, amount: bigint, destination_address: string, fee: bigint, inputs: any, prev_txouts: any): Uint8Array;
export function create_deposit_address(pubkey_hex: string, payload_bytes: Uint8Array): Uint8Array;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly generate_labitbu_bytes: (a: number, b: number, c: any, d: any) => [number, number, number, number];
  readonly test_file_size_constraint: (a: any, b: any) => [number, number, number, number];
  readonly mint: (a: number, b: number, c: number, d: number, e: bigint, f: number, g: number, h: bigint, i: any, j: any) => [number, number, number, number];
  readonly create_deposit_address: (a: number, b: number, c: number, d: number) => [number, number, number, number];
  readonly rustsecp256k1_v0_10_0_context_create: (a: number) => number;
  readonly rustsecp256k1_v0_10_0_context_destroy: (a: number) => void;
  readonly rustsecp256k1_v0_10_0_default_illegal_callback_fn: (a: number, b: number) => void;
  readonly rustsecp256k1_v0_10_0_default_error_callback_fn: (a: number, b: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __externref_table_alloc: () => number;
  readonly __wbindgen_export_4: WebAssembly.Table;
  readonly __externref_table_dealloc: (a: number) => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
*
* @returns {InitOutput}
*/
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
