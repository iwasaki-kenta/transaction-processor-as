import {decode_and_create_contract, InternalProcess, load_tag} from "./wavelet/service";
import "allocator/tlsf";

export function process(): i32 {
    let tag = load_tag();

    if (tag == "create_contract") {
        return decode_and_create_contract();
    }

    return InternalProcess.Ignore;
}



