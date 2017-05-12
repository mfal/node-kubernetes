import * as _ from "lodash";

export type LabelSelector = {[l: string]: string};

export function labelSelectorToQueryString(selector: LabelSelector): string {
    const v: string[] = [];

    _.forEach(selector, (value, label) => {
        v.push(label + "=" + value);
    });

    return v.join(",");
}