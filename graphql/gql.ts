/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  "\n  query GET_SUPERMARKET_LOCATIONS($supermarketId: Int!) {\n    supermarket(id: $supermarketId) {\n      locations {\n        id\n        latitude\n        longitude\n        name\n      }\n    }\n  }\n": typeof types.Get_Supermarket_LocationsDocument;
  "\n    query GET_TOP_PRODUCTS($limit: Int!) {\n      products(limit: $limit) {\n        ean\n        brandName\n        categoryName\n        quantity\n      }\n}\n": typeof types.Get_Top_ProductsDocument;
};
const documents: Documents = {
  "\n  query GET_SUPERMARKET_LOCATIONS($supermarketId: Int!) {\n    supermarket(id: $supermarketId) {\n      locations {\n        id\n        latitude\n        longitude\n        name\n      }\n    }\n  }\n":
    types.Get_Supermarket_LocationsDocument,
  "\n    query GET_TOP_PRODUCTS($limit: Int!) {\n      products(limit: $limit) {\n        ean\n        brandName\n        categoryName\n        quantity\n      }\n}\n":
    types.Get_Top_ProductsDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n  query GET_SUPERMARKET_LOCATIONS($supermarketId: Int!) {\n    supermarket(id: $supermarketId) {\n      locations {\n        id\n        latitude\n        longitude\n        name\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GET_SUPERMARKET_LOCATIONS($supermarketId: Int!) {\n    supermarket(id: $supermarketId) {\n      locations {\n        id\n        latitude\n        longitude\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: "\n    query GET_TOP_PRODUCTS($limit: Int!) {\n      products(limit: $limit) {\n        ean\n        brandName\n        categoryName\n        quantity\n      }\n}\n",
): (typeof documents)["\n    query GET_TOP_PRODUCTS($limit: Int!) {\n      products(limit: $limit) {\n        ean\n        brandName\n        categoryName\n        quantity\n      }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
