// import "allocator/arena";

declare namespace env {
    function _decode_and_create_contract(): i32

    function _tag_len(): i32

    function _tag(offset: usize): i32

    function _payload_len(): i32

    function _payload(offset: usize): i32

    function _log(offset: usize, len: usize): i32
}

export enum InternalProcess {
    Ok = 0,
    Err = 1,
    Ignore = 2
}

export function log(a: string): void {
    env._log(a.toUTF8(), a.lengthUTF8);
}

export function load_tag(): string {
    let length = env._tag_len();
    let encoded = new ArrayBuffer(length);

    env._tag(encoded.data);

    return String.fromUTF8(encoded.data, length);
}

export function load_payload(): string {
    let length = env._payload_len();
    let encoded = new ArrayBuffer(length);

    env._payload(encoded.data);

    return String.fromUTF8(encoded.data, length);
}

export function decode_and_create_contract(): i32 {
    return env._decode_and_create_contract();
}
