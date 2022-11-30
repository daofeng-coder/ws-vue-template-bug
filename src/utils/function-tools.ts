export const debounce = <P extends Array<any>>(
    wait: number,
    immediate: boolean,
    handle: (...args: P) => any,
) => {
    if (typeof handle !== 'function')
        throw new Error('handle must be an function');

    let timeout = -1;

    return function (...args: P) {
        timeout !== -1 && clearTimeout(timeout);
        const init = immediate && timeout === -1;

        timeout = setTimeout(() => {
            timeout = -1;
            // @ts-ignore
            !immediate && handle.apply(this, args);
        }, wait);

        // @ts-ignore
        init && handle.apply(this, args);
    };
};

export function curryDebounce(wait: number, immediate: boolean) {
    return <P extends Array<any>>(func: (...args: P) => any) => {
        return debounce(wait, immediate, func);
    };
}
