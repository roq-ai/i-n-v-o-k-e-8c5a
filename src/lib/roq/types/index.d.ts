/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model agent_deployment
 *
 */
export type agent_deployment = $Result.DefaultSelection<Prisma.$agent_deploymentPayload>;
/**
 * Model agent_task
 *
 */
export type agent_task = $Result.DefaultSelection<Prisma.$agent_taskPayload>;
/**
 * Model goal
 *
 */
export type goal = $Result.DefaultSelection<Prisma.$goalPayload>;
/**
 * Model intelligent_agent
 *
 */
export type intelligent_agent = $Result.DefaultSelection<Prisma.$intelligent_agentPayload>;
/**
 * Model organization
 *
 */
export type organization = $Result.DefaultSelection<Prisma.$organizationPayload>;
/**
 * Model task
 *
 */
export type task = $Result.DefaultSelection<Prisma.$taskPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Agent_deployments
 * const agent_deployments = await prisma.agent_deployment.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Agent_deployments
   * const agent_deployments = await prisma.agent_deployment.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.agent_deployment`: Exposes CRUD operations for the **agent_deployment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Agent_deployments
   * const agent_deployments = await prisma.agent_deployment.findMany()
   * ```
   */
  get agent_deployment(): Prisma.agent_deploymentDelegate<ExtArgs>;

  /**
   * `prisma.agent_task`: Exposes CRUD operations for the **agent_task** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Agent_tasks
   * const agent_tasks = await prisma.agent_task.findMany()
   * ```
   */
  get agent_task(): Prisma.agent_taskDelegate<ExtArgs>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **goal** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Goals
   * const goals = await prisma.goal.findMany()
   * ```
   */
  get goal(): Prisma.goalDelegate<ExtArgs>;

  /**
   * `prisma.intelligent_agent`: Exposes CRUD operations for the **intelligent_agent** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Intelligent_agents
   * const intelligent_agents = await prisma.intelligent_agent.findMany()
   * ```
   */
  get intelligent_agent(): Prisma.intelligent_agentDelegate<ExtArgs>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **organization** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   */
  get organization(): Prisma.organizationDelegate<ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **task** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Tasks
   * const tasks = await prisma.task.findMany()
   * ```
   */
  get task(): Prisma.taskDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    agent_deployment: 'agent_deployment';
    agent_task: 'agent_task';
    goal: 'goal';
    intelligent_agent: 'intelligent_agent';
    organization: 'organization';
    task: 'task';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'agent_deployment' | 'agent_task' | 'goal' | 'intelligent_agent' | 'organization' | 'task' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      agent_deployment: {
        payload: Prisma.$agent_deploymentPayload<ExtArgs>;
        fields: Prisma.agent_deploymentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.agent_deploymentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agent_deploymentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.agent_deploymentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agent_deploymentPayload>;
          };
          findFirst: {
            args: Prisma.agent_deploymentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agent_deploymentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.agent_deploymentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agent_deploymentPayload>;
          };
          findMany: {
            args: Prisma.agent_deploymentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agent_deploymentPayload>[];
          };
          create: {
            args: Prisma.agent_deploymentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agent_deploymentPayload>;
          };
          createMany: {
            args: Prisma.agent_deploymentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.agent_deploymentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agent_deploymentPayload>;
          };
          update: {
            args: Prisma.agent_deploymentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agent_deploymentPayload>;
          };
          deleteMany: {
            args: Prisma.agent_deploymentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.agent_deploymentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.agent_deploymentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agent_deploymentPayload>;
          };
          aggregate: {
            args: Prisma.Agent_deploymentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAgent_deployment>;
          };
          groupBy: {
            args: Prisma.agent_deploymentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Agent_deploymentGroupByOutputType>[];
          };
          count: {
            args: Prisma.agent_deploymentCountArgs<ExtArgs>;
            result: $Utils.Optional<Agent_deploymentCountAggregateOutputType> | number;
          };
        };
      };
      agent_task: {
        payload: Prisma.$agent_taskPayload<ExtArgs>;
        fields: Prisma.agent_taskFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.agent_taskFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agent_taskPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.agent_taskFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agent_taskPayload>;
          };
          findFirst: {
            args: Prisma.agent_taskFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agent_taskPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.agent_taskFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agent_taskPayload>;
          };
          findMany: {
            args: Prisma.agent_taskFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agent_taskPayload>[];
          };
          create: {
            args: Prisma.agent_taskCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agent_taskPayload>;
          };
          createMany: {
            args: Prisma.agent_taskCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.agent_taskDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agent_taskPayload>;
          };
          update: {
            args: Prisma.agent_taskUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agent_taskPayload>;
          };
          deleteMany: {
            args: Prisma.agent_taskDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.agent_taskUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.agent_taskUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$agent_taskPayload>;
          };
          aggregate: {
            args: Prisma.Agent_taskAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAgent_task>;
          };
          groupBy: {
            args: Prisma.agent_taskGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Agent_taskGroupByOutputType>[];
          };
          count: {
            args: Prisma.agent_taskCountArgs<ExtArgs>;
            result: $Utils.Optional<Agent_taskCountAggregateOutputType> | number;
          };
        };
      };
      goal: {
        payload: Prisma.$goalPayload<ExtArgs>;
        fields: Prisma.goalFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.goalFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.goalFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalPayload>;
          };
          findFirst: {
            args: Prisma.goalFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.goalFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalPayload>;
          };
          findMany: {
            args: Prisma.goalFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalPayload>[];
          };
          create: {
            args: Prisma.goalCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalPayload>;
          };
          createMany: {
            args: Prisma.goalCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.goalDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalPayload>;
          };
          update: {
            args: Prisma.goalUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalPayload>;
          };
          deleteMany: {
            args: Prisma.goalDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.goalUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.goalUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$goalPayload>;
          };
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateGoal>;
          };
          groupBy: {
            args: Prisma.goalGroupByArgs<ExtArgs>;
            result: $Utils.Optional<GoalGroupByOutputType>[];
          };
          count: {
            args: Prisma.goalCountArgs<ExtArgs>;
            result: $Utils.Optional<GoalCountAggregateOutputType> | number;
          };
        };
      };
      intelligent_agent: {
        payload: Prisma.$intelligent_agentPayload<ExtArgs>;
        fields: Prisma.intelligent_agentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.intelligent_agentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$intelligent_agentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.intelligent_agentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$intelligent_agentPayload>;
          };
          findFirst: {
            args: Prisma.intelligent_agentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$intelligent_agentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.intelligent_agentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$intelligent_agentPayload>;
          };
          findMany: {
            args: Prisma.intelligent_agentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$intelligent_agentPayload>[];
          };
          create: {
            args: Prisma.intelligent_agentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$intelligent_agentPayload>;
          };
          createMany: {
            args: Prisma.intelligent_agentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.intelligent_agentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$intelligent_agentPayload>;
          };
          update: {
            args: Prisma.intelligent_agentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$intelligent_agentPayload>;
          };
          deleteMany: {
            args: Prisma.intelligent_agentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.intelligent_agentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.intelligent_agentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$intelligent_agentPayload>;
          };
          aggregate: {
            args: Prisma.Intelligent_agentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateIntelligent_agent>;
          };
          groupBy: {
            args: Prisma.intelligent_agentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Intelligent_agentGroupByOutputType>[];
          };
          count: {
            args: Prisma.intelligent_agentCountArgs<ExtArgs>;
            result: $Utils.Optional<Intelligent_agentCountAggregateOutputType> | number;
          };
        };
      };
      organization: {
        payload: Prisma.$organizationPayload<ExtArgs>;
        fields: Prisma.organizationFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.organizationFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.organizationFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findFirst: {
            args: Prisma.organizationFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.organizationFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          findMany: {
            args: Prisma.organizationFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>[];
          };
          create: {
            args: Prisma.organizationCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          createMany: {
            args: Prisma.organizationCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.organizationDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          update: {
            args: Prisma.organizationUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          deleteMany: {
            args: Prisma.organizationDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.organizationUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.organizationUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$organizationPayload>;
          };
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrganization>;
          };
          groupBy: {
            args: Prisma.organizationGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationGroupByOutputType>[];
          };
          count: {
            args: Prisma.organizationCountArgs<ExtArgs>;
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number;
          };
        };
      };
      task: {
        payload: Prisma.$taskPayload<ExtArgs>;
        fields: Prisma.taskFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.taskFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.taskFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload>;
          };
          findFirst: {
            args: Prisma.taskFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.taskFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload>;
          };
          findMany: {
            args: Prisma.taskFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload>[];
          };
          create: {
            args: Prisma.taskCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload>;
          };
          createMany: {
            args: Prisma.taskCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.taskDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload>;
          };
          update: {
            args: Prisma.taskUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload>;
          };
          deleteMany: {
            args: Prisma.taskDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.taskUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.taskUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$taskPayload>;
          };
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTask>;
          };
          groupBy: {
            args: Prisma.taskGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TaskGroupByOutputType>[];
          };
          count: {
            args: Prisma.taskCountArgs<ExtArgs>;
            result: $Utils.Optional<TaskCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type GoalCountOutputType
   */

  export type GoalCountOutputType = {
    task: number;
  };

  export type GoalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | GoalCountOutputTypeCountTaskArgs;
  };

  // Custom InputTypes

  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalCountOutputType
     */
    select?: GoalCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * GoalCountOutputType without action
   */
  export type GoalCountOutputTypeCountTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput;
  };

  /**
   * Count Type Intelligent_agentCountOutputType
   */

  export type Intelligent_agentCountOutputType = {
    agent_task: number;
  };

  export type Intelligent_agentCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    agent_task?: boolean | Intelligent_agentCountOutputTypeCountAgent_taskArgs;
  };

  // Custom InputTypes

  /**
   * Intelligent_agentCountOutputType without action
   */
  export type Intelligent_agentCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Intelligent_agentCountOutputType
     */
    select?: Intelligent_agentCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * Intelligent_agentCountOutputType without action
   */
  export type Intelligent_agentCountOutputTypeCountAgent_taskArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: agent_taskWhereInput;
  };

  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    user: number;
  };

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | OrganizationCountOutputTypeCountUserArgs;
  };

  // Custom InputTypes

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: userWhereInput;
  };

  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    agent_task: number;
  };

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent_task?: boolean | TaskCountOutputTypeCountAgent_taskArgs;
  };

  // Custom InputTypes

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountAgent_taskArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: agent_taskWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    goal: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | UserCountOutputTypeCountGoalArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: goalWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model agent_deployment
   */

  export type AggregateAgent_deployment = {
    _count: Agent_deploymentCountAggregateOutputType | null;
    _min: Agent_deploymentMinAggregateOutputType | null;
    _max: Agent_deploymentMaxAggregateOutputType | null;
  };

  export type Agent_deploymentMinAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Agent_deploymentMaxAggregateOutputType = {
    id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Agent_deploymentCountAggregateOutputType = {
    id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Agent_deploymentMinAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Agent_deploymentMaxAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Agent_deploymentCountAggregateInputType = {
    id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Agent_deploymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agent_deployment to aggregate.
     */
    where?: agent_deploymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agent_deployments to fetch.
     */
    orderBy?: agent_deploymentOrderByWithRelationInput | agent_deploymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: agent_deploymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agent_deployments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agent_deployments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned agent_deployments
     **/
    _count?: true | Agent_deploymentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Agent_deploymentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Agent_deploymentMaxAggregateInputType;
  };

  export type GetAgent_deploymentAggregateType<T extends Agent_deploymentAggregateArgs> = {
    [P in keyof T & keyof AggregateAgent_deployment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgent_deployment[P]>
      : GetScalarType<T[P], AggregateAgent_deployment[P]>;
  };

  export type agent_deploymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agent_deploymentWhereInput;
    orderBy?: agent_deploymentOrderByWithAggregationInput | agent_deploymentOrderByWithAggregationInput[];
    by: Agent_deploymentScalarFieldEnum[] | Agent_deploymentScalarFieldEnum;
    having?: agent_deploymentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Agent_deploymentCountAggregateInputType | true;
    _min?: Agent_deploymentMinAggregateInputType;
    _max?: Agent_deploymentMaxAggregateInputType;
  };

  export type Agent_deploymentGroupByOutputType = {
    id: string;
    created_at: Date;
    updated_at: Date;
    _count: Agent_deploymentCountAggregateOutputType | null;
    _min: Agent_deploymentMinAggregateOutputType | null;
    _max: Agent_deploymentMaxAggregateOutputType | null;
  };

  type GetAgent_deploymentGroupByPayload<T extends agent_deploymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Agent_deploymentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Agent_deploymentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Agent_deploymentGroupByOutputType[P]>
          : GetScalarType<T[P], Agent_deploymentGroupByOutputType[P]>;
      }
    >
  >;

  export type agent_deploymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
      },
      ExtArgs['result']['agent_deployment']
    >;

  export type agent_deploymentSelectScalar = {
    id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type $agent_deploymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'agent_deployment';
    objects: {};
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['agent_deployment']
    >;
    composites: {};
  };

  type agent_deploymentGetPayload<S extends boolean | null | undefined | agent_deploymentDefaultArgs> =
    $Result.GetResult<Prisma.$agent_deploymentPayload, S>;

  type agent_deploymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    agent_deploymentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Agent_deploymentCountAggregateInputType | true;
  };

  export interface agent_deploymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['agent_deployment']; meta: { name: 'agent_deployment' } };
    /**
     * Find zero or one Agent_deployment that matches the filter.
     * @param {agent_deploymentFindUniqueArgs} args - Arguments to find a Agent_deployment
     * @example
     * // Get one Agent_deployment
     * const agent_deployment = await prisma.agent_deployment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends agent_deploymentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, agent_deploymentFindUniqueArgs<ExtArgs>>,
    ): Prisma__agent_deploymentClient<
      $Result.GetResult<Prisma.$agent_deploymentPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Agent_deployment that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {agent_deploymentFindUniqueOrThrowArgs} args - Arguments to find a Agent_deployment
     * @example
     * // Get one Agent_deployment
     * const agent_deployment = await prisma.agent_deployment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends agent_deploymentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, agent_deploymentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__agent_deploymentClient<
      $Result.GetResult<Prisma.$agent_deploymentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Agent_deployment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agent_deploymentFindFirstArgs} args - Arguments to find a Agent_deployment
     * @example
     * // Get one Agent_deployment
     * const agent_deployment = await prisma.agent_deployment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends agent_deploymentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, agent_deploymentFindFirstArgs<ExtArgs>>,
    ): Prisma__agent_deploymentClient<
      $Result.GetResult<Prisma.$agent_deploymentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Agent_deployment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agent_deploymentFindFirstOrThrowArgs} args - Arguments to find a Agent_deployment
     * @example
     * // Get one Agent_deployment
     * const agent_deployment = await prisma.agent_deployment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends agent_deploymentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, agent_deploymentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__agent_deploymentClient<
      $Result.GetResult<Prisma.$agent_deploymentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Agent_deployments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agent_deploymentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agent_deployments
     * const agent_deployments = await prisma.agent_deployment.findMany()
     *
     * // Get first 10 Agent_deployments
     * const agent_deployments = await prisma.agent_deployment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const agent_deploymentWithIdOnly = await prisma.agent_deployment.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends agent_deploymentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, agent_deploymentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agent_deploymentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Agent_deployment.
     * @param {agent_deploymentCreateArgs} args - Arguments to create a Agent_deployment.
     * @example
     * // Create one Agent_deployment
     * const Agent_deployment = await prisma.agent_deployment.create({
     *   data: {
     *     // ... data to create a Agent_deployment
     *   }
     * })
     *
     **/
    create<T extends agent_deploymentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, agent_deploymentCreateArgs<ExtArgs>>,
    ): Prisma__agent_deploymentClient<
      $Result.GetResult<Prisma.$agent_deploymentPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Agent_deployments.
     *     @param {agent_deploymentCreateManyArgs} args - Arguments to create many Agent_deployments.
     *     @example
     *     // Create many Agent_deployments
     *     const agent_deployment = await prisma.agent_deployment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends agent_deploymentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, agent_deploymentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Agent_deployment.
     * @param {agent_deploymentDeleteArgs} args - Arguments to delete one Agent_deployment.
     * @example
     * // Delete one Agent_deployment
     * const Agent_deployment = await prisma.agent_deployment.delete({
     *   where: {
     *     // ... filter to delete one Agent_deployment
     *   }
     * })
     *
     **/
    delete<T extends agent_deploymentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, agent_deploymentDeleteArgs<ExtArgs>>,
    ): Prisma__agent_deploymentClient<
      $Result.GetResult<Prisma.$agent_deploymentPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Agent_deployment.
     * @param {agent_deploymentUpdateArgs} args - Arguments to update one Agent_deployment.
     * @example
     * // Update one Agent_deployment
     * const agent_deployment = await prisma.agent_deployment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends agent_deploymentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, agent_deploymentUpdateArgs<ExtArgs>>,
    ): Prisma__agent_deploymentClient<
      $Result.GetResult<Prisma.$agent_deploymentPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Agent_deployments.
     * @param {agent_deploymentDeleteManyArgs} args - Arguments to filter Agent_deployments to delete.
     * @example
     * // Delete a few Agent_deployments
     * const { count } = await prisma.agent_deployment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends agent_deploymentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, agent_deploymentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Agent_deployments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agent_deploymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agent_deployments
     * const agent_deployment = await prisma.agent_deployment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends agent_deploymentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, agent_deploymentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Agent_deployment.
     * @param {agent_deploymentUpsertArgs} args - Arguments to update or create a Agent_deployment.
     * @example
     * // Update or create a Agent_deployment
     * const agent_deployment = await prisma.agent_deployment.upsert({
     *   create: {
     *     // ... data to create a Agent_deployment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agent_deployment we want to update
     *   }
     * })
     **/
    upsert<T extends agent_deploymentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, agent_deploymentUpsertArgs<ExtArgs>>,
    ): Prisma__agent_deploymentClient<
      $Result.GetResult<Prisma.$agent_deploymentPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Agent_deployments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agent_deploymentCountArgs} args - Arguments to filter Agent_deployments to count.
     * @example
     * // Count the number of Agent_deployments
     * const count = await prisma.agent_deployment.count({
     *   where: {
     *     // ... the filter for the Agent_deployments we want to count
     *   }
     * })
     **/
    count<T extends agent_deploymentCountArgs>(
      args?: Subset<T, agent_deploymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Agent_deploymentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Agent_deployment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Agent_deploymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Agent_deploymentAggregateArgs>(
      args: Subset<T, Agent_deploymentAggregateArgs>,
    ): Prisma.PrismaPromise<GetAgent_deploymentAggregateType<T>>;

    /**
     * Group by Agent_deployment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agent_deploymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends agent_deploymentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: agent_deploymentGroupByArgs['orderBy'] }
        : { orderBy?: agent_deploymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, agent_deploymentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAgent_deploymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the agent_deployment model
     */
    readonly fields: agent_deploymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for agent_deployment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__agent_deploymentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the agent_deployment model
   */
  interface agent_deploymentFieldRefs {
    readonly id: FieldRef<'agent_deployment', 'String'>;
    readonly created_at: FieldRef<'agent_deployment', 'DateTime'>;
    readonly updated_at: FieldRef<'agent_deployment', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * agent_deployment findUnique
   */
  export type agent_deploymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_deployment
     */
    select?: agent_deploymentSelect<ExtArgs> | null;
    /**
     * Filter, which agent_deployment to fetch.
     */
    where: agent_deploymentWhereUniqueInput;
  };

  /**
   * agent_deployment findUniqueOrThrow
   */
  export type agent_deploymentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the agent_deployment
     */
    select?: agent_deploymentSelect<ExtArgs> | null;
    /**
     * Filter, which agent_deployment to fetch.
     */
    where: agent_deploymentWhereUniqueInput;
  };

  /**
   * agent_deployment findFirst
   */
  export type agent_deploymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_deployment
     */
    select?: agent_deploymentSelect<ExtArgs> | null;
    /**
     * Filter, which agent_deployment to fetch.
     */
    where?: agent_deploymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agent_deployments to fetch.
     */
    orderBy?: agent_deploymentOrderByWithRelationInput | agent_deploymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for agent_deployments.
     */
    cursor?: agent_deploymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agent_deployments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agent_deployments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of agent_deployments.
     */
    distinct?: Agent_deploymentScalarFieldEnum | Agent_deploymentScalarFieldEnum[];
  };

  /**
   * agent_deployment findFirstOrThrow
   */
  export type agent_deploymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the agent_deployment
       */
      select?: agent_deploymentSelect<ExtArgs> | null;
      /**
       * Filter, which agent_deployment to fetch.
       */
      where?: agent_deploymentWhereInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
       *
       * Determine the order of agent_deployments to fetch.
       */
      orderBy?: agent_deploymentOrderByWithRelationInput | agent_deploymentOrderByWithRelationInput[];
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
       *
       * Sets the position for searching for agent_deployments.
       */
      cursor?: agent_deploymentWhereUniqueInput;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Take `±n` agent_deployments from the position of the cursor.
       */
      take?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
       *
       * Skip the first `n` agent_deployments.
       */
      skip?: number;
      /**
       * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
       *
       * Filter by unique combinations of agent_deployments.
       */
      distinct?: Agent_deploymentScalarFieldEnum | Agent_deploymentScalarFieldEnum[];
    };

  /**
   * agent_deployment findMany
   */
  export type agent_deploymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_deployment
     */
    select?: agent_deploymentSelect<ExtArgs> | null;
    /**
     * Filter, which agent_deployments to fetch.
     */
    where?: agent_deploymentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agent_deployments to fetch.
     */
    orderBy?: agent_deploymentOrderByWithRelationInput | agent_deploymentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing agent_deployments.
     */
    cursor?: agent_deploymentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agent_deployments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agent_deployments.
     */
    skip?: number;
    distinct?: Agent_deploymentScalarFieldEnum | Agent_deploymentScalarFieldEnum[];
  };

  /**
   * agent_deployment create
   */
  export type agent_deploymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_deployment
     */
    select?: agent_deploymentSelect<ExtArgs> | null;
    /**
     * The data needed to create a agent_deployment.
     */
    data?: XOR<agent_deploymentCreateInput, agent_deploymentUncheckedCreateInput>;
  };

  /**
   * agent_deployment createMany
   */
  export type agent_deploymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many agent_deployments.
     */
    data: agent_deploymentCreateManyInput | agent_deploymentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * agent_deployment update
   */
  export type agent_deploymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_deployment
     */
    select?: agent_deploymentSelect<ExtArgs> | null;
    /**
     * The data needed to update a agent_deployment.
     */
    data: XOR<agent_deploymentUpdateInput, agent_deploymentUncheckedUpdateInput>;
    /**
     * Choose, which agent_deployment to update.
     */
    where: agent_deploymentWhereUniqueInput;
  };

  /**
   * agent_deployment updateMany
   */
  export type agent_deploymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update agent_deployments.
     */
    data: XOR<agent_deploymentUpdateManyMutationInput, agent_deploymentUncheckedUpdateManyInput>;
    /**
     * Filter which agent_deployments to update
     */
    where?: agent_deploymentWhereInput;
  };

  /**
   * agent_deployment upsert
   */
  export type agent_deploymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_deployment
     */
    select?: agent_deploymentSelect<ExtArgs> | null;
    /**
     * The filter to search for the agent_deployment to update in case it exists.
     */
    where: agent_deploymentWhereUniqueInput;
    /**
     * In case the agent_deployment found by the `where` argument doesn't exist, create a new agent_deployment with this data.
     */
    create: XOR<agent_deploymentCreateInput, agent_deploymentUncheckedCreateInput>;
    /**
     * In case the agent_deployment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<agent_deploymentUpdateInput, agent_deploymentUncheckedUpdateInput>;
  };

  /**
   * agent_deployment delete
   */
  export type agent_deploymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_deployment
     */
    select?: agent_deploymentSelect<ExtArgs> | null;
    /**
     * Filter which agent_deployment to delete.
     */
    where: agent_deploymentWhereUniqueInput;
  };

  /**
   * agent_deployment deleteMany
   */
  export type agent_deploymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agent_deployments to delete
     */
    where?: agent_deploymentWhereInput;
  };

  /**
   * agent_deployment without action
   */
  export type agent_deploymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_deployment
     */
    select?: agent_deploymentSelect<ExtArgs> | null;
  };

  /**
   * Model agent_task
   */

  export type AggregateAgent_task = {
    _count: Agent_taskCountAggregateOutputType | null;
    _min: Agent_taskMinAggregateOutputType | null;
    _max: Agent_taskMaxAggregateOutputType | null;
  };

  export type Agent_taskMinAggregateOutputType = {
    id: string | null;
    task_id: string | null;
    agent_id: string | null;
    status: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Agent_taskMaxAggregateOutputType = {
    id: string | null;
    task_id: string | null;
    agent_id: string | null;
    status: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Agent_taskCountAggregateOutputType = {
    id: number;
    task_id: number;
    agent_id: number;
    status: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Agent_taskMinAggregateInputType = {
    id?: true;
    task_id?: true;
    agent_id?: true;
    status?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Agent_taskMaxAggregateInputType = {
    id?: true;
    task_id?: true;
    agent_id?: true;
    status?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Agent_taskCountAggregateInputType = {
    id?: true;
    task_id?: true;
    agent_id?: true;
    status?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Agent_taskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agent_task to aggregate.
     */
    where?: agent_taskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agent_tasks to fetch.
     */
    orderBy?: agent_taskOrderByWithRelationInput | agent_taskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: agent_taskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agent_tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agent_tasks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned agent_tasks
     **/
    _count?: true | Agent_taskCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Agent_taskMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Agent_taskMaxAggregateInputType;
  };

  export type GetAgent_taskAggregateType<T extends Agent_taskAggregateArgs> = {
    [P in keyof T & keyof AggregateAgent_task]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgent_task[P]>
      : GetScalarType<T[P], AggregateAgent_task[P]>;
  };

  export type agent_taskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agent_taskWhereInput;
    orderBy?: agent_taskOrderByWithAggregationInput | agent_taskOrderByWithAggregationInput[];
    by: Agent_taskScalarFieldEnum[] | Agent_taskScalarFieldEnum;
    having?: agent_taskScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Agent_taskCountAggregateInputType | true;
    _min?: Agent_taskMinAggregateInputType;
    _max?: Agent_taskMaxAggregateInputType;
  };

  export type Agent_taskGroupByOutputType = {
    id: string;
    task_id: string;
    agent_id: string;
    status: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: Agent_taskCountAggregateOutputType | null;
    _min: Agent_taskMinAggregateOutputType | null;
    _max: Agent_taskMaxAggregateOutputType | null;
  };

  type GetAgent_taskGroupByPayload<T extends agent_taskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Agent_taskGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Agent_taskGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Agent_taskGroupByOutputType[P]>
          : GetScalarType<T[P], Agent_taskGroupByOutputType[P]>;
      }
    >
  >;

  export type agent_taskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        task_id?: boolean;
        agent_id?: boolean;
        status?: boolean;
        is_active?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        intelligent_agent?: boolean | intelligent_agentDefaultArgs<ExtArgs>;
        task?: boolean | taskDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['agent_task']
    >;

  export type agent_taskSelectScalar = {
    id?: boolean;
    task_id?: boolean;
    agent_id?: boolean;
    status?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type agent_taskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    intelligent_agent?: boolean | intelligent_agentDefaultArgs<ExtArgs>;
    task?: boolean | taskDefaultArgs<ExtArgs>;
  };

  export type $agent_taskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'agent_task';
    objects: {
      intelligent_agent: Prisma.$intelligent_agentPayload<ExtArgs>;
      task: Prisma.$taskPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        task_id: string;
        agent_id: string;
        status: string;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['agent_task']
    >;
    composites: {};
  };

  type agent_taskGetPayload<S extends boolean | null | undefined | agent_taskDefaultArgs> = $Result.GetResult<
    Prisma.$agent_taskPayload,
    S
  >;

  type agent_taskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    agent_taskFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Agent_taskCountAggregateInputType | true;
  };

  export interface agent_taskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['agent_task']; meta: { name: 'agent_task' } };
    /**
     * Find zero or one Agent_task that matches the filter.
     * @param {agent_taskFindUniqueArgs} args - Arguments to find a Agent_task
     * @example
     * // Get one Agent_task
     * const agent_task = await prisma.agent_task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends agent_taskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, agent_taskFindUniqueArgs<ExtArgs>>,
    ): Prisma__agent_taskClient<
      $Result.GetResult<Prisma.$agent_taskPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Agent_task that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {agent_taskFindUniqueOrThrowArgs} args - Arguments to find a Agent_task
     * @example
     * // Get one Agent_task
     * const agent_task = await prisma.agent_task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends agent_taskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, agent_taskFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__agent_taskClient<
      $Result.GetResult<Prisma.$agent_taskPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Agent_task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agent_taskFindFirstArgs} args - Arguments to find a Agent_task
     * @example
     * // Get one Agent_task
     * const agent_task = await prisma.agent_task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends agent_taskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, agent_taskFindFirstArgs<ExtArgs>>,
    ): Prisma__agent_taskClient<
      $Result.GetResult<Prisma.$agent_taskPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Agent_task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agent_taskFindFirstOrThrowArgs} args - Arguments to find a Agent_task
     * @example
     * // Get one Agent_task
     * const agent_task = await prisma.agent_task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends agent_taskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, agent_taskFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__agent_taskClient<
      $Result.GetResult<Prisma.$agent_taskPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Agent_tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agent_taskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agent_tasks
     * const agent_tasks = await prisma.agent_task.findMany()
     *
     * // Get first 10 Agent_tasks
     * const agent_tasks = await prisma.agent_task.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const agent_taskWithIdOnly = await prisma.agent_task.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends agent_taskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, agent_taskFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agent_taskPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Agent_task.
     * @param {agent_taskCreateArgs} args - Arguments to create a Agent_task.
     * @example
     * // Create one Agent_task
     * const Agent_task = await prisma.agent_task.create({
     *   data: {
     *     // ... data to create a Agent_task
     *   }
     * })
     *
     **/
    create<T extends agent_taskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, agent_taskCreateArgs<ExtArgs>>,
    ): Prisma__agent_taskClient<$Result.GetResult<Prisma.$agent_taskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Agent_tasks.
     *     @param {agent_taskCreateManyArgs} args - Arguments to create many Agent_tasks.
     *     @example
     *     // Create many Agent_tasks
     *     const agent_task = await prisma.agent_task.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends agent_taskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, agent_taskCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Agent_task.
     * @param {agent_taskDeleteArgs} args - Arguments to delete one Agent_task.
     * @example
     * // Delete one Agent_task
     * const Agent_task = await prisma.agent_task.delete({
     *   where: {
     *     // ... filter to delete one Agent_task
     *   }
     * })
     *
     **/
    delete<T extends agent_taskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, agent_taskDeleteArgs<ExtArgs>>,
    ): Prisma__agent_taskClient<$Result.GetResult<Prisma.$agent_taskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Agent_task.
     * @param {agent_taskUpdateArgs} args - Arguments to update one Agent_task.
     * @example
     * // Update one Agent_task
     * const agent_task = await prisma.agent_task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends agent_taskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, agent_taskUpdateArgs<ExtArgs>>,
    ): Prisma__agent_taskClient<$Result.GetResult<Prisma.$agent_taskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Agent_tasks.
     * @param {agent_taskDeleteManyArgs} args - Arguments to filter Agent_tasks to delete.
     * @example
     * // Delete a few Agent_tasks
     * const { count } = await prisma.agent_task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends agent_taskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, agent_taskDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Agent_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agent_taskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agent_tasks
     * const agent_task = await prisma.agent_task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends agent_taskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, agent_taskUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Agent_task.
     * @param {agent_taskUpsertArgs} args - Arguments to update or create a Agent_task.
     * @example
     * // Update or create a Agent_task
     * const agent_task = await prisma.agent_task.upsert({
     *   create: {
     *     // ... data to create a Agent_task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agent_task we want to update
     *   }
     * })
     **/
    upsert<T extends agent_taskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, agent_taskUpsertArgs<ExtArgs>>,
    ): Prisma__agent_taskClient<$Result.GetResult<Prisma.$agent_taskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Agent_tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agent_taskCountArgs} args - Arguments to filter Agent_tasks to count.
     * @example
     * // Count the number of Agent_tasks
     * const count = await prisma.agent_task.count({
     *   where: {
     *     // ... the filter for the Agent_tasks we want to count
     *   }
     * })
     **/
    count<T extends agent_taskCountArgs>(
      args?: Subset<T, agent_taskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Agent_taskCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Agent_task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Agent_taskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Agent_taskAggregateArgs>(
      args: Subset<T, Agent_taskAggregateArgs>,
    ): Prisma.PrismaPromise<GetAgent_taskAggregateType<T>>;

    /**
     * Group by Agent_task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agent_taskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends agent_taskGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: agent_taskGroupByArgs['orderBy'] }
        : { orderBy?: agent_taskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, agent_taskGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAgent_taskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the agent_task model
     */
    readonly fields: agent_taskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for agent_task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__agent_taskClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    intelligent_agent<T extends intelligent_agentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, intelligent_agentDefaultArgs<ExtArgs>>,
    ): Prisma__intelligent_agentClient<
      $Result.GetResult<Prisma.$intelligent_agentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    task<T extends taskDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, taskDefaultArgs<ExtArgs>>,
    ): Prisma__taskClient<
      $Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the agent_task model
   */
  interface agent_taskFieldRefs {
    readonly id: FieldRef<'agent_task', 'String'>;
    readonly task_id: FieldRef<'agent_task', 'String'>;
    readonly agent_id: FieldRef<'agent_task', 'String'>;
    readonly status: FieldRef<'agent_task', 'String'>;
    readonly is_active: FieldRef<'agent_task', 'Boolean'>;
    readonly created_at: FieldRef<'agent_task', 'DateTime'>;
    readonly updated_at: FieldRef<'agent_task', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * agent_task findUnique
   */
  export type agent_taskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_task
     */
    select?: agent_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agent_taskInclude<ExtArgs> | null;
    /**
     * Filter, which agent_task to fetch.
     */
    where: agent_taskWhereUniqueInput;
  };

  /**
   * agent_task findUniqueOrThrow
   */
  export type agent_taskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_task
     */
    select?: agent_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agent_taskInclude<ExtArgs> | null;
    /**
     * Filter, which agent_task to fetch.
     */
    where: agent_taskWhereUniqueInput;
  };

  /**
   * agent_task findFirst
   */
  export type agent_taskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_task
     */
    select?: agent_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agent_taskInclude<ExtArgs> | null;
    /**
     * Filter, which agent_task to fetch.
     */
    where?: agent_taskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agent_tasks to fetch.
     */
    orderBy?: agent_taskOrderByWithRelationInput | agent_taskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for agent_tasks.
     */
    cursor?: agent_taskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agent_tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agent_tasks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of agent_tasks.
     */
    distinct?: Agent_taskScalarFieldEnum | Agent_taskScalarFieldEnum[];
  };

  /**
   * agent_task findFirstOrThrow
   */
  export type agent_taskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_task
     */
    select?: agent_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agent_taskInclude<ExtArgs> | null;
    /**
     * Filter, which agent_task to fetch.
     */
    where?: agent_taskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agent_tasks to fetch.
     */
    orderBy?: agent_taskOrderByWithRelationInput | agent_taskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for agent_tasks.
     */
    cursor?: agent_taskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agent_tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agent_tasks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of agent_tasks.
     */
    distinct?: Agent_taskScalarFieldEnum | Agent_taskScalarFieldEnum[];
  };

  /**
   * agent_task findMany
   */
  export type agent_taskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_task
     */
    select?: agent_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agent_taskInclude<ExtArgs> | null;
    /**
     * Filter, which agent_tasks to fetch.
     */
    where?: agent_taskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of agent_tasks to fetch.
     */
    orderBy?: agent_taskOrderByWithRelationInput | agent_taskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing agent_tasks.
     */
    cursor?: agent_taskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` agent_tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` agent_tasks.
     */
    skip?: number;
    distinct?: Agent_taskScalarFieldEnum | Agent_taskScalarFieldEnum[];
  };

  /**
   * agent_task create
   */
  export type agent_taskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_task
     */
    select?: agent_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agent_taskInclude<ExtArgs> | null;
    /**
     * The data needed to create a agent_task.
     */
    data: XOR<agent_taskCreateInput, agent_taskUncheckedCreateInput>;
  };

  /**
   * agent_task createMany
   */
  export type agent_taskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many agent_tasks.
     */
    data: agent_taskCreateManyInput | agent_taskCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * agent_task update
   */
  export type agent_taskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_task
     */
    select?: agent_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agent_taskInclude<ExtArgs> | null;
    /**
     * The data needed to update a agent_task.
     */
    data: XOR<agent_taskUpdateInput, agent_taskUncheckedUpdateInput>;
    /**
     * Choose, which agent_task to update.
     */
    where: agent_taskWhereUniqueInput;
  };

  /**
   * agent_task updateMany
   */
  export type agent_taskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update agent_tasks.
     */
    data: XOR<agent_taskUpdateManyMutationInput, agent_taskUncheckedUpdateManyInput>;
    /**
     * Filter which agent_tasks to update
     */
    where?: agent_taskWhereInput;
  };

  /**
   * agent_task upsert
   */
  export type agent_taskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_task
     */
    select?: agent_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agent_taskInclude<ExtArgs> | null;
    /**
     * The filter to search for the agent_task to update in case it exists.
     */
    where: agent_taskWhereUniqueInput;
    /**
     * In case the agent_task found by the `where` argument doesn't exist, create a new agent_task with this data.
     */
    create: XOR<agent_taskCreateInput, agent_taskUncheckedCreateInput>;
    /**
     * In case the agent_task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<agent_taskUpdateInput, agent_taskUncheckedUpdateInput>;
  };

  /**
   * agent_task delete
   */
  export type agent_taskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_task
     */
    select?: agent_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agent_taskInclude<ExtArgs> | null;
    /**
     * Filter which agent_task to delete.
     */
    where: agent_taskWhereUniqueInput;
  };

  /**
   * agent_task deleteMany
   */
  export type agent_taskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agent_tasks to delete
     */
    where?: agent_taskWhereInput;
  };

  /**
   * agent_task without action
   */
  export type agent_taskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_task
     */
    select?: agent_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agent_taskInclude<ExtArgs> | null;
  };

  /**
   * Model goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null;
    _min: GoalMinAggregateOutputType | null;
    _max: GoalMaxAggregateOutputType | null;
  };

  export type GoalMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    status: string | null;
    user_id: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type GoalMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    status: string | null;
    user_id: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type GoalCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    status: number;
    user_id: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type GoalMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    user_id?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type GoalMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    user_id?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type GoalCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    user_id?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goal to aggregate.
     */
    where?: goalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of goals to fetch.
     */
    orderBy?: goalOrderByWithRelationInput | goalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: goalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` goals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` goals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned goals
     **/
    _count?: true | GoalCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: GoalMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: GoalMaxAggregateInputType;
  };

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
    [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>;
  };

  export type goalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: goalWhereInput;
    orderBy?: goalOrderByWithAggregationInput | goalOrderByWithAggregationInput[];
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum;
    having?: goalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GoalCountAggregateInputType | true;
    _min?: GoalMinAggregateInputType;
    _max?: GoalMaxAggregateInputType;
  };

  export type GoalGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    status: string;
    user_id: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: GoalCountAggregateOutputType | null;
    _min: GoalMinAggregateOutputType | null;
    _max: GoalMaxAggregateOutputType | null;
  };

  type GetGoalGroupByPayload<T extends goalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> & {
        [P in keyof T & keyof GoalGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
          : GetScalarType<T[P], GoalGroupByOutputType[P]>;
      }
    >
  >;

  export type goalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      status?: boolean;
      user_id?: boolean;
      is_active?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
      task?: boolean | goal$taskArgs<ExtArgs>;
      _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['goal']
  >;

  export type goalSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    status?: boolean;
    user_id?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type goalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
    task?: boolean | goal$taskArgs<ExtArgs>;
    _count?: boolean | GoalCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $goalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'goal';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
      task: Prisma.$taskPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        status: string;
        user_id: string;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['goal']
    >;
    composites: {};
  };

  type goalGetPayload<S extends boolean | null | undefined | goalDefaultArgs> = $Result.GetResult<
    Prisma.$goalPayload,
    S
  >;

  type goalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    goalFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: GoalCountAggregateInputType | true;
  };

  export interface goalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['goal']; meta: { name: 'goal' } };
    /**
     * Find zero or one Goal that matches the filter.
     * @param {goalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends goalFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, goalFindUniqueArgs<ExtArgs>>,
    ): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Goal that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {goalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends goalFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, goalFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends goalFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, goalFindFirstArgs<ExtArgs>>,
    ): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends goalFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, goalFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     *
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends goalFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, goalFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Goal.
     * @param {goalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     *
     **/
    create<T extends goalCreateArgs<ExtArgs>>(
      args: SelectSubset<T, goalCreateArgs<ExtArgs>>,
    ): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Goals.
     *     @param {goalCreateManyArgs} args - Arguments to create many Goals.
     *     @example
     *     // Create many Goals
     *     const goal = await prisma.goal.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends goalCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, goalCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Goal.
     * @param {goalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     *
     **/
    delete<T extends goalDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, goalDeleteArgs<ExtArgs>>,
    ): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Goal.
     * @param {goalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends goalUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, goalUpdateArgs<ExtArgs>>,
    ): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Goals.
     * @param {goalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends goalDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, goalDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends goalUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, goalUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Goal.
     * @param {goalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     **/
    upsert<T extends goalUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, goalUpsertArgs<ExtArgs>>,
    ): Prisma__goalClient<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
     **/
    count<T extends goalCountArgs>(
      args?: Subset<T, goalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends GoalAggregateArgs>(
      args: Subset<T, GoalAggregateArgs>,
    ): Prisma.PrismaPromise<GetGoalAggregateType<T>>;

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {goalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends goalGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: goalGroupByArgs['orderBy'] }
        : { orderBy?: goalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, goalGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the goal model
     */
    readonly fields: goalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__goalClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    task<T extends goal$taskArgs<ExtArgs> = {}>(
      args?: Subset<T, goal$taskArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the goal model
   */
  interface goalFieldRefs {
    readonly id: FieldRef<'goal', 'String'>;
    readonly name: FieldRef<'goal', 'String'>;
    readonly description: FieldRef<'goal', 'String'>;
    readonly status: FieldRef<'goal', 'String'>;
    readonly user_id: FieldRef<'goal', 'String'>;
    readonly is_active: FieldRef<'goal', 'Boolean'>;
    readonly created_at: FieldRef<'goal', 'DateTime'>;
    readonly updated_at: FieldRef<'goal', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * goal findUnique
   */
  export type goalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goalInclude<ExtArgs> | null;
    /**
     * Filter, which goal to fetch.
     */
    where: goalWhereUniqueInput;
  };

  /**
   * goal findUniqueOrThrow
   */
  export type goalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goalInclude<ExtArgs> | null;
    /**
     * Filter, which goal to fetch.
     */
    where: goalWhereUniqueInput;
  };

  /**
   * goal findFirst
   */
  export type goalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goalInclude<ExtArgs> | null;
    /**
     * Filter, which goal to fetch.
     */
    where?: goalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of goals to fetch.
     */
    orderBy?: goalOrderByWithRelationInput | goalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for goals.
     */
    cursor?: goalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` goals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` goals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[];
  };

  /**
   * goal findFirstOrThrow
   */
  export type goalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goalInclude<ExtArgs> | null;
    /**
     * Filter, which goal to fetch.
     */
    where?: goalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of goals to fetch.
     */
    orderBy?: goalOrderByWithRelationInput | goalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for goals.
     */
    cursor?: goalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` goals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` goals.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[];
  };

  /**
   * goal findMany
   */
  export type goalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goalInclude<ExtArgs> | null;
    /**
     * Filter, which goals to fetch.
     */
    where?: goalWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of goals to fetch.
     */
    orderBy?: goalOrderByWithRelationInput | goalOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing goals.
     */
    cursor?: goalWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` goals from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` goals.
     */
    skip?: number;
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[];
  };

  /**
   * goal create
   */
  export type goalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goalInclude<ExtArgs> | null;
    /**
     * The data needed to create a goal.
     */
    data: XOR<goalCreateInput, goalUncheckedCreateInput>;
  };

  /**
   * goal createMany
   */
  export type goalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many goals.
     */
    data: goalCreateManyInput | goalCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * goal update
   */
  export type goalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goalInclude<ExtArgs> | null;
    /**
     * The data needed to update a goal.
     */
    data: XOR<goalUpdateInput, goalUncheckedUpdateInput>;
    /**
     * Choose, which goal to update.
     */
    where: goalWhereUniqueInput;
  };

  /**
   * goal updateMany
   */
  export type goalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update goals.
     */
    data: XOR<goalUpdateManyMutationInput, goalUncheckedUpdateManyInput>;
    /**
     * Filter which goals to update
     */
    where?: goalWhereInput;
  };

  /**
   * goal upsert
   */
  export type goalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goalInclude<ExtArgs> | null;
    /**
     * The filter to search for the goal to update in case it exists.
     */
    where: goalWhereUniqueInput;
    /**
     * In case the goal found by the `where` argument doesn't exist, create a new goal with this data.
     */
    create: XOR<goalCreateInput, goalUncheckedCreateInput>;
    /**
     * In case the goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<goalUpdateInput, goalUncheckedUpdateInput>;
  };

  /**
   * goal delete
   */
  export type goalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goalInclude<ExtArgs> | null;
    /**
     * Filter which goal to delete.
     */
    where: goalWhereUniqueInput;
  };

  /**
   * goal deleteMany
   */
  export type goalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which goals to delete
     */
    where?: goalWhereInput;
  };

  /**
   * goal.task
   */
  export type goal$taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    where?: taskWhereInput;
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[];
    cursor?: taskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
  };

  /**
   * goal without action
   */
  export type goalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goalInclude<ExtArgs> | null;
  };

  /**
   * Model intelligent_agent
   */

  export type AggregateIntelligent_agent = {
    _count: Intelligent_agentCountAggregateOutputType | null;
    _min: Intelligent_agentMinAggregateOutputType | null;
    _max: Intelligent_agentMaxAggregateOutputType | null;
  };

  export type Intelligent_agentMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    status: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Intelligent_agentMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    status: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Intelligent_agentCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    status: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Intelligent_agentMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Intelligent_agentMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Intelligent_agentCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Intelligent_agentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which intelligent_agent to aggregate.
     */
    where?: intelligent_agentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of intelligent_agents to fetch.
     */
    orderBy?: intelligent_agentOrderByWithRelationInput | intelligent_agentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: intelligent_agentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` intelligent_agents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` intelligent_agents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned intelligent_agents
     **/
    _count?: true | Intelligent_agentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Intelligent_agentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Intelligent_agentMaxAggregateInputType;
  };

  export type GetIntelligent_agentAggregateType<T extends Intelligent_agentAggregateArgs> = {
    [P in keyof T & keyof AggregateIntelligent_agent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntelligent_agent[P]>
      : GetScalarType<T[P], AggregateIntelligent_agent[P]>;
  };

  export type intelligent_agentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: intelligent_agentWhereInput;
    orderBy?: intelligent_agentOrderByWithAggregationInput | intelligent_agentOrderByWithAggregationInput[];
    by: Intelligent_agentScalarFieldEnum[] | Intelligent_agentScalarFieldEnum;
    having?: intelligent_agentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Intelligent_agentCountAggregateInputType | true;
    _min?: Intelligent_agentMinAggregateInputType;
    _max?: Intelligent_agentMaxAggregateInputType;
  };

  export type Intelligent_agentGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    status: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: Intelligent_agentCountAggregateOutputType | null;
    _min: Intelligent_agentMinAggregateOutputType | null;
    _max: Intelligent_agentMaxAggregateOutputType | null;
  };

  type GetIntelligent_agentGroupByPayload<T extends intelligent_agentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Intelligent_agentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Intelligent_agentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Intelligent_agentGroupByOutputType[P]>
          : GetScalarType<T[P], Intelligent_agentGroupByOutputType[P]>;
      }
    >
  >;

  export type intelligent_agentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        description?: boolean;
        status?: boolean;
        is_active?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        agent_task?: boolean | intelligent_agent$agent_taskArgs<ExtArgs>;
        _count?: boolean | Intelligent_agentCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['intelligent_agent']
    >;

  export type intelligent_agentSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    status?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type intelligent_agentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent_task?: boolean | intelligent_agent$agent_taskArgs<ExtArgs>;
    _count?: boolean | Intelligent_agentCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $intelligent_agentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'intelligent_agent';
    objects: {
      agent_task: Prisma.$agent_taskPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        status: string;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['intelligent_agent']
    >;
    composites: {};
  };

  type intelligent_agentGetPayload<S extends boolean | null | undefined | intelligent_agentDefaultArgs> =
    $Result.GetResult<Prisma.$intelligent_agentPayload, S>;

  type intelligent_agentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    intelligent_agentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: Intelligent_agentCountAggregateInputType | true;
  };

  export interface intelligent_agentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['intelligent_agent']; meta: { name: 'intelligent_agent' } };
    /**
     * Find zero or one Intelligent_agent that matches the filter.
     * @param {intelligent_agentFindUniqueArgs} args - Arguments to find a Intelligent_agent
     * @example
     * // Get one Intelligent_agent
     * const intelligent_agent = await prisma.intelligent_agent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends intelligent_agentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, intelligent_agentFindUniqueArgs<ExtArgs>>,
    ): Prisma__intelligent_agentClient<
      $Result.GetResult<Prisma.$intelligent_agentPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Intelligent_agent that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {intelligent_agentFindUniqueOrThrowArgs} args - Arguments to find a Intelligent_agent
     * @example
     * // Get one Intelligent_agent
     * const intelligent_agent = await prisma.intelligent_agent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends intelligent_agentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, intelligent_agentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__intelligent_agentClient<
      $Result.GetResult<Prisma.$intelligent_agentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Intelligent_agent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intelligent_agentFindFirstArgs} args - Arguments to find a Intelligent_agent
     * @example
     * // Get one Intelligent_agent
     * const intelligent_agent = await prisma.intelligent_agent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends intelligent_agentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, intelligent_agentFindFirstArgs<ExtArgs>>,
    ): Prisma__intelligent_agentClient<
      $Result.GetResult<Prisma.$intelligent_agentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Intelligent_agent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intelligent_agentFindFirstOrThrowArgs} args - Arguments to find a Intelligent_agent
     * @example
     * // Get one Intelligent_agent
     * const intelligent_agent = await prisma.intelligent_agent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends intelligent_agentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, intelligent_agentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__intelligent_agentClient<
      $Result.GetResult<Prisma.$intelligent_agentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Intelligent_agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intelligent_agentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Intelligent_agents
     * const intelligent_agents = await prisma.intelligent_agent.findMany()
     *
     * // Get first 10 Intelligent_agents
     * const intelligent_agents = await prisma.intelligent_agent.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const intelligent_agentWithIdOnly = await prisma.intelligent_agent.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends intelligent_agentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, intelligent_agentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$intelligent_agentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Intelligent_agent.
     * @param {intelligent_agentCreateArgs} args - Arguments to create a Intelligent_agent.
     * @example
     * // Create one Intelligent_agent
     * const Intelligent_agent = await prisma.intelligent_agent.create({
     *   data: {
     *     // ... data to create a Intelligent_agent
     *   }
     * })
     *
     **/
    create<T extends intelligent_agentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, intelligent_agentCreateArgs<ExtArgs>>,
    ): Prisma__intelligent_agentClient<
      $Result.GetResult<Prisma.$intelligent_agentPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Intelligent_agents.
     *     @param {intelligent_agentCreateManyArgs} args - Arguments to create many Intelligent_agents.
     *     @example
     *     // Create many Intelligent_agents
     *     const intelligent_agent = await prisma.intelligent_agent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends intelligent_agentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, intelligent_agentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Intelligent_agent.
     * @param {intelligent_agentDeleteArgs} args - Arguments to delete one Intelligent_agent.
     * @example
     * // Delete one Intelligent_agent
     * const Intelligent_agent = await prisma.intelligent_agent.delete({
     *   where: {
     *     // ... filter to delete one Intelligent_agent
     *   }
     * })
     *
     **/
    delete<T extends intelligent_agentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, intelligent_agentDeleteArgs<ExtArgs>>,
    ): Prisma__intelligent_agentClient<
      $Result.GetResult<Prisma.$intelligent_agentPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Intelligent_agent.
     * @param {intelligent_agentUpdateArgs} args - Arguments to update one Intelligent_agent.
     * @example
     * // Update one Intelligent_agent
     * const intelligent_agent = await prisma.intelligent_agent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends intelligent_agentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, intelligent_agentUpdateArgs<ExtArgs>>,
    ): Prisma__intelligent_agentClient<
      $Result.GetResult<Prisma.$intelligent_agentPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Intelligent_agents.
     * @param {intelligent_agentDeleteManyArgs} args - Arguments to filter Intelligent_agents to delete.
     * @example
     * // Delete a few Intelligent_agents
     * const { count } = await prisma.intelligent_agent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends intelligent_agentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, intelligent_agentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Intelligent_agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intelligent_agentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Intelligent_agents
     * const intelligent_agent = await prisma.intelligent_agent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends intelligent_agentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, intelligent_agentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Intelligent_agent.
     * @param {intelligent_agentUpsertArgs} args - Arguments to update or create a Intelligent_agent.
     * @example
     * // Update or create a Intelligent_agent
     * const intelligent_agent = await prisma.intelligent_agent.upsert({
     *   create: {
     *     // ... data to create a Intelligent_agent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Intelligent_agent we want to update
     *   }
     * })
     **/
    upsert<T extends intelligent_agentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, intelligent_agentUpsertArgs<ExtArgs>>,
    ): Prisma__intelligent_agentClient<
      $Result.GetResult<Prisma.$intelligent_agentPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Intelligent_agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intelligent_agentCountArgs} args - Arguments to filter Intelligent_agents to count.
     * @example
     * // Count the number of Intelligent_agents
     * const count = await prisma.intelligent_agent.count({
     *   where: {
     *     // ... the filter for the Intelligent_agents we want to count
     *   }
     * })
     **/
    count<T extends intelligent_agentCountArgs>(
      args?: Subset<T, intelligent_agentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Intelligent_agentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Intelligent_agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Intelligent_agentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Intelligent_agentAggregateArgs>(
      args: Subset<T, Intelligent_agentAggregateArgs>,
    ): Prisma.PrismaPromise<GetIntelligent_agentAggregateType<T>>;

    /**
     * Group by Intelligent_agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {intelligent_agentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends intelligent_agentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: intelligent_agentGroupByArgs['orderBy'] }
        : { orderBy?: intelligent_agentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, intelligent_agentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetIntelligent_agentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the intelligent_agent model
     */
    readonly fields: intelligent_agentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for intelligent_agent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__intelligent_agentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    agent_task<T extends intelligent_agent$agent_taskArgs<ExtArgs> = {}>(
      args?: Subset<T, intelligent_agent$agent_taskArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agent_taskPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the intelligent_agent model
   */
  interface intelligent_agentFieldRefs {
    readonly id: FieldRef<'intelligent_agent', 'String'>;
    readonly name: FieldRef<'intelligent_agent', 'String'>;
    readonly description: FieldRef<'intelligent_agent', 'String'>;
    readonly status: FieldRef<'intelligent_agent', 'String'>;
    readonly is_active: FieldRef<'intelligent_agent', 'Boolean'>;
    readonly created_at: FieldRef<'intelligent_agent', 'DateTime'>;
    readonly updated_at: FieldRef<'intelligent_agent', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * intelligent_agent findUnique
   */
  export type intelligent_agentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intelligent_agent
     */
    select?: intelligent_agentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: intelligent_agentInclude<ExtArgs> | null;
    /**
     * Filter, which intelligent_agent to fetch.
     */
    where: intelligent_agentWhereUniqueInput;
  };

  /**
   * intelligent_agent findUniqueOrThrow
   */
  export type intelligent_agentFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the intelligent_agent
     */
    select?: intelligent_agentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: intelligent_agentInclude<ExtArgs> | null;
    /**
     * Filter, which intelligent_agent to fetch.
     */
    where: intelligent_agentWhereUniqueInput;
  };

  /**
   * intelligent_agent findFirst
   */
  export type intelligent_agentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intelligent_agent
     */
    select?: intelligent_agentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: intelligent_agentInclude<ExtArgs> | null;
    /**
     * Filter, which intelligent_agent to fetch.
     */
    where?: intelligent_agentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of intelligent_agents to fetch.
     */
    orderBy?: intelligent_agentOrderByWithRelationInput | intelligent_agentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for intelligent_agents.
     */
    cursor?: intelligent_agentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` intelligent_agents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` intelligent_agents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of intelligent_agents.
     */
    distinct?: Intelligent_agentScalarFieldEnum | Intelligent_agentScalarFieldEnum[];
  };

  /**
   * intelligent_agent findFirstOrThrow
   */
  export type intelligent_agentFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the intelligent_agent
     */
    select?: intelligent_agentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: intelligent_agentInclude<ExtArgs> | null;
    /**
     * Filter, which intelligent_agent to fetch.
     */
    where?: intelligent_agentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of intelligent_agents to fetch.
     */
    orderBy?: intelligent_agentOrderByWithRelationInput | intelligent_agentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for intelligent_agents.
     */
    cursor?: intelligent_agentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` intelligent_agents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` intelligent_agents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of intelligent_agents.
     */
    distinct?: Intelligent_agentScalarFieldEnum | Intelligent_agentScalarFieldEnum[];
  };

  /**
   * intelligent_agent findMany
   */
  export type intelligent_agentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intelligent_agent
     */
    select?: intelligent_agentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: intelligent_agentInclude<ExtArgs> | null;
    /**
     * Filter, which intelligent_agents to fetch.
     */
    where?: intelligent_agentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of intelligent_agents to fetch.
     */
    orderBy?: intelligent_agentOrderByWithRelationInput | intelligent_agentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing intelligent_agents.
     */
    cursor?: intelligent_agentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` intelligent_agents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` intelligent_agents.
     */
    skip?: number;
    distinct?: Intelligent_agentScalarFieldEnum | Intelligent_agentScalarFieldEnum[];
  };

  /**
   * intelligent_agent create
   */
  export type intelligent_agentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intelligent_agent
     */
    select?: intelligent_agentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: intelligent_agentInclude<ExtArgs> | null;
    /**
     * The data needed to create a intelligent_agent.
     */
    data: XOR<intelligent_agentCreateInput, intelligent_agentUncheckedCreateInput>;
  };

  /**
   * intelligent_agent createMany
   */
  export type intelligent_agentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many intelligent_agents.
     */
    data: intelligent_agentCreateManyInput | intelligent_agentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * intelligent_agent update
   */
  export type intelligent_agentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intelligent_agent
     */
    select?: intelligent_agentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: intelligent_agentInclude<ExtArgs> | null;
    /**
     * The data needed to update a intelligent_agent.
     */
    data: XOR<intelligent_agentUpdateInput, intelligent_agentUncheckedUpdateInput>;
    /**
     * Choose, which intelligent_agent to update.
     */
    where: intelligent_agentWhereUniqueInput;
  };

  /**
   * intelligent_agent updateMany
   */
  export type intelligent_agentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update intelligent_agents.
     */
    data: XOR<intelligent_agentUpdateManyMutationInput, intelligent_agentUncheckedUpdateManyInput>;
    /**
     * Filter which intelligent_agents to update
     */
    where?: intelligent_agentWhereInput;
  };

  /**
   * intelligent_agent upsert
   */
  export type intelligent_agentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intelligent_agent
     */
    select?: intelligent_agentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: intelligent_agentInclude<ExtArgs> | null;
    /**
     * The filter to search for the intelligent_agent to update in case it exists.
     */
    where: intelligent_agentWhereUniqueInput;
    /**
     * In case the intelligent_agent found by the `where` argument doesn't exist, create a new intelligent_agent with this data.
     */
    create: XOR<intelligent_agentCreateInput, intelligent_agentUncheckedCreateInput>;
    /**
     * In case the intelligent_agent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<intelligent_agentUpdateInput, intelligent_agentUncheckedUpdateInput>;
  };

  /**
   * intelligent_agent delete
   */
  export type intelligent_agentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intelligent_agent
     */
    select?: intelligent_agentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: intelligent_agentInclude<ExtArgs> | null;
    /**
     * Filter which intelligent_agent to delete.
     */
    where: intelligent_agentWhereUniqueInput;
  };

  /**
   * intelligent_agent deleteMany
   */
  export type intelligent_agentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which intelligent_agents to delete
     */
    where?: intelligent_agentWhereInput;
  };

  /**
   * intelligent_agent.agent_task
   */
  export type intelligent_agent$agent_taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_task
     */
    select?: agent_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agent_taskInclude<ExtArgs> | null;
    where?: agent_taskWhereInput;
    orderBy?: agent_taskOrderByWithRelationInput | agent_taskOrderByWithRelationInput[];
    cursor?: agent_taskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Agent_taskScalarFieldEnum | Agent_taskScalarFieldEnum[];
  };

  /**
   * intelligent_agent without action
   */
  export type intelligent_agentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the intelligent_agent
     */
    select?: intelligent_agentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: intelligent_agentInclude<ExtArgs> | null;
  };

  /**
   * Model organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  export type OrganizationMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    is_active: boolean | null;
    organization_type: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OrganizationMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    is_active: boolean | null;
    organization_type: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type OrganizationCountAggregateOutputType = {
    id: number;
    description: number;
    is_active: number;
    organization_type: number;
    name: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type OrganizationMinAggregateInputType = {
    id?: true;
    description?: true;
    is_active?: true;
    organization_type?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OrganizationMaxAggregateInputType = {
    id?: true;
    description?: true;
    is_active?: true;
    organization_type?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type OrganizationCountAggregateInputType = {
    id?: true;
    description?: true;
    is_active?: true;
    organization_type?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organization to aggregate.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned organizations
     **/
    _count?: true | OrganizationCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrganizationMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrganizationMaxAggregateInputType;
  };

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
    [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>;
  };

  export type organizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: organizationWhereInput;
    orderBy?: organizationOrderByWithAggregationInput | organizationOrderByWithAggregationInput[];
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum;
    having?: organizationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrganizationCountAggregateInputType | true;
    _min?: OrganizationMinAggregateInputType;
    _max?: OrganizationMaxAggregateInputType;
  };

  export type OrganizationGroupByOutputType = {
    id: string;
    description: string | null;
    is_active: boolean | null;
    organization_type: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    _count: OrganizationCountAggregateOutputType | null;
    _min: OrganizationMinAggregateOutputType | null;
    _max: OrganizationMaxAggregateOutputType | null;
  };

  type GetOrganizationGroupByPayload<T extends organizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> & {
        [P in keyof T & keyof OrganizationGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
          : GetScalarType<T[P], OrganizationGroupByOutputType[P]>;
      }
    >
  >;

  export type organizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        is_active?: boolean;
        organization_type?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | organization$userArgs<ExtArgs>;
        _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['organization']
    >;

  export type organizationSelectScalar = {
    id?: boolean;
    description?: boolean;
    is_active?: boolean;
    organization_type?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type organizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | organization$userArgs<ExtArgs>;
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $organizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'organization';
    objects: {
      user: Prisma.$userPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        is_active: boolean | null;
        organization_type: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['organization']
    >;
    composites: {};
  };

  type organizationGetPayload<S extends boolean | null | undefined | organizationDefaultArgs> = $Result.GetResult<
    Prisma.$organizationPayload,
    S
  >;

  type organizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    organizationFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: OrganizationCountAggregateInputType | true;
  };

  export interface organizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['organization']; meta: { name: 'organization' } };
    /**
     * Find zero or one Organization that matches the filter.
     * @param {organizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends organizationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, organizationFindUniqueArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Organization that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {organizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends organizationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends organizationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends organizationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     *
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends organizationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Organization.
     * @param {organizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     *
     **/
    create<T extends organizationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationCreateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Organizations.
     *     @param {organizationCreateManyArgs} args - Arguments to create many Organizations.
     *     @example
     *     // Create many Organizations
     *     const organization = await prisma.organization.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends organizationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Organization.
     * @param {organizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     *
     **/
    delete<T extends organizationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, organizationDeleteArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Organization.
     * @param {organizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends organizationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Organizations.
     * @param {organizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends organizationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, organizationDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends organizationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Organization.
     * @param {organizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     **/
    upsert<T extends organizationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, organizationUpsertArgs<ExtArgs>>,
    ): Prisma__organizationClient<$Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
     **/
    count<T extends organizationCountArgs>(
      args?: Subset<T, organizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrganizationAggregateArgs>(
      args: Subset<T, OrganizationAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>;

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {organizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends organizationGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: organizationGroupByArgs['orderBy'] }
        : { orderBy?: organizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, organizationGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the organization model
     */
    readonly fields: organizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__organizationClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends organization$userArgs<ExtArgs> = {}>(
      args?: Subset<T, organization$userArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the organization model
   */
  interface organizationFieldRefs {
    readonly id: FieldRef<'organization', 'String'>;
    readonly description: FieldRef<'organization', 'String'>;
    readonly is_active: FieldRef<'organization', 'Boolean'>;
    readonly organization_type: FieldRef<'organization', 'String'>;
    readonly name: FieldRef<'organization', 'String'>;
    readonly created_at: FieldRef<'organization', 'DateTime'>;
    readonly updated_at: FieldRef<'organization', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * organization findUnique
   */
  export type organizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findUniqueOrThrow
   */
  export type organizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization findFirst
   */
  export type organizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findFirstOrThrow
   */
  export type organizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organization to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization findMany
   */
  export type organizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter, which organizations to fetch.
     */
    where?: organizationWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of organizations to fetch.
     */
    orderBy?: organizationOrderByWithRelationInput | organizationOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing organizations.
     */
    cursor?: organizationWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` organizations from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` organizations.
     */
    skip?: number;
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[];
  };

  /**
   * organization create
   */
  export type organizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to create a organization.
     */
    data: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
  };

  /**
   * organization createMany
   */
  export type organizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many organizations.
     */
    data: organizationCreateManyInput | organizationCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * organization update
   */
  export type organizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The data needed to update a organization.
     */
    data: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
    /**
     * Choose, which organization to update.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization updateMany
   */
  export type organizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update organizations.
     */
    data: XOR<organizationUpdateManyMutationInput, organizationUncheckedUpdateManyInput>;
    /**
     * Filter which organizations to update
     */
    where?: organizationWhereInput;
  };

  /**
   * organization upsert
   */
  export type organizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * The filter to search for the organization to update in case it exists.
     */
    where: organizationWhereUniqueInput;
    /**
     * In case the organization found by the `where` argument doesn't exist, create a new organization with this data.
     */
    create: XOR<organizationCreateInput, organizationUncheckedCreateInput>;
    /**
     * In case the organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<organizationUpdateInput, organizationUncheckedUpdateInput>;
  };

  /**
   * organization delete
   */
  export type organizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    /**
     * Filter which organization to delete.
     */
    where: organizationWhereUniqueInput;
  };

  /**
   * organization deleteMany
   */
  export type organizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which organizations to delete
     */
    where?: organizationWhereInput;
  };

  /**
   * organization.user
   */
  export type organization$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    where?: userWhereInput;
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    cursor?: userWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * organization without action
   */
  export type organizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
  };

  /**
   * Model task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
  };

  export type TaskMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    status: string | null;
    goal_id: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TaskMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    status: string | null;
    goal_id: string | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TaskCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    status: number;
    goal_id: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TaskMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    goal_id?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TaskMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    goal_id?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TaskCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    status?: true;
    goal_id?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which task to aggregate.
     */
    where?: taskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: taskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tasks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned tasks
     **/
    _count?: true | TaskCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TaskMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TaskMaxAggregateInputType;
  };

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
    [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>;
  };

  export type taskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: taskWhereInput;
    orderBy?: taskOrderByWithAggregationInput | taskOrderByWithAggregationInput[];
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum;
    having?: taskScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TaskCountAggregateInputType | true;
    _min?: TaskMinAggregateInputType;
    _max?: TaskMaxAggregateInputType;
  };

  export type TaskGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    status: string;
    goal_id: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: TaskCountAggregateOutputType | null;
    _min: TaskMinAggregateOutputType | null;
    _max: TaskMaxAggregateOutputType | null;
  };

  type GetTaskGroupByPayload<T extends taskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TaskGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
          : GetScalarType<T[P], TaskGroupByOutputType[P]>;
      }
    >
  >;

  export type taskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      status?: boolean;
      goal_id?: boolean;
      is_active?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      agent_task?: boolean | task$agent_taskArgs<ExtArgs>;
      goal?: boolean | goalDefaultArgs<ExtArgs>;
      _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['task']
  >;

  export type taskSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    status?: boolean;
    goal_id?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type taskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agent_task?: boolean | task$agent_taskArgs<ExtArgs>;
    goal?: boolean | goalDefaultArgs<ExtArgs>;
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $taskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'task';
    objects: {
      agent_task: Prisma.$agent_taskPayload<ExtArgs>[];
      goal: Prisma.$goalPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string | null;
        status: string;
        goal_id: string;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['task']
    >;
    composites: {};
  };

  type taskGetPayload<S extends boolean | null | undefined | taskDefaultArgs> = $Result.GetResult<
    Prisma.$taskPayload,
    S
  >;

  type taskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    taskFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: TaskCountAggregateInputType | true;
  };

  export interface taskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['task']; meta: { name: 'task' } };
    /**
     * Find zero or one Task that matches the filter.
     * @param {taskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends taskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, taskFindUniqueArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Task that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {taskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends taskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, taskFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends taskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, taskFindFirstArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends taskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, taskFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     *
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends taskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, taskFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Task.
     * @param {taskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     *
     **/
    create<T extends taskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, taskCreateArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Tasks.
     *     @param {taskCreateManyArgs} args - Arguments to create many Tasks.
     *     @example
     *     // Create many Tasks
     *     const task = await prisma.task.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends taskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, taskCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Task.
     * @param {taskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     *
     **/
    delete<T extends taskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, taskDeleteArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Task.
     * @param {taskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends taskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, taskUpdateArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Tasks.
     * @param {taskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends taskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, taskDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends taskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, taskUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Task.
     * @param {taskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     **/
    upsert<T extends taskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, taskUpsertArgs<ExtArgs>>,
    ): Prisma__taskClient<$Result.GetResult<Prisma.$taskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
     **/
    count<T extends taskCountArgs>(
      args?: Subset<T, taskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends TaskAggregateArgs>(
      args: Subset<T, TaskAggregateArgs>,
    ): Prisma.PrismaPromise<GetTaskAggregateType<T>>;

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {taskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends taskGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: taskGroupByArgs['orderBy'] }
        : { orderBy?: taskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, taskGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the task model
     */
    readonly fields: taskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__taskClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    agent_task<T extends task$agent_taskArgs<ExtArgs> = {}>(
      args?: Subset<T, task$agent_taskArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agent_taskPayload<ExtArgs>, T, 'findMany'> | Null>;

    goal<T extends goalDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, goalDefaultArgs<ExtArgs>>,
    ): Prisma__goalClient<
      $Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the task model
   */
  interface taskFieldRefs {
    readonly id: FieldRef<'task', 'String'>;
    readonly name: FieldRef<'task', 'String'>;
    readonly description: FieldRef<'task', 'String'>;
    readonly status: FieldRef<'task', 'String'>;
    readonly goal_id: FieldRef<'task', 'String'>;
    readonly is_active: FieldRef<'task', 'Boolean'>;
    readonly created_at: FieldRef<'task', 'DateTime'>;
    readonly updated_at: FieldRef<'task', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * task findUnique
   */
  export type taskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput;
  };

  /**
   * task findUniqueOrThrow
   */
  export type taskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * Filter, which task to fetch.
     */
    where: taskWhereUniqueInput;
  };

  /**
   * task findFirst
   */
  export type taskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tasks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
  };

  /**
   * task findFirstOrThrow
   */
  export type taskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * Filter, which task to fetch.
     */
    where?: taskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for tasks.
     */
    cursor?: taskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tasks.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
  };

  /**
   * task findMany
   */
  export type taskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * Filter, which tasks to fetch.
     */
    where?: taskWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of tasks to fetch.
     */
    orderBy?: taskOrderByWithRelationInput | taskOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing tasks.
     */
    cursor?: taskWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` tasks from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` tasks.
     */
    skip?: number;
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[];
  };

  /**
   * task create
   */
  export type taskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * The data needed to create a task.
     */
    data: XOR<taskCreateInput, taskUncheckedCreateInput>;
  };

  /**
   * task createMany
   */
  export type taskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tasks.
     */
    data: taskCreateManyInput | taskCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * task update
   */
  export type taskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * The data needed to update a task.
     */
    data: XOR<taskUpdateInput, taskUncheckedUpdateInput>;
    /**
     * Choose, which task to update.
     */
    where: taskWhereUniqueInput;
  };

  /**
   * task updateMany
   */
  export type taskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tasks.
     */
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyInput>;
    /**
     * Filter which tasks to update
     */
    where?: taskWhereInput;
  };

  /**
   * task upsert
   */
  export type taskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * The filter to search for the task to update in case it exists.
     */
    where: taskWhereUniqueInput;
    /**
     * In case the task found by the `where` argument doesn't exist, create a new task with this data.
     */
    create: XOR<taskCreateInput, taskUncheckedCreateInput>;
    /**
     * In case the task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<taskUpdateInput, taskUncheckedUpdateInput>;
  };

  /**
   * task delete
   */
  export type taskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
    /**
     * Filter which task to delete.
     */
    where: taskWhereUniqueInput;
  };

  /**
   * task deleteMany
   */
  export type taskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tasks to delete
     */
    where?: taskWhereInput;
  };

  /**
   * task.agent_task
   */
  export type task$agent_taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agent_task
     */
    select?: agent_taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: agent_taskInclude<ExtArgs> | null;
    where?: agent_taskWhereInput;
    orderBy?: agent_taskOrderByWithRelationInput | agent_taskOrderByWithRelationInput[];
    cursor?: agent_taskWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Agent_taskScalarFieldEnum | Agent_taskScalarFieldEnum[];
  };

  /**
   * task without action
   */
  export type taskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the task
     */
    select?: taskSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: taskInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    organization_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    organization_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    organization_id: number;
    first_name: number;
    last_name: number;
    locale: number;
    timezone: number;
    avatar_url: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    organization_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    organization_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    organization_id?: true;
    first_name?: true;
    last_name?: true;
    locale?: true;
    timezone?: true;
    avatar_url?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    organization_id: string | null;
    first_name: string | null;
    last_name: string | null;
    locale: string | null;
    timezone: string | null;
    avatar_url: string | null;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      organization_id?: boolean;
      first_name?: boolean;
      last_name?: boolean;
      locale?: boolean;
      timezone?: boolean;
      avatar_url?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      goal?: boolean | user$goalArgs<ExtArgs>;
      organization?: boolean | user$organizationArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    organization_id?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    locale?: boolean;
    timezone?: boolean;
    avatar_url?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goal?: boolean | user$goalArgs<ExtArgs>;
    organization?: boolean | user$organizationArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      goal: Prisma.$goalPayload<ExtArgs>[];
      organization: Prisma.$organizationPayload<ExtArgs> | null;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        organization_id: string | null;
        first_name: string | null;
        last_name: string | null;
        locale: string | null;
        timezone: string | null;
        avatar_url: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    goal<T extends user$goalArgs<ExtArgs> = {}>(
      args?: Subset<T, user$goalArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$goalPayload<ExtArgs>, T, 'findMany'> | Null>;

    organization<T extends user$organizationArgs<ExtArgs> = {}>(
      args?: Subset<T, user$organizationArgs<ExtArgs>>,
    ): Prisma__organizationClient<
      $Result.GetResult<Prisma.$organizationPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null,
      null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly organization_id: FieldRef<'user', 'String'>;
    readonly first_name: FieldRef<'user', 'String'>;
    readonly last_name: FieldRef<'user', 'String'>;
    readonly locale: FieldRef<'user', 'String'>;
    readonly timezone: FieldRef<'user', 'String'>;
    readonly avatar_url: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.goal
   */
  export type user$goalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the goal
     */
    select?: goalSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: goalInclude<ExtArgs> | null;
    where?: goalWhereInput;
    orderBy?: goalOrderByWithRelationInput | goalOrderByWithRelationInput[];
    cursor?: goalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[];
  };

  /**
   * user.organization
   */
  export type user$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the organization
     */
    select?: organizationSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: organizationInclude<ExtArgs> | null;
    where?: organizationWhereInput;
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const Agent_deploymentScalarFieldEnum: {
    id: 'id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Agent_deploymentScalarFieldEnum =
    (typeof Agent_deploymentScalarFieldEnum)[keyof typeof Agent_deploymentScalarFieldEnum];

  export const Agent_taskScalarFieldEnum: {
    id: 'id';
    task_id: 'task_id';
    agent_id: 'agent_id';
    status: 'status';
    is_active: 'is_active';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Agent_taskScalarFieldEnum = (typeof Agent_taskScalarFieldEnum)[keyof typeof Agent_taskScalarFieldEnum];

  export const GoalScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    status: 'status';
    user_id: 'user_id';
    is_active: 'is_active';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum];

  export const Intelligent_agentScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    status: 'status';
    is_active: 'is_active';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Intelligent_agentScalarFieldEnum =
    (typeof Intelligent_agentScalarFieldEnum)[keyof typeof Intelligent_agentScalarFieldEnum];

  export const OrganizationScalarFieldEnum: {
    id: 'id';
    description: 'description';
    is_active: 'is_active';
    organization_type: 'organization_type';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type OrganizationScalarFieldEnum =
    (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum];

  export const TaskScalarFieldEnum: {
    id: 'id';
    name: 'name';
    description: 'description';
    status: 'status';
    goal_id: 'goal_id';
    is_active: 'is_active';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    organization_id: 'organization_id';
    first_name: 'first_name';
    last_name: 'last_name';
    locale: 'locale';
    timezone: 'timezone';
    avatar_url: 'avatar_url';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type agent_deploymentWhereInput = {
    AND?: agent_deploymentWhereInput | agent_deploymentWhereInput[];
    OR?: agent_deploymentWhereInput[];
    NOT?: agent_deploymentWhereInput | agent_deploymentWhereInput[];
    id?: UuidFilter<'agent_deployment'> | string;
    created_at?: DateTimeFilter<'agent_deployment'> | Date | string;
    updated_at?: DateTimeFilter<'agent_deployment'> | Date | string;
  };

  export type agent_deploymentOrderByWithRelationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type agent_deploymentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: agent_deploymentWhereInput | agent_deploymentWhereInput[];
      OR?: agent_deploymentWhereInput[];
      NOT?: agent_deploymentWhereInput | agent_deploymentWhereInput[];
      created_at?: DateTimeFilter<'agent_deployment'> | Date | string;
      updated_at?: DateTimeFilter<'agent_deployment'> | Date | string;
    },
    'id'
  >;

  export type agent_deploymentOrderByWithAggregationInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: agent_deploymentCountOrderByAggregateInput;
    _max?: agent_deploymentMaxOrderByAggregateInput;
    _min?: agent_deploymentMinOrderByAggregateInput;
  };

  export type agent_deploymentScalarWhereWithAggregatesInput = {
    AND?: agent_deploymentScalarWhereWithAggregatesInput | agent_deploymentScalarWhereWithAggregatesInput[];
    OR?: agent_deploymentScalarWhereWithAggregatesInput[];
    NOT?: agent_deploymentScalarWhereWithAggregatesInput | agent_deploymentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'agent_deployment'> | string;
    created_at?: DateTimeWithAggregatesFilter<'agent_deployment'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'agent_deployment'> | Date | string;
  };

  export type agent_taskWhereInput = {
    AND?: agent_taskWhereInput | agent_taskWhereInput[];
    OR?: agent_taskWhereInput[];
    NOT?: agent_taskWhereInput | agent_taskWhereInput[];
    id?: UuidFilter<'agent_task'> | string;
    task_id?: UuidFilter<'agent_task'> | string;
    agent_id?: UuidFilter<'agent_task'> | string;
    status?: StringFilter<'agent_task'> | string;
    is_active?: BoolFilter<'agent_task'> | boolean;
    created_at?: DateTimeFilter<'agent_task'> | Date | string;
    updated_at?: DateTimeFilter<'agent_task'> | Date | string;
    intelligent_agent?: XOR<Intelligent_agentRelationFilter, intelligent_agentWhereInput>;
    task?: XOR<TaskRelationFilter, taskWhereInput>;
  };

  export type agent_taskOrderByWithRelationInput = {
    id?: SortOrder;
    task_id?: SortOrder;
    agent_id?: SortOrder;
    status?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    intelligent_agent?: intelligent_agentOrderByWithRelationInput;
    task?: taskOrderByWithRelationInput;
  };

  export type agent_taskWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: agent_taskWhereInput | agent_taskWhereInput[];
      OR?: agent_taskWhereInput[];
      NOT?: agent_taskWhereInput | agent_taskWhereInput[];
      task_id?: UuidFilter<'agent_task'> | string;
      agent_id?: UuidFilter<'agent_task'> | string;
      status?: StringFilter<'agent_task'> | string;
      is_active?: BoolFilter<'agent_task'> | boolean;
      created_at?: DateTimeFilter<'agent_task'> | Date | string;
      updated_at?: DateTimeFilter<'agent_task'> | Date | string;
      intelligent_agent?: XOR<Intelligent_agentRelationFilter, intelligent_agentWhereInput>;
      task?: XOR<TaskRelationFilter, taskWhereInput>;
    },
    'id'
  >;

  export type agent_taskOrderByWithAggregationInput = {
    id?: SortOrder;
    task_id?: SortOrder;
    agent_id?: SortOrder;
    status?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: agent_taskCountOrderByAggregateInput;
    _max?: agent_taskMaxOrderByAggregateInput;
    _min?: agent_taskMinOrderByAggregateInput;
  };

  export type agent_taskScalarWhereWithAggregatesInput = {
    AND?: agent_taskScalarWhereWithAggregatesInput | agent_taskScalarWhereWithAggregatesInput[];
    OR?: agent_taskScalarWhereWithAggregatesInput[];
    NOT?: agent_taskScalarWhereWithAggregatesInput | agent_taskScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'agent_task'> | string;
    task_id?: UuidWithAggregatesFilter<'agent_task'> | string;
    agent_id?: UuidWithAggregatesFilter<'agent_task'> | string;
    status?: StringWithAggregatesFilter<'agent_task'> | string;
    is_active?: BoolWithAggregatesFilter<'agent_task'> | boolean;
    created_at?: DateTimeWithAggregatesFilter<'agent_task'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'agent_task'> | Date | string;
  };

  export type goalWhereInput = {
    AND?: goalWhereInput | goalWhereInput[];
    OR?: goalWhereInput[];
    NOT?: goalWhereInput | goalWhereInput[];
    id?: UuidFilter<'goal'> | string;
    name?: StringFilter<'goal'> | string;
    description?: StringNullableFilter<'goal'> | string | null;
    status?: StringFilter<'goal'> | string;
    user_id?: UuidFilter<'goal'> | string;
    is_active?: BoolFilter<'goal'> | boolean;
    created_at?: DateTimeFilter<'goal'> | Date | string;
    updated_at?: DateTimeFilter<'goal'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
    task?: TaskListRelationFilter;
  };

  export type goalOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
    task?: taskOrderByRelationAggregateInput;
  };

  export type goalWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: goalWhereInput | goalWhereInput[];
      OR?: goalWhereInput[];
      NOT?: goalWhereInput | goalWhereInput[];
      name?: StringFilter<'goal'> | string;
      description?: StringNullableFilter<'goal'> | string | null;
      status?: StringFilter<'goal'> | string;
      user_id?: UuidFilter<'goal'> | string;
      is_active?: BoolFilter<'goal'> | boolean;
      created_at?: DateTimeFilter<'goal'> | Date | string;
      updated_at?: DateTimeFilter<'goal'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
      task?: TaskListRelationFilter;
    },
    'id'
  >;

  export type goalOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: goalCountOrderByAggregateInput;
    _max?: goalMaxOrderByAggregateInput;
    _min?: goalMinOrderByAggregateInput;
  };

  export type goalScalarWhereWithAggregatesInput = {
    AND?: goalScalarWhereWithAggregatesInput | goalScalarWhereWithAggregatesInput[];
    OR?: goalScalarWhereWithAggregatesInput[];
    NOT?: goalScalarWhereWithAggregatesInput | goalScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'goal'> | string;
    name?: StringWithAggregatesFilter<'goal'> | string;
    description?: StringNullableWithAggregatesFilter<'goal'> | string | null;
    status?: StringWithAggregatesFilter<'goal'> | string;
    user_id?: UuidWithAggregatesFilter<'goal'> | string;
    is_active?: BoolWithAggregatesFilter<'goal'> | boolean;
    created_at?: DateTimeWithAggregatesFilter<'goal'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'goal'> | Date | string;
  };

  export type intelligent_agentWhereInput = {
    AND?: intelligent_agentWhereInput | intelligent_agentWhereInput[];
    OR?: intelligent_agentWhereInput[];
    NOT?: intelligent_agentWhereInput | intelligent_agentWhereInput[];
    id?: UuidFilter<'intelligent_agent'> | string;
    name?: StringFilter<'intelligent_agent'> | string;
    description?: StringNullableFilter<'intelligent_agent'> | string | null;
    status?: StringFilter<'intelligent_agent'> | string;
    is_active?: BoolFilter<'intelligent_agent'> | boolean;
    created_at?: DateTimeFilter<'intelligent_agent'> | Date | string;
    updated_at?: DateTimeFilter<'intelligent_agent'> | Date | string;
    agent_task?: Agent_taskListRelationFilter;
  };

  export type intelligent_agentOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    status?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    agent_task?: agent_taskOrderByRelationAggregateInput;
  };

  export type intelligent_agentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: intelligent_agentWhereInput | intelligent_agentWhereInput[];
      OR?: intelligent_agentWhereInput[];
      NOT?: intelligent_agentWhereInput | intelligent_agentWhereInput[];
      name?: StringFilter<'intelligent_agent'> | string;
      description?: StringNullableFilter<'intelligent_agent'> | string | null;
      status?: StringFilter<'intelligent_agent'> | string;
      is_active?: BoolFilter<'intelligent_agent'> | boolean;
      created_at?: DateTimeFilter<'intelligent_agent'> | Date | string;
      updated_at?: DateTimeFilter<'intelligent_agent'> | Date | string;
      agent_task?: Agent_taskListRelationFilter;
    },
    'id'
  >;

  export type intelligent_agentOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    status?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: intelligent_agentCountOrderByAggregateInput;
    _max?: intelligent_agentMaxOrderByAggregateInput;
    _min?: intelligent_agentMinOrderByAggregateInput;
  };

  export type intelligent_agentScalarWhereWithAggregatesInput = {
    AND?: intelligent_agentScalarWhereWithAggregatesInput | intelligent_agentScalarWhereWithAggregatesInput[];
    OR?: intelligent_agentScalarWhereWithAggregatesInput[];
    NOT?: intelligent_agentScalarWhereWithAggregatesInput | intelligent_agentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'intelligent_agent'> | string;
    name?: StringWithAggregatesFilter<'intelligent_agent'> | string;
    description?: StringNullableWithAggregatesFilter<'intelligent_agent'> | string | null;
    status?: StringWithAggregatesFilter<'intelligent_agent'> | string;
    is_active?: BoolWithAggregatesFilter<'intelligent_agent'> | boolean;
    created_at?: DateTimeWithAggregatesFilter<'intelligent_agent'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'intelligent_agent'> | Date | string;
  };

  export type organizationWhereInput = {
    AND?: organizationWhereInput | organizationWhereInput[];
    OR?: organizationWhereInput[];
    NOT?: organizationWhereInput | organizationWhereInput[];
    id?: UuidFilter<'organization'> | string;
    description?: StringNullableFilter<'organization'> | string | null;
    is_active?: BoolNullableFilter<'organization'> | boolean | null;
    organization_type?: StringNullableFilter<'organization'> | string | null;
    name?: StringFilter<'organization'> | string;
    created_at?: DateTimeFilter<'organization'> | Date | string;
    updated_at?: DateTimeFilter<'organization'> | Date | string;
    user?: UserListRelationFilter;
  };

  export type organizationOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    is_active?: SortOrderInput | SortOrder;
    organization_type?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByRelationAggregateInput;
  };

  export type organizationWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: organizationWhereInput | organizationWhereInput[];
      OR?: organizationWhereInput[];
      NOT?: organizationWhereInput | organizationWhereInput[];
      description?: StringNullableFilter<'organization'> | string | null;
      is_active?: BoolNullableFilter<'organization'> | boolean | null;
      organization_type?: StringNullableFilter<'organization'> | string | null;
      name?: StringFilter<'organization'> | string;
      created_at?: DateTimeFilter<'organization'> | Date | string;
      updated_at?: DateTimeFilter<'organization'> | Date | string;
      user?: UserListRelationFilter;
    },
    'id'
  >;

  export type organizationOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    is_active?: SortOrderInput | SortOrder;
    organization_type?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: organizationCountOrderByAggregateInput;
    _max?: organizationMaxOrderByAggregateInput;
    _min?: organizationMinOrderByAggregateInput;
  };

  export type organizationScalarWhereWithAggregatesInput = {
    AND?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    OR?: organizationScalarWhereWithAggregatesInput[];
    NOT?: organizationScalarWhereWithAggregatesInput | organizationScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'organization'> | string;
    description?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    is_active?: BoolNullableWithAggregatesFilter<'organization'> | boolean | null;
    organization_type?: StringNullableWithAggregatesFilter<'organization'> | string | null;
    name?: StringWithAggregatesFilter<'organization'> | string;
    created_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'organization'> | Date | string;
  };

  export type taskWhereInput = {
    AND?: taskWhereInput | taskWhereInput[];
    OR?: taskWhereInput[];
    NOT?: taskWhereInput | taskWhereInput[];
    id?: UuidFilter<'task'> | string;
    name?: StringFilter<'task'> | string;
    description?: StringNullableFilter<'task'> | string | null;
    status?: StringFilter<'task'> | string;
    goal_id?: UuidFilter<'task'> | string;
    is_active?: BoolFilter<'task'> | boolean;
    created_at?: DateTimeFilter<'task'> | Date | string;
    updated_at?: DateTimeFilter<'task'> | Date | string;
    agent_task?: Agent_taskListRelationFilter;
    goal?: XOR<GoalRelationFilter, goalWhereInput>;
  };

  export type taskOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    status?: SortOrder;
    goal_id?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    agent_task?: agent_taskOrderByRelationAggregateInput;
    goal?: goalOrderByWithRelationInput;
  };

  export type taskWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: taskWhereInput | taskWhereInput[];
      OR?: taskWhereInput[];
      NOT?: taskWhereInput | taskWhereInput[];
      name?: StringFilter<'task'> | string;
      description?: StringNullableFilter<'task'> | string | null;
      status?: StringFilter<'task'> | string;
      goal_id?: UuidFilter<'task'> | string;
      is_active?: BoolFilter<'task'> | boolean;
      created_at?: DateTimeFilter<'task'> | Date | string;
      updated_at?: DateTimeFilter<'task'> | Date | string;
      agent_task?: Agent_taskListRelationFilter;
      goal?: XOR<GoalRelationFilter, goalWhereInput>;
    },
    'id'
  >;

  export type taskOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    status?: SortOrder;
    goal_id?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: taskCountOrderByAggregateInput;
    _max?: taskMaxOrderByAggregateInput;
    _min?: taskMinOrderByAggregateInput;
  };

  export type taskScalarWhereWithAggregatesInput = {
    AND?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[];
    OR?: taskScalarWhereWithAggregatesInput[];
    NOT?: taskScalarWhereWithAggregatesInput | taskScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'task'> | string;
    name?: StringWithAggregatesFilter<'task'> | string;
    description?: StringNullableWithAggregatesFilter<'task'> | string | null;
    status?: StringWithAggregatesFilter<'task'> | string;
    goal_id?: UuidWithAggregatesFilter<'task'> | string;
    is_active?: BoolWithAggregatesFilter<'task'> | boolean;
    created_at?: DateTimeWithAggregatesFilter<'task'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'task'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    organization_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    goal?: GoalListRelationFilter;
    organization?: XOR<OrganizationNullableRelationFilter, organizationWhereInput> | null;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    goal?: goalOrderByRelationAggregateInput;
    organization?: organizationOrderByWithRelationInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      organization_id?: UuidNullableFilter<'user'> | string | null;
      first_name?: StringNullableFilter<'user'> | string | null;
      last_name?: StringNullableFilter<'user'> | string | null;
      locale?: StringNullableFilter<'user'> | string | null;
      timezone?: StringNullableFilter<'user'> | string | null;
      avatar_url?: StringNullableFilter<'user'> | string | null;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      goal?: GoalListRelationFilter;
      organization?: XOR<OrganizationNullableRelationFilter, organizationWhereInput> | null;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrderInput | SortOrder;
    first_name?: SortOrderInput | SortOrder;
    last_name?: SortOrderInput | SortOrder;
    locale?: SortOrderInput | SortOrder;
    timezone?: SortOrderInput | SortOrder;
    avatar_url?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    organization_id?: UuidNullableWithAggregatesFilter<'user'> | string | null;
    first_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    last_name?: StringNullableWithAggregatesFilter<'user'> | string | null;
    locale?: StringNullableWithAggregatesFilter<'user'> | string | null;
    timezone?: StringNullableWithAggregatesFilter<'user'> | string | null;
    avatar_url?: StringNullableWithAggregatesFilter<'user'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type agent_deploymentCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type agent_deploymentUncheckedCreateInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type agent_deploymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type agent_deploymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type agent_deploymentCreateManyInput = {
    id?: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type agent_deploymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type agent_deploymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type agent_taskCreateInput = {
    id?: string;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    intelligent_agent: intelligent_agentCreateNestedOneWithoutAgent_taskInput;
    task: taskCreateNestedOneWithoutAgent_taskInput;
  };

  export type agent_taskUncheckedCreateInput = {
    id?: string;
    task_id: string;
    agent_id: string;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type agent_taskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    intelligent_agent?: intelligent_agentUpdateOneRequiredWithoutAgent_taskNestedInput;
    task?: taskUpdateOneRequiredWithoutAgent_taskNestedInput;
  };

  export type agent_taskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    task_id?: StringFieldUpdateOperationsInput | string;
    agent_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type agent_taskCreateManyInput = {
    id?: string;
    task_id: string;
    agent_id: string;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type agent_taskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type agent_taskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    task_id?: StringFieldUpdateOperationsInput | string;
    agent_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type goalCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutGoalInput;
    task?: taskCreateNestedManyWithoutGoalInput;
  };

  export type goalUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    status: string;
    user_id: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    task?: taskUncheckedCreateNestedManyWithoutGoalInput;
  };

  export type goalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutGoalNestedInput;
    task?: taskUpdateManyWithoutGoalNestedInput;
  };

  export type goalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    task?: taskUncheckedUpdateManyWithoutGoalNestedInput;
  };

  export type goalCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    status: string;
    user_id: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type goalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type goalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type intelligent_agentCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    agent_task?: agent_taskCreateNestedManyWithoutIntelligent_agentInput;
  };

  export type intelligent_agentUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    agent_task?: agent_taskUncheckedCreateNestedManyWithoutIntelligent_agentInput;
  };

  export type intelligent_agentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    agent_task?: agent_taskUpdateManyWithoutIntelligent_agentNestedInput;
  };

  export type intelligent_agentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    agent_task?: agent_taskUncheckedUpdateManyWithoutIntelligent_agentNestedInput;
  };

  export type intelligent_agentCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type intelligent_agentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type intelligent_agentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationCreateInput = {
    id?: string;
    description?: string | null;
    is_active?: boolean | null;
    organization_type?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    is_active?: boolean | null;
    organization_type?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user?: userUncheckedCreateNestedManyWithoutOrganizationInput;
  };

  export type organizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    organization_type?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    organization_type?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUncheckedUpdateManyWithoutOrganizationNestedInput;
  };

  export type organizationCreateManyInput = {
    id?: string;
    description?: string | null;
    is_active?: boolean | null;
    organization_type?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    organization_type?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    organization_type?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type taskCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    agent_task?: agent_taskCreateNestedManyWithoutTaskInput;
    goal: goalCreateNestedOneWithoutTaskInput;
  };

  export type taskUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    status: string;
    goal_id: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    agent_task?: agent_taskUncheckedCreateNestedManyWithoutTaskInput;
  };

  export type taskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    agent_task?: agent_taskUpdateManyWithoutTaskNestedInput;
    goal?: goalUpdateOneRequiredWithoutTaskNestedInput;
  };

  export type taskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    goal_id?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    agent_task?: agent_taskUncheckedUpdateManyWithoutTaskNestedInput;
  };

  export type taskCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    status: string;
    goal_id: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type taskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type taskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    goal_id?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    goal?: goalCreateNestedManyWithoutUserInput;
    organization?: organizationCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    organization_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    goal?: goalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    goal?: goalUpdateManyWithoutUserNestedInput;
    organization?: organizationUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organization_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    goal?: goalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    organization_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organization_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type agent_deploymentCountOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type agent_deploymentMaxOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type agent_deploymentMinOrderByAggregateInput = {
    id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type Intelligent_agentRelationFilter = {
    is?: intelligent_agentWhereInput;
    isNot?: intelligent_agentWhereInput;
  };

  export type TaskRelationFilter = {
    is?: taskWhereInput;
    isNot?: taskWhereInput;
  };

  export type agent_taskCountOrderByAggregateInput = {
    id?: SortOrder;
    task_id?: SortOrder;
    agent_id?: SortOrder;
    status?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type agent_taskMaxOrderByAggregateInput = {
    id?: SortOrder;
    task_id?: SortOrder;
    agent_id?: SortOrder;
    status?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type agent_taskMinOrderByAggregateInput = {
    id?: SortOrder;
    task_id?: SortOrder;
    agent_id?: SortOrder;
    status?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type TaskListRelationFilter = {
    every?: taskWhereInput;
    some?: taskWhereInput;
    none?: taskWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type taskOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type goalCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type goalMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type goalMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type Agent_taskListRelationFilter = {
    every?: agent_taskWhereInput;
    some?: agent_taskWhereInput;
    none?: agent_taskWhereInput;
  };

  export type agent_taskOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type intelligent_agentCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type intelligent_agentMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type intelligent_agentMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null;
  };

  export type UserListRelationFilter = {
    every?: userWhereInput;
    some?: userWhereInput;
    none?: userWhereInput;
  };

  export type userOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type organizationCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    is_active?: SortOrder;
    organization_type?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type organizationMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    is_active?: SortOrder;
    organization_type?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type organizationMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    is_active?: SortOrder;
    organization_type?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedBoolNullableFilter<$PrismaModel>;
    _max?: NestedBoolNullableFilter<$PrismaModel>;
  };

  export type GoalRelationFilter = {
    is?: goalWhereInput;
    isNot?: goalWhereInput;
  };

  export type taskCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    goal_id?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type taskMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    goal_id?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type taskMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    status?: SortOrder;
    goal_id?: SortOrder;
    is_active?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type GoalListRelationFilter = {
    every?: goalWhereInput;
    some?: goalWhereInput;
    none?: goalWhereInput;
  };

  export type OrganizationNullableRelationFilter = {
    is?: organizationWhereInput | null;
    isNot?: organizationWhereInput | null;
  };

  export type goalOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    organization_id?: SortOrder;
    first_name?: SortOrder;
    last_name?: SortOrder;
    locale?: SortOrder;
    timezone?: SortOrder;
    avatar_url?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type intelligent_agentCreateNestedOneWithoutAgent_taskInput = {
    create?: XOR<intelligent_agentCreateWithoutAgent_taskInput, intelligent_agentUncheckedCreateWithoutAgent_taskInput>;
    connectOrCreate?: intelligent_agentCreateOrConnectWithoutAgent_taskInput;
    connect?: intelligent_agentWhereUniqueInput;
  };

  export type taskCreateNestedOneWithoutAgent_taskInput = {
    create?: XOR<taskCreateWithoutAgent_taskInput, taskUncheckedCreateWithoutAgent_taskInput>;
    connectOrCreate?: taskCreateOrConnectWithoutAgent_taskInput;
    connect?: taskWhereUniqueInput;
  };

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
  };

  export type intelligent_agentUpdateOneRequiredWithoutAgent_taskNestedInput = {
    create?: XOR<intelligent_agentCreateWithoutAgent_taskInput, intelligent_agentUncheckedCreateWithoutAgent_taskInput>;
    connectOrCreate?: intelligent_agentCreateOrConnectWithoutAgent_taskInput;
    upsert?: intelligent_agentUpsertWithoutAgent_taskInput;
    connect?: intelligent_agentWhereUniqueInput;
    update?: XOR<
      XOR<intelligent_agentUpdateToOneWithWhereWithoutAgent_taskInput, intelligent_agentUpdateWithoutAgent_taskInput>,
      intelligent_agentUncheckedUpdateWithoutAgent_taskInput
    >;
  };

  export type taskUpdateOneRequiredWithoutAgent_taskNestedInput = {
    create?: XOR<taskCreateWithoutAgent_taskInput, taskUncheckedCreateWithoutAgent_taskInput>;
    connectOrCreate?: taskCreateOrConnectWithoutAgent_taskInput;
    upsert?: taskUpsertWithoutAgent_taskInput;
    connect?: taskWhereUniqueInput;
    update?: XOR<
      XOR<taskUpdateToOneWithWhereWithoutAgent_taskInput, taskUpdateWithoutAgent_taskInput>,
      taskUncheckedUpdateWithoutAgent_taskInput
    >;
  };

  export type userCreateNestedOneWithoutGoalInput = {
    create?: XOR<userCreateWithoutGoalInput, userUncheckedCreateWithoutGoalInput>;
    connectOrCreate?: userCreateOrConnectWithoutGoalInput;
    connect?: userWhereUniqueInput;
  };

  export type taskCreateNestedManyWithoutGoalInput = {
    create?:
      | XOR<taskCreateWithoutGoalInput, taskUncheckedCreateWithoutGoalInput>
      | taskCreateWithoutGoalInput[]
      | taskUncheckedCreateWithoutGoalInput[];
    connectOrCreate?: taskCreateOrConnectWithoutGoalInput | taskCreateOrConnectWithoutGoalInput[];
    createMany?: taskCreateManyGoalInputEnvelope;
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[];
  };

  export type taskUncheckedCreateNestedManyWithoutGoalInput = {
    create?:
      | XOR<taskCreateWithoutGoalInput, taskUncheckedCreateWithoutGoalInput>
      | taskCreateWithoutGoalInput[]
      | taskUncheckedCreateWithoutGoalInput[];
    connectOrCreate?: taskCreateOrConnectWithoutGoalInput | taskCreateOrConnectWithoutGoalInput[];
    createMany?: taskCreateManyGoalInputEnvelope;
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type userUpdateOneRequiredWithoutGoalNestedInput = {
    create?: XOR<userCreateWithoutGoalInput, userUncheckedCreateWithoutGoalInput>;
    connectOrCreate?: userCreateOrConnectWithoutGoalInput;
    upsert?: userUpsertWithoutGoalInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutGoalInput, userUpdateWithoutGoalInput>,
      userUncheckedUpdateWithoutGoalInput
    >;
  };

  export type taskUpdateManyWithoutGoalNestedInput = {
    create?:
      | XOR<taskCreateWithoutGoalInput, taskUncheckedCreateWithoutGoalInput>
      | taskCreateWithoutGoalInput[]
      | taskUncheckedCreateWithoutGoalInput[];
    connectOrCreate?: taskCreateOrConnectWithoutGoalInput | taskCreateOrConnectWithoutGoalInput[];
    upsert?: taskUpsertWithWhereUniqueWithoutGoalInput | taskUpsertWithWhereUniqueWithoutGoalInput[];
    createMany?: taskCreateManyGoalInputEnvelope;
    set?: taskWhereUniqueInput | taskWhereUniqueInput[];
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[];
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[];
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[];
    update?: taskUpdateWithWhereUniqueWithoutGoalInput | taskUpdateWithWhereUniqueWithoutGoalInput[];
    updateMany?: taskUpdateManyWithWhereWithoutGoalInput | taskUpdateManyWithWhereWithoutGoalInput[];
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[];
  };

  export type taskUncheckedUpdateManyWithoutGoalNestedInput = {
    create?:
      | XOR<taskCreateWithoutGoalInput, taskUncheckedCreateWithoutGoalInput>
      | taskCreateWithoutGoalInput[]
      | taskUncheckedCreateWithoutGoalInput[];
    connectOrCreate?: taskCreateOrConnectWithoutGoalInput | taskCreateOrConnectWithoutGoalInput[];
    upsert?: taskUpsertWithWhereUniqueWithoutGoalInput | taskUpsertWithWhereUniqueWithoutGoalInput[];
    createMany?: taskCreateManyGoalInputEnvelope;
    set?: taskWhereUniqueInput | taskWhereUniqueInput[];
    disconnect?: taskWhereUniqueInput | taskWhereUniqueInput[];
    delete?: taskWhereUniqueInput | taskWhereUniqueInput[];
    connect?: taskWhereUniqueInput | taskWhereUniqueInput[];
    update?: taskUpdateWithWhereUniqueWithoutGoalInput | taskUpdateWithWhereUniqueWithoutGoalInput[];
    updateMany?: taskUpdateManyWithWhereWithoutGoalInput | taskUpdateManyWithWhereWithoutGoalInput[];
    deleteMany?: taskScalarWhereInput | taskScalarWhereInput[];
  };

  export type agent_taskCreateNestedManyWithoutIntelligent_agentInput = {
    create?:
      | XOR<agent_taskCreateWithoutIntelligent_agentInput, agent_taskUncheckedCreateWithoutIntelligent_agentInput>
      | agent_taskCreateWithoutIntelligent_agentInput[]
      | agent_taskUncheckedCreateWithoutIntelligent_agentInput[];
    connectOrCreate?:
      | agent_taskCreateOrConnectWithoutIntelligent_agentInput
      | agent_taskCreateOrConnectWithoutIntelligent_agentInput[];
    createMany?: agent_taskCreateManyIntelligent_agentInputEnvelope;
    connect?: agent_taskWhereUniqueInput | agent_taskWhereUniqueInput[];
  };

  export type agent_taskUncheckedCreateNestedManyWithoutIntelligent_agentInput = {
    create?:
      | XOR<agent_taskCreateWithoutIntelligent_agentInput, agent_taskUncheckedCreateWithoutIntelligent_agentInput>
      | agent_taskCreateWithoutIntelligent_agentInput[]
      | agent_taskUncheckedCreateWithoutIntelligent_agentInput[];
    connectOrCreate?:
      | agent_taskCreateOrConnectWithoutIntelligent_agentInput
      | agent_taskCreateOrConnectWithoutIntelligent_agentInput[];
    createMany?: agent_taskCreateManyIntelligent_agentInputEnvelope;
    connect?: agent_taskWhereUniqueInput | agent_taskWhereUniqueInput[];
  };

  export type agent_taskUpdateManyWithoutIntelligent_agentNestedInput = {
    create?:
      | XOR<agent_taskCreateWithoutIntelligent_agentInput, agent_taskUncheckedCreateWithoutIntelligent_agentInput>
      | agent_taskCreateWithoutIntelligent_agentInput[]
      | agent_taskUncheckedCreateWithoutIntelligent_agentInput[];
    connectOrCreate?:
      | agent_taskCreateOrConnectWithoutIntelligent_agentInput
      | agent_taskCreateOrConnectWithoutIntelligent_agentInput[];
    upsert?:
      | agent_taskUpsertWithWhereUniqueWithoutIntelligent_agentInput
      | agent_taskUpsertWithWhereUniqueWithoutIntelligent_agentInput[];
    createMany?: agent_taskCreateManyIntelligent_agentInputEnvelope;
    set?: agent_taskWhereUniqueInput | agent_taskWhereUniqueInput[];
    disconnect?: agent_taskWhereUniqueInput | agent_taskWhereUniqueInput[];
    delete?: agent_taskWhereUniqueInput | agent_taskWhereUniqueInput[];
    connect?: agent_taskWhereUniqueInput | agent_taskWhereUniqueInput[];
    update?:
      | agent_taskUpdateWithWhereUniqueWithoutIntelligent_agentInput
      | agent_taskUpdateWithWhereUniqueWithoutIntelligent_agentInput[];
    updateMany?:
      | agent_taskUpdateManyWithWhereWithoutIntelligent_agentInput
      | agent_taskUpdateManyWithWhereWithoutIntelligent_agentInput[];
    deleteMany?: agent_taskScalarWhereInput | agent_taskScalarWhereInput[];
  };

  export type agent_taskUncheckedUpdateManyWithoutIntelligent_agentNestedInput = {
    create?:
      | XOR<agent_taskCreateWithoutIntelligent_agentInput, agent_taskUncheckedCreateWithoutIntelligent_agentInput>
      | agent_taskCreateWithoutIntelligent_agentInput[]
      | agent_taskUncheckedCreateWithoutIntelligent_agentInput[];
    connectOrCreate?:
      | agent_taskCreateOrConnectWithoutIntelligent_agentInput
      | agent_taskCreateOrConnectWithoutIntelligent_agentInput[];
    upsert?:
      | agent_taskUpsertWithWhereUniqueWithoutIntelligent_agentInput
      | agent_taskUpsertWithWhereUniqueWithoutIntelligent_agentInput[];
    createMany?: agent_taskCreateManyIntelligent_agentInputEnvelope;
    set?: agent_taskWhereUniqueInput | agent_taskWhereUniqueInput[];
    disconnect?: agent_taskWhereUniqueInput | agent_taskWhereUniqueInput[];
    delete?: agent_taskWhereUniqueInput | agent_taskWhereUniqueInput[];
    connect?: agent_taskWhereUniqueInput | agent_taskWhereUniqueInput[];
    update?:
      | agent_taskUpdateWithWhereUniqueWithoutIntelligent_agentInput
      | agent_taskUpdateWithWhereUniqueWithoutIntelligent_agentInput[];
    updateMany?:
      | agent_taskUpdateManyWithWhereWithoutIntelligent_agentInput
      | agent_taskUpdateManyWithWhereWithoutIntelligent_agentInput[];
    deleteMany?: agent_taskScalarWhereInput | agent_taskScalarWhereInput[];
  };

  export type userCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>
      | userCreateWithoutOrganizationInput[]
      | userUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput | userCreateOrConnectWithoutOrganizationInput[];
    createMany?: userCreateManyOrganizationInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type userUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?:
      | XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>
      | userCreateWithoutOrganizationInput[]
      | userUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput | userCreateOrConnectWithoutOrganizationInput[];
    createMany?: userCreateManyOrganizationInputEnvelope;
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
  };

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
  };

  export type userUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>
      | userCreateWithoutOrganizationInput[]
      | userUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput | userCreateOrConnectWithoutOrganizationInput[];
    upsert?: userUpsertWithWhereUniqueWithoutOrganizationInput | userUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: userCreateManyOrganizationInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutOrganizationInput | userUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: userUpdateManyWithWhereWithoutOrganizationInput | userUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type userUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?:
      | XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>
      | userCreateWithoutOrganizationInput[]
      | userUncheckedCreateWithoutOrganizationInput[];
    connectOrCreate?: userCreateOrConnectWithoutOrganizationInput | userCreateOrConnectWithoutOrganizationInput[];
    upsert?: userUpsertWithWhereUniqueWithoutOrganizationInput | userUpsertWithWhereUniqueWithoutOrganizationInput[];
    createMany?: userCreateManyOrganizationInputEnvelope;
    set?: userWhereUniqueInput | userWhereUniqueInput[];
    disconnect?: userWhereUniqueInput | userWhereUniqueInput[];
    delete?: userWhereUniqueInput | userWhereUniqueInput[];
    connect?: userWhereUniqueInput | userWhereUniqueInput[];
    update?: userUpdateWithWhereUniqueWithoutOrganizationInput | userUpdateWithWhereUniqueWithoutOrganizationInput[];
    updateMany?: userUpdateManyWithWhereWithoutOrganizationInput | userUpdateManyWithWhereWithoutOrganizationInput[];
    deleteMany?: userScalarWhereInput | userScalarWhereInput[];
  };

  export type agent_taskCreateNestedManyWithoutTaskInput = {
    create?:
      | XOR<agent_taskCreateWithoutTaskInput, agent_taskUncheckedCreateWithoutTaskInput>
      | agent_taskCreateWithoutTaskInput[]
      | agent_taskUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: agent_taskCreateOrConnectWithoutTaskInput | agent_taskCreateOrConnectWithoutTaskInput[];
    createMany?: agent_taskCreateManyTaskInputEnvelope;
    connect?: agent_taskWhereUniqueInput | agent_taskWhereUniqueInput[];
  };

  export type goalCreateNestedOneWithoutTaskInput = {
    create?: XOR<goalCreateWithoutTaskInput, goalUncheckedCreateWithoutTaskInput>;
    connectOrCreate?: goalCreateOrConnectWithoutTaskInput;
    connect?: goalWhereUniqueInput;
  };

  export type agent_taskUncheckedCreateNestedManyWithoutTaskInput = {
    create?:
      | XOR<agent_taskCreateWithoutTaskInput, agent_taskUncheckedCreateWithoutTaskInput>
      | agent_taskCreateWithoutTaskInput[]
      | agent_taskUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: agent_taskCreateOrConnectWithoutTaskInput | agent_taskCreateOrConnectWithoutTaskInput[];
    createMany?: agent_taskCreateManyTaskInputEnvelope;
    connect?: agent_taskWhereUniqueInput | agent_taskWhereUniqueInput[];
  };

  export type agent_taskUpdateManyWithoutTaskNestedInput = {
    create?:
      | XOR<agent_taskCreateWithoutTaskInput, agent_taskUncheckedCreateWithoutTaskInput>
      | agent_taskCreateWithoutTaskInput[]
      | agent_taskUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: agent_taskCreateOrConnectWithoutTaskInput | agent_taskCreateOrConnectWithoutTaskInput[];
    upsert?: agent_taskUpsertWithWhereUniqueWithoutTaskInput | agent_taskUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: agent_taskCreateManyTaskInputEnvelope;
    set?: agent_taskWhereUniqueInput | agent_taskWhereUniqueInput[];
    disconnect?: agent_taskWhereUniqueInput | agent_taskWhereUniqueInput[];
    delete?: agent_taskWhereUniqueInput | agent_taskWhereUniqueInput[];
    connect?: agent_taskWhereUniqueInput | agent_taskWhereUniqueInput[];
    update?: agent_taskUpdateWithWhereUniqueWithoutTaskInput | agent_taskUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: agent_taskUpdateManyWithWhereWithoutTaskInput | agent_taskUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: agent_taskScalarWhereInput | agent_taskScalarWhereInput[];
  };

  export type goalUpdateOneRequiredWithoutTaskNestedInput = {
    create?: XOR<goalCreateWithoutTaskInput, goalUncheckedCreateWithoutTaskInput>;
    connectOrCreate?: goalCreateOrConnectWithoutTaskInput;
    upsert?: goalUpsertWithoutTaskInput;
    connect?: goalWhereUniqueInput;
    update?: XOR<
      XOR<goalUpdateToOneWithWhereWithoutTaskInput, goalUpdateWithoutTaskInput>,
      goalUncheckedUpdateWithoutTaskInput
    >;
  };

  export type agent_taskUncheckedUpdateManyWithoutTaskNestedInput = {
    create?:
      | XOR<agent_taskCreateWithoutTaskInput, agent_taskUncheckedCreateWithoutTaskInput>
      | agent_taskCreateWithoutTaskInput[]
      | agent_taskUncheckedCreateWithoutTaskInput[];
    connectOrCreate?: agent_taskCreateOrConnectWithoutTaskInput | agent_taskCreateOrConnectWithoutTaskInput[];
    upsert?: agent_taskUpsertWithWhereUniqueWithoutTaskInput | agent_taskUpsertWithWhereUniqueWithoutTaskInput[];
    createMany?: agent_taskCreateManyTaskInputEnvelope;
    set?: agent_taskWhereUniqueInput | agent_taskWhereUniqueInput[];
    disconnect?: agent_taskWhereUniqueInput | agent_taskWhereUniqueInput[];
    delete?: agent_taskWhereUniqueInput | agent_taskWhereUniqueInput[];
    connect?: agent_taskWhereUniqueInput | agent_taskWhereUniqueInput[];
    update?: agent_taskUpdateWithWhereUniqueWithoutTaskInput | agent_taskUpdateWithWhereUniqueWithoutTaskInput[];
    updateMany?: agent_taskUpdateManyWithWhereWithoutTaskInput | agent_taskUpdateManyWithWhereWithoutTaskInput[];
    deleteMany?: agent_taskScalarWhereInput | agent_taskScalarWhereInput[];
  };

  export type goalCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<goalCreateWithoutUserInput, goalUncheckedCreateWithoutUserInput>
      | goalCreateWithoutUserInput[]
      | goalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: goalCreateOrConnectWithoutUserInput | goalCreateOrConnectWithoutUserInput[];
    createMany?: goalCreateManyUserInputEnvelope;
    connect?: goalWhereUniqueInput | goalWhereUniqueInput[];
  };

  export type organizationCreateNestedOneWithoutUserInput = {
    create?: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput;
    connect?: organizationWhereUniqueInput;
  };

  export type goalUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<goalCreateWithoutUserInput, goalUncheckedCreateWithoutUserInput>
      | goalCreateWithoutUserInput[]
      | goalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: goalCreateOrConnectWithoutUserInput | goalCreateOrConnectWithoutUserInput[];
    createMany?: goalCreateManyUserInputEnvelope;
    connect?: goalWhereUniqueInput | goalWhereUniqueInput[];
  };

  export type goalUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<goalCreateWithoutUserInput, goalUncheckedCreateWithoutUserInput>
      | goalCreateWithoutUserInput[]
      | goalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: goalCreateOrConnectWithoutUserInput | goalCreateOrConnectWithoutUserInput[];
    upsert?: goalUpsertWithWhereUniqueWithoutUserInput | goalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: goalCreateManyUserInputEnvelope;
    set?: goalWhereUniqueInput | goalWhereUniqueInput[];
    disconnect?: goalWhereUniqueInput | goalWhereUniqueInput[];
    delete?: goalWhereUniqueInput | goalWhereUniqueInput[];
    connect?: goalWhereUniqueInput | goalWhereUniqueInput[];
    update?: goalUpdateWithWhereUniqueWithoutUserInput | goalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: goalUpdateManyWithWhereWithoutUserInput | goalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: goalScalarWhereInput | goalScalarWhereInput[];
  };

  export type organizationUpdateOneWithoutUserNestedInput = {
    create?: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
    connectOrCreate?: organizationCreateOrConnectWithoutUserInput;
    upsert?: organizationUpsertWithoutUserInput;
    disconnect?: organizationWhereInput | boolean;
    delete?: organizationWhereInput | boolean;
    connect?: organizationWhereUniqueInput;
    update?: XOR<
      XOR<organizationUpdateToOneWithWhereWithoutUserInput, organizationUpdateWithoutUserInput>,
      organizationUncheckedUpdateWithoutUserInput
    >;
  };

  export type goalUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<goalCreateWithoutUserInput, goalUncheckedCreateWithoutUserInput>
      | goalCreateWithoutUserInput[]
      | goalUncheckedCreateWithoutUserInput[];
    connectOrCreate?: goalCreateOrConnectWithoutUserInput | goalCreateOrConnectWithoutUserInput[];
    upsert?: goalUpsertWithWhereUniqueWithoutUserInput | goalUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: goalCreateManyUserInputEnvelope;
    set?: goalWhereUniqueInput | goalWhereUniqueInput[];
    disconnect?: goalWhereUniqueInput | goalWhereUniqueInput[];
    delete?: goalWhereUniqueInput | goalWhereUniqueInput[];
    connect?: goalWhereUniqueInput | goalWhereUniqueInput[];
    update?: goalUpdateWithWhereUniqueWithoutUserInput | goalUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: goalUpdateManyWithWhereWithoutUserInput | goalUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: goalScalarWhereInput | goalScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolFilter<$PrismaModel> | boolean;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>;
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedBoolFilter<$PrismaModel>;
    _max?: NestedBoolFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null;
  };

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null;
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedBoolNullableFilter<$PrismaModel>;
    _max?: NestedBoolNullableFilter<$PrismaModel>;
  };

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type intelligent_agentCreateWithoutAgent_taskInput = {
    id?: string;
    name: string;
    description?: string | null;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type intelligent_agentUncheckedCreateWithoutAgent_taskInput = {
    id?: string;
    name: string;
    description?: string | null;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type intelligent_agentCreateOrConnectWithoutAgent_taskInput = {
    where: intelligent_agentWhereUniqueInput;
    create: XOR<intelligent_agentCreateWithoutAgent_taskInput, intelligent_agentUncheckedCreateWithoutAgent_taskInput>;
  };

  export type taskCreateWithoutAgent_taskInput = {
    id?: string;
    name: string;
    description?: string | null;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    goal: goalCreateNestedOneWithoutTaskInput;
  };

  export type taskUncheckedCreateWithoutAgent_taskInput = {
    id?: string;
    name: string;
    description?: string | null;
    status: string;
    goal_id: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type taskCreateOrConnectWithoutAgent_taskInput = {
    where: taskWhereUniqueInput;
    create: XOR<taskCreateWithoutAgent_taskInput, taskUncheckedCreateWithoutAgent_taskInput>;
  };

  export type intelligent_agentUpsertWithoutAgent_taskInput = {
    update: XOR<intelligent_agentUpdateWithoutAgent_taskInput, intelligent_agentUncheckedUpdateWithoutAgent_taskInput>;
    create: XOR<intelligent_agentCreateWithoutAgent_taskInput, intelligent_agentUncheckedCreateWithoutAgent_taskInput>;
    where?: intelligent_agentWhereInput;
  };

  export type intelligent_agentUpdateToOneWithWhereWithoutAgent_taskInput = {
    where?: intelligent_agentWhereInput;
    data: XOR<intelligent_agentUpdateWithoutAgent_taskInput, intelligent_agentUncheckedUpdateWithoutAgent_taskInput>;
  };

  export type intelligent_agentUpdateWithoutAgent_taskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type intelligent_agentUncheckedUpdateWithoutAgent_taskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type taskUpsertWithoutAgent_taskInput = {
    update: XOR<taskUpdateWithoutAgent_taskInput, taskUncheckedUpdateWithoutAgent_taskInput>;
    create: XOR<taskCreateWithoutAgent_taskInput, taskUncheckedCreateWithoutAgent_taskInput>;
    where?: taskWhereInput;
  };

  export type taskUpdateToOneWithWhereWithoutAgent_taskInput = {
    where?: taskWhereInput;
    data: XOR<taskUpdateWithoutAgent_taskInput, taskUncheckedUpdateWithoutAgent_taskInput>;
  };

  export type taskUpdateWithoutAgent_taskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    goal?: goalUpdateOneRequiredWithoutTaskNestedInput;
  };

  export type taskUncheckedUpdateWithoutAgent_taskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    goal_id?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateWithoutGoalInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    organization?: organizationCreateNestedOneWithoutUserInput;
  };

  export type userUncheckedCreateWithoutGoalInput = {
    id?: string;
    email: string;
    organization_id?: string | null;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userCreateOrConnectWithoutGoalInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutGoalInput, userUncheckedCreateWithoutGoalInput>;
  };

  export type taskCreateWithoutGoalInput = {
    id?: string;
    name: string;
    description?: string | null;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    agent_task?: agent_taskCreateNestedManyWithoutTaskInput;
  };

  export type taskUncheckedCreateWithoutGoalInput = {
    id?: string;
    name: string;
    description?: string | null;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    agent_task?: agent_taskUncheckedCreateNestedManyWithoutTaskInput;
  };

  export type taskCreateOrConnectWithoutGoalInput = {
    where: taskWhereUniqueInput;
    create: XOR<taskCreateWithoutGoalInput, taskUncheckedCreateWithoutGoalInput>;
  };

  export type taskCreateManyGoalInputEnvelope = {
    data: taskCreateManyGoalInput | taskCreateManyGoalInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithoutGoalInput = {
    update: XOR<userUpdateWithoutGoalInput, userUncheckedUpdateWithoutGoalInput>;
    create: XOR<userCreateWithoutGoalInput, userUncheckedCreateWithoutGoalInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutGoalInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutGoalInput, userUncheckedUpdateWithoutGoalInput>;
  };

  export type userUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    organization?: organizationUpdateOneWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    organization_id?: NullableStringFieldUpdateOperationsInput | string | null;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type taskUpsertWithWhereUniqueWithoutGoalInput = {
    where: taskWhereUniqueInput;
    update: XOR<taskUpdateWithoutGoalInput, taskUncheckedUpdateWithoutGoalInput>;
    create: XOR<taskCreateWithoutGoalInput, taskUncheckedCreateWithoutGoalInput>;
  };

  export type taskUpdateWithWhereUniqueWithoutGoalInput = {
    where: taskWhereUniqueInput;
    data: XOR<taskUpdateWithoutGoalInput, taskUncheckedUpdateWithoutGoalInput>;
  };

  export type taskUpdateManyWithWhereWithoutGoalInput = {
    where: taskScalarWhereInput;
    data: XOR<taskUpdateManyMutationInput, taskUncheckedUpdateManyWithoutGoalInput>;
  };

  export type taskScalarWhereInput = {
    AND?: taskScalarWhereInput | taskScalarWhereInput[];
    OR?: taskScalarWhereInput[];
    NOT?: taskScalarWhereInput | taskScalarWhereInput[];
    id?: UuidFilter<'task'> | string;
    name?: StringFilter<'task'> | string;
    description?: StringNullableFilter<'task'> | string | null;
    status?: StringFilter<'task'> | string;
    goal_id?: UuidFilter<'task'> | string;
    is_active?: BoolFilter<'task'> | boolean;
    created_at?: DateTimeFilter<'task'> | Date | string;
    updated_at?: DateTimeFilter<'task'> | Date | string;
  };

  export type agent_taskCreateWithoutIntelligent_agentInput = {
    id?: string;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    task: taskCreateNestedOneWithoutAgent_taskInput;
  };

  export type agent_taskUncheckedCreateWithoutIntelligent_agentInput = {
    id?: string;
    task_id: string;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type agent_taskCreateOrConnectWithoutIntelligent_agentInput = {
    where: agent_taskWhereUniqueInput;
    create: XOR<agent_taskCreateWithoutIntelligent_agentInput, agent_taskUncheckedCreateWithoutIntelligent_agentInput>;
  };

  export type agent_taskCreateManyIntelligent_agentInputEnvelope = {
    data: agent_taskCreateManyIntelligent_agentInput | agent_taskCreateManyIntelligent_agentInput[];
    skipDuplicates?: boolean;
  };

  export type agent_taskUpsertWithWhereUniqueWithoutIntelligent_agentInput = {
    where: agent_taskWhereUniqueInput;
    update: XOR<agent_taskUpdateWithoutIntelligent_agentInput, agent_taskUncheckedUpdateWithoutIntelligent_agentInput>;
    create: XOR<agent_taskCreateWithoutIntelligent_agentInput, agent_taskUncheckedCreateWithoutIntelligent_agentInput>;
  };

  export type agent_taskUpdateWithWhereUniqueWithoutIntelligent_agentInput = {
    where: agent_taskWhereUniqueInput;
    data: XOR<agent_taskUpdateWithoutIntelligent_agentInput, agent_taskUncheckedUpdateWithoutIntelligent_agentInput>;
  };

  export type agent_taskUpdateManyWithWhereWithoutIntelligent_agentInput = {
    where: agent_taskScalarWhereInput;
    data: XOR<agent_taskUpdateManyMutationInput, agent_taskUncheckedUpdateManyWithoutIntelligent_agentInput>;
  };

  export type agent_taskScalarWhereInput = {
    AND?: agent_taskScalarWhereInput | agent_taskScalarWhereInput[];
    OR?: agent_taskScalarWhereInput[];
    NOT?: agent_taskScalarWhereInput | agent_taskScalarWhereInput[];
    id?: UuidFilter<'agent_task'> | string;
    task_id?: UuidFilter<'agent_task'> | string;
    agent_id?: UuidFilter<'agent_task'> | string;
    status?: StringFilter<'agent_task'> | string;
    is_active?: BoolFilter<'agent_task'> | boolean;
    created_at?: DateTimeFilter<'agent_task'> | Date | string;
    updated_at?: DateTimeFilter<'agent_task'> | Date | string;
  };

  export type userCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    goal?: goalCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOrganizationInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    goal?: goalUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
  };

  export type userCreateManyOrganizationInputEnvelope = {
    data: userCreateManyOrganizationInput | userCreateManyOrganizationInput[];
    skipDuplicates?: boolean;
  };

  export type userUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    update: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
    create: XOR<userCreateWithoutOrganizationInput, userUncheckedCreateWithoutOrganizationInput>;
  };

  export type userUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: userWhereUniqueInput;
    data: XOR<userUpdateWithoutOrganizationInput, userUncheckedUpdateWithoutOrganizationInput>;
  };

  export type userUpdateManyWithWhereWithoutOrganizationInput = {
    where: userScalarWhereInput;
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyWithoutOrganizationInput>;
  };

  export type userScalarWhereInput = {
    AND?: userScalarWhereInput | userScalarWhereInput[];
    OR?: userScalarWhereInput[];
    NOT?: userScalarWhereInput | userScalarWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    organization_id?: UuidNullableFilter<'user'> | string | null;
    first_name?: StringNullableFilter<'user'> | string | null;
    last_name?: StringNullableFilter<'user'> | string | null;
    locale?: StringNullableFilter<'user'> | string | null;
    timezone?: StringNullableFilter<'user'> | string | null;
    avatar_url?: StringNullableFilter<'user'> | string | null;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
  };

  export type agent_taskCreateWithoutTaskInput = {
    id?: string;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    intelligent_agent: intelligent_agentCreateNestedOneWithoutAgent_taskInput;
  };

  export type agent_taskUncheckedCreateWithoutTaskInput = {
    id?: string;
    agent_id: string;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type agent_taskCreateOrConnectWithoutTaskInput = {
    where: agent_taskWhereUniqueInput;
    create: XOR<agent_taskCreateWithoutTaskInput, agent_taskUncheckedCreateWithoutTaskInput>;
  };

  export type agent_taskCreateManyTaskInputEnvelope = {
    data: agent_taskCreateManyTaskInput | agent_taskCreateManyTaskInput[];
    skipDuplicates?: boolean;
  };

  export type goalCreateWithoutTaskInput = {
    id?: string;
    name: string;
    description?: string | null;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutGoalInput;
  };

  export type goalUncheckedCreateWithoutTaskInput = {
    id?: string;
    name: string;
    description?: string | null;
    status: string;
    user_id: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type goalCreateOrConnectWithoutTaskInput = {
    where: goalWhereUniqueInput;
    create: XOR<goalCreateWithoutTaskInput, goalUncheckedCreateWithoutTaskInput>;
  };

  export type agent_taskUpsertWithWhereUniqueWithoutTaskInput = {
    where: agent_taskWhereUniqueInput;
    update: XOR<agent_taskUpdateWithoutTaskInput, agent_taskUncheckedUpdateWithoutTaskInput>;
    create: XOR<agent_taskCreateWithoutTaskInput, agent_taskUncheckedCreateWithoutTaskInput>;
  };

  export type agent_taskUpdateWithWhereUniqueWithoutTaskInput = {
    where: agent_taskWhereUniqueInput;
    data: XOR<agent_taskUpdateWithoutTaskInput, agent_taskUncheckedUpdateWithoutTaskInput>;
  };

  export type agent_taskUpdateManyWithWhereWithoutTaskInput = {
    where: agent_taskScalarWhereInput;
    data: XOR<agent_taskUpdateManyMutationInput, agent_taskUncheckedUpdateManyWithoutTaskInput>;
  };

  export type goalUpsertWithoutTaskInput = {
    update: XOR<goalUpdateWithoutTaskInput, goalUncheckedUpdateWithoutTaskInput>;
    create: XOR<goalCreateWithoutTaskInput, goalUncheckedCreateWithoutTaskInput>;
    where?: goalWhereInput;
  };

  export type goalUpdateToOneWithWhereWithoutTaskInput = {
    where?: goalWhereInput;
    data: XOR<goalUpdateWithoutTaskInput, goalUncheckedUpdateWithoutTaskInput>;
  };

  export type goalUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutGoalNestedInput;
  };

  export type goalUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type goalCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    task?: taskCreateNestedManyWithoutGoalInput;
  };

  export type goalUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    task?: taskUncheckedCreateNestedManyWithoutGoalInput;
  };

  export type goalCreateOrConnectWithoutUserInput = {
    where: goalWhereUniqueInput;
    create: XOR<goalCreateWithoutUserInput, goalUncheckedCreateWithoutUserInput>;
  };

  export type goalCreateManyUserInputEnvelope = {
    data: goalCreateManyUserInput | goalCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type organizationCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    is_active?: boolean | null;
    organization_type?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    is_active?: boolean | null;
    organization_type?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type organizationCreateOrConnectWithoutUserInput = {
    where: organizationWhereUniqueInput;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
  };

  export type goalUpsertWithWhereUniqueWithoutUserInput = {
    where: goalWhereUniqueInput;
    update: XOR<goalUpdateWithoutUserInput, goalUncheckedUpdateWithoutUserInput>;
    create: XOR<goalCreateWithoutUserInput, goalUncheckedCreateWithoutUserInput>;
  };

  export type goalUpdateWithWhereUniqueWithoutUserInput = {
    where: goalWhereUniqueInput;
    data: XOR<goalUpdateWithoutUserInput, goalUncheckedUpdateWithoutUserInput>;
  };

  export type goalUpdateManyWithWhereWithoutUserInput = {
    where: goalScalarWhereInput;
    data: XOR<goalUpdateManyMutationInput, goalUncheckedUpdateManyWithoutUserInput>;
  };

  export type goalScalarWhereInput = {
    AND?: goalScalarWhereInput | goalScalarWhereInput[];
    OR?: goalScalarWhereInput[];
    NOT?: goalScalarWhereInput | goalScalarWhereInput[];
    id?: UuidFilter<'goal'> | string;
    name?: StringFilter<'goal'> | string;
    description?: StringNullableFilter<'goal'> | string | null;
    status?: StringFilter<'goal'> | string;
    user_id?: UuidFilter<'goal'> | string;
    is_active?: BoolFilter<'goal'> | boolean;
    created_at?: DateTimeFilter<'goal'> | Date | string;
    updated_at?: DateTimeFilter<'goal'> | Date | string;
  };

  export type organizationUpsertWithoutUserInput = {
    update: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
    create: XOR<organizationCreateWithoutUserInput, organizationUncheckedCreateWithoutUserInput>;
    where?: organizationWhereInput;
  };

  export type organizationUpdateToOneWithWhereWithoutUserInput = {
    where?: organizationWhereInput;
    data: XOR<organizationUpdateWithoutUserInput, organizationUncheckedUpdateWithoutUserInput>;
  };

  export type organizationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    organization_type?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type organizationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null;
    organization_type?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type taskCreateManyGoalInput = {
    id?: string;
    name: string;
    description?: string | null;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type taskUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    agent_task?: agent_taskUpdateManyWithoutTaskNestedInput;
  };

  export type taskUncheckedUpdateWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    agent_task?: agent_taskUncheckedUpdateManyWithoutTaskNestedInput;
  };

  export type taskUncheckedUpdateManyWithoutGoalInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type agent_taskCreateManyIntelligent_agentInput = {
    id?: string;
    task_id: string;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type agent_taskUpdateWithoutIntelligent_agentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    task?: taskUpdateOneRequiredWithoutAgent_taskNestedInput;
  };

  export type agent_taskUncheckedUpdateWithoutIntelligent_agentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    task_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type agent_taskUncheckedUpdateManyWithoutIntelligent_agentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    task_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateManyOrganizationInput = {
    id?: string;
    email: string;
    first_name?: string | null;
    last_name?: string | null;
    locale?: string | null;
    timezone?: string | null;
    avatar_url?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    goal?: goalUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    goal?: goalUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    first_name?: NullableStringFieldUpdateOperationsInput | string | null;
    last_name?: NullableStringFieldUpdateOperationsInput | string | null;
    locale?: NullableStringFieldUpdateOperationsInput | string | null;
    timezone?: NullableStringFieldUpdateOperationsInput | string | null;
    avatar_url?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type agent_taskCreateManyTaskInput = {
    id?: string;
    agent_id: string;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type agent_taskUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    intelligent_agent?: intelligent_agentUpdateOneRequiredWithoutAgent_taskNestedInput;
  };

  export type agent_taskUncheckedUpdateWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    agent_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type agent_taskUncheckedUpdateManyWithoutTaskInput = {
    id?: StringFieldUpdateOperationsInput | string;
    agent_id?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type goalCreateManyUserInput = {
    id?: string;
    name: string;
    description?: string | null;
    status: string;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type goalUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    task?: taskUpdateManyWithoutGoalNestedInput;
  };

  export type goalUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    task?: taskUncheckedUpdateManyWithoutGoalNestedInput;
  };

  export type goalUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    status?: StringFieldUpdateOperationsInput | string;
    is_active?: BoolFieldUpdateOperationsInput | boolean;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use GoalCountOutputTypeDefaultArgs instead
   */
  export type GoalCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    GoalCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use Intelligent_agentCountOutputTypeDefaultArgs instead
   */
  export type Intelligent_agentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Intelligent_agentCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use OrganizationCountOutputTypeDefaultArgs instead
   */
  export type OrganizationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    OrganizationCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TaskCountOutputTypeDefaultArgs instead
   */
  export type TaskCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    TaskCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use agent_deploymentDefaultArgs instead
   */
  export type agent_deploymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    agent_deploymentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use agent_taskDefaultArgs instead
   */
  export type agent_taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    agent_taskDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use goalDefaultArgs instead
   */
  export type goalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = goalDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use intelligent_agentDefaultArgs instead
   */
  export type intelligent_agentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    intelligent_agentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use organizationDefaultArgs instead
   */
  export type organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    organizationDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use taskDefaultArgs instead
   */
  export type taskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = taskDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
