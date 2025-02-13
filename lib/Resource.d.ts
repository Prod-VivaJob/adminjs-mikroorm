import { BaseResource, Filter, BaseRecord } from 'adminjs';
import { AnyEntity, MikroORM, MetadataStorage, EntityManager, Loaded } from '@mikro-orm/core';
import { EntityClass } from '@mikro-orm/core/typings';
import { Property } from './Property';
export declare type AdapterORM = {
    database?: string;
    databaseType?: string;
    entityManager: EntityManager;
    metadata: MetadataStorage;
};
export declare class Resource extends BaseResource {
    static validate: any;
    private orm;
    private metadata?;
    private model;
    private propertiesObject;
    constructor(args: {
        model: EntityClass<AnyEntity>;
        orm: MikroORM;
    });
    databaseName(): string;
    databaseType(): string;
    name(): string;
    id(): string;
    properties(): Array<Property>;
    property(path: string): Property;
    build(params: Record<string, any>): BaseRecord;
    count(filter: Filter): Promise<number>;
    find(filter: Filter, params?: Record<string, any>): Promise<Array<BaseRecord>>;
    findOne(id: string | number): Promise<BaseRecord | null>;
    findMany(ids: Array<string | number>): Promise<Array<BaseRecord>>;
    create(params: Record<string, any>): Promise<Record<string, any>>;
    update(pk: string | number, params?: Record<string, any>): Promise<Record<string, any>>;
    delete(id: string | number): Promise<void>;
    static isAdapterFor(args?: {
        model?: EntityClass<AnyEntity>;
        orm?: MikroORM;
    }): boolean;
    validateAndSave(instance: Loaded<AnyEntity>): Promise<void>;
    private prepareProperties;
}
