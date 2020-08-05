interface PerformanceChecker {
    timerStart: () => void;
    timerEnd: () => void;
    getPerformanceResults: () => string | null;
}

const DIGITS_AFTER_DECIMAL_POINT = 5;

/**
 * Simple performance checker, a wrapper for the performance.now()
 * browser functionality disguised as a React hook.
 *
 * Note: "process.browser" checks are required to prevent Next.js SSR related errors.
 * React.useState() wasn't use specifically to avoid triggering unnecessary view re-renders
 * while measuring the performance.
 *
 * @function
 * @returns {PerformanceChecker}
 */
export function usePerformanceChecker(): PerformanceChecker {
    let checkStart: number | undefined;
    let checkEnd: number | undefined;

    const timerStart = (): void => {
        if (process.browser) {
            checkStart = window.performance.now();
        }
    };

    const timerEnd = (): void => {
        if (process.browser) {
            checkEnd = window.performance.now();
        }
    };

    const getPerformanceResults = (): string | null => {
        if (!checkStart || !checkEnd || !process.browser) {
            return null;
        }

        return (checkEnd - checkStart).toFixed(DIGITS_AFTER_DECIMAL_POINT);
    };

    return { timerStart, timerEnd, getPerformanceResults };
}
