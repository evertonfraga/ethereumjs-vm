[ethereumjs-block](../README.md) > [Block](../classes/block.md)

# Class: Block

## Hierarchy

**Block**

## Index

### Constructors

- [constructor](block.md#constructor)

### Properties

- [\_common](block.md#_common)
- [header](block.md#header)
- [transactions](block.md#transactions)
- [txTrie](block.md#txtrie)
- [uncleHeaders](block.md#uncleheaders)

### Accessors

- [raw](block.md#raw)

### Methods

- [\_putTxInTrie](block.md#_puttxintrie)
- [\_validateUncleHeader](block.md#_validateuncleheader)
- [genTxTrie](block.md#gentxtrie)
- [hash](block.md#hash)
- [isGenesis](block.md#isgenesis)
- [serialize](block.md#serialize)
- [setGenesisParams](block.md#setgenesisparams)
- [toJSON](block.md#tojson)
- [validate](block.md#validate)
- [validateTransactions](block.md#validatetransactions)
- [validateTransactionsTrie](block.md#validatetransactionstrie)
- [validateUncles](block.md#validateuncles)
- [validateUnclesHash](block.md#validateuncleshash)

---

## Constructors

<a id="constructor"></a>

### constructor

⊕ **new Block**(data?: _`Buffer` \| [`Buffer`[], `Buffer`[], `Buffer`[]] \| [BlockData](../interfaces/blockdata.md)_, opts?: _[ChainOptions](../interfaces/chainoptions.md)_): [Block](block.md)

_Defined in [block.ts:20](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L20)_

**Parameters:**

| Name                 | Type                                                                                        | Default value | Description                                                                |
| -------------------- | ------------------------------------------------------------------------------------------- | ------------- | -------------------------------------------------------------------------- |
| `Default value` data | `Buffer` \| [`Buffer`[], `Buffer`[], `Buffer`[]] \| [BlockData](../interfaces/blockdata.md) | {}            | The block's data.                                                          |
| `Default value` opts | [ChainOptions](../interfaces/chainoptions.md)                                               | {}            | The network options for this block, and its header, uncle headers and txs. |

**Returns:** [Block](block.md)

---

## Properties

<a id="_common"></a>

### `<Private>` \_common

**● \_common**: _`Common`_

_Defined in [block.ts:20](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L20)_

---

<a id="header"></a>

### header

**● header**: _[BlockHeader](blockheader.md)_

_Defined in [block.ts:15](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L15)_

---

<a id="transactions"></a>

### transactions

**● transactions**: _`Transaction`[]_ = []

_Defined in [block.ts:16](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L16)_

---

<a id="txtrie"></a>

### txTrie

**● txTrie**: _`any`_ = new Trie()

_Defined in [block.ts:18](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L18)_

---

<a id="uncleheaders"></a>

### uncleHeaders

**● uncleHeaders**: _[BlockHeader](blockheader.md)[]_ = []

_Defined in [block.ts:17](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L17)_

---

## Accessors

<a id="raw"></a>

### raw

**raw**:

_Defined in [block.ts:82](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L82)_

---

## Methods

<a id="_puttxintrie"></a>

### `<Private>` \_putTxInTrie

▸ **\_putTxInTrie**(txIndex: _`number`_, tx: _`Transaction`_): `Promise`<`void`>

_Defined in [block.ts:250](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L250)_

**Parameters:**

| Name    | Type          |
| ------- | ------------- |
| txIndex | `number`      |
| tx      | `Transaction` |

**Returns:** `Promise`<`void`>

---

<a id="_validateuncleheader"></a>

### `<Private>` \_validateUncleHeader

▸ **\_validateUncleHeader**(uncleHeader: _[BlockHeader](blockheader.md)_, blockchain: _[Blockchain](../interfaces/blockchain.md)_): `Promise`<`void`>

_Defined in [block.ts:262](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L262)_

**Parameters:**

| Name        | Type                                      |
| ----------- | ----------------------------------------- |
| uncleHeader | [BlockHeader](blockheader.md)             |
| blockchain  | [Blockchain](../interfaces/blockchain.md) |

**Returns:** `Promise`<`void`>

---

<a id="gentxtrie"></a>

### genTxTrie

▸ **genTxTrie**(): `Promise`<`void`>

_Defined in [block.ts:131](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L131)_

**Returns:** `Promise`<`void`>

---

<a id="hash"></a>

### hash

▸ **hash**(): `Buffer`

_Defined in [block.ts:89](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L89)_

**Returns:** `Buffer`

---

<a id="isgenesis"></a>

### isGenesis

▸ **isGenesis**(): `boolean`

_Defined in [block.ts:96](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L96)_

**Returns:** `boolean`

---

<a id="serialize"></a>

### serialize

▸ **serialize**(): `Buffer`

▸ **serialize**(rlpEncode: _`true`_): `Buffer`

▸ **serialize**(rlpEncode: _`false`_): [`Buffer`[], `Buffer`[], `Buffer`[]]

_Defined in [block.ts:114](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L114)_

**Returns:** `Buffer`

_Defined in [block.ts:115](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L115)_

**Parameters:**

| Name      | Type   |
| --------- | ------ |
| rlpEncode | `true` |

**Returns:** `Buffer`

_Defined in [block.ts:116](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L116)_

**Parameters:**

| Name      | Type    |
| --------- | ------- |
| rlpEncode | `false` |

**Returns:** [`Buffer`[], `Buffer`[], `Buffer`[]]

---

<a id="setgenesisparams"></a>

### setGenesisParams

▸ **setGenesisParams**(): `void`

_Defined in [block.ts:103](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L103)_

**Returns:** `void`

---

<a id="tojson"></a>

### toJSON

▸ **toJSON**(labeled?: _`boolean`_): `any`

_Defined in [block.ts:238](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L238)_

**Parameters:**

| Name                    | Type      | Default value |
| ----------------------- | --------- | ------------- |
| `Default value` labeled | `boolean` | false         |

**Returns:** `any`

---

<a id="validate"></a>

### validate

▸ **validate**(blockChain: _[Blockchain](../interfaces/blockchain.md)_): `Promise`<`void`>

_Defined in [block.ts:180](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L180)_

**Parameters:**

| Name       | Type                                      | Description                                        |
| ---------- | ----------------------------------------- | -------------------------------------------------- |
| blockChain | [Blockchain](../interfaces/blockchain.md) | the blockchain that this block wants to be part of |

**Returns:** `Promise`<`void`>

---

<a id="validatetransactions"></a>

### validateTransactions

▸ **validateTransactions**(): `boolean`

▸ **validateTransactions**(stringError: _`false`_): `boolean`

▸ **validateTransactions**(stringError: _`true`_): `string`

_Defined in [block.ts:155](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L155)_

**Returns:** `boolean`

_Defined in [block.ts:156](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L156)_

**Parameters:**

| Name        | Type    |
| ----------- | ------- |
| stringError | `false` |

**Returns:** `boolean`

_Defined in [block.ts:157](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L157)_

**Parameters:**

| Name        | Type   |
| ----------- | ------ |
| stringError | `true` |

**Returns:** `string`

---

<a id="validatetransactionstrie"></a>

### validateTransactionsTrie

▸ **validateTransactionsTrie**(): `boolean`

_Defined in [block.ts:141](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L141)_

**Returns:** `boolean`

---

<a id="validateuncles"></a>

### validateUncles

▸ **validateUncles**(blockchain: _[Blockchain](../interfaces/blockchain.md)_): `Promise`<`void`>

_Defined in [block.ts:215](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L215)_

**Parameters:**

| Name       | Type                                      |
| ---------- | ----------------------------------------- |
| blockchain | [Blockchain](../interfaces/blockchain.md) |

**Returns:** `Promise`<`void`>

---

<a id="validateuncleshash"></a>

### validateUnclesHash

▸ **validateUnclesHash**(): `boolean`

_Defined in [block.ts:204](https://github.com/ethereumjs/ethereumjs-vm/blob/b6ba20a/packages/block/src/block.ts#L204)_

**Returns:** `boolean`

---
