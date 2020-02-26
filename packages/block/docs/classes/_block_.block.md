[ethereumjs-block](../README.md) › ["block"](../modules/_block_.md) › [Block](_block_.block.md)

# Class: Block

An object that represents the block

## Hierarchy

* **Block**

## Index

### Constructors

* [constructor](_block_.block.md#constructor)

### Properties

* [header](_block_.block.md#header)
* [transactions](_block_.block.md#transactions)
* [txTrie](_block_.block.md#txtrie)
* [uncleHeaders](_block_.block.md#uncleheaders)

### Accessors

* [raw](_block_.block.md#raw)

### Methods

* [genTxTrie](_block_.block.md#gentxtrie)
* [hash](_block_.block.md#hash)
* [isGenesis](_block_.block.md#isgenesis)
* [serialize](_block_.block.md#serialize)
* [setGenesisParams](_block_.block.md#setgenesisparams)
* [toJSON](_block_.block.md#tojson)
* [validate](_block_.block.md#validate)
* [validateTransactions](_block_.block.md#validatetransactions)
* [validateTransactionsTrie](_block_.block.md#validatetransactionstrie)
* [validateUncles](_block_.block.md#validateuncles)
* [validateUnclesHash](_block_.block.md#validateuncleshash)

## Constructors

###  constructor

\+ **new Block**(`data`: Buffer | [Buffer[], Buffer[], Buffer[]] | [BlockData](../interfaces/_index_.blockdata.md), `opts`: [ChainOptions](../interfaces/_index_.chainoptions.md)): *[Block](_block_.block.md)*

*Defined in [block.ts:20](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/block.ts#L20)*

Creates a new block object

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`data` | Buffer &#124; [Buffer[], Buffer[], Buffer[]] &#124; [BlockData](../interfaces/_index_.blockdata.md) | {} | The block's data. |
`opts` | [ChainOptions](../interfaces/_index_.chainoptions.md) | {} | The network options for this block, and its header, uncle headers and txs.  |

**Returns:** *[Block](_block_.block.md)*

## Properties

###  header

• **header**: *[BlockHeader](_header_.blockheader.md)*

*Defined in [block.ts:15](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/block.ts#L15)*

___

###  transactions

• **transactions**: *Transaction[]* = []

*Defined in [block.ts:16](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/block.ts#L16)*

___

###  txTrie

• **txTrie**: *any* = new Trie()

*Defined in [block.ts:18](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/block.ts#L18)*

___

###  uncleHeaders

• **uncleHeaders**: *[BlockHeader](_header_.blockheader.md)[]* = []

*Defined in [block.ts:17](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/block.ts#L17)*

## Accessors

###  raw

• **get raw**(): *[Buffer[], Buffer[], Buffer[]]*

*Defined in [block.ts:82](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/block.ts#L82)*

**Returns:** *[Buffer[], Buffer[], Buffer[]]*

## Methods

###  genTxTrie

▸ **genTxTrie**(): *Promise‹void›*

*Defined in [block.ts:131](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/block.ts#L131)*

Generate transaction trie. The tx trie must be generated before the transaction trie can
be validated with `validateTransactionTrie`

**Returns:** *Promise‹void›*

___

###  hash

▸ **hash**(): *Buffer*

*Defined in [block.ts:89](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/block.ts#L89)*

Produces a hash the RLP of the block

**Returns:** *Buffer*

___

###  isGenesis

▸ **isGenesis**(): *boolean*

*Defined in [block.ts:96](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/block.ts#L96)*

Determines if this block is the genesis block

**Returns:** *boolean*

___

###  serialize

▸ **serialize**(): *Buffer*

*Defined in [block.ts:114](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/block.ts#L114)*

Produces a serialization of the block.

**Returns:** *Buffer*

▸ **serialize**(`rlpEncode`: true): *Buffer*

*Defined in [block.ts:115](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/block.ts#L115)*

**Parameters:**

Name | Type |
------ | ------ |
`rlpEncode` | true |

**Returns:** *Buffer*

▸ **serialize**(`rlpEncode`: false): *[Buffer[], Buffer[], Buffer[]]*

*Defined in [block.ts:116](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/block.ts#L116)*

**Parameters:**

Name | Type |
------ | ------ |
`rlpEncode` | false |

**Returns:** *[Buffer[], Buffer[], Buffer[]]*

___

###  setGenesisParams

▸ **setGenesisParams**(): *void*

*Defined in [block.ts:103](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/block.ts#L103)*

Turns the block into the canonical genesis block

**Returns:** *void*

___

###  toJSON

▸ **toJSON**(`labeled`: boolean): *any*

*Defined in [block.ts:238](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/block.ts#L238)*

Returns the block in JSON format

**`see`** [ethereumjs-util](https://github.com/ethereumjs/ethereumjs-util/blob/master/docs/index.md#defineproperties)

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`labeled` | boolean | false |

**Returns:** *any*

___

###  validate

▸ **validate**(`blockChain`: [Blockchain](../interfaces/_index_.blockchain.md)): *Promise‹void›*

*Defined in [block.ts:180](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/block.ts#L180)*

Validates the entire block, throwing if invalid.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`blockChain` | [Blockchain](../interfaces/_index_.blockchain.md) | the blockchain that this block wants to be part of  |

**Returns:** *Promise‹void›*

___

###  validateTransactions

▸ **validateTransactions**(): *boolean*

*Defined in [block.ts:155](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/block.ts#L155)*

Validates the transactions

**Returns:** *boolean*

▸ **validateTransactions**(`stringError`: false): *boolean*

*Defined in [block.ts:156](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/block.ts#L156)*

**Parameters:**

Name | Type |
------ | ------ |
`stringError` | false |

**Returns:** *boolean*

▸ **validateTransactions**(`stringError`: true): *string*

*Defined in [block.ts:157](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/block.ts#L157)*

**Parameters:**

Name | Type |
------ | ------ |
`stringError` | true |

**Returns:** *string*

___

###  validateTransactionsTrie

▸ **validateTransactionsTrie**(): *boolean*

*Defined in [block.ts:141](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/block.ts#L141)*

Validates the transaction trie

**Returns:** *boolean*

___

###  validateUncles

▸ **validateUncles**(`blockchain`: [Blockchain](../interfaces/_index_.blockchain.md)): *Promise‹void›*

*Defined in [block.ts:215](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/block.ts#L215)*

Validates the uncles that are in the block, if any. This method throws if they are invalid.

**Parameters:**

Name | Type |
------ | ------ |
`blockchain` | [Blockchain](../interfaces/_index_.blockchain.md) |

**Returns:** *Promise‹void›*

___

###  validateUnclesHash

▸ **validateUnclesHash**(): *boolean*

*Defined in [block.ts:204](https://github.com/ethereumjs/ethereumjs-vm/blob/master/packages/block/src/block.ts#L204)*

Validates the uncle's hash

**Returns:** *boolean*
