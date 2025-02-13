"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertFilter = void 0;
function safeParseJSON(json) {
    try {
        return JSON.parse(json);
    }
    catch (e) {
        return null;
    }
}
function convertFilter(filter) {
    if (!filter)
        return {};
    const { filters = {} } = filter;
    return Object.entries(filters).reduce((where, [name, filter]) => {
        if (['boolean', 'number', 'float', 'object', 'array'].includes(filter.property.type())) {
            where[name] = safeParseJSON(filter.value);
        }
        else if (['date', 'datetime'].includes(filter.property.type())) {
            if (typeof filter.value !== 'string' && filter.value.from && filter.value.to) {
                where[name] = { $gte: new Date(filter.value.from), $lte: new Date(filter.value.to) };
            }
            else if (typeof filter.value !== 'string' && filter.value.from) {
                where[name] = { $gte: new Date(filter.value.from) };
            }
            else if (typeof filter.value !== 'string' && filter.value.to) {
                where[name] = { $lte: new Date(filter.value.to) };
            }
        }
        else if (filter.property.isEnum() || filter.property.type() === 'reference') {
            where[name] = filter.value;
        }
        else {
            where[name] = { $like: `%${filter.value.toString()}%` };
        }
        return where;
    }, {});
}
exports.convertFilter = convertFilter;
//# sourceMappingURL=convert-filter.js.map