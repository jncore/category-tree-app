/** To omit the infamous "any" type errors */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/*
 * Saves a JSON object into a file and downloads it.
 *
 * Note: adapted from http://bgrins.github.io/devtools-snippets/#console-save
 *
 * @function
 * @param {object} data - json object to save
 * @param {string} filename - file name to save as
 * @returns {void}
 */
export function saveJSON(data: any, filename = 'download.json'): void {
    if (!data) {
        console.error('No data');
        return;
    }

    const preparedData = typeof data === 'object' ? JSON.stringify(data, undefined, 4) : data;
    const file = new Blob([preparedData], { type: 'text/json' });

    const isIE = /*@cc_on!@*/ false || !!(document as any).documentMode;
    if (isIE) {
        window.navigator.msSaveOrOpenBlob(file, filename);
    } else {
        const a = document.createElement('a');
        document.body.appendChild(a);
        a.style.display = 'none';
        a.href = URL.createObjectURL(file);
        a.download = filename;
        a.click();
    }
}
