import { DefaultProps } from './common';

export interface StateV<T> {
    value: T;
}

export interface Context<T> {
    readonly debugName: string;
    active: boolean;
    readonly props: T;
    defaultProps: DefaultProps<T>;
    w(): T;
    onDispose(cb: () => void): void;
    forceUpdate(): void;
}

export interface WatchOptions {
    compare?: boolean;
    global?: boolean;
}

export interface Watcher {
    readonly active: boolean;
    readonly debugName: string;
    unwatch(): void;
}

export interface ContextProps<P> {
    use(): P;
}
