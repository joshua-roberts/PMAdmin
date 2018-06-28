import { PmNode } from './PmNode';

export class Association {
  constructor(
    public parent: PmNode,
    public child: PmNode,
    public ops: string[]
  ) { }
}
