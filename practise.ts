@Service()

export class CounterState
{
    private readonly _count=signal(0);

    readonly count=this._count.asReadonly() // public readonly

    increment()
    {
        this._count.update((v)=>v+1);
    }
}

@Component({})
export class AwesomeCounter
{
    state=inject(CounterState);

    count=this.state.count;

    increment()
    {
        this.state.increment();
    }
}