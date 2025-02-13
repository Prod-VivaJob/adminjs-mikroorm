import { EntityProperty } from '@mikro-orm/core';
import { BaseProperty, PropertyType } from 'adminjs';
export declare class Property extends BaseProperty {
    private column;
    private columnPosition;
    constructor(column: EntityProperty, columnPosition?: number);
    getColumnMetadata(): EntityProperty<any>;
    isEditable(): boolean;
    isId(): boolean;
    isRequired(): boolean;
    isSortable(): boolean;
    reference(): string | null;
    availableValues(): Array<string> | null;
    position(): number;
    isEnum(): boolean;
    type(): PropertyType;
}
