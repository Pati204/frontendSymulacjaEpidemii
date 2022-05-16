export class Simulation {
        public N!: number;
        public P!: number;
        public I!: number;
        public R!: number;
        public M!: number;
        public Ti!: number;
        public Tm!: number;
        public Ts!: number;

        public constructor(init?: Simulation) {
            Object.assign(this, init);
          }
}
