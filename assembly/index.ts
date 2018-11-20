import {load_tag, InternalProcess, decode_and_create_contract} from "./wavelet/service";
import "allocator/tlsf";

export function process(): i32 {
    let tag = load_tag();

    if (tag == "create_contract") {
        return decode_and_create_contract();
    }

    return InternalProcess.Ignore;
}



