import { PmNode } from './PmNode';

export class AccessEntry {
    constructor(
        public target: PmNode,
        public operations: string[]
    ) { }
}
