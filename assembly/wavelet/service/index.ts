// import "allocator/arena";

@external("env", "_decode_and_create_contract")
declare function _decode_and_create_contract(): i32;

@external("env", "_tag_len")
declare function _tag_len(): i32;

@external("env", "_tag")
declare function _tag(offset: usize): i32;

@external("env", "_payload_len")
declare function _payload_len(): i32;

@external("env", "_payload")
declare function _payload(offset: usize): i32;

@external("env", "_log")
declare function _log(offset: usize, len: usize): i32;

export enum InternalProcess {
    Ok = 0,
    Err = 1,
    Ignore = 2
}

export function log(a: string): void {
    _log(a.toUTF8(), a.lengthUTF8);
}

export function load_tag(): string {
    let length = _tag_len();
    let encoded = new ArrayBuffer(length);

    _tag(encoded.data);

    return String.fromUTF8(encoded.data, length);
}

export function load_payload(): string {
    let length = _payload_len();
    let encoded = new ArrayBuffer(length);

    _payload(encoded.data);

    return String.fromUTF8(encoded.data, length);
}

export function decode_and_create_contract(): i32 {
    return _decode_and_create_contract();
}
