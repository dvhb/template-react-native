// tslint:disable
// eslint-disable
/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.5
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ITag
 */
export interface ITag {
    /**
     * 
     * @type {number}
     * @memberof ITag
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof ITag
     */
    name?: string;
}

export function ITagFromJSON(json: any): ITag {
    return ITagFromJSONTyped(json, false);
}

export function ITagFromJSONTyped(json: any, ignoreDiscriminator: boolean): ITag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function ITagToJSON(value?: ITag | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
    };
}


